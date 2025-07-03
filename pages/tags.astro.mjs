/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import { $ as $$Base, h as humanize, c as config } from '../chunks/_astro_content_BaFZudft.mjs';
import { g as getTaxonomy } from '../chunks/taxonomyParser_Db0lhDY5.mjs';
import { FaHashtag } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const tags = await getTaxonomy("posts", "tags");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "\u6807\u7B7E" + config.site.titleDelimiter }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="h2 page-heading">标签</h1> <ul class="space-x-4"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${tag}`, "href")} class="rounded-lg bg-theme-light px-4 py-2 text-dark transition hover:bg-primary hover:text-white flex items-center group mb-4"> ${renderComponent($$result2, "FaHashtag", FaHashtag, { "className": "mr-1 text-primary group-hover:text-white transition" })} ${humanize(tag || "")} </a> </li>`)} </ul> </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/index.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/index.astro";
const $$url = "/tags";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
