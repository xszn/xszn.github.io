import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import { a as $$Image, m as markdownify } from './_astro_content_C56GEhFt.mjs';
import '@astrojs/internal-helpers/path';
import { BsArrowRightCircle } from 'react-icons/bs';

const $$Astro = createAstro("https://xszn.org/");
const $$Authors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Authors;
  const { authors } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row justify-center"> ${authors.map((author) => renderTemplate`<div class="col-12 mb-8 sm:col-6 md:col-4"> ${author.data.image && renderTemplate`<div class="mb-4"> ${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 150, "width": 150, "class": "mx-auto rounded-lg" })} </div>`} <h3 class="h4 mt-8 mb-3"> <a${addAttribute(`/authors/${author.id}`, "href")} class="block hover:text-primary transition duration-200"> ${author.data.title} </a> </h3> ${author.body && renderTemplate`<p class="mb-3">${markdownify(author.body.slice(0, 100))}</p>`} <a${addAttribute(`/authors/${author.id}`, "href")} class="inline-flex items-center text-primary transition duration-200 hover:opacity-70">
阅读更多 ${renderComponent($$result, "BsArrowRightCircle", BsArrowRightCircle, { "className": "inline ml-2" })} </a> </div>`)} </div>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Authors.astro", void 0);

export { $$Authors as $ };
