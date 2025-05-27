import { jsxs, jsx } from 'react/jsx-runtime';
import 'react';

const Image = ({
  src,
  alt,
  width = "100%",
  // 默认宽度 100%
  height = "auto"
  // 默认高度自适应
}) => {
  return /* @__PURE__ */ jsxs("figure", { children: [
    /* @__PURE__ */ jsx("a", { href: src, children: /* @__PURE__ */ jsx("img", { src, alt, width, height }) }),
    /* @__PURE__ */ jsx("figcaption", { children: alt })
  ] });
};

export { Image as I };
