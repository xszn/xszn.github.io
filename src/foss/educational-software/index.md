# 教育软件 {#educational-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="edu of educational" :key="edu.url">
        <Card
            :icon="edu.frontmatter.icon"
            :link="edu.url"
            :subheading="edu.frontmatter.subheading"
            :shortdesc="edu.frontmatter.shortdesc"
            :description="edu.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as educational } from '../../../.vitepress/theme/data/educational.data.js'
</script>