import nav from './config/nav';
import sidebar from './config/sidebar';
import socialLinks from './config/socialLinks';
import footer from './config/footer';
import ads from './config/ads';

export default {
    // https://vitepress.dev/reference/default-theme-config
    logo: {
        src: '/images/logo.webp',
        alt: 'Logo'
    },
    nav,
    sidebar,
    outline: {
        label: '页面导航'
    },
    socialLinks,
    footer,
    lastUpdated: {
        text: '最后更新于'
    },
    editLink: {
        pattern: 'https://github.com/xszn/xszn.github.io/edit/main/src/:path',
        text: '在 GitHub 上编辑此页面'
    },
    search: {
        provider: 'local',
        options: {
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档'
                },
                modal: {
                    noResultsText: '无法找到相关结果',
                    resetButtonTitle: '清除查询条件',
                    footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭'
                    }
                }
            }
        }
    },
    ads,
    docFooter: {
        prev: '上一页',
        next: '下一页'
    },
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    sidebarMenuLabel: '菜单',
    returnToTopLabel: '回到顶部',
    externalLinkIcon: true
}