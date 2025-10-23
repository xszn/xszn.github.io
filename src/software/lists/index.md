---
giscus: false
license: false
---

# 软件合集

<p></p>
<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="post of posts" >
        <CardImage :href="post.url" :src="post.frontmatter.image" :title="post.frontmatter.title" :details="post.frontmatter.description"/>
    </ClientOnly>
</div>

<script setup>
import { data as posts } from '../../../.vitepress/theme/data/2025/list.data.js'
</script>