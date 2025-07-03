import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import { B as NOOP_MIDDLEWARE_HEADER, C as decodeKey } from './chunks/astro/server_B2DYuZLs.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/","adapterName":"","routes":[{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/404.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/authors/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/authors","isIndex":true,"type":"page","pattern":"^\\/authors$","segments":[[{"content":"authors","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/authors/index.astro","pathname":"/authors","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/categories/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/categories","isIndex":true,"type":"page","pattern":"^\\/categories$","segments":[[{"content":"categories","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/categories/index.astro","pathname":"/categories","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/search/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/search","isIndex":false,"type":"page","pattern":"^\\/search$","segments":[[{"content":"search","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/search.astro","pathname":"/search","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/tags/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"https://xszn.org/","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/[...regular].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/authors/[single].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/authors/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/authors/page/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/[category].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/categories/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/contact.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/page/[slug].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/search.astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/[tag].astro",{"propagation":"in-tree","containsHead":true}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/AuthorSingle.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/authors/[single]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Default.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/[...regular]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/PostSingle.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/lib/contentParser.astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/layouts/Posts.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories/[category]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/page/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/lib/taxonomyParser.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/categories/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/authors/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/authors/page/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/search@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/contact@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/authors/page/[slug]@_@astro":"pages/authors/page/_slug_.astro.mjs","\u0000@astro-page:src/pages/authors/[single]@_@astro":"pages/authors/_single_.astro.mjs","\u0000@astro-page:src/pages/authors/index@_@astro":"pages/authors.astro.mjs","\u0000@astro-page:src/pages/categories/[category]@_@astro":"pages/categories/_category_.astro.mjs","\u0000@astro-page:src/pages/categories/index@_@astro":"pages/categories.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/page/[slug]@_@astro":"pages/page/_slug_.astro.mjs","\u0000@astro-page:src/pages/search@_@astro":"pages/search.astro.mjs","\u0000@astro-page:src/pages/tags/[tag]@_@astro":"pages/tags/_tag_.astro.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"pages/tags.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:src/pages/[...regular]@_@astro":"pages/_---regular_.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_DvcirRpn.mjs","C:\\Users\\lzl22\\OneDrive\\Documents\\Projects\\Website\\astro\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\Users\\lzl22\\OneDrive\\Documents\\Projects\\Website\\astro\\.astro\\content-modules.mjs":"chunks/content-modules_CnIitLlG.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_B-j-VbH_.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_CjX9jnEQ.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/pages/elements.mdx?astroPropagatedAssets":"chunks/elements_DyDokl9m.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/buster.mdx?astroPropagatedAssets":"chunks/buster_D-XCau0E.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/clash-verge-rev.mdx?astroPropagatedAssets":"chunks/clash-verge-rev_CFfqsTEj.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/geek-uninstaller.mdx?astroPropagatedAssets":"chunks/geek-uninstaller_Bjh-SYm-.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/fxsound.mdx?astroPropagatedAssets":"chunks/fxsound_DP9x1Jp-.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/idm-activation-script.mdx?astroPropagatedAssets":"chunks/idm-activation-script_BYlrngbt.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/miaoko.mdx?astroPropagatedAssets":"chunks/miaoko_CnOQEocJ.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/sound-lock.mdx?astroPropagatedAssets":"chunks/sound-lock_BtqT4HQc.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/anytxt-searcher.mdx?astroPropagatedAssets":"chunks/anytxt-searcher_BsOK32yN.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/microsoft-activation-scripts.mdx?astroPropagatedAssets":"chunks/microsoft-activation-scripts_DMGOvVqg.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/real-esrgan.mdx?astroPropagatedAssets":"chunks/real-esrgan_BCzqdRyX.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/umi-ocr.mdx?astroPropagatedAssets":"chunks/umi-ocr_DDa-OJOo.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/index.mdx?astroPropagatedAssets":"chunks/index_DTwTma3G.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/upscayl.mdx?astroPropagatedAssets":"chunks/upscayl_55LQLyEU.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/localsend.mdx?astroPropagatedAssets":"chunks/localsend_cX_9u4QV.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/rustdesk.mdx?astroPropagatedAssets":"chunks/rustdesk__oLi7lEt.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/lx-music.mdx?astroPropagatedAssets":"chunks/lx-music_Bh_guqU7.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/folo.mdx?astroPropagatedAssets":"chunks/folo_DaZ-BwpI.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/07/index.mdx?astroPropagatedAssets":"chunks/index_Bn6x29SO.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/07/mian-fei-cha-chong.mdx?astroPropagatedAssets":"chunks/mian-fei-cha-chong_BR01CXJ-.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/pages/elements.mdx":"chunks/elements_DVniFpnB.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/buster.mdx":"chunks/buster_CUtIRodm.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/clash-verge-rev.mdx":"chunks/clash-verge-rev_ol2XVi9C.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/geek-uninstaller.mdx":"chunks/geek-uninstaller_6ZccG3tW.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/fxsound.mdx":"chunks/fxsound_BWJTk7c0.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/idm-activation-script.mdx":"chunks/idm-activation-script_B-PzO9Hd.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/miaoko.mdx":"chunks/miaoko_C15Rwuf5.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/03/sound-lock.mdx":"chunks/sound-lock_Cv-7QSCz.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/anytxt-searcher.mdx":"chunks/anytxt-searcher_TvGn_0WN.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/microsoft-activation-scripts.mdx":"chunks/microsoft-activation-scripts_BkWpLirD.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/real-esrgan.mdx":"chunks/real-esrgan_DKCcIRpW.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/umi-ocr.mdx":"chunks/umi-ocr_BwlewxrU.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/index.mdx":"chunks/index_COj3eZvE.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/04/upscayl.mdx":"chunks/upscayl_lS3qoo8J.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/localsend.mdx":"chunks/localsend_6SBtpUUE.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/06/rustdesk.mdx":"chunks/rustdesk_xzTsX1du.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/lx-music.mdx":"chunks/lx-music_BGoKfreK.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/05/folo.mdx":"chunks/folo_QCsdeVl1.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/07/index.mdx":"chunks/index_CTkux5Uz.mjs","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/src/content/posts/2025/07/mian-fei-cha-chong.mdx":"chunks/mian-fei-cha-chong_DUEKm7-0.mjs","@/layouts/SearchBar":"_astro/SearchBar.Dpbs9nJM.js","@/shortcodes/Tabs":"_astro/Tabs.wA-_qs26.js","@/shortcodes/Accordion":"_astro/Accordion.BpwtCn2p.js","@/shortcodes/Youtube":"_astro/Youtube.D-WwooWA.js","@astrojs/react/client.js":"_astro/client.CBwL3ilQ.js","C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/404.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/about/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/authors/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/categories/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/contact/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/search/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/tags/index.html","/file:///C:/Users/lzl22/OneDrive/Documents/Projects/Website/astro/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"6lzMAoUWAwDAotQXx7CUrXxBwYmlI11/DcHMXHGvYAU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
