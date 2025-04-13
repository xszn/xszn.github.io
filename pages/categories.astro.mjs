/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { $ as $$Base, h as humanize, c as config } from '../chunks/_astro_content_DxdUGNXu.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_DK1Jpn_n.mjs';
import { BiCategoryAlt } from 'react-icons/bi';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const categories = await getTaxonomy("posts", "categories");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u5206\u7C7B" + config.site.titleDelimiter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">分类</h1> <ul class="space-x-4"> ${categories.map((category) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${category}`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group mb-4"> ${renderComponent($$result2, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 text-primary group-hover:text-white transition h-6 w-6 scale-75" })} ${humanize(category || "")} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/index.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/index.astro";
const $$url = "/categories";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
