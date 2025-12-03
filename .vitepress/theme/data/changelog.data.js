import { createContentLoader } from 'vitepress'

export default createContentLoader('changelog/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/changelog/') &&
            !(page.file?.includes('index.md'))
        ).sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map((page) => {
            return {
                ...page
            }
        })
    }
})