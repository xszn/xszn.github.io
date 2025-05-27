import { x as createVNode, k as Fragment, _ as __astro_tag_component__ } from './astro/server_BBoAqXZx.mjs';
import 'react/jsx-runtime';
import 'react';
import 'github-slugger';
import 'marked';
import 'react-lite-youtube-embed';
/* empty css                                    */
import 'clsx';

const frontmatter = {
  "title": "Test Title",
  "meta_title": "Test Meta Title",
  "description": "Test Description",
  "date": "2025-01-01T00:00:00.000Z",
  "image": "",
  "categories": [""],
  "authors": ["John Doe"],
  "tags": [""],
  "draft": false
};
function getHeadings() {
  return [];
}
function _createMdxContent(props) {
  return createVNode(Fragment, {});
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = props.components || ({});
  return MDXLayout ? createVNode(MDXLayout, {
    ...props,
    children: createVNode(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent();
}

const url = "src/content/posts/test/test.mdx";
const file = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/test/test.mdx";
const Content = (props = {}) => MDXContent({
  ...props,
  components: { Fragment: Fragment, ...props.components, },
});
Content[Symbol.for('mdx-component')] = true;
Content[Symbol.for('astro.needsHeadRendering')] = !Boolean(frontmatter.layout);
Content.moduleId = "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/test/test.mdx";
__astro_tag_component__(Content, 'astro:jsx');

export { Content, Content as default, file, frontmatter, getHeadings, url };
