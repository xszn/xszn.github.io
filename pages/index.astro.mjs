/* empty css                                     */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { c as config, $ as $$Base } from '../chunks/_astro_content_CNUuSX4N.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CvHMtmUG.mjs';
import { $ as $$Posts } from '../chunks/Posts_Dw9i28gB.mjs';
import { g as getSinglePage } from '../chunks/contentParser_B_MZUN96.mjs';
import { s as sortByDate } from '../chunks/sortFunctions_DN17Ikpp.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const posts = await getSinglePage("posts");
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / config.settings.pagination);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  return renderTemplate`${renderComponent($$result, "Base", $$Base, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="section"> <div class="container"> ${renderComponent($$result2, "Posts", $$Posts, { "posts": currentPosts, "className": "mb-16" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "currentPage": 1, "totalPages": totalPages })} </div> </section> ` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/index.astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
