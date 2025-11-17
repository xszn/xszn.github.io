import { createContentLoader } from 'vitepress'

export default createContentLoader('foss/video-game-software/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/video-game-software/') &&
            !(page.file?.includes('index.md'))
        ).sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).slice(0, 6).map((page) => {
            return {
                ...page
            }
        })
    }
})