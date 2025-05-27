/* empty css                                           */
import { b as createAstro, c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../../../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { c as config, $ as $$Base, m as markdownify } from '../../../chunks/_astro_content_CNUuSX4N.mjs';
import { $ as $$Authors } from '../../../chunks/Authors_D0J_ZbCu.mjs';
import { $ as $$Pagination } from '../../../chunks/Pagination_CvHMtmUG.mjs';
import { g as getSinglePage } from '../../../chunks/contentParser_B_MZUN96.mjs';
import { s as sortByDate } from '../../../chunks/sortFunctions_DN17Ikpp.mjs';
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://xszn.org/");
async function getStaticPaths() {
  const authors = await getSinglePage("authors");
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const paths = [];
  for (let i = 1; i < totalPages; i++) {
    paths.push({
      params: {
        slug: (i + 1).toString()
      }
    });
  }
  return paths;
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const authors = await getSinglePage("authors");
  const sortedPosts = sortByDate(authors);
  const totalPages = Math.ceil(authors.length / config.settings.pagination);
  const currentPage = slug && !isNaN(Number(slug)) ? Number(slug) : 1;
  const indexOfLastPost = currentPage * config.settings.pagination;
  const indexOfFirstPost = indexOfLastPost - config.settings.pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Authors" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container text-center"> <h1 class="page-heading h2">${markdownify("Authors")}</h1> ${renderComponent($$result2, "Authors", $$Authors, { "authors": currentPosts })} ${renderComponent($$result2, "Pagination", $$Pagination, { "section": "authors", "currentPage": currentPage, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/authors/page/[slug].astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/authors/page/[slug].astro";
const $$url = "/authors/page/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
