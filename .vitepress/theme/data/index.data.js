import { createContentLoader } from 'vitepress'

export default createContentLoader('/**/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.filter(page =>
            !page.url.endsWith('/') &&
            !(page.file?.includes('index.md'))
        ).filter(page => page.frontmatter?.date).sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map((page) => {
            return {
                ...page
            }
        })
    }
})