import React, { createElement } from 'react';
import ReactDOM from 'react-dom/server';
import { w as renderJSX, x as createVNode, y as AstroJSX, z as AstroUserError } from './chunks/astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import 'clsx';

const contexts = new WeakMap();

const ID_PREFIX = 'r';

function getContext(rendererContextResult) {
	if (contexts.has(rendererContextResult)) {
		return contexts.get(rendererContextResult);
	}
	const ctx = {
		currentIndex: 0,
		get id() {
			return ID_PREFIX + this.currentIndex.toString();
		},
	};
	contexts.set(rendererContextResult, ctx);
	return ctx;
}

function incrementId(rendererContextResult) {
	const ctx = getContext(rendererContextResult);
	const id = ctx.id;
	ctx.currentIndex++;
	return id;
}

/**
 * Astro passes `children` as a string of HTML, so we need
 * a wrapper `div` to render that content as VNodes.
 *
 * As a bonus, we can signal to React that this subtree is
 * entirely static and will never change via `shouldComponentUpdate`.
 */
const StaticHtml = ({ value, name, hydrate = true }) => {
	if (!value) return null;
	const tagName = hydrate ? 'astro-slot' : 'astro-static-slot';
	return createElement(tagName, {
		name,
		suppressHydrationWarning: true,
		dangerouslySetInnerHTML: { __html: value },
	});
};

/**
 * This tells React to opt-out of re-rendering this subtree,
 * In addition to being a performance optimization,
 * this also allows other frameworks to attach to `children`.
 *
 * See https://preactjs.com/guide/v8/external-dom-mutations
 */
StaticHtml.shouldComponentUpdate = () => false;

const slotName$1 = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
const reactTypeof = Symbol.for('react.element');
const reactTransitionalTypeof = Symbol.for('react.transitional.element');

async function check$1(Component, props, children) {
	// Note: there are packages that do some unholy things to create "components".
	// Checking the $$typeof property catches most of these patterns.
	if (typeof Component === 'object') {
		return Component['$$typeof'].toString().slice('Symbol('.length).startsWith('react');
	}
	if (typeof Component !== 'function') return false;
	if (Component.name === 'QwikComponent') return false;

	// Preact forwarded-ref components can be functions, which React does not support
	if (typeof Component === 'function' && Component['$$typeof'] === Symbol.for('react.forward_ref'))
		return false;

	if (Component.prototype != null && typeof Component.prototype.render === 'function') {
		return React.Component.isPrototypeOf(Component) || React.PureComponent.isPrototypeOf(Component);
	}

	let isReactComponent = false;
	function Tester(...args) {
		try {
			const vnode = Component(...args);
			if (
				vnode &&
				(vnode['$$typeof'] === reactTypeof || vnode['$$typeof'] === reactTransitionalTypeof)
			) {
				isReactComponent = true;
			}
		} catch {}

		return React.createElement('div');
	}

	await renderToStaticMarkup$1(Tester, props, children, {});

	return isReactComponent;
}

async function getNodeWritable() {
	let nodeStreamBuiltinModuleName = 'node:stream';
	let { Writable } = await import(/* @vite-ignore */ nodeStreamBuiltinModuleName);
	return Writable;
}

function needsHydration(metadata) {
	// Adjust how this is hydrated only when the version of Astro supports `astroStaticSlot`
	return metadata.astroStaticSlot ? !!metadata.hydrate : true;
}

async function renderToStaticMarkup$1(Component, props, { default: children, ...slotted }, metadata) {
	let prefix;
	if (this && this.result) {
		prefix = incrementId(this.result);
	}
	const attrs = { prefix };

	delete props['class'];
	const slots = {};
	for (const [key, value] of Object.entries(slotted)) {
		const name = slotName$1(key);
		slots[name] = React.createElement(StaticHtml, {
			hydrate: needsHydration(metadata),
			value,
			name,
		});
	}
	// Note: create newProps to avoid mutating `props` before they are serialized
	const newProps = {
		...props,
		...slots,
	};
	const newChildren = children ?? props.children;
	if (newChildren != null) {
		newProps.children = React.createElement(StaticHtml, {
			hydrate: needsHydration(metadata),
			value: newChildren,
		});
	}
	const formState = this ? await getFormState(this) : undefined;
	if (formState) {
		attrs['data-action-result'] = JSON.stringify(formState[0]);
		attrs['data-action-key'] = formState[1];
		attrs['data-action-name'] = formState[2];
	}
	const vnode = React.createElement(Component, newProps);
	const renderOptions = {
		identifierPrefix: prefix,
		formState,
	};
	let html;
	if ('renderToReadableStream' in ReactDOM) {
		html = await renderToReadableStreamAsync(vnode, renderOptions);
	} else {
		html = await renderToPipeableStreamAsync(vnode, renderOptions);
	}
	return { html, attrs };
}

