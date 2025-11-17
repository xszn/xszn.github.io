# 文本软件 {#text-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="txt of text" :key="txt.url">
        <Card
            :icon="txt.frontmatter.icon"
            :link="txt.url"
            :subheading="txt.frontmatter.subheading"
            :shortdesc="txt.frontmatter.shortdesc"
            :description="txt.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as text } from '../../../.vitepress/theme/data/text.data.js'
</script>