import { s as slugify } from './_astro_content_CGhUYxn0.mjs';

const taxonomyFilter = (posts, name, key) => posts.filter(
  (post) => post.data[name].map((name2) => slugify(name2)).includes(key)
);

export { taxonomyFilter as t };
