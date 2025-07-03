import { jsx } from 'react/jsx-runtime';
import 'react';
import clsx from 'clsx';

const typeStyles = {
  tip: "bg-green-100 text-green-800",
  warning: "bg-yellow-100 text-yellow-800",
  info: "bg-blue-100 text-blue-800",
  error: "bg-red-100 text-red-800"
};
const Badge = ({ type = "info", text }) => {
  const className = clsx(
    "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold",
    typeStyles[type] || typeStyles.info
  );
  return /* @__PURE__ */ jsx("sup", { className, role: "status", "aria-label": text, children: text });
};

export { Badge as B };
