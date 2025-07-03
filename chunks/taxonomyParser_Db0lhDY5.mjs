import { c as createComponent, a as renderTemplate } from './astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import 'clsx';
import { g as getSinglePage } from './contentParser_BKCpi8Q5.mjs';
import { s as slugify } from './_astro_content_BaFZudft.mjs';

const getTaxonomy = async (collection, name) => {
  const singlePages = await getSinglePage(collection);
  const taxonomyPages = singlePages.map((page) => page.data[name]);
  let taxonomies = [];
  for (let i = 0; i < taxonomyPages.length; i++) {
    const categoryArray = taxonomyPages[i];
    for (let j = 0; j < categoryArray.length; j++) {
      taxonomies.push(slugify(categoryArray[j]));
    }
  }
  const taxonomy = [...new Set(taxonomies)];
  return taxonomy;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/lib/taxonomyParser.astro", void 0);

export { getTaxonomy as g };
