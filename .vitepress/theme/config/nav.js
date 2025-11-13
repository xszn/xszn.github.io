export default [
    { text: '首页', link: '/' },
    {
        text: '操作系统软件',
        activeMatch: '/foss/operating-system-software/',
        items: [
            { text: '系统软件', link: '/foss/system-software/', activeMatch: '/foss/system-software/' },
            { text: '网络软件', link: '/foss/network-software/', activeMatch: '/foss/network-software/' }
        ]
    },
    {
        text: '互联网软件',
        activeMatch: '/foss/internet-software/',
        items: [
            { text: '教育软件', link: '/foss/educational-software/', activeMatch: '/foss/educational-software' },
            { text: '社交媒体软件', link: '/foss/social-media-software/', activeMatch: '/foss/social-media-software' },
            { text: '电子游戏软件', link: '/foss/video-game-software/', activeMatch: '/foss/video-game-software' },
            { text: '生产力软件', link: '/foss/productivity-software/', activeMatch: '/foss/productivity-software' }
        ]
    },
    {
        text: '文件软件',
        activeMatch: '/foss/file-software/',
        items: [
            { text: '文本软件', link: '/foss/text-software/', activeMatch: '/foss/text-software' },
            { text: '图像软件', link: '/foss/graphics-software/', activeMatch: '/foss/graphics-software' },
            { text: '音频软件', link: '/foss/audio-software/', activeMatch: '/foss/audio-software' },
            { text: '视频软件', link: '/foss/video-software/', activeMatch: '/foss/video-software' }
        ]
    }
]