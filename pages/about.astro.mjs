/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { g as getEntry, r as renderEntry, $ as $$Base, a as $$Image, m as markdownify, c as config } from '../chunks/_astro_content_CNUuSX4N.mjs';
import '@astrojs/internal-helpers/path';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const entry = await getEntry("about", "-index");
  const { Content } = await renderEntry(entry);
  const { title, meta_title, image, what_i_do } = entry.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title, "meta_title": meta_title + config.site.titleDelimiter, "image": image }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> <div class="row md:gx-4"> <div class="sm:col-5 md:col-4"> ${image && renderTemplate`<div class="img-cover mb-8"> ${renderComponent($$result2, "Image", $$Image, { "src": image, "width": 295, "height": 395, "alt": title, "class": "rounded-lg w-full" })} </div>`} </div> <div class="sm:col-7 md:col-8"> <h1 class="h3 mb-8">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> <a href="/contact" class="btn btn-primary text-white py-2">联系我们</a> </div> </div> </div> </section> <section class="section pt-0"> <div class="container"> <h3 class="page-heading mb-20">${what_i_do.title}</h3> <div class="row justify-center gy-4 text-center"> ${what_i_do.items.map((item) => renderTemplate`<div class="lg:col-4 md:col-6"> <i class="{{.icon}} fa-3x text-primary mb-4"></i> <h4 class="text-dark font-weight-700 mb-3">${item.title}</h4> <p>${item.description}</p> </div>`)} </div> </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/about.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
