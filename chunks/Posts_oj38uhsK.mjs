import { b as createAstro, c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderComponent, a as renderTemplate } from './astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import { p as plainify, a as $$Image, s as slugify, h as humanize, c as config } from './_astro_content_DxdUGNXu.mjs';
import { g as getSinglePage } from './contentParser_fRgCdP7X.mjs';
import { d as dateFormat } from './dateFormat_CqVTvCKI.mjs';
import '@astrojs/internal-helpers/path';
import { BiCalendarEdit, BiCategoryAlt } from 'react-icons/bi';

const $$Astro = createAstro("https://xszn.org/");
const $$Posts = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Posts;
  const authors = await getSinglePage("authors");
  const { summary_length } = config.settings;
  const { className, posts, fluid } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`row gy-5 gx-4 ${className} ${posts.length == 1 ? "justify-center" : ""} `, "class")}> ${posts.map((post, i) => renderTemplate`<div${addAttribute(i === 0 && fluid != false ? "col-12" : "col-12 sm:col-6", "class")}> ${post.data.image && renderTemplate`<a${addAttribute(`/${post.id}`, "href")} class="rounded-lg block hover:text-primary overflow-hidden group"> ${renderComponent($$result, "Image", $$Image, { "class": "group-hover:scale-[1.03] transition duration-300 w-full", "src": post.data.image, "alt": post.data.title, "width": i === 0 ? 925 : 445, "height": i === 0 ? 475 : 230 })} </a>`} <ul class="mt-6 mb-4 flex flex-wrap items-center text-text"> <li class="mr-5"> ${authors.filter(
    (author) => post.data.authors.map((author2) => slugify(author2)).includes(slugify(author.data.title))
  ).map((author) => renderTemplate`<a${addAttribute(`/authors/${slugify(author.data.title)}`, "href")} class="flex items-center hover:text-primary font-medium"> ${author.data.image && renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": author.data.image, "alt": author.data.title, "height": 50, "width": 50, "class": "mr-2 h-6 w-6 rounded-full" })}`} <span>${author.data.title}</span> </a>`)} </li> <li class="mr-5 flex items-center flex-wrap font-medium"> ${renderComponent($$result, "BiCalendarEdit", BiCalendarEdit, { "className": "mr-1 h-5 w-5 text-gray-600" })} ${dateFormat(post.data.date)} </li> <li class="mr-5 flex items-center flex-wrap"> ${renderComponent($$result, "BiCategoryAlt", BiCategoryAlt, { "className": "mr-1 h-[18px] w-[18px] text-gray-600" })} <ul> ${post.data.categories.map((category, i2) => renderTemplate`<li class="inline-block"> <a${addAttribute(`/categories/${slugify(category)}`, "href")} class="mr-2 hover:text-primary font-medium"> ${humanize(category)} ${i2 !== post.data.categories.length - 1 && ","} </a> </li>`)} </ul> </li> </ul> <h3 class="mb-4"> <a${addAttribute(`/${post.id}`, "href")} class="block hover:text-primary transition duration-300"> ${post.data.title} </a> </h3> <p class="text-text"> ${plainify(
    (post.body ?? "").slice(
      0,
      Number(
        i === 0 && fluid != false ? summary_length * 2 : summary_length
      )
    )
  )}
...
</p> </div>`)} </div>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Posts.astro", void 0);

export { $$Posts as $ };
