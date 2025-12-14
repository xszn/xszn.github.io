export default [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: '软件资源分享' }],
    ['meta', { property: 'og:description', content: '自由及开放源代码软件列表，推荐高质量免费与开源软件，降低你寻找软件的时间成本。' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://xszn.org/' }],
    ['meta', { property: 'og:image', content: '/images/ogp.webp' }],
    ['meta', { property: 'og:image:type', content: 'image/webp' }],
    ['meta', { property: 'og:image:width', content: '1920' }],
    ['meta', { property: 'og:image:height', content: '1080' }],
    ['meta', { property: 'og:og:image:alt', content: '行书指南，一个软件资源分享网站。' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '行书指南' }],
    ['meta', { property: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { property: 'twitter:site', content: '@xszn_org' }],
    ['meta', { property: 'twitter:creator', content: '@xszn_org' }],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-TFCW4JSXFB' }],
    [
        'script',
        {},
        `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-TFCW4JSXFB');`
    ]
]