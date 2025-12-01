import { createContentLoader } from 'vitepress'

export default createContentLoader('audio-software/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/audio-software/') &&
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