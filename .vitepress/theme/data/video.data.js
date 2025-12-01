import { createContentLoader } from 'vitepress'

export default createContentLoader('video-software/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/video-software/') &&
            !(page.file?.includes('index.md'))
        ).sort((a, b) => {
            return a.url.localeCompare(b.url)
        }).map((page) => {
            return {
                ...page
            }
        })
    }
})