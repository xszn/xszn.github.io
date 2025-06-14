/* empty css                                     */
import { b as createAstro, c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderComponent, a as renderTemplate, d as addAttribute } from '../chunks/astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import { r as renderEntry, m as markdownify, c as config, a as $$Image, h as humanize, s as slugify, $ as $$Base } from '../chunks/_astro_content_C56GEhFt.mjs';
import { IoLogoFacebook, IoLogoTwitter, IoLogoLinkedin, IoLogoPinterest } from 'react-icons/io5';
import { d as dateFormat } from '../chunks/dateFormat_CqVTvCKI.mjs';
import '@astrojs/internal-helpers/path';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';
import { g as getSinglePage } from '../chunks/contentParser_BHR6hCNO.mjs';
import 'clsx';
import { N as Notice } from '../chunks/Notice_DwmVovds.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$4 = createAstro("https://xszn.org/");
const $$Default = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Default;
  const { data } = Astro2.props;
  const { title } = data.data;
  const { Content } = await renderEntry(data);
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container"> <h1 class="h2 page-heading">${unescapeHTML(markdownify(title))}</h1> <div class="content"> ${renderComponent($$result, "Content", Content, {})} </div> </div> </section>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Default.astro", void 0);

const $$Astro$3 = createAstro("https://xszn.org/");
const $$Share = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Share;
  const { base_url } = config.site;
  const { title, description, slug, className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(`${className}`, "class")}> <li class="inline-block"> <a aria-label="facebook share button"${addAttribute(`https://facebook.com/sharer/sharer.php?u=${base_url}/${slug}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoFacebook", IoLogoFacebook, {})} </a> </li> <li class="inline-block"> <a aria-label="twitter share button"${addAttribute(`https://twitter.com/intent/tweet/?text=${title}&amp;url=${base_url}/${slug}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoTwitter", IoLogoTwitter, {})} </a> </li> <li class="inline-block"> <a aria-label="linkedin share button"${addAttribute(`https://www.linkedin.com/shareArticle?mini=true&url=${base_url}/${slug}&title=${title}&summary=${description}&source=${base_url}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoLinkedin", IoLogoLinkedin, {})} </a> </li> <li class="inline-block"> <a aria-label="pinterest share button"${addAttribute(`https://pinterest.com/pin/create/button/?url=${base_url}/${slug}&media=&description=${description}`, "href")} target="_blank" rel="noreferrer noopener"> ${renderComponent($$result, "IoLogoPinterest", IoLogoPinterest, {})} </a> </li> </ul>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/Share.astro", void 0);

const $$Astro$2 = createAstro("https://xszn.org/");
const $$SimilarPosts = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SimilarPosts;
  const { posts } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="row gy-4 justify-center"> ${posts.map((post, i) => renderTemplate`<div${addAttribute(`col-12 sm:col-6 md:col-4 ${i === 2 && "hidden md:block"}`, "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.05] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": 445, "height": 230 })} </a>`} <ul class="mt-4 text-text flex flex-wrap items-center text-sm"> <li class="mb-2 mr-4 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mb-2 mr-4 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[16px] w-[16px] text-gray-600" })} <ul> ${post.data.categories.map((category, i2) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> </li> </ul> <h3 class="h5"> <a${addAttribute(`/${post.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> </div>`)} </div>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/SimilarPosts.astro", void 0);

const similerItems = (currentItem, allItems, slug) => {
  let categories = [];
  let tags = [];
  if (currentItem.data.categories.length > 0) {
    categories = currentItem.data.categories;
  }
  if (currentItem.data.tags.length > 0) {
    tags = currentItem.data.tags;
  }
  const filterByCategories = allItems.filter(
    (item) => categories.find((category) => item.data.categories.includes(category))
  );
  const filterByTags = allItems.filter(
    (item) => tags.find((tag) => item.data.tags.includes(tag))
  );
  const mergedItems = [.../* @__PURE__ */ new Set([...filterByCategories, ...filterByTags])];
  const filterBySlug = mergedItems.filter((product) => product.slug !== slug);
  return filterBySlug;
};

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Comment = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<script src="https://giscus.app/client.js" data-repo="xszn/xszn.github.io" data-repo-id="R_kgDON7SifQ" data-category="General" data-category-id="DIC_kwDON7Sifc4Cq7dI" data-mapping="pathname" data-strict="0" data-reactions-enabled="1" data-emit-metadata="0" data-input-position="bottom" data-theme="preferred_color_scheme" data-lang="zh-CN" crossorigin="anonymous" async><\/script>'])));
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/Comment.astro", void 0);

const $$Astro$1 = createAstro("https://xszn.org/");
const $$PostSingle = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PostSingle;
  const allAuthors = await getSinglePage("authors");
  const posts = await getSinglePage("posts");
  const { post } = Astro2.props;
  const similarPosts = similerItems(post, posts, post.slug);
  const { Content } = await renderEntry(post);
  const { title, description, authors, categories, image, date, tags } = post.data;
  return renderTemplate`${maybeRenderHead()}<section class="section"> <div class="container container-post-single"> <article class="row justify-center"> <div class="md:col-12 text-center"> <h1 class="h1">${unescapeHTML(markdownify(title))}</h1> <ul class="mt-4 flex flex-wrap items-center justify-center text-text"> <li class="mx-3"> ${allAuthors.filter(
    (author) => authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.id)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mx-3 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${dateFormat(date)} </li> <li class="mx-3 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} <ul> ${categories.map((category, i) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> </li> </ul> </div> <div class="col-12 mt-8 mb-2"> ${image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": image, "height": 500, "width": 1e3, "alt": title, "class": "rounded-lg" })}`} </div> <div class="md:col-10"> <div class="content mb-16 text-left"> ${renderComponent($$result, "Content", Content, {})} ${renderComponent($$result, "Notice", Notice, { "type": "note" }, { "default": ($$result2) => renderTemplate` <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"> <a property="dct:title" rel="cc:attributionURL" href="https://xszn.org/about/">软件资源分享</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://xszn.org/">行书指南</a> is licensed under <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0</a> </p> ` })} </div> <div class="flex flex-wrap items-center justify-between"> <ul class="mr-4 mb-4 space-x-3"> ${tags.map((tag) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/tags/${slugify(tag)}`, "href")} class="block rounded-lg bg-theme-light px-4 py-2 font-semibold text-dark text-sm hover:text-primary transition duration-300">
#${humanize(tag)} </a> </li>`)} </ul> ${renderComponent($$result, "Share", $$Share, { "className": "social-share mb-4", "title": title, "description": description, "slug": post.slug })} </div> </div> </article> ${renderComponent($$result, "Comment", $$Comment, {})} </div> </section> <!-- similar posts --> ${similarPosts.length > 0 && renderTemplate`<section class="section pt-0"> <div class="container"> <h2 class="mb-8 text-center h2">Similar Posts</h2> ${renderComponent($$result, "SimilarPosts", $$SimilarPosts, { "posts": similarPosts.slice(0, 3) })} </div> </section>`}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/PostSingle.astro", void 0);

const $$Astro = createAstro("https://xszn.org/");
async function getStaticPaths() {
  const posts = await getSinglePage("posts");
  const pages = await getSinglePage("pages");
  const allPages = [...pages, ...posts];
  const paths = allPages.map((page) => ({
    params: {
      regular: page.id.replace(/\.(md|mdx)$/, "")
    },
    props: { page }
  }));
  return paths;
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const getPosts = await getSinglePage("posts");
  const postsSlug = getPosts.map((item) => item.id);
  const { page } = Astro2.props;
  const { title, meta_title, description, image } = page.data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": title + config.site.titleDelimiter, "meta_title": meta_title, "description": description, "image": image }, { "default": ($$result2) => renderTemplate`${postsSlug.includes(page.id) ? renderTemplate`${renderComponent($$result2, "PostSingle", $$PostSingle, { "post": page })}` : renderTemplate`${renderComponent($$result2, "Default", $$Default, { "data": page })}`}` })}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/[...regular].astro", void 0);

const $$file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/[...regular].astro";
const $$url = "/[...regular]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
