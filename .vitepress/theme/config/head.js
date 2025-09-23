export default [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:title', content: '软件资源分享' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://xszn.org/' }],
    ['meta', { property: 'og:image', content: '/images/ogp.webp' }],
    ['meta', { property: 'og:description', content: '软件资源分享网站。最新、热门的开源软件推荐，阅读高质量期刊和浅显易懂的使用教程。在这里发现与掌握前沿技术。' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:site_name', content: '行书指南' }],
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