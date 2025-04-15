/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { g as getEntry, r as renderEntry, c as config, $ as $$Base, m as markdownify } from '../chunks/_astro_content_CGhUYxn0.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("pages", "404");
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": entry.data.title + config.site.titleDelimiter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="flex h-[40vh] items-center justify-center"> <div class="text-center"> <h1 class="mb-4">${unescapeHTML(markdownify(entry.data.title))}</h1> ${renderComponent($$result2, "Content", Content, {})} </div> </div> </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/404.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
