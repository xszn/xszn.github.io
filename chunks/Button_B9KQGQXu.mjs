import { jsx } from 'react/jsx-runtime';
import 'react';

const Button = ({
  label,
  link,
  style,
  rel
}) => {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: link,
      target: "_blank",
      rel: `noopener noreferrer ${rel ? rel === "follow" ? "" : rel : "nofollow"}`,
      className: `btn mb-4 me-4 hover:text-white no-underline ${style === "outline" ? "btn-outline-primary" : "btn-primary"}`,
      children: label
    }
  );
};

export { Button as B };
