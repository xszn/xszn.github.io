import { c as createComponent, m as maybeRenderHead, a as renderTemplate, b as createAstro, d as addAttribute, r as renderComponent, u as unescapeHTML, A as AstroError, E as ExpectedImage, L as LocalImageUsedWrongly, M as MissingImageDimension, U as UnsupportedImageFormat, I as IncompatibleDescriptorOptions, e as UnsupportedImageConversion, N as NoImageMetadata, F as FailedToFetchRemoteImageDimensions, f as ExpectedImageOptions, g as ExpectedNotESMImage, h as InvalidImageService, t as toStyleString, i as ImageMissingAlt, s as spreadAttributes, j as Fragment, k as renderScript, l as renderSlot, n as renderHead, o as UnknownContentCollectionError, R as RenderUndefinedEntryError, p as renderUniqueStylesheet, q as renderScriptElement, v as createHeadAndContent } from './astro/server_B2DYuZLs.mjs';
import 'kleur/colors';
import 'clsx';
import { slug } from 'github-slugger';
import { marked } from 'marked';
import { IoLogoFacebook, IoLogoTwitter, IoLogoMastodon, IoLogoInstagram, IoLogoYoutube, IoLogoLinkedin, IoLogoGithub, IoLogoGitlab, IoLogoDiscord, IoLogoSlack, IoLogoMedium, IoLogoCodepen, IoLogoBitbucket, IoLogoDribbble, IoLogoBehance, IoLogoPinterest, IoLogoSoundcloud, IoLogoTumblr, IoLogoReddit, IoLogoVk, IoLogoWhatsapp, IoLogoSnapchat, IoLogoVimeo, IoLogoTiktok, IoLogoFoursquare, IoLogoSkype, IoGlobeOutline, IoLogoRss, IoMail, IoCall, IoLocation, IoSearch } from 'react-icons/io5';
import { FaTelegram } from 'react-icons/fa';
import { isRemotePath, joinPaths, removeBase, prependForwardSlash } from '@astrojs/internal-helpers/path';
import * as mime from 'mrmime';
/* empty css                             */
import { join } from 'node:path';
import { Buffer as Buffer$1 } from 'node:buffer';
import { Traverse } from 'neotraverse/modern';
import pLimit from 'p-limit';
import { z as z$1, ZodIssueCode } from 'zod';
import * as devalue from 'devalue';

const $$TwSizeIndicator = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${process.env.NODE_ENV === "development" && renderTemplate`${maybeRenderHead()}<div class="fixed top-0 left-0 z-50 flex w-[30px] items-center justify-center bg-gray-200 py-[2.5px] text-[12px] uppercase text-black sm:bg-red-200 md:bg-yellow-200 lg:bg-green-200 xl:bg-blue-200 2xl:bg-pink-200"><span class="block sm:hidden">all</span><span class="hidden sm:block md:hidden">sm</span><span class="hidden md:block lg:hidden">md</span><span class="hidden lg:block xl:hidden">lg</span><span class="hidden xl:block 2xl:hidden">xl</span><span class="hidden 2xl:block">2xl</span></div>`}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/TwSizeIndicator.astro", void 0);

const site = {"title":"行书指南 | 软件资源分享","titleDelimiter":" | 行书指南","base_url":"https://xszn.org/","favicon":"/favicon.ico","logo":"/images/logo.webp","logo_width":"48","logo_height":"48","logo_text":"行书指南"};
const settings = {"pagination":7,"summary_length":100,"visible_pages":5};
const metadata = {"meta_author":"行书指南","meta_image":"/images/og-image.webp","meta_description":"科学上网教程及软件资源网站。最新热门开源软件推荐，浅显易懂的使用教程。在这里发现与掌握前沿技术。"};
const params = {"contact_form_action":"#","copyright":"© 2025 行书指南"};
const contactinfo = {"address":"","email":"","phone":"","telegram":"https://t.me/xsznChatBot"};
const config = {
  site,
  settings,
  metadata,
  params,
  contactinfo,
};

const fonts = {"font_family":{"primary":"Noto+Sans+Mono:wght@100..900","secondary":""}};
const theme = {
  fonts,
};

const slugify = (content) => {
  return slug(content);
};
const markdownify = (content, div) => {
  return div ? marked.parse(content) : marked.parseInline(content);
};
const humanize = (content) => {
  return content.replace(/^[\s_]+|[\s_]+$/g, "").replace(/[_\s]+/g, " ").replace(/[-\s]+/g, " ").replace(/^[a-z]/, function(m) {
    return m.toUpperCase();
  });
};
const plainify = (content) => {
  const parseMarkdown = marked.parse(content);
  const filterBrackets = parseMarkdown.replace(/<\/?[^>]+(>|$)/gm, "");
  const filterSpaces = filterBrackets.replace(/[\r\n]\s*[\r\n]/gm, "");
  const stripHTML = htmlEntityDecoder(filterSpaces);
  return stripHTML;
};
const htmlEntityDecoder = (htmlWithEntities) => {
  let entityList = {
    "&nbsp;": " ",
    "&lt;": "<",
    "&gt;": ">",
    "&amp;": "&",
    "&quot;": '"',
    "&#39;": "'"
  };
  let htmlWithoutEntities = htmlWithEntities.replace(
    /(&amp;|&lt;|&gt;|&quot;|&#39;)/g,
    (entity) => {
      return entityList[entity];
    }
  );
  return htmlWithoutEntities;
};

const $$Astro$6 = createAstro("https://xszn.org/");
const $$Social = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$Social;
  const { source, className } = Astro2.props;
  const {
    facebook,
    twitter,
    mastodon,
    instagram,
    youtube,
    linkedin,
    github,
    gitlab,
    discord,
    slack,
    medium,
    codepen,
    bitbucket,
    dribbble,
    behance,
    pinterest,
    soundcloud,
    tumblr,
    reddit,
    vk,
    whatsapp,
    snapchat,
    vimeo,
    tiktok,
    foursquare,
    rss,
    email,
    phone,
    address,
    skype,
    website,
    telegram
  } = source;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(className, "class")}> ${facebook && renderTemplate`<li class="inline-block"> <a aria-label="facebook"${addAttribute(facebook, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoFacebook", IoLogoFacebook, {})} </a> </li>`} ${twitter && renderTemplate`<li class="inline-block"> <a aria-label="twitter"${addAttribute(twitter, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoTwitter", IoLogoTwitter, {})} </a> </li>`} ${mastodon && renderTemplate`<li class="inline-block"> <a aria-label="mastodon"${addAttribute(mastodon, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoMastodon", IoLogoMastodon, {})} </a> </li>`} ${instagram && renderTemplate`<li class="inline-block"> <a aria-label="instagram"${addAttribute(instagram, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoInstagram", IoLogoInstagram, {})} </a> </li>`} ${youtube && renderTemplate`<li class="inline-block"> <a aria-label="youtube"${addAttribute(youtube, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoYoutube", IoLogoYoutube, {})} </a> </li>`} ${linkedin && renderTemplate`<li class="inline-block"> <a aria-label="linkedin"${addAttribute(linkedin, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoLinkedin", IoLogoLinkedin, {})} </a> </li>`} ${github && renderTemplate`<li class="inline-block"> <a aria-label="github"${addAttribute(github, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoGithub", IoLogoGithub, {})} </a> </li>`} ${gitlab && renderTemplate`<li class="inline-block"> <a aria-label="gitlab"${addAttribute(gitlab, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoGitlab", IoLogoGitlab, {})} </a> </li>`} ${discord && renderTemplate`<li class="inline-block"> <a aria-label="discord"${addAttribute(discord, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoDiscord", IoLogoDiscord, {})} </a> </li>`} ${slack && renderTemplate`<li class="inline-block"> <a aria-label="slack"${addAttribute(slack, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoSlack", IoLogoSlack, {})} </a> </li>`} ${medium && renderTemplate`<li class="inline-block"> <a aria-label="medium"${addAttribute(medium, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoMedium", IoLogoMedium, {})} </a> </li>`} ${codepen && renderTemplate`<li class="inline-block"> <a aria-label="codepen"${addAttribute(codepen, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoCodepen", IoLogoCodepen, {})} </a> </li>`} ${bitbucket && renderTemplate`<li class="inline-block"> <a aria-label="bitbucket"${addAttribute(bitbucket, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoBitbucket", IoLogoBitbucket, {})} </a> </li>`} ${dribbble && renderTemplate`<li class="inline-block"> <a aria-label="dribbble"${addAttribute(dribbble, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoDribbble", IoLogoDribbble, {})} </a> </li>`} ${behance && renderTemplate`<li class="inline-block"> <a aria-label="behance"${addAttribute(behance, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoBehance", IoLogoBehance, {})} </a> </li>`} ${pinterest && renderTemplate`<li class="inline-block"> <a aria-label="pinterest"${addAttribute(pinterest, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoPinterest", IoLogoPinterest, {})} </a> </li>`} ${soundcloud && renderTemplate`<li class="inline-block"> <a aria-label="soundcloud"${addAttribute(soundcloud, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoSoundcloud", IoLogoSoundcloud, {})} </a> </li>`} ${tumblr && renderTemplate`<li class="inline-block"> <a aria-label="tumblr"${addAttribute(tumblr, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoTumblr", IoLogoTumblr, {})} </a> </li>`} ${reddit && renderTemplate`<li class="inline-block"> <a aria-label="reddit"${addAttribute(reddit, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoReddit", IoLogoReddit, {})} </a> </li>`} ${vk && renderTemplate`<li class="inline-block"> <a aria-label="vk"${addAttribute(vk, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoVk", IoLogoVk, {})} </a> </li>`} ${whatsapp && renderTemplate`<li class="inline-block"> <a aria-label="whatsapp"${addAttribute(whatsapp, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoWhatsapp", IoLogoWhatsapp, {})} </a> </li>`} ${snapchat && renderTemplate`<li class="inline-block"> <a aria-label="snapchat"${addAttribute(snapchat, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoSnapchat", IoLogoSnapchat, {})} </a> </li>`} ${vimeo && renderTemplate`<li class="inline-block"> <a aria-label="vimeo"${addAttribute(vimeo, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoVimeo", IoLogoVimeo, {})} </a> </li>`} ${tiktok && renderTemplate`<li class="inline-block"> <a aria-label="tiktok"${addAttribute(tiktok, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoTiktok", IoLogoTiktok, {})} </a> </li>`} ${foursquare && renderTemplate`<li class="inline-block"> <a aria-label="foursquare"${addAttribute(foursquare, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoFoursquare", IoLogoFoursquare, {})} </a> </li>`} ${skype && renderTemplate`<li class="inline-block"> <a aria-label="skype"${addAttribute(skype, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoSkype", IoLogoSkype, {})} </a> </li>`} ${website && renderTemplate`<li class="inline-block"> <a aria-label="website"${addAttribute(website, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoGlobeOutline", IoGlobeOutline, {})} </a> </li>`} ${rss && renderTemplate`<li class="inline-block"> <a aria-label="rss feed"${addAttribute(rss, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLogoRss", IoLogoRss, {})} </a> </li>`} ${email && renderTemplate`<li class="inline-block"> <a aria-label="email"${addAttribute(`mailto:${email}`, "href")}> ${renderComponent($$result, "IoMail", IoMail, {})} </a> </li>`} ${phone && renderTemplate`<li class="inline-block"> <a aria-label="telephone"${addAttribute(`tel:${phone}`, "href")}> ${renderComponent($$result, "IoCall", IoCall, {})} </a> </li>`} ${address && renderTemplate`<li class="inline-block"> <a aria-label="location"${addAttribute(address, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "IoLocation", IoLocation, {})} </a> </li>`} ${telegram && renderTemplate`<li class="inline-block"> <a aria-label="location"${addAttribute(telegram, "href")} target="_blank" rel="noopener noreferrer nofollow"> ${renderComponent($$result, "FaTelegram", FaTelegram, {})} </a> </li>`} </ul>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/Social.astro", void 0);

const main = [{"name":"首页","url":"/"},{"name":"分类","url":"/categories"},{"name":"标签","url":"/tags"},{"name":"作者","url":"/authors"}];
const footer = [{"name":"关于我们","url":"/about"},{"name":"联系我们","url":"/contact"},{"name":"隐私权政策","url":"/privacy-policy"}];
const menu = {
  main,
  footer,
};

const facebook = "";
const twitter = "";
const instagram = "";
const youtube = "https://www.youtube.com/@xszn_org";
const linkedin = "";
const github = "";
const gitlab = "";
const medium = "";
const codepen = "";
const bitbucket = "";
const dribbble = "";
const behance = "";
const pinterest = "";
const soundcloud = "";
const tumblr = "";
const reddit = "";
const vk = "";
const whatsapp = "";
const snapchat = "";
const vimeo = "";
const tiktok = "";
const foursquare = "";
const rss = "";
const email = "";
const phone = "";
const address = "";
const skype = "";
const website = "";
const telegram = "https://t.me/xszn_org";
const social = {
  facebook,
  twitter,
  instagram,
  youtube,
  linkedin,
  github,
  gitlab,
  medium,
  codepen,
  bitbucket,
  dribbble,
  behance,
  pinterest,
  soundcloud,
  tumblr,
  reddit,
  vk,
  whatsapp,
  snapchat,
  vimeo,
  tiktok,
  foursquare,
  rss,
  email,
  phone,
  address,
  skype,
  website,
  telegram,
};

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="section bg-theme-dark"> <div class="container text-center">  <ul class="mb-8 space-x-4"> ${menu.footer.map((menu2) => renderTemplate`<li class="inline-block"> <a${addAttribute(menu2.url, "href")} class="p-4 text-white/75 hover:text-white transition-all"> ${menu2.name} </a> </li>`)} </ul>  ${renderComponent($$result, "Social", $$Social, { "source": social, "className": "social-icons mb-8" })}  <p class="text-white/75">${unescapeHTML(markdownify(config.params.copyright))}</p> </div> </footer>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/partials/Footer.astro", void 0);

const VALID_INPUT_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const VALID_SUPPORTED_FORMATS = [
  "jpeg",
  "jpg",
  "png",
  "tiff",
  "webp",
  "gif",
  "svg",
  "avif"
];
const DEFAULT_OUTPUT_FORMAT = "webp";
const DEFAULT_HASH_PROPS = [
  "src",
  "width",
  "height",
  "format",
  "quality",
  "fit",
  "position"
];

const DEFAULT_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  960,
  // older horizontal phones
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  1920,
  // 1080p
  2048,
  // QXGA
  2560,
  // WQXGA
  3200,
  // QHD+
  3840,
  // 4K
  4480,
  // 4.5K
  5120,
  // 5K
  6016
  // 6K
];
const LIMITED_RESOLUTIONS = [
  640,
  // older and lower-end phones
  750,
  // iPhone 6-8
  828,
  // iPhone XR/11
  1080,
  // iPhone 6-8 Plus
  1280,
  // 720p
  1668,
  // Various iPads
  2048,
  // QXGA
  2560
  // WQXGA
];
const getWidths = ({
  width,
  layout,
  breakpoints = DEFAULT_RESOLUTIONS,
  originalWidth
}) => {
  const smallerThanOriginal = (w) => !originalWidth || w <= originalWidth;
  if (layout === "full-width") {
    return breakpoints.filter(smallerThanOriginal);
  }
  if (!width) {
    return [];
  }
  const doubleWidth = width * 2;
  const maxSize = originalWidth ? Math.min(doubleWidth, originalWidth) : doubleWidth;
  if (layout === "fixed") {
    return originalWidth && width > originalWidth ? [originalWidth] : [width, maxSize];
  }
  if (layout === "responsive") {
    return [
      // Always include the image at 1x and 2x the specified width
      width,
      doubleWidth,
      ...breakpoints
    ].filter((w) => w <= maxSize).sort((a, b) => a - b);
  }
  return [];
};
const getSizesAttribute = ({
  width,
  layout
}) => {
  if (!width || !layout) {
    return void 0;
  }
  switch (layout) {
    // If screen is wider than the max size then image width is the max size,
    // otherwise it's the width of the screen
    case `responsive`:
      return `(min-width: ${width}px) ${width}px, 100vw`;
    // Image is always the same width, whatever the size of the screen
    case `fixed`:
      return `${width}px`;
    // Image is always the width of the screen
    case `full-width`:
      return `100vw`;
    case "none":
    default:
      return void 0;
  }
};

function isESMImportedImage(src) {
  return typeof src === "object" || typeof src === "function" && "src" in src;
}
function isRemoteImage(src) {
  return typeof src === "string";
}
async function resolveSrc(src) {
  return typeof src === "object" && "then" in src ? (await src).default ?? await src : src;
}

function matchPattern(url, remotePattern) {
  return matchProtocol(url, remotePattern.protocol) && matchHostname(url, remotePattern.hostname, true) && matchPort(url, remotePattern.port) && matchPathname(url, remotePattern.pathname);
}
function matchPort(url, port) {
  return !port || port === url.port;
}
function matchProtocol(url, protocol) {
  return !protocol || protocol === url.protocol.slice(0, -1);
}
function matchHostname(url, hostname, allowWildcard) {
  if (!hostname) {
    return true;
  } else if (!allowWildcard || !hostname.startsWith("*")) {
    return hostname === url.hostname;
  } else if (hostname.startsWith("**.")) {
    const slicedHostname = hostname.slice(2);
    return slicedHostname !== url.hostname && url.hostname.endsWith(slicedHostname);
  } else if (hostname.startsWith("*.")) {
    const slicedHostname = hostname.slice(1);
    const additionalSubdomains = url.hostname.replace(slicedHostname, "").split(".").filter(Boolean);
    return additionalSubdomains.length === 1;
  }
  return false;
}
function matchPathname(url, pathname, allowWildcard) {
  if (!pathname) {
    return true;
  } else if (!pathname.endsWith("*")) {
    return pathname === url.pathname;
  } else if (pathname.endsWith("/**")) {
    const slicedPathname = pathname.slice(0, -2);
    return slicedPathname !== url.pathname && url.pathname.startsWith(slicedPathname);
  } else if (pathname.endsWith("/*")) {
    const slicedPathname = pathname.slice(0, -1);
    const additionalPathChunks = url.pathname.replace(slicedPathname, "").split("/").filter(Boolean);
    return additionalPathChunks.length === 1;
  }
  return false;
}
function isRemoteAllowed(src, {
  domains = [],
  remotePatterns = []
}) {
  if (!isRemotePath(src)) return false;
  const url = new URL(src);
  return domains.some((domain) => matchHostname(url, domain)) || remotePatterns.some((remotePattern) => matchPattern(url, remotePattern));
}

function isLocalService(service) {
  if (!service) {
    return false;
  }
  return "transform" in service;
}
function parseQuality(quality) {
  let result = parseInt(quality);
  if (Number.isNaN(result)) {
    return quality;
  }
  return result;
}
const sortNumeric = (a, b) => a - b;
const baseService = {
  validateOptions(options) {
    if (!options.src || !isRemoteImage(options.src) && !isESMImportedImage(options.src)) {
      throw new AstroError({
        ...ExpectedImage,
        message: ExpectedImage.message(
          JSON.stringify(options.src),
          typeof options.src,
          JSON.stringify(options, (_, v) => v === void 0 ? null : v)
        )
      });
    }
    if (!isESMImportedImage(options.src)) {
      if (options.src.startsWith("/@fs/") || !isRemotePath(options.src) && !options.src.startsWith("/")) {
        throw new AstroError({
          ...LocalImageUsedWrongly,
          message: LocalImageUsedWrongly.message(options.src)
        });
      }
      let missingDimension;
      if (!options.width && !options.height) {
        missingDimension = "both";
      } else if (!options.width && options.height) {
        missingDimension = "width";
      } else if (options.width && !options.height) {
        missingDimension = "height";
      }
      if (missingDimension) {
        throw new AstroError({
          ...MissingImageDimension,
          message: MissingImageDimension.message(missingDimension, options.src)
        });
      }
    } else {
      if (!VALID_SUPPORTED_FORMATS.includes(options.src.format)) {
        throw new AstroError({
          ...UnsupportedImageFormat,
          message: UnsupportedImageFormat.message(
            options.src.format,
            options.src.src,
            VALID_SUPPORTED_FORMATS
          )
        });
      }
      if (options.widths && options.densities) {
        throw new AstroError(IncompatibleDescriptorOptions);
      }
      if (options.src.format === "svg") {
        options.format = "svg";
      }
      if (options.src.format === "svg" && options.format !== "svg" || options.src.format !== "svg" && options.format === "svg") {
        throw new AstroError(UnsupportedImageConversion);
      }
    }
    if (!options.format) {
      options.format = DEFAULT_OUTPUT_FORMAT;
    }
    if (options.width) options.width = Math.round(options.width);
    if (options.height) options.height = Math.round(options.height);
    if (options.layout && options.width && options.height) {
      options.fit ??= "cover";
      delete options.layout;
    }
    if (options.fit === "none") {
      delete options.fit;
    }
    return options;
  },
  getHTMLAttributes(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const {
      src,
      width,
      height,
      format,
      quality,
      densities,
      widths,
      formats,
      layout,
      priority,
      fit,
      position,
      ...attributes
    } = options;
    return {
      ...attributes,
      width: targetWidth,
      height: targetHeight,
      loading: attributes.loading ?? "lazy",
      decoding: attributes.decoding ?? "async"
    };
  },
  getSrcSet(options) {
    const { targetWidth, targetHeight } = getTargetDimensions(options);
    const aspectRatio = targetWidth / targetHeight;
    const { widths, densities } = options;
    const targetFormat = options.format ?? DEFAULT_OUTPUT_FORMAT;
    let transformedWidths = (widths ?? []).sort(sortNumeric);
    let imageWidth = options.width;
    let maxWidth = Infinity;
    if (isESMImportedImage(options.src)) {
      imageWidth = options.src.width;
      maxWidth = imageWidth;
      if (transformedWidths.length > 0 && transformedWidths.at(-1) > maxWidth) {
        transformedWidths = transformedWidths.filter((width) => width <= maxWidth);
        transformedWidths.push(maxWidth);
      }
    }
    transformedWidths = Array.from(new Set(transformedWidths));
    const {
      width: transformWidth,
      height: transformHeight,
      ...transformWithoutDimensions
    } = options;
    let allWidths = [];
    if (densities) {
      const densityValues = densities.map((density) => {
        if (typeof density === "number") {
          return density;
        } else {
          return parseFloat(density);
        }
      });
      const densityWidths = densityValues.sort(sortNumeric).map((density) => Math.round(targetWidth * density));
      allWidths = densityWidths.map((width, index) => ({
        width,
        descriptor: `${densityValues[index]}x`
      }));
    } else if (transformedWidths.length > 0) {
      allWidths = transformedWidths.map((width) => ({
        width,
        descriptor: `${width}w`
      }));
    }
    return allWidths.map(({ width, descriptor }) => {
      const height = Math.round(width / aspectRatio);
      const transform = { ...transformWithoutDimensions, width, height };
      return {
        transform,
        descriptor,
        attributes: {
          type: `image/${targetFormat}`
        }
      };
    });
  },
  getURL(options, imageConfig) {
    const searchParams = new URLSearchParams();
    if (isESMImportedImage(options.src)) {
      searchParams.append("href", options.src.src);
    } else if (isRemoteAllowed(options.src, imageConfig)) {
      searchParams.append("href", options.src);
    } else {
      return options.src;
    }
    const params = {
      w: "width",
      h: "height",
      q: "quality",
      f: "format",
      fit: "fit",
      position: "position"
    };
    Object.entries(params).forEach(([param, key]) => {
      options[key] && searchParams.append(param, options[key].toString());
    });
    const imageEndpoint = joinPaths("/", imageConfig.endpoint.route);
    return `${imageEndpoint}?${searchParams}`;
  },
  parseURL(url) {
    const params = url.searchParams;
    if (!params.has("href")) {
      return void 0;
    }
    const transform = {
      src: params.get("href"),
      width: params.has("w") ? parseInt(params.get("w")) : void 0,
      height: params.has("h") ? parseInt(params.get("h")) : void 0,
      format: params.get("f"),
      quality: params.get("q"),
      fit: params.get("fit"),
      position: params.get("position") ?? void 0
    };
    return transform;
  }
};
function getTargetDimensions(options) {
  let targetWidth = options.width;
  let targetHeight = options.height;
  if (isESMImportedImage(options.src)) {
    const aspectRatio = options.src.width / options.src.height;
    if (targetHeight && !targetWidth) {
      targetWidth = Math.round(targetHeight * aspectRatio);
    } else if (targetWidth && !targetHeight) {
      targetHeight = Math.round(targetWidth / aspectRatio);
    } else if (!targetWidth && !targetHeight) {
      targetWidth = options.src.width;
      targetHeight = options.src.height;
    }
  }
  return {
    targetWidth,
    targetHeight
  };
}

function isImageMetadata(src) {
  return src.fsPath && !("fsPath" in src);
}

const decoder = new TextDecoder();
const toUTF8String = (input, start = 0, end = input.length) => decoder.decode(input.slice(start, end));
const toHexString = (input, start = 0, end = input.length) => input.slice(start, end).reduce((memo, i) => memo + ("0" + i.toString(16)).slice(-2), "");
const readInt16LE = (input, offset = 0) => {
  const val = input[offset] + input[offset + 1] * 2 ** 8;
  return val | (val & 2 ** 15) * 131070;
};
const readUInt16BE = (input, offset = 0) => input[offset] * 2 ** 8 + input[offset + 1];
const readUInt16LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8;
const readUInt24LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16;
const readInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + (input[offset + 3] << 24);
const readUInt32BE = (input, offset = 0) => input[offset] * 2 ** 24 + input[offset + 1] * 2 ** 16 + input[offset + 2] * 2 ** 8 + input[offset + 3];
const readUInt32LE = (input, offset = 0) => input[offset] + input[offset + 1] * 2 ** 8 + input[offset + 2] * 2 ** 16 + input[offset + 3] * 2 ** 24;
const methods = {
  readUInt16BE,
  readUInt16LE,
  readUInt32BE,
  readUInt32LE
};
function readUInt(input, bits, offset, isBigEndian) {
  offset = offset || 0;
  const endian = isBigEndian ? "BE" : "LE";
  const methodName = "readUInt" + bits + endian;
  return methods[methodName](input, offset);
}
function readBox(buffer, offset) {
  if (buffer.length - offset < 4) return;
  const boxSize = readUInt32BE(buffer, offset);
  if (buffer.length - offset < boxSize) return;
  return {
    name: toUTF8String(buffer, 4 + offset, 8 + offset),
    offset,
    size: boxSize
  };
}
function findBox(buffer, boxName, offset) {
  while (offset < buffer.length) {
    const box = readBox(buffer, offset);
    if (!box) break;
    if (box.name === boxName) return box;
    offset += box.size;
  }
}

const BMP = {
  validate: (input) => toUTF8String(input, 0, 2) === "BM",
  calculate: (input) => ({
    height: Math.abs(readInt32LE(input, 22)),
    width: readUInt32LE(input, 18)
  })
};

const TYPE_ICON = 1;
const SIZE_HEADER$1 = 2 + 2 + 2;
const SIZE_IMAGE_ENTRY = 1 + 1 + 1 + 1 + 2 + 2 + 4 + 4;
function getSizeFromOffset(input, offset) {
  const value = input[offset];
  return value === 0 ? 256 : value;
}
function getImageSize$1(input, imageIndex) {
  const offset = SIZE_HEADER$1 + imageIndex * SIZE_IMAGE_ENTRY;
  return {
    height: getSizeFromOffset(input, offset + 1),
    width: getSizeFromOffset(input, offset)
  };
}
const ICO = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_ICON;
  },
  calculate(input) {
    const nbImages = readUInt16LE(input, 4);
    const imageSize = getImageSize$1(input, 0);
    if (nbImages === 1) return imageSize;
    const imgs = [imageSize];
    for (let imageIndex = 1; imageIndex < nbImages; imageIndex += 1) {
      imgs.push(getImageSize$1(input, imageIndex));
    }
    return {
      height: imageSize.height,
      images: imgs,
      width: imageSize.width
    };
  }
};

const TYPE_CURSOR = 2;
const CUR = {
  validate(input) {
    const reserved = readUInt16LE(input, 0);
    const imageCount = readUInt16LE(input, 4);
    if (reserved !== 0 || imageCount === 0) return false;
    const imageType = readUInt16LE(input, 2);
    return imageType === TYPE_CURSOR;
  },
  calculate: (input) => ICO.calculate(input)
};

const DDS = {
  validate: (input) => readUInt32LE(input, 0) === 542327876,
  calculate: (input) => ({
    height: readUInt32LE(input, 12),
    width: readUInt32LE(input, 16)
  })
};

const gifRegexp = /^GIF8[79]a/;
const GIF = {
  validate: (input) => gifRegexp.test(toUTF8String(input, 0, 6)),
  calculate: (input) => ({
    height: readUInt16LE(input, 8),
    width: readUInt16LE(input, 6)
  })
};

const brandMap = {
  avif: "avif",
  mif1: "heif",
  msf1: "heif",
  // hief-sequence
  heic: "heic",
  heix: "heic",
  hevc: "heic",
  // heic-sequence
  hevx: "heic"
  // heic-sequence
};
function detectBrands(buffer, start, end) {
  let brandsDetected = {};
  for (let i = start; i <= end; i += 4) {
    const brand = toUTF8String(buffer, i, i + 4);
    if (brand in brandMap) {
      brandsDetected[brand] = 1;
    }
  }
  if ("avif" in brandsDetected) {
    return "avif";
  } else if ("heic" in brandsDetected || "heix" in brandsDetected || "hevc" in brandsDetected || "hevx" in brandsDetected) {
    return "heic";
  } else if ("mif1" in brandsDetected || "msf1" in brandsDetected) {
    return "heif";
  }
}
const HEIF = {
  validate(buffer) {
    const ftype = toUTF8String(buffer, 4, 8);
    const brand = toUTF8String(buffer, 8, 12);
    return "ftyp" === ftype && brand in brandMap;
  },
  calculate(buffer) {
    const metaBox = findBox(buffer, "meta", 0);
    const iprpBox = metaBox && findBox(buffer, "iprp", metaBox.offset + 12);
    const ipcoBox = iprpBox && findBox(buffer, "ipco", iprpBox.offset + 8);
    const ispeBox = ipcoBox && findBox(buffer, "ispe", ipcoBox.offset + 8);
    if (ispeBox) {
      return {
        height: readUInt32BE(buffer, ispeBox.offset + 16),
        width: readUInt32BE(buffer, ispeBox.offset + 12),
        type: detectBrands(buffer, 8, metaBox.offset)
      };
    }
    throw new TypeError("Invalid HEIF, no size found");
  }
};

const SIZE_HEADER = 4 + 4;
const FILE_LENGTH_OFFSET = 4;
const ENTRY_LENGTH_OFFSET = 4;
const ICON_TYPE_SIZE = {
  ICON: 32,
  "ICN#": 32,
  // m => 16 x 16
  "icm#": 16,
  icm4: 16,
  icm8: 16,
  // s => 16 x 16
  "ics#": 16,
  ics4: 16,
  ics8: 16,
  is32: 16,
  s8mk: 16,
  icp4: 16,
  // l => 32 x 32
  icl4: 32,
  icl8: 32,
  il32: 32,
  l8mk: 32,
  icp5: 32,
  ic11: 32,
  // h => 48 x 48
  ich4: 48,
  ich8: 48,
  ih32: 48,
  h8mk: 48,
  // . => 64 x 64
  icp6: 64,
  ic12: 32,
  // t => 128 x 128
  it32: 128,
  t8mk: 128,
  ic07: 128,
  // . => 256 x 256
  ic08: 256,
  ic13: 256,
  // . => 512 x 512
  ic09: 512,
  ic14: 512,
  // . => 1024 x 1024
  ic10: 1024
};
function readImageHeader(input, imageOffset) {
  const imageLengthOffset = imageOffset + ENTRY_LENGTH_OFFSET;
  return [
    toUTF8String(input, imageOffset, imageLengthOffset),
    readUInt32BE(input, imageLengthOffset)
  ];
}
function getImageSize(type) {
  const size = ICON_TYPE_SIZE[type];
  return { width: size, height: size, type };
}
const ICNS = {
  validate: (input) => toUTF8String(input, 0, 4) === "icns",
  calculate(input) {
    const inputLength = input.length;
    const fileLength = readUInt32BE(input, FILE_LENGTH_OFFSET);
    let imageOffset = SIZE_HEADER;
    let imageHeader = readImageHeader(input, imageOffset);
    let imageSize = getImageSize(imageHeader[0]);
    imageOffset += imageHeader[1];
    if (imageOffset === fileLength) return imageSize;
    const result = {
      height: imageSize.height,
      images: [imageSize],
      width: imageSize.width
    };
    while (imageOffset < fileLength && imageOffset < inputLength) {
      imageHeader = readImageHeader(input, imageOffset);
      imageSize = getImageSize(imageHeader[0]);
      imageOffset += imageHeader[1];
      result.images.push(imageSize);
    }
    return result;
  }
};

const J2C = {
  // TODO: this doesn't seem right. SIZ marker doesn't have to be right after the SOC
  validate: (input) => toHexString(input, 0, 4) === "ff4fff51",
  calculate: (input) => ({
    height: readUInt32BE(input, 12),
    width: readUInt32BE(input, 8)
  })
};

const JP2 = {
  validate(input) {
    if (readUInt32BE(input, 4) !== 1783636e3 || readUInt32BE(input, 0) < 1) return false;
    const ftypBox = findBox(input, "ftyp", 0);
    if (!ftypBox) return false;
    return readUInt32BE(input, ftypBox.offset + 4) === 1718909296;
  },
  calculate(input) {
    const jp2hBox = findBox(input, "jp2h", 0);
    const ihdrBox = jp2hBox && findBox(input, "ihdr", jp2hBox.offset + 8);
    if (ihdrBox) {
      return {
        height: readUInt32BE(input, ihdrBox.offset + 8),
        width: readUInt32BE(input, ihdrBox.offset + 12)
      };
    }
    throw new TypeError("Unsupported JPEG 2000 format");
  }
};

const EXIF_MARKER = "45786966";
const APP1_DATA_SIZE_BYTES = 2;
const EXIF_HEADER_BYTES = 6;
const TIFF_BYTE_ALIGN_BYTES = 2;
const BIG_ENDIAN_BYTE_ALIGN = "4d4d";
const LITTLE_ENDIAN_BYTE_ALIGN = "4949";
const IDF_ENTRY_BYTES = 12;
const NUM_DIRECTORY_ENTRIES_BYTES = 2;
function isEXIF(input) {
  return toHexString(input, 2, 6) === EXIF_MARKER;
}
function extractSize(input, index) {
  return {
    height: readUInt16BE(input, index),
    width: readUInt16BE(input, index + 2)
  };
}
function extractOrientation(exifBlock, isBigEndian) {
  const idfOffset = 8;
  const offset = EXIF_HEADER_BYTES + idfOffset;
  const idfDirectoryEntries = readUInt(exifBlock, 16, offset, isBigEndian);
  for (let directoryEntryNumber = 0; directoryEntryNumber < idfDirectoryEntries; directoryEntryNumber++) {
    const start = offset + NUM_DIRECTORY_ENTRIES_BYTES + directoryEntryNumber * IDF_ENTRY_BYTES;
    const end = start + IDF_ENTRY_BYTES;
    if (start > exifBlock.length) {
      return;
    }
    const block = exifBlock.slice(start, end);
    const tagNumber = readUInt(block, 16, 0, isBigEndian);
    if (tagNumber === 274) {
      const dataFormat = readUInt(block, 16, 2, isBigEndian);
      if (dataFormat !== 3) {
        return;
      }
      const numberOfComponents = readUInt(block, 32, 4, isBigEndian);
      if (numberOfComponents !== 1) {
        return;
      }
      return readUInt(block, 16, 8, isBigEndian);
    }
  }
}
function validateExifBlock(input, index) {
  const exifBlock = input.slice(APP1_DATA_SIZE_BYTES, index);
  const byteAlign = toHexString(
    exifBlock,
    EXIF_HEADER_BYTES,
    EXIF_HEADER_BYTES + TIFF_BYTE_ALIGN_BYTES
  );
  const isBigEndian = byteAlign === BIG_ENDIAN_BYTE_ALIGN;
  const isLittleEndian = byteAlign === LITTLE_ENDIAN_BYTE_ALIGN;
  if (isBigEndian || isLittleEndian) {
    return extractOrientation(exifBlock, isBigEndian);
  }
}
function validateInput(input, index) {
  if (index > input.length) {
    throw new TypeError("Corrupt JPG, exceeded buffer limits");
  }
}
const JPG = {
  validate: (input) => toHexString(input, 0, 2) === "ffd8",
  calculate(input) {
    input = input.slice(4);
    let orientation;
    let next;
    while (input.length) {
      const i = readUInt16BE(input, 0);
      if (input[i] !== 255) {
        input = input.slice(i);
        continue;
      }
      if (isEXIF(input)) {
        orientation = validateExifBlock(input, i);
      }
      validateInput(input, i);
      next = input[i + 1];
      if (next === 192 || next === 193 || next === 194) {
        const size = extractSize(input, i + 5);
        if (!orientation) {
          return size;
        }
        return {
          height: size.height,
          orientation,
          width: size.width
        };
      }
      input = input.slice(i + 2);
    }
    throw new TypeError("Invalid JPG, no size found");
  }
};

const KTX = {
  validate: (input) => {
    const signature = toUTF8String(input, 1, 7);
    return ["KTX 11", "KTX 20"].includes(signature);
  },
  calculate: (input) => {
    const type = input[5] === 49 ? "ktx" : "ktx2";
    const offset = type === "ktx" ? 36 : 20;
    return {
      height: readUInt32LE(input, offset + 4),
      width: readUInt32LE(input, offset),
      type
    };
  }
};

const pngSignature = "PNG\r\n\n";
const pngImageHeaderChunkName = "IHDR";
const pngFriedChunkName = "CgBI";
const PNG = {
  validate(input) {
    if (pngSignature === toUTF8String(input, 1, 8)) {
      let chunkName = toUTF8String(input, 12, 16);
      if (chunkName === pngFriedChunkName) {
        chunkName = toUTF8String(input, 28, 32);
      }
      if (chunkName !== pngImageHeaderChunkName) {
        throw new TypeError("Invalid PNG");
      }
      return true;
    }
    return false;
  },
  calculate(input) {
    if (toUTF8String(input, 12, 16) === pngFriedChunkName) {
      return {
        height: readUInt32BE(input, 36),
        width: readUInt32BE(input, 32)
      };
    }
    return {
      height: readUInt32BE(input, 20),
      width: readUInt32BE(input, 16)
    };
  }
};

const PNMTypes = {
  P1: "pbm/ascii",
  P2: "pgm/ascii",
  P3: "ppm/ascii",
  P4: "pbm",
  P5: "pgm",
  P6: "ppm",
  P7: "pam",
  PF: "pfm"
};
const handlers = {
  default: (lines) => {
    let dimensions = [];
    while (lines.length > 0) {
      const line = lines.shift();
      if (line[0] === "#") {
        continue;
      }
      dimensions = line.split(" ");
      break;
    }
    if (dimensions.length === 2) {
      return {
        height: parseInt(dimensions[1], 10),
        width: parseInt(dimensions[0], 10)
      };
    } else {
      throw new TypeError("Invalid PNM");
    }
  },
  pam: (lines) => {
    const size = {};
    while (lines.length > 0) {
      const line = lines.shift();
      if (line.length > 16 || line.charCodeAt(0) > 128) {
        continue;
      }
      const [key, value] = line.split(" ");
      if (key && value) {
        size[key.toLowerCase()] = parseInt(value, 10);
      }
      if (size.height && size.width) {
        break;
      }
    }
    if (size.height && size.width) {
      return {
        height: size.height,
        width: size.width
      };
    } else {
      throw new TypeError("Invalid PAM");
    }
  }
};
const PNM = {
  validate: (input) => toUTF8String(input, 0, 2) in PNMTypes,
  calculate(input) {
    const signature = toUTF8String(input, 0, 2);
    const type = PNMTypes[signature];
    const lines = toUTF8String(input, 3).split(/[\r\n]+/);
    const handler = handlers[type] || handlers.default;
    return handler(lines);
  }
};

const PSD = {
  validate: (input) => toUTF8String(input, 0, 4) === "8BPS",
  calculate: (input) => ({
    height: readUInt32BE(input, 14),
    width: readUInt32BE(input, 18)
  })
};

const svgReg = /<svg\s([^>"']|"[^"]*"|'[^']*')*>/;
const extractorRegExps = {
  height: /\sheight=(['"])([^%]+?)\1/,
  root: svgReg,
  viewbox: /\sviewBox=(['"])(.+?)\1/i,
  width: /\swidth=(['"])([^%]+?)\1/
};
const INCH_CM = 2.54;
const units = {
  in: 96,
  cm: 96 / INCH_CM,
  em: 16,
  ex: 8,
  m: 96 / INCH_CM * 100,
  mm: 96 / INCH_CM / 10,
  pc: 96 / 72 / 12,
  pt: 96 / 72,
  px: 1
};
const unitsReg = new RegExp(
  `^([0-9.]+(?:e\\d+)?)(${Object.keys(units).join("|")})?$`
);
function parseLength(len) {
  const m = unitsReg.exec(len);
  if (!m) {
    return void 0;
  }
  return Math.round(Number(m[1]) * (units[m[2]] || 1));
}
function parseViewbox(viewbox) {
  const bounds = viewbox.split(" ");
  return {
    height: parseLength(bounds[3]),
    width: parseLength(bounds[2])
  };
}
function parseAttributes(root) {
  const width = extractorRegExps.width.exec(root);
  const height = extractorRegExps.height.exec(root);
  const viewbox = extractorRegExps.viewbox.exec(root);
  return {
    height: height && parseLength(height[2]),
    viewbox: viewbox && parseViewbox(viewbox[2]),
    width: width && parseLength(width[2])
  };
}
function calculateByDimensions(attrs) {
  return {
    height: attrs.height,
    width: attrs.width
  };
}
function calculateByViewbox(attrs, viewbox) {
  const ratio = viewbox.width / viewbox.height;
  if (attrs.width) {
    return {
      height: Math.floor(attrs.width / ratio),
      width: attrs.width
    };
  }
  if (attrs.height) {
    return {
      height: attrs.height,
      width: Math.floor(attrs.height * ratio)
    };
  }
  return {
    height: viewbox.height,
    width: viewbox.width
  };
}
const SVG = {
  // Scan only the first kilo-byte to speed up the check on larger files
  validate: (input) => svgReg.test(toUTF8String(input, 0, 1e3)),
  calculate(input) {
    const root = extractorRegExps.root.exec(toUTF8String(input));
    if (root) {
      const attrs = parseAttributes(root[0]);
      if (attrs.width && attrs.height) {
        return calculateByDimensions(attrs);
      }
      if (attrs.viewbox) {
        return calculateByViewbox(attrs, attrs.viewbox);
      }
    }
    throw new TypeError("Invalid SVG");
  }
};

const TGA = {
  validate(input) {
    return readUInt16LE(input, 0) === 0 && readUInt16LE(input, 4) === 0;
  },
  calculate(input) {
    return {
      height: readUInt16LE(input, 14),
      width: readUInt16LE(input, 12)
    };
  }
};

function readIFD(input, isBigEndian) {
  const ifdOffset = readUInt(input, 32, 4, isBigEndian);
  return input.slice(ifdOffset + 2);
}
function readValue(input, isBigEndian) {
  const low = readUInt(input, 16, 8, isBigEndian);
  const high = readUInt(input, 16, 10, isBigEndian);
  return (high << 16) + low;
}
function nextTag(input) {
  if (input.length > 24) {
    return input.slice(12);
  }
}
function extractTags(input, isBigEndian) {
  const tags = {};
  let temp = input;
  while (temp && temp.length) {
    const code = readUInt(temp, 16, 0, isBigEndian);
    const type = readUInt(temp, 16, 2, isBigEndian);
    const length = readUInt(temp, 32, 4, isBigEndian);
    if (code === 0) {
      break;
    } else {
      if (length === 1 && (type === 3 || type === 4)) {
        tags[code] = readValue(temp, isBigEndian);
      }
      temp = nextTag(temp);
    }
  }
  return tags;
}
function determineEndianness(input) {
  const signature = toUTF8String(input, 0, 2);
  if ("II" === signature) {
    return "LE";
  } else if ("MM" === signature) {
    return "BE";
  }
}
const signatures = [
  // '492049', // currently not supported
  "49492a00",
  // Little endian
  "4d4d002a"
  // Big Endian
  // '4d4d002a', // BigTIFF > 4GB. currently not supported
];
const TIFF = {
  validate: (input) => signatures.includes(toHexString(input, 0, 4)),
  calculate(input) {
    const isBigEndian = determineEndianness(input) === "BE";
    const ifdBuffer = readIFD(input, isBigEndian);
    const tags = extractTags(ifdBuffer, isBigEndian);
    const width = tags[256];
    const height = tags[257];
    if (!width || !height) {
      throw new TypeError("Invalid Tiff. Missing tags");
    }
    return { height, width };
  }
};

function calculateExtended(input) {
  return {
    height: 1 + readUInt24LE(input, 7),
    width: 1 + readUInt24LE(input, 4)
  };
}
function calculateLossless(input) {
  return {
    height: 1 + ((input[4] & 15) << 10 | input[3] << 2 | (input[2] & 192) >> 6),
    width: 1 + ((input[2] & 63) << 8 | input[1])
  };
}
function calculateLossy(input) {
  return {
    height: readInt16LE(input, 8) & 16383,
    width: readInt16LE(input, 6) & 16383
  };
}
const WEBP = {
  validate(input) {
    const riffHeader = "RIFF" === toUTF8String(input, 0, 4);
    const webpHeader = "WEBP" === toUTF8String(input, 8, 12);
    const vp8Header = "VP8" === toUTF8String(input, 12, 15);
    return riffHeader && webpHeader && vp8Header;
  },
  calculate(input) {
    const chunkHeader = toUTF8String(input, 12, 16);
    input = input.slice(20, 30);
    if (chunkHeader === "VP8X") {
      const extendedHeader = input[0];
      const validStart = (extendedHeader & 192) === 0;
      const validEnd = (extendedHeader & 1) === 0;
      if (validStart && validEnd) {
        return calculateExtended(input);
      } else {
        throw new TypeError("Invalid WebP");
      }
    }
    if (chunkHeader === "VP8 " && input[0] !== 47) {
      return calculateLossy(input);
    }
    const signature = toHexString(input, 3, 6);
    if (chunkHeader === "VP8L" && signature !== "9d012a") {
      return calculateLossless(input);
    }
    throw new TypeError("Invalid WebP");
  }
};

const typeHandlers = /* @__PURE__ */ new Map([
  ["bmp", BMP],
  ["cur", CUR],
  ["dds", DDS],
  ["gif", GIF],
  ["heif", HEIF],
  ["icns", ICNS],
  ["ico", ICO],
  ["j2c", J2C],
  ["jp2", JP2],
  ["jpg", JPG],
  ["ktx", KTX],
  ["png", PNG],
  ["pnm", PNM],
  ["psd", PSD],
  ["svg", SVG],
  ["tga", TGA],
  ["tiff", TIFF],
  ["webp", WEBP]
]);
const types = Array.from(typeHandlers.keys());

const firstBytes = /* @__PURE__ */ new Map([
  [56, "psd"],
  [66, "bmp"],
  [68, "dds"],
  [71, "gif"],
  [73, "tiff"],
  [77, "tiff"],
  [82, "webp"],
  [105, "icns"],
  [137, "png"],
  [255, "jpg"]
]);
function detector(input) {
  const byte = input[0];
  const type = firstBytes.get(byte);
  if (type && typeHandlers.get(type).validate(input)) {
    return type;
  }
  return types.find((fileType) => typeHandlers.get(fileType).validate(input));
}

const globalOptions = {
  disabledTypes: []
};
function lookup(input) {
  const type = detector(input);
  if (typeof type !== "undefined") {
    if (globalOptions.disabledTypes.includes(type)) {
      throw new TypeError("disabled file type: " + type);
    }
    const size = typeHandlers.get(type).calculate(input);
    if (size !== void 0) {
      size.type = size.type ?? type;
      return size;
    }
  }
  throw new TypeError("unsupported file type: " + type);
}

async function imageMetadata(data, src) {
  try {
    const result = lookup(data);
    if (!result.height || !result.width || !result.type) {
      throw new AstroError({
        ...NoImageMetadata,
        message: NoImageMetadata.message(src)
      });
    }
    const { width, height, type, orientation } = result;
    const isPortrait = (orientation || 0) >= 5;
    return {
      width: isPortrait ? height : width,
      height: isPortrait ? width : height,
      format: type,
      orientation
    };
  } catch {
    throw new AstroError({
      ...NoImageMetadata,
      message: NoImageMetadata.message(src)
    });
  }
}

async function inferRemoteSize(url) {
  const response = await fetch(url);
  if (!response.body || !response.ok) {
    throw new AstroError({
      ...FailedToFetchRemoteImageDimensions,
      message: FailedToFetchRemoteImageDimensions.message(url)
    });
  }
  const reader = response.body.getReader();
  let done, value;
  let accumulatedChunks = new Uint8Array();
  while (!done) {
    const readResult = await reader.read();
    done = readResult.done;
    if (done) break;
    if (readResult.value) {
      value = readResult.value;
      let tmp = new Uint8Array(accumulatedChunks.length + value.length);
      tmp.set(accumulatedChunks, 0);
      tmp.set(value, accumulatedChunks.length);
      accumulatedChunks = tmp;
      try {
        const dimensions = await imageMetadata(accumulatedChunks, url);
        if (dimensions) {
          await reader.cancel();
          return dimensions;
        }
      } catch {
      }
    }
  }
  throw new AstroError({
    ...NoImageMetadata,
    message: NoImageMetadata.message(url)
  });
}

async function getConfiguredImageService() {
  if (!globalThis?.astroAsset?.imageService) {
    const { default: service } = await import(
      // @ts-expect-error
      './sharp_DI8SVMZv.mjs'
    ).catch((e) => {
      const error = new AstroError(InvalidImageService);
      error.cause = e;
      throw error;
    });
    if (!globalThis.astroAsset) globalThis.astroAsset = {};
    globalThis.astroAsset.imageService = service;
    return service;
  }
  return globalThis.astroAsset.imageService;
}
async function getImage$1(options, imageConfig) {
  if (!options || typeof options !== "object") {
    throw new AstroError({
      ...ExpectedImageOptions,
      message: ExpectedImageOptions.message(JSON.stringify(options))
    });
  }
  if (typeof options.src === "undefined") {
    throw new AstroError({
      ...ExpectedImage,
      message: ExpectedImage.message(
        options.src,
        "undefined",
        JSON.stringify(options)
      )
    });
  }
  if (isImageMetadata(options)) {
    throw new AstroError(ExpectedNotESMImage);
  }
  const service = await getConfiguredImageService();
  const resolvedOptions = {
    ...options,
    src: await resolveSrc(options.src)
  };
  let originalWidth;
  let originalHeight;
  let originalFormat;
  if (options.inferSize && isRemoteImage(resolvedOptions.src) && isRemotePath(resolvedOptions.src)) {
    const result = await inferRemoteSize(resolvedOptions.src);
    resolvedOptions.width ??= result.width;
    resolvedOptions.height ??= result.height;
    originalWidth = result.width;
    originalHeight = result.height;
    originalFormat = result.format;
    delete resolvedOptions.inferSize;
  }
  const originalFilePath = isESMImportedImage(resolvedOptions.src) ? resolvedOptions.src.fsPath : void 0;
  const clonedSrc = isESMImportedImage(resolvedOptions.src) ? (
    // @ts-expect-error - clone is a private, hidden prop
    resolvedOptions.src.clone ?? resolvedOptions.src
  ) : resolvedOptions.src;
  if (isESMImportedImage(clonedSrc)) {
    originalWidth = clonedSrc.width;
    originalHeight = clonedSrc.height;
    originalFormat = clonedSrc.format;
  }
  if (originalWidth && originalHeight) {
    const aspectRatio = originalWidth / originalHeight;
    if (resolvedOptions.height && !resolvedOptions.width) {
      resolvedOptions.width = Math.round(resolvedOptions.height * aspectRatio);
    } else if (resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.height = Math.round(resolvedOptions.width / aspectRatio);
    } else if (!resolvedOptions.width && !resolvedOptions.height) {
      resolvedOptions.width = originalWidth;
      resolvedOptions.height = originalHeight;
    }
  }
  resolvedOptions.src = clonedSrc;
  const layout = options.layout ?? imageConfig.experimentalLayout;
  if (imageConfig.experimentalResponsiveImages && layout) {
    resolvedOptions.widths ||= getWidths({
      width: resolvedOptions.width,
      layout,
      originalWidth,
      breakpoints: imageConfig.experimentalBreakpoints?.length ? imageConfig.experimentalBreakpoints : isLocalService(service) ? LIMITED_RESOLUTIONS : DEFAULT_RESOLUTIONS
    });
    resolvedOptions.sizes ||= getSizesAttribute({ width: resolvedOptions.width, layout });
    if (resolvedOptions.priority) {
      resolvedOptions.loading ??= "eager";
      resolvedOptions.decoding ??= "sync";
      resolvedOptions.fetchpriority ??= "high";
    } else {
      resolvedOptions.loading ??= "lazy";
      resolvedOptions.decoding ??= "async";
      resolvedOptions.fetchpriority ??= "auto";
    }
    delete resolvedOptions.priority;
    delete resolvedOptions.densities;
  }
  const validatedOptions = service.validateOptions ? await service.validateOptions(resolvedOptions, imageConfig) : resolvedOptions;
  const srcSetTransforms = service.getSrcSet ? await service.getSrcSet(validatedOptions, imageConfig) : [];
  let imageURL = await service.getURL(validatedOptions, imageConfig);
  const matchesOriginal = (transform) => transform.width === originalWidth && transform.height === originalHeight && transform.format === originalFormat;
  let srcSets = await Promise.all(
    srcSetTransforms.map(async (srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesOriginal(srcSet.transform) ? imageURL : await service.getURL(srcSet.transform, imageConfig),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    })
  );
  if (isLocalService(service) && globalThis.astroAsset.addStaticImage && !(isRemoteImage(validatedOptions.src) && imageURL === validatedOptions.src)) {
    const propsToHash = service.propertiesToHash ?? DEFAULT_HASH_PROPS;
    imageURL = globalThis.astroAsset.addStaticImage(
      validatedOptions,
      propsToHash,
      originalFilePath
    );
    srcSets = srcSetTransforms.map((srcSet) => {
      return {
        transform: srcSet.transform,
        url: matchesOriginal(srcSet.transform) ? imageURL : globalThis.astroAsset.addStaticImage(srcSet.transform, propsToHash, originalFilePath),
        descriptor: srcSet.descriptor,
        attributes: srcSet.attributes
      };
    });
  }
  return {
    rawOptions: resolvedOptions,
    options: validatedOptions,
    src: imageURL,
    srcSet: {
      values: srcSets,
      attribute: srcSets.map((srcSet) => `${srcSet.url} ${srcSet.descriptor}`).join(", ")
    },
    attributes: service.getHTMLAttributes !== void 0 ? await service.getHTMLAttributes(validatedOptions, imageConfig) : {}
  };
}

function addCSSVarsToStyle(vars, styles) {
  const cssVars = Object.entries(vars).filter(([_, value]) => value !== void 0 && value !== false).map(([key, value]) => `--${key}: ${value};`).join(" ");
  if (!styles) {
    return cssVars;
  }
  const style = typeof styles === "string" ? styles : toStyleString(styles);
  return `${cssVars} ${style}`;
}
const cssFitValues = ["fill", "contain", "cover", "scale-down"];
function applyResponsiveAttributes({
  layout,
  image,
  props,
  additionalAttributes
}) {
  const attributes = { ...additionalAttributes, ...image.attributes };
  attributes.style = addCSSVarsToStyle(
    {
      w: image.attributes.width ?? props.width ?? image.options.width,
      h: image.attributes.height ?? props.height ?? image.options.height,
      fit: cssFitValues.includes(props.fit ?? "") && props.fit,
      pos: props.position
    },
    attributes.style
  );
  attributes["data-astro-image"] = layout;
  return attributes;
}

const $$Astro$5 = createAstro("https://xszn.org/");
const $$Image = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Image;
  const props = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  if (typeof props.width === "string") {
    props.width = parseInt(props.width);
  }
  if (typeof props.height === "string") {
    props.height = parseInt(props.height);
  }
  const layout = props.layout ?? imageConfig.experimentalLayout ?? "none";
  const useResponsive = imageConfig.experimentalResponsiveImages && layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.experimentalLayout;
    props.fit ??= imageConfig.experimentalObjectFit ?? "cover";
    props.position ??= imageConfig.experimentalObjectPosition ?? "center";
  }
  const image = await getImage(props);
  const additionalAttributes = {};
  if (image.srcSet.values.length > 0) {
    additionalAttributes.srcset = image.srcSet.attribute;
  }
  const { class: className, ...attributes } = useResponsive ? applyResponsiveAttributes({
    layout,
    image,
    props,
    additionalAttributes
  }) : { ...additionalAttributes, ...image.attributes };
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(image.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/components/Image.astro", void 0);

const $$Astro$4 = createAstro("https://xszn.org/");
const $$Picture = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Picture;
  const defaultFormats = ["webp"];
  const defaultFallbackFormat = "png";
  const specialFormatsFallback = ["gif", "svg", "jpg", "jpeg"];
  const { formats = defaultFormats, pictureAttributes = {}, fallbackFormat, ...props } = Astro2.props;
  if (props.alt === void 0 || props.alt === null) {
    throw new AstroError(ImageMissingAlt);
  }
  const scopedStyleClass = props.class?.match(/\bastro-\w{8}\b/)?.[0];
  if (scopedStyleClass) {
    if (pictureAttributes.class) {
      pictureAttributes.class = `${pictureAttributes.class} ${scopedStyleClass}`;
    } else {
      pictureAttributes.class = scopedStyleClass;
    }
  }
  const layout = props.layout ?? imageConfig.experimentalLayout ?? "none";
  const useResponsive = imageConfig.experimentalResponsiveImages && layout !== "none";
  if (useResponsive) {
    props.layout ??= imageConfig.experimentalLayout;
    props.fit ??= imageConfig.experimentalObjectFit ?? "cover";
    props.position ??= imageConfig.experimentalObjectPosition ?? "center";
  }
  for (const key in props) {
    if (key.startsWith("data-astro-cid")) {
      pictureAttributes[key] = props[key];
    }
  }
  const originalSrc = await resolveSrc(props.src);
  const optimizedImages = await Promise.all(
    formats.map(
      async (format) => await getImage({
        ...props,
        src: originalSrc,
        format,
        widths: props.widths,
        densities: props.densities
      })
    )
  );
  let resultFallbackFormat = fallbackFormat ?? defaultFallbackFormat;
  if (!fallbackFormat && isESMImportedImage(originalSrc) && specialFormatsFallback.includes(originalSrc.format)) {
    resultFallbackFormat = originalSrc.format;
  }
  const fallbackImage = await getImage({
    ...props,
    format: resultFallbackFormat,
    widths: props.widths,
    densities: props.densities
  });
  const imgAdditionalAttributes = {};
  const sourceAdditionalAttributes = {};
  if (props.sizes) {
    sourceAdditionalAttributes.sizes = props.sizes;
  }
  if (fallbackImage.srcSet.values.length > 0) {
    imgAdditionalAttributes.srcset = fallbackImage.srcSet.attribute;
  }
  const { class: className, ...attributes } = useResponsive ? applyResponsiveAttributes({
    layout,
    image: fallbackImage,
    props,
    additionalAttributes: imgAdditionalAttributes
  }) : { ...imgAdditionalAttributes, ...fallbackImage.attributes };
  return renderTemplate`${maybeRenderHead()}<picture${spreadAttributes(pictureAttributes)}> ${Object.entries(optimizedImages).map(([_, image]) => {
    const srcsetAttribute = props.densities || !props.densities && !props.widths && !useResponsive ? `${image.src}${image.srcSet.values.length > 0 ? ", " + image.srcSet.attribute : ""}` : image.srcSet.attribute;
    return renderTemplate`<source${addAttribute(srcsetAttribute, "srcset")}${addAttribute(mime.lookup(image.options.format ?? image.src) ?? `image/${image.options.format}`, "type")}${spreadAttributes(sourceAdditionalAttributes)}>`;
  })}  <img${addAttribute(fallbackImage.src, "src")}${spreadAttributes(attributes)}${addAttribute(className, "class")}> </picture>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/components/Picture.astro", void 0);

const imageConfig = {"endpoint":{"route":"/_image"},"service":{"entrypoint":"astro/assets/services/sharp","config":{}},"domains":[],"remotePatterns":[],"experimentalResponsiveImages":false};
					const getImage = async (options) => await getImage$1(options, imageConfig);

const _astro_assets = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  Image: $$Image,
  getConfiguredImageService,
  getImage,
  imageConfig,
  inferRemoteSize,
  isLocalService
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://xszn.org/");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Logo;
  const { src } = Astro2.props;
  const {
    logo,
    logo_width,
    logo_height,
    logo_text,
    title
  } = config.site;
  return renderTemplate`${maybeRenderHead()}<a href="/" class="navbar-brand block" data-astro-cid-ijoll5s5> ${renderTemplate`${renderComponent($$result, "Image", $$Image, { "width": logo_width.replace("px", "") * 2, "height": logo_height.replace("px", "") * 2, "src": src ? src : logo, "alt": title, "style": {
    height: logo_height.replace("px", "") + "px",
    width: logo_width.replace("px", "") + "px"
  }, "data-astro-cid-ijoll5s5": true })}` } <h1 class="zhi-mang-xing-regular" data-astro-cid-ijoll5s5>${logo_text}</h1> </a> `;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/components/Logo.astro", void 0);

const $$Header = createComponent(($$result, $$props, $$slots) => {
  const { main } = menu;
  return renderTemplate`${maybeRenderHead()}<header class="header py-6 fixed top-0 left-0 right-0 z-40 bg-gray-50 bg-opacity-50 backdrop-blur-lg"> <nav class="navbar container"> <!-- logo --> <div class="order-0"> ${renderComponent($$result, "Logo", $$Logo, {})} </div> <!-- navbar toggler --> <input id="nav-toggle" type="checkbox" class="hidden"> <label id="show-button" for="nav-toggle" class="order-2 flex cursor-pointer items-center text-black md:order-1 md:hidden"> <svg class="h-6 fill-current" viewBox="0 0 20 20"> <title>Menu Open</title> <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z"></path> </svg> </label> <label id="hide-button" for="nav-toggle" class="order-2 hidden cursor-pointer items-center text-black md:order-1"> <svg class="h-6 fill-current" viewBox="0 0 20 20"> <title>Menu Close</title> <polygon points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2" transform="rotate(45 10 10)"></polygon> </svg> </label> <!-- /navbar toggler --> <ul id="nav-menu" class="navbar-nav order-3 hidden w-full md:order-1 md:flex md:w-auto"> ${main.map((menu2) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${menu2.hasChildren ? renderTemplate`<li class="nav-item nav-dropdown group relative cursor-pointer"> <span class="nav-link inline-flex items-center"> ${menu2.name} <svg class="h-5 w-5 fill-current" viewBox="0 0 20 20"> <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path> </svg> </span> <ul class="nav-dropdown-list hidden group-hover:block md:invisible md:absolute md:block md:opacity-0 md:group-hover:visible md:group-hover:opacity-100 bg-gray-50 bg-opacity-50 backdrop-blur-lg"> ${menu2.children?.map((child) => renderTemplate`<li class="nav-dropdown-item"> <a${addAttribute(child.url, "href")} class="nav-dropdown-link"> ${child.name} </a> </li>`)} </ul> </li>` : renderTemplate`<li class="nav-item"> <a${addAttribute(menu2.url, "href")} class="nav-link block"> ${menu2.name} </a> </li>`}` })}`)} </ul> <div class="order-1 ml-auto flex md:order-2 md:ml-0 md:w-[220px]"> <a class="mr-4 inline-block cursor-pointer p-2 text-xl text-dark transition hover:text-primary md:mr-0" href="/search" title="seach" aria-label="seach"> ${renderComponent($$result, "IoSearch", IoSearch, {})} </a> </div> </nav> </header>`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/partials/Header.astro", void 0);

var ro=Object.create;var wn=Object.defineProperty;var so=Object.getOwnPropertyDescriptor;var no=Object.getOwnPropertyNames;var ao=Object.getPrototypeOf,io=Object.prototype.hasOwnProperty;var pe=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var oo=(n,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of no(e))!io.call(n,s)&&s!==t&&wn(n,s,{get:()=>e[s],enumerable:!(r=so(e,s))||r.enumerable});return n};var pt=(n,e,t)=>(t=n!=null?ro(ao(n)):{},oo(wn(t,"default",{value:n,enumerable:true}),n));var In=pe((G2,kn)=>{kn.exports=function n(e,t){if(e===t)return  true;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return  false;var r,s,a;if(Array.isArray(e)){if(r=e.length,r!=t.length)return  false;for(s=r;s--!==0;)if(!n(e[s],t[s]))return  false;return  true}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(a=Object.keys(e),r=a.length,r!==Object.keys(t).length)return  false;for(s=r;s--!==0;)if(!Object.prototype.hasOwnProperty.call(t,a[s]))return  false;for(s=r;s--!==0;){var i=a[s];if(!n(e[i],t[i]))return  false}return  true}return e!==e&&t!==t};});var Tr=pe(F0=>{F0.byteLength=yo;F0.toByteArray=So;F0.fromByteArray=Io;var je=[],De=[],wo=typeof Uint8Array<"u"?Uint8Array:Array,Pr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";for(Dt=0,En=Pr.length;Dt<En;++Dt)je[Dt]=Pr[Dt],De[Pr.charCodeAt(Dt)]=Dt;var Dt,En;De[45]=62;De[95]=63;function On(n){var e=n.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var t=n.indexOf("=");t===-1&&(t=e);var r=t===e?0:4-t%4;return [t,r]}function yo(n){var e=On(n),t=e[0],r=e[1];return (t+r)*3/4-r}function Co(n,e,t){return (e+t)*3/4-t}function So(n){var e,t=On(n),r=t[0],s=t[1],a=new wo(Co(n,r,s)),i=0,l=s>0?r-4:r,u;for(u=0;u<l;u+=4)e=De[n.charCodeAt(u)]<<18|De[n.charCodeAt(u+1)]<<12|De[n.charCodeAt(u+2)]<<6|De[n.charCodeAt(u+3)],a[i++]=e>>16&255,a[i++]=e>>8&255,a[i++]=e&255;return s===2&&(e=De[n.charCodeAt(u)]<<2|De[n.charCodeAt(u+1)]>>4,a[i++]=e&255),s===1&&(e=De[n.charCodeAt(u)]<<10|De[n.charCodeAt(u+1)]<<4|De[n.charCodeAt(u+2)]>>2,a[i++]=e>>8&255,a[i++]=e&255),a}function Ao(n){return je[n>>18&63]+je[n>>12&63]+je[n>>6&63]+je[n&63]}function ko(n,e,t){for(var r,s=[],a=e;a<t;a+=3)r=(n[a]<<16&16711680)+(n[a+1]<<8&65280)+(n[a+2]&255),s.push(Ao(r));return s.join("")}function Io(n){for(var e,t=n.length,r=t%3,s=[],a=16383,i=0,l=t-r;i<l;i+=a)s.push(ko(n,i,i+a>l?l:i+a));return r===1?(e=n[t-1],s.push(je[e>>2]+je[e<<4&63]+"==")):r===2&&(e=(n[t-2]<<8)+n[t-1],s.push(je[e>>10]+je[e>>4&63]+je[e<<2&63]+"=")),s.join("")}});var Nr=pe((W2,Un)=>{var Lr=0,Dn=-3;function f0(){this.table=new Uint16Array(16),this.trans=new Uint16Array(288);}function Eo(n,e){this.source=n,this.sourceIndex=0,this.tag=0,this.bitcount=0,this.dest=e,this.destLen=0,this.ltree=new f0,this.dtree=new f0;}var Ln=new f0,Bn=new f0,Br=new Uint8Array(30),Mr=new Uint16Array(30),Mn=new Uint8Array(30),Nn=new Uint16Array(30),Oo=new Uint8Array([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Pn=new f0,Ke=new Uint8Array(320);function Rn(n,e,t,r){var s,a;for(s=0;s<t;++s)n[s]=0;for(s=0;s<30-t;++s)n[s+t]=s/t|0;for(a=r,s=0;s<30;++s)e[s]=a,a+=1<<n[s];}function Po(n,e){var t;for(t=0;t<7;++t)n.table[t]=0;for(n.table[7]=24,n.table[8]=152,n.table[9]=112,t=0;t<24;++t)n.trans[t]=256+t;for(t=0;t<144;++t)n.trans[24+t]=t;for(t=0;t<8;++t)n.trans[168+t]=280+t;for(t=0;t<112;++t)n.trans[176+t]=144+t;for(t=0;t<5;++t)e.table[t]=0;for(e.table[5]=32,t=0;t<32;++t)e.trans[t]=t;}var Tn=new Uint16Array(16);function Fr(n,e,t,r){var s,a;for(s=0;s<16;++s)n.table[s]=0;for(s=0;s<r;++s)n.table[e[t+s]]++;for(n.table[0]=0,a=0,s=0;s<16;++s)Tn[s]=a,a+=n.table[s];for(s=0;s<r;++s)e[t+s]&&(n.trans[Tn[e[t+s]]++]=s);}function To(n){n.bitcount--||(n.tag=n.source[n.sourceIndex++],n.bitcount=7);var e=n.tag&1;return n.tag>>>=1,e}function Ye(n,e,t){if(!e)return t;for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var r=n.tag&65535>>>16-e;return n.tag>>>=e,n.bitcount-=e,r+t}function Dr(n,e){for(;n.bitcount<24;)n.tag|=n.source[n.sourceIndex++]<<n.bitcount,n.bitcount+=8;var t=0,r=0,s=0,a=n.tag;do r=2*r+(a&1),a>>>=1,++s,t+=e.table[s],r-=e.table[s];while(r>=0);return n.tag=a,n.bitcount-=s,e.trans[t+r]}function Fo(n,e,t){var r,s,a,i,l,u;for(r=Ye(n,5,257),s=Ye(n,5,1),a=Ye(n,4,4),i=0;i<19;++i)Ke[i]=0;for(i=0;i<a;++i){var c=Ye(n,3,0);Ke[Oo[i]]=c;}for(Fr(Pn,Ke,0,19),l=0;l<r+s;){var f=Dr(n,Pn);switch(f){case 16:var h=Ke[l-1];for(u=Ye(n,2,3);u;--u)Ke[l++]=h;break;case 17:for(u=Ye(n,3,3);u;--u)Ke[l++]=0;break;case 18:for(u=Ye(n,7,11);u;--u)Ke[l++]=0;break;default:Ke[l++]=f;break}}Fr(e,Ke,0,r),Fr(t,Ke,r,s);}function Fn(n,e,t){for(;;){var r=Dr(n,e);if(r===256)return Lr;if(r<256)n.dest[n.destLen++]=r;else {var s,a,i,l;for(r-=257,s=Ye(n,Br[r],Mr[r]),a=Dr(n,t),i=n.destLen-Ye(n,Mn[a],Nn[a]),l=i;l<i+s;++l)n.dest[n.destLen++]=n.dest[l];}}}function Do(n){for(var e,t,r;n.bitcount>8;)n.sourceIndex--,n.bitcount-=8;if(e=n.source[n.sourceIndex+1],e=256*e+n.source[n.sourceIndex],t=n.source[n.sourceIndex+3],t=256*t+n.source[n.sourceIndex+2],e!==(~t&65535))return Dn;for(n.sourceIndex+=4,r=e;r;--r)n.dest[n.destLen++]=n.source[n.sourceIndex++];return n.bitcount=0,Lr}function Lo(n,e){var t=new Eo(n,e),r,s,a;do{switch(r=To(t),s=Ye(t,2,0),s){case 0:a=Do(t);break;case 1:a=Fn(t,Ln,Bn);break;case 2:Fo(t,t.ltree,t.dtree),a=Fn(t,t.ltree,t.dtree);break;default:a=Dn;}if(a!==Lr)throw new Error("Data error")}while(!r);return t.destLen<t.dest.length?typeof t.dest.slice=="function"?t.dest.slice(0,t.destLen):t.dest.subarray(0,t.destLen):t.dest}Po(Ln,Bn);Rn(Br,Mr,4,3);Rn(Mn,Nn,2,1);Br[28]=0;Mr[28]=258;Un.exports=Lo;});var zn=pe((H2,Gn)=>{var Bo=new Uint8Array(new Uint32Array([305419896]).buffer)[0]===18,Vn=(n,e,t)=>{let r=n[e];n[e]=n[t],n[t]=r;},Mo=n=>{let e=n.length;for(let t=0;t<e;t+=4)Vn(n,t,t+3),Vn(n,t+1,t+2);},No=n=>{Bo&&Mo(n);};Gn.exports={swap32LE:No};});var Gr=pe((q2,qn)=>{var Wn=Nr(),{swap32LE:Ro}=zn(),Vr=11,Lt=5,Uo=Vr-Lt,Vo=65536>>Vr,Go=1<<Uo,zo=Go-1,D0=2,Wo=1<<Lt,Rr=Wo-1,Hn=65536>>Lt,Ho=1024>>Lt,qo=Hn+Ho,Xo=qo,jo=32,Ko=Xo+jo,Yo=1<<D0,Ur=class{constructor(e){let t=typeof e.readUInt32BE=="function"&&typeof e.slice=="function";if(t||e instanceof Uint8Array){let r;if(t)this.highStart=e.readUInt32LE(0),this.errorValue=e.readUInt32LE(4),r=e.readUInt32LE(8),e=e.slice(12);else {let s=new DataView(e.buffer);this.highStart=s.getUint32(0,true),this.errorValue=s.getUint32(4,true),r=s.getUint32(8,true),e=e.subarray(12);}e=Wn(e,new Uint8Array(r)),e=Wn(e,new Uint8Array(r)),Ro(e),this.data=new Uint32Array(e.buffer);}else ({data:this.data,highStart:this.highStart,errorValue:this.errorValue}=e);}get(e){let t;return e<0||e>1114111?this.errorValue:e<55296||e>56319&&e<=65535?(t=(this.data[e>>Lt]<<D0)+(e&Rr),this.data[t]):e<=65535?(t=(this.data[Hn+(e-55296>>Lt)]<<D0)+(e&Rr),this.data[t]):e<this.highStart?(t=this.data[Ko-Vo+(e>>Vr)],t=this.data[t+(e>>Lt&zo)],t=(t<<D0)+(e&Rr),this.data[t]):this.data[this.data.length-Yo]}};qn.exports=Ur;});var Jn=pe((Y2,Zn)=>{var jr=1,Kr=0,Yr=class{constructor(e){this.stateTable=e.stateTable,this.accepting=e.accepting,this.tags=e.tags;}match(e){var t=this;return {*[Symbol.iterator](){for(var r=jr,s=null,a=null,i=null,l=0;l<e.length;l++){var u=e[l];i=r,r=t.stateTable[r][u],r===Kr&&(s!=null&&a!=null&&a>=s&&(yield [s,a,t.tags[i]]),r=t.stateTable[jr][u],s=null),r!==Kr&&s==null&&(s=l),t.accepting[r]&&(a=l),r===Kr&&(r=jr);}s!=null&&a!=null&&a>=s&&(yield [s,a,t.tags[r]]);}}}apply(e,t){for(var[r,s,a]of this.match(e))for(var i of a)typeof t[i]=="function"&&t[i](r,s,e.slice(r,s+1));}};Zn.exports=Yr;});var $n=pe((Z2,N0)=>{var sl=function(){function n(f,h){return h!=null&&f instanceof h}var e;try{e=Map;}catch{e=function(){};}var t;try{t=Set;}catch{t=function(){};}var r;try{r=Promise;}catch{r=function(){};}function s(f,h,v,y,C){typeof h=="object"&&(v=h.depth,y=h.prototype,C=h.includeNonEnumerable,h=h.circular);var O=[],D=[],E=typeof Buffer<"u";typeof h>"u"&&(h=true),typeof v>"u"&&(v=1/0);function T(p,P){if(p===null)return null;if(P===0)return p;var I,N;if(typeof p!="object")return p;if(n(p,e))I=new e;else if(n(p,t))I=new t;else if(n(p,r))I=new r(function(X,j){p.then(function(Pe){X(T(Pe,P-1));},function(Pe){j(T(Pe,P-1));});});else if(s.__isArray(p))I=[];else if(s.__isRegExp(p))I=new RegExp(p.source,c(p)),p.lastIndex&&(I.lastIndex=p.lastIndex);else if(s.__isDate(p))I=new Date(p.getTime());else {if(E&&Buffer.isBuffer(p))return Buffer.allocUnsafe?I=Buffer.allocUnsafe(p.length):I=new Buffer(p.length),p.copy(I),I;n(p,Error)?I=Object.create(p):typeof y>"u"?(N=Object.getPrototypeOf(p),I=Object.create(N)):(I=Object.create(y),N=y);}if(h){var te=O.indexOf(p);if(te!=-1)return D[te];O.push(p),D.push(I);}n(p,e)&&p.forEach(function(X,j){var Pe=T(j,P-1),ze=T(X,P-1);I.set(Pe,ze);}),n(p,t)&&p.forEach(function(X){var j=T(X,P-1);I.add(j);});for(var L in p){var Q;N&&(Q=Object.getOwnPropertyDescriptor(N,L)),!(Q&&Q.set==null)&&(I[L]=T(p[L],P-1));}if(Object.getOwnPropertySymbols)for(var V=Object.getOwnPropertySymbols(p),L=0;L<V.length;L++){var ce=V[L],ae=Object.getOwnPropertyDescriptor(p,ce);ae&&!ae.enumerable&&!C||(I[ce]=T(p[ce],P-1),ae.enumerable||Object.defineProperty(I,ce,{enumerable:false}));}if(C)for(var H=Object.getOwnPropertyNames(p),L=0;L<H.length;L++){var W=H[L],ae=Object.getOwnPropertyDescriptor(p,W);ae&&ae.enumerable||(I[W]=T(p[W],P-1),Object.defineProperty(I,W,{enumerable:false}));}return I}return T(f,v)}s.clonePrototype=function(h){if(h===null)return null;var v=function(){};return v.prototype=h,new v};function a(f){return Object.prototype.toString.call(f)}s.__objToStr=a;function i(f){return typeof f=="object"&&a(f)==="[object Date]"}s.__isDate=i;function l(f){return typeof f=="object"&&a(f)==="[object Array]"}s.__isArray=l;function u(f){return typeof f=="object"&&a(f)==="[object RegExp]"}s.__isRegExp=u;function c(f){var h="";return f.global&&(h+="g"),f.ignoreCase&&(h+="i"),f.multiline&&(h+="m"),h}return s.__getRegExpFlags=c,s}();typeof N0=="object"&&N0.exports&&(N0.exports=sl);});var Jr=pe(Zr=>{function _n(n){this.buffer=n,this.pos=0;}_n.prototype.read=function(n,e,t){this.pos+t>this.buffer.length&&(t=this.buffer.length-this.pos);for(var r=0;r<t;r++)n[e+r]=this.buffer[this.pos+r];return this.pos+=t,t};Zr.BrotliInput=_n;function Qn(n){this.buffer=n,this.pos=0;}Qn.prototype.write=function(n,e){if(this.pos+e>this.buffer.length)throw new Error("Output buffer is not large enough");return this.buffer.set(n.subarray(0,e),this.pos),this.pos+=e,e};Zr.BrotliOutput=Qn;});var ra=pe(($2,ta)=>{var Mt=4096,nl=2*Mt+32,ea=2*Mt-1,al=new Uint32Array([0,1,3,7,15,31,63,127,255,511,1023,2047,4095,8191,16383,32767,65535,131071,262143,524287,1048575,2097151,4194303,8388607,16777215]);function Nt(n){this.buf_=new Uint8Array(nl),this.input_=n,this.reset();}Nt.READ_SIZE=Mt;Nt.IBUF_MASK=ea;Nt.prototype.reset=function(){this.buf_ptr_=0,this.val_=0,this.pos_=0,this.bit_pos_=0,this.bit_end_pos_=0,this.eos_=0,this.readMoreInput();for(var n=0;n<4;n++)this.val_|=this.buf_[this.pos_]<<8*n,++this.pos_;return this.bit_end_pos_>0};Nt.prototype.readMoreInput=function(){if(!(this.bit_end_pos_>256))if(this.eos_){if(this.bit_pos_>this.bit_end_pos_)throw new Error("Unexpected end of input "+this.bit_pos_+" "+this.bit_end_pos_)}else {var n=this.buf_ptr_,e=this.input_.read(this.buf_,n,Mt);if(e<0)throw new Error("Unexpected end of input");if(e<Mt){this.eos_=1;for(var t=0;t<32;t++)this.buf_[n+e+t]=0;}if(n===0){for(var t=0;t<32;t++)this.buf_[(Mt<<1)+t]=this.buf_[t];this.buf_ptr_=Mt;}else this.buf_ptr_=0;this.bit_end_pos_+=e<<3;}};Nt.prototype.fillBitWindow=function(){for(;this.bit_pos_>=8;)this.val_>>>=8,this.val_|=this.buf_[this.pos_&ea]<<24,++this.pos_,this.bit_pos_=this.bit_pos_-8>>>0,this.bit_end_pos_=this.bit_end_pos_-8>>>0;};Nt.prototype.readBits=function(n){32-this.bit_pos_<n&&this.fillBitWindow();var e=this.val_>>>this.bit_pos_&al[n];return this.bit_pos_+=n,e};ta.exports=Nt;});var na=pe((_2,sa)=>{sa.exports="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";});var ia=pe(aa=>{var il=Tr();aa.init=function(){var n=$r().BrotliDecompressBuffer,e=il.toByteArray(na());return n(e)};});var _r=pe(Rt=>{var ol=ia();Rt.init=function(){Rt.dictionary=ol.init();};Rt.offsetsByLength=new Uint32Array([0,0,0,0,0,4096,9216,21504,35840,44032,53248,63488,74752,87040,93696,100864,104704,106752,108928,113536,115968,118528,119872,121280,122016]);Rt.sizeBitsByLength=new Uint8Array([0,0,0,0,10,10,11,11,10,10,10,10,10,9,9,8,7,7,8,7,7,6,6,5,5]);Rt.minDictionaryWordLength=4;Rt.maxDictionaryWordLength=24;});var es=pe(Qr=>{function Xt(n,e){this.bits=n,this.value=e;}Qr.HuffmanCode=Xt;var qt=15;function oa(n,e){for(var t=1<<e-1;n&t;)t>>=1;return (n&t-1)+t}function la(n,e,t,r,s){do r-=t,n[e+r]=new Xt(s.bits,s.value);while(r>0)}function ll(n,e,t){for(var r=1<<e-t;e<qt&&(r-=n[e],!(r<=0));)++e,r<<=1;return e-t}Qr.BrotliBuildHuffmanTable=function(n,e,t,r,s){var a=e,i,l,u,c,f,h,v,y,C,O,D,E=new Int32Array(qt+1),T=new Int32Array(qt+1);for(D=new Int32Array(s),u=0;u<s;u++)E[r[u]]++;for(T[1]=0,l=1;l<qt;l++)T[l+1]=T[l]+E[l];for(u=0;u<s;u++)r[u]!==0&&(D[T[r[u]]++]=u);if(y=t,C=1<<y,O=C,T[qt]===1){for(c=0;c<O;++c)n[e+c]=new Xt(0,D[0]&65535);return O}for(c=0,u=0,l=1,f=2;l<=t;++l,f<<=1)for(;E[l]>0;--E[l])i=new Xt(l&255,D[u++]&65535),la(n,e+c,f,C,i),c=oa(c,l);for(v=O-1,h=-1,l=t+1,f=2;l<=qt;++l,f<<=1)for(;E[l]>0;--E[l])(c&v)!==h&&(e+=C,y=ll(E,l,t),C=1<<y,O+=C,h=c&v,n[a+h]=new Xt(y+t&255,e-a-h&65535)),i=new Xt(l-t&255,D[u++]&65535),la(n,e+(c>>t),f,C,i),c=oa(c,l);return O};});var ua=pe(ts=>{ts.lookup=new Uint8Array([0,0,0,0,0,0,0,0,0,4,4,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,8,12,16,12,12,20,12,16,24,28,12,12,32,12,36,12,44,44,44,44,44,44,44,44,44,44,32,32,24,40,28,12,12,48,52,52,52,48,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,48,52,52,52,52,52,24,12,28,12,12,12,56,60,60,60,56,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,56,60,60,60,60,60,24,12,28,12,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,6,6,6,6,6,6,6,7,0,8,8,8,8,8,8,8,8,8,8,8,8,8,8,8,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,16,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,24,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,32,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,40,48,48,48,48,48,48,48,48,48,48,48,48,48,48,48,56,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,11,11,11,11,12,12,12,12,13,13,13,13,14,14,14,14,15,15,15,15,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,22,22,22,22,23,23,23,23,24,24,24,24,25,25,25,25,26,26,26,26,27,27,27,27,28,28,28,28,29,29,29,29,30,30,30,30,31,31,31,31,32,32,32,32,33,33,33,33,34,34,34,34,35,35,35,35,36,36,36,36,37,37,37,37,38,38,38,38,39,39,39,39,40,40,40,40,41,41,41,41,42,42,42,42,43,43,43,43,44,44,44,44,45,45,45,45,46,46,46,46,47,47,47,47,48,48,48,48,49,49,49,49,50,50,50,50,51,51,51,51,52,52,52,52,53,53,53,53,54,54,54,54,55,55,55,55,56,56,56,56,57,57,57,57,58,58,58,58,59,59,59,59,60,60,60,60,61,61,61,61,62,62,62,62,63,63,63,63,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);ts.lookupOffsets=new Uint16Array([1024,1536,1280,1536,0,256,768,512]);});var ca=pe(jt=>{function k(n,e){this.offset=n,this.nbits=e;}jt.kBlockLengthPrefixCode=[new k(1,2),new k(5,2),new k(9,2),new k(13,2),new k(17,3),new k(25,3),new k(33,3),new k(41,3),new k(49,4),new k(65,4),new k(81,4),new k(97,4),new k(113,5),new k(145,5),new k(177,5),new k(209,5),new k(241,6),new k(305,6),new k(369,7),new k(497,8),new k(753,9),new k(1265,10),new k(2289,11),new k(4337,12),new k(8433,13),new k(16625,24)];jt.kInsertLengthPrefixCode=[new k(0,0),new k(1,0),new k(2,0),new k(3,0),new k(4,0),new k(5,0),new k(6,1),new k(8,1),new k(10,2),new k(14,2),new k(18,3),new k(26,3),new k(34,4),new k(50,4),new k(66,5),new k(98,5),new k(130,6),new k(194,7),new k(322,8),new k(578,9),new k(1090,10),new k(2114,12),new k(6210,14),new k(22594,24)];jt.kCopyLengthPrefixCode=[new k(2,0),new k(3,0),new k(4,0),new k(5,0),new k(6,0),new k(7,0),new k(8,0),new k(9,0),new k(10,1),new k(12,1),new k(14,2),new k(18,2),new k(22,3),new k(30,3),new k(38,4),new k(54,4),new k(70,5),new k(102,5),new k(134,6),new k(198,7),new k(326,8),new k(582,9),new k(1094,10),new k(2118,24)];jt.kInsertRangeLut=[0,0,8,8,0,16,8,16,16];jt.kCopyRangeLut=[0,8,0,8,16,0,16,8,16];});var pa=pe(R0=>{var ul=_r(),F=0,fa=1,cl=2,fl=3,hl=4,dl=5,pl=6,bl=7,gl=8,da=9,ue=10,he=11,rs=12,ml=13,vl=14,xl=15,wl=16,yl=17,Cl=18,Sl=20;function x(n,e,t){this.prefix=new Uint8Array(n.length),this.transform=e,this.suffix=new Uint8Array(t.length);for(var r=0;r<n.length;r++)this.prefix[r]=n.charCodeAt(r);for(var r=0;r<t.length;r++)this.suffix[r]=t.charCodeAt(r);}var d0=[new x("",F,""),new x("",F," "),new x(" ",F," "),new x("",rs,""),new x("",ue," "),new x("",F," the "),new x(" ",F,""),new x("s ",F," "),new x("",F," of "),new x("",ue,""),new x("",F," and "),new x("",ml,""),new x("",fa,""),new x(", ",F," "),new x("",F,", "),new x(" ",ue," "),new x("",F," in "),new x("",F," to "),new x("e ",F," "),new x("",F,'"'),new x("",F,"."),new x("",F,'">'),new x("",F,`
`),new x("",fl,""),new x("",F,"]"),new x("",F," for "),new x("",vl,""),new x("",cl,""),new x("",F," a "),new x("",F," that "),new x(" ",ue,""),new x("",F,". "),new x(".",F,""),new x(" ",F,", "),new x("",xl,""),new x("",F," with "),new x("",F,"'"),new x("",F," from "),new x("",F," by "),new x("",wl,""),new x("",yl,""),new x(" the ",F,""),new x("",hl,""),new x("",F,". The "),new x("",he,""),new x("",F," on "),new x("",F," as "),new x("",F," is "),new x("",bl,""),new x("",fa,"ing "),new x("",F,`
	`),new x("",F,":"),new x(" ",F,". "),new x("",F,"ed "),new x("",Sl,""),new x("",Cl,""),new x("",pl,""),new x("",F,"("),new x("",ue,", "),new x("",gl,""),new x("",F," at "),new x("",F,"ly "),new x(" the ",F," of "),new x("",dl,""),new x("",da,""),new x(" ",ue,", "),new x("",ue,'"'),new x(".",F,"("),new x("",he," "),new x("",ue,'">'),new x("",F,'="'),new x(" ",F,"."),new x(".com/",F,""),new x(" the ",F," of the "),new x("",ue,"'"),new x("",F,". This "),new x("",F,","),new x(".",F," "),new x("",ue,"("),new x("",ue,"."),new x("",F," not "),new x(" ",F,'="'),new x("",F,"er "),new x(" ",he," "),new x("",F,"al "),new x(" ",he,""),new x("",F,"='"),new x("",he,'"'),new x("",ue,". "),new x(" ",F,"("),new x("",F,"ful "),new x(" ",ue,". "),new x("",F,"ive "),new x("",F,"less "),new x("",he,"'"),new x("",F,"est "),new x(" ",ue,"."),new x("",he,'">'),new x(" ",F,"='"),new x("",ue,","),new x("",F,"ize "),new x("",he,"."),new x("\xC2\xA0",F,""),new x(" ",F,","),new x("",ue,'="'),new x("",he,'="'),new x("",F,"ous "),new x("",he,", "),new x("",ue,"='"),new x(" ",ue,","),new x(" ",he,'="'),new x(" ",he,", "),new x("",he,","),new x("",he,"("),new x("",he,". "),new x(" ",he,"."),new x("",he,"='"),new x(" ",he,". "),new x(" ",ue,'="'),new x(" ",he,"='"),new x(" ",ue,"='")];R0.kTransforms=d0;R0.kNumTransforms=d0.length;function ha(n,e){return n[e]<192?(n[e]>=97&&n[e]<=122&&(n[e]^=32),1):n[e]<224?(n[e+1]^=32,2):(n[e+2]^=5,3)}R0.transformDictionaryWord=function(n,e,t,r,s){var a=d0[s].prefix,i=d0[s].suffix,l=d0[s].transform,u=l<rs?0:l-(rs-1),c=0,f=e,h;u>r&&(u=r);for(var v=0;v<a.length;)n[e++]=a[v++];for(t+=u,r-=u,l<=da&&(r-=l),c=0;c<r;c++)n[e++]=ul.dictionary[t+c];if(h=e-r,l===ue)ha(n,h);else if(l===he)for(;r>0;){var y=ha(n,h);h+=y,r-=y;}for(var C=0;C<i.length;)n[e++]=i[C++];return e-f};});var $r=pe(G0=>{var wa=Jr().BrotliInput,Al=Jr().BrotliOutput,Zt=ra(),Yt=_r(),de=es().HuffmanCode,ya=es().BrotliBuildHuffmanTable,Kt=ua(),xt=ca(),ba=pa(),kl=8,ga=16,Il=256,El=704,Ol=26,ma=6,va=2,ns=8,Pl=255,wt=1080,as=18,Tl=new Uint8Array([1,2,3,4,0,5,17,6,16,7,8,9,10,11,12,13,14,15]),is=16,Fl=new Uint8Array([3,2,1,0,3,3,3,3,3,3,2,2,2,2,2,2]),Dl=new Int8Array([0,0,0,0,-1,1,-2,2,-3,3,-1,1,-2,2,-3,3]),Ll=new Uint16Array([256,402,436,468,500,534,566,598,630,662,694,726,758,790,822,854,886,920,952,984,1016,1048,1080]);function Ca(n){var e;return n.readBits(1)===0?16:(e=n.readBits(3),e>0?17+e:(e=n.readBits(3),e>0?8+e:17))}function Sa(n){if(n.readBits(1)){var e=n.readBits(3);return e===0?1:n.readBits(e)+(1<<e)}return 0}function Bl(){this.meta_block_length=0,this.input_end=0,this.is_uncompressed=0,this.is_metadata=false;}function Aa(n){var e=new Bl,t,r,s;if(e.input_end=n.readBits(1),e.input_end&&n.readBits(1))return e;if(t=n.readBits(2)+4,t===7){if(e.is_metadata=true,n.readBits(1)!==0)throw new Error("Invalid reserved bit");if(r=n.readBits(2),r===0)return e;for(s=0;s<r;s++){var a=n.readBits(8);if(s+1===r&&r>1&&a===0)throw new Error("Invalid size byte");e.meta_block_length|=a<<s*8;}}else for(s=0;s<t;++s){var i=n.readBits(4);if(s+1===t&&t>4&&i===0)throw new Error("Invalid size nibble");e.meta_block_length|=i<<s*4;}return ++e.meta_block_length,!e.input_end&&!e.is_metadata&&(e.is_uncompressed=n.readBits(1)),e}function Jt(n,e,t){var s;return t.fillBitWindow(),e+=t.val_>>>t.bit_pos_&Pl,s=n[e].bits-ns,s>0&&(t.bit_pos_+=ns,e+=n[e].value,e+=t.val_>>>t.bit_pos_&(1<<s)-1),t.bit_pos_+=n[e].bits,n[e].value}function Ml(n,e,t,r){for(var s=0,a=kl,i=0,l=0,u=32768,c=[],f=0;f<32;f++)c.push(new de(0,0));for(ya(c,0,5,n,as);s<e&&u>0;){var h=0,v;if(r.readMoreInput(),r.fillBitWindow(),h+=r.val_>>>r.bit_pos_&31,r.bit_pos_+=c[h].bits,v=c[h].value&255,v<ga)i=0,t[s++]=v,v!==0&&(a=v,u-=32768>>v);else {var y=v-14,C,O,D=0;if(v===ga&&(D=a),l!==D&&(i=0,l=D),C=i,i>0&&(i-=2,i<<=y),i+=r.readBits(y)+3,O=i-C,s+O>e)throw new Error("[ReadHuffmanCodeLengths] symbol + repeat_delta > num_symbols");for(var E=0;E<O;E++)t[s+E]=l;s+=O,l!==0&&(u-=O<<15-l);}}if(u!==0)throw new Error("[ReadHuffmanCodeLengths] space = "+u);for(;s<e;s++)t[s]=0;}function V0(n,e,t,r){var s=0,a,i=new Uint8Array(n);if(r.readMoreInput(),a=r.readBits(2),a===1){for(var l,u=n-1,c=0,f=new Int32Array(4),h=r.readBits(2)+1;u;)u>>=1,++c;for(l=0;l<h;++l)f[l]=r.readBits(c)%n,i[f[l]]=2;switch(i[f[0]]=1,h){case 1:break;case 3:if(f[0]===f[1]||f[0]===f[2]||f[1]===f[2])throw new Error("[ReadHuffmanCode] invalid symbols");break;case 2:if(f[0]===f[1])throw new Error("[ReadHuffmanCode] invalid symbols");i[f[1]]=1;break;case 4:if(f[0]===f[1]||f[0]===f[2]||f[0]===f[3]||f[1]===f[2]||f[1]===f[3]||f[2]===f[3])throw new Error("[ReadHuffmanCode] invalid symbols");r.readBits(1)?(i[f[2]]=3,i[f[3]]=3):i[f[0]]=2;break}}else {var l,v=new Uint8Array(as),y=32,C=0,O=[new de(2,0),new de(2,4),new de(2,3),new de(3,2),new de(2,0),new de(2,4),new de(2,3),new de(4,1),new de(2,0),new de(2,4),new de(2,3),new de(3,2),new de(2,0),new de(2,4),new de(2,3),new de(4,5)];for(l=a;l<as&&y>0;++l){var D=Tl[l],E=0,T;r.fillBitWindow(),E+=r.val_>>>r.bit_pos_&15,r.bit_pos_+=O[E].bits,T=O[E].value,v[D]=T,T!==0&&(y-=32>>T,++C);}if(!(C===1||y===0))throw new Error("[ReadHuffmanCode] invalid num_codes or space");Ml(v,n,i,r);}if(s=ya(e,t,ns,i,n),s===0)throw new Error("[ReadHuffmanCode] BuildHuffmanTable failed: ");return s}function U0(n,e,t){var r,s;return r=Jt(n,e,t),s=xt.kBlockLengthPrefixCode[r].nbits,xt.kBlockLengthPrefixCode[r].offset+t.readBits(s)}function Nl(n,e,t){var r;return n<is?(t+=Fl[n],t&=3,r=e[t]+Dl[n]):r=n-is+1,r}function Rl(n,e){for(var t=n[e],r=e;r;--r)n[r]=n[r-1];n[0]=t;}function Ul(n,e){var t=new Uint8Array(256),r;for(r=0;r<256;++r)t[r]=r;for(r=0;r<e;++r){var s=n[r];n[r]=t[s],s&&Rl(t,s);}}function Ut(n,e){this.alphabet_size=n,this.num_htrees=e,this.codes=new Array(e+e*Ll[n+31>>>5]),this.htrees=new Uint32Array(e);}Ut.prototype.decode=function(n){var e,t,r=0;for(e=0;e<this.num_htrees;++e)this.htrees[e]=r,t=V0(this.alphabet_size,this.codes,r,n),r+=t;};function xa(n,e){var t={num_htrees:null,context_map:null},r,s=0,a,i;e.readMoreInput();var l=t.num_htrees=Sa(e)+1,u=t.context_map=new Uint8Array(n);if(l<=1)return t;for(r=e.readBits(1),r&&(s=e.readBits(4)+1),a=[],i=0;i<wt;i++)a[i]=new de(0,0);for(V0(l+s,a,0,e),i=0;i<n;){var c;if(e.readMoreInput(),c=Jt(a,0,e),c===0)u[i]=0,++i;else if(c<=s)for(var f=1+(1<<c)+e.readBits(c);--f;){if(i>=n)throw new Error("[DecodeContextMap] i >= context_map_size");u[i]=0,++i;}else u[i]=c-s,++i;}return e.readBits(1)&&Ul(u,n),t}function ss(n,e,t,r,s,a,i){var l=t*2,u=t,c=Jt(e,t*wt,i),f;c===0?f=s[l+(a[u]&1)]:c===1?f=s[l+(a[u]-1&1)]+1:f=c-2,f>=n&&(f-=n),r[t]=f,s[l+(a[u]&1)]=f,++a[u];}function Vl(n,e,t,r,s,a){var i=s+1,l=t&s,u=a.pos_&Zt.IBUF_MASK,c;if(e<8||a.bit_pos_+(e<<3)<a.bit_end_pos_){for(;e-- >0;)a.readMoreInput(),r[l++]=a.readBits(8),l===i&&(n.write(r,i),l=0);return}if(a.bit_end_pos_<32)throw new Error("[CopyUncompressedBlockToOutput] br.bit_end_pos_ < 32");for(;a.bit_pos_<32;)r[l]=a.val_>>>a.bit_pos_,a.bit_pos_+=8,++l,--e;if(c=a.bit_end_pos_-a.bit_pos_>>3,u+c>Zt.IBUF_MASK){for(var f=Zt.IBUF_MASK+1-u,h=0;h<f;h++)r[l+h]=a.buf_[u+h];c-=f,l+=f,e-=f,u=0;}for(var h=0;h<c;h++)r[l+h]=a.buf_[u+h];if(l+=c,e-=c,l>=i){n.write(r,i),l-=i;for(var h=0;h<l;h++)r[h]=r[i+h];}for(;l+e>=i;){if(c=i-l,a.input_.read(r,l,c)<c)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");n.write(r,i),e-=c,l=0;}if(a.input_.read(r,l,e)<e)throw new Error("[CopyUncompressedBlockToOutput] not enough bytes");a.reset();}function Gl(n){var e=n.bit_pos_+7&-8,t=n.readBits(e-n.bit_pos_);return t==0}function ka(n){var e=new wa(n),t=new Zt(e);Ca(t);var r=Aa(t);return r.meta_block_length}G0.BrotliDecompressedSize=ka;function zl(n,e){var t=new wa(n);e==null&&(e=ka(n));var r=new Uint8Array(e),s=new Al(r);return Ia(t,s),s.pos<s.buffer.length&&(s.buffer=s.buffer.subarray(0,s.pos)),s.buffer}G0.BrotliDecompressBuffer=zl;function Ia(n,e){var t,r=0,s=0,a=0,i,l=0,u,c,f,h,v=[16,15,11,4],y=0,C=0,O=0,D=[new Ut(0,0),new Ut(0,0),new Ut(0,0)],E,T,p,P=128+Zt.READ_SIZE;p=new Zt(n),a=Ca(p),i=(1<<a)-16,u=1<<a,c=u-1,f=new Uint8Array(u+P+Yt.maxDictionaryWordLength),h=u,E=[],T=[];for(var I=0;I<3*wt;I++)E[I]=new de(0,0),T[I]=new de(0,0);for(;!s;){var N=0,te,L=[1<<28,1<<28,1<<28],Q=[0],V=[1,1,1],ce=[0,1,0,1,0,1],ae=[0],H,W,X,j,Pe=null,ze=null,be,Qe=null,Ee,Ne=0,K=null,ie=0,Pt=0,me=null,Tt=0,We=0,ut=0,Te,ct;for(t=0;t<3;++t)D[t].codes=null,D[t].htrees=null;p.readMoreInput();var He=Aa(p);if(N=He.meta_block_length,r+N>e.buffer.length){var ft=new Uint8Array(r+N);ft.set(e.buffer),e.buffer=ft;}if(s=He.input_end,te=He.is_uncompressed,He.is_metadata){for(Gl(p);N>0;--N)p.readMoreInput(),p.readBits(8);continue}if(N!==0){if(te){p.bit_pos_=p.bit_pos_+7&-8,Vl(e,N,r,f,c,p),r+=N;continue}for(t=0;t<3;++t)V[t]=Sa(p)+1,V[t]>=2&&(V0(V[t]+2,E,t*wt,p),V0(Ol,T,t*wt,p),L[t]=U0(T,t*wt,p),ae[t]=1);for(p.readMoreInput(),H=p.readBits(2),W=is+(p.readBits(4)<<H),X=(1<<H)-1,j=W+(48<<H),ze=new Uint8Array(V[0]),t=0;t<V[0];++t)p.readMoreInput(),ze[t]=p.readBits(2)<<1;var ht=xa(V[0]<<ma,p);be=ht.num_htrees,Pe=ht.context_map;var dt=xa(V[2]<<va,p);for(Ee=dt.num_htrees,Qe=dt.context_map,D[0]=new Ut(Il,be),D[1]=new Ut(El,V[1]),D[2]=new Ut(j,Ee),t=0;t<3;++t)D[t].decode(p);for(K=0,me=0,Te=ze[Q[0]],We=Kt.lookupOffsets[Te],ut=Kt.lookupOffsets[Te+1],ct=D[1].htrees[0];N>0;){var qe,Re,et,tt,rt,re,ve,Fe,xe,Ue,l0;for(p.readMoreInput(),L[1]===0&&(ss(V[1],E,1,Q,ce,ae,p),L[1]=U0(T,wt,p),ct=D[1].htrees[Q[1]]),--L[1],qe=Jt(D[1].codes,ct,p),Re=qe>>6,Re>=2?(Re-=2,ve=-1):ve=0,et=xt.kInsertRangeLut[Re]+(qe>>3&7),tt=xt.kCopyRangeLut[Re]+(qe&7),rt=xt.kInsertLengthPrefixCode[et].offset+p.readBits(xt.kInsertLengthPrefixCode[et].nbits),re=xt.kCopyLengthPrefixCode[tt].offset+p.readBits(xt.kCopyLengthPrefixCode[tt].nbits),C=f[r-1&c],O=f[r-2&c],Ue=0;Ue<rt;++Ue)p.readMoreInput(),L[0]===0&&(ss(V[0],E,0,Q,ce,ae,p),L[0]=U0(T,0,p),Ne=Q[0]<<ma,K=Ne,Te=ze[Q[0]],We=Kt.lookupOffsets[Te],ut=Kt.lookupOffsets[Te+1]),xe=Kt.lookup[We+C]|Kt.lookup[ut+O],ie=Pe[K+xe],--L[0],O=C,C=Jt(D[0].codes,D[0].htrees[ie],p),f[r&c]=C,(r&c)===c&&e.write(f,u),++r;if(N-=rt,N<=0)break;if(ve<0){var xe;if(p.readMoreInput(),L[2]===0&&(ss(V[2],E,2,Q,ce,ae,p),L[2]=U0(T,2*wt,p),Pt=Q[2]<<va,me=Pt),--L[2],xe=(re>4?3:re-2)&255,Tt=Qe[me+xe],ve=Jt(D[2].codes,D[2].htrees[Tt],p),ve>=W){var Er,gn,u0;ve-=W,gn=ve&X,ve>>=H,Er=(ve>>1)+1,u0=(2+(ve&1)<<Er)-4,ve=W+(u0+p.readBits(Er)<<H)+gn;}}if(Fe=Nl(ve,v,y),Fe<0)throw new Error("[BrotliDecompress] invalid distance");if(r<i&&l!==i?l=r:l=i,l0=r&c,Fe>l)if(re>=Yt.minDictionaryWordLength&&re<=Yt.maxDictionaryWordLength){var u0=Yt.offsetsByLength[re],mn=Fe-l-1,vn=Yt.sizeBitsByLength[re],eo=(1<<vn)-1,to=mn&eo,xn=mn>>vn;if(u0+=to*re,xn<ba.kNumTransforms){var Or=ba.transformDictionaryWord(f,l0,u0,re,xn);if(l0+=Or,r+=Or,N-=Or,l0>=h){e.write(f,u);for(var T0=0;T0<l0-h;T0++)f[T0]=f[h+T0];}}else throw new Error("Invalid backward reference. pos: "+r+" distance: "+Fe+" len: "+re+" bytes left: "+N)}else throw new Error("Invalid backward reference. pos: "+r+" distance: "+Fe+" len: "+re+" bytes left: "+N);else {if(ve>0&&(v[y&3]=Fe,++y),re>N)throw new Error("Invalid backward reference. pos: "+r+" distance: "+Fe+" len: "+re+" bytes left: "+N);for(Ue=0;Ue<re;++Ue)f[r&c]=f[r-Fe&c],(r&c)===c&&e.write(f,u),++r,--N;}C=f[r-1&c],O=f[r-2&c];}r&=1073741823;}}e.write(f,r&c);}G0.BrotliDecompress=Ia;Yt.init();});var Oa=pe((ip,Ea)=>{Ea.exports=$r().BrotliDecompressBuffer;});var lo={utf16le:"utf-16le",ucs2:"utf-16le",utf16be:"utf-16be"},ee=class{constructor(e){this.buffer=e,this.view=new DataView(e.buffer,e.byteOffset,e.byteLength),this.pos=0,this.length=this.buffer.length;}readString(e,t="ascii"){t=lo[t]||t;let r=this.readBuffer(e);try{return new TextDecoder(t).decode(r)}catch{return r}}readBuffer(e){return this.buffer.slice(this.pos,this.pos+=e)}readUInt24BE(){return (this.readUInt16BE()<<8)+this.readUInt8()}readUInt24LE(){return this.readUInt16LE()+(this.readUInt8()<<16)}readInt24BE(){return (this.readInt16BE()<<8)+this.readUInt8()}readInt24LE(){return this.readUInt16LE()+(this.readInt8()<<16)}};ee.TYPES={UInt8:1,UInt16:2,UInt24:3,UInt32:4,Int8:1,Int16:2,Int24:3,Int32:4,Float:4,Double:8};for(let n of Object.getOwnPropertyNames(DataView.prototype))if(n.slice(0,3)==="get"){let e=n.slice(3).replace("Ui","UI");e==="Float32"?e="Float":e==="Float64"&&(e="Double");let t=ee.TYPES[e];ee.prototype["read"+e+(t===1?"":"BE")]=function(){let r=this.view[n](this.pos,false);return this.pos+=t,r},t!==1&&(ee.prototype["read"+e+"LE"]=function(){let r=this.view[n](this.pos,true);return this.pos+=t,r});}var uo=new TextEncoder,yn=new Uint8Array(new Uint16Array([4660]).buffer)[0]==18,st=class{constructor(e){this.buffer=e,this.view=new DataView(this.buffer.buffer,this.buffer.byteOffset,this.buffer.byteLength),this.pos=0;}writeBuffer(e){this.buffer.set(e,this.pos),this.pos+=e.length;}writeString(e,t="ascii"){let r;switch(t){case "utf16le":case "utf16-le":case "ucs2":r=Cn(e,yn);break;case "utf16be":case "utf16-be":r=Cn(e,!yn);break;case "utf8":r=uo.encode(e);break;case "ascii":r=co(e);break;default:throw new Error(`Unsupported encoding: ${t}`)}this.writeBuffer(r);}writeUInt24BE(e){this.buffer[this.pos++]=e>>>16&255,this.buffer[this.pos++]=e>>>8&255,this.buffer[this.pos++]=e&255;}writeUInt24LE(e){this.buffer[this.pos++]=e&255,this.buffer[this.pos++]=e>>>8&255,this.buffer[this.pos++]=e>>>16&255;}writeInt24BE(e){e>=0?this.writeUInt24BE(e):this.writeUInt24BE(e+16777215+1);}writeInt24LE(e){e>=0?this.writeUInt24LE(e):this.writeUInt24LE(e+16777215+1);}fill(e,t){if(t<this.buffer.length)this.buffer.fill(e,this.pos,this.pos+t),this.pos+=t;else {let r=new Uint8Array(t);r.fill(e),this.writeBuffer(r);}}};function Cn(n,e){let t=new Uint16Array(n.length);for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);e&&(s=s>>8|(s&255)<<8),t[r]=s;}return new Uint8Array(t.buffer)}function co(n){let e=new Uint8Array(n.length);for(let t=0;t<n.length;t++)e[t]=n.charCodeAt(t);return e}for(let n of Object.getOwnPropertyNames(DataView.prototype))if(n.slice(0,3)==="set"){let e=n.slice(3).replace("Ui","UI");e==="Float32"?e="Float":e==="Float64"&&(e="Double");let t=ee.TYPES[e];st.prototype["write"+e+(t===1?"":"BE")]=function(r){this.view[n](this.pos,r,false),this.pos+=t;},t!==1&&(st.prototype["write"+e+"LE"]=function(r){this.view[n](this.pos,r,true),this.pos+=t;});}var oe=class{fromBuffer(e){let t=new ee(e);return this.decode(t)}toBuffer(e){let t=this.size(e),r=new Uint8Array(t),s=new st(r);return this.encode(s,e),r}};var G=class extends oe{constructor(e,t="BE"){super(),this.type=e,this.endian=t,this.fn=this.type,this.type[this.type.length-1]!=="8"&&(this.fn+=this.endian);}size(){return ee.TYPES[this.type]}decode(e){return e[`read${this.fn}`]()}encode(e,t){return e[`write${this.fn}`](t)}};var S=new G("UInt8"),fo=new G("UInt16","BE"),o=fo;new G("UInt16","LE");var ho=new G("UInt24","BE"),nt=ho;new G("UInt24","LE");var po=new G("UInt32","BE"),g=po;new G("UInt32","LE");var fe=new G("Int8"),bo=new G("Int16","BE"),w=bo;new G("Int16","LE");new G("Int24","BE");new G("Int24","LE");var go=new G("Int32","BE"),bt=go;new G("Int32","LE");new G("Float","BE");new G("Float","LE");new G("Double","BE");new G("Double","LE");var Xe=class extends G{constructor(e,t,r=e>>1){super(`Int${e}`,t),this._point=1<<r;}decode(e){return super.decode(e)/this._point}encode(e,t){return super.encode(e,t*this._point|0)}},mo=new Xe(16,"BE"),Sn=mo;new Xe(16,"LE");var vo=new Xe(32,"BE"),se=vo;new Xe(32,"LE");function we(n,e,t){let r;if(typeof n=="number"?r=n:typeof n=="function"?r=n.call(t,t):t&&typeof n=="string"?r=t[n]:e&&n instanceof G&&(r=n.decode(e)),isNaN(r))throw new Error("Not a fixed size");return r}var gt=class{constructor(e={}){this.enumerable=true,this.configurable=true;for(let t in e){let r=e[t];this[t]=r;}}};var d=class extends oe{constructor(e,t,r="count"){super(),this.type=e,this.length=t,this.lengthType=r;}decode(e,t){let r,{pos:s}=e,a=[],i=t;if(this.length!=null&&(r=we(this.length,e,t)),this.length instanceof G&&(Object.defineProperties(a,{parent:{value:t},_startOffset:{value:s},_currentOffset:{value:0,writable:true},_length:{value:r}}),i=a),r==null||this.lengthType==="bytes"){let l=r!=null?e.pos+r:t?._length?t._startOffset+t._length:e.length;for(;e.pos<l;)a.push(this.type.decode(e,i));}else for(let l=0,u=r;l<u;l++)a.push(this.type.decode(e,i));return a}size(e,t,r=true){if(!e)return this.type.size(null,t)*we(this.length,null,t);let s=0;this.length instanceof G&&(s+=this.length.size(),t={parent:t,pointerSize:0});for(let a of e)s+=this.type.size(a,t);return t&&r&&this.length instanceof G&&(s+=t.pointerSize),s}encode(e,t,r){let s=r;this.length instanceof G&&(s={pointers:[],startOffset:e.pos,parent:r},s.pointerOffset=e.pos+this.size(t,s,false),this.length.encode(e,t.length));for(let a of t)this.type.encode(e,a,s);if(this.length instanceof G){let a=0;for(;a<s.pointers.length;){let i=s.pointers[a++];i.type.encode(e,i.val,i.parent);}}}};var Z=class extends d{decode(e,t){let{pos:r}=e,s=we(this.length,e,t);this.length instanceof G&&(t={parent:t,_startOffset:r,_currentOffset:0,_length:s});let a=new c0(this.type,s,e,t);return e.pos+=s*this.type.size(null,t),a}size(e,t){return e instanceof c0&&(e=e.toArray()),super.size(e,t)}encode(e,t,r){return t instanceof c0&&(t=t.toArray()),super.encode(e,t,r)}},c0=class{constructor(e,t,r,s){this.type=e,this.length=t,this.stream=r,this.ctx=s,this.base=this.stream.pos,this.items=[];}get(e){if(!(e<0||e>=this.length)){if(this.items[e]==null){let{pos:t}=this.stream;this.stream.pos=this.base+this.type.size(null,this.ctx)*e,this.items[e]=this.type.decode(this.stream,this.ctx),this.stream.pos=t;}return this.items[e]}}toArray(){let e=[];for(let t=0,r=this.length;t<r;t++)e.push(this.get(t));return e}};var Se=class extends oe{constructor(e,t=[]){super(),this.type=e,this.flags=t;}decode(e){let t=this.type.decode(e),r={};for(let s=0;s<this.flags.length;s++){let a=this.flags[s];a!=null&&(r[a]=!!(t&1<<s));}return r}size(){return this.type.size()}encode(e,t){let r=0;for(let s=0;s<this.flags.length;s++){let a=this.flags[s];a!=null&&t[a]&&(r|=1<<s);}return this.type.encode(e,r)}};var ke=class extends oe{constructor(e){super(),this.length=e;}decode(e,t){let r=we(this.length,e,t);return e.readBuffer(r)}size(e,t){if(!e)return we(this.length,null,t);let r=e.length;return this.length instanceof G&&(r+=this.length.size()),r}encode(e,t,r){return this.length instanceof G&&this.length.encode(e,t.length),e.writeBuffer(t)}};var mt=class extends oe{constructor(e,t=true){super(),this.type=e,this.condition=t;}decode(e,t){let{condition:r}=this;if(typeof r=="function"&&(r=r.call(t,t)),r)return this.type.decode(e,t)}size(e,t){let{condition:r}=this;return typeof r=="function"&&(r=r.call(t,t)),r?this.type.size(e,t):0}encode(e,t,r){let{condition:s}=this;if(typeof s=="function"&&(s=s.call(r,r)),s)return this.type.encode(e,t,r)}};var $=class extends oe{constructor(e,t=1){super(),this.type=e,this.count=t;}decode(e,t){e.pos+=this.size(null,t);}size(e,t){let r=we(this.count,null,t);return this.type.size()*r}encode(e,t,r){return e.fill(0,this.size(t,r))}};var Y=class extends oe{constructor(e,t="ascii"){super(),this.length=e,this.encoding=t;}decode(e,t){let r,s;if(this.length!=null)r=we(this.length,e,t);else {let l;for({buffer:l,length:r,pos:s}=e;s<r&&l[s]!==0;)++s;r=s-e.pos;}let{encoding:a}=this;typeof a=="function"&&(a=a.call(t,t)||"ascii");let i=e.readString(r,a);return this.length==null&&e.pos<e.length&&e.pos++,i}size(e,t){if(!e)return we(this.length,null,t);let{encoding:r}=this;typeof r=="function"&&(r=r.call(t?.val,t?.val)||"ascii"),r==="utf16be"&&(r="utf16le");let s=An(e,r);return this.length instanceof G&&(s+=this.length.size()),this.length==null&&s++,s}encode(e,t,r){let{encoding:s}=this;if(typeof s=="function"&&(s=s.call(r?.val,r?.val)||"ascii"),this.length instanceof G&&this.length.encode(e,An(t,s)),e.writeString(t,s),this.length==null)return e.writeUInt8(0)}};function An(n,e){switch(e){case "ascii":return n.length;case "utf8":let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);if(s>=55296&&s<=56319&&r<n.length-1){let a=n.charCodeAt(++r);(a&64512)===56320?s=((s&1023)<<10)+(a&1023)+65536:r--;}s&4294967168?s&4294965248?s&4294901760?s&4292870144||(t+=4):t+=3:t+=2:t++;}return t;case "utf16le":case "utf16-le":case "utf16be":case "utf16-be":case "ucs2":return n.length*2;default:throw new Error("Unknown encoding "+e)}}var m=class extends oe{constructor(e={}){super(),this.fields=e;}decode(e,t,r=0){let s=this._setup(e,t,r);return this._parseFields(e,s,this.fields),this.process!=null&&this.process.call(s,e),s}_setup(e,t,r){let s={};return Object.defineProperties(s,{parent:{value:t},_startOffset:{value:e.pos},_currentOffset:{value:0,writable:true},_length:{value:r}}),s}_parseFields(e,t,r){for(let a in r){var s;let i=r[a];typeof i=="function"?s=i.call(t,t):s=i.decode(e,t),s!==void 0&&(s instanceof gt?Object.defineProperty(t,a,s):t[a]=s),t._currentOffset=e.pos-t._startOffset;}}size(e,t,r=true){e==null&&(e={});let s={parent:t,val:e,pointerSize:0};this.preEncode!=null&&this.preEncode.call(e);let a=0;for(let i in this.fields){let l=this.fields[i];l.size!=null&&(a+=l.size(e[i],s));}return r&&(a+=s.pointerSize),a}encode(e,t,r){let s;this.preEncode!=null&&this.preEncode.call(t,e);let a={pointers:[],startOffset:e.pos,parent:r,val:t,pointerSize:0};a.pointerOffset=e.pos+this.size(t,a,false);for(let l in this.fields)s=this.fields[l],s.encode!=null&&s.encode(e,t[l],a);let i=0;for(;i<a.pointers.length;){let l=a.pointers[i++];l.type.encode(e,l.val,l.parent);}}};var xo=(n,e)=>e.reduce((t,r)=>t&&t[r],n),R=class n extends m{constructor(e,t={}){super(),this.type=e,this.versions=t,typeof e=="string"&&(this.versionPath=e.split("."));}decode(e,t,r=0){let s=this._setup(e,t,r);typeof this.type=="string"?s.version=xo(t,this.versionPath):s.version=this.type.decode(e),this.versions.header&&this._parseFields(e,s,this.versions.header);let a=this.versions[s.version];if(a==null)throw new Error(`Unknown version ${s.version}`);return a instanceof n?a.decode(e,t):(this._parseFields(e,s,a),this.process!=null&&this.process.call(s,e),s)}size(e,t,r=true){let s,a;if(!e)throw new Error("Not a fixed size");this.preEncode!=null&&this.preEncode.call(e);let i={parent:t,val:e,pointerSize:0},l=0;if(typeof this.type!="string"&&(l+=this.type.size(e.version,i)),this.versions.header)for(s in this.versions.header)a=this.versions.header[s],a.size!=null&&(l+=a.size(e[s],i));let u=this.versions[e.version];if(u==null)throw new Error(`Unknown version ${e.version}`);for(s in u)a=u[s],a.size!=null&&(l+=a.size(e[s],i));return r&&(l+=i.pointerSize),l}encode(e,t,r){let s,a;this.preEncode!=null&&this.preEncode.call(t,e);let i={pointers:[],startOffset:e.pos,parent:r,val:t,pointerSize:0};if(i.pointerOffset=e.pos+this.size(t,i,false),typeof this.type!="string"&&this.type.encode(e,t.version),this.versions.header)for(s in this.versions.header)a=this.versions.header[s],a.encode!=null&&a.encode(e,t[s],i);let l=this.versions[t.version];for(s in l)a=l[s],a.encode!=null&&a.encode(e,t[s],i);let u=0;for(;u<i.pointers.length;){let c=i.pointers[u++];c.type.encode(e,c.val,c.parent);}}};var b=class extends oe{constructor(e,t,r={}){if(super(),this.offsetType=e,this.type=t,this.options=r,this.type==="void"&&(this.type=null),this.options.type==null&&(this.options.type="local"),this.options.allowNull==null&&(this.options.allowNull=true),this.options.nullValue==null&&(this.options.nullValue=0),this.options.lazy==null&&(this.options.lazy=false),this.options.relativeTo){if(typeof this.options.relativeTo!="function")throw new Error("relativeTo option must be a function");this.relativeToGetter=r.relativeTo;}}decode(e,t){let r=this.offsetType.decode(e,t);if(r===this.options.nullValue&&this.options.allowNull)return null;let s;switch(this.options.type){case "local":s=t._startOffset;break;case "immediate":s=e.pos-this.offsetType.size();break;case "parent":s=t.parent._startOffset;break;default:for(var a=t;a.parent;)a=a.parent;s=a._startOffset||0;}this.options.relativeTo&&(s+=this.relativeToGetter(t));let i=r+s;if(this.type!=null){let l=null,u=()=>{if(l!=null)return l;let{pos:c}=e;return e.pos=i,l=this.type.decode(e,t),e.pos=c,l};return this.options.lazy?new gt({get:u}):u()}else return i}size(e,t){let r=t;switch(this.options.type){case "local":case "immediate":break;case "parent":t=t.parent;break;default:for(;t.parent;)t=t.parent;}let{type:s}=this;if(s==null){if(!(e instanceof Ht))throw new Error("Must be a VoidPointer");(({type:s}=e)),e=e.value;}if(e&&t){let a=s.size(e,r);t.pointerSize+=a;}return this.offsetType.size()}encode(e,t,r){let s,a=r;if(t==null){this.offsetType.encode(e,this.options.nullValue);return}switch(this.options.type){case "local":s=r.startOffset;break;case "immediate":s=e.pos+this.offsetType.size(t,a);break;case "parent":r=r.parent,s=r.startOffset;break;default:for(s=0;r.parent;)r=r.parent;}this.options.relativeTo&&(s+=this.relativeToGetter(a.val)),this.offsetType.encode(e,r.pointerOffset-s);let{type:i}=this;if(i==null){if(!(t instanceof Ht))throw new Error("Must be a VoidPointer");(({type:i}=t)),t=t.value;}return r.pointers.push({type:i,val:t,parent:a}),r.pointerOffset+=i.size(t,a)}},Ht=class{constructor(e,t){this.type=e,this.value=t;}};function ye(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:true,configurable:true,writable:true}):n[e]=t,n}function le(n,e,t,r){var s=arguments.length,a=s<3?e:r===null?r=Object.getOwnPropertyDescriptor(e,t):r,i;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")a=Reflect.decorate(n,e,t,r);else for(var l=n.length-1;l>=0;l--)(i=n[l])&&(a=(s<3?i(a):s>3?i(e,t,a):i(e,t))||a);return s>3&&a&&Object.defineProperty(e,t,a),a}var bs=pt(In());var Xn=pt(Tr()),jn=pt(Gr());function Bt(n){return n&&n.__esModule?n.default:n}var vt={};vt=JSON.parse('{"categories":["Cc","Zs","Po","Sc","Ps","Pe","Sm","Pd","Nd","Lu","Sk","Pc","Ll","So","Lo","Pi","Cf","No","Pf","Lt","Lm","Mn","Me","Mc","Nl","Zl","Zp","Cs","Co"],"combiningClasses":["Not_Reordered","Above","Above_Right","Below","Attached_Above_Right","Attached_Below","Overlay","Iota_Subscript","Double_Below","Double_Above","Below_Right","Above_Left","CCC10","CCC11","CCC12","CCC13","CCC14","CCC15","CCC16","CCC17","CCC18","CCC19","CCC20","CCC21","CCC22","CCC23","CCC24","CCC25","CCC30","CCC31","CCC32","CCC27","CCC28","CCC29","CCC33","CCC34","CCC35","CCC36","Nukta","Virama","CCC84","CCC91","CCC103","CCC107","CCC118","CCC122","CCC129","CCC130","CCC132","Attached_Above","Below_Left","Left","Kana_Voicing","CCC26","Right"],"scripts":["Common","Latin","Bopomofo","Inherited","Greek","Coptic","Cyrillic","Armenian","Hebrew","Arabic","Syriac","Thaana","Nko","Samaritan","Mandaic","Devanagari","Bengali","Gurmukhi","Gujarati","Oriya","Tamil","Telugu","Kannada","Malayalam","Sinhala","Thai","Lao","Tibetan","Myanmar","Georgian","Hangul","Ethiopic","Cherokee","Canadian_Aboriginal","Ogham","Runic","Tagalog","Hanunoo","Buhid","Tagbanwa","Khmer","Mongolian","Limbu","Tai_Le","New_Tai_Lue","Buginese","Tai_Tham","Balinese","Sundanese","Batak","Lepcha","Ol_Chiki","Braille","Glagolitic","Tifinagh","Han","Hiragana","Katakana","Yi","Lisu","Vai","Bamum","Syloti_Nagri","Phags_Pa","Saurashtra","Kayah_Li","Rejang","Javanese","Cham","Tai_Viet","Meetei_Mayek","null","Linear_B","Lycian","Carian","Old_Italic","Gothic","Old_Permic","Ugaritic","Old_Persian","Deseret","Shavian","Osmanya","Osage","Elbasan","Caucasian_Albanian","Linear_A","Cypriot","Imperial_Aramaic","Palmyrene","Nabataean","Hatran","Phoenician","Lydian","Meroitic_Hieroglyphs","Meroitic_Cursive","Kharoshthi","Old_South_Arabian","Old_North_Arabian","Manichaean","Avestan","Inscriptional_Parthian","Inscriptional_Pahlavi","Psalter_Pahlavi","Old_Turkic","Old_Hungarian","Hanifi_Rohingya","Old_Sogdian","Sogdian","Elymaic","Brahmi","Kaithi","Sora_Sompeng","Chakma","Mahajani","Sharada","Khojki","Multani","Khudawadi","Grantha","Newa","Tirhuta","Siddham","Modi","Takri","Ahom","Dogra","Warang_Citi","Nandinagari","Zanabazar_Square","Soyombo","Pau_Cin_Hau","Bhaiksuki","Marchen","Masaram_Gondi","Gunjala_Gondi","Makasar","Cuneiform","Egyptian_Hieroglyphs","Anatolian_Hieroglyphs","Mro","Bassa_Vah","Pahawh_Hmong","Medefaidrin","Miao","Tangut","Nushu","Duployan","SignWriting","Nyiakeng_Puachue_Hmong","Wancho","Mende_Kikakui","Adlam"],"eaw":["N","Na","A","W","H","F"]}');var zr=new jn.default(Xn.default.toByteArray("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")),Zo=Math.log2||(n=>Math.log(n)/Math.LN2),L0=n=>Zo(n)+1|0,Jo=L0(Bt(vt).categories.length-1),Kn=L0(Bt(vt).combiningClasses.length-1),Wr=L0(Bt(vt).scripts.length-1),B0=L0(Bt(vt).eaw.length-1),M0=10,$o=Kn+Wr+B0+M0,_o=Wr+B0+M0,Qo=B0+M0;var el=(1<<Jo)-1,tl=(1<<Kn)-1,rl=(1<<Wr)-1;function h0(n){let e=zr.get(n);return Bt(vt).categories[e>>$o&el]}function Yn(n){let e=zr.get(n);return Bt(vt).combiningClasses[e>>_o&tl]}function Hr(n){let e=zr.get(n);return Bt(vt).scripts[e>>Qo&rl]}function qr(n){return h0(n)==="Nd"}function Xr(n){let e=h0(n);return e==="Mn"||e==="Me"||e==="Mc"}var gr=pt(Gr()),nn=pt(Jn()),K0=pt($n()),bi=pt(Nr()),gi=pt(Oa());function E0(n,e,t,r){Object.defineProperty(n,e,{get:t,set:r,enumerable:true,configurable:true});}function mr(n){return n&&n.__esModule?n.default:n}var O0={};E0(O0,"logErrors",()=>mi);E0(O0,"registerFormat",()=>o0);E0(O0,"create",()=>an);E0(O0,"defaultLanguage",()=>J0);E0(O0,"setDefaultLanguage",()=>Wl);var mi=false,gs=[];function o0(n){gs.push(n);}function an(n,e){for(let t=0;t<gs.length;t++){let r=gs[t];if(r.probe(n)){let s=new r(new ee(n));return e?s.getFont(e):s}}throw new Error("Unknown font format")}var J0="en";function Wl(n="en"){J0=n;}function ge(n,e,t){if(t.get){let r=t.get;t.get=function(){let s=r.call(this);return Object.defineProperty(this,e,{value:s}),s};}else if(typeof t.value=="function"){let r=t.value;return {get(){let s=new Map;function a(...i){let l=i.length>0?i[0]:"value";if(s.has(l))return s.get(l);let u=r.apply(this,i);return s.set(l,u),u}return Object.defineProperty(this,e,{value:a}),a}}}}var Hl=new m({firstCode:o,entryCount:o,idDelta:w,idRangeOffset:o}),os=new m({startCharCode:g,endCharCode:g,glyphID:g}),ql=new m({startUnicodeValue:nt,additionalCount:S}),Xl=new m({unicodeValue:nt,glyphID:o}),jl=new d(ql,g),Kl=new d(Xl,g),Yl=new m({varSelector:nt,defaultUVS:new b(g,jl,{type:"parent"}),nonDefaultUVS:new b(g,Kl,{type:"parent"})}),Zl=new R(o,{0:{length:o,language:o,codeMap:new Z(S,256)},2:{length:o,language:o,subHeaderKeys:new d(o,256),subHeaderCount:n=>Math.max.apply(Math,n.subHeaderKeys),subHeaders:new Z(Hl,"subHeaderCount"),glyphIndexArray:new Z(o,"subHeaderCount")},4:{length:o,language:o,segCountX2:o,segCount:n=>n.segCountX2>>1,searchRange:o,entrySelector:o,rangeShift:o,endCode:new Z(o,"segCount"),reservedPad:new $(o),startCode:new Z(o,"segCount"),idDelta:new Z(w,"segCount"),idRangeOffset:new Z(o,"segCount"),glyphIndexArray:new Z(o,n=>(n.length-n._currentOffset)/2)},6:{length:o,language:o,firstCode:o,entryCount:o,glyphIndices:new Z(o,"entryCount")},8:{reserved:new $(o),length:g,language:o,is32:new Z(S,8192),nGroups:g,groups:new Z(os,"nGroups")},10:{reserved:new $(o),length:g,language:g,firstCode:g,entryCount:g,glyphIndices:new Z(o,"numChars")},12:{reserved:new $(o),length:g,language:g,nGroups:g,groups:new Z(os,"nGroups")},13:{reserved:new $(o),length:g,language:g,nGroups:g,groups:new Z(os,"nGroups")},14:{length:g,numRecords:g,varSelectors:new Z(Yl,"numRecords")}}),Jl=new m({platformID:o,encodingID:o,table:new b(g,Zl,{type:"parent",lazy:true})}),$l=new m({version:o,numSubtables:o,tables:new d(Jl,"numSubtables")}),_l=new m({version:bt,revision:bt,checkSumAdjustment:g,magicNumber:g,flags:o,unitsPerEm:o,created:new d(bt,2),modified:new d(bt,2),xMin:w,yMin:w,xMax:w,yMax:w,macStyle:new Se(o,["bold","italic","underline","outline","shadow","condensed","extended"]),lowestRecPPEM:o,fontDirectionHint:w,indexToLocFormat:w,glyphDataFormat:w}),Ql=new m({version:bt,ascent:w,descent:w,lineGap:w,advanceWidthMax:o,minLeftSideBearing:w,minRightSideBearing:w,xMaxExtent:w,caretSlopeRise:w,caretSlopeRun:w,caretOffset:w,reserved:new $(w,4),metricDataFormat:w,numberOfMetrics:o}),eu=new m({advance:o,bearing:w}),tu=new m({metrics:new Z(eu,n=>n.parent.hhea.numberOfMetrics),bearings:new Z(w,n=>n.parent.maxp.numGlyphs-n.parent.hhea.numberOfMetrics)}),ru=new m({version:bt,numGlyphs:o,maxPoints:o,maxContours:o,maxComponentPoints:o,maxComponentContours:o,maxZones:o,maxTwilightPoints:o,maxStorage:o,maxFunctionDefs:o,maxInstructionDefs:o,maxStackElements:o,maxSizeOfInstructions:o,maxComponentElements:o,maxComponentDepth:o});function vi(n,e,t=0){return n===1&&Pa[t]?Pa[t]:iu[n][e]}var su=new Set(["x-mac-roman","x-mac-cyrillic","iso-8859-6","iso-8859-8"]),nu={"x-mac-croatian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\u0160\u2122\xB4\xA8\u2260\u017D\xD8\u221E\xB1\u2264\u2265\u2206\xB5\u2202\u2211\u220F\u0161\u222B\xAA\xBA\u03A9\u017E\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u0106\xAB\u010C\u2026 \xC0\xC3\xD5\u0152\u0153\u0110\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\uF8FF\xA9\u2044\u20AC\u2039\u203A\xC6\xBB\u2013\xB7\u201A\u201E\u2030\xC2\u0107\xC1\u010D\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u0111\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u03C0\xCB\u02DA\xB8\xCA\xE6\u02C7","x-mac-gaelic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u1E02\xB1\u2264\u2265\u1E03\u010A\u010B\u1E0A\u1E0B\u1E1E\u1E1F\u0120\u0121\u1E40\xE6\xF8\u1E41\u1E56\u1E57\u027C\u0192\u017F\u1E60\xAB\xBB\u2026 \xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\u1E61\u1E9B\xFF\u0178\u1E6A\u20AC\u2039\u203A\u0176\u0177\u1E6B\xB7\u1EF2\u1EF3\u204A\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\u2663\xD2\xDA\xDB\xD9\u0131\xDD\xFD\u0174\u0175\u1E84\u1E85\u1E80\u1E81\u1E82\u1E83","x-mac-greek":"\xC4\xB9\xB2\xC9\xB3\xD6\xDC\u0385\xE0\xE2\xE4\u0384\xA8\xE7\xE9\xE8\xEA\xEB\xA3\u2122\xEE\xEF\u2022\xBD\u2030\xF4\xF6\xA6\u20AC\xF9\xFB\xFC\u2020\u0393\u0394\u0398\u039B\u039E\u03A0\xDF\xAE\xA9\u03A3\u03AA\xA7\u2260\xB0\xB7\u0391\xB1\u2264\u2265\xA5\u0392\u0395\u0396\u0397\u0399\u039A\u039C\u03A6\u03AB\u03A8\u03A9\u03AC\u039D\xAC\u039F\u03A1\u2248\u03A4\xAB\xBB\u2026 \u03A5\u03A7\u0386\u0388\u0153\u2013\u2015\u201C\u201D\u2018\u2019\xF7\u0389\u038A\u038C\u038E\u03AD\u03AE\u03AF\u03CC\u038F\u03CD\u03B1\u03B2\u03C8\u03B4\u03B5\u03C6\u03B3\u03B7\u03B9\u03BE\u03BA\u03BB\u03BC\u03BD\u03BF\u03C0\u03CE\u03C1\u03C3\u03C4\u03B8\u03C9\u03C2\u03C7\u03C5\u03B6\u03CA\u03CB\u0390\u03B0\xAD","x-mac-icelandic":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\xDD\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026 \xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\xD0\xF0\xDE\xFE\xFD\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-inuit":"\u1403\u1404\u1405\u1406\u140A\u140B\u1431\u1432\u1433\u1434\u1438\u1439\u1449\u144E\u144F\u1450\u1451\u1455\u1456\u1466\u146D\u146E\u146F\u1470\u1472\u1473\u1483\u148B\u148C\u148D\u148E\u1490\u1491\xB0\u14A1\u14A5\u14A6\u2022\xB6\u14A7\xAE\xA9\u2122\u14A8\u14AA\u14AB\u14BB\u14C2\u14C3\u14C4\u14C5\u14C7\u14C8\u14D0\u14EF\u14F0\u14F1\u14F2\u14F4\u14F5\u1505\u14D5\u14D6\u14D7\u14D8\u14DA\u14DB\u14EA\u1528\u1529\u152A\u152B\u152D\u2026 \u152E\u153E\u1555\u1556\u1557\u2013\u2014\u201C\u201D\u2018\u2019\u1558\u1559\u155A\u155D\u1546\u1547\u1548\u1549\u154B\u154C\u1550\u157F\u1580\u1581\u1582\u1583\u1584\u1585\u158F\u1590\u1591\u1592\u1593\u1594\u1595\u1671\u1672\u1673\u1674\u1675\u1676\u1596\u15A0\u15A1\u15A2\u15A3\u15A4\u15A5\u15A6\u157C\u0141\u0142","x-mac-ce":"\xC4\u0100\u0101\xC9\u0104\xD6\xDC\xE1\u0105\u010C\xE4\u010D\u0106\u0107\xE9\u0179\u017A\u010E\xED\u010F\u0112\u0113\u0116\xF3\u0117\xF4\xF6\xF5\xFA\u011A\u011B\xFC\u2020\xB0\u0118\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\u0119\xA8\u2260\u0123\u012E\u012F\u012A\u2264\u2265\u012B\u0136\u2202\u2211\u0142\u013B\u013C\u013D\u013E\u0139\u013A\u0145\u0146\u0143\xAC\u221A\u0144\u0147\u2206\xAB\xBB\u2026 \u0148\u0150\xD5\u0151\u014C\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\u014D\u0154\u0155\u0158\u2039\u203A\u0159\u0156\u0157\u0160\u201A\u201E\u0161\u015A\u015B\xC1\u0164\u0165\xCD\u017D\u017E\u016A\xD3\xD4\u016B\u016E\xDA\u016F\u0170\u0171\u0172\u0173\xDD\xFD\u0137\u017B\u0141\u017C\u0122\u02C7","x-mac-romanian":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\u0102\u0218\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\u0103\u0219\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026 \xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u2044\u20AC\u2039\u203A\u021A\u021B\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\u0131\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7","x-mac-turkish":"\xC4\xC5\xC7\xC9\xD1\xD6\xDC\xE1\xE0\xE2\xE4\xE3\xE5\xE7\xE9\xE8\xEA\xEB\xED\xEC\xEE\xEF\xF1\xF3\xF2\xF4\xF6\xF5\xFA\xF9\xFB\xFC\u2020\xB0\xA2\xA3\xA7\u2022\xB6\xDF\xAE\xA9\u2122\xB4\xA8\u2260\xC6\xD8\u221E\xB1\u2264\u2265\xA5\xB5\u2202\u2211\u220F\u03C0\u222B\xAA\xBA\u03A9\xE6\xF8\xBF\xA1\xAC\u221A\u0192\u2248\u2206\xAB\xBB\u2026 \xC0\xC3\xD5\u0152\u0153\u2013\u2014\u201C\u201D\u2018\u2019\xF7\u25CA\xFF\u0178\u011E\u011F\u0130\u0131\u015E\u015F\u2021\xB7\u201A\u201E\u2030\xC2\xCA\xC1\xCB\xC8\xCD\xCE\xCF\xCC\xD3\xD4\uF8FF\xD2\xDA\xDB\xD9\uF8A0\u02C6\u02DC\xAF\u02D8\u02D9\u02DA\xB8\u02DD\u02DB\u02C7"},ls=new Map;function au(n){let e=ls.get(n);if(e)return e;let t=nu[n];if(t){let r=new Map;for(let s=0;s<t.length;s++)r.set(t.charCodeAt(s),128+s);return ls.set(n,r),r}if(su.has(n)){let r=new TextDecoder(n),s=new Uint8Array(128);for(let l=0;l<128;l++)s[l]=128+l;let a=new Map,i=r.decode(s);for(let l=0;l<128;l++)a.set(i.charCodeAt(l),128+l);return ls.set(n,a),a}}var iu=[["utf16be","utf16be","utf16be","utf16be","utf16be","utf16be"],["x-mac-roman","shift-jis","big5","euc-kr","iso-8859-6","iso-8859-8","x-mac-greek","x-mac-cyrillic","x-mac-symbol","x-mac-devanagari","x-mac-gurmukhi","x-mac-gujarati","Oriya","Bengali","Tamil","Telugu","Kannada","Malayalam","Sinhalese","Burmese","Khmer","iso-8859-11","Laotian","Georgian","Armenian","hz-gb-2312","Tibetan","Mongolian","Geez","x-mac-ce","Vietnamese","Sindhi"],["ascii"],["symbol","utf16be","shift-jis","gb18030","big5","x-cp20949","johab",null,null,null,"utf16be"]],Pa={15:"x-mac-icelandic",17:"x-mac-turkish",18:"x-mac-croatian",24:"x-mac-ce",25:"x-mac-ce",26:"x-mac-ce",27:"x-mac-ce",28:"x-mac-ce",30:"x-mac-icelandic",37:"x-mac-romanian",38:"x-mac-ce",39:"x-mac-ce",40:"x-mac-ce",143:"x-mac-inuit",146:"x-mac-gaelic"},ou=[[],{0:"en",30:"fo",60:"ks",90:"rw",1:"fr",31:"fa",61:"ku",91:"rn",2:"de",32:"ru",62:"sd",92:"ny",3:"it",33:"zh",63:"bo",93:"mg",4:"nl",34:"nl-BE",64:"ne",94:"eo",5:"sv",35:"ga",65:"sa",128:"cy",6:"es",36:"sq",66:"mr",129:"eu",7:"da",37:"ro",67:"bn",130:"ca",8:"pt",38:"cz",68:"as",131:"la",9:"no",39:"sk",69:"gu",132:"qu",10:"he",40:"si",70:"pa",133:"gn",11:"ja",41:"yi",71:"or",134:"ay",12:"ar",42:"sr",72:"ml",135:"tt",13:"fi",43:"mk",73:"kn",136:"ug",14:"el",44:"bg",74:"ta",137:"dz",15:"is",45:"uk",75:"te",138:"jv",16:"mt",46:"be",76:"si",139:"su",17:"tr",47:"uz",77:"my",140:"gl",18:"hr",48:"kk",78:"km",141:"af",19:"zh-Hant",49:"az-Cyrl",79:"lo",142:"br",20:"ur",50:"az-Arab",80:"vi",143:"iu",21:"hi",51:"hy",81:"id",144:"gd",22:"th",52:"ka",82:"tl",145:"gv",23:"ko",53:"mo",83:"ms",146:"ga",24:"lt",54:"ky",84:"ms-Arab",147:"to",25:"pl",55:"tg",85:"am",148:"el-polyton",26:"hu",56:"tk",86:"ti",149:"kl",27:"es",57:"mn-CN",87:"om",150:"az",28:"lv",58:"mn",88:"so",151:"nn",29:"se",59:"ps",89:"sw"},[],{1078:"af",16393:"en-IN",1159:"rw",1074:"tn",1052:"sq",6153:"en-IE",1089:"sw",1115:"si",1156:"gsw",8201:"en-JM",1111:"kok",1051:"sk",1118:"am",17417:"en-MY",1042:"ko",1060:"sl",5121:"ar-DZ",5129:"en-NZ",1088:"ky",11274:"es-AR",15361:"ar-BH",13321:"en-PH",1108:"lo",16394:"es-BO",3073:"ar",18441:"en-SG",1062:"lv",13322:"es-CL",2049:"ar-IQ",7177:"en-ZA",1063:"lt",9226:"es-CO",11265:"ar-JO",11273:"en-TT",2094:"dsb",5130:"es-CR",13313:"ar-KW",2057:"en-GB",1134:"lb",7178:"es-DO",12289:"ar-LB",1033:"en",1071:"mk",12298:"es-EC",4097:"ar-LY",12297:"en-ZW",2110:"ms-BN",17418:"es-SV",6145:"ary",1061:"et",1086:"ms",4106:"es-GT",8193:"ar-OM",1080:"fo",1100:"ml",18442:"es-HN",16385:"ar-QA",1124:"fil",1082:"mt",2058:"es-MX",1025:"ar-SA",1035:"fi",1153:"mi",19466:"es-NI",10241:"ar-SY",2060:"fr-BE",1146:"arn",6154:"es-PA",7169:"aeb",3084:"fr-CA",1102:"mr",15370:"es-PY",14337:"ar-AE",1036:"fr",1148:"moh",10250:"es-PE",9217:"ar-YE",5132:"fr-LU",1104:"mn",20490:"es-PR",1067:"hy",6156:"fr-MC",2128:"mn-CN",3082:"es",1101:"as",4108:"fr-CH",1121:"ne",1034:"es",2092:"az-Cyrl",1122:"fy",1044:"nb",21514:"es-US",1068:"az",1110:"gl",2068:"nn",14346:"es-UY",1133:"ba",1079:"ka",1154:"oc",8202:"es-VE",1069:"eu",3079:"de-AT",1096:"or",2077:"sv-FI",1059:"be",1031:"de",1123:"ps",1053:"sv",2117:"bn",5127:"de-LI",1045:"pl",1114:"syr",1093:"bn-IN",4103:"de-LU",1046:"pt",1064:"tg",8218:"bs-Cyrl",2055:"de-CH",2070:"pt-PT",2143:"tzm",5146:"bs",1032:"el",1094:"pa",1097:"ta",1150:"br",1135:"kl",1131:"qu-BO",1092:"tt",1026:"bg",1095:"gu",2155:"qu-EC",1098:"te",1027:"ca",1128:"ha",3179:"qu",1054:"th",3076:"zh-HK",1037:"he",1048:"ro",1105:"bo",5124:"zh-MO",1081:"hi",1047:"rm",1055:"tr",2052:"zh",1038:"hu",1049:"ru",1090:"tk",4100:"zh-SG",1039:"is",9275:"smn",1152:"ug",1028:"zh-TW",1136:"ig",4155:"smj-NO",1058:"uk",1155:"co",1057:"id",5179:"smj",1070:"hsb",1050:"hr",1117:"iu",3131:"se-FI",1056:"ur",4122:"hr-BA",2141:"iu-Latn",1083:"se",2115:"uz-Cyrl",1029:"cs",2108:"ga",2107:"se-SE",1091:"uz",1030:"da",1076:"xh",8251:"sms",1066:"vi",1164:"prs",1077:"zu",6203:"sma-NO",1106:"cy",1125:"dv",1040:"it",7227:"sms",1160:"wo",2067:"nl-BE",2064:"it-CH",1103:"sa",1157:"sah",1043:"nl",1041:"ja",7194:"sr-Cyrl-BA",1144:"ii",3081:"en-AU",1099:"kn",3098:"sr",1130:"yo",10249:"en-BZ",1087:"kk",6170:"sr-Latn-BA",4105:"en-CA",1107:"km",2074:"sr-Latn",9225:"en-029",1158:"quc",1132:"nso"}],Ta=new m({platformID:o,encodingID:o,languageID:o,nameID:o,length:o,string:new b(o,new Y("length",n=>vi(n.platformID,n.encodingID,n.languageID)),{type:"parent",relativeTo:n=>n.parent.stringOffset,allowNull:false})}),lu=new m({length:o,tag:new b(o,new Y("length","utf16be"),{type:"parent",relativeTo:n=>n.stringOffset})}),$0=new R(o,{0:{count:o,stringOffset:o,records:new d(Ta,"count")},1:{count:o,stringOffset:o,records:new d(Ta,"count"),langTagCount:o,langTags:new d(lu,"langTagCount")}}),uu=$0,ms=["copyright","fontFamily","fontSubfamily","uniqueSubfamily","fullName","version","postscriptName","trademark","manufacturer","designer","description","vendorURL","designerURL","license","licenseURL",null,"preferredFamily","preferredSubfamily","compatibleFull","sampleText","postscriptCIDFontName","wwsFamilyName","wwsSubfamilyName"];$0.process=function(n){var e={};for(let t of this.records){let r=ou[t.platformID][t.languageID];r==null&&this.langTags!=null&&t.languageID>=32768&&(r=this.langTags[t.languageID-32768].tag),r==null&&(r=t.platformID+"-"+t.languageID);let s=t.nameID>=256?"fontFeatures":ms[t.nameID]||t.nameID;e[s]==null&&(e[s]={});let a=e[s];t.nameID>=256&&(a=a[t.nameID]||(a[t.nameID]={})),(typeof t.string=="string"||typeof a[r]!="string")&&(a[r]=t.string);}this.records=e;};$0.preEncode=function(){if(Array.isArray(this.records))return;this.version=0;let n=[];for(let e in this.records){let t=this.records[e];e!=="fontFeatures"&&(n.push({platformID:3,encodingID:1,languageID:1033,nameID:ms.indexOf(e),length:t.en.length*2,string:t.en}),e==="postscriptName"&&n.push({platformID:1,encodingID:0,languageID:0,nameID:ms.indexOf(e),length:t.en.length,string:t.en}));}this.records=n,this.count=n.length,this.stringOffset=$0.size(this,null,false);};var xi=new R(o,{header:{xAvgCharWidth:w,usWeightClass:o,usWidthClass:o,fsType:new Se(o,[null,"noEmbedding","viewOnly","editable",null,null,null,null,"noSubsetting","bitmapOnly"]),ySubscriptXSize:w,ySubscriptYSize:w,ySubscriptXOffset:w,ySubscriptYOffset:w,ySuperscriptXSize:w,ySuperscriptYSize:w,ySuperscriptXOffset:w,ySuperscriptYOffset:w,yStrikeoutSize:w,yStrikeoutPosition:w,sFamilyClass:w,panose:new d(S,10),ulCharRange:new d(g,4),vendorID:new Y(4),fsSelection:new Se(o,["italic","underscore","negative","outlined","strikeout","bold","regular","useTypoMetrics","wws","oblique"]),usFirstCharIndex:o,usLastCharIndex:o},0:{},1:{typoAscender:w,typoDescender:w,typoLineGap:w,winAscent:o,winDescent:o,codePageRange:new d(g,2)},2:{typoAscender:w,typoDescender:w,typoLineGap:w,winAscent:o,winDescent:o,codePageRange:new d(g,2),xHeight:w,capHeight:w,defaultChar:o,breakChar:o,maxContent:o},5:{typoAscender:w,typoDescender:w,typoLineGap:w,winAscent:o,winDescent:o,codePageRange:new d(g,2),xHeight:w,capHeight:w,defaultChar:o,breakChar:o,maxContent:o,usLowerOpticalPointSize:o,usUpperOpticalPointSize:o}}),us=xi.versions;us[3]=us[4]=us[2];var cu=xi,fu=new R(se,{header:{italicAngle:se,underlinePosition:w,underlineThickness:w,isFixedPitch:g,minMemType42:g,maxMemType42:g,minMemType1:g,maxMemType1:g},1:{},2:{numberOfGlyphs:o,glyphNameIndex:new d(o,"numberOfGlyphs"),names:new d(new Y(S))},2.5:{numberOfGlyphs:o,offsets:new d(S,"numberOfGlyphs")},3:{},4:{map:new d(g,n=>n.parent.maxp.numGlyphs)}}),hu=new m({controlValues:new d(w)}),du=new m({instructions:new d(S)}),on=new R("head.indexToLocFormat",{0:{offsets:new d(o)},1:{offsets:new d(g)}});on.process=function(){if(this.version===0&&!this._processed){for(let n=0;n<this.offsets.length;n++)this.offsets[n]<<=1;this._processed=true;}};on.preEncode=function(){if(this.version===0&&this._processed!==false){for(let n=0;n<this.offsets.length;n++)this.offsets[n]>>>=1;this._processed=false;}};var pu=on,bu=new m({controlValueProgram:new d(S)}),gu=new d(new ke),Le=class{getCFFVersion(e){for(;e&&!e.hdrSize;)e=e.parent;return e?e.version:-1}decode(e,t){let s=this.getCFFVersion(t)>=2?e.readUInt32BE():e.readUInt16BE();if(s===0)return [];let a=e.readUInt8(),i;if(a===1)i=S;else if(a===2)i=o;else if(a===3)i=nt;else if(a===4)i=g;else throw new Error(`Bad offset size in CFFIndex: ${a} ${e.pos}`);let l=[],u=e.pos+(s+1)*a-1,c=i.decode(e);for(let f=0;f<s;f++){let h=i.decode(e);if(this.type!=null){let v=e.pos;e.pos=u+c,t.length=h-c,l.push(this.type.decode(e,t)),e.pos=v;}else l.push({offset:u+c,length:h-c});c=h;}return e.pos=u+c,l}size(e,t){let r=2;if(e.length===0)return r;let s=this.type||new ke,a=1;for(let l=0;l<e.length;l++){let u=e[l];a+=s.size(u,t);}let i;if(a<=255)i=S;else if(a<=65535)i=o;else if(a<=16777215)i=nt;else if(a<=4294967295)i=g;else throw new Error("Bad offset in CFFIndex");return r+=1+i.size()*(e.length+1),r+=a-1,r}encode(e,t,r){if(e.writeUInt16BE(t.length),t.length===0)return;let s=this.type||new ke,a=[],i=1;for(let u of t){let c=s.size(u,r);a.push(c),i+=c;}let l;if(i<=255)l=S;else if(i<=65535)l=o;else if(i<=16777215)l=nt;else if(i<=4294967295)l=g;else throw new Error("Bad offset in CFFIndex");e.writeUInt8(l.size()),i=1,l.encode(e,i);for(let u of a)i+=u,l.encode(e,i);for(let u of t)s.encode(e,u,r);}constructor(e){this.type=e;}},p0=15,Fa=["0","1","2","3","4","5","6","7","8","9",".","E","E-",null,"-"],Da={".":10,E:11,"E-":12,"-":14},m0=class{static decode(e,t){if(32<=t&&t<=246)return t-139;if(247<=t&&t<=250)return (t-247)*256+e.readUInt8()+108;if(251<=t&&t<=254)return -(t-251)*256-e.readUInt8()-108;if(t===28)return e.readInt16BE();if(t===29)return e.readInt32BE();if(t===30){let r="";for(;;){let s=e.readUInt8(),a=s>>4;if(a===p0)break;r+=Fa[a];let i=s&15;if(i===p0)break;r+=Fa[i];}return parseFloat(r)}return null}static size(e){if(e.forceLarge&&(e=32768),(e|0)!==e){let t=""+e;return 1+Math.ceil((t.length+1)/2)}else return  -107<=e&&e<=107?1:108<=e&&e<=1131||-1131<=e&&e<=-108?2:-32768<=e&&e<=32767?3:5}static encode(e,t){let r=Number(t);if(t.forceLarge)return e.writeUInt8(29),e.writeInt32BE(r);if((r|0)!==r){e.writeUInt8(30);let a=""+r;for(let i=0;i<a.length;i+=2){let l=a[i],u=Da[l]||+l;if(i===a.length-1)var s=p0;else {let c=a[i+1];var s=Da[c]||+c;}e.writeUInt8(u<<4|s&15);}if(s!==p0)return e.writeUInt8(p0<<4)}else return  -107<=r&&r<=107?e.writeUInt8(r+139):108<=r&&r<=1131?(r-=108,e.writeUInt8((r>>8)+247),e.writeUInt8(r&255)):-1131<=r&&r<=-108?(r=-r-108,e.writeUInt8((r>>8)+251),e.writeUInt8(r&255)):-32768<=r&&r<=32767?(e.writeUInt8(28),e.writeInt16BE(r)):(e.writeUInt8(29),e.writeInt32BE(r))}},t0=class{decodeOperands(e,t,r,s){if(Array.isArray(e))return s.map((a,i)=>this.decodeOperands(e[i],t,r,[a]));if(e.decode!=null)return e.decode(t,r,s);switch(e){case "number":case "offset":case "sid":return s[0];case "boolean":return !!s[0];default:return s}}encodeOperands(e,t,r,s){return Array.isArray(e)?s.map((a,i)=>this.encodeOperands(e[i],t,r,a)[0]):e.encode!=null?e.encode(t,s,r):typeof s=="number"?[s]:typeof s=="boolean"?[+s]:Array.isArray(s)?s:[s]}decode(e,t){let r=e.pos+t.length,s={},a=[];Object.defineProperties(s,{parent:{value:t},_startOffset:{value:e.pos}});for(let i in this.fields){let l=this.fields[i];s[l[1]]=l[3];}for(;e.pos<r;){let i=e.readUInt8();if(i<28){i===12&&(i=i<<8|e.readUInt8());let l=this.fields[i];if(!l)throw new Error(`Unknown operator ${i}`);let u=this.decodeOperands(l[2],e,s,a);u!=null&&(u instanceof gt?Object.defineProperty(s,l[1],u):s[l[1]]=u),a=[];}else a.push(m0.decode(e,i));}return s}size(e,t,r=true){let s={parent:t,val:e,pointerSize:0,startOffset:t.startOffset||0},a=0;for(let i in this.fields){let l=this.fields[i],u=e[l[1]];if(u==null||(0, bs.default)(u,l[3]))continue;let c=this.encodeOperands(l[2],null,s,u);for(let h of c)a+=m0.size(h);let f=Array.isArray(l[0])?l[0]:[l[0]];a+=f.length;}return r&&(a+=s.pointerSize),a}encode(e,t,r){let s={pointers:[],startOffset:e.pos,parent:r,val:t,pointerSize:0};s.pointerOffset=e.pos+this.size(t,s,false);for(let i of this.ops){let l=t[i[1]];if(l==null||(0, bs.default)(l,i[3]))continue;let u=this.encodeOperands(i[2],e,s,l);for(let f of u)m0.encode(e,f);let c=Array.isArray(i[0])?i[0]:[i[0]];for(let f of c)e.writeUInt8(f);}let a=0;for(;a<s.pointers.length;){let i=s.pointers[a++];i.type.encode(e,i.val,i.parent);}}constructor(e=[]){this.ops=e,this.fields={};for(let t of e){let r=Array.isArray(t[0])?t[0][0]<<8|t[0][1]:t[0];this.fields[r]=t;}}},Oe=class extends b{decode(e,t,r){return this.offsetType={decode:()=>r[0]},super.decode(e,t,r)}encode(e,t,r){if(!e)return this.offsetType={size:()=>0},this.size(t,r),[new _0(0)];let s=null;return this.offsetType={encode:(a,i)=>s=i},super.encode(e,t,r),[new _0(s)]}constructor(e,t={}){t.type==null&&(t.type="global"),super(null,e,t);}},_0=class{valueOf(){return this.val}constructor(e){this.val=e,this.forceLarge=true;}},vs=class{static decode(e,t,r){let s=r.pop();for(;r.length>s;)r.pop();}},xs=new t0([[6,"BlueValues","delta",null],[7,"OtherBlues","delta",null],[8,"FamilyBlues","delta",null],[9,"FamilyOtherBlues","delta",null],[[12,9],"BlueScale","number",.039625],[[12,10],"BlueShift","number",7],[[12,11],"BlueFuzz","number",1],[10,"StdHW","number",null],[11,"StdVW","number",null],[[12,12],"StemSnapH","delta",null],[[12,13],"StemSnapV","delta",null],[[12,14],"ForceBold","boolean",false],[[12,17],"LanguageGroup","number",0],[[12,18],"ExpansionFactor","number",.06],[[12,19],"initialRandomSeed","number",0],[20,"defaultWidthX","number",0],[21,"nominalWidthX","number",0],[22,"vsindex","number",0],[23,"blend",vs,null],[19,"Subrs",new Oe(new Le,{type:"local"}),null]]),Y0=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall","001.000","001.001","001.002","001.003","Black","Bold","Book","Light","Medium","Regular","Roman","Semibold"],wi=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","","endash","dagger","daggerdbl","periodcentered","","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","","questiondown","","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","","ring","cedilla","","hungarumlaut","ogonek","caron","emdash","","","","","","","","","","","","","","","","","AE","","ordfeminine","","","","","Lslash","Oslash","OE","ordmasculine","","","","","","ae","","","","dotlessi","","","lslash","oslash","oe","germandbls"],mu=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","space","exclamsmall","Hungarumlautsmall","","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","","asuperior","bsuperior","centsuperior","dsuperior","esuperior","","","isuperior","","","lsuperior","msuperior","nsuperior","osuperior","","","rsuperior","ssuperior","tsuperior","","ff","fi","fl","ffi","ffl","parenleftinferior","","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","exclamdownsmall","centoldstyle","Lslashsmall","","","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","","Dotaccentsmall","","","Macronsmall","","","figuredash","hypheninferior","","","Ogoneksmall","Ringsmall","Cedillasmall","","","","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","","","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],yi=[".notdef","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quoteright","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","quoteleft","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","exclamdown","cent","sterling","fraction","yen","florin","section","currency","quotesingle","quotedblleft","guillemotleft","guilsinglleft","guilsinglright","fi","fl","endash","dagger","daggerdbl","periodcentered","paragraph","bullet","quotesinglbase","quotedblbase","quotedblright","guillemotright","ellipsis","perthousand","questiondown","grave","acute","circumflex","tilde","macron","breve","dotaccent","dieresis","ring","cedilla","hungarumlaut","ogonek","caron","emdash","AE","ordfeminine","Lslash","Oslash","OE","ordmasculine","ae","dotlessi","lslash","oslash","oe","germandbls","onesuperior","logicalnot","mu","trademark","Eth","onehalf","plusminus","Thorn","onequarter","divide","brokenbar","degree","thorn","threequarters","twosuperior","registered","minus","eth","multiply","threesuperior","copyright","Aacute","Acircumflex","Adieresis","Agrave","Aring","Atilde","Ccedilla","Eacute","Ecircumflex","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Ntilde","Oacute","Ocircumflex","Odieresis","Ograve","Otilde","Scaron","Uacute","Ucircumflex","Udieresis","Ugrave","Yacute","Ydieresis","Zcaron","aacute","acircumflex","adieresis","agrave","aring","atilde","ccedilla","eacute","ecircumflex","edieresis","egrave","iacute","icircumflex","idieresis","igrave","ntilde","oacute","ocircumflex","odieresis","ograve","otilde","scaron","uacute","ucircumflex","udieresis","ugrave","yacute","ydieresis","zcaron"],vu=[".notdef","space","exclamsmall","Hungarumlautsmall","dollaroldstyle","dollarsuperior","ampersandsmall","Acutesmall","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","questionsmall","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","Circumflexsmall","hyphensuperior","Gravesmall","Asmall","Bsmall","Csmall","Dsmall","Esmall","Fsmall","Gsmall","Hsmall","Ismall","Jsmall","Ksmall","Lsmall","Msmall","Nsmall","Osmall","Psmall","Qsmall","Rsmall","Ssmall","Tsmall","Usmall","Vsmall","Wsmall","Xsmall","Ysmall","Zsmall","colonmonetary","onefitted","rupiah","Tildesmall","exclamdownsmall","centoldstyle","Lslashsmall","Scaronsmall","Zcaronsmall","Dieresissmall","Brevesmall","Caronsmall","Dotaccentsmall","Macronsmall","figuredash","hypheninferior","Ogoneksmall","Ringsmall","Cedillasmall","onequarter","onehalf","threequarters","questiondownsmall","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior","Agravesmall","Aacutesmall","Acircumflexsmall","Atildesmall","Adieresissmall","Aringsmall","AEsmall","Ccedillasmall","Egravesmall","Eacutesmall","Ecircumflexsmall","Edieresissmall","Igravesmall","Iacutesmall","Icircumflexsmall","Idieresissmall","Ethsmall","Ntildesmall","Ogravesmall","Oacutesmall","Ocircumflexsmall","Otildesmall","Odieresissmall","OEsmall","Oslashsmall","Ugravesmall","Uacutesmall","Ucircumflexsmall","Udieresissmall","Yacutesmall","Thornsmall","Ydieresissmall"],xu=[".notdef","space","dollaroldstyle","dollarsuperior","parenleftsuperior","parenrightsuperior","twodotenleader","onedotenleader","comma","hyphen","period","fraction","zerooldstyle","oneoldstyle","twooldstyle","threeoldstyle","fouroldstyle","fiveoldstyle","sixoldstyle","sevenoldstyle","eightoldstyle","nineoldstyle","colon","semicolon","commasuperior","threequartersemdash","periodsuperior","asuperior","bsuperior","centsuperior","dsuperior","esuperior","isuperior","lsuperior","msuperior","nsuperior","osuperior","rsuperior","ssuperior","tsuperior","ff","fi","fl","ffi","ffl","parenleftinferior","parenrightinferior","hyphensuperior","colonmonetary","onefitted","rupiah","centoldstyle","figuredash","hypheninferior","onequarter","onehalf","threequarters","oneeighth","threeeighths","fiveeighths","seveneighths","onethird","twothirds","zerosuperior","onesuperior","twosuperior","threesuperior","foursuperior","fivesuperior","sixsuperior","sevensuperior","eightsuperior","ninesuperior","zeroinferior","oneinferior","twoinferior","threeinferior","fourinferior","fiveinferior","sixinferior","seveninferior","eightinferior","nineinferior","centinferior","dollarinferior","periodinferior","commainferior"],Ci=new m({reserved:new $(o),reqFeatureIndex:o,featureCount:o,featureIndexes:new d(o,"featureCount")}),wu=new m({tag:new Y(4),langSys:new b(o,Ci,{type:"parent"})}),yu=new m({defaultLangSys:new b(o,Ci),count:o,langSysRecords:new d(wu,"count")}),Cu=new m({tag:new Y(4),script:new b(o,yu,{type:"parent"})}),Si=new d(Cu,o),Su=new m({version:o,nameID:o}),Ai=new m({featureParams:new b(o,Su),lookupCount:o,lookupListIndexes:new d(o,"lookupCount")}),Au=new m({tag:new Y(4),feature:new b(o,Ai,{type:"parent"})}),ki=new d(Au,o),ku=new m({markAttachmentType:S,flags:new Se(S,["rightToLeft","ignoreBaseGlyphs","ignoreLigatures","ignoreMarks","useMarkFilteringSet"])});function Q0(n){let e=new m({lookupType:o,flags:ku,subTableCount:o,subTables:new d(new b(o,n),"subTableCount"),markFilteringSet:new mt(o,t=>t.flags.flags.useMarkFilteringSet)});return new Z(new b(o,e),o)}var Iu=new m({start:o,end:o,startCoverageIndex:o}),J=new R(o,{1:{glyphCount:o,glyphs:new d(o,"glyphCount")},2:{rangeCount:o,rangeRecords:new d(Iu,"rangeCount")}}),Eu=new m({start:o,end:o,class:o}),At=new R(o,{1:{startGlyph:o,glyphCount:o,classValueArray:new d(o,"glyphCount")},2:{classRangeCount:o,classRangeRecord:new d(Eu,"classRangeCount")}}),St=new m({a:o,b:o,deltaFormat:o}),P0=new m({sequenceIndex:o,lookupListIndex:o}),Ou=new m({glyphCount:o,lookupCount:o,input:new d(o,n=>n.glyphCount-1),lookupRecords:new d(P0,"lookupCount")}),Pu=new d(new b(o,Ou),o),Tu=new m({glyphCount:o,lookupCount:o,classes:new d(o,n=>n.glyphCount-1),lookupRecords:new d(P0,"lookupCount")}),Fu=new d(new b(o,Tu),o),Ii=new R(o,{1:{coverage:new b(o,J),ruleSetCount:o,ruleSets:new d(new b(o,Pu),"ruleSetCount")},2:{coverage:new b(o,J),classDef:new b(o,At),classSetCnt:o,classSet:new d(new b(o,Fu),"classSetCnt")},3:{glyphCount:o,lookupCount:o,coverages:new d(new b(o,J),"glyphCount"),lookupRecords:new d(P0,"lookupCount")}}),Du=new m({backtrackGlyphCount:o,backtrack:new d(o,"backtrackGlyphCount"),inputGlyphCount:o,input:new d(o,n=>n.inputGlyphCount-1),lookaheadGlyphCount:o,lookahead:new d(o,"lookaheadGlyphCount"),lookupCount:o,lookupRecords:new d(P0,"lookupCount")}),La=new d(new b(o,Du),o),Ei=new R(o,{1:{coverage:new b(o,J),chainCount:o,chainRuleSets:new d(new b(o,La),"chainCount")},2:{coverage:new b(o,J),backtrackClassDef:new b(o,At),inputClassDef:new b(o,At),lookaheadClassDef:new b(o,At),chainCount:o,chainClassSet:new d(new b(o,La),"chainCount")},3:{backtrackGlyphCount:o,backtrackCoverage:new d(new b(o,J),"backtrackGlyphCount"),inputGlyphCount:o,inputCoverage:new d(new b(o,J),"inputGlyphCount"),lookaheadGlyphCount:o,lookaheadCoverage:new d(new b(o,J),"lookaheadGlyphCount"),lookupCount:o,lookupRecords:new d(P0,"lookupCount")}}),v0=new Xe(16,"BE",14),Lu=new m({startCoord:v0,peakCoord:v0,endCoord:v0}),Bu=new m({axisCount:o,regionCount:o,variationRegions:new d(new d(Lu,"axisCount"),"regionCount")}),Mu=new m({shortDeltas:new d(w,n=>n.parent.shortDeltaCount),regionDeltas:new d(fe,n=>n.parent.regionIndexCount-n.parent.shortDeltaCount),deltas:n=>n.shortDeltas.concat(n.regionDeltas)}),Nu=new m({itemCount:o,shortDeltaCount:o,regionIndexCount:o,regionIndexes:new d(o,"regionIndexCount"),deltaSets:new d(Mu,"itemCount")}),vr=new m({format:o,variationRegionList:new b(g,Bu),variationDataCount:o,itemVariationData:new d(new b(g,Nu),"variationDataCount")}),Ru=new R(o,{1:{axisIndex:o,filterRangeMinValue:v0,filterRangeMaxValue:v0}}),Uu=new m({conditionCount:o,conditionTable:new d(new b(g,Ru),"conditionCount")}),Vu=new m({featureIndex:o,alternateFeatureTable:new b(g,Ai,{type:"parent"})}),Gu=new m({version:se,substitutionCount:o,substitutions:new d(Vu,"substitutionCount")}),zu=new m({conditionSet:new b(g,Uu,{type:"parent"}),featureTableSubstitution:new b(g,Gu,{type:"parent"})}),Oi=new m({majorVersion:o,minorVersion:o,featureVariationRecordCount:g,featureVariationRecords:new d(zu,"featureVariationRecordCount")}),er=class{decode(e,t,r){return this.predefinedOps[r[0]]?this.predefinedOps[r[0]]:this.type.decode(e,t,r)}size(e,t){return this.type.size(e,t)}encode(e,t,r){let s=this.predefinedOps.indexOf(t);return s!==-1?s:this.type.encode(e,t,r)}constructor(e,t){this.predefinedOps=e,this.type=t;}},ws=class extends G{decode(e){return S.decode(e)&127}constructor(){super("UInt8");}},Pi=new m({first:o,nLeft:S}),Wu=new m({first:o,nLeft:o}),Hu=new R(new ws,{0:{nCodes:S,codes:new d(S,"nCodes")},1:{nRanges:S,ranges:new d(Pi,"nRanges")}}),qu=new er([wi,mu],new Oe(Hu,{lazy:true})),tr=class extends d{decode(e,t){let r=we(this.length,e,t),s=0,a=[];for(;s<r;){let i=this.type.decode(e,t);i.offset=s,s+=i.nLeft+1,a.push(i);}return a}},Xu=new R(S,{0:{glyphs:new d(o,n=>n.parent.CharStrings.length-1)},1:{ranges:new tr(Pi,n=>n.parent.CharStrings.length-1)},2:{ranges:new tr(Wu,n=>n.parent.CharStrings.length-1)}}),ju=new er([yi,vu,xu],new Oe(Xu,{lazy:true})),Ku=new m({first:o,fd:S}),Yu=new m({first:g,fd:o}),Ti=new R(S,{0:{fds:new d(S,n=>n.parent.CharStrings.length)},3:{nRanges:o,ranges:new d(Ku,"nRanges"),sentinel:o},4:{nRanges:g,ranges:new d(Yu,"nRanges"),sentinel:g}}),cs=new Oe(xs),rr=class{decode(e,t,r){return t.length=r[0],cs.decode(e,t,[r[1]])}size(e,t){return [xs.size(e,t,false),cs.size(e,t)[0]]}encode(e,t,r){return [xs.size(t,r,false),cs.encode(e,t,r)[0]]}},Fi=new t0([[18,"Private",new rr,null],[[12,38],"FontName","sid",null],[[12,7],"FontMatrix","array",[.001,0,0,.001,0,0]],[[12,5],"PaintType","number",0]]),Zu=new t0([[[12,30],"ROS",["sid","sid","number"],null],[0,"version","sid",null],[1,"Notice","sid",null],[[12,0],"Copyright","sid",null],[2,"FullName","sid",null],[3,"FamilyName","sid",null],[4,"Weight","sid",null],[[12,1],"isFixedPitch","boolean",false],[[12,2],"ItalicAngle","number",0],[[12,3],"UnderlinePosition","number",-100],[[12,4],"UnderlineThickness","number",50],[[12,5],"PaintType","number",0],[[12,6],"CharstringType","number",2],[[12,7],"FontMatrix","array",[.001,0,0,.001,0,0]],[13,"UniqueID","number",null],[5,"FontBBox","array",[0,0,0,0]],[[12,8],"StrokeWidth","number",0],[14,"XUID","array",null],[15,"charset",ju,yi],[16,"Encoding",qu,wi],[17,"CharStrings",new Oe(new Le),null],[18,"Private",new rr,null],[[12,20],"SyntheticBase","number",null],[[12,21],"PostScript","sid",null],[[12,22],"BaseFontName","sid",null],[[12,23],"BaseFontBlend","delta",null],[[12,31],"CIDFontVersion","number",0],[[12,32],"CIDFontRevision","number",0],[[12,33],"CIDFontType","number",0],[[12,34],"CIDCount","number",8720],[[12,35],"UIDBase","number",null],[[12,37],"FDSelect",new Oe(Ti),null],[[12,36],"FDArray",new Oe(new Le(Fi)),null],[[12,38],"FontName","sid",null]]),Ju=new m({length:o,itemVariationStore:vr}),$u=new t0([[[12,7],"FontMatrix","array",[.001,0,0,.001,0,0]],[17,"CharStrings",new Oe(new Le),null],[[12,37],"FDSelect",new Oe(Ti),null],[[12,36],"FDArray",new Oe(new Le(Fi)),null],[24,"vstore",new Oe(Ju),null],[25,"maxstack","number",193]]),_u=new R(Sn,{1:{hdrSize:S,offSize:S,nameIndex:new Le(new Y("length")),topDictIndex:new Le(Zu),stringIndex:new Le(new Y("length")),globalSubrIndex:new Le},2:{hdrSize:S,length:o,topDict:$u,globalSubrIndex:new Le}}),Di=_u,ys=class n{static decode(e){return new n(e)}decode(){this.stream.pos;let t=Di.decode(this.stream);for(let r in t){let s=t[r];this[r]=s;}if(this.version<2){if(this.topDictIndex.length!==1)throw new Error("Only a single font is allowed in CFF");this.topDict=this.topDictIndex[0];}return this.isCIDFont=this.topDict.ROS!=null,this}string(e){return this.version>=2?null:e<Y0.length?Y0[e]:this.stringIndex[e-Y0.length]}get postscriptName(){return this.version<2?this.nameIndex[0]:null}get fullName(){return this.string(this.topDict.FullName)}get familyName(){return this.string(this.topDict.FamilyName)}getCharString(e){return this.stream.pos=this.topDict.CharStrings[e].offset,this.stream.readBuffer(this.topDict.CharStrings[e].length)}getGlyphName(e){if(this.version>=2||this.isCIDFont)return null;let{charset:t}=this.topDict;if(Array.isArray(t))return t[e];if(e===0)return ".notdef";switch(e-=1,t.version){case 0:return this.string(t.glyphs[e]);case 1:case 2:for(let r=0;r<t.ranges.length;r++){let s=t.ranges[r];if(s.offset<=e&&e<=s.offset+s.nLeft)return this.string(s.first+(e-s.offset))}break}return null}fdForGlyph(e){if(!this.topDict.FDSelect)return null;switch(this.topDict.FDSelect.version){case 0:return this.topDict.FDSelect.fds[e];case 3:case 4:let{ranges:t}=this.topDict.FDSelect,r=0,s=t.length-1;for(;r<=s;){let a=r+s>>1;if(e<t[a].first)s=a-1;else if(a<s&&e>=t[a+1].first)r=a+1;else return t[a].fd}default:throw new Error(`Unknown FDSelect version: ${this.topDict.FDSelect.version}`)}}privateDictForGlyph(e){if(this.topDict.FDSelect){let t=this.fdForGlyph(e);return this.topDict.FDArray[t]?this.topDict.FDArray[t].Private:null}return this.version<2?this.topDict.Private:this.topDict.FDArray[0].Private}constructor(e){this.stream=e,this.decode();}},Li=ys,Qu=new m({glyphIndex:o,vertOriginY:w}),ec=new m({majorVersion:o,minorVersion:o,defaultVertOriginY:w,numVertOriginYMetrics:o,metrics:new d(Qu,"numVertOriginYMetrics")}),Qt=new m({height:S,width:S,horiBearingX:fe,horiBearingY:fe,horiAdvance:S,vertBearingX:fe,vertBearingY:fe,vertAdvance:S}),z0=new m({height:S,width:S,bearingX:fe,bearingY:fe,advance:S}),Ba=new m({glyph:o,xOffset:fe,yOffset:fe}),sr=class{},x0=class{};new R("version",{1:{metrics:z0,data:sr},2:{metrics:z0,data:x0},5:{data:x0},6:{metrics:Qt,data:sr},7:{metrics:Qt,data:x0},8:{metrics:z0,pad:new $(S),numComponents:o,components:new d(Ba,"numComponents")},9:{metrics:Qt,pad:new $(S),numComponents:o,components:new d(Ba,"numComponents")},17:{metrics:z0,dataLen:g,data:new ke("dataLen")},18:{metrics:Qt,dataLen:g,data:new ke("dataLen")},19:{dataLen:g,data:new ke("dataLen")}});var Ma=new m({ascender:fe,descender:fe,widthMax:S,caretSlopeNumerator:fe,caretSlopeDenominator:fe,caretOffset:fe,minOriginSB:fe,minAdvanceSB:fe,maxBeforeBL:fe,minAfterBL:fe,pad:new $(fe,2)}),tc=new m({glyphCode:o,offset:o}),rc=new R(o,{header:{imageFormat:o,imageDataOffset:g},1:{offsetArray:new d(g,n=>n.parent.lastGlyphIndex-n.parent.firstGlyphIndex+1)},2:{imageSize:g,bigMetrics:Qt},3:{offsetArray:new d(o,n=>n.parent.lastGlyphIndex-n.parent.firstGlyphIndex+1)},4:{numGlyphs:g,glyphArray:new d(tc,n=>n.numGlyphs+1)},5:{imageSize:g,bigMetrics:Qt,numGlyphs:g,glyphCodeArray:new d(o,"numGlyphs")}}),sc=new m({firstGlyphIndex:o,lastGlyphIndex:o,subtable:new b(g,rc)}),nc=new m({indexSubTableArray:new b(g,new d(sc,1),{type:"parent"}),indexTablesSize:g,numberOfIndexSubTables:g,colorRef:g,hori:Ma,vert:Ma,startGlyphIndex:o,endGlyphIndex:o,ppemX:S,ppemY:S,bitDepth:S,flags:new Se(S,["horizontal","vertical"])}),ac=new m({version:g,numSizes:g,sizes:new d(nc,"numSizes")}),ic=new m({ppem:o,resolution:o,imageOffsets:new d(new b(g,"void"),n=>n.parent.parent.maxp.numGlyphs+1)}),oc=new m({version:o,flags:new Se(o,["renderOutlines"]),numImgTables:g,imageTables:new d(new b(g,ic),"numImgTables")}),lc=new m({gid:o,paletteIndex:o}),uc=new m({gid:o,firstLayerIndex:o,numLayers:o}),cc=new m({version:o,numBaseGlyphRecords:o,baseGlyphRecord:new b(g,new d(uc,"numBaseGlyphRecords")),layerRecords:new b(g,new d(lc,"numLayerRecords"),{lazy:true}),numLayerRecords:o}),fc=new m({blue:S,green:S,red:S,alpha:S}),hc=new R(o,{header:{numPaletteEntries:o,numPalettes:o,numColorRecords:o,colorRecords:new b(g,new d(fc,"numColorRecords")),colorRecordIndices:new d(o,"numPalettes")},0:{},1:{offsetPaletteTypeArray:new b(g,new d(g,"numPalettes")),offsetPaletteLabelArray:new b(g,new d(o,"numPalettes")),offsetPaletteEntryLabelArray:new b(g,new d(o,"numPaletteEntries"))}}),C0=new R(o,{1:{coordinate:w},2:{coordinate:w,referenceGlyph:o,baseCoordPoint:o},3:{coordinate:w,deviceTable:new b(o,St)}}),dc=new m({defaultIndex:o,baseCoordCount:o,baseCoords:new d(new b(o,C0),"baseCoordCount")}),pc=new m({tag:new Y(4),minCoord:new b(o,C0,{type:"parent"}),maxCoord:new b(o,C0,{type:"parent"})}),Bi=new m({minCoord:new b(o,C0),maxCoord:new b(o,C0),featMinMaxCount:o,featMinMaxRecords:new d(pc,"featMinMaxCount")}),bc=new m({tag:new Y(4),minMax:new b(o,Bi,{type:"parent"})}),gc=new m({baseValues:new b(o,dc),defaultMinMax:new b(o,Bi),baseLangSysCount:o,baseLangSysRecords:new d(bc,"baseLangSysCount")}),mc=new m({tag:new Y(4),script:new b(o,gc,{type:"parent"})}),vc=new d(mc,o),xc=new d(new Y(4),o),Na=new m({baseTagList:new b(o,xc),baseScriptList:new b(o,vc)}),wc=new R(g,{header:{horizAxis:new b(o,Na),vertAxis:new b(o,Na)},65536:{},65537:{itemVariationStore:new b(g,vr)}}),yc=new d(o,o),Cc=new m({coverage:new b(o,J),glyphCount:o,attachPoints:new d(new b(o,yc),"glyphCount")}),Sc=new R(o,{1:{coordinate:w},2:{caretValuePoint:o},3:{coordinate:w,deviceTable:new b(o,St)}}),Ac=new d(new b(o,Sc),o),kc=new m({coverage:new b(o,J),ligGlyphCount:o,ligGlyphs:new d(new b(o,Ac),"ligGlyphCount")}),Ra=new m({markSetTableFormat:o,markSetCount:o,coverage:new d(new b(g,J),"markSetCount")}),Ic=new R(g,{header:{glyphClassDef:new b(o,At),attachList:new b(o,Cc),ligCaretList:new b(o,kc),markAttachClassDef:new b(o,At)},65536:{},65538:{markGlyphSetsDef:new b(o,Ra)},65539:{markGlyphSetsDef:new b(o,Ra),itemVariationStore:new b(g,vr)}}),$t=new Se(o,["xPlacement","yPlacement","xAdvance","yAdvance","xPlaDevice","yPlaDevice","xAdvDevice","yAdvDevice"]),Ec={xPlacement:w,yPlacement:w,xAdvance:w,yAdvance:w,xPlaDevice:new b(o,St,{type:"global",relativeTo:n=>n.rel}),yPlaDevice:new b(o,St,{type:"global",relativeTo:n=>n.rel}),xAdvDevice:new b(o,St,{type:"global",relativeTo:n=>n.rel}),yAdvDevice:new b(o,St,{type:"global",relativeTo:n=>n.rel})},It=class{buildStruct(e){let t=e;for(;!t[this.key]&&t.parent;)t=t.parent;if(!t[this.key])return;let r={};r.rel=()=>t._startOffset;let s=t[this.key];for(let a in s)s[a]&&(r[a]=Ec[a]);return new m(r)}size(e,t){return this.buildStruct(t).size(e,t)}decode(e,t){let r=this.buildStruct(t).decode(e,t);return delete r.rel,r}constructor(e="valueFormat"){this.key=e;}},Oc=new m({secondGlyph:o,value1:new It("valueFormat1"),value2:new It("valueFormat2")}),Pc=new d(Oc,o),Tc=new m({value1:new It("valueFormat1"),value2:new It("valueFormat2")}),S0=new R(o,{1:{xCoordinate:w,yCoordinate:w},2:{xCoordinate:w,yCoordinate:w,anchorPoint:o},3:{xCoordinate:w,yCoordinate:w,xDeviceTable:new b(o,St),yDeviceTable:new b(o,St)}}),Fc=new m({entryAnchor:new b(o,S0,{type:"parent"}),exitAnchor:new b(o,S0,{type:"parent"})}),Dc=new m({class:o,markAnchor:new b(o,S0,{type:"parent"})}),fs=new d(Dc,o),Lc=new d(new b(o,S0),n=>n.parent.classCount),Ua=new d(Lc,o),Bc=new d(new b(o,S0),n=>n.parent.parent.classCount),Mc=new d(Bc,o),Nc=new d(new b(o,Mc),o),A0=new R("lookupType",{1:new R(o,{1:{coverage:new b(o,J),valueFormat:$t,value:new It},2:{coverage:new b(o,J),valueFormat:$t,valueCount:o,values:new Z(new It,"valueCount")}}),2:new R(o,{1:{coverage:new b(o,J),valueFormat1:$t,valueFormat2:$t,pairSetCount:o,pairSets:new Z(new b(o,Pc),"pairSetCount")},2:{coverage:new b(o,J),valueFormat1:$t,valueFormat2:$t,classDef1:new b(o,At),classDef2:new b(o,At),class1Count:o,class2Count:o,classRecords:new Z(new Z(Tc,"class2Count"),"class1Count")}}),3:{format:o,coverage:new b(o,J),entryExitCount:o,entryExitRecords:new d(Fc,"entryExitCount")},4:{format:o,markCoverage:new b(o,J),baseCoverage:new b(o,J),classCount:o,markArray:new b(o,fs),baseArray:new b(o,Ua)},5:{format:o,markCoverage:new b(o,J),ligatureCoverage:new b(o,J),classCount:o,markArray:new b(o,fs),ligatureArray:new b(o,Nc)},6:{format:o,mark1Coverage:new b(o,J),mark2Coverage:new b(o,J),classCount:o,mark1Array:new b(o,fs),mark2Array:new b(o,Ua)},7:Ii,8:Ei,9:{posFormat:o,lookupType:o,extension:new b(g,null)}});A0.versions[9].extension.type=A0;var Rc=new R(g,{header:{scriptList:new b(o,Si),featureList:new b(o,ki),lookupList:new b(o,new Q0(A0))},65536:{},65537:{featureVariations:new b(g,Oi)}}),Mi=new d(o,o),Uc=Mi,Vc=new m({glyph:o,compCount:o,components:new d(o,n=>n.compCount-1)}),Gc=new d(new b(o,Vc),o),Cs=new R("lookupType",{1:new R(o,{1:{coverage:new b(o,J),deltaGlyphID:w},2:{coverage:new b(o,J),glyphCount:o,substitute:new Z(o,"glyphCount")}}),2:{substFormat:o,coverage:new b(o,J),count:o,sequences:new Z(new b(o,Mi),"count")},3:{substFormat:o,coverage:new b(o,J),count:o,alternateSet:new Z(new b(o,Uc),"count")},4:{substFormat:o,coverage:new b(o,J),count:o,ligatureSets:new Z(new b(o,Gc),"count")},5:Ii,6:Ei,7:{substFormat:o,lookupType:o,extension:new b(g,null)},8:{substFormat:o,coverage:new b(o,J),backtrackCoverage:new d(new b(o,J),"backtrackGlyphCount"),lookaheadGlyphCount:o,lookaheadCoverage:new d(new b(o,J),"lookaheadGlyphCount"),glyphCount:o,substitutes:new d(o,"glyphCount")}});Cs.versions[7].extension.type=Cs;var zc=new R(g,{header:{scriptList:new b(o,Si),featureList:new b(o,ki),lookupList:new b(o,new Q0(Cs))},65536:{},65537:{featureVariations:new b(g,Oi)}}),yt=new d(o,o),Wc=new m({shrinkageEnableGSUB:new b(o,yt),shrinkageDisableGSUB:new b(o,yt),shrinkageEnableGPOS:new b(o,yt),shrinkageDisableGPOS:new b(o,yt),shrinkageJstfMax:new b(o,new Q0(A0)),extensionEnableGSUB:new b(o,yt),extensionDisableGSUB:new b(o,yt),extensionEnableGPOS:new b(o,yt),extensionDisableGPOS:new b(o,yt),extensionJstfMax:new b(o,new Q0(A0))}),Ni=new d(new b(o,Wc),o),Hc=new m({tag:new Y(4),jstfLangSys:new b(o,Ni)}),qc=new m({extenderGlyphs:new b(o,new d(o,o)),defaultLangSys:new b(o,Ni),langSysCount:o,langSysRecords:new d(Hc,"langSysCount")}),Xc=new m({tag:new Y(4),script:new b(o,qc,{type:"parent"})}),jc=new m({version:g,scriptCount:o,scriptList:new d(Xc,"scriptCount")}),Ss=class{decode(e,t){switch(this.size(0,t)){case 1:return e.readUInt8();case 2:return e.readUInt16BE();case 3:return e.readUInt24BE();case 4:return e.readUInt32BE()}}size(e,t){return we(this._size,null,t)}constructor(e){this._size=e;}},Kc=new m({entry:new Ss(n=>((n.parent.entryFormat&48)>>4)+1),outerIndex:n=>n.entry>>(n.parent.entryFormat&15)+1,innerIndex:n=>n.entry&(1<<(n.parent.entryFormat&15)+1)-1}),hs=new m({entryFormat:o,mapCount:o,mapData:new d(Kc,"mapCount")}),Yc=new m({majorVersion:o,minorVersion:o,itemVariationStore:new b(g,vr),advanceWidthMapping:new b(g,hs),LSBMapping:new b(g,hs),RSBMapping:new b(g,hs)}),Zc=new m({format:g,length:g,offset:g}),Jc=new m({reserved:new $(o,2),cbSignature:g,signature:new ke("cbSignature")}),$c=new m({ulVersion:g,usNumSigs:o,usFlag:o,signatures:new d(Zc,"usNumSigs"),signatureBlocks:new d(Jc,"usNumSigs")}),_c=new m({rangeMaxPPEM:o,rangeGaspBehavior:new Se(o,["grayscale","gridfit","symmetricSmoothing","symmetricGridfit"])}),Qc=new m({version:o,numRanges:o,gaspRanges:new d(_c,"numRanges")}),ef=new m({pixelSize:S,maximumWidth:S,widths:new d(S,n=>n.parent.parent.maxp.numGlyphs)}),tf=new m({version:o,numRecords:w,sizeDeviceRecord:bt,records:new d(ef,"numRecords")}),rf=new m({left:o,right:o,value:w}),Va=new m({firstGlyph:o,nGlyphs:o,offsets:new d(o,"nGlyphs"),max:n=>n.offsets.length&&Math.max.apply(Math,n.offsets)}),sf=new m({off:n=>n._startOffset-n.parent.parent._startOffset,len:n=>((n.parent.leftTable.max-n.off)/n.parent.rowWidth+1)*(n.parent.rowWidth/2),values:new Z(w,"len")}),Ga=new R("format",{0:{nPairs:o,searchRange:o,entrySelector:o,rangeShift:o,pairs:new d(rf,"nPairs")},2:{rowWidth:o,leftTable:new b(o,Va,{type:"parent"}),rightTable:new b(o,Va,{type:"parent"}),array:new b(o,sf,{type:"parent"})},3:{glyphCount:o,kernValueCount:S,leftClassCount:S,rightClassCount:S,flags:S,kernValue:new d(w,"kernValueCount"),leftClass:new d(S,"glyphCount"),rightClass:new d(S,"glyphCount"),kernIndex:new d(S,n=>n.leftClassCount*n.rightClassCount)}}),za=new R("version",{0:{subVersion:o,length:o,format:S,coverage:new Se(S,["horizontal","minimum","crossStream","override"]),subtable:Ga,padding:new $(S,n=>n.length-n._currentOffset)},1:{length:g,coverage:new Se(S,[null,null,null,null,null,"variation","crossStream","vertical"]),format:S,tupleIndex:o,subtable:Ga,padding:new $(S,n=>n.length-n._currentOffset)}}),nf=new R(o,{0:{nTables:o,tables:new d(za,"nTables")},1:{reserved:new $(o),nTables:g,tables:new d(za,"nTables")}}),af=new m({version:o,numGlyphs:o,yPels:new d(S,"numGlyphs")}),of=new m({version:o,fontNumber:g,pitch:o,xHeight:o,style:o,typeFamily:o,capHeight:o,symbolSet:o,typeface:new Y(16),characterComplement:new Y(8),fileName:new Y(6),strokeWeight:new Y(1),widthType:new Y(1),serifStyle:S,reserved:new $(S)}),lf=new m({bCharSet:S,xRatio:S,yStartRatio:S,yEndRatio:S}),uf=new m({yPelHeight:o,yMax:w,yMin:w}),cf=new m({recs:o,startsz:S,endsz:S,entries:new d(uf,"recs")}),ff=new m({version:o,numRecs:o,numRatios:o,ratioRanges:new d(lf,"numRatios"),offsets:new d(o,"numRatios"),groups:new d(cf,"numRecs")}),hf=new m({version:o,ascent:w,descent:w,lineGap:w,advanceHeightMax:w,minTopSideBearing:w,minBottomSideBearing:w,yMaxExtent:w,caretSlopeRise:w,caretSlopeRun:w,caretOffset:w,reserved:new $(w,4),metricDataFormat:w,numberOfMetrics:o}),df=new m({advance:o,bearing:w}),pf=new m({metrics:new Z(df,n=>n.parent.vhea.numberOfMetrics),bearings:new Z(w,n=>n.parent.maxp.numGlyphs-n.parent.vhea.numberOfMetrics)}),Wa=new Xe(16,"BE",14),bf=new m({fromCoord:Wa,toCoord:Wa}),gf=new m({pairCount:o,correspondence:new d(bf,"pairCount")}),mf=new m({version:se,axisCount:g,segment:new d(gf,"axisCount")}),As=class{getItem(e){if(this._items[e]==null){let t=this.stream.pos;this.stream.pos=this.base+this.type.size(null,this.parent)*e,this._items[e]=this.type.decode(this.stream,this.parent),this.stream.pos=t;}return this._items[e]}inspect(){return `[UnboundedArray ${this.type.constructor.name}]`}constructor(e,t,r){this.type=e,this.stream=t,this.parent=r,this.base=this.stream.pos,this._items=[];}},Be=class extends d{decode(e,t){return new As(this.type,e,t)}constructor(e){super(e,0);}},Et=function(n=o){class e{decode(l,u){return u=u.parent.parent,this.type.decode(l,u)}size(l,u){return u=u.parent.parent,this.type.size(l,u)}encode(l,u,c){return c=c.parent.parent,this.type.encode(l,u,c)}constructor(l){this.type=l;}}n=new e(n);let t=new m({unitSize:o,nUnits:o,searchRange:o,entrySelector:o,rangeShift:o}),r=new m({lastGlyph:o,firstGlyph:o,value:n}),s=new m({lastGlyph:o,firstGlyph:o,values:new b(o,new d(n,i=>i.lastGlyph-i.firstGlyph+1),{type:"parent"})}),a=new m({glyph:o,value:n});return new R(o,{0:{values:new Be(n)},2:{binarySearchHeader:t,segments:new d(r,i=>i.binarySearchHeader.nUnits)},4:{binarySearchHeader:t,segments:new d(s,i=>i.binarySearchHeader.nUnits)},6:{binarySearchHeader:t,segments:new d(a,i=>i.binarySearchHeader.nUnits)},8:{firstGlyph:o,count:o,values:new d(n,"count")}})};function W0(n={},e=o){let t=Object.assign({newState:o,flags:o},n),r=new m(t),s=new Be(new d(o,i=>i.nClasses));return new m({nClasses:g,classTable:new b(g,new Et(e)),stateArray:new b(g,s),entryTable:new b(g,new Be(r))})}function vf(n={},e=o){let t=new m({version(){return 8},firstGlyph:o,values:new d(S,o)}),r=Object.assign({newStateOffset:o,newState:l=>(l.newStateOffset-(l.parent.stateArray.base-l.parent._startOffset))/l.parent.nClasses,flags:o},n),s=new m(r),a=new Be(new d(S,l=>l.nClasses));return new m({nClasses:o,classTable:new b(o,t),stateArray:new b(o,a),entryTable:new b(o,new Be(s))})}var xf=new R("format",{0:{deltas:new d(w,32)},1:{deltas:new d(w,32),mappingData:new Et(o)},2:{standardGlyph:o,controlPoints:new d(o,32)},3:{standardGlyph:o,controlPoints:new d(o,32),mappingData:new Et(o)}}),wf=new m({version:se,format:o,defaultBaseline:o,subtable:xf}),yf=new m({setting:o,nameIndex:w,name:n=>n.parent.parent.parent.name.records.fontFeatures[n.nameIndex]}),Cf=new m({feature:o,nSettings:o,settingTable:new b(g,new d(yf,"nSettings"),{type:"parent"}),featureFlags:new Se(S,[null,null,null,null,null,null,"hasDefault","exclusive"]),defaultSetting:S,nameIndex:w,name:n=>n.parent.parent.name.records.fontFeatures[n.nameIndex]}),Sf=new m({version:se,featureNameCount:o,reserved1:new $(o),reserved2:new $(g),featureNames:new d(Cf,"featureNameCount")}),Af=new m({axisTag:new Y(4),minValue:se,defaultValue:se,maxValue:se,flags:o,nameID:o,name:n=>n.parent.parent.name.records.fontFeatures[n.nameID]}),kf=new m({nameID:o,name:n=>n.parent.parent.name.records.fontFeatures[n.nameID],flags:o,coord:new d(se,n=>n.parent.axisCount),postscriptNameID:new mt(o,n=>n.parent.instanceSize-n._currentOffset>0)}),If=new m({version:se,offsetToData:o,countSizePairs:o,axisCount:o,axisSize:o,instanceCount:o,instanceSize:o,axis:new d(Af,"axisCount"),instance:new d(kf,"instanceCount")}),Ef=new Xe(16,"BE",14),ks=class{static decode(e,t){return t.flags?e.readUInt32BE():e.readUInt16BE()*2}},Of=new m({version:o,reserved:new $(o),axisCount:o,globalCoordCount:o,globalCoords:new b(g,new d(new d(Ef,"axisCount"),"globalCoordCount")),glyphCount:o,flags:o,offsetToData:g,offsets:new d(new b(ks,"void",{relativeTo:n=>n.offsetToData,allowNull:false}),n=>n.glyphCount+1)}),Pf=Of,Tf=new m({length:o,coverage:o,subFeatureFlags:g,stateTable:new vf}),Ff=new m({justClass:g,beforeGrowLimit:se,beforeShrinkLimit:se,afterGrowLimit:se,afterShrinkLimit:se,growFlags:o,shrinkFlags:o}),Df=new d(Ff,g),Lf=new R("actionType",{0:{lowerLimit:se,upperLimit:se,order:o,glyphs:new d(o,o)},1:{addGlyph:o},2:{substThreshold:se,addGlyph:o,substGlyph:o},3:{},4:{variationAxis:g,minimumLimit:se,noStretchValue:se,maximumLimit:se},5:{flags:o,glyph:o}}),Bf=new m({actionClass:o,actionType:o,actionLength:g,actionData:Lf,padding:new $(S,n=>n.actionLength-n._currentOffset)}),Mf=new d(Bf,g),Nf=new m({lookupTable:new Et(new b(o,Mf))}),Ha=new m({classTable:new b(o,Tf,{type:"parent"}),wdcOffset:o,postCompensationTable:new b(o,Nf,{type:"parent"}),widthDeltaClusters:new Et(new b(o,Df,{type:"parent",relativeTo:n=>n.wdcOffset}))}),Rf=new m({version:g,format:o,horizontal:new b(o,Ha),vertical:new b(o,Ha)}),Uf={action:o},Vf={markIndex:o,currentIndex:o},Gf={currentInsertIndex:o,markedInsertIndex:o},zf=new m({items:new Be(new b(g,new Et))}),Wf=new R("type",{0:{stateTable:new W0},1:{stateTable:new W0(Vf),substitutionTable:new b(g,zf)},2:{stateTable:new W0(Uf),ligatureActions:new b(g,new Be(g)),components:new b(g,new Be(o)),ligatureList:new b(g,new Be(o))},4:{lookupTable:new Et},5:{stateTable:new W0(Gf),insertionActions:new b(g,new Be(o))}}),Hf=new m({length:g,coverage:nt,type:S,subFeatureFlags:g,table:Wf,padding:new $(S,n=>n.length-n._currentOffset)}),qf=new m({featureType:o,featureSetting:o,enableFlags:g,disableFlags:g}),Xf=new m({defaultFlags:g,chainLength:g,nFeatureEntries:g,nSubtables:g,features:new d(qf,"nFeatureEntries"),subtables:new d(Hf,"nSubtables")}),jf=new m({version:o,unused:new $(o),nChains:g,chains:new d(Xf,"nChains")}),Kf=new m({left:w,top:w,right:w,bottom:w}),Yf=new m({version:se,format:o,lookupTable:new Et(Kf)}),M={},nr=M;M.cmap=$l;M.head=_l;M.hhea=Ql;M.hmtx=tu;M.maxp=ru;M.name=uu;M["OS/2"]=cu;M.post=fu;M.fpgm=du;M.loca=pu;M.prep=bu;M["cvt "]=hu;M.glyf=gu;M["CFF "]=Li;M.CFF2=Li;M.VORG=ec;M.EBLC=ac;M.CBLC=M.EBLC;M.sbix=oc;M.COLR=cc;M.CPAL=hc;M.BASE=wc;M.GDEF=Ic;M.GPOS=Rc;M.GSUB=zc;M.JSTF=jc;M.HVAR=Yc;M.DSIG=$c;M.gasp=Qc;M.hdmx=tf;M.kern=nf;M.LTSH=af;M.PCLT=of;M.VDMX=ff;M.vhea=hf;M.vmtx=pf;M.avar=mf;M.bsln=wf;M.feat=Sf;M.fvar=If;M.gvar=Pf;M.just=Rf;M.morx=jf;M.opbd=Yf;var Zf=new m({tag:new Y(4),checkSum:g,offset:new b(g,"void",{type:"global"}),length:g}),ln=new m({tag:new Y(4),numTables:o,searchRange:o,entrySelector:o,rangeShift:o,tables:new d(Zf,"numTables")});ln.process=function(){let n={};for(let e of this.tables)n[e.tag]=e;this.tables=n;};ln.preEncode=function(){if(!Array.isArray(this.tables)){let t=[];for(let r in this.tables){let s=this.tables[r];s&&t.push({tag:r,checkSum:0,offset:new Ht(nr[r],s),length:nr[r].size(s)});}this.tables=t;}this.tag="true",this.numTables=this.tables.length;let n=Math.floor(Math.log(this.numTables)/Math.LN2),e=Math.pow(2,n);this.searchRange=e*16,this.entrySelector=Math.log(e)/Math.LN2,this.rangeShift=this.numTables*16-this.searchRange;};var Ri=ln;function Z0(n,e){let t=0,r=n.length-1;for(;t<=r;){let s=t+r>>1,a=e(n[s]);if(a<0)r=s-1;else if(a>0)t=s+1;else return s}return  -1}function _t(n,e){let t=[];for(;n<e;)t.push(n++);return t}var xr=new TextDecoder("ascii"),qa="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",g0=new Uint8Array(256);for(let n=0;n<qa.length;n++)g0[qa.charCodeAt(n)]=n;function un(n){let e=n.length*.75;n[n.length-1]==="="&&(e--,n[n.length-2]==="="&&e--);let t=new Uint8Array(e),r=0;for(let s=0,a=n.length;s<a;s+=4){let i=g0[n.charCodeAt(s)],l=g0[n.charCodeAt(s+1)],u=g0[n.charCodeAt(s+2)],c=g0[n.charCodeAt(s+3)];t[r++]=i<<2|l>>4,t[r++]=(l&15)<<4|u>>2,t[r++]=(u&3)<<6|c&63;}return t}var k0=class{findSubtable(e,t){for(let[r,s]of t)for(let a of e.tables)if(a.platformID===r&&a.encodingID===s)return a.table;return null}lookup(e,t){if(this.encoding)e=this.encoding.get(e)||e;else if(t){let s=this.getVariationSelector(e,t);if(s)return s}let r=this.cmap;switch(r.version){case 0:return r.codeMap.get(e)||0;case 4:{let s=0,a=r.segCount-1;for(;s<=a;){let i=s+a>>1;if(e<r.startCode.get(i))a=i-1;else if(e>r.endCode.get(i))s=i+1;else {let l=r.idRangeOffset.get(i),u;if(l===0)u=e+r.idDelta.get(i);else {let c=l/2+(e-r.startCode.get(i))-(r.segCount-i);u=r.glyphIndexArray.get(c)||0,u!==0&&(u+=r.idDelta.get(i));}return u&65535}}return 0}case 8:throw new Error("TODO: cmap format 8");case 6:case 10:return r.glyphIndices.get(e-r.firstCode)||0;case 12:case 13:{let s=0,a=r.nGroups-1;for(;s<=a;){let i=s+a>>1,l=r.groups.get(i);if(e<l.startCharCode)a=i-1;else if(e>l.endCharCode)s=i+1;else return r.version===12?l.glyphID+(e-l.startCharCode):l.glyphID}return 0}case 14:throw new Error("TODO: cmap format 14");default:throw new Error(`Unknown cmap format ${r.version}`)}}getVariationSelector(e,t){if(!this.uvs)return 0;let r=this.uvs.varSelectors.toArray(),s=Z0(r,i=>t-i.varSelector),a=r[s];return s!==-1&&a.defaultUVS&&(s=Z0(a.defaultUVS,i=>e<i.startUnicodeValue?-1:e>i.startUnicodeValue+i.additionalCount?1:0)),s!==-1&&a.nonDefaultUVS&&(s=Z0(a.nonDefaultUVS,i=>e-i.unicodeValue),s!==-1)?a.nonDefaultUVS[s].glyphID:0}getCharacterSet(){let e=this.cmap;switch(e.version){case 0:return _t(0,e.codeMap.length);case 4:{let t=[],r=e.endCode.toArray();for(let s=0;s<r.length;s++){let a=r[s]+1,i=e.startCode.get(s);t.push(..._t(i,a));}return t}case 8:throw new Error("TODO: cmap format 8");case 6:case 10:return _t(e.firstCode,e.firstCode+e.glyphIndices.length);case 12:case 13:{let t=[];for(let r of e.groups.toArray())t.push(..._t(r.startCharCode,r.endCharCode+1));return t}case 14:throw new Error("TODO: cmap format 14");default:throw new Error(`Unknown cmap format ${e.version}`)}}codePointsForGlyph(e){let t=this.cmap;switch(t.version){case 0:{let s=[];for(let a=0;a<256;a++)t.codeMap.get(a)===e&&s.push(a);return s}case 4:{let s=[];for(let a=0;a<t.segCount;a++){let i=t.endCode.get(a),l=t.startCode.get(a),u=t.idRangeOffset.get(a),c=t.idDelta.get(a);for(var r=l;r<=i;r++){let f=0;if(u===0)f=r+c;else {let h=u/2+(r-l)-(t.segCount-a);f=t.glyphIndexArray.get(h)||0,f!==0&&(f+=c);}f===e&&s.push(r);}}return s}case 12:{let s=[];for(let a of t.groups.toArray())e>=a.glyphID&&e<=a.glyphID+(a.endCharCode-a.startCharCode)&&s.push(a.startCharCode+(e-a.glyphID));return s}case 13:{let s=[];for(let a of t.groups.toArray())e===a.glyphID&&s.push(..._t(a.startCharCode,a.endCharCode+1));return s}default:throw new Error(`Unknown cmap format ${t.version}`)}}constructor(e){if(this.encoding=null,this.cmap=this.findSubtable(e,[[3,10],[0,6],[0,4],[3,1],[0,3],[0,2],[0,1],[0,0]]),!this.cmap)for(let t of e.tables){let r=vi(t.platformID,t.encodingID,t.table.language-1),s=au(r);s&&(this.cmap=t.table,this.encoding=s);}if(!this.cmap)throw new Error("Could not find a supported cmap table");this.uvs=this.findSubtable(e,[[0,5]]),this.uvs&&this.uvs.version!==14&&(this.uvs=null);}};le([ge],k0.prototype,"getCharacterSet",null);le([ge],k0.prototype,"codePointsForGlyph",null);var Is=class{process(e,t){for(let r=0;r<e.length-1;r++){let s=e[r].id,a=e[r+1].id;t[r].xAdvance+=this.getKerning(s,a);}}getKerning(e,t){let r=0;for(let s of this.kern.tables){if(s.coverage.crossStream)continue;switch(s.version){case 0:if(!s.coverage.horizontal)continue;break;case 1:if(s.coverage.vertical||s.coverage.variation)continue;break;default:throw new Error(`Unsupported kerning table version ${s.version}`)}let a=0,i=s.subtable;switch(s.format){case 0:let l=Z0(i.pairs,function(h){return e-h.left||t-h.right});l>=0&&(a=i.pairs[l].value);break;case 2:let u=0,c=0;e>=i.leftTable.firstGlyph&&e<i.leftTable.firstGlyph+i.leftTable.nGlyphs?u=i.leftTable.offsets[e-i.leftTable.firstGlyph]:u=i.array.off,t>=i.rightTable.firstGlyph&&t<i.rightTable.firstGlyph+i.rightTable.nGlyphs&&(c=i.rightTable.offsets[t-i.rightTable.firstGlyph]);let f=(u+c-i.array.off)/2;a=i.array.values.get(f);break;case 3:if(e>=i.glyphCount||t>=i.glyphCount)return 0;a=i.kernValue[i.kernIndex[i.leftClass[e]*i.rightClassCount+i.rightClass[t]]];break;default:throw new Error(`Unsupported kerning sub-table format ${s.format}`)}s.coverage.override?r=a:r+=a;}return r}constructor(e){this.kern=e.kern;}},Es=class{positionGlyphs(e,t){let r=0,s=0;for(let a=0;a<e.length;a++)e[a].isMark?s=a:(r!==s&&this.positionCluster(e,t,r,s),r=s=a);return r!==s&&this.positionCluster(e,t,r,s),t}positionCluster(e,t,r,s){let a=e[r],i=a.cbox.copy();a.codePoints.length>1&&(i.minX+=(a.codePoints.length-1)*i.width/a.codePoints.length);let l=-t[r].xAdvance,u=0,c=this.font.unitsPerEm/16;for(let f=r+1;f<=s;f++){let h=e[f],v=h.cbox,y=t[f],C=this.getCombiningClass(h.codePoints[0]);if(C!=="Not_Reordered"){switch(y.xOffset=y.yOffset=0,C){case "Double_Above":case "Double_Below":y.xOffset+=i.minX-v.width/2-v.minX;break;case "Attached_Below_Left":case "Below_Left":case "Above_Left":y.xOffset+=i.minX-v.minX;break;case "Attached_Above_Right":case "Below_Right":case "Above_Right":y.xOffset+=i.maxX-v.width-v.minX;break;default:y.xOffset+=i.minX+(i.width-v.width)/2-v.minX;}switch(C){case "Double_Below":case "Below_Left":case "Below":case "Below_Right":case "Attached_Below_Left":case "Attached_Below":(C==="Attached_Below_Left"||C==="Attached_Below")&&(i.minY+=c),y.yOffset=-i.minY-v.maxY,i.minY+=v.height;break;case "Double_Above":case "Above_Left":case "Above":case "Above_Right":case "Attached_Above":case "Attached_Above_Right":(C==="Attached_Above"||C==="Attached_Above_Right")&&(i.maxY+=c),y.yOffset=i.maxY-v.minY,i.maxY+=v.height;break}y.xAdvance=y.yAdvance=0,y.xOffset+=l,y.yOffset+=u;}else l-=y.xAdvance,u-=y.yAdvance;}}getCombiningClass(e){let t=Yn(e);if((e&-256)===3584){if(t==="Not_Reordered")switch(e){case 3633:case 3636:case 3637:case 3638:case 3639:case 3655:case 3660:case 3645:case 3662:return "Above_Right";case 3761:case 3764:case 3765:case 3766:case 3767:case 3771:case 3788:case 3789:return "Above";case 3772:return "Below"}else if(e===3642)return "Below_Right"}switch(t){case "CCC10":case "CCC11":case "CCC12":case "CCC13":case "CCC14":case "CCC15":case "CCC16":case "CCC17":case "CCC18":case "CCC20":case "CCC22":return "Below";case "CCC23":return "Attached_Above";case "CCC24":return "Above_Right";case "CCC25":case "CCC19":return "Above_Left";case "CCC26":return "Above";case "CCC21":break;case "CCC27":case "CCC28":case "CCC30":case "CCC31":case "CCC33":case "CCC34":case "CCC35":case "CCC36":return "Above";case "CCC29":case "CCC32":return "Below";case "CCC103":return "Below_Right";case "CCC107":return "Above_Right";case "CCC118":return "Below";case "CCC122":return "Above";case "CCC129":case "CCC132":return "Below";case "CCC130":return "Above"}return t}constructor(e){this.font=e;}},Ot=class n{get width(){return this.maxX-this.minX}get height(){return this.maxY-this.minY}addPoint(e,t){Math.abs(e)!==1/0&&(e<this.minX&&(this.minX=e),e>this.maxX&&(this.maxX=e)),Math.abs(t)!==1/0&&(t<this.minY&&(this.minY=t),t>this.maxY&&(this.maxY=t));}copy(){return new n(this.minX,this.minY,this.maxX,this.maxY)}constructor(e=1/0,t=1/0,r=-1/0,s=-1/0){this.minX=e,this.minY=t,this.maxX=r,this.maxY=s;}},r0={Caucasian_Albanian:"aghb",Arabic:"arab",Imperial_Aramaic:"armi",Armenian:"armn",Avestan:"avst",Balinese:"bali",Bamum:"bamu",Bassa_Vah:"bass",Batak:"batk",Bengali:["bng2","beng"],Bopomofo:"bopo",Brahmi:"brah",Braille:"brai",Buginese:"bugi",Buhid:"buhd",Chakma:"cakm",Canadian_Aboriginal:"cans",Carian:"cari",Cham:"cham",Cherokee:"cher",Coptic:"copt",Cypriot:"cprt",Cyrillic:"cyrl",Devanagari:["dev2","deva"],Deseret:"dsrt",Duployan:"dupl",Egyptian_Hieroglyphs:"egyp",Elbasan:"elba",Ethiopic:"ethi",Georgian:"geor",Glagolitic:"glag",Gothic:"goth",Grantha:"gran",Greek:"grek",Gujarati:["gjr2","gujr"],Gurmukhi:["gur2","guru"],Hangul:"hang",Han:"hani",Hanunoo:"hano",Hebrew:"hebr",Hiragana:"hira",Pahawh_Hmong:"hmng",Katakana_Or_Hiragana:"hrkt",Old_Italic:"ital",Javanese:"java",Kayah_Li:"kali",Katakana:"kana",Kharoshthi:"khar",Khmer:"khmr",Khojki:"khoj",Kannada:["knd2","knda"],Kaithi:"kthi",Tai_Tham:"lana",Lao:"lao ",Latin:"latn",Lepcha:"lepc",Limbu:"limb",Linear_A:"lina",Linear_B:"linb",Lisu:"lisu",Lycian:"lyci",Lydian:"lydi",Mahajani:"mahj",Mandaic:"mand",Manichaean:"mani",Mende_Kikakui:"mend",Meroitic_Cursive:"merc",Meroitic_Hieroglyphs:"mero",Malayalam:["mlm2","mlym"],Modi:"modi",Mongolian:"mong",Mro:"mroo",Meetei_Mayek:"mtei",Myanmar:["mym2","mymr"],Old_North_Arabian:"narb",Nabataean:"nbat",Nko:"nko ",Ogham:"ogam",Ol_Chiki:"olck",Old_Turkic:"orkh",Oriya:["ory2","orya"],Osmanya:"osma",Palmyrene:"palm",Pau_Cin_Hau:"pauc",Old_Permic:"perm",Phags_Pa:"phag",Inscriptional_Pahlavi:"phli",Psalter_Pahlavi:"phlp",Phoenician:"phnx",Miao:"plrd",Inscriptional_Parthian:"prti",Rejang:"rjng",Runic:"runr",Samaritan:"samr",Old_South_Arabian:"sarb",Saurashtra:"saur",Shavian:"shaw",Sharada:"shrd",Siddham:"sidd",Khudawadi:"sind",Sinhala:"sinh",Sora_Sompeng:"sora",Sundanese:"sund",Syloti_Nagri:"sylo",Syriac:"syrc",Tagbanwa:"tagb",Takri:"takr",Tai_Le:"tale",New_Tai_Lue:"talu",Tamil:["tml2","taml"],Tai_Viet:"tavt",Telugu:["tel2","telu"],Tifinagh:"tfng",Tagalog:"tglg",Thaana:"thaa",Thai:"thai",Tibetan:"tibt",Tirhuta:"tirh",Ugaritic:"ugar",Vai:"vai ",Warang_Citi:"wara",Old_Persian:"xpeo",Cuneiform:"xsux",Yi:"yi  ",Inherited:"zinh",Common:"zyyy",Unknown:"zzzz"},Os={};for(let n in r0){let e=r0[n];if(Array.isArray(e))for(let t of e)Os[t]=n;else Os[e]=n;}function Jf(n){return Os[n]}function $f(n){let e=n.length,t=0;for(;t<e;){let r=n.charCodeAt(t++);if(55296<=r&&r<=56319&&t<e){let a=n.charCodeAt(t);56320<=a&&a<=57343&&(t++,r=((r&1023)<<10)+(a&1023)+65536);}let s=Hr(r);if(s!=="Common"&&s!=="Inherited"&&s!=="Unknown")return r0[s]}return r0.Unknown}function _f(n){for(let e=0;e<n.length;e++){let t=n[e],r=Hr(t);if(r!=="Common"&&r!=="Inherited"&&r!=="Unknown")return r0[r]}return r0.Unknown}var Qf={arab:true,hebr:true,syrc:true,thaa:true,cprt:true,khar:true,phnx:true,"nko ":true,lydi:true,avst:true,armi:true,phli:true,prti:true,sarb:true,orkh:true,samr:true,mand:true,merc:true,mero:true,mani:true,mend:true,nbat:true,narb:true,palm:true,phlp:true};function Ui(n){return Qf[n]?"rtl":"ltr"}var Ps=class{get advanceWidth(){let e=0;for(let t of this.positions)e+=t.xAdvance;return e}get advanceHeight(){let e=0;for(let t of this.positions)e+=t.yAdvance;return e}get bbox(){let e=new Ot,t=0,r=0;for(let s=0;s<this.glyphs.length;s++){let a=this.glyphs[s],i=this.positions[s],l=a.bbox;e.addPoint(l.minX+t+i.xOffset,l.minY+r+i.yOffset),e.addPoint(l.maxX+t+i.xOffset,l.maxY+r+i.yOffset),t+=i.xAdvance,r+=i.yAdvance;}return e}constructor(e,t,r,s,a){if(this.glyphs=e,this.positions=null,this.script=r,this.language=s||null,this.direction=a||Ui(r),this.features={},Array.isArray(t))for(let i of t)this.features[i]=true;else typeof t=="object"&&(this.features=t);}},Ts=class{constructor(e=0,t=0,r=0,s=0){this.xAdvance=e,this.yAdvance=t,this.xOffset=r,this.yOffset=s;}},Gt={allTypographicFeatures:{code:0,exclusive:false,allTypeFeatures:0},ligatures:{code:1,exclusive:false,requiredLigatures:0,commonLigatures:2,rareLigatures:4,rebusPictures:8,diphthongLigatures:10,squaredLigatures:12,abbrevSquaredLigatures:14,symbolLigatures:16,contextualLigatures:18,historicalLigatures:20},cursiveConnection:{code:2,exclusive:true,unconnected:0,partiallyConnected:1,cursive:2},letterCase:{code:3,exclusive:true},verticalSubstitution:{code:4,exclusive:false,substituteVerticalForms:0},linguisticRearrangement:{code:5,exclusive:false,linguisticRearrangement:0},numberSpacing:{code:6,exclusive:true,monospacedNumbers:0,proportionalNumbers:1,thirdWidthNumbers:2,quarterWidthNumbers:3},smartSwash:{code:8,exclusive:false,wordInitialSwashes:0,wordFinalSwashes:2,nonFinalSwashes:8},diacritics:{code:9,exclusive:true,showDiacritics:0,hideDiacritics:1,decomposeDiacritics:2},verticalPosition:{code:10,exclusive:true,normalPosition:0,superiors:1,inferiors:2,ordinals:3,scientificInferiors:4},fractions:{code:11,exclusive:true,noFractions:0,verticalFractions:1,diagonalFractions:2},overlappingCharacters:{code:13,exclusive:false,preventOverlap:0},typographicExtras:{code:14,exclusive:false,slashedZero:4},mathematicalExtras:{code:15,exclusive:false,mathematicalGreek:10},ornamentSets:{code:16,exclusive:true,noOrnaments:0,dingbats:1,piCharacters:2,fleurons:3,decorativeBorders:4,internationalSymbols:5,mathSymbols:6},characterAlternatives:{code:17,exclusive:true,noAlternates:0},designComplexity:{code:18,exclusive:true,designLevel1:0,designLevel2:1,designLevel3:2,designLevel4:3,designLevel5:4},styleOptions:{code:19,exclusive:true,noStyleOptions:0,displayText:1,engravedText:2,illuminatedCaps:3,titlingCaps:4,tallCaps:5},characterShape:{code:20,exclusive:true,traditionalCharacters:0,simplifiedCharacters:1,JIS1978Characters:2,JIS1983Characters:3,JIS1990Characters:4,traditionalAltOne:5,traditionalAltTwo:6,traditionalAltThree:7,traditionalAltFour:8,traditionalAltFive:9,expertCharacters:10,JIS2004Characters:11,hojoCharacters:12,NLCCharacters:13,traditionalNamesCharacters:14},numberCase:{code:21,exclusive:true,lowerCaseNumbers:0,upperCaseNumbers:1},textSpacing:{code:22,exclusive:true,proportionalText:0,monospacedText:1,halfWidthText:2,thirdWidthText:3,quarterWidthText:4,altProportionalText:5,altHalfWidthText:6},transliteration:{code:23,exclusive:true,noTransliteration:0},annotation:{code:24,exclusive:true,noAnnotation:0,boxAnnotation:1,roundedBoxAnnotation:2,circleAnnotation:3,invertedCircleAnnotation:4,parenthesisAnnotation:5,periodAnnotation:6,romanNumeralAnnotation:7,diamondAnnotation:8,invertedBoxAnnotation:9,invertedRoundedBoxAnnotation:10},kanaSpacing:{code:25,exclusive:true,fullWidthKana:0,proportionalKana:1},ideographicSpacing:{code:26,exclusive:true,fullWidthIdeographs:0,proportionalIdeographs:1,halfWidthIdeographs:2},unicodeDecomposition:{code:27,exclusive:false,canonicalComposition:0,compatibilityComposition:2,transcodingComposition:4},rubyKana:{code:28,exclusive:false,rubyKana:2},CJKSymbolAlternatives:{code:29,exclusive:true,noCJKSymbolAlternatives:0,CJKSymbolAltOne:1,CJKSymbolAltTwo:2,CJKSymbolAltThree:3,CJKSymbolAltFour:4,CJKSymbolAltFive:5},ideographicAlternatives:{code:30,exclusive:true,noIdeographicAlternatives:0,ideographicAltOne:1,ideographicAltTwo:2,ideographicAltThree:3,ideographicAltFour:4,ideographicAltFive:5},CJKVerticalRomanPlacement:{code:31,exclusive:true,CJKVerticalRomanCentered:0,CJKVerticalRomanHBaseline:1},italicCJKRoman:{code:32,exclusive:false,CJKItalicRoman:2},caseSensitiveLayout:{code:33,exclusive:false,caseSensitiveLayout:0,caseSensitiveSpacing:2},alternateKana:{code:34,exclusive:false,alternateHorizKana:0,alternateVertKana:2},stylisticAlternatives:{code:35,exclusive:false,noStylisticAlternates:0,stylisticAltOne:2,stylisticAltTwo:4,stylisticAltThree:6,stylisticAltFour:8,stylisticAltFive:10,stylisticAltSix:12,stylisticAltSeven:14,stylisticAltEight:16,stylisticAltNine:18,stylisticAltTen:20,stylisticAltEleven:22,stylisticAltTwelve:24,stylisticAltThirteen:26,stylisticAltFourteen:28,stylisticAltFifteen:30,stylisticAltSixteen:32,stylisticAltSeventeen:34,stylisticAltEighteen:36,stylisticAltNineteen:38,stylisticAltTwenty:40},contextualAlternates:{code:36,exclusive:false,contextualAlternates:0,swashAlternates:2,contextualSwashAlternates:4},lowerCase:{code:37,exclusive:true,defaultLowerCase:0,lowerCaseSmallCaps:1,lowerCasePetiteCaps:2},upperCase:{code:38,exclusive:true,defaultUpperCase:0,upperCaseSmallCaps:1,upperCasePetiteCaps:2},languageTag:{code:39,exclusive:true},CJKRomanSpacing:{code:103,exclusive:true,halfWidthCJKRoman:0,proportionalCJKRoman:1,defaultCJKRoman:2,fullWidthCJKRoman:3}},A=(n,e)=>[Gt[n].code,Gt[n][e]],ar={rlig:A("ligatures","requiredLigatures"),clig:A("ligatures","contextualLigatures"),dlig:A("ligatures","rareLigatures"),hlig:A("ligatures","historicalLigatures"),liga:A("ligatures","commonLigatures"),hist:A("ligatures","historicalLigatures"),smcp:A("lowerCase","lowerCaseSmallCaps"),pcap:A("lowerCase","lowerCasePetiteCaps"),frac:A("fractions","diagonalFractions"),dnom:A("fractions","diagonalFractions"),numr:A("fractions","diagonalFractions"),afrc:A("fractions","verticalFractions"),case:A("caseSensitiveLayout","caseSensitiveLayout"),ccmp:A("unicodeDecomposition","canonicalComposition"),cpct:A("CJKVerticalRomanPlacement","CJKVerticalRomanCentered"),valt:A("CJKVerticalRomanPlacement","CJKVerticalRomanCentered"),swsh:A("contextualAlternates","swashAlternates"),cswh:A("contextualAlternates","contextualSwashAlternates"),curs:A("cursiveConnection","cursive"),c2pc:A("upperCase","upperCasePetiteCaps"),c2sc:A("upperCase","upperCaseSmallCaps"),init:A("smartSwash","wordInitialSwashes"),fin2:A("smartSwash","wordFinalSwashes"),medi:A("smartSwash","nonFinalSwashes"),med2:A("smartSwash","nonFinalSwashes"),fin3:A("smartSwash","wordFinalSwashes"),fina:A("smartSwash","wordFinalSwashes"),pkna:A("kanaSpacing","proportionalKana"),half:A("textSpacing","halfWidthText"),halt:A("textSpacing","altHalfWidthText"),hkna:A("alternateKana","alternateHorizKana"),vkna:A("alternateKana","alternateVertKana"),ital:A("italicCJKRoman","CJKItalicRoman"),lnum:A("numberCase","upperCaseNumbers"),onum:A("numberCase","lowerCaseNumbers"),mgrk:A("mathematicalExtras","mathematicalGreek"),calt:A("contextualAlternates","contextualAlternates"),vrt2:A("verticalSubstitution","substituteVerticalForms"),vert:A("verticalSubstitution","substituteVerticalForms"),tnum:A("numberSpacing","monospacedNumbers"),pnum:A("numberSpacing","proportionalNumbers"),sups:A("verticalPosition","superiors"),subs:A("verticalPosition","inferiors"),ordn:A("verticalPosition","ordinals"),pwid:A("textSpacing","proportionalText"),hwid:A("textSpacing","halfWidthText"),qwid:A("textSpacing","quarterWidthText"),twid:A("textSpacing","thirdWidthText"),fwid:A("textSpacing","proportionalText"),palt:A("textSpacing","altProportionalText"),trad:A("characterShape","traditionalCharacters"),smpl:A("characterShape","simplifiedCharacters"),jp78:A("characterShape","JIS1978Characters"),jp83:A("characterShape","JIS1983Characters"),jp90:A("characterShape","JIS1990Characters"),jp04:A("characterShape","JIS2004Characters"),expt:A("characterShape","expertCharacters"),hojo:A("characterShape","hojoCharacters"),nlck:A("characterShape","NLCCharacters"),tnam:A("characterShape","traditionalNamesCharacters"),ruby:A("rubyKana","rubyKana"),titl:A("styleOptions","titlingCaps"),zero:A("typographicExtras","slashedZero"),ss01:A("stylisticAlternatives","stylisticAltOne"),ss02:A("stylisticAlternatives","stylisticAltTwo"),ss03:A("stylisticAlternatives","stylisticAltThree"),ss04:A("stylisticAlternatives","stylisticAltFour"),ss05:A("stylisticAlternatives","stylisticAltFive"),ss06:A("stylisticAlternatives","stylisticAltSix"),ss07:A("stylisticAlternatives","stylisticAltSeven"),ss08:A("stylisticAlternatives","stylisticAltEight"),ss09:A("stylisticAlternatives","stylisticAltNine"),ss10:A("stylisticAlternatives","stylisticAltTen"),ss11:A("stylisticAlternatives","stylisticAltEleven"),ss12:A("stylisticAlternatives","stylisticAltTwelve"),ss13:A("stylisticAlternatives","stylisticAltThirteen"),ss14:A("stylisticAlternatives","stylisticAltFourteen"),ss15:A("stylisticAlternatives","stylisticAltFifteen"),ss16:A("stylisticAlternatives","stylisticAltSixteen"),ss17:A("stylisticAlternatives","stylisticAltSeventeen"),ss18:A("stylisticAlternatives","stylisticAltEighteen"),ss19:A("stylisticAlternatives","stylisticAltNineteen"),ss20:A("stylisticAlternatives","stylisticAltTwenty")};for(let n=1;n<=99;n++)ar[`cv${`00${n}`.slice(-2)}`]=[Gt.characterAlternatives.code,n];var zt={};for(let n in ar){let e=ar[n];zt[e[0]]==null&&(zt[e[0]]={}),zt[e[0]][e[1]]=n;}function e1(n){let e={};for(let t in n){let r;(r=ar[t])&&(e[r[0]]==null&&(e[r[0]]={}),e[r[0]][r[1]]=n[t]);}return e}function Xa(n){let[e,t]=n;if(isNaN(e))var r=Gt[e]&&Gt[e].code;else var r=e;if(isNaN(t))var s=Gt[e]&&Gt[e][t];else var s=t;return [r,s]}function t1(n){let e={};if(Array.isArray(n))for(let t=0;t<n.length;t++){let r,s=Xa(n[t]);(r=zt[s[0]]&&zt[s[0]][s[1]])&&(e[r]=true);}else if(typeof n=="object")for(let t in n){let r=n[t];for(let s in r){let a,i=Xa([t,s]);r[s]&&(a=zt[i[0]]&&zt[i[0]][i[1]])&&(e[a]=true);}}return Object.keys(e)}var Wt=class{lookup(e){switch(this.table.version){case 0:return this.table.values.getItem(e);case 2:case 4:{let s=0,a=this.table.binarySearchHeader.nUnits-1;for(;s<=a;){var t=s+a>>1,r=this.table.segments[t];if(r.firstGlyph===65535)return null;if(e<r.firstGlyph)a=t-1;else if(e>r.lastGlyph)s=t+1;else return this.table.version===2?r.value:r.values[e-r.firstGlyph]}return null}case 6:{let s=0,a=this.table.binarySearchHeader.nUnits-1;for(;s<=a;){var t=s+a>>1,r=this.table.segments[t];if(r.glyph===65535)return null;if(e<r.glyph)a=t-1;else if(e>r.glyph)s=t+1;else return r.value}return null}case 8:return this.table.values[e-this.table.firstGlyph];default:throw new Error(`Unknown lookup table format: ${this.table.version}`)}}glyphsForValue(e){let t=[];switch(this.table.version){case 2:case 4:for(let r of this.table.segments)if(this.table.version===2&&r.value===e)t.push(..._t(r.firstGlyph,r.lastGlyph+1));else for(let s=0;s<r.values.length;s++)r.values[s]===e&&t.push(r.firstGlyph+s);break;case 6:for(let r of this.table.segments)r.value===e&&t.push(r.glyph);break;case 8:for(let r=0;r<this.table.values.length;r++)this.table.values[r]===e&&t.push(this.table.firstGlyph+r);break;default:throw new Error(`Unknown lookup table format: ${this.table.version}`)}return t}constructor(e){this.table=e;}};le([ge],Wt.prototype,"glyphsForValue",null);var r1=0;var ja=0,Ka=1,Ya=2;var s1=16384,Fs=class{process(e,t,r){let s=r1,a=t?e.length-1:0,i=t?-1:1;for(;i===1&&a<=e.length||i===-1&&a>=-1;){let l=null,u=Ka,c=true;a===e.length||a===-1?u=ja:(l=e[a],l.id===65535?u=Ya:(u=this.lookupTable.lookup(l.id),u==null&&(u=Ka)));let h=this.stateTable.stateArray.getItem(s)[u],v=this.stateTable.entryTable.getItem(h);u!==ja&&u!==Ya&&(r(l,v,a),c=!(v.flags&s1)),s=v.newState,c&&(a+=i);}return e}traverse(e,t=0,r=new Set){if(r.has(t))return;r.add(t);let{nClasses:s,stateArray:a,entryTable:i}=this.stateTable,l=a.getItem(t);for(let u=4;u<s;u++){let c=l[u],f=i.getItem(c);for(let h of this.lookupTable.glyphsForValue(u))e.enter&&e.enter(h,f),f.newState!==0&&this.traverse(e,f.newState,r),e.exit&&e.exit(h,f);}}constructor(e){this.stateTable=e,this.lookupTable=new Wt(e.classTable);}},n1=32768,a1=8192,i1=15,Za=32768,o1=32768,l1=8192,u1=2147483648,c1=1073741824,f1=1073741823;var Ja=4194304;var h1=2048,d1=1024,p1=992,b1=31,ir=class{process(e,t={}){for(let s of this.morx.chains){let a=s.defaultFlags;for(let i of s.features){let l;(l=t[i.featureType])&&(l[i.featureSetting]?(a&=i.disableFlags,a|=i.enableFlags):l[i.featureSetting]===false&&(a|=~i.disableFlags,a&=~i.enableFlags));}for(let i of s.subtables)i.subFeatureFlags&a&&this.processSubtable(i,e);}let r=e.length-1;for(;r>=0;)e[r].id===65535&&e.splice(r,1),r--;return e}processSubtable(e,t){if(this.subtable=e,this.glyphs=t,this.subtable.type===4){this.processNoncontextualSubstitutions(this.subtable,this.glyphs);return}this.ligatureStack=[],this.markedGlyph=null,this.firstGlyph=null,this.lastGlyph=null,this.markedIndex=null;let r=this.getStateMachine(e),s=this.getProcessor(),a=!!(this.subtable.coverage&Ja);return r.process(this.glyphs,a,s)}getStateMachine(e){return new Fs(e.table.stateTable)}getProcessor(){switch(this.subtable.type){case 0:return this.processIndicRearragement;case 1:return this.processContextualSubstitution;case 2:return this.processLigature;case 4:return this.processNoncontextualSubstitutions;case 5:return this.processGlyphInsertion;default:throw new Error(`Invalid morx subtable type: ${this.subtable.type}`)}}processIndicRearragement(e,t,r){t.flags&n1&&(this.firstGlyph=r),t.flags&a1&&(this.lastGlyph=r),g1(this.glyphs,t.flags&i1,this.firstGlyph,this.lastGlyph);}processContextualSubstitution(e,t,r){let s=this.subtable.table.substitutionTable.items;if(t.markIndex!==65535){let i=s.getItem(t.markIndex),l=new Wt(i);e=this.glyphs[this.markedGlyph];var a=l.lookup(e.id);a&&(this.glyphs[this.markedGlyph]=this.font.getGlyph(a,e.codePoints));}if(t.currentIndex!==65535){let i=s.getItem(t.currentIndex),l=new Wt(i);e=this.glyphs[r];var a=l.lookup(e.id);a&&(this.glyphs[r]=this.font.getGlyph(a,e.codePoints));}t.flags&Za&&(this.markedGlyph=r);}processLigature(e,t,r){if(t.flags&o1&&this.ligatureStack.push(r),t.flags&l1){let s=this.subtable.table.ligatureActions,a=this.subtable.table.components,i=this.subtable.table.ligatureList,l=t.action,u=false,c=0,f=[],h=[];for(;!u;){let v=this.ligatureStack.pop();f.unshift(...this.glyphs[v].codePoints);let y=s.getItem(l++);u=!!(y&u1);let C=!!(y&c1),O=(y&f1)<<2>>2;O+=this.glyphs[v].id;let D=a.getItem(O);if(c+=D,u||C){let E=i.getItem(c);this.glyphs[v]=this.font.getGlyph(E,f),h.push(v),c=0,f=[];}else this.glyphs[v]=this.font.getGlyph(65535);}this.ligatureStack.push(...h);}}processNoncontextualSubstitutions(e,t,r){let s=new Wt(e.table.lookupTable);for(r=0;r<t.length;r++){let a=t[r];if(a.id!==65535){let i=s.lookup(a.id);i&&(t[r]=this.font.getGlyph(i,a.codePoints));}}}_insertGlyphs(e,t,r,s){let a=[];for(;r--;){let i=this.subtable.table.insertionActions.getItem(t++);a.push(this.font.getGlyph(i));}s||e++,this.glyphs.splice(e,0,...a);}processGlyphInsertion(e,t,r){if(t.flags&Za&&(this.markedIndex=r),t.markedInsertIndex!==65535){let s=(t.flags&b1)>>>5,a=!!(t.flags&d1);this._insertGlyphs(this.markedIndex,t.markedInsertIndex,s,a);}if(t.currentInsertIndex!==65535){let s=(t.flags&p1)>>>5,a=!!(t.flags&h1);this._insertGlyphs(r,t.currentInsertIndex,s,a);}}getSupportedFeatures(){let e=[];for(let t of this.morx.chains)for(let r of t.features)e.push([r.featureType,r.featureSetting]);return e}generateInputs(e){return this.inputCache||this.generateInputCache(),this.inputCache[e]||[]}generateInputCache(){this.inputCache={};for(let e of this.morx.chains){let t=e.defaultFlags;for(let r of e.subtables)r.subFeatureFlags&t&&this.generateInputsForSubtable(r);}}generateInputsForSubtable(e){if(e.type!==2)return;if(!!(e.coverage&Ja))throw new Error("Reverse subtable, not supported.");this.subtable=e,this.ligatureStack=[];let r=this.getStateMachine(e),s=this.getProcessor(),a=[],i=[];this.glyphs=[],r.traverse({enter:(l,u)=>{let c=this.glyphs;i.push({glyphs:c.slice(),ligatureStack:this.ligatureStack.slice()});let f=this.font.getGlyph(l);a.push(f),c.push(a[a.length-1]),s(c[c.length-1],u,c.length-1);let h=0,v=0;for(let y=0;y<c.length&&h<=1;y++)c[y].id!==65535&&(h++,v=c[y].id);if(h===1){let y=a.map(O=>O.id),C=this.inputCache[v];C?C.push(y):this.inputCache[v]=[y];}},exit:()=>{(({glyphs:this.glyphs,ligatureStack:this.ligatureStack}=i.pop())),a.pop();}});}constructor(e){this.processIndicRearragement=this.processIndicRearragement.bind(this),this.processContextualSubstitution=this.processContextualSubstitution.bind(this),this.processLigature=this.processLigature.bind(this),this.processNoncontextualSubstitutions=this.processNoncontextualSubstitutions.bind(this),this.processGlyphInsertion=this.processGlyphInsertion.bind(this),this.font=e,this.morx=e.morx,this.inputCache=null;}};le([ge],ir.prototype,"getStateMachine",null);function Ae(n,e,t,r=false,s=false){let a=n.splice(t[0]-(t[1]-1),t[1]);s&&a.reverse();let i=n.splice(e[0],e[1],...a);return r&&i.reverse(),n.splice(t[0]-(e[1]-1),0,...i),n}function g1(n,e,t,r){switch(e){case 0:return n;case 1:return Ae(n,[t,1],[r,0]);case 2:return Ae(n,[t,0],[r,1]);case 3:return Ae(n,[t,1],[r,1]);case 4:return Ae(n,[t,2],[r,0]);case 5:return Ae(n,[t,2],[r,0],true,false);case 6:return Ae(n,[t,0],[r,2]);case 7:return Ae(n,[t,0],[r,2],false,true);case 8:return Ae(n,[t,1],[r,2]);case 9:return Ae(n,[t,1],[r,2],false,true);case 10:return Ae(n,[t,2],[r,1]);case 11:return Ae(n,[t,2],[r,1],true,false);case 12:return Ae(n,[t,2],[r,2]);case 13:return Ae(n,[t,2],[r,2],true,false);case 14:return Ae(n,[t,2],[r,2],false,true);case 15:return Ae(n,[t,2],[r,2],true,true);default:throw new Error(`Unknown verb: ${e}`)}}var Ds=class{substitute(e){e.direction==="rtl"&&e.glyphs.reverse(),this.morxProcessor.process(e.glyphs,e1(e.features));}getAvailableFeatures(e,t){return t1(this.morxProcessor.getSupportedFeatures())}stringsForGlyph(e){let t=this.morxProcessor.generateInputs(e),r=new Set;for(let s of t)this._addStrings(s,0,r,"");return r}_addStrings(e,t,r,s){let a=this.font._cmapProcessor.codePointsForGlyph(e[t]);for(let i of a){let l=s+String.fromCodePoint(i);t<e.length-1?this._addStrings(e,t+1,r,l):r.add(l);}}constructor(e){this.font=e,this.morxProcessor=new ir(e),this.fallbackPosition=false;}},Ls=class{_addFeatures(e,t){let r=this.stages.length-1,s=this.stages[r];for(let a of e)this.allFeatures[a]==null&&(s.push(a),this.allFeatures[a]=r,t&&(this.globalFeatures[a]=true));}add(e,t=true){if(this.stages.length===0&&this.stages.push([]),typeof e=="string"&&(e=[e]),Array.isArray(e))this._addFeatures(e,t);else if(typeof e=="object")this._addFeatures(e.global||[],true),this._addFeatures(e.local||[],false);else throw new Error("Unsupported argument to ShapingPlan#add")}addStage(e,t){typeof e=="function"?this.stages.push(e,[]):(this.stages.push([]),this.add(e,t));}setFeatureOverrides(e){if(Array.isArray(e))this.add(e);else if(typeof e=="object"){for(let t in e)if(e[t])this.add(t);else if(this.allFeatures[t]!=null){let r=this.stages[this.allFeatures[t]];r.splice(r.indexOf(t),1),delete this.allFeatures[t],delete this.globalFeatures[t];}}}assignGlobalFeatures(e){for(let t of e)for(let r in this.globalFeatures)t.features[r]=true;}process(e,t,r){for(let s of this.stages)typeof s=="function"?r||s(this.font,t,this):s.length>0&&e.applyFeatures(s,t,r);}constructor(e,t,r){this.font=e,this.script=t,this.direction=r,this.stages=[],this.globalFeatures={},this.allFeatures={};}},m1=["rvrn"],v1=["ccmp","locl","rlig","mark","mkmk"],x1=["frac","numr","dnom"],w1=["calt","clig","liga","rclt","curs","kern"];var y1={ltr:["ltra","ltrm"],rtl:["rtla","rtlm"]},_e=class{static plan(e,t,r){this.planPreprocessing(e),this.planFeatures(e),this.planPostprocessing(e,r),e.assignGlobalFeatures(t),this.assignFeatures(e,t);}static planPreprocessing(e){e.add({global:[...m1,...y1[e.direction]],local:x1});}static planFeatures(e){}static planPostprocessing(e,t){e.add([...v1,...w1]),e.setFeatureOverrides(t);}static assignFeatures(e,t){for(let r=0;r<t.length;r++){let s=t[r];if(s.codePoints[0]===8260){let a=r,i=r+1;for(;a>0&&qr(t[a-1].codePoints[0]);)t[a-1].features.numr=true,t[a-1].features.frac=true,a--;for(;i<t.length&&qr(t[i].codePoints[0]);)t[i].features.dnom=true,t[i].features.frac=true,i++;s.features.frac=true,r=i-1;}}}};ye(_e,"zeroMarkWidths","AFTER_GPOS");var C1=new gr.default(un("ABABAAAAAACgMQAAAZUBav7t2CtPA0EUBeDZB00pin9AJZIEgyUEj0QhweDAgQOJxCBRBElQSBwSicLgkOAwnNKZ5GaY2c7uzj4o5yZfZrrbefbuIx2nSq3CGmzAWH/+K+UO7MIe7MMhHMMpnMMFXMIVXIt2t3CnP088iPqjqNN8e4Ij7Rle4LUH82rLm6i/92A+RERERERERERNmfz/89GDeRARERERzbN8ceps2Iwt9H0C9/AJ6yOlDkbTczcot5VSm8Pm1vcFWfb7+BKOLTuOd2UlTX4wGP85Eg953lWPFbnuN7PkjtLmalOWbNenkHOSa7T3KmR9MVTZ2zZkVj1kHa68MueVKH0R4zqQ44WEXLM8VjcWHP0PtKLfPzQnMtGn3W4QYf6qxFxceVI394r2xnV+1rih0fV1Vzf3fO1n3evL5J78ruvZ5ptX2Rwy92Tfb1wlEqut3U+sZ3HXOeJ7/zDrbyuP6+Zz0fqa6Nv3vhY7Yu1xWnGevmsvsUpTT/RYIe8waUH/rvHMWKFzLfN8L+rTfp645mfX7ftlnfDtYxN59w0=")),$a=["isol","fina","fin2","fin3","medi","med2","init"],Bs={Non_Joining:0,Transparent:6},_="isol",Ct="fina",ds="fin2",S1="fin3",H0="medi",q0="med2",X0="init",q=null,A1=[[[q,q,0],[q,_,2],[q,_,1],[q,_,2],[q,_,1],[q,_,6]],[[q,q,0],[q,_,2],[q,_,1],[q,_,2],[q,ds,5],[q,_,6]],[[q,q,0],[q,_,2],[X0,Ct,1],[X0,Ct,3],[X0,Ct,4],[X0,Ct,6]],[[q,q,0],[q,_,2],[H0,Ct,1],[H0,Ct,3],[H0,Ct,4],[H0,Ct,6]],[[q,q,0],[q,_,2],[q0,_,1],[q0,_,2],[q0,ds,5],[q0,_,6]],[[q,q,0],[q,_,2],[_,_,1],[_,_,2],[_,ds,5],[_,_,6]],[[q,q,0],[q,_,2],[q,_,1],[q,_,2],[q,S1,5],[q,_,6]]],Je=class extends _e{static planFeatures(e){e.add(["ccmp","locl"]);for(let t=0;t<$a.length;t++){let r=$a[t];e.addStage(r,false);}e.addStage("mset");}static assignFeatures(e,t){super.assignFeatures(e,t);let r=-1,s=0,a=[];for(let l=0;l<t.length;l++){let u,c;var i=t[l];let f=k1(i.codePoints[0]);if(f===Bs.Transparent){a[l]=q;continue}[c,u,s]=A1[s][f],c!==q&&r!==-1&&(a[r]=c),a[l]=u,r=l;}for(let l=0;l<t.length;l++){let u;var i=t[l];(u=a[l])&&(i.features[u]=true);}}};function k1(n){let e=C1.get(n);if(e)return e-1;let t=h0(n);return t==="Mn"||t==="Me"||t==="Cf"?Bs.Transparent:Bs.Non_Joining}var Ms=class{reset(e={},t=0){this.options=e,this.flags=e.flags||{},this.markAttachmentType=e.markAttachmentType||0,this.index=t;}get cur(){return this.glyphs[this.index]||null}shouldIgnore(e){return this.flags.ignoreMarks&&e.isMark||this.flags.ignoreBaseGlyphs&&e.isBase||this.flags.ignoreLigatures&&e.isLigature||this.markAttachmentType&&e.isMark&&e.markAttachmentType!==this.markAttachmentType}move(e){for(this.index+=e;0<=this.index&&this.index<this.glyphs.length&&this.shouldIgnore(this.glyphs[this.index]);)this.index+=e;return 0>this.index||this.index>=this.glyphs.length?null:this.glyphs[this.index]}next(){return this.move(1)}prev(){return this.move(-1)}peek(e=1){let t=this.index,r=this.increment(e);return this.index=t,r}peekIndex(e=1){let t=this.index;this.increment(e);let r=this.index;return this.index=t,r}increment(e=1){let t=e<0?-1:1;for(e=Math.abs(e);e--;)this.move(t);return this.glyphs[this.index]}constructor(e,t){this.glyphs=e,this.reset(t);}},I1=["DFLT","dflt","latn"],s0=class{findScript(e){if(this.table.scriptList==null)return null;Array.isArray(e)||(e=[e]);for(let t of e)for(let r of this.table.scriptList)if(r.tag===t)return r;return null}selectScript(e,t,r){let s=false,a;if(!this.script||e!==this.scriptTag){if(a=this.findScript(e),a||(a=this.findScript(I1)),!a)return this.scriptTag;this.scriptTag=a.tag,this.script=a.script,this.language=null,this.languageTag=null,s=true;}if((!r||r!==this.direction)&&(this.direction=r||Ui(e)),t&&t.length<4&&(t+=" ".repeat(4-t.length)),!t||t!==this.languageTag){this.language=null;for(let i of this.script.langSysRecords)if(i.tag===t){this.language=i.langSys,this.languageTag=i.tag;break}this.language||(this.language=this.script.defaultLangSys,this.languageTag=null),s=true;}if(s&&(this.features={},this.language))for(let i of this.language.featureIndexes){let l=this.table.featureList[i],u=this.substituteFeatureForVariations(i);this.features[l.tag]=u||l.feature;}return this.scriptTag}lookupsForFeatures(e=[],t){let r=[];for(let s of e){let a=this.features[s];if(a)for(let i of a.lookupListIndexes)t&&t.indexOf(i)!==-1||r.push({feature:s,index:i,lookup:this.table.lookupList.get(i)});}return r.sort((s,a)=>s.index-a.index),r}substituteFeatureForVariations(e){if(this.variationsIndex===-1)return null;let r=this.table.featureVariations.featureVariationRecords[this.variationsIndex].featureTableSubstitution.substitutions;for(let s of r)if(s.featureIndex===e)return s.alternateFeatureTable;return null}findVariationsIndex(e){let t=this.table.featureVariations;if(!t)return  -1;let r=t.featureVariationRecords;for(let s=0;s<r.length;s++){let a=r[s].conditionSet.conditionTable;if(this.variationConditionsMatch(a,e))return s}return  -1}variationConditionsMatch(e,t){return e.every(r=>{let s=r.axisIndex<t.length?t[r.axisIndex]:0;return r.filterRangeMinValue<=s&&s<=r.filterRangeMaxValue})}applyFeatures(e,t,r){let s=this.lookupsForFeatures(e);this.applyLookups(s,t,r);}applyLookups(e,t,r){this.glyphs=t,this.positions=r,this.glyphIterator=new Ms(t);for(let{feature:s,lookup:a}of e)for(this.currentFeature=s,this.glyphIterator.reset(a.flags);this.glyphIterator.index<t.length;){if(!(s in this.glyphIterator.cur.features)){this.glyphIterator.next();continue}for(let i of a.subTables)if(this.applyLookup(a.lookupType,i))break;this.glyphIterator.next();}}applyLookup(e,t){throw new Error("applyLookup must be implemented by subclasses")}applyLookupList(e){let t=this.glyphIterator.options,r=this.glyphIterator.index;for(let s of e){this.glyphIterator.reset(t,r),this.glyphIterator.increment(s.sequenceIndex);let a=this.table.lookupList.get(s.lookupListIndex);this.glyphIterator.reset(a.flags,this.glyphIterator.index);for(let i of a.subTables)if(this.applyLookup(a.lookupType,i))break}return this.glyphIterator.reset(t,r),true}coverageIndex(e,t){switch(t==null&&(t=this.glyphIterator.cur.id),e.version){case 1:return e.glyphs.indexOf(t);case 2:for(let r of e.rangeRecords)if(r.start<=t&&t<=r.end)return r.startCoverageIndex+t-r.start;break}return  -1}match(e,t,r,s){let a=this.glyphIterator.index,i=this.glyphIterator.increment(e),l=0;for(;l<t.length&&i&&r(t[l],i);)s&&s.push(this.glyphIterator.index),l++,i=this.glyphIterator.next();return this.glyphIterator.index=a,l<t.length?false:s||true}sequenceMatches(e,t){return this.match(e,t,(r,s)=>r===s.id)}sequenceMatchIndices(e,t){return this.match(e,t,(r,s)=>this.currentFeature in s.features?r===s.id:false,[])}coverageSequenceMatches(e,t){return this.match(e,t,(r,s)=>this.coverageIndex(r,s.id)>=0)}getClassID(e,t){switch(t.version){case 1:let r=e-t.startGlyph;if(r>=0&&r<t.classValueArray.length)return t.classValueArray[r];break;case 2:for(let s of t.classRangeRecord)if(s.start<=e&&e<=s.end)return s.class;break}return 0}classSequenceMatches(e,t,r){return this.match(e,t,(s,a)=>s===this.getClassID(a.id,r))}applyContext(e){let t,r;switch(e.version){case 1:if(t=this.coverageIndex(e.coverage),t===-1)return  false;r=e.ruleSets[t];for(let s of r)if(this.sequenceMatches(1,s.input))return this.applyLookupList(s.lookupRecords);break;case 2:if(this.coverageIndex(e.coverage)===-1||(t=this.getClassID(this.glyphIterator.cur.id,e.classDef),t===-1))return  false;r=e.classSet[t];for(let s of r)if(this.classSequenceMatches(1,s.classes,e.classDef))return this.applyLookupList(s.lookupRecords);break;case 3:if(this.coverageSequenceMatches(0,e.coverages))return this.applyLookupList(e.lookupRecords);break}return  false}applyChainingContext(e){let t;switch(e.version){case 1:if(t=this.coverageIndex(e.coverage),t===-1)return  false;let r=e.chainRuleSets[t];for(let a of r)if(this.sequenceMatches(-a.backtrack.length,a.backtrack)&&this.sequenceMatches(1,a.input)&&this.sequenceMatches(1+a.input.length,a.lookahead))return this.applyLookupList(a.lookupRecords);break;case 2:if(this.coverageIndex(e.coverage)===-1)return  false;t=this.getClassID(this.glyphIterator.cur.id,e.inputClassDef);let s=e.chainClassSet[t];if(!s)return  false;for(let a of s)if(this.classSequenceMatches(-a.backtrack.length,a.backtrack,e.backtrackClassDef)&&this.classSequenceMatches(1,a.input,e.inputClassDef)&&this.classSequenceMatches(1+a.input.length,a.lookahead,e.lookaheadClassDef))return this.applyLookupList(a.lookupRecords);break;case 3:if(this.coverageSequenceMatches(-e.backtrackGlyphCount,e.backtrackCoverage)&&this.coverageSequenceMatches(0,e.inputCoverage)&&this.coverageSequenceMatches(e.inputGlyphCount,e.lookaheadCoverage))return this.applyLookupList(e.lookupRecords);break}return  false}constructor(e,t){this.font=e,this.table=t,this.script=null,this.scriptTag=null,this.language=null,this.languageTag=null,this.features={},this.lookups={},this.variationsIndex=e._variationProcessor?this.findVariationsIndex(e._variationProcessor.normalizedCoords):-1,this.selectScript(),this.glyphs=[],this.positions=[],this.ligatureID=1,this.currentFeature=null;}},Ge=class n{get id(){return this._id}set id(e){this._id=e,this.substituted=true;let t=this._font.GDEF;if(t&&t.glyphClassDef){let r=s0.prototype.getClassID(e,t.glyphClassDef);this.isBase=r===1,this.isLigature=r===2,this.isMark=r===3,this.markAttachmentType=t.markAttachClassDef?s0.prototype.getClassID(e,t.markAttachClassDef):0;}else this.isMark=this.codePoints.length>0&&this.codePoints.every(Xr),this.isBase=!this.isMark,this.isLigature=this.codePoints.length>1,this.markAttachmentType=0;}copy(){return new n(this._font,this.id,this.codePoints,this.features)}constructor(e,t,r=[],s){if(this._font=e,this.codePoints=r,this.id=t,this.features={},Array.isArray(s))for(let a=0;a<s.length;a++){let i=s[a];this.features[i]=true;}else typeof s=="object"&&Object.assign(this.features,s);this.ligatureID=null,this.ligatureComponent=null,this.isLigated=false,this.cursiveAttachment=null,this.markAttachment=null,this.shaperInfo=null,this.substituted=false,this.isMultiplied=false;}},or=class extends _e{static planFeatures(e){e.add(["ljmo","vjmo","tjmo"],false);}static assignFeatures(e,t){let r=0,s=0;for(;s<t.length;){let a,l=t[s].codePoints[0],u=fr(l);switch([a,r]=q1[r][u],a){case it:e.font.hasGlyphForCodePoint(l)||(s=zi(t,s,e.font));break;case Ns:s=X1(t,s,e.font);break;case Rs:K1(t,s,e.font);break;case Us:s=Y1(t,s,e.font);break}s++;}}};ye(or,"zeroMarkWidths","NONE");var n0=44032,Vi=55204,E1=Vi-n0+1,wr=4352,yr=4449,kt=4519,O1=19,lr=21,I0=28,P1=wr+O1-1,T1=yr+lr-1,F1=kt+I0-1,_a$1=9676,D1=n=>4352<=n&&n<=4447||43360<=n&&n<=43388,L1=n=>4448<=n&&n<=4519||55216<=n&&n<=55238,B1=n=>4520<=n&&n<=4607||55243<=n&&n<=55291,M1=n=>12334<=n&&n<=12335,N1=n=>n0<=n&&n<=Vi,R1=n=>n-n0<E1&&(n-n0)%I0===0,U1=n=>wr<=n&&n<=P1,V1=n=>yr<=n&&n<=T1,G1=n=>1<=n&&n<=F1,z1=0,W1=1,ur=2,cn=3,cr=4,Gi=5,H1=6;function fr(n){return D1(n)?W1:L1(n)?ur:B1(n)?cn:R1(n)?cr:N1(n)?Gi:M1(n)?H1:z1}var Ie=0,it=1,Ns=2,Rs=4,Us=5,q1=[[[Ie,0],[Ie,1],[Ie,0],[Ie,0],[it,2],[it,3],[Us,0]],[[Ie,0],[Ie,1],[Ns,2],[Ie,0],[it,2],[it,3],[Us,0]],[[Ie,0],[Ie,1],[Ie,0],[Ns,3],[it,2],[it,3],[Rs,0]],[[Ie,0],[Ie,1],[Ie,0],[Ie,0],[it,2],[it,3],[Rs,0]]];function w0(n,e,t){return new Ge(n,n.glyphForCodePoint(e).id,[e],t)}function zi(n,e,t){let r=n[e],a=r.codePoints[0]-n0,i=kt+a%I0;a=a/I0|0;let l=wr+a/lr|0,u=yr+a%lr;if(!t.hasGlyphForCodePoint(l)||!t.hasGlyphForCodePoint(u)||i!==kt&&!t.hasGlyphForCodePoint(i))return e;let c=w0(t,l,r.features);c.features.ljmo=true;let f=w0(t,u,r.features);f.features.vjmo=true;let h=[c,f];if(i>kt){let v=w0(t,i,r.features);v.features.tjmo=true,h.push(v);}return n.splice(e,1,...h),e+h.length-1}function X1(n,e,t){let r=n[e],s=n[e].codePoints[0],a=fr(s),i=n[e-1].codePoints[0],l=fr(i),u,c,f,h;if(l===cr&&a===cn)u=i,h=r;else {a===ur?(c=n[e-1],f=r):(c=n[e-2],f=n[e-1],h=r);let y=c.codePoints[0],C=f.codePoints[0];U1(y)&&V1(C)&&(u=n0+((y-wr)*lr+(C-yr))*I0);}let v=h&&h.codePoints[0]||kt;if(u!=null&&(v===kt||G1(v))){let y=u+(v-kt);if(t.hasGlyphForCodePoint(y)){let C=l===ur?3:2;return n.splice(e-C+1,C,w0(t,y,r.features)),e-C+1}}return c&&(c.features.ljmo=true),f&&(f.features.vjmo=true),h&&(h.features.tjmo=true),l===cr?(zi(n,e-1,t),e+1):e}function j1(n){switch(fr(n)){case cr:case Gi:return 1;case ur:return 2;case cn:return 3}}function K1(n,e,t){let r=n[e],s=n[e].codePoints[0];if(t.glyphForCodePoint(s).advanceWidth===0)return;let a=n[e-1].codePoints[0],i=j1(a);return n.splice(e,1),n.splice(e-i,0,r)}function Y1(n,e,t){let r=n[e],s=n[e].codePoints[0];if(t.hasGlyphForCodePoint(_a$1)){let a=w0(t,_a$1,r.features),i=t.glyphForCodePoint(s).advanceWidth===0?e:e+1;n.splice(i,0,a),e++;}return e}var Wi={};Wi=JSON.parse('{"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,14,15,16,17],[0,0,0,18,19,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,28,29,30,31,32,33,0,34,0,0,35,36,0,0,37,0],[0,0,0,38,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,39,0,0,0,40,41,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,12,43,0,0,0,0],[0,0,0,0,43,44,44,8,9,0,0,0,0,0,43,0,0,0,0],[0,0,0,45,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,50,0,0,51,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,52,0,0,0,0,0,0,0,0],[0,0,0,53,54,55,56,57,58,0,59,0,0,60,61,0,0,62,0],[0,0,0,4,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,63,64,0,0,40,41,0,9,0,10,0,0,0,42,0,63,0,0],[0,2,3,4,5,6,7,8,9,0,10,11,11,12,13,0,2,16,0],[0,0,0,18,65,20,21,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,0,0],[0,0,0,69,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,73,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,75,0,0,0,76,77,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,25,79,0,0,0,0],[0,0,0,18,19,20,74,22,23,0,24,0,0,25,26,0,0,27,0],[0,0,0,81,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,86,0,0,87,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,88,0,0,0,0,0,0,0,0],[0,0,0,18,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,89,90,0,0,76,77,0,23,0,24,0,0,0,78,0,89,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,0,0],[0,0,0,94,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,96,0,0,0,97,98,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,35,100,0,0,0,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,102,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,107,0,0,108,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,109,0,0,0,0,0,0,0,0],[0,0,0,28,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,110,111,0,0,97,98,0,33,0,34,0,0,0,99,0,110,0,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,0,0],[0,0,0,0,5,7,7,8,9,0,10,0,0,0,13,0,0,16,0],[0,0,0,115,116,117,118,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,39,0,122,0,123,123,8,9,0,10,0,0,0,42,0,39,0,0],[0,124,64,0,0,0,0,0,0,0,0,0,0,0,0,0,124,0,0],[0,39,0,0,0,121,125,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,126,126,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,46,47,48,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,47,47,49,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,128,127,127,49,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,129,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,50,0,0,0,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,134,0,0,0,0,0,0,0,0],[0,0,0,135,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,136,0,0,0,137,138,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,60,140,0,0,0,0],[0,0,0,0,140,141,141,57,58,0,0,0,0,0,140,0,0,0,0],[0,0,0,142,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,147,0,0,148,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,149,0,0,0,0,0,0,0,0],[0,0,0,53,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,150,151,0,0,137,138,0,58,0,59,0,0,0,139,0,150,0,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,0,0],[0,0,0,155,116,156,157,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,0,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,75,3,4,5,159,160,8,161,0,162,0,11,12,163,0,75,16,0],[0,0,0,0,0,40,164,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,0,165,0,0,0,0],[0,124,64,0,0,40,164,0,9,0,10,0,0,0,42,0,124,0,0],[0,0,0,0,0,70,70,0,71,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,71,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,167,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,168,0,0,0,0,0,0,0,0],[0,0,0,0,19,74,74,22,23,0,24,0,0,0,26,0,0,27,0],[0,0,0,0,79,80,80,22,23,0,0,0,0,0,79,0,0,0,0],[0,0,0,169,170,171,172,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,75,0,176,0,177,177,22,23,0,24,0,0,0,78,0,75,0,0],[0,178,90,0,0,0,0,0,0,0,0,0,0,0,0,0,178,0,0],[0,75,0,0,0,175,179,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,180,180,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,82,83,84,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,83,83,85,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,182,181,181,85,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,183,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,86,0,0,0,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,188,0,0,0,0,0,0,0,0],[0,0,0,189,170,190,191,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,0,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,76,193,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,0,194,0,0,0,0],[0,178,90,0,0,76,193,0,23,0,24,0,0,0,78,0,178,0,0],[0,0,0,0,29,95,31,32,33,0,34,0,0,0,36,0,0,37,0],[0,0,0,0,100,101,101,32,33,0,0,0,0,0,100,0,0,0,0],[0,0,0,195,196,197,198,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,96,0,202,0,203,203,32,33,0,34,0,0,0,99,0,96,0,0],[0,204,111,0,0,0,0,0,0,0,0,0,0,0,0,0,204,0,0],[0,96,0,0,0,201,205,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,206,206,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,103,104,105,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,104,104,106,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,208,207,207,106,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,209,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,107,0,0,0,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,214,0,0,0,0,0,0,0,0],[0,0,0,215,196,216,217,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,0,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,97,219,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,0,220,0,0,0,0],[0,204,111,0,0,97,219,0,33,0,34,0,0,0,99,0,204,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,223,0,0,0,40,224,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,119,225,0,0,0,0],[0,0,0,115,116,117,222,8,9,0,10,0,0,119,120,0,0,16,0],[0,0,0,115,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,226,64,0,0,40,224,0,9,0,10,0,0,0,42,0,226,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,39,0,0,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,44,44,8,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,227,0,228,229,0,9,0,10,0,0,230,0,0,0,0,0],[0,39,0,122,0,121,121,0,9,0,10,0,0,0,42,0,39,0,0],[0,0,0,0,0,0,0,8,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,231,231,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,232,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,130,131,132,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,131,131,133,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,234,233,233,133,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,235,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,54,56,56,57,58,0,59,0,0,0,61,0,0,62,0],[0,0,0,240,241,242,243,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,136,0,247,0,248,248,57,58,0,59,0,0,0,139,0,136,0,0],[0,249,151,0,0,0,0,0,0,0,0,0,0,0,0,0,249,0,0],[0,136,0,0,0,246,250,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,251,251,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,143,144,145,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,144,144,146,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,253,252,252,146,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,254,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,147,0,0,0,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,259,0,0,0,0,0,0,0,0],[0,0,0,260,241,261,262,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,0,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,137,264,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,0,265,0,0,0,0],[0,249,151,0,0,137,264,0,58,0,59,0,0,0,139,0,249,0,0],[0,0,0,221,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,158,225,0,0,0,0],[0,0,0,155,116,156,222,8,9,0,10,0,0,158,120,0,0,16,0],[0,0,0,155,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,43,266,266,8,161,0,24,0,0,12,267,0,0,0,0],[0,75,0,176,43,268,268,269,161,0,24,0,0,0,267,0,75,0,0],[0,0,0,0,0,270,0,0,271,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,272,0,0,0,0,0,0,0,0],[0,273,274,0,0,40,41,0,9,0,10,0,0,0,42,0,273,0,0],[0,0,0,40,0,123,123,8,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,121,275,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,166,0,0,0,0,72,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,276,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,279,0,0,0,76,280,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,173,281,0,0,0,0],[0,0,0,169,170,171,278,22,23,0,24,0,0,173,174,0,0,27,0],[0,0,0,169,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,282,90,0,0,76,280,0,23,0,24,0,0,0,78,0,282,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,75,0,0,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,80,80,22,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,283,0,284,285,0,23,0,24,0,0,286,0,0,0,0,0],[0,75,0,176,0,175,175,0,23,0,24,0,0,0,78,0,75,0,0],[0,0,0,0,0,0,0,22,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,287,287,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,288,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,184,185,186,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,185,185,187,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,290,289,289,187,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,291,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,277,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,192,281,0,0,0,0],[0,0,0,189,170,190,278,22,23,0,24,0,0,192,174,0,0,27,0],[0,0,0,189,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,76,0,177,177,22,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,175,296,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,299,0,0,0,97,300,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,199,301,0,0,0,0],[0,0,0,195,196,197,298,32,33,0,34,0,0,199,200,0,0,37,0],[0,0,0,195,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,302,111,0,0,97,300,0,33,0,34,0,0,0,99,0,302,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,96,0,0,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,101,101,32,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,303,0,304,305,0,33,0,34,0,0,306,0,0,0,0,0],[0,96,0,202,0,201,201,0,33,0,34,0,0,0,99,0,96,0,0],[0,0,0,0,0,0,0,32,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,307,307,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,308,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,210,211,212,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,211,211,213,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,310,309,309,213,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,311,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,297,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,218,301,0,0,0,0],[0,0,0,215,196,216,298,32,33,0,34,0,0,218,200,0,0,37,0],[0,0,0,215,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,97,0,203,203,32,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,201,316,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,116,222,222,8,9,0,10,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,9,0,0,0,0,0,225,0,0,0,0],[0,0,0,317,318,319,320,8,9,0,10,0,0,321,322,0,0,16,0],[0,223,0,323,0,123,123,8,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,0,0,121,324,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,325,318,326,327,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,64,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,9,0,0,0,0,230,0,0,0,0,0],[0,0,0,227,0,228,121,0,9,0,10,0,0,230,0,0,0,0,0],[0,0,0,227,0,121,121,0,9,0,10,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,49,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,46,0,0],[0,0,0,0,0,329,329,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,330,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,236,237,238,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,237,237,239,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,332,331,331,239,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,333,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,337,0,0,0,137,338,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,244,339,0,0,0,0],[0,0,0,240,241,242,336,57,58,0,59,0,0,244,245,0,0,62,0],[0,0,0,240,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,340,151,0,0,137,338,0,58,0,59,0,0,0,139,0,340,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,136,0,0,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,141,141,57,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,341,0,342,343,0,58,0,59,0,0,344,0,0,0,0,0],[0,136,0,247,0,246,246,0,58,0,59,0,0,0,139,0,136,0,0],[0,0,0,0,0,0,0,57,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,345,345,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,346,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,255,256,257,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,256,256,258,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,348,347,347,258,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,349,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,335,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,263,339,0,0,0,0],[0,0,0,260,241,261,336,57,58,0,59,0,0,263,245,0,0,62,0],[0,0,0,260,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,137,0,248,248,57,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,246,354,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,126,126,8,23,0,0,0,0,0,0,0,0,0,0],[0,355,90,0,0,121,125,0,9,0,10,0,0,0,42,0,355,0,0],[0,0,0,0,0,356,356,269,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,357,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,270,0,0,0,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,363,0,0,0,0,0,0,0,0],[0,0,0,364,116,365,366,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,40,0,121,121,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,170,278,278,22,23,0,24,0,0,0,174,0,0,27,0],[0,0,0,0,281,80,80,22,23,0,0,0,0,0,281,0,0,0,0],[0,0,0,369,370,371,372,22,23,0,24,0,0,373,374,0,0,27,0],[0,279,0,375,0,177,177,22,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,0,0,175,376,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,377,370,378,379,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,90,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,23,0,0,0,0,286,0,0,0,0,0],[0,0,0,283,0,284,175,0,23,0,24,0,0,286,0,0,0,0,0],[0,0,0,283,0,175,175,0,23,0,24,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,85,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,82,0,0],[0,0,0,0,0,381,381,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,382,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,292,293,294,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,293,293,295,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,0,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,384,383,383,295,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,385,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,76,0,175,175,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,196,298,298,32,33,0,34,0,0,0,200,0,0,37,0],[0,0,0,0,301,101,101,32,33,0,0,0,0,0,301,0,0,0,0],[0,0,0,387,388,389,390,32,33,0,34,0,0,391,392,0,0,37,0],[0,299,0,393,0,203,203,32,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,0,0,201,394,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,395,388,396,397,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,111,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,33,0,0,0,0,306,0,0,0,0,0],[0,0,0,303,0,304,201,0,33,0,34,0,0,306,0,0,0,0,0],[0,0,0,303,0,201,201,0,33,0,34,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,106,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,103,0,0],[0,0,0,0,0,399,399,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,400,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,312,313,314,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,313,313,315,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,0,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,402,401,401,315,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,403,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,97,0,201,201,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,407,0,0,0,40,408,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,321,409,0,0,0,0],[0,0,0,317,318,319,406,8,9,0,10,0,0,321,322,0,0,16,0],[0,0,0,317,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,410,64,0,0,40,408,0,9,0,10,0,0,0,42,0,410,0,0],[0,223,0,0,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,223,0,323,0,121,121,0,9,0,10,0,0,0,42,0,223,0,0],[0,0,0,405,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,328,409,0,0,0,0],[0,0,0,325,318,326,406,8,9,0,10,0,0,328,322,0,0,16,0],[0,0,0,325,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,0,0,0,133,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,130,0,0],[0,0,0,0,0,411,411,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,412,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,40,121,334,0,9,0,10,0,0,0,42,0,0,0,0],[0,0,0,0,413,0,0,0,9,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,241,336,336,57,58,0,59,0,0,0,245,0,0,62,0],[0,0,0,0,339,141,141,57,58,0,0,0,0,0,339,0,0,0,0],[0,0,0,414,415,416,417,57,58,0,59,0,0,418,419,0,0,62,0],[0,337,0,420,0,248,248,57,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,0,0,246,421,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,422,415,423,424,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,151,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,58,0,0,0,0,344,0,0,0,0,0],[0,0,0,341,0,342,246,0,58,0,59,0,0,344,0,0,0,0,0],[0,0,0,341,0,246,246,0,58,0,59,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,146,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,143,0,0],[0,0,0,0,0,426,426,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,427,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,350,351,352,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,351,351,353,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,0,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,429,428,428,353,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,430,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,137,0,246,246,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,432,116,433,434,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,0,0,180,180,269,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,358,359,360,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,359,359,361,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,437,436,436,361,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,438,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,443,274,0,0,0,0,0,0,0,0,0,0,0,0,0,443,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,367,225,0,0,0,0],[0,0,0,364,116,365,445,8,161,0,162,0,0,367,120,0,0,16,0],[0,0,0,364,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,448,0,0,0,76,449,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,373,450,0,0,0,0],[0,0,0,369,370,371,447,22,23,0,24,0,0,373,374,0,0,27,0],[0,0,0,369,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,451,90,0,0,76,449,0,23,0,24,0,0,0,78,0,451,0,0],[0,279,0,0,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,279,0,375,0,175,175,0,23,0,24,0,0,0,78,0,279,0,0],[0,0,0,446,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,380,450,0,0,0,0],[0,0,0,377,370,378,447,22,23,0,24,0,0,380,374,0,0,27,0],[0,0,0,377,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,0,0,0,187,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,184,0,0],[0,0,0,0,0,452,452,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,453,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,76,175,386,0,23,0,24,0,0,0,78,0,0,0,0],[0,0,0,0,454,0,0,0,23,0,0,0,0,0,0,0,0,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,457,0,0,0,97,458,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,391,459,0,0,0,0],[0,0,0,387,388,389,456,32,33,0,34,0,0,391,392,0,0,37,0],[0,0,0,387,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,460,111,0,0,97,458,0,33,0,34,0,0,0,99,0,460,0,0],[0,299,0,0,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,299,0,393,0,201,201,0,33,0,34,0,0,0,99,0,299,0,0],[0,0,0,455,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,398,459,0,0,0,0],[0,0,0,395,388,396,456,32,33,0,34,0,0,398,392,0,0,37,0],[0,0,0,395,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,0,0,0,213,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,210,0,0],[0,0,0,0,0,461,461,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,462,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,97,201,404,0,33,0,34,0,0,0,99,0,0,0,0],[0,0,0,0,463,0,0,0,33,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,318,406,406,8,9,0,10,0,0,0,322,0,0,16,0],[0,0,0,0,409,44,44,8,9,0,0,0,0,0,409,0,0,0,0],[0,0,0,464,465,466,467,8,9,0,10,0,0,468,469,0,0,16,0],[0,407,0,470,0,123,123,8,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,0,0,121,471,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,472,465,473,474,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,0,0,0,0,239,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,236,0,0],[0,0,0,0,0,0,476,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,479,0,0,0,137,480,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,418,481,0,0,0,0],[0,0,0,414,415,416,478,57,58,0,59,0,0,418,419,0,0,62,0],[0,0,0,414,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,482,151,0,0,137,480,0,58,0,59,0,0,0,139,0,482,0,0],[0,337,0,0,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,337,0,420,0,246,246,0,58,0,59,0,0,0,139,0,337,0,0],[0,0,0,477,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,425,481,0,0,0,0],[0,0,0,422,415,423,478,57,58,0,59,0,0,425,419,0,0,62,0],[0,0,0,422,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,0,0,0,258,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,0,0],[0,0,0,0,0,483,483,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,484,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,137,246,431,0,58,0,59,0,0,0,139,0,0,0,0],[0,0,0,0,485,0,0,0,58,0,0,0,0,0,0,0,0,0,0],[0,0,0,444,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,435,225,0,0,0,0],[0,0,0,432,116,433,445,8,161,0,162,0,0,435,120,0,0,16,0],[0,0,0,432,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,0,486,486,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,487,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,439,440,441,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,440,440,442,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,489,488,488,442,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,490,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,495,0,496,497,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,0,116,445,445,8,161,0,162,0,0,0,120,0,0,16,0],[0,0,0,0,225,44,44,8,161,0,0,0,0,0,225,0,0,0,0],[0,0,0,0,370,447,447,22,23,0,24,0,0,0,374,0,0,27,0],[0,0,0,0,450,80,80,22,23,0,0,0,0,0,450,0,0,0,0],[0,0,0,499,500,501,502,22,23,0,24,0,0,503,504,0,0,27,0],[0,448,0,505,0,177,177,22,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,0,0,175,506,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,507,500,508,509,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,0,0,0,0,295,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,292,0,0],[0,0,0,0,0,0,511,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,388,456,456,32,33,0,34,0,0,0,392,0,0,37,0],[0,0,0,0,459,101,101,32,33,0,0,0,0,0,459,0,0,0,0],[0,0,0,512,513,514,515,32,33,0,34,0,0,516,517,0,0,37,0],[0,457,0,518,0,203,203,32,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,0,0,201,519,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,520,513,521,522,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,0,0,0,0,315,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,312,0,0],[0,0,0,0,0,0,524,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,527,0,0,0,40,528,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,468,529,0,0,0,0],[0,0,0,464,465,466,526,8,9,0,10,0,0,468,469,0,0,16,0],[0,0,0,464,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,530,64,0,0,40,528,0,9,0,10,0,0,0,42,0,530,0,0],[0,407,0,0,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,407,0,470,0,121,121,0,9,0,10,0,0,0,42,0,407,0,0],[0,0,0,525,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,475,529,0,0,0,0],[0,0,0,472,465,473,526,8,9,0,10,0,0,475,469,0,0,16,0],[0,0,0,472,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,40,0,0],[0,0,0,0,415,478,478,57,58,0,59,0,0,0,419,0,0,62,0],[0,0,0,0,481,141,141,57,58,0,0,0,0,0,481,0,0,0,0],[0,0,0,531,532,533,534,57,58,0,59,0,0,535,536,0,0,62,0],[0,479,0,537,0,248,248,57,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,0,0,246,538,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,539,532,540,541,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,0,0,0,0,353,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,350,0,0],[0,0,0,0,0,0,543,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,361,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,358,0,0],[0,0,0,0,0,544,544,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,545,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,491,492,493,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,492,492,494,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,547,546,546,494,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,548,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,274,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,161,0,0,0,0,498,0,0,0,0,0],[0,0,0,495,0,496,368,0,161,0,162,0,0,498,0,0,0,0,0],[0,0,0,495,0,368,368,0,161,0,162,0,0,0,0,0,0,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,553,0,0,0,76,554,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,503,555,0,0,0,0],[0,0,0,499,500,501,552,22,23,0,24,0,0,503,504,0,0,27,0],[0,0,0,499,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,556,90,0,0,76,554,0,23,0,24,0,0,0,78,0,556,0,0],[0,448,0,0,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,448,0,505,0,175,175,0,23,0,24,0,0,0,78,0,448,0,0],[0,0,0,551,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,510,555,0,0,0,0],[0,0,0,507,500,508,552,22,23,0,24,0,0,510,504,0,0,27,0],[0,0,0,507,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,76,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,559,0,0,0,97,560,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,516,561,0,0,0,0],[0,0,0,512,513,514,558,32,33,0,34,0,0,516,517,0,0,37,0],[0,0,0,512,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,562,111,0,0,97,560,0,33,0,34,0,0,0,99,0,562,0,0],[0,457,0,0,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,457,0,518,0,201,201,0,33,0,34,0,0,0,99,0,457,0,0],[0,0,0,557,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,523,561,0,0,0,0],[0,0,0,520,513,521,558,32,33,0,34,0,0,523,517,0,0,37,0],[0,0,0,520,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,97,0,0],[0,0,0,0,465,526,526,8,9,0,10,0,0,0,469,0,0,16,0],[0,0,0,0,529,44,44,8,9,0,0,0,0,0,529,0,0,0,0],[0,0,0,563,66,564,565,8,9,0,10,0,0,566,68,0,0,16,0],[0,527,0,567,0,123,123,8,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,0,0,121,568,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,569,66,570,571,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,575,0,0,0,137,576,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,535,577,0,0,0,0],[0,0,0,531,532,533,574,57,58,0,59,0,0,535,536,0,0,62,0],[0,0,0,531,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,578,151,0,0,137,576,0,58,0,59,0,0,0,139,0,578,0,0],[0,479,0,0,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,479,0,537,0,246,246,0,58,0,59,0,0,0,139,0,479,0,0],[0,0,0,573,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,542,577,0,0,0,0],[0,0,0,539,532,540,574,57,58,0,59,0,0,542,536,0,0,62,0],[0,0,0,539,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,137,0,0],[0,0,0,0,0,0,0,442,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,439,0,0],[0,0,0,0,0,579,579,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,580,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,549,368,550,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,0,368,368,0,161,0,162,0,0,0,362,0,0,0,0],[0,0,0,0,581,0,0,0,161,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,500,552,552,22,23,0,24,0,0,0,504,0,0,27,0],[0,0,0,0,555,80,80,22,23,0,0,0,0,0,555,0,0,0,0],[0,0,0,582,91,583,584,22,23,0,24,0,0,585,93,0,0,27,0],[0,553,0,586,0,177,177,22,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,0,0,175,587,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,588,91,589,590,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,0,513,558,558,32,33,0,34,0,0,0,517,0,0,37,0],[0,0,0,0,561,101,101,32,33,0,0,0,0,0,561,0,0,0,0],[0,0,0,592,112,593,594,32,33,0,34,0,0,595,114,0,0,37,0],[0,559,0,596,0,203,203,32,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,0,0,201,597,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,598,112,599,600,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,566,165,0,0,0,0],[0,0,0,563,66,564,67,8,9,0,10,0,0,566,68,0,0,16,0],[0,0,0,563,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,527,0,0,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,527,0,567,0,121,121,0,9,0,10,0,0,0,42,0,527,0,0],[0,0,0,602,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,165,44,44,8,9,0,0,0,0,572,165,0,0,0,0],[0,0,0,569,66,570,67,8,9,0,10,0,0,572,68,0,0,16,0],[0,0,0,569,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,0,532,574,574,57,58,0,59,0,0,0,536,0,0,62,0],[0,0,0,0,577,141,141,57,58,0,0,0,0,0,577,0,0,0,0],[0,0,0,603,152,604,605,57,58,0,59,0,0,606,154,0,0,62,0],[0,575,0,607,0,248,248,57,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,0,0,246,608,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,609,152,610,611,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,0,0,0,0,494,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,491,0,0],[0,0,0,0,0,0,613,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,585,194,0,0,0,0],[0,0,0,582,91,583,92,22,23,0,24,0,0,585,93,0,0,27,0],[0,0,0,582,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,553,0,0,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,553,0,586,0,175,175,0,23,0,24,0,0,0,78,0,553,0,0],[0,0,0,614,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,194,80,80,22,23,0,0,0,0,591,194,0,0,0,0],[0,0,0,588,91,589,92,22,23,0,24,0,0,591,93,0,0,27,0],[0,0,0,588,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,595,220,0,0,0,0],[0,0,0,592,112,593,113,32,33,0,34,0,0,595,114,0,0,37,0],[0,0,0,592,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,559,0,0,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,559,0,596,0,201,201,0,33,0,34,0,0,0,99,0,559,0,0],[0,0,0,615,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,220,101,101,32,33,0,0,0,0,601,220,0,0,0,0],[0,0,0,598,112,599,113,32,33,0,34,0,0,601,114,0,0,37,0],[0,0,0,598,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,66,67,67,8,9,0,10,0,0,0,68,0,0,16,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,606,265,0,0,0,0],[0,0,0,603,152,604,153,57,58,0,59,0,0,606,154,0,0,62,0],[0,0,0,603,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,575,0,0,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,575,0,607,0,246,246,0,58,0,59,0,0,0,139,0,575,0,0],[0,0,0,616,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,265,141,141,57,58,0,0,0,0,612,265,0,0,0,0],[0,0,0,609,152,610,153,57,58,0,59,0,0,612,154,0,0,62,0],[0,0,0,609,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,549,0,0],[0,0,0,0,91,92,92,22,23,0,24,0,0,0,93,0,0,27,0],[0,0,0,0,112,113,113,32,33,0,34,0,0,0,114,0,0,37,0],[0,0,0,0,152,153,153,57,58,0,59,0,0,0,154,0,0,62,0]],"accepting":[false,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,false,false,true,true,true,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,true,true,true,false,true,false,true,true,false,false,true,true,true,true,true,true,true,false,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,false,true,false,true,true,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,false,true,false,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,true,false,true,true,false,false,false,false,true,true,false,false,true,true,true,false,true,true,false,false,true,false,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,true,false,true,false,true,true,false,false,true,true,false,false,true,true,true,false,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,false,false,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,false,false,false,false,false,false,false,true,true,false,false,true,true,false,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,true,true,false,true,true,true,true,true,true,false,true,true,false,true,false,true,true,true,true,true,true,false,true,true,true,true,true,true,false,true,true,false,false,false,false,false,true,true,false,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,false,false,false,true,false,true,true,true,true,true,false,true,true,true,false,true,true,true,true,true,false,true,true,true,true,false,true,true,true,true,true,false,true,true,false,true,true,true],"tags":[[],["broken_cluster"],["consonant_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["broken_cluster"],["broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],[],["broken_cluster"],["symbol_cluster"],[],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["symbol_cluster"],["symbol_cluster"],["symbol_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],["broken_cluster"],[],[],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["broken_cluster"],["symbol_cluster"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],["consonant_syllable"],[],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],["vowel_syllable"],[],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],[],[],[],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],["standalone_cluster"],[],[],["standalone_cluster"],["standalone_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],[],[],[],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],[],[],[],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],[],[],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],["standalone_cluster"],[],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],[],[],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],[],[],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],[],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],[],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],[],[],[],[],["consonant_syllable","broken_cluster"],["consonant_syllable","broken_cluster"],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],[],[],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],["consonant_syllable"],[],["consonant_syllable"],["consonant_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],["vowel_syllable"],[],["vowel_syllable"],["vowel_syllable"],["broken_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],["standalone_cluster"],[],["standalone_cluster"],["standalone_cluster"],[],["consonant_syllable"],["vowel_syllable"],["standalone_cluster"]]}');var Cr={};Cr=JSON.parse('{"categories":["O","IND","S","GB","B","FM","CGJ","VMAbv","VMPst","VAbv","VPst","CMBlw","VPre","VBlw","H","VMBlw","CMAbv","MBlw","CS","R","SUB","MPst","MPre","FAbv","FPst","FBlw","SMAbv","SMBlw","VMPre","ZWNJ","ZWJ","WJ","VS","N","HN","MAbv"],"decompositions":{"2507":[2503,2494],"2508":[2503,2519],"2888":[2887,2902],"2891":[2887,2878],"2892":[2887,2903],"3018":[3014,3006],"3019":[3015,3006],"3020":[3014,3031],"3144":[3142,3158],"3264":[3263,3285],"3271":[3270,3285],"3272":[3270,3286],"3274":[3270,3266],"3275":[3270,3266,3285],"3402":[3398,3390],"3403":[3399,3390],"3404":[3398,3415],"3546":[3545,3530],"3548":[3545,3535],"3549":[3545,3535,3530],"3550":[3545,3551],"3635":[3661,3634],"3763":[3789,3762],"3955":[3953,3954],"3957":[3953,3956],"3958":[4018,3968],"3959":[4018,3953,3968],"3960":[4019,3968],"3961":[4019,3953,3968],"3969":[3953,3968],"6971":[6970,6965],"6973":[6972,6965],"6976":[6974,6965],"6977":[6975,6965],"6979":[6978,6965],"69934":[69937,69927],"69935":[69938,69927],"70475":[70471,70462],"70476":[70471,70487],"70843":[70841,70842],"70844":[70841,70832],"70846":[70841,70845],"71098":[71096,71087],"71099":[71097,71087]},"stateTable":[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[2,2,3,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,17,18,11,19,20,21,22,0,0,23,0,0,2,0,24,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,27,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,39,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,9,0,0,12,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,0,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,4,4,5,0,6,7,8,9,10,11,12,13,14,15,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,49,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,20,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,21,22,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,0,0,0,0,0,0,14,0,0,0,0,0,0,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0],[0,0,0,0,0,5,0,6,7,8,9,0,11,12,0,14,0,16,0,0,0,11,0,20,21,22,0,0,23,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,27,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,28,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,33,0,0,36,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,34,35,36,37,38,39,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,0,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,53,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,43,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,44,45,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,0,0,0,0,0,0,38,0,0,0,0,0,0,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,29,0,30,31,32,33,0,35,36,0,38,0,40,0,0,0,35,0,43,44,45,0,0,46,0,0,0,0,0,0,0],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,0,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,5,0,6,7,8,9,48,11,12,13,14,48,16,0,0,18,11,19,20,21,22,0,0,23,0,0,0,0,0,0,25],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,51,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,54,0,0],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,0,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,29,0,30,31,32,33,52,35,36,37,38,52,40,0,0,41,35,42,43,44,45,0,0,46,0,0,0,0,0,0,47],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,50,0,51,0]],"accepting":[false,true,true,true,true,true,true,true,true,true,true,true,true,false,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true],"tags":[[],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],[],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["broken_cluster"],["independent_cluster"],["symbol_cluster"],["symbol_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["virama_terminated_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["standard_cluster"],["broken_cluster"],["broken_cluster"],["numeral_cluster"],["number_joiner_terminated_cluster"],["standard_cluster"],["standard_cluster"],["numeral_cluster"]]}');var z={X:1,C:2,V:4,N:8,H:16,ZWNJ:32,ZWJ:64,M:128,Placeholder:2048,Dotted_Circle:4096,RS:8192,Coeng:16384,Repha:32768,Ra:65536,CM:131072},B={Start:1,Ra_To_Become_Reph:2,Pre_M:4,Pre_C:8,Base_C:16,After_Main:32,Before_Sub:128,Below_C:256,After_Sub:512,Before_Post:1024,Post_C:2048,After_Post:4096,Final_C:8192,SMVD:16384,End:32768},Z1=z.C|z.Ra|z.CM|z.V|z.Placeholder|z.Dotted_Circle,Hi=z.ZWJ|z.ZWNJ,y0=z.H|z.Coeng,Qa={Default:{hasOldSpec:false,virama:0,basePos:"Last",rephPos:B.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Devanagari:{hasOldSpec:true,virama:2381,basePos:"Last",rephPos:B.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Bengali:{hasOldSpec:true,virama:2509,basePos:"Last",rephPos:B.After_Sub,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Gurmukhi:{hasOldSpec:true,virama:2637,basePos:"Last",rephPos:B.Before_Sub,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Gujarati:{hasOldSpec:true,virama:2765,basePos:"Last",rephPos:B.Before_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Oriya:{hasOldSpec:true,virama:2893,basePos:"Last",rephPos:B.After_Main,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Tamil:{hasOldSpec:true,virama:3021,basePos:"Last",rephPos:B.After_Post,rephMode:"Implicit",blwfMode:"Pre_And_Post"},Telugu:{hasOldSpec:true,virama:3149,basePos:"Last",rephPos:B.After_Post,rephMode:"Explicit",blwfMode:"Post_Only"},Kannada:{hasOldSpec:true,virama:3277,basePos:"Last",rephPos:B.After_Post,rephMode:"Implicit",blwfMode:"Post_Only"},Malayalam:{hasOldSpec:true,virama:3405,basePos:"Last",rephPos:B.After_Main,rephMode:"Log_Repha",blwfMode:"Pre_And_Post"},Khmer:{hasOldSpec:false,virama:6098,basePos:"First",rephPos:B.Ra_To_Become_Reph,rephMode:"Vis_Repha",blwfMode:"Pre_And_Post"}},J1={6078:[6081,6078],6079:[6081,6079],6080:[6081,6080],6084:[6081,6084],6085:[6081,6085]},{decompositions:$1}=mr(Cr),qi=new gr.default(un("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")),_1=new nn.default(mr(Wi)),ne=class extends _e{static planFeatures(e){e.addStage(Q1),e.addStage(["locl","ccmp"]),e.addStage(th),e.addStage("nukt"),e.addStage("akhn"),e.addStage("rphf",false),e.addStage("rkrf"),e.addStage("pref",false),e.addStage("blwf",false),e.addStage("abvf",false),e.addStage("half",false),e.addStage("pstf",false),e.addStage("vatu"),e.addStage("cjct"),e.addStage("cfar",false),e.addStage(rh),e.addStage({local:["init"],global:["pres","abvs","blws","psts","haln","dist","abvm","blwm","calt","clig"]}),e.unicodeScript=Jf(e.script),e.indicConfig=Qa[e.unicodeScript]||Qa.Default,e.isOldSpec=e.indicConfig.hasOldSpec&&e.script[e.script.length-1]!=="2";}static assignFeatures(e,t){for(let r=t.length-1;r>=0;r--){let s=t[r].codePoints[0],a=J1[s]||$1[s];if(a){let i=a.map(l=>{let u=e.font.glyphForCodePoint(l);return new Ge(e.font,u.id,[l],t[r].features)});t.splice(r,1,...i);}}}};ye(ne,"zeroMarkWidths","NONE");function Vs(n){return qi.get(n.codePoints[0])>>8}function Xi(n){return 1<<(qi.get(n.codePoints[0])&255)}var e0=class{constructor(e,t,r,s){this.category=e,this.position=t,this.syllableType=r,this.syllable=s;}};function Q1(n,e){let t=0,r=0;for(let[s,a,i]of _1.match(e.map(Vs))){if(s>r){++t;for(let l=r;l<s;l++)e[l].shaperInfo=new e0(z.X,B.End,"non_indic_cluster",t);}++t;for(let l=s;l<=a;l++)e[l].shaperInfo=new e0(1<<Vs(e[l]),Xi(e[l]),i[0],t);r=a+1;}if(r<e.length){++t;for(let s=r;s<e.length;s++)e[s].shaperInfo=new e0(z.X,B.End,"non_indic_cluster",t);}}function Vt(n){return n.shaperInfo.category&Z1}function $e(n){return n.shaperInfo.category&Hi}function at(n){return n.shaperInfo.category&y0}function lt(n,e){for(let r of n)r.features={[e]:true};return n[0]._font._layoutEngine.engine.GSUBProcessor.applyFeatures([e],n),n.length===1}function eh(n,e,t){let r=[t,e,t];return lt(r.slice(0,2),"blwf")||lt(r.slice(1,3),"blwf")?B.Below_C:lt(r.slice(0,2),"pstf")||lt(r.slice(1,3),"pstf")||lt(r.slice(0,2),"pref")||lt(r.slice(1,3),"pref")?B.Post_C:B.Base_C}function th(n,e,t){let r=t.indicConfig,s=n._layoutEngine.engine.GSUBProcessor.features,a=n.glyphForCodePoint(9676).id,i=n.glyphForCodePoint(r.virama).id;if(i){let l=new Ge(n,i,[r.virama]);for(let u=0;u<e.length;u++)e[u].shaperInfo.position===B.Base_C&&(e[u].shaperInfo.position=eh(n,e[u].copy(),l));}for(let l=0,u=hr(e,0);l<e.length;l=u,u=hr(e,l)){let{category:c,syllableType:f}=e[l].shaperInfo;if(f==="symbol_cluster"||f==="non_indic_cluster")continue;if(f==="broken_cluster"&&a){let p=new Ge(n,a,[9676]);p.shaperInfo=new e0(1<<Vs(p),Xi(p),e[l].shaperInfo.syllableType,e[l].shaperInfo.syllable);let P=l;for(;P<u&&e[P].shaperInfo.category===z.Repha;)P++;e.splice(P++,0,p),u++;}let h=u,v=l,y=false;if(r.rephPos!==B.Ra_To_Become_Reph&&s.rphf&&l+3<=u&&(r.rephMode==="Implicit"&&!$e(e[l+2])||r.rephMode==="Explicit"&&e[l+2].shaperInfo.category===z.ZWJ)){let p=[e[l].copy(),e[l+1].copy(),e[l+2].copy()];if(lt(p.slice(0,2),"rphf")||r.rephMode==="Explicit"&&lt(p,"rphf")){for(v+=2;v<u&&$e(e[v]);)v++;h=l,y=true;}}else if(r.rephMode==="Log_Repha"&&e[l].shaperInfo.category===z.Repha){for(v++;v<u&&$e(e[v]);)v++;h=l,y=true;}switch(r.basePos){case "Last":{let p=u,P=false;do{let I=e[--p].shaperInfo;if(Vt(e[p])){if(I.position!==B.Below_C&&(I.position!==B.Post_C||P)){h=p;break}I.position===B.Below_C&&(P=true),h=p;}else if(l<p&&I.category===z.ZWJ&&e[p-1].shaperInfo.category===z.H)break}while(p>v);break}case "First":h=l;for(let p=h+1;p<u;p++)Vt(e[p])&&(e[p].shaperInfo.position=B.Below_C);}y&&h===l&&v-h<=2&&(y=false);for(let p=l;p<h;p++){let P=e[p].shaperInfo;P.position=Math.min(B.Pre_C,P.position);}h<u&&(e[h].shaperInfo.position=B.Base_C);for(let p=h+1;p<u;p++)if(e[p].shaperInfo.category===z.M){for(let P=p+1;P<u;P++)if(Vt(e[P])){e[P].shaperInfo.position=B.Final_C;break}break}if(y&&(e[l].shaperInfo.position=B.Ra_To_Become_Reph),t.isOldSpec){let p=t.unicodeScript!=="Malayalam";for(let P=h+1;P<u;P++)if(e[P].shaperInfo.category===z.H){let I;for(I=u-1;I>P&&!(Vt(e[I])||p&&e[I].shaperInfo.category===z.H);I--);if(e[I].shaperInfo.category!==z.H&&I>P){let N=e[P];e.splice(P,0,...e.splice(P+1,I-P)),e[I]=N;}break}}let C=B.Start;for(let p=l;p<u;p++){let P=e[p].shaperInfo;if(P.category&(Hi|z.N|z.RS|z.CM|y0&P.category)){if(P.position=C,P.category===z.H&&P.position===B.Pre_M){for(let I=p;I>l;I--)if(e[I-1].shaperInfo.position!==B.Pre_M){P.position=e[I-1].shaperInfo.position;break}}}else P.position!==B.SMVD&&(C=P.position);}let O=h;for(let p=h+1;p<u;p++)if(Vt(e[p])){for(let P=O+1;P<p;P++)e[P].shaperInfo.position<B.SMVD&&(e[P].shaperInfo.position=e[p].shaperInfo.position);O=p;}else e[p].shaperInfo.category===z.M&&(O=p);let D=e.slice(l,u);D.sort((p,P)=>p.shaperInfo.position-P.shaperInfo.position),e.splice(l,D.length,...D);for(let p=l;p<u;p++)if(e[p].shaperInfo.position===B.Base_C){h=p;break}for(let p=l;p<u&&e[p].shaperInfo.position===B.Ra_To_Become_Reph;p++)e[p].features.rphf=true;let E=!t.isOldSpec&&r.blwfMode==="Pre_And_Post";for(let p=l;p<h;p++)e[p].features.half=true,E&&(e[p].features.blwf=true);for(let p=h+1;p<u;p++)e[p].features.abvf=true,e[p].features.pstf=true,e[p].features.blwf=true;if(t.isOldSpec&&t.unicodeScript==="Devanagari")for(let p=l;p+1<h;p++)e[p].shaperInfo.category===z.Ra&&e[p+1].shaperInfo.category===z.H&&(p+1===h||e[p+2].shaperInfo.category===z.ZWJ)&&(e[p].features.blwf=true,e[p+1].features.blwf=true);let T=2;if(s.pref&&h+T<u)for(let p=h+1;p+T-1<u;p++){let P=[e[p].copy(),e[p+1].copy()];if(lt(P,"pref")){for(let I=0;I<T;I++)e[p++].features.pref=true;if(s.cfar)for(;p<u;p++)e[p].features.cfar=true;break}}for(let p=l+1;p<u;p++)if($e(e[p])){let P=e[p].shaperInfo.category===z.ZWNJ,I=p;do I--,P&&delete e[I].features.half;while(I>l&&!Vt(e[I]))}}}function rh(n,e,t){let r=t.indicConfig,s=n._layoutEngine.engine.GSUBProcessor.features;for(let a=0,i=hr(e,0);a<e.length;a=i,i=hr(e,a)){let l=!!s.pref,u=a;for(;u<i;u++)if(e[u].shaperInfo.position>=B.Base_C){if(l&&u+1<i){for(let c=u+1;c<i;c++)if(e[c].features.pref){if(!(e[c].substituted&&e[c].isLigated&&!e[c].isMultiplied)){for(u=c;u<i&&at(e[u]);)u++;e[u].shaperInfo.position=B.BASE_C,l=false;}break}}if(t.unicodeScript==="Malayalam")for(let c=u+1;c<i;c++){for(;c<i&&$e(e[c]);)c++;if(c===i||!at(e[c]))break;for(c++;c<i&&$e(e[c]);)c++;c<i&&Vt(e[c])&&e[c].shaperInfo.position===B.Below_C&&(u=c,e[u].shaperInfo.position=B.Base_C);}a<u&&e[u].shaperInfo.position>B.Base_C&&u--;break}if(u===i&&a<u&&e[u-1].shaperInfo.category===z.ZWJ&&u--,u<i)for(;a<u&&e[u].shaperInfo.category&(z.N|y0);)u--;if(a+1<i&&a<u){let c=u===i?u-2:u-1;if(t.unicodeScript!=="Malayalam"&&t.unicodeScript!=="Tamil"){for(;c>a&&!(e[c].shaperInfo.category&(z.M|y0));)c--;at(e[c])&&e[c].shaperInfo.position!==B.Pre_M?c+1<i&&$e(e[c+1])&&c++:c=a;}if(a<c&&e[c].shaperInfo.position!==B.Pre_M){for(let f=c;f>a;f--)if(e[f-1].shaperInfo.position===B.Pre_M){let h=f-1;h<u&&u<=c&&u--;let v=e[h];e.splice(h,0,...e.splice(h+1,c-h)),e[c]=v,c--;}}}if(a+1<i&&e[a].shaperInfo.position===B.Ra_To_Become_Reph&&e[a].shaperInfo.category===z.Repha!==(e[a].isLigated&&!e[a].isMultiplied)){let c,f=r.rephPos,h=false;if(f!==B.After_Post){for(c=a+1;c<u&&!at(e[c]);)c++;if(c<u&&at(e[c])&&(c+1<u&&$e(e[c+1])&&c++,h=true),!h&&f===B.After_Main){for(c=u;c+1<i&&e[c+1].shaperInfo.position<=B.After_Main;)c++;h=c<i;}if(!h&&f===B.After_Sub){for(c=u;c+1<i&&!(e[c+1].shaperInfo.position&(B.Post_C|B.After_Post|B.SMVD));)c++;h=c<i;}}if(!h){for(c=a+1;c<u&&!at(e[c]);)c++;c<u&&at(e[c])&&(c+1<u&&$e(e[c+1])&&c++,h=true);}if(!h){for(c=i-1;c>a&&e[c].shaperInfo.position===B.SMVD;)c--;if(at(e[c]))for(let y=u+1;y<c;y++)e[y].shaperInfo.category===z.M&&c--;}let v=e[a];e.splice(a,0,...e.splice(a+1,c-a)),e[c]=v,a<u&&u<=c&&u--;}if(l&&u+1<i){for(let c=u+1;c<i;c++)if(e[c].features.pref){if(e[c].isLigated&&!e[c].isMultiplied){let f=u;if(t.unicodeScript!=="Malayalam"&&t.unicodeScript!=="Tamil"){for(;f>a&&!(e[f-1].shaperInfo.category&(z.M|y0));)f--;if(f>a&&e[f-1].shaperInfo.category===z.M){let y=c;for(let C=u+1;C<y;C++)if(e[C].shaperInfo.category===z.M){f--;break}}}f>a&&at(e[f-1])&&f<i&&$e(e[f])&&f++;let h=c,v=e[h];e.splice(f+1,0,...e.splice(f,h-f)),e[f]=v,f<=u&&u<h&&u++;}break}}e[a].shaperInfo.position===B.Pre_M&&(!a||!/Cf|Mn/.test(h0(e[a-1].codePoints[0])))&&(e[a].features.init=true);}}function hr(n,e){if(e>=n.length)return e;let t=n[e].shaperInfo.syllable;for(;++e<n.length&&n[e].shaperInfo.syllable===t;);return e}var{categories:sh,decompositions:ei}=mr(Cr),nh=new gr.default(un("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")),ah=new nn.default(mr(Cr)),U=class extends _e{static planFeatures(e){e.addStage(ih),e.addStage(["locl","ccmp","nukt","akhn"]),e.addStage(ri),e.addStage(["rphf"],false),e.addStage(oh),e.addStage(ri),e.addStage(["pref"]),e.addStage(lh),e.addStage(["rkrf","abvf","blwf","half","pstf","vatu","cjct"]),e.addStage(uh),e.addStage(["abvs","blws","pres","psts","dist","abvm","blwm"]);}static assignFeatures(e,t){for(let r=t.length-1;r>=0;r--){let s=t[r].codePoints[0];if(ei[s]){let a=ei[s].map(i=>{let l=e.font.glyphForCodePoint(i);return new Ge(e.font,l.id,[i],t[r].features)});t.splice(r,1,...a);}}}};ye(U,"zeroMarkWidths","BEFORE_GPOS");function ti(n){return nh.get(n.codePoints[0])}var Gs=class{constructor(e,t,r){this.category=e,this.syllableType=t,this.syllable=r;}};function ih(n,e){let t=0;for(let[r,s,a]of ah.match(e.map(ti))){++t;for(let l=r;l<=s;l++)e[l].shaperInfo=new Gs(sh[ti(e[l])],a[0],t);let i=e[r].shaperInfo.category==="R"?1:Math.min(3,s-r);for(let l=r;l<r+i;l++)e[l].features.rphf=true;}}function ri(n,e){for(let t of e)t.substituted=false;}function oh(n,e){for(let t of e)t.substituted&&t.features.rphf&&(t.shaperInfo.category="R");}function lh(n,e){for(let t of e)t.substituted&&(t.shaperInfo.category="VPre");}function uh(n,e){let t=n.glyphForCodePoint(9676).id;for(let r=0,s=si(e,0);r<e.length;r=s,s=si(e,r)){let a,i,l=e[r].shaperInfo,u=l.syllableType;if(!(u!=="virama_terminated_cluster"&&u!=="standard_cluster"&&u!=="broken_cluster")){if(u==="broken_cluster"&&t){let c=new Ge(n,t,[9676]);for(c.shaperInfo=l,a=r;a<s&&e[a].shaperInfo.category==="R";a++);e.splice(++a,0,c),s++;}if(l.category==="R"&&s-r>1){for(a=r+1;a<s;a++)if(l=e[a].shaperInfo,ni(l)||j0(e[a])){j0(e[a])&&a--,e.splice(r,0,...e.splice(r+1,a-r),e[a]);break}}for(a=r,i=s;a<s;a++)l=e[a].shaperInfo,ni(l)||j0(e[a])?i=j0(e[a])?a+1:a:(l.category==="VPre"||l.category==="VMPre")&&i<a&&e.splice(i,1,e[a],...e.splice(i,a-i));}}}function si(n,e){if(e>=n.length)return e;let t=n[e].shaperInfo.syllable;for(;++e<n.length&&n[e].shaperInfo.syllable===t;);return e}function j0(n){return n.shaperInfo.category==="H"&&!n.isLigated}function ni(n){return n.category==="B"||n.category==="GB"}var ch={arab:Je,mong:Je,syrc:Je,"nko ":Je,phag:Je,mand:Je,mani:Je,phlp:Je,hang:or,bng2:ne,beng:ne,dev2:ne,deva:ne,gjr2:ne,gujr:ne,guru:ne,gur2:ne,knda:ne,knd2:ne,mlm2:ne,mlym:ne,ory2:ne,orya:ne,taml:ne,tml2:ne,telu:ne,tel2:ne,khmr:ne,bali:U,batk:U,brah:U,bugi:U,buhd:U,cakm:U,cham:U,dupl:U,egyp:U,gran:U,hano:U,java:U,kthi:U,kali:U,khar:U,khoj:U,sind:U,lepc:U,limb:U,mahj:U,mtei:U,modi:U,hmng:U,rjng:U,saur:U,shrd:U,sidd:U,sinh:ne,sund:U,sylo:U,tglg:U,tagb:U,tale:U,lana:U,tavt:U,takr:U,tibt:U,tfng:U,tirh:U,latn:_e,DFLT:_e};function fh(n){Array.isArray(n)||(n=[n]);for(let e of n){let t=ch[e];if(t)return t}return _e}var zs=class extends s0{applyLookup(e,t){switch(e){case 1:{let s=this.coverageIndex(t.coverage);if(s===-1)return  false;let a=this.glyphIterator.cur;switch(t.version){case 1:a.id=a.id+t.deltaGlyphID&65535;break;case 2:a.id=t.substitute.get(s);break}return  true}case 2:{let s=this.coverageIndex(t.coverage);if(s!==-1){let a=t.sequences.get(s);if(a.length===0)return this.glyphs.splice(this.glyphIterator.index,1),true;this.glyphIterator.cur.id=a[0],this.glyphIterator.cur.ligatureComponent=0;let i=this.glyphIterator.cur.features,l=this.glyphIterator.cur,u=a.slice(1).map((c,f)=>{let h=new Ge(this.font,c,void 0,i);return h.shaperInfo=l.shaperInfo,h.isLigated=l.isLigated,h.ligatureComponent=f+1,h.substituted=true,h.isMultiplied=true,h});return this.glyphs.splice(this.glyphIterator.index+1,0,...u),true}return  false}case 3:{let s=this.coverageIndex(t.coverage);if(s!==-1){let a=0;return this.glyphIterator.cur.id=t.alternateSet.get(s)[a],true}return  false}case 4:{let s=this.coverageIndex(t.coverage);if(s===-1)return  false;for(let a of t.ligatureSets.get(s)){let i=this.sequenceMatchIndices(1,a.components);if(!i)continue;let l=this.glyphIterator.cur,u=l.codePoints.slice();for(let O of i)u.push(...this.glyphs[O].codePoints);let c=new Ge(this.font,a.glyph,u,l.features);c.shaperInfo=l.shaperInfo,c.isLigated=true,c.substituted=true;let f=l.isMark;for(let O=0;O<i.length&&f;O++)f=this.glyphs[i[O]].isMark;c.ligatureID=f?null:this.ligatureID++;let h=l.ligatureID,v=l.codePoints.length,y=v,C=this.glyphIterator.index+1;for(let O of i){if(f)C=O;else for(;C<O;){var r=y-v+Math.min(this.glyphs[C].ligatureComponent||1,v);this.glyphs[C].ligatureID=c.ligatureID,this.glyphs[C].ligatureComponent=r,C++;}h=this.glyphs[C].ligatureID,v=this.glyphs[C].codePoints.length,y+=v,C++;}if(h&&!f)for(let O=C;O<this.glyphs.length&&this.glyphs[O].ligatureID===h;O++){var r=y-v+Math.min(this.glyphs[O].ligatureComponent||1,v);this.glyphs[O].ligatureComponent=r;}for(let O=i.length-1;O>=0;O--)this.glyphs.splice(i[O],1);return this.glyphs[this.glyphIterator.index]=c,true}return  false}case 5:return this.applyContext(t);case 6:return this.applyChainingContext(t);case 7:return this.applyLookup(t.lookupType,t.extension);default:throw new Error(`GSUB lookupType ${e} is not supported`)}}},Ws=class extends s0{applyPositionValue(e,t){let r=this.positions[this.glyphIterator.peekIndex(e)];t.xAdvance!=null&&(r.xAdvance+=t.xAdvance),t.yAdvance!=null&&(r.yAdvance+=t.yAdvance),t.xPlacement!=null&&(r.xOffset+=t.xPlacement),t.yPlacement!=null&&(r.yOffset+=t.yPlacement);let s=this.font._variationProcessor,a=this.font.GDEF&&this.font.GDEF.itemVariationStore;s&&a&&(t.xPlaDevice&&(r.xOffset+=s.getDelta(a,t.xPlaDevice.a,t.xPlaDevice.b)),t.yPlaDevice&&(r.yOffset+=s.getDelta(a,t.yPlaDevice.a,t.yPlaDevice.b)),t.xAdvDevice&&(r.xAdvance+=s.getDelta(a,t.xAdvDevice.a,t.xAdvDevice.b)),t.yAdvDevice&&(r.yAdvance+=s.getDelta(a,t.yAdvDevice.a,t.yAdvDevice.b)));}applyLookup(e,t){switch(e){case 1:{let s=this.coverageIndex(t.coverage);if(s===-1)return  false;switch(t.version){case 1:this.applyPositionValue(0,t.value);break;case 2:this.applyPositionValue(0,t.values.get(s));break}return  true}case 2:{let s=this.glyphIterator.peek();if(!s)return  false;let a=this.coverageIndex(t.coverage);if(a===-1)return  false;switch(t.version){case 1:let i=t.pairSets.get(a);for(let c of i)if(c.secondGlyph===s.id)return this.applyPositionValue(0,c.value1),this.applyPositionValue(1,c.value2),true;return  false;case 2:let l=this.getClassID(this.glyphIterator.cur.id,t.classDef1),u=this.getClassID(s.id,t.classDef2);if(l===-1||u===-1)return  false;var r=t.classRecords.get(l).get(u);return this.applyPositionValue(0,r.value1),this.applyPositionValue(1,r.value2),true}}case 3:{let s=this.glyphIterator.peekIndex(),a=this.glyphs[s];if(!a)return  false;let i=t.entryExitRecords[this.coverageIndex(t.coverage)];if(!i||!i.exitAnchor)return  false;let l=t.entryExitRecords[this.coverageIndex(t.coverage,a.id)];if(!l||!l.entryAnchor)return  false;let u=this.getAnchor(l.entryAnchor),c=this.getAnchor(i.exitAnchor),f=this.positions[this.glyphIterator.index],h=this.positions[s],v;switch(this.direction){case "ltr":f.xAdvance=c.x+f.xOffset,v=u.x+h.xOffset,h.xAdvance-=v,h.xOffset-=v;break;case "rtl":v=c.x+f.xOffset,f.xAdvance-=v,f.xOffset-=v,h.xAdvance=u.x+h.xOffset;break}return this.glyphIterator.flags.rightToLeft?(this.glyphIterator.cur.cursiveAttachment=s,f.yOffset=u.y-c.y):(a.cursiveAttachment=this.glyphIterator.index,f.yOffset=c.y-u.y),true}case 4:{let s=this.coverageIndex(t.markCoverage);if(s===-1)return  false;let a=this.glyphIterator.index;for(;--a>=0&&(this.glyphs[a].isMark||this.glyphs[a].ligatureComponent>0););if(a<0)return  false;let i=this.coverageIndex(t.baseCoverage,this.glyphs[a].id);if(i===-1)return  false;let l=t.markArray[s],u=t.baseArray[i][l.class];return this.applyAnchor(l,u,a),true}case 5:{let s=this.coverageIndex(t.markCoverage);if(s===-1)return  false;let a=this.glyphIterator.index;for(;--a>=0&&this.glyphs[a].isMark;);if(a<0)return  false;let i=this.coverageIndex(t.ligatureCoverage,this.glyphs[a].id);if(i===-1)return  false;let l=t.ligatureArray[i],u=this.glyphIterator.cur,c=this.glyphs[a],f=c.ligatureID&&c.ligatureID===u.ligatureID&&u.ligatureComponent>0?Math.min(u.ligatureComponent,c.codePoints.length)-1:c.codePoints.length-1,h=t.markArray[s],v=l[f][h.class];return this.applyAnchor(h,v,a),true}case 6:{let s=this.coverageIndex(t.mark1Coverage);if(s===-1)return  false;let a=this.glyphIterator.peekIndex(-1),i=this.glyphs[a];if(!i||!i.isMark)return  false;let l=this.glyphIterator.cur,u=false;if(l.ligatureID===i.ligatureID?l.ligatureID?l.ligatureComponent===i.ligatureComponent&&(u=true):u=true:(l.ligatureID&&!l.ligatureComponent||i.ligatureID&&!i.ligatureComponent)&&(u=true),!u)return  false;let c=this.coverageIndex(t.mark2Coverage,i.id);if(c===-1)return  false;let f=t.mark1Array[s],h=t.mark2Array[c][f.class];return this.applyAnchor(f,h,a),true}case 7:return this.applyContext(t);case 8:return this.applyChainingContext(t);case 9:return this.applyLookup(t.lookupType,t.extension);default:throw new Error(`Unsupported GPOS table: ${e}`)}}applyAnchor(e,t,r){let s=this.getAnchor(t),a=this.getAnchor(e.markAnchor);this.positions[r];let l=this.positions[this.glyphIterator.index];l.xOffset=s.x-a.x,l.yOffset=s.y-a.y,this.glyphIterator.cur.markAttachment=r;}getAnchor(e){let t=e.xCoordinate,r=e.yCoordinate,s=this.font._variationProcessor,a=this.font.GDEF&&this.font.GDEF.itemVariationStore;return s&&a&&(e.xDeviceTable&&(t+=s.getDelta(a,e.xDeviceTable.a,e.xDeviceTable.b)),e.yDeviceTable&&(r+=s.getDelta(a,e.yDeviceTable.a,e.yDeviceTable.b))),{x:t,y:r}}applyFeatures(e,t,r){super.applyFeatures(e,t,r);for(var s=0;s<this.glyphs.length;s++)this.fixCursiveAttachment(s);this.fixMarkAttachment();}fixCursiveAttachment(e){let t=this.glyphs[e];if(t.cursiveAttachment!=null){let r=t.cursiveAttachment;t.cursiveAttachment=null,this.fixCursiveAttachment(r),this.positions[e].yOffset+=this.positions[r].yOffset;}}fixMarkAttachment(){for(let e=0;e<this.glyphs.length;e++){let t=this.glyphs[e];if(t.markAttachment!=null){let r=t.markAttachment;if(this.positions[e].xOffset+=this.positions[r].xOffset,this.positions[e].yOffset+=this.positions[r].yOffset,this.direction==="ltr")for(let s=r;s<e;s++)this.positions[e].xOffset-=this.positions[s].xAdvance,this.positions[e].yOffset-=this.positions[s].yAdvance;else for(let s=r+1;s<e+1;s++)this.positions[e].xOffset+=this.positions[s].xAdvance,this.positions[e].yOffset+=this.positions[s].yAdvance;}}}},Hs=class{setup(e){this.glyphInfos=e.glyphs.map(r=>new Ge(this.font,r.id,[...r.codePoints]));let t=null;this.GPOSProcessor&&(t=this.GPOSProcessor.selectScript(e.script,e.language,e.direction)),this.GSUBProcessor&&(t=this.GSUBProcessor.selectScript(e.script,e.language,e.direction)),this.shaper=fh(t),this.plan=new Ls(this.font,t,e.direction),this.shaper.plan(this.plan,this.glyphInfos,e.features);for(let r in this.plan.allFeatures)e.features[r]=true;}substitute(e){this.GSUBProcessor&&(this.plan.process(this.GSUBProcessor,this.glyphInfos),e.glyphs=this.glyphInfos.map(t=>this.font.getGlyph(t.id,t.codePoints)));}position(e){return this.shaper.zeroMarkWidths==="BEFORE_GPOS"&&this.zeroMarkAdvances(e.positions),this.GPOSProcessor&&this.plan.process(this.GPOSProcessor,this.glyphInfos,e.positions),this.shaper.zeroMarkWidths==="AFTER_GPOS"&&this.zeroMarkAdvances(e.positions),e.direction==="rtl"&&(e.glyphs.reverse(),e.positions.reverse()),this.GPOSProcessor&&this.GPOSProcessor.features}zeroMarkAdvances(e){for(let t=0;t<this.glyphInfos.length;t++)this.glyphInfos[t].isMark&&(e[t].xAdvance=0,e[t].yAdvance=0);}cleanup(){this.glyphInfos=null,this.plan=null,this.shaper=null;}getAvailableFeatures(e,t){let r=[];return this.GSUBProcessor&&(this.GSUBProcessor.selectScript(e,t),r.push(...Object.keys(this.GSUBProcessor.features))),this.GPOSProcessor&&(this.GPOSProcessor.selectScript(e,t),r.push(...Object.keys(this.GPOSProcessor.features))),r}constructor(e){this.font=e,this.glyphInfos=null,this.plan=null,this.GSUBProcessor=null,this.GPOSProcessor=null,this.fallbackPosition=true,e.GSUB&&(this.GSUBProcessor=new zs(e,e.GSUB)),e.GPOS&&(this.GPOSProcessor=new Ws(e,e.GPOS));}},qs=class{layout(e,t,r,s,a){if(typeof t=="string"&&(a=s,s=r,r=t,t=[]),typeof e=="string"){r==null&&(r=$f(e));var i=this.font.glyphsForString(e);}else {if(r==null){let c=[];for(let f of e)c.push(...f.codePoints);r=_f(c);}var i=e;}let l=new Ps(i,t,r,s,a);return i.length===0?(l.positions=[],l):(this.engine&&this.engine.setup&&this.engine.setup(l),this.substitute(l),this.position(l),this.hideDefaultIgnorables(l.glyphs,l.positions),this.engine&&this.engine.cleanup&&this.engine.cleanup(),l)}substitute(e){this.engine&&this.engine.substitute&&this.engine.substitute(e);}position(e){e.positions=e.glyphs.map(r=>new Ts(r.advanceWidth));let t=null;this.engine&&this.engine.position&&(t=this.engine.position(e)),!t&&(!this.engine||this.engine.fallbackPosition)&&(this.unicodeLayoutEngine||(this.unicodeLayoutEngine=new Es(this.font)),this.unicodeLayoutEngine.positionGlyphs(e.glyphs,e.positions)),(!t||!t.kern)&&e.features.kern!==false&&this.font.kern&&(this.kernProcessor||(this.kernProcessor=new Is(this.font)),this.kernProcessor.process(e.glyphs,e.positions),e.features.kern=true);}hideDefaultIgnorables(e,t){let r=this.font.glyphForCodePoint(32);for(let s=0;s<e.length;s++)this.isDefaultIgnorable(e[s].codePoints[0])&&(e[s]=r,t[s].xAdvance=0,t[s].yAdvance=0);}isDefaultIgnorable(e){let t=e>>16;if(t===0)switch(e>>8){case 0:return e===173;case 3:return e===847;case 6:return e===1564;case 23:return 6068<=e&&e<=6069;case 24:return 6155<=e&&e<=6158;case 32:return 8203<=e&&e<=8207||8234<=e&&e<=8238||8288<=e&&e<=8303;case 254:return 65024<=e&&e<=65039||e===65279;case 255:return 65520<=e&&e<=65528;default:return  false}else switch(t){case 1:return 113824<=e&&e<=113827||119155<=e&&e<=119162;case 14:return 917504<=e&&e<=921599;default:return  false}}getAvailableFeatures(e,t){let r=[];return this.engine&&r.push(...this.engine.getAvailableFeatures(e,t)),this.font.kern&&r.indexOf("kern")===-1&&r.push("kern"),r}stringsForGlyph(e){let t=new Set,r=this.font._cmapProcessor.codePointsForGlyph(e);for(let s of r)t.add(String.fromCodePoint(s));if(this.engine&&this.engine.stringsForGlyph)for(let s of this.engine.stringsForGlyph(e))t.add(s);return Array.from(t)}constructor(e){this.font=e,this.unicodeLayoutEngine=null,this.kernProcessor=null,this.font.morx?this.engine=new Ds(this.font):(this.font.GSUB||this.font.GPOS)&&(this.engine=new Hs(this.font));}},hh={moveTo:"M",lineTo:"L",quadraticCurveTo:"Q",bezierCurveTo:"C",closePath:"Z"},a0=class n{toFunction(){return e=>{this.commands.forEach(t=>e[t.command].apply(e,t.args));}}toSVG(){return this.commands.map(t=>{let r=t.args.map(s=>Math.round(s*100)/100);return `${hh[t.command]}${r.join(" ")}`}).join("")}get cbox(){if(!this._cbox){let e=new Ot;for(let t of this.commands)for(let r=0;r<t.args.length;r+=2)e.addPoint(t.args[r],t.args[r+1]);this._cbox=Object.freeze(e);}return this._cbox}get bbox(){if(this._bbox)return this._bbox;let e=new Ot,t=0,r=0,s=T=>Math.pow(1-T,3)*y[E]+3*Math.pow(1-T,2)*T*C[E]+3*(1-T)*Math.pow(T,2)*O[E]+Math.pow(T,3)*D[E];for(let T of this.commands)switch(T.command){case "moveTo":case "lineTo":let[p,P]=T.args;e.addPoint(p,P),t=p,r=P;break;case "quadraticCurveTo":case "bezierCurveTo":if(T.command==="quadraticCurveTo")var[a,i,h,v]=T.args,l=t+2/3*(a-t),u=r+2/3*(i-r),c=h+2/3*(a-h),f=v+2/3*(i-v);else var[l,u,c,f,h,v]=T.args;e.addPoint(h,v);for(var y=[t,r],C=[l,u],O=[c,f],D=[h,v],E=0;E<=1;E++){let I=6*y[E]-12*C[E]+6*O[E],N=-3*y[E]+9*C[E]-9*O[E]+3*D[E];if(T=3*C[E]-3*y[E],N===0){if(I===0)continue;let V=-T/I;0<V&&V<1&&(E===0?e.addPoint(s(V),e.maxY):E===1&&e.addPoint(e.maxX,s(V)));continue}let te=Math.pow(I,2)-4*T*N;if(te<0)continue;let L=(-I+Math.sqrt(te))/(2*N);0<L&&L<1&&(E===0?e.addPoint(s(L),e.maxY):E===1&&e.addPoint(e.maxX,s(L)));let Q=(-I-Math.sqrt(te))/(2*N);0<Q&&Q<1&&(E===0?e.addPoint(s(Q),e.maxY):E===1&&e.addPoint(e.maxX,s(Q)));}t=h,r=v;break}return this._bbox=Object.freeze(e)}mapPoints(e){let t=new n;for(let r of this.commands){let s=[];for(let a=0;a<r.args.length;a+=2){let[i,l]=e(r.args[a],r.args[a+1]);s.push(i,l);}t[r.command](...s);}return t}transform(e,t,r,s,a,i){return this.mapPoints((l,u)=>{let c=e*l+r*u+a,f=t*l+s*u+i;return [c,f]})}translate(e,t){return this.transform(1,0,0,1,e,t)}rotate(e){let t=Math.cos(e),r=Math.sin(e);return this.transform(t,r,-r,t,0,0)}scale(e,t=e){return this.transform(e,0,0,t,0,0)}constructor(){this.commands=[],this._bbox=null,this._cbox=null;}};for(let n of ["moveTo","lineTo","quadraticCurveTo","bezierCurveTo","closePath"])a0.prototype[n]=function(...e){return this._bbox=this._cbox=null,this.commands.push({command:n,args:e}),this};var b0=[".notdef",".null","nonmarkingreturn","space","exclam","quotedbl","numbersign","dollar","percent","ampersand","quotesingle","parenleft","parenright","asterisk","plus","comma","hyphen","period","slash","zero","one","two","three","four","five","six","seven","eight","nine","colon","semicolon","less","equal","greater","question","at","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","bracketleft","backslash","bracketright","asciicircum","underscore","grave","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","braceleft","bar","braceright","asciitilde","Adieresis","Aring","Ccedilla","Eacute","Ntilde","Odieresis","Udieresis","aacute","agrave","acircumflex","adieresis","atilde","aring","ccedilla","eacute","egrave","ecircumflex","edieresis","iacute","igrave","icircumflex","idieresis","ntilde","oacute","ograve","ocircumflex","odieresis","otilde","uacute","ugrave","ucircumflex","udieresis","dagger","degree","cent","sterling","section","bullet","paragraph","germandbls","registered","copyright","trademark","acute","dieresis","notequal","AE","Oslash","infinity","plusminus","lessequal","greaterequal","yen","mu","partialdiff","summation","product","pi","integral","ordfeminine","ordmasculine","Omega","ae","oslash","questiondown","exclamdown","logicalnot","radical","florin","approxequal","Delta","guillemotleft","guillemotright","ellipsis","nonbreakingspace","Agrave","Atilde","Otilde","OE","oe","endash","emdash","quotedblleft","quotedblright","quoteleft","quoteright","divide","lozenge","ydieresis","Ydieresis","fraction","currency","guilsinglleft","guilsinglright","fi","fl","daggerdbl","periodcentered","quotesinglbase","quotedblbase","perthousand","Acircumflex","Ecircumflex","Aacute","Edieresis","Egrave","Iacute","Icircumflex","Idieresis","Igrave","Oacute","Ocircumflex","apple","Ograve","Uacute","Ucircumflex","Ugrave","dotlessi","circumflex","tilde","macron","breve","dotaccent","ring","cedilla","hungarumlaut","ogonek","caron","Lslash","lslash","Scaron","scaron","Zcaron","zcaron","brokenbar","Eth","eth","Yacute","yacute","Thorn","thorn","minus","multiply","onesuperior","twosuperior","threesuperior","onehalf","onequarter","threequarters","franc","Gbreve","gbreve","Idotaccent","Scedilla","scedilla","Cacute","cacute","Ccaron","ccaron","dcroat"],Me=class{_getPath(){return new a0}_getCBox(){return this.path.cbox}_getBBox(){return this.path.bbox}_getTableMetrics(e){if(this.id<e.metrics.length)return e.metrics.get(this.id);let t=e.metrics.get(e.metrics.length-1);return {advance:t?t.advance:0,bearing:e.bearings.get(this.id-e.metrics.length)||0}}_getMetrics(e){if(this._metrics)return this._metrics;let{advance:t,bearing:r}=this._getTableMetrics(this._font.hmtx);if(this._font.vmtx)var{advance:s,bearing:a}=this._getTableMetrics(this._font.vmtx);else {let i;if((typeof e>"u"||e===null)&&({cbox:e}=this),(i=this._font["OS/2"])&&i.version>0)var s=Math.abs(i.typoAscender-i.typoDescender),a=i.typoAscender-e.maxY;else {let{hhea:l}=this._font;var s=Math.abs(l.ascent-l.descent),a=l.ascent-e.maxY;}}return this._font._variationProcessor&&this._font.HVAR&&(t+=this._font._variationProcessor.getAdvanceAdjustment(this.id,this._font.HVAR)),this._metrics={advanceWidth:t,advanceHeight:s,leftBearing:r,topBearing:a}}get cbox(){return this._getCBox()}get bbox(){return this._getBBox()}get path(){return this._getPath()}getScaledPath(e){let t=1/this._font.unitsPerEm*e;return this.path.scale(t)}get advanceWidth(){return this._getMetrics().advanceWidth}get advanceHeight(){return this._getMetrics().advanceHeight}get ligatureCaretPositions(){}_getName(){let{post:e}=this._font;if(!e)return null;switch(e.version){case 1:return b0[this.id];case 2:let t=e.glyphNameIndex[this.id];return t<b0.length?b0[t]:e.names[t-b0.length];case 2.5:return b0[this.id+e.offsets[this.id]];case 4:return String.fromCharCode(e.map[this.id])}}get name(){return this._getName()}render(e,t){e.save();let r=1/this._font.head.unitsPerEm*t;e.scale(r,r),this.path.toFunction()(e),e.fill(),e.restore();}constructor(e,t,r){this.id=e,this.codePoints=t,this._font=r,this.isMark=this.codePoints.length>0&&this.codePoints.every(Xr),this.isLigature=this.codePoints.length>1;}};le([ge],Me.prototype,"cbox",null);le([ge],Me.prototype,"bbox",null);le([ge],Me.prototype,"path",null);le([ge],Me.prototype,"advanceWidth",null);le([ge],Me.prototype,"advanceHeight",null);le([ge],Me.prototype,"name",null);var ai=new m({numberOfContours:w,xMin:w,yMin:w,xMax:w,yMax:w}),dh=1,ph=2,bh=4,gh=8,mh=16,vh=32,xh=1;var wh=8,ii=32,yh=64,Ch=128,Sh=256;var Ve=class n{copy(){return new n(this.onCurve,this.endContour,this.x,this.y)}constructor(e,t,r=0,s=0){this.onCurve=e,this.endContour=t,this.x=r,this.y=s;}},Xs=class{constructor(e,t,r){this.glyphID=e,this.dx=t,this.dy=r,this.pos=0,this.scaleX=this.scaleY=1,this.scale01=this.scale10=0;}},i0=class extends Me{_getCBox(e){if(this._font._variationProcessor&&!e)return this.path.cbox;let t=this._font._getTableStream("glyf");t.pos+=this._font.loca.offsets[this.id];let r=ai.decode(t),s=new Ot(r.xMin,r.yMin,r.xMax,r.yMax);return Object.freeze(s)}_parseGlyphCoord(e,t,r,s){if(r){var a=e.readUInt8();s||(a=-a),a+=t;}else if(s)var a=t;else var a=t+e.readInt16BE();return a}_decode(){let e=this._font.loca.offsets[this.id],t=this._font.loca.offsets[this.id+1];if(e===t)return null;let r=this._font._getTableStream("glyf");r.pos+=e;let s=r.pos,a=ai.decode(r);return a.numberOfContours>0?this._decodeSimple(a,r):a.numberOfContours<0&&this._decodeComposite(a,r,s),a}_decodeSimple(e,t){e.points=[];let r=new d(o,e.numberOfContours).decode(t);e.instructions=new d(S,o).decode(t);let s=[],a=r[r.length-1]+1;for(;s.length<a;){var i=t.readUInt8();if(s.push(i),i&gh){let f=t.readUInt8();for(let h=0;h<f;h++)s.push(i);}}for(var l=0;l<s.length;l++){var i=s[l];let h=new Ve(!!(i&dh),r.indexOf(l)>=0,0,0);e.points.push(h);}let u=0;for(var l=0;l<s.length;l++){var i=s[l];e.points[l].x=u=this._parseGlyphCoord(t,u,i&ph,i&mh);}let c=0;for(var l=0;l<s.length;l++){var i=s[l];e.points[l].y=c=this._parseGlyphCoord(t,c,i&bh,i&vh);}if(this._font._variationProcessor){let f=e.points.slice();f.push(...this._getPhantomPoints(e)),this._font._variationProcessor.transformPoints(this.id,f),e.phantomPoints=f.slice(-4);}}_decodeComposite(e,t,r=0){e.components=[];let s=false,a=ii;for(;a&ii;){a=t.readUInt16BE();let c=t.pos-r,f=t.readUInt16BE();if(s||(s=(a&Sh)!==0),a&xh)var i=t.readInt16BE(),l=t.readInt16BE();else var i=t.readInt8(),l=t.readInt8();var u=new Xs(f,i,l);u.pos=c,a&wh?u.scaleX=u.scaleY=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824:a&yh?(u.scaleX=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824,u.scaleY=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824):a&Ch&&(u.scaleX=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824,u.scale01=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824,u.scale10=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824,u.scaleY=(t.readUInt8()<<24|t.readUInt8()<<16)/1073741824),e.components.push(u);}if(this._font._variationProcessor){let c=[];for(let f=0;f<e.components.length;f++){var u=e.components[f];c.push(new Ve(true,true,u.dx,u.dy));}c.push(...this._getPhantomPoints(e)),this._font._variationProcessor.transformPoints(this.id,c),e.phantomPoints=c.splice(-4,4);for(let f=0;f<c.length;f++){let h=c[f];e.components[f].dx=h.x,e.components[f].dy=h.y;}}return s}_getPhantomPoints(e){let t=this._getCBox(true);this._metrics==null&&(this._metrics=Me.prototype._getMetrics.call(this,t));let{advanceWidth:r,advanceHeight:s,leftBearing:a,topBearing:i}=this._metrics;return [new Ve(false,true,e.xMin-a,0),new Ve(false,true,e.xMin-a+r,0),new Ve(false,true,0,e.yMax+i),new Ve(false,true,0,e.yMax+i+s)]}_getContours(){let e=this._decode();if(!e)return [];let t=[];if(e.numberOfContours<0)for(let i of e.components){let l=this._font.getGlyph(i.glyphID)._getContours();for(let u=0;u<l.length;u++){let c=l[u];for(let f=0;f<c.length;f++){let h=c[f],v=h.x*i.scaleX+h.y*i.scale01+i.dx,y=h.y*i.scaleY+h.x*i.scale10+i.dy;t.push(new Ve(h.onCurve,h.endContour,v,y));}}}else t=e.points||[];e.phantomPoints&&!this._font.directory.tables.HVAR&&(this._metrics.advanceWidth=e.phantomPoints[1].x-e.phantomPoints[0].x,this._metrics.advanceHeight=e.phantomPoints[3].y-e.phantomPoints[2].y,this._metrics.leftBearing=e.xMin-e.phantomPoints[0].x,this._metrics.topBearing=e.phantomPoints[2].y-e.yMax);let r=[],s=[];for(let i=0;i<t.length;i++){var a=t[i];s.push(a),a.endContour&&(r.push(s),s=[]);}return r}_getMetrics(){if(this._metrics)return this._metrics;let e=this._getCBox(true);return super._getMetrics(e),this._font._variationProcessor&&!this._font.HVAR&&this.path,this._metrics}_getPath(){let e=this._getContours(),t=new a0;for(let s=0;s<e.length;s++){let a=e[s],i=a[0],l=a[a.length-1],u=0;if(i.onCurve){var r=null;u=1;}else {l.onCurve?i=l:i=new Ve(false,false,(i.x+l.x)/2,(i.y+l.y)/2);var r=i;}t.moveTo(i.x,i.y);for(let c=u;c<a.length;c++){let f=a[c],h=c===0?i:a[c-1];if(h.onCurve&&f.onCurve)t.lineTo(f.x,f.y);else if(h.onCurve&&!f.onCurve)var r=f;else if(!h.onCurve&&!f.onCurve){let y=(h.x+f.x)/2,C=(h.y+f.y)/2;t.quadraticCurveTo(h.x,h.y,y,C);var r=f;}else if(!h.onCurve&&f.onCurve){t.quadraticCurveTo(r.x,r.y,f.x,f.y);var r=null;}else throw new Error("Unknown TTF path state")}r&&t.quadraticCurveTo(r.x,r.y,i.x,i.y),t.closePath();}return t}constructor(...e){super(...e),ye(this,"type","TTF");}},js=class extends Me{_getName(){return this._font.CFF2?super._getName():this._font["CFF "].getGlyphName(this.id)}bias(e){return e.length<1240?107:e.length<33900?1131:32768}_getPath(){let e=this._font.CFF2||this._font["CFF "],{stream:t}=e,r=e.topDict.CharStrings[this.id],s=r.offset+r.length;t.pos=r.offset;let a=new a0,i=[],l=[],u=null,c=0,f=0,h=0,v,y,C=false;this._usedGsubrs=v={},this._usedSubrs=y={};let O=e.globalSubrIndex||[],D=this.bias(O),E=e.privateDictForGlyph(this.id)||{},T=E.Subrs||[],p=this.bias(T),P=e.topDict.vstore&&e.topDict.vstore.itemVariationStore,I=E.vsindex,N=this._font._variationProcessor;function te(){u==null&&(u=i.shift()+E.nominalWidthX);}function L(){return i.length%2!==0&&te(),c+=i.length>>1,i.length=0}function Q(ce,ae){C&&a.closePath(),a.moveTo(ce,ae),C=true;}let V=function(){for(;t.pos<s;){let be=t.readUInt8();if(be<32){let Qe,Ee,Ne;switch(be){case 1:case 3:case 18:case 23:L();break;case 4:i.length>1&&te(),h+=i.shift(),Q(f,h);break;case 5:for(;i.length>=2;)f+=i.shift(),h+=i.shift(),a.lineTo(f,h);break;case 6:case 7:for(Ne=be===6;i.length>=1;)Ne?f+=i.shift():h+=i.shift(),a.lineTo(f,h),Ne=!Ne;break;case 8:for(;i.length>0;){var H=f+i.shift(),W=h+i.shift(),X=H+i.shift(),j=W+i.shift();f=X+i.shift(),h=j+i.shift(),a.bezierCurveTo(H,W,X,j,f,h);}break;case 10:if(Qe=i.pop()+p,Ee=T[Qe],Ee){y[Qe]=true;var ce=t.pos,ae=s;t.pos=Ee.offset,s=Ee.offset+Ee.length,V(),t.pos=ce,s=ae;}break;case 11:if(e.version>=2)break;return;case 14:if(e.version>=2)break;i.length>0&&te(),C&&(a.closePath(),C=false);break;case 15:if(e.version<2)throw new Error("vsindex operator not supported in CFF v1");I=i.pop();break;case 16:{if(e.version<2)throw new Error("blend operator not supported in CFF v1");if(!N)throw new Error("blend operator in non-variation font");let K=N.getBlendVector(P,I),ie=i.pop(),Pt=ie*K.length,me=i.length-Pt,Tt=me-ie;for(let We=0;We<ie;We++){let ut=i[Tt+We];for(let Te=0;Te<K.length;Te++)ut+=K[Te]*i[me++];i[Tt+We]=ut;}for(;Pt--;)i.pop();break}case 19:case 20:L(),t.pos+=c+7>>3;break;case 21:i.length>2&&te(),f+=i.shift(),h+=i.shift(),Q(f,h);break;case 22:i.length>1&&te(),f+=i.shift(),Q(f,h);break;case 24:for(;i.length>=8;){var H=f+i.shift(),W=h+i.shift(),X=H+i.shift(),j=W+i.shift();f=X+i.shift(),h=j+i.shift(),a.bezierCurveTo(H,W,X,j,f,h);}f+=i.shift(),h+=i.shift(),a.lineTo(f,h);break;case 25:for(;i.length>=8;)f+=i.shift(),h+=i.shift(),a.lineTo(f,h);var H=f+i.shift(),W=h+i.shift(),X=H+i.shift(),j=W+i.shift();f=X+i.shift(),h=j+i.shift(),a.bezierCurveTo(H,W,X,j,f,h);break;case 26:for(i.length%2&&(f+=i.shift());i.length>=4;)H=f,W=h+i.shift(),X=H+i.shift(),j=W+i.shift(),f=X,h=j+i.shift(),a.bezierCurveTo(H,W,X,j,f,h);break;case 27:for(i.length%2&&(h+=i.shift());i.length>=4;)H=f+i.shift(),W=h,X=H+i.shift(),j=W+i.shift(),f=X+i.shift(),h=j,a.bezierCurveTo(H,W,X,j,f,h);break;case 28:i.push(t.readInt16BE());break;case 29:if(Qe=i.pop()+D,Ee=O[Qe],Ee){v[Qe]=true;var ce=t.pos,ae=s;t.pos=Ee.offset,s=Ee.offset+Ee.length,V(),t.pos=ce,s=ae;}break;case 30:case 31:for(Ne=be===31;i.length>=4;)Ne?(H=f+i.shift(),W=h,X=H+i.shift(),j=W+i.shift(),h=j+i.shift(),f=X+(i.length===1?i.shift():0)):(H=f,W=h+i.shift(),X=H+i.shift(),j=W+i.shift(),f=X+i.shift(),h=j+(i.length===1?i.shift():0)),a.bezierCurveTo(H,W,X,j,f,h),Ne=!Ne;break;case 12:switch(be=t.readUInt8(),be){case 3:let K=i.pop(),ie=i.pop();i.push(K&&ie?1:0);break;case 4:K=i.pop(),ie=i.pop(),i.push(K||ie?1:0);break;case 5:K=i.pop(),i.push(K?0:1);break;case 9:K=i.pop(),i.push(Math.abs(K));break;case 10:K=i.pop(),ie=i.pop(),i.push(K+ie);break;case 11:K=i.pop(),ie=i.pop(),i.push(K-ie);break;case 12:K=i.pop(),ie=i.pop(),i.push(K/ie);break;case 14:K=i.pop(),i.push(-K);break;case 15:K=i.pop(),ie=i.pop(),i.push(K===ie?1:0);break;case 18:i.pop();break;case 20:let Pt=i.pop(),me=i.pop();l[me]=Pt;break;case 21:me=i.pop(),i.push(l[me]||0);break;case 22:let Tt=i.pop(),We=i.pop(),ut=i.pop(),Te=i.pop();i.push(ut<=Te?Tt:We);break;case 23:i.push(Math.random());break;case 24:K=i.pop(),ie=i.pop(),i.push(K*ie);break;case 26:K=i.pop(),i.push(Math.sqrt(K));break;case 27:K=i.pop(),i.push(K,K);break;case 28:K=i.pop(),ie=i.pop(),i.push(ie,K);break;case 29:me=i.pop(),me<0?me=0:me>i.length-1&&(me=i.length-1),i.push(i[me]);break;case 30:let ct=i.pop(),He=i.pop();if(He>=0)for(;He>0;){var Pe=i[ct-1];for(let xe=ct-2;xe>=0;xe--)i[xe+1]=i[xe];i[0]=Pe,He--;}else for(;He<0;){var Pe=i[0];for(let Ue=0;Ue<=ct;Ue++)i[Ue]=i[Ue+1];i[ct-1]=Pe,He++;}break;case 34:H=f+i.shift(),W=h,X=H+i.shift(),j=W+i.shift();let ft=X+i.shift(),ht=j,dt=ft+i.shift(),qe=ht,Re=dt+i.shift(),et=qe,tt=Re+i.shift(),rt=et;f=tt,h=rt,a.bezierCurveTo(H,W,X,j,ft,ht),a.bezierCurveTo(dt,qe,Re,et,tt,rt);break;case 35:let re=[];for(let xe=0;xe<=5;xe++)f+=i.shift(),h+=i.shift(),re.push(f,h);a.bezierCurveTo(...re.slice(0,6)),a.bezierCurveTo(...re.slice(6)),i.shift();break;case 36:H=f+i.shift(),W=h+i.shift(),X=H+i.shift(),j=W+i.shift(),ft=X+i.shift(),ht=j,dt=ft+i.shift(),qe=ht,Re=dt+i.shift(),et=qe+i.shift(),tt=Re+i.shift(),rt=et,f=tt,h=rt,a.bezierCurveTo(H,W,X,j,ft,ht),a.bezierCurveTo(dt,qe,Re,et,tt,rt);break;case 37:let ve=f,Fe=h;re=[];for(let xe=0;xe<=4;xe++)f+=i.shift(),h+=i.shift(),re.push(f,h);Math.abs(f-ve)>Math.abs(h-Fe)?(f+=i.shift(),h=Fe):(f=ve,h+=i.shift()),re.push(f,h),a.bezierCurveTo(...re.slice(0,6)),a.bezierCurveTo(...re.slice(6));break;default:throw new Error(`Unknown op: 12 ${be}`)}break;default:throw new Error(`Unknown op: ${be}`)}}else if(be<247)i.push(be-139);else if(be<251){var ze=t.readUInt8();i.push((be-247)*256+ze+108);}else if(be<255){var ze=t.readUInt8();i.push(-(be-251)*256-ze-108);}else i.push(t.readInt32BE()/65536);}};return V(),C&&a.closePath(),a}constructor(...e){super(...e),ye(this,"type","CFF");}},Ah=new m({originX:o,originY:o,type:new Y(4),data:new ke(n=>n.parent.buflen-n._currentOffset)}),Ks=class extends i0{getImageForSize(e){for(let i=0;i<this._font.sbix.imageTables.length;i++){var t=this._font.sbix.imageTables[i];if(t.ppem>=e)break}let r=t.imageOffsets,s=r[this.id],a=r[this.id+1];return s===a?null:(this._font.stream.pos=s,Ah.decode(this._font.stream,{buflen:a-s}))}render(e,t){let r=this.getImageForSize(t);if(r!=null){let s=t/this._font.unitsPerEm;e.image(r.data,{height:t,x:r.originX,y:(this.bbox.minY-r.originY)*s});}this._font.sbix.flags.renderOutlines&&super.render(e,t);}constructor(...e){super(...e),ye(this,"type","SBIX");}},dr=class{constructor(e,t){this.glyph=e,this.color=t;}},Ys=class extends Me{_getBBox(){let e=new Ot;for(let t=0;t<this.layers.length;t++){let s=this.layers[t].glyph.bbox;e.addPoint(s.minX,s.minY),e.addPoint(s.maxX,s.maxY);}return e}get layers(){let e=this._font.CPAL,t=this._font.COLR,r=0,s=t.baseGlyphRecord.length-1;for(;r<=s;){let f=r+s>>1;var a=t.baseGlyphRecord[f];if(this.id<a.gid)s=f-1;else if(this.id>a.gid)r=f+1;else {var i=a;break}}if(i==null){var l=this._font._getBaseGlyph(this.id),u={red:0,green:0,blue:0,alpha:255};return [new dr(l,u)]}let c=[];for(let f=i.firstLayerIndex;f<i.firstLayerIndex+i.numLayers;f++){var a=t.layerRecords[f],u=e.colorRecords[a.paletteIndex],l=this._font._getBaseGlyph(a.gid);c.push(new dr(l,u));}return c}render(e,t){for(let{glyph:r,color:s}of this.layers)e.fillColor([s.red,s.green,s.blue],s.alpha/255*100),r.render(e,t);}constructor(...e){super(...e),ye(this,"type","COLR");}},kh=32768,Ih=4095,Eh=32768,oi=16384,Oh=8192,li=4095,ui=128,ci=127,Ph=128,Th=64,Fh=63,Zs=class{normalizeCoords(e){let t=[];for(var r=0;r<this.font.fvar.axis.length;r++){let s=this.font.fvar.axis[r];e[r]<s.defaultValue?t.push((e[r]-s.defaultValue+Number.EPSILON)/(s.defaultValue-s.minValue+Number.EPSILON)):t.push((e[r]-s.defaultValue+Number.EPSILON)/(s.maxValue-s.defaultValue+Number.EPSILON));}if(this.font.avar)for(var r=0;r<this.font.avar.segment.length;r++){let a=this.font.avar.segment[r];for(let i=0;i<a.correspondence.length;i++){let l=a.correspondence[i];if(i>=1&&t[r]<l.fromCoord){let u=a.correspondence[i-1];t[r]=((t[r]-u.fromCoord)*(l.toCoord-u.toCoord)+Number.EPSILON)/(l.fromCoord-u.fromCoord+Number.EPSILON)+u.toCoord;break}}}return t}transformPoints(e,t){if(!this.font.fvar||!this.font.gvar)return;let{gvar:r}=this.font;if(e>=r.glyphCount)return;let s=r.offsets[e];if(s===r.offsets[e+1])return;let{stream:a}=this.font;if(a.pos=s,a.pos>=a.length)return;let i=a.readUInt16BE(),l=s+a.readUInt16BE();if(i&kh){var u=a.pos;a.pos=l;var c=this.decodePoints();l=a.pos,a.pos=u;}let f=t.map(D=>D.copy());i&=Ih;for(let D=0;D<i;D++){let E=a.readUInt16BE(),T=a.readUInt16BE();if(T&Eh){var h=[];for(let L=0;L<r.axisCount;L++)h.push(a.readInt16BE()/16384);}else {if((T&li)>=r.globalCoordCount)throw new Error("Invalid gvar table");var h=r.globalCoords[T&li];}if(T&oi){var v=[];for(let L=0;L<r.axisCount;L++)v.push(a.readInt16BE()/16384);var y=[];for(let L=0;L<r.axisCount;L++)y.push(a.readInt16BE()/16384);}let p=this.tupleFactor(T,h,v,y);if(p===0){l+=E;continue}var u=a.pos;if(a.pos=l,T&Oh)var C=this.decodePoints();else var C=c;let I=C.length===0?t.length:C.length,N=this.decodeDeltas(I),te=this.decodeDeltas(I);if(C.length===0)for(let L=0;L<t.length;L++){var O=t[L];O.x+=Math.round(N[L]*p),O.y+=Math.round(te[L]*p);}else {let L=f.map(V=>V.copy()),Q=t.map(()=>false);for(let V=0;V<C.length;V++){let ce=C[V];if(ce<t.length){let ae=L[ce];Q[ce]=true,ae.x+=Math.round(N[V]*p),ae.y+=Math.round(te[V]*p);}}this.interpolateMissingDeltas(L,f,Q);for(let V=0;V<t.length;V++){let ce=L[V].x-f[V].x,ae=L[V].y-f[V].y;t[V].x+=ce,t[V].y+=ae;}}l+=E,a.pos=u;}}decodePoints(){let e=this.font.stream,t=e.readUInt8();t&ui&&(t=(t&ci)<<8|e.readUInt8());let r=new Uint16Array(t),s=0,a=0;for(;s<t;){let i=e.readUInt8(),l=(i&ci)+1,u=i&ui?e.readUInt16:e.readUInt8;for(let c=0;c<l&&s<t;c++)a+=u.call(e),r[s++]=a;}return r}decodeDeltas(e){let t=this.font.stream,r=0,s=new Int16Array(e);for(;r<e;){let a=t.readUInt8(),i=(a&Fh)+1;if(a&Ph)r+=i;else {let l=a&Th?t.readInt16BE:t.readInt8;for(let u=0;u<i&&r<e;u++)s[r++]=l.call(t);}}return s}tupleFactor(e,t,r,s){let a=this.normalizedCoords,{gvar:i}=this.font,l=1;for(let u=0;u<i.axisCount;u++)if(t[u]!==0){if(a[u]===0)return 0;if(e&oi){if(a[u]<r[u]||a[u]>s[u])return 0;a[u]<t[u]?l=l*(a[u]-r[u]+Number.EPSILON)/(t[u]-r[u]+Number.EPSILON):l=l*(s[u]-a[u]+Number.EPSILON)/(s[u]-t[u]+Number.EPSILON);}else {if(a[u]<Math.min(0,t[u])||a[u]>Math.max(0,t[u]))return 0;l=(l*a[u]+Number.EPSILON)/(t[u]+Number.EPSILON);}}return l}interpolateMissingDeltas(e,t,r){if(e.length===0)return;let s=0;for(;s<e.length;){let a=s,i=s,l=e[i];for(;!l.endContour;)l=e[++i];for(;s<=i&&!r[s];)s++;if(s>i)continue;let u=s,c=s;for(s++;s<=i;)r[s]&&(this.deltaInterpolate(c+1,s-1,c,s,t,e),c=s),s++;c===u?this.deltaShift(a,i,c,t,e):(this.deltaInterpolate(c+1,i,c,u,t,e),u>0&&this.deltaInterpolate(a,u-1,c,u,t,e)),s=i+1;}}deltaInterpolate(e,t,r,s,a,i){if(e>t)return;let l=["x","y"];for(let c=0;c<l.length;c++){let f=l[c];if(a[r][f]>a[s][f]){var u=r;r=s,s=u;}let h=a[r][f],v=a[s][f],y=i[r][f],C=i[s][f];if(h!==v||y===C){let O=h===v?0:(C-y)/(v-h);for(let D=e;D<=t;D++){let E=a[D][f];E<=h?E+=y-h:E>=v?E+=C-v:E=y+(E-h)*O,i[D][f]=E;}}}}deltaShift(e,t,r,s,a){let i=a[r].x-s[r].x,l=a[r].y-s[r].y;if(!(i===0&&l===0))for(let u=e;u<=t;u++)u!==r&&(a[u].x+=i,a[u].y+=l);}getAdvanceAdjustment(e,t){let r,s;if(t.advanceWidthMapping){let a=e;a>=t.advanceWidthMapping.mapCount&&(a=t.advanceWidthMapping.mapCount-1);t.advanceWidthMapping.entryFormat;({outerIndex:r,innerIndex:s}=t.advanceWidthMapping.mapData[a]);}else r=0,s=e;return this.getDelta(t.itemVariationStore,r,s)}getDelta(e,t,r){if(t>=e.itemVariationData.length)return 0;let s=e.itemVariationData[t];if(r>=s.deltaSets.length)return 0;let a=s.deltaSets[r],i=this.getBlendVector(e,t),l=0;for(let u=0;u<s.regionIndexCount;u++)l+=a.deltas[u]*i[u];return l}getBlendVector(e,t){let r=e.itemVariationData[t];if(this.blendVectors.has(r))return this.blendVectors.get(r);let s=this.normalizedCoords,a=[];for(let i=0;i<r.regionIndexCount;i++){let l=1,u=r.regionIndexes[i],c=e.variationRegionList.variationRegions[u];for(let f=0;f<c.length;f++){let h=c[f],v;h.startCoord>h.peakCoord||h.peakCoord>h.endCoord||h.startCoord<0&&h.endCoord>0&&h.peakCoord!==0||h.peakCoord===0?v=1:s[f]<h.startCoord||s[f]>h.endCoord?v=0:s[f]===h.peakCoord?v=1:s[f]<h.peakCoord?v=(s[f]-h.startCoord+Number.EPSILON)/(h.peakCoord-h.startCoord+Number.EPSILON):v=(h.endCoord-s[f]+Number.EPSILON)/(h.endCoord-h.peakCoord+Number.EPSILON),l*=v;}a[i]=l;}return this.blendVectors.set(r,a),a}constructor(e,t){this.font=e,this.normalizedCoords=this.normalizeCoords(t),this.blendVectors=new Map;}};Promise.resolve();var pr=class{includeGlyph(e){return typeof e=="object"&&(e=e.id),this.mapping[e]==null&&(this.glyphs.push(e),this.mapping[e]=this.glyphs.length-1),this.mapping[e]}constructor(e){this.font=e,this.glyphs=[],this.mapping={},this.includeGlyph(0);}},Dh=1,Lh=2,Bh=4,Mh=8,Nh=16,Rh=32,br=class{static size(e){return e>=0&&e<=255?1:2}static encode(e,t){t>=0&&t<=255?e.writeUInt8(t):e.writeInt16BE(t);}},fi=new m({numberOfContours:w,xMin:w,yMin:w,xMax:w,yMax:w,endPtsOfContours:new d(o,"numberOfContours"),instructions:new d(S,o),flags:new d(S,0),xPoints:new d(br,0),yPoints:new d(br,0)}),Js=class{encodeSimple(e,t=[]){let r=[],s=[],a=[],i=[],l=0,u=0,c=0,f=0,h=0;for(let E=0;E<e.commands.length;E++){let T=e.commands[E];for(let p=0;p<T.args.length;p+=2){let P=T.args[p],I=T.args[p+1],N=0;if(T.command==="quadraticCurveTo"&&p===2){let te=e.commands[E+1];if(te&&te.command==="quadraticCurveTo"){let L=(u+te.args[0])/2,Q=(c+te.args[1])/2;if(P===L&&I===Q)continue}}T.command==="quadraticCurveTo"&&p===0||(N|=Dh),N=this._encodePoint(P,u,s,N,Lh,Nh),N=this._encodePoint(I,c,a,N,Bh,Rh),N===f&&l<255?(i[i.length-1]|=Mh,l++):(l>0&&(i.push(l),l=0),i.push(N),f=N),u=P,c=I,h++;}T.command==="closePath"&&r.push(h-1);}e.commands.length>1&&e.commands[e.commands.length-1].command!=="closePath"&&r.push(h-1);let v=e.bbox,y={numberOfContours:r.length,xMin:v.minX,yMin:v.minY,xMax:v.maxX,yMax:v.maxY,endPtsOfContours:r,instructions:t,flags:i,xPoints:s,yPoints:a},C=fi.size(y),O=4-C%4,D=new st(C+O);return fi.encode(D,y),O!==0&&D.fill(0,O),D.buffer}_encodePoint(e,t,r,s,a,i){let l=e-t;return e===t?s|=i:(-255<=l&&l<=255&&(s|=a,l<0?l=-l:s|=i),r.push(l)),s}},$s=class extends pr{_addGlyph(e){let t=this.font.getGlyph(e),r=t._decode(),s=this.font.loca.offsets[e],a=this.font.loca.offsets[e+1],i=this.font._getTableStream("glyf");i.pos+=s;let l=i.readBuffer(a-s);if(r&&r.numberOfContours<0){l=new Uint8Array(l);let u=new DataView(l.buffer);for(let c of r.components)e=this.includeGlyph(c.glyphID),u.setUint16(c.pos,e);}else r&&this.font._variationProcessor&&(l=this.glyphEncoder.encodeSimple(t.path,r.instructions));return this.glyf.push(l),this.loca.offsets.push(this.offset),this.hmtx.metrics.push({advance:t.advanceWidth,bearing:t._getMetrics().leftBearing}),this.offset+=l.length,this.glyf.length-1}encode(){this.glyf=[],this.offset=0,this.loca={offsets:[],version:this.font.loca.version},this.hmtx={metrics:[],bearings:[]};let e=0;for(;e<this.glyphs.length;)this._addGlyph(this.glyphs[e++]);let t=(0, K0.default)(this.font.maxp);t.numGlyphs=this.glyf.length,this.loca.offsets.push(this.offset);let r=(0, K0.default)(this.font.head);r.indexToLocFormat=this.loca.version;let s=(0, K0.default)(this.font.hhea);return s.numberOfMetrics=this.hmtx.metrics.length,Ri.toBuffer({tables:{head:r,hhea:s,loca:this.loca,maxp:t,"cvt ":this.font["cvt "],prep:this.font.prep,glyf:this.glyf,hmtx:this.hmtx,fpgm:this.font.fpgm}})}constructor(e){super(e),this.glyphEncoder=new Js;}},_s=class extends pr{subsetCharstrings(){this.charstrings=[];let e={};for(let t of this.glyphs){this.charstrings.push(this.cff.getCharString(t));let r=this.font.getGlyph(t);r.path;for(let a in r._usedGsubrs)e[a]=true;}this.gsubrs=this.subsetSubrs(this.cff.globalSubrIndex,e);}subsetSubrs(e,t){let r=[];for(let s=0;s<e.length;s++){let a=e[s];t[s]?(this.cff.stream.pos=a.offset,r.push(this.cff.stream.readBuffer(a.length))):r.push(new Uint8Array([11]));}return r}subsetFontdict(e){e.FDArray=[],e.FDSelect={version:0,fds:[]};let t={},r=[],s={};for(let a of this.glyphs){let i=this.cff.fdForGlyph(a);if(i==null)continue;t[i]||(e.FDArray.push(Object.assign({},this.cff.topDict.FDArray[i])),r.push({}),s[i]=e.FDArray.length-1),t[i]=true,e.FDSelect.fds.push(s[i]);let l=this.font.getGlyph(a);l.path;for(let c in l._usedSubrs)r[s[i]][c]=true;}for(let a=0;a<e.FDArray.length;a++){let i=e.FDArray[a];delete i.FontName,i.Private&&i.Private.Subrs&&(i.Private=Object.assign({},i.Private),i.Private.Subrs=this.subsetSubrs(i.Private.Subrs,r[a]));}}createCIDFontdict(e){let t={};for(let s of this.glyphs){let a=this.font.getGlyph(s);a.path;for(let l in a._usedSubrs)t[l]=true;}let r=Object.assign({},this.cff.topDict.Private);return this.cff.topDict.Private&&this.cff.topDict.Private.Subrs&&(r.Subrs=this.subsetSubrs(this.cff.topDict.Private.Subrs,t)),e.FDArray=[{Private:r}],e.FDSelect={version:3,nRanges:1,ranges:[{first:0,fd:0}],sentinel:this.charstrings.length}}addString(e){return e?(this.strings||(this.strings=[]),this.strings.push(e),Y0.length+this.strings.length-1):null}encode(){this.subsetCharstrings();let e={version:this.charstrings.length>255?2:1,ranges:[{first:1,nLeft:this.charstrings.length-2}]},t=Object.assign({},this.cff.topDict);t.Private=null,t.charset=e,t.Encoding=null,t.CharStrings=this.charstrings;for(let s of ["version","Notice","Copyright","FullName","FamilyName","Weight","PostScript","BaseFontName","FontName"])t[s]=this.addString(this.cff.string(t[s]));t.ROS=[this.addString("Adobe"),this.addString("Identity"),0],t.CIDCount=this.charstrings.length,this.cff.isCIDFont?this.subsetFontdict(t):this.createCIDFontdict(t);let r={version:1,hdrSize:this.cff.hdrSize,offSize:4,header:this.cff.header,nameIndex:[this.cff.postscriptName],topDictIndex:[t],stringIndex:this.strings,globalSubrIndex:this.gsubrs};return Di.toBuffer(r)}constructor(e){if(super(e),this.cff=this.font["CFF "],!this.cff)throw new Error("Not a CFF Font")}},Ce=class n{static probe(e){let t=xr.decode(e.slice(0,4));return t==="true"||t==="OTTO"||t==="\0\0\0"}setDefaultLanguage(e=null){this.defaultLanguage=e;}_getTable(e){if(!(e.tag in this._tables))try{this._tables[e.tag]=this._decodeTable(e);}catch(t){}return this._tables[e.tag]}_getTableStream(e){let t=this.directory.tables[e];return t?(this.stream.pos=t.offset,this.stream):null}_decodeDirectory(){return this.directory=Ri.decode(this.stream,{_startOffset:0})}_decodeTable(e){let t=this.stream.pos,r=this._getTableStream(e.tag),s=nr[e.tag].decode(r,this,e.length);return this.stream.pos=t,s}getName(e,t=this.defaultLanguage||J0){let r=this.name&&this.name.records[e];return r&&(r[t]||r[this.defaultLanguage]||r[J0]||r.en||r[Object.keys(r)[0]])||null}get postscriptName(){return this.getName("postscriptName")}get fullName(){return this.getName("fullName")}get familyName(){return this.getName("fontFamily")}get subfamilyName(){return this.getName("fontSubfamily")}get copyright(){return this.getName("copyright")}get version(){return this.getName("version")}get ascent(){return this.hhea.ascent}get descent(){return this.hhea.descent}get lineGap(){return this.hhea.lineGap}get underlinePosition(){return this.post.underlinePosition}get underlineThickness(){return this.post.underlineThickness}get italicAngle(){return this.post.italicAngle}get capHeight(){let e=this["OS/2"];return e?e.capHeight:this.ascent}get xHeight(){let e=this["OS/2"];return e?e.xHeight:0}get numGlyphs(){return this.maxp.numGlyphs}get unitsPerEm(){return this.head.unitsPerEm}get bbox(){return Object.freeze(new Ot(this.head.xMin,this.head.yMin,this.head.xMax,this.head.yMax))}get _cmapProcessor(){return new k0(this.cmap)}get characterSet(){return this._cmapProcessor.getCharacterSet()}hasGlyphForCodePoint(e){return !!this._cmapProcessor.lookup(e)}glyphForCodePoint(e){return this.getGlyph(this._cmapProcessor.lookup(e),[e])}glyphsForString(e){let t=[],r=e.length,s=0,a=-1,i=-1;for(;s<=r;){let l=0,u=0;if(s<r){if(l=e.charCodeAt(s++),55296<=l&&l<=56319&&s<r){let c=e.charCodeAt(s);56320<=c&&c<=57343&&(s++,l=((l&1023)<<10)+(c&1023)+65536);}u=65024<=l&&l<=65039||917760<=l&&l<=917999?1:0;}else s++;i===0&&u===1?t.push(this.getGlyph(this._cmapProcessor.lookup(a,l),[a,l])):i===0&&u===0&&t.push(this.glyphForCodePoint(a)),a=l,i=u;}return t}get _layoutEngine(){return new qs(this)}layout(e,t,r,s,a){return this._layoutEngine.layout(e,t,r,s,a)}stringsForGlyph(e){return this._layoutEngine.stringsForGlyph(e)}get availableFeatures(){return this._layoutEngine.getAvailableFeatures()}getAvailableFeatures(e,t){return this._layoutEngine.getAvailableFeatures(e,t)}_getBaseGlyph(e,t=[]){return this._glyphs[e]||(this.directory.tables.glyf?this._glyphs[e]=new i0(e,t,this):(this.directory.tables["CFF "]||this.directory.tables.CFF2)&&(this._glyphs[e]=new js(e,t,this))),this._glyphs[e]||null}getGlyph(e,t=[]){return this._glyphs[e]||(this.directory.tables.sbix?this._glyphs[e]=new Ks(e,t,this):this.directory.tables.COLR&&this.directory.tables.CPAL?this._glyphs[e]=new Ys(e,t,this):this._getBaseGlyph(e,t)),this._glyphs[e]||null}createSubset(){return this.directory.tables["CFF "]?new _s(this):new $s(this)}get variationAxes(){let e={};if(!this.fvar)return e;for(let t of this.fvar.axis)e[t.axisTag.trim()]={name:t.name.en,min:t.minValue,default:t.defaultValue,max:t.maxValue};return e}get namedVariations(){let e={};if(!this.fvar)return e;for(let t of this.fvar.instance){let r={};for(let s=0;s<this.fvar.axis.length;s++){let a=this.fvar.axis[s];r[a.axisTag.trim()]=t.coord[s];}e[t.name.en]=r;}return e}getVariation(e){if(!(this.directory.tables.fvar&&(this.directory.tables.gvar&&this.directory.tables.glyf||this.directory.tables.CFF2)))throw new Error("Variations require a font with the fvar, gvar and glyf, or CFF2 tables.");if(typeof e=="string"&&(e=this.namedVariations[e]),typeof e!="object")throw new Error("Variation settings must be either a variation name or settings object.");let t=this.fvar.axis.map((a,i)=>{let l=a.axisTag.trim();return l in e?Math.max(a.minValue,Math.min(a.maxValue,e[l])):a.defaultValue}),r=new ee(this.stream.buffer);r.pos=this._directoryPos;let s=new n(r,t);return s._tables=this._tables,s}get _variationProcessor(){if(!this.fvar)return null;let e=this.variationCoords;return !e&&!this.CFF2?null:(e||(e=this.fvar.axis.map(t=>t.defaultValue)),new Zs(this,e))}getFont(e){return this.getVariation(e)}constructor(e,t=null){ye(this,"type","TTF"),this.defaultLanguage=null,this.stream=e,this.variationCoords=t,this._directoryPos=this.stream.pos,this._tables={},this._glyphs={},this._decodeDirectory();for(let r in this.directory.tables){let s=this.directory.tables[r];nr[r]&&s.length>0&&Object.defineProperty(this,r,{get:this._getTable.bind(this,s)});}}};le([ge],Ce.prototype,"bbox",null);le([ge],Ce.prototype,"_cmapProcessor",null);le([ge],Ce.prototype,"characterSet",null);le([ge],Ce.prototype,"_layoutEngine",null);le([ge],Ce.prototype,"variationAxes",null);le([ge],Ce.prototype,"namedVariations",null);le([ge],Ce.prototype,"_variationProcessor",null);var Uh=new m({tag:new Y(4),offset:new b(g,"void",{type:"global"}),compLength:g,length:g,origChecksum:g}),ji=new m({tag:new Y(4),flavor:g,length:g,numTables:o,reserved:new $(o),totalSfntSize:g,majorVersion:o,minorVersion:o,metaOffset:g,metaLength:g,metaOrigLength:g,privOffset:g,privLength:g,tables:new d(Uh,"numTables")});ji.process=function(){let n={};for(let e of this.tables)n[e.tag]=e;this.tables=n;};var Vh=ji,Qs=class extends Ce{static probe(e){return xr.decode(e.slice(0,4))==="wOFF"}_decodeDirectory(){this.directory=Vh.decode(this.stream,{_startOffset:0});}_getTableStream(e){let t=this.directory.tables[e];if(t)if(this.stream.pos=t.offset,t.compLength<t.length){this.stream.pos+=2;let r=new Uint8Array(t.length),s=(0, bi.default)(this.stream.readBuffer(t.compLength-2),r);return new ee(s)}else return this.stream;return null}constructor(...e){super(...e),ye(this,"type","WOFF");}},en=class extends i0{_decode(){return this._font._transformedGlyphs[this.id]}_getCBox(){return this.path.bbox}constructor(...e){super(...e),ye(this,"type","WOFF2");}},hi={decode(n){let e=0,t=[0,1,2,3,4];for(let r=0;r<t.length;r++){let a=n.readUInt8();if(e&3758096384)throw new Error("Overflow");if(e=e<<7|a&127,!(a&128))return e}throw new Error("Bad base 128 number")}},Gh=["cmap","head","hhea","hmtx","maxp","name","OS/2","post","cvt ","fpgm","glyf","loca","prep","CFF ","VORG","EBDT","EBLC","gasp","hdmx","kern","LTSH","PCLT","VDMX","vhea","vmtx","BASE","GDEF","GPOS","GSUB","EBSC","JSTF","MATH","CBDT","CBLC","COLR","CPAL","SVG ","sbix","acnt","avar","bdat","bloc","bsln","cvar","fdsc","feat","fmtx","fvar","gvar","hsty","just","lcar","mort","morx","opbd","prop","trak","Zapf","Silf","Glat","Gloc","Feat","Sill"],zh=new m({flags:S,customTag:new mt(new Y(4),n=>(n.flags&63)===63),tag:n=>n.customTag||Gh[n.flags&63],length:hi,transformVersion:n=>n.flags>>>6&3,transformed:n=>n.tag==="glyf"||n.tag==="loca"?n.transformVersion===0:n.transformVersion!==0,transformLength:new mt(hi,n=>n.transformed)}),Ki=new m({tag:new Y(4),flavor:g,length:g,numTables:o,reserved:new $(o),totalSfntSize:g,totalCompressedSize:g,majorVersion:o,minorVersion:o,metaOffset:g,metaLength:g,metaOrigLength:g,privOffset:g,privLength:g,tables:new d(zh,"numTables")});Ki.process=function(){let n={};for(let e=0;e<this.tables.length;e++){let t=this.tables[e];n[t.tag]=t;}return this.tables=n};var Wh=Ki,tn=class extends Ce{static probe(e){return xr.decode(e.slice(0,4))==="wOF2"}_decodeDirectory(){this.directory=Wh.decode(this.stream),this._dataPos=this.stream.pos;}_decompress(){if(!this._decompressed){this.stream.pos=this._dataPos;let e=this.stream.readBuffer(this.directory.totalCompressedSize),t=0;for(let s in this.directory.tables){let a=this.directory.tables[s];a.offset=t,t+=a.transformLength!=null?a.transformLength:a.length;}let r=(0, gi.default)(e,t);if(!r)throw new Error("Error decoding compressed data in WOFF2");this.stream=new ee(r),this._decompressed=true;}}_decodeTable(e){return this._decompress(),super._decodeTable(e)}_getBaseGlyph(e,t=[]){if(!this._glyphs[e])return this.directory.tables.glyf&&this.directory.tables.glyf.transformed?(this._transformedGlyphs||this._transformGlyfTable(),this._glyphs[e]=new en(e,t,this)):super._getBaseGlyph(e,t)}_transformGlyfTable(){this._decompress(),this.stream.pos=this.directory.tables.glyf.offset;let e=Hh.decode(this.stream),t=[];for(let s=0;s<e.numGlyphs;s++){let a={},i=e.nContours.readInt16BE();if(a.numberOfContours=i,i>0){let l=[],u=0;for(let c=0;c<i;c++){let f=ps(e.nPoints);u+=f,l.push(u);}a.points=Kh(e.flags,e.glyphs,u);for(let c=0;c<i;c++)a.points[l[c]-1].endContour=true;var r=ps(e.glyphs);}else if(i<0&&i0.prototype._decodeComposite.call({_font:this},a,e.composites))var r=ps(e.glyphs);t.push(a);}this._transformedGlyphs=t;}constructor(...e){super(...e),ye(this,"type","WOFF2");}},ot=class{decode(e,t){return new ee(this._buf.decode(e,t))}constructor(e){this.length=e,this._buf=new ke(e);}},Hh=new m({version:g,numGlyphs:o,indexFormat:o,nContourStreamSize:g,nPointsStreamSize:g,flagStreamSize:g,glyphStreamSize:g,compositeStreamSize:g,bboxStreamSize:g,instructionStreamSize:g,nContours:new ot("nContourStreamSize"),nPoints:new ot("nPointsStreamSize"),flags:new ot("flagStreamSize"),glyphs:new ot("glyphStreamSize"),composites:new ot("compositeStreamSize"),bboxes:new ot("bboxStreamSize"),instructions:new ot("instructionStreamSize")}),qh=253,Xh=254,jh=255,di=253;function ps(n){let e=n.readUInt8();return e===qh?n.readUInt16BE():e===jh?n.readUInt8()+di:e===Xh?n.readUInt8()+di*2:e}function Ze(n,e){return n&1?e:-e}function Kh(n,e,t){let r,s=r=0,a=[];for(let u=0;u<t;u++){let c=0,f=0,h=n.readUInt8(),v=!(h>>7);if(h&=127,h<10)c=0,f=Ze(h,((h&14)<<7)+e.readUInt8());else if(h<20)c=Ze(h,((h-10&14)<<7)+e.readUInt8()),f=0;else if(h<84){var i=h-20,l=e.readUInt8();c=Ze(h,1+(i&48)+(l>>4)),f=Ze(h>>1,1+((i&12)<<2)+(l&15));}else if(h<120){var i=h-84;c=Ze(h,1+(i/12<<8)+e.readUInt8()),f=Ze(h>>1,1+(i%12>>2<<8)+e.readUInt8());}else if(h<124){var l=e.readUInt8();let C=e.readUInt8();c=Ze(h,(l<<4)+(C>>4)),f=Ze(h>>1,((C&15)<<8)+e.readUInt8());}else c=Ze(h,e.readUInt16BE()),f=Ze(h>>1,e.readUInt16BE());s+=c,r+=f,a.push(new Ve(v,false,s,r));}return a}var Yh=new R(g,{65536:{numFonts:g,offsets:new d(g,"numFonts")},131072:{numFonts:g,offsets:new d(g,"numFonts"),dsigTag:g,dsigLength:g,dsigOffset:g}}),rn=class{static probe(e){return xr.decode(e.slice(0,4))==="ttcf"}getFont(e){for(let t of this.header.offsets){let r=new ee(this.stream.buffer);r.pos=t;let s=new Ce(r);if(s.postscriptName===e||s.postscriptName instanceof Uint8Array&&e instanceof Uint8Array&&s.postscriptName.every((a,i)=>e[i]===a))return s}return null}get fonts(){let e=[];for(let t of this.header.offsets){let r=new ee(this.stream.buffer);r.pos=t,e.push(new Ce(r));}return e}constructor(e){if(ye(this,"type","TTC"),this.stream=e,e.readString(4)!=="ttcf")throw new Error("Not a TrueType collection");this.header=Yh.decode(e);}},Zh=new Y(S);new m({len:g,buf:new ke("len")});var Jh=new m({id:o,nameOffset:w,attr:S,dataOffset:nt,handle:g}),$h=new m({name:new Y(4),maxTypeIndex:o,refList:new b(o,new d(Jh,n=>n.maxTypeIndex+1),{type:"parent"})}),_h=new m({length:o,types:new d($h,n=>n.length+1)}),Qh=new m({reserved:new $(S,24),typeList:new b(o,_h),nameListOffset:new b(o,"void")}),pi=new m({dataOffset:g,map:new b(g,Qh),dataLength:g,mapLength:g}),sn=class{static probe(e){let t=new ee(e);try{var r=pi.decode(t);}catch{return  false}for(let s of r.map.typeList.types)if(s.name==="sfnt")return  true;return  false}getFont(e){if(!this.sfnt)return null;for(let t of this.sfnt.refList){let r=this.header.dataOffset+t.dataOffset+4,s=new ee(this.stream.buffer.slice(r)),a=new Ce(s);if(a.postscriptName===e||a.postscriptName instanceof Uint8Array&&e instanceof Uint8Array&&a.postscriptName.every((i,l)=>e[l]===i))return a}return null}get fonts(){let e=[];for(let t of this.sfnt.refList){let r=this.header.dataOffset+t.dataOffset+4,s=new ee(this.stream.buffer.slice(r));e.push(new Ce(s));}return e}constructor(e){ye(this,"type","DFont"),this.stream=e,this.header=pi.decode(this.stream);for(let t of this.header.map.typeList.types){for(let r of t.refList)r.nameOffset>=0?(this.stream.pos=r.nameOffset+this.header.map.nameListOffset,r.name=Zh.decode(this.stream)):r.name=null;t.name==="sfnt"&&(this.sfnt=t);}}};o0(Ce);o0(Qs);o0(tn);o0(rn);o0(sn);var ed=/^[A-Za-z]:\//;function td(n=""){return n&&n.replace(/\\/g,"/").replace(ed,e=>e.toUpperCase())}var rd=/^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;var Yi=/^\/([A-Za-z]:)?$/;function sd(){return typeof process<"u"&&typeof process.cwd=="function"?process.cwd().replace(/\\/g,"/"):"/"}var fn=function(...n){n=n.map(r=>td(r));let e="",t=false;for(let r=n.length-1;r>=-1&&!t;r--){let s=r>=0?n[r]:sd();!s||s.length===0||(e=`${s}/${e}`,t=hn(s));}return e=Zi(e,!t),t&&!hn(e)?`/${e}`:e.length>0?e:"."};function Zi(n,e){let t="",r=0,s=-1,a=0,i=null;for(let l=0;l<=n.length;++l){if(l<n.length)i=n[l];else {if(i==="/")break;i="/";}if(i==="/"){if(!(s===l-1||a===1))if(a===2){if(t.length<2||r!==2||t[t.length-1]!=="."||t[t.length-2]!=="."){if(t.length>2){let u=t.lastIndexOf("/");u===-1?(t="",r=0):(t=t.slice(0,u),r=t.length-1-t.lastIndexOf("/")),s=l,a=0;continue}else if(t.length>0){t="",r=0,s=l,a=0;continue}}e&&(t+=t.length>0?"/..":"..",r=2);}else t.length>0?t+=`/${n.slice(s+1,l)}`:t=n.slice(s+1,l),r=l-s-1;s=l,a=0;}else i==="."&&a!==-1?++a:a=-1;}return t}var hn=function(n){return rd.test(n)};var dn=function(n,e){let t=fn(n).replace(Yi,"$1").split("/"),r=fn(e).replace(Yi,"$1").split("/");if(r[0][1]===":"&&t[0][1]===":"&&t[0]!==r[0])return r.join("/");let s=[...t];for(let a of s){if(r[0]!==a)break;t.shift(),r.shift();}return [...t.map(()=>".."),...r].join("/")};var nd={serif:{name:"Times New Roman",azAvgWidth:854.3953488372093,unitsPerEm:2048},monospace:{name:"Courier New",azAvgWidth:1145.9929435483878,unitsPerEm:2048},"sans-serif":{name:"Arial",azAvgWidth:934.5116279069767,unitsPerEm:2048}};function ad(n){try{let e="aaabcdeeeefghiijklmnnoopqrrssttuvwxyz      ";if(!n.glyphsForString(e).flatMap(a=>a.codePoints).every(a=>n.hasGlyphForCodePoint(a)))return;let r=n.glyphsForString(e).map(a=>a.advanceWidth);return r.reduce((a,i)=>a+i,0)/r.length}catch{return}}function Sr(n){return Math.abs(n*100).toFixed(2)+"%"}function Ji(n,e="serif"){let t=ad(n),r=nd[e],{ascent:s,descent:a,lineGap:i,unitsPerEm:l}=n,u=r.azAvgWidth/r.unitsPerEm,c=t?t/l/u:1;return {fallbackFont:r.name,sizeAdjust:Sr(c),ascentOverride:Sr(s/(l*c)),descentOverride:Sr(a/(l*c)),lineGapOverride:Sr(i/(l*c))}}function id(n){return n==="normal"?400:n==="bold"?700:Number(n)}function $i(n){if(!n)return 0;let[e,t]=n.trim().split(/ +/).map(id);if((Number.isNaN(e)||Number.isNaN(t))&&console.error(`Invalid weight value in src array: \`${n}\`.
Expected \`normal\`, \`bold\` or a number.`),!t)return e-400;if(e<=400&&t>=400)return 0;let r=e-400,s=t-400;return Math.abs(r)<Math.abs(s)?r:s}function _i(n){return n.reduce((e,t)=>{if(!e)return t;let r=$i(e.weight),s=$i(t.weight);if(r===s&&(typeof t.style>"u"||t.style==="normal"))return t;let a=Math.abs(r),i=Math.abs(s);return i<a||a===i&&s<r?t:e})}var ld={ttf:"font/ttf",otf:"font/otf",woff:"font/woff",woff2:"font/woff2",eot:"application/vnd.ms-fontobject"};function kr(n){return n||"./public"}function pn(n,e){return e.includes("https:")||e.includes("http:")?e:"/"+dn(n,e)}async function Ir(){let n;try{return n=await import('node:fs'),n}catch{}}async function ud(){let n;try{return n=await import('node:os'),n}catch{}}async function bn(n){try{let e=await Ir();if(e){let t=join(n,".astro_font");return e.existsSync(t)||e.mkdirSync(t),e.rmSync(t,{recursive:!0,force:!0}),n}}catch{}}function Rp(n){let e=/\.(woff|woff2|eot|ttf|otf)$/.exec(n)?.[1];if(!e)throw Error(`Unexpected file \`${n}\``);return ld[e]}async function Qi(n){let e=await Ir();if(n.includes("https:")||n.includes("http:")){let t=await fetch(n);return Buffer$1.from(await t.arrayBuffer())}else if(e&&e.existsSync(n))return e.readFileSync(n)}function cd(n){let e=n.lastIndexOf("/");return e!==-1?n.substring(e+1):n}function fd(n){let e=0;if(n.length===0)return e;for(let t=0;t<n.length;t++){let r=n.charCodeAt(t);e=(e<<5)-e+r,e=e&e;}return Math.abs(e).toString(16)+n.length}async function hd(n){let[e,t,r,s]=n,a=await Ir();if(!a)return [e,t,r];let i=cd(r),l=join(s,"__astro_font_generated__"),u=join(l,i);if(a.existsSync(u))return [e,t,u];if(!await bn(process.cwd()))return [e,t,r];a.existsSync(l)||(a.mkdirSync(l),console.log(`[astro-font] \u25B6 Created ${l}`));let f=await Qi(r);return f?(console.log(`[astro-font] \u25B6 Generated ${u}`),a.writeFileSync(u,f),[e,t,u]):[e,t,r]}function dd(n){let e,t=[],r=/@font-face\s*{([^}]+)}/g;for(;(e=r.exec(n))!==null;){let s=e[1],a={};s.split(";").forEach(i=>{if(i.includes("src")&&i.includes("url"))try{a.path=i.trim().split(/\(|\)|(url\()/).find(l=>l.trim().includes("https:"))?.trim();}catch{}i.includes("-style")&&(a.style=i.split(":").map(l=>l.trim())[1]),i.includes("-weight")&&(a.weight=i.split(":").map(l=>l.trim())[1]),i.includes("unicode-range")&&(a.css||(a.css={}),a.css["unicode-range"]=i.split(":").map(l=>l.trim())[1]);}),t.push(a);}return t}async function Up(n){let e=[...n];await Promise.all(e.map(r=>r.googleFontsURL?fetch(r.googleFontsURL,{headers:{"User-Agent":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.0.0 Safari/537.36"}}).then(s=>s.text()).then(s=>{r.src=dd(s);}):{}));let t=[];return e.forEach((r,s)=>{r.fetch&&r.src.forEach((a,i)=>{t.push([s,i,a.path,kr(r.basePath)]);});}),t.length>0&&(await Promise.all(t.map(hd))).forEach(s=>{e[s[0]].src[s[1]].path=s[2];}),e}async function pd(n){let e=[],t,r,s,a,[i,l]=await Promise.all([ud(),Ir()]);if(l){if(i&&(t=await Promise.all([bn(i.tmpdir()),bn("/tmp")]),r=t.find(u=>u!==void 0),a=n.cacheDir||r,a)){let u=h=>`${h.path}_${h.style}_${h.weight}`,c=n.src.map(u),f=fd(c.join("_"))+".txt";if(s=join(a,f),l.existsSync(s))try{let h=l.readFileSync(s,"utf8");return JSON.parse(h)}catch{}}if(await Promise.all(n.src.map(u=>Qi(u.path).then(c=>{if(c)try{let f=an(c);e.push({style:u.style,weight:u.weight?.toString(),metadata:f});}catch(f){n.verbose&&(console.log("[astro-font] \u25B6"),console.error(f));}}))),l&&e.length>0){let{metadata:u}=_i(e),c=Ji(u,n.fallback);return r&&(a&&(l.existsSync(a)||(l.mkdirSync(a),n.verbose&&console.log(`[astro-font] \u25B6 Created ${a}`))),s&&(l.existsSync(s)||(l.writeFileSync(s,JSON.stringify(c),"utf8"),n.verbose&&console.log(`[astro-font] \u25B6 Created ${s}`)))),c}}return {}}function Vp(n){return n.preload===false?n.src.filter(e=>e.preload===true).map(e=>pn(kr(n.basePath),e.path)):n.src.filter(e=>e.preload!==false).map(e=>pn(kr(n.basePath),e.path))}async function Gp(n){try{return n.src.map(t=>{let r=Object.entries(t.css||{}).map(([s,a])=>`${s}: ${a}`);return t.weight&&r.push(`font-weight: ${t.weight}`),t.style&&r.push(`font-style: ${t.style}`),n.name&&r.push(`font-family: ${n.name}`),n.display&&r.push(`font-display: ${n.display}`),r.push(`src: url(${pn(kr(n.basePath),t.path)})`),`@font-face {${r.join(";")}}`})}catch(e){console.log(e);}return []}async function zp(n){let e=[],t=await pd(n),r=`'${n.fallbackName||"_font_fallback_"+Math.floor(Math.random()*Date.now())}'`;return n.selector&&(e.push(n.selector),e.push("{")),Object.keys(t).length>0?(n.selector&&(e.push(`font-family: ${n.name}, ${r}, ${n.fallback};`),e.push("}")),typeof n.cssVariable=="boolean"&&n.cssVariable?e.push(`:root{ --astro-font: ${n.name}, ${r}, ${n.fallback}; }`):typeof n.cssVariable=="string"&&n.cssVariable.length>0&&e.push(`:root{ --${n.cssVariable}: ${n.name}, ${r}, ${n.fallback}; }`),e.push("@font-face"),e.push("{"),e.push(`font-family: ${r};`),e.push(`size-adjust: ${t.sizeAdjust};`),e.push(`src: local('${t.fallbackFont}');`),e.push(`ascent-override: ${t.ascentOverride};`),e.push(`descent-override: ${t.descentOverride};`),e.push(`line-gap-override: ${t.lineGapOverride};`),e.push("}")):(n.selector&&(e.push(`font-family: ${n.name}, ${n.fallback};`),e.push("}")),typeof n.cssVariable=="boolean"&&n.cssVariable?e.push(`:root{ --astro-font: ${n.name}, ${r}, ${n.fallback}; }`):typeof n.cssVariable=="string"&&n.cssVariable.length>0&&e.push(`:root{ --${n.cssVariable}: ${n.name}, ${r}, ${n.fallback}; }`)),e.join(" ")}

const $$Astro$2 = createAstro("https://xszn.org/");
const $$AstroFont = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$AstroFont;
  const { config } = Astro2.props;
  const resolvedConfig = await Up(config);
  const preloads = resolvedConfig.map(Vp);
  const styles = Promise.all([...resolvedConfig.map(Gp), ...resolvedConfig.map(zp)]);
  return renderTemplate`${preloads.flat().map((content) => renderTemplate`<link as="font" crossorigin rel="preload"${addAttribute(content, "href")}${addAttribute(Rp(content), "type")}>`)}${styles.then((res) => renderTemplate`<style>${unescapeHTML(res.flat().join(" "))}</style>`).catch(console.log)}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro-font/AstroFont.astro", void 0);

const $$Astro$1 = createAstro("https://xszn.org/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/components/ClientRouter.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://xszn.org/");
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  const pf = theme.fonts.font_family.primary;
  const sf = theme.fonts.font_family.secondary;
  let fontPrimary, fontSecondary;
  {
    fontPrimary = theme.fonts.font_family.primary.replace(/\+/g, " ").replace(/:[ital,]*[ital@]*[wght@]*[0-9,;]+/gi, "");
  }
  const { title, meta_title, description, image, noindex, canonical } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="zh"> <head><!-- favicon --><link rel="shortcut icon"', '><!-- theme meta --><meta name="theme-name" content="bookworm-light-astro"><meta name="msapplication-TileColor" content="#000000"><meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff"><meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000"><meta name="generator"', '><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><!-- google font css -->', '<!-- responsive meta --><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5"><!-- title --><title>\n      ', "\n    </title><!-- canonical url -->", "<!-- noindex robots -->", '<!-- meta-description --><meta name="description"', ">", '<!-- author from config.json --><meta name="author"', '><!-- og-title --><meta property="og:title"', '><!-- og-description --><meta property="og:description"', '><meta property="og:type" content="website"><meta property="og:url"', '><!-- twitter-title --><meta name="twitter:title"', '><!-- twitter-description --><meta name="twitter:description"', '><!-- og-image --><meta property="og:image"', '><!-- twitter-image --><meta name="twitter:image"', '><meta name="twitter:card" content="summary_large_image"><!-- Pinterest \u58F0\u660E\u6240\u6709\u6743 --><meta name="p:domain_verify" content="73f6fb61ac8ab76e6493b92d0b070c84"><!-- Google Adsense \u5143\u6807\u8BB0 --><meta name="google-adsense-account" content="ca-pub-4067183961394663"><!-- Google Adsense \u4EE3\u7801\u6BB5 --><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4067183961394663" crossorigin="anonymous"><\/script><!-- Google tag (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-TFCW4JSXFB"><\/script><script>\n      window.dataLayer = window.dataLayer || [];\n      function gtag() {\n        dataLayer.push(arguments);\n      }\n      gtag("js", new Date());\n\n      gtag("config", "G-TFCW4JSXFB");\n    <\/script>', "</head> <body> ", " ", ' <main id="main-content" class="min-h-[60vh]"> ', " </main> ", " </body></html>"])), addAttribute(config.site.favicon, "href"), addAttribute(Astro2.generator, "content"), renderComponent($$result, "AstroFont", $$AstroFont, { "config": [
    {
      src: [],
      preload: false,
      display: "swap",
      name: fontPrimary,
      fallback: "sans-serif",
      cssVariable: "font-primary",
      googleFontsURL: `https://fonts.googleapis.com/css2?family=${pf}&display=swap`
    },
    {
      src: [],
      preload: false,
      display: "swap",
      name: fontSecondary,
      fallback: "sans-serif",
      cssVariable: "font-secondary",
      googleFontsURL: `https://fonts.googleapis.com/css2?family=${sf}&display=swap`
    }
  ] }), plainify(meta_title ? meta_title : title ? title : config.site.title), canonical && renderTemplate`<link rel="canonical"${addAttribute(canonical, "href")} item-prop="url">`, noindex && renderTemplate`<meta name="robots" content="noindex,nofollow">`, addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content"), renderComponent($$result, "ClientRouter", $$ClientRouter, {}), addAttribute(config.metadata.meta_author, "content"), addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content"), addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content"), addAttribute(`${config.site.base_url}/${Astro2.url.pathname.replace("/", "")}`, "content"), addAttribute(plainify(
    meta_title ? meta_title : title ? title : config.site.title
  ), "content"), addAttribute(plainify(
    description ? description : config.metadata.meta_description
  ), "content"), addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content"), addAttribute(`${config.site.base_url}${image ? image : config.metadata.meta_image}`, "content"), renderHead(), renderComponent($$result, "TwSizeIndicator", $$TwSizeIndicator, {}), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Base.astro", void 0);

const CONTENT_IMAGE_FLAG = "astroContentImageFlag";
const IMAGE_IMPORT_PREFIX = "__ASTRO_IMAGE_";

function imageSrcToImportId(imageSrc, filePath) {
  imageSrc = removeBase(imageSrc, IMAGE_IMPORT_PREFIX);
  if (isRemotePath(imageSrc)) {
    return;
  }
  const ext = imageSrc.split(".").at(-1)?.toLowerCase();
  if (!ext || !VALID_INPUT_FORMATS.includes(ext)) {
    return;
  }
  const params = new URLSearchParams(CONTENT_IMAGE_FLAG);
  if (filePath) {
    params.set("importer", filePath);
  }
  return `${imageSrc}?${params.toString()}`;
}

class ImmutableDataStore {
  _collections = /* @__PURE__ */ new Map();
  constructor() {
    this._collections = /* @__PURE__ */ new Map();
  }
  get(collectionName, key) {
    return this._collections.get(collectionName)?.get(String(key));
  }
  entries(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.entries()];
  }
  values(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.values()];
  }
  keys(collectionName) {
    const collection = this._collections.get(collectionName) ?? /* @__PURE__ */ new Map();
    return [...collection.keys()];
  }
  has(collectionName, key) {
    const collection = this._collections.get(collectionName);
    if (collection) {
      return collection.has(String(key));
    }
    return false;
  }
  hasCollection(collectionName) {
    return this._collections.has(collectionName);
  }
  collections() {
    return this._collections;
  }
  /**
   * Attempts to load a DataStore from the virtual module.
   * This only works in Vite.
   */
  static async fromModule() {
    try {
      const data = await import('./_astro_data-layer-content_Dr2e_dmV.mjs');
      if (data.default instanceof Map) {
        return ImmutableDataStore.fromMap(data.default);
      }
      const map = devalue.unflatten(data.default);
      return ImmutableDataStore.fromMap(map);
    } catch {
    }
    return new ImmutableDataStore();
  }
  static async fromMap(data) {
    const store = new ImmutableDataStore();
    store._collections = data;
    return store;
  }
}
function dataStoreSingleton() {
  let instance = void 0;
  return {
    get: async () => {
      if (!instance) {
        instance = ImmutableDataStore.fromModule();
      }
      return instance;
    },
    set: (store) => {
      instance = store;
    }
  };
}
const globalDataStore = dataStoreSingleton();

const __vite_import_meta_env__ = {"ASSETS_PREFIX": undefined, "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SITE": "https://xszn.org/", "SSR": true};
function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport,
  cacheEntriesByCollection
}) {
  return async function getCollection(collection, filter) {
    const hasFilter = typeof filter === "function";
    const store = await globalDataStore.get();
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else if (store.hasCollection(collection)) {
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      const result = [];
      for (const rawEntry of store.values(collection)) {
        const data = updateImageReferencesInData(rawEntry.data, rawEntry.filePath, imageAssetMap);
        let entry = {
          ...rawEntry,
          data,
          collection
        };
        if (entry.legacyId) {
          entry = emulateLegacyEntry(entry);
        }
        if (hasFilter && !filter(entry)) {
          continue;
        }
        result.push(entry);
      }
      return result;
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Please check your content config file for errors.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign(__vite_import_meta_env__, { Path: process.env.Path })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = cacheEntriesByCollection.get(collection);
    } else {
      const limit = pLimit(10);
      entries = await Promise.all(
        lazyImports.map(
          (lazyImport) => limit(async () => {
            const entry = await lazyImport();
            return type === "content" ? {
              id: entry.id,
              slug: entry.slug,
              body: entry.body,
              collection: entry.collection,
              data: entry.data,
              async render() {
                return render({
                  collection: entry.collection,
                  id: entry.id,
                  renderEntryImport: await getRenderEntryImport(collection, entry.slug)
                });
              }
            } : {
              id: entry.id,
              collection: entry.collection,
              data: entry.data
            };
          })
        )
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (hasFilter) {
      return entries.filter(filter);
    } else {
      return entries.slice();
    }
  };
}
function emulateLegacyEntry({ legacyId, ...entry }) {
  const legacyEntry = {
    ...entry,
    id: legacyId,
    slug: entry.id
  };
  return {
    ...legacyEntry,
    // Define separately so the render function isn't included in the object passed to `renderEntry()`
    render: () => renderEntry(legacyEntry)
  };
}
function createGetEntry({
  getEntryImport,
  getRenderEntryImport,
  collectionNames
}) {
  return async function getEntry(collectionOrLookupObject, _lookupId) {
    let collection, lookupId;
    if (typeof collectionOrLookupObject === "string") {
      collection = collectionOrLookupObject;
      if (!_lookupId)
        throw new AstroError({
          ...UnknownContentCollectionError,
          message: "`getEntry()` requires an entry identifier as the second argument."
        });
      lookupId = _lookupId;
    } else {
      collection = collectionOrLookupObject.collection;
      lookupId = "id" in collectionOrLookupObject ? collectionOrLookupObject.id : collectionOrLookupObject.slug;
    }
    const store = await globalDataStore.get();
    if (store.hasCollection(collection)) {
      const entry2 = store.get(collection, lookupId);
      if (!entry2) {
        console.warn(`Entry ${collection} → ${lookupId} was not found.`);
        return;
      }
      const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
      entry2.data = updateImageReferencesInData(entry2.data, entry2.filePath, imageAssetMap);
      if (entry2.legacyId) {
        return emulateLegacyEntry({ ...entry2, collection });
      }
      return {
        ...entry2,
        collection
      };
    }
    if (!collectionNames.has(collection)) {
      console.warn(
        `The collection ${JSON.stringify(collection)} does not exist. Please ensure it is defined in your content config.`
      );
      return void 0;
    }
    const entryImport = await getEntryImport(collection, lookupId);
    if (typeof entryImport !== "function") return void 0;
    const entry = await entryImport();
    if (entry._internal.type === "content") {
      return {
        id: entry.id,
        slug: entry.slug,
        body: entry.body,
        collection: entry.collection,
        data: entry.data,
        async render() {
          return render({
            collection: entry.collection,
            id: entry.id,
            renderEntryImport: await getRenderEntryImport(collection, lookupId)
          });
        }
      };
    } else if (entry._internal.type === "data") {
      return {
        id: entry.id,
        collection: entry.collection,
        data: entry.data
      };
    }
    return void 0;
  };
}
const CONTENT_LAYER_IMAGE_REGEX = /__ASTRO_IMAGE_="([^"]+)"/g;
async function updateImageReferencesInBody(html, fileName) {
  const { default: imageAssetMap } = await import('./content-assets_DleWbedO.mjs');
  const imageObjects = /* @__PURE__ */ new Map();
  const { getImage } = await Promise.resolve().then(() => _astro_assets);
  for (const [_full, imagePath] of html.matchAll(CONTENT_LAYER_IMAGE_REGEX)) {
    try {
      const decodedImagePath = JSON.parse(imagePath.replaceAll("&#x22;", '"'));
      const id = imageSrcToImportId(decodedImagePath.src, fileName);
      const imported = imageAssetMap.get(id);
      if (!id || imageObjects.has(id) || !imported) {
        continue;
      }
      const image = await getImage({ ...decodedImagePath, src: imported });
      imageObjects.set(imagePath, image);
    } catch {
      throw new Error(`Failed to parse image reference: ${imagePath}`);
    }
  }
  return html.replaceAll(CONTENT_LAYER_IMAGE_REGEX, (full, imagePath) => {
    const image = imageObjects.get(imagePath);
    if (!image) {
      return full;
    }
    const { index, ...attributes } = image.attributes;
    return Object.entries({
      ...attributes,
      src: image.src,
      srcset: image.srcSet.attribute
    }).map(([key, value]) => value ? `${key}=${JSON.stringify(String(value))}` : "").join(" ");
  });
}
function updateImageReferencesInData(data, fileName, imageAssetMap) {
  return new Traverse(data).map(function(ctx, val) {
    if (typeof val === "string" && val.startsWith(IMAGE_IMPORT_PREFIX)) {
      const src = val.replace(IMAGE_IMPORT_PREFIX, "");
      const id = imageSrcToImportId(src, fileName);
      if (!id) {
        ctx.update(src);
        return;
      }
      const imported = imageAssetMap?.get(id);
      if (imported) {
        ctx.update(imported);
      } else {
        ctx.update(src);
      }
    }
  });
}
async function renderEntry(entry) {
  if (!entry) {
    throw new AstroError(RenderUndefinedEntryError);
  }
  if ("render" in entry && !("legacyId" in entry)) {
    return entry.render();
  }
  if (entry.deferredRender) {
    try {
      const { default: contentModules } = await import('./content-modules_AmWolC9q.mjs');
      const renderEntryImport = contentModules.get(entry.filePath);
      return render({
        collection: "",
        id: entry.id,
        renderEntryImport
      });
    } catch (e) {
      console.error(e);
    }
  }
  const html = entry?.rendered?.metadata?.imagePaths?.length && entry.filePath ? await updateImageReferencesInBody(entry.rendered.html, entry.filePath) : entry?.rendered?.html;
  const Content = createComponent(() => renderTemplate`${unescapeHTML(html)}`);
  return {
    Content,
    headings: entry?.rendered?.metadata?.headings ?? [],
    remarkPluginFrontmatter: entry?.rendered?.metadata?.frontmatter ?? {}
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function") throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object") throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function") throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object") throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function createReference({ lookupMap }) {
  let store = null;
  globalDataStore.get().then((s) => store = s);
  return function reference(collection) {
    return z$1.union([
      z$1.string(),
      z$1.object({
        id: z$1.string(),
        collection: z$1.string()
      }),
      z$1.object({
        slug: z$1.string(),
        collection: z$1.string()
      })
    ]).transform(
      (lookup, ctx) => {
        if (!store) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${ctx.path.join(".")}:** Reference to ${collection} could not be resolved: store not available.
This is an Astro bug, so please file an issue at https://github.com/withastro/astro/issues.`
          });
          return;
        }
        const flattenedErrorPath = ctx.path.join(".");
        const collectionIsInStore = store.hasCollection(collection);
        if (typeof lookup === "object") {
          if (lookup.collection !== collection) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${collection}. Received ${lookup.collection}.`
            });
            return;
          }
          return lookup;
        }
        if (collectionIsInStore) {
          const entry2 = store.get(collection, lookup);
          if (!entry2) {
            ctx.addIssue({
              code: ZodIssueCode.custom,
              message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Entry ${lookup} does not exist.`
            });
            return;
          }
          return { id: lookup, collection };
        }
        if (!lookupMap[collection] && store.collections().size <= 1) {
          return { id: lookup, collection };
        }
        const { type, entries } = lookupMap[collection];
        const entry = entries[lookup];
        if (!entry) {
          ctx.addIssue({
            code: ZodIssueCode.custom,
            message: `**${flattenedErrorPath}**: Reference to ${collection} invalid. Expected ${Object.keys(
              entries
            ).map((c) => JSON.stringify(c)).join(" | ")}. Received ${JSON.stringify(lookup)}.`
          });
          return;
        }
        if (type === "content") {
          return { slug: lookup, collection };
        }
        return { id: lookup, collection };
      }
    );
  };
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = "";
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = "";
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
const collectionToEntryMap = createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

const collectionNames = new Set(Object.keys(lookupMap));

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = "";
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const cacheEntriesByCollection = new Map();
const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	cacheEntriesByCollection,
});

const getEntry = createGetEntry({
	getEntryImport: createGlobLookup(collectionToEntryMap),
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
	collectionNames,
});

createReference({ lookupMap });

export { $$Base as $, $$Image as a, $$Social as b, config as c, getCollection as d, baseService as e, parseQuality as f, getEntry as g, humanize as h, markdownify as m, plainify as p, renderEntry as r, slugify as s };
