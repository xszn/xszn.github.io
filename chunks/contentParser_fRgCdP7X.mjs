import { c as createComponent, a as renderTemplate } from './astro/server_BBoAqXZx.mjs';
import 'kleur/colors';
import 'clsx';
import { d as getCollection } from './_astro_content_DxdUGNXu.mjs';

const getSinglePage = async (collectionName) => {
  const allPages = await getCollection(collectionName);
  const removeIndex = allPages.filter((data) => data.id.match(/^(?!-)/));
  const removeDrafts = removeIndex.filter((data) => {
    const pageData = data.data;
    return pageData.draft !== true;
  });
  return removeDrafts;
};
createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate``;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/lib/contentParser.astro", void 0);

export { getSinglePage as g };
