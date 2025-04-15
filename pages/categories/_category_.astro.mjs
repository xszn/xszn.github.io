/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { h as humanize, $ as $$Base, c as config } from '../../chunks/_astro_content_CGhUYxn0.mjs';
import { $ as $$Posts } from '../../chunks/Posts_BWcuRKgP.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_DgFIZmzg.mjs';
import { g as getTaxonomy } from '../../chunks/taxonomyParser_aFkp6rjv.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_DN17Ikpp.mjs';
import { t as taxonomyFilter } from '../../chunks/taxonomyFilter_DFf2ObUB.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://xszn.org/");
async function getStaticPaths() {
  const categories = await getTaxonomy("posts", "categories");
  return categories.map((category) => {
    return {
      params: { category }
    };
  });
}
const $$category = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$category;
  const { category } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByCategory = taxonomyFilter(posts, "categories", category);
  const sortedPosts = sortByDate(filterByCategory);
  const title = humanize(category || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title + config.site.titleDelimiter || "Category" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4">显示来自</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": sortedPosts, "fluid": false })} </div> </div> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/[category].astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/[category].astro";
const $$url = "/categories/[category]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$category,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
