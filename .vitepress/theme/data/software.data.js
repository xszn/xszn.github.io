import { createContentLoader } from 'vitepress'

export default createContentLoader('software/2025/*.md', {
    includeSrc: true,
    render: true,
    excerpt: true,
    transform(rawData) {
        return rawData.sort((a, b) => {
            return +new Date(b.frontmatter.date) - +new Date(a.frontmatter.date)
        }).map((page) => {
            return {
                ...page
            }
        })
    }
})