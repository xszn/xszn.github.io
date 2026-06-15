export default [
  ["link", { rel: "icon", href: "/favicon.ico" }],
  [
    "meta",
    {
      property: "og:title",
      content: "List of Free and Open-Source Software",
    },
  ],
  [
    "meta",
    {
      property: "og:description",
      content:
        "List of free and open-source software. We recommend high-quality, free, and open-source tools to help you save time when searching for software.",
    },
  ],
  ["meta", { property: "og:type", content: "website" }],
  ["meta", { property: "og:url", content: "https://xszn.org/" }],
  ["meta", { property: "og:image", content: "/images/ogp.webp" }],
  ["meta", { property: "og:image:type", content: "image/webp" }],
  ["meta", { property: "og:image:width", content: "1920" }],
  ["meta", { property: "og:image:height", content: "1080" }],
  [
    "meta",
    {
      property: "og:og:image:alt",
      content: "Xingshu: List of Free and Open-Source Software.",
    },
  ],
  ["meta", { property: "og:locale", content: "zh_CN" }],
  ["meta", { property: "og:site_name", content: "Xingshu" }],
  ["meta", { property: "twitter:card", content: "summary_large_image" }],
  ["meta", { property: "twitter:site", content: "@xszn_org" }],
  ["meta", { property: "twitter:creator", content: "@xszn_org" }],
  [
    "script",
    {
      async: "",
      src: "https://www.googletagmanager.com/gtag/js?id=G-TFCW4JSXFB",
    },
  ],
  [
    "script",
    {
      async: "",
      src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4067183961394663",
      crossorigin: "anonymous",
    },
  ],
  [
    "script",
    {},
    `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TFCW4JSXFB');`,
  ],
  ["script", {}, `(adsbygoogle = window.adsbygoogle || []).push({});`],
];
