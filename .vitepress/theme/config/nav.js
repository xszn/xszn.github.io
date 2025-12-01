export default [
    { text: '首页', link: '/' },
    {
        text: '操作系统软件',
        activeMatch: '/operating-system-software/',
        items: [
            { text: '系统软件', link: '/system-software/', activeMatch: '/system-software/' },
            { text: '网络软件', link: '/network-software/', activeMatch: '/network-software/' }
        ]
    },
    {
        text: '互联网软件',
        activeMatch: '/internet-software/',
        items: [
            { text: '教育软件', link: '/educational-software/', activeMatch: '/educational-software' },
            { text: '社交媒体软件', link: '/social-media-software/', activeMatch: '/social-media-software' },
            { text: '电子游戏软件', link: '/video-game-software/', activeMatch: '/video-game-software' },
            { text: '生产力软件', link: '/productivity-software/', activeMatch: '/productivity-software' }
        ]
    },
    {
        text: '文件软件',
        activeMatch: '/file-software/',
        items: [
            { text: '文本软件', link: '/text-software/', activeMatch: '/text-software' },
            { text: '图像软件', link: '/graphics-software/', activeMatch: '/graphics-software' },
            { text: '音频软件', link: '/audio-software/', activeMatch: '/audio-software' },
            { text: '视频软件', link: '/video-software/', activeMatch: '/video-software' }
        ]
    }
]