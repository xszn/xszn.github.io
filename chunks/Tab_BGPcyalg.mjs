import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';
import { marked } from 'marked';

const Tabs = ({ children }) => {
  const [active, setActive] = useState(0);
  const [defaultFocus, setDefaultFocus] = useState(false);
  const tabRefs = useRef([]);
  useEffect(() => {
    if (defaultFocus) {
      tabRefs.current[active]?.focus();
    } else {
      setDefaultFocus(true);
    }
  }, [active]);
  const tabLinks = Array.from(
    children.props.value.matchAll(
      //@ts-ignore
      /<div\s+data-name="([^"]+)"[^>]*>(.*?)<\/div>/gs
    ),
    (match) => ({ name: match[1], children: match[0] })
  );
  const handleKeyDown = (event, index) => {
    if (event.key === "Enter" || event.key === " ") {
      setActive(index);
    } else if (event.key === "ArrowRight") {
      setActive((active + 1) % tabLinks.length);
    } else if (event.key === "ArrowLeft") {
      setActive((active - 1 + tabLinks.length) % tabLinks.length);
    }
  };
  return /* @__PURE__ */ jsxs("div", { className: "tab", children: [
    /* @__PURE__ */ jsx("ul", { className: "tab-nav", children: tabLinks.map(
      (item, index) => /* @__PURE__ */ jsx(
        "li",
        {
          className: `tab-nav-item ${index === active ? "active" : ""}`,
          role: "tab",
          tabIndex: index === active ? 0 : -1,
          onKeyDown: (event) => handleKeyDown(event, index),
          onClick: () => setActive(index),
          ref: (ref) => tabRefs.current[index] = ref,
          children: item.name
        },
        index
      )
    ) }),
    tabLinks.map((item, i) => /* @__PURE__ */ jsx(
      "div",
      {
        className: active === i ? "tab-content block px-5" : "hidden",
        dangerouslySetInnerHTML: {
          __html: marked.parse(item.children)
        }
      },
      i
    ))
  ] });
};

function Tab({ name, children }) {
  return /* @__PURE__ */ jsx("div", { "data-name": name, children });
}

export { Tabs as T, Tab as a };
