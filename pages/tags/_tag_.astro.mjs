/* empty css                                        */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { h as humanize, $ as $$Base, c as config } from '../../chunks/_astro_content_DxdUGNXu.mjs';
import { $ as $$Posts } from '../../chunks/Posts_oj38uhsK.mjs';
import { g as getSinglePage } from '../../chunks/contentParser_fRgCdP7X.mjs';
import { g as getTaxonomy } from '../../chunks/taxonomyParser_DK1Jpn_n.mjs';
import { s as sortByDate } from '../../chunks/sortFunctions_DN17Ikpp.mjs';
import { t as taxonomyFilter } from '../../chunks/taxonomyFilter_CE1MAD_3.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://xszn.org/");
async function getStaticPaths() {
  const tags = await getTaxonomy("posts", "tags");
  return tags.map((tag) => {
    return {
      params: { tag }
    };
  });
}
const $$tag = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$tag;
  const { tag } = Astro2.params;
  const posts = await getSinglePage("posts");
  const filterByTags = taxonomyFilter(posts, "tags", tag);
  const sortedPosts = sortByDate(filterByTags);
  const title = humanize(tag || "");
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title + config.site.titleDelimiter || "Tag" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="section"> <div class="container"> <p class="text-center text-2xl mb-4">显示来自</p> <h1 class="h2 mb-16 text-center text-primary">${title}</h1> ${renderComponent($$result2, "Posts", $$Posts, { "posts": sortedPosts, "fluid": false })} </div> </div> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/[tag].astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/[tag].astro";
const $$url = "/tags/[tag]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$tag,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