/**
 * @returns {Promise<[actionResult: any, actionKey: string, actionName: string] | undefined>}
 */
async function getFormState({ result }) {
	const { request, actionResult } = result;

	if (!actionResult) return undefined;
	if (!isFormRequest(request.headers.get('content-type'))) return undefined;

	const { searchParams } = new URL(request.url);
	const formData = await request.clone().formData();
	/**
	 * The key generated by React to identify each `useActionState()` call.
	 * @example "k511f74df5a35d32e7cf266450d85cb6c"
	 */
	const actionKey = formData.get('$ACTION_KEY')?.toString();
	/**
	 * The action name returned by an action's `toString()` property.
	 * This matches the endpoint path.
	 * @example "/_actions/blog.like"
	 */
	const actionName = searchParams.get('_action');

	if (!actionKey || !actionName) return undefined;

	return [actionResult, actionKey, actionName];
}

async function renderToPipeableStreamAsync(vnode, options) {
	const Writable = await getNodeWritable();
	let html = '';
	return new Promise((resolve, reject) => {
		let error = undefined;
		let stream = ReactDOM.renderToPipeableStream(vnode, {
			...options,
			onError(err) {
				error = err;
				reject(error);
			},
			onAllReady() {
				stream.pipe(
					new Writable({
						write(chunk, _encoding, callback) {
							html += chunk.toString('utf-8');
							callback();
						},
						destroy() {
							resolve(html);
						},
					}),
				);
			},
		});
	});
}

/**
 * Use a while loop instead of "for await" due to cloudflare and Vercel Edge issues
 * See https://github.com/facebook/react/issues/24169
 */
async function readResult(stream) {
	const reader = stream.getReader();
	let result = '';
	const decoder = new TextDecoder('utf-8');
	while (true) {
		const { done, value } = await reader.read();
		if (done) {
			if (value) {
				result += decoder.decode(value);
			} else {
				// This closes the decoder
				decoder.decode(new Uint8Array());
			}

			return result;
		}
		result += decoder.decode(value, { stream: true });
	}
}

async function renderToReadableStreamAsync(vnode, options) {
	return await readResult(await ReactDOM.renderToReadableStream(vnode, options));
}

const formContentTypes = ['application/x-www-form-urlencoded', 'multipart/form-data'];

function isFormRequest(contentType) {
	// Split off parameters like charset or boundary
	// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Type#content-type_in_html_forms
	const type = contentType?.split(';')[0].toLowerCase();

	return formContentTypes.some((t) => type === t);
}

const _renderer0 = {
	name: '@astrojs/react',
	check: check$1,
	renderToStaticMarkup: renderToStaticMarkup$1,
	supportsAstroStaticSlot: true,
};

const slotName = (str) => str.trim().replace(/[-_]([a-z])/g, (_, w) => w.toUpperCase());
async function check(Component, props, { default: children = null, ...slotted } = {}) {
  if (typeof Component !== "function") return false;
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  try {
    const result = await Component({ ...props, ...slots, children });
    return result[AstroJSX];
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
  }
  return false;
}
async function renderToStaticMarkup(Component, props = {}, { default: children = null, ...slotted } = {}) {
  const slots = {};
  for (const [key, value] of Object.entries(slotted)) {
    const name = slotName(key);
    slots[name] = value;
  }
  const { result } = this;
  try {
    const html = await renderJSX(result, createVNode(Component, { ...props, ...slots, children }));
    return { html };
  } catch (e) {
    throwEnhancedErrorIfMdxComponent(e, Component);
    throw e;
  }
}
function throwEnhancedErrorIfMdxComponent(error, Component) {
  if (Component[Symbol.for("mdx-component")]) {
    if (AstroUserError.is(error)) return;
    error.title = error.name;
    error.hint = `This issue often occurs when your MDX component encounters runtime errors.`;
    throw error;
  }
}
const renderer = {
  name: "astro:jsx",
  check,
  renderToStaticMarkup
};
var server_default = renderer;

const renderers = [Object.assign({"name":"@astrojs/react","clientEntrypoint":"@astrojs/react/client.js","serverEntrypoint":"@astrojs/react/server.js"}, { ssr: _renderer0 }),Object.assign({"name":"astro:jsx","serverEntrypoint":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/@astrojs/mdx/dist/server.js"}, { ssr: server_default }),];

export { renderers };
