---
giscus: false
---

# 图像软件 {#graphics-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="gpx of graphics" :key="gpx.url">
        <Card
            :icon="gpx.frontmatter.icon"
            :link="gpx.url"
            :subheading="gpx.frontmatter.subheading"
            :shortdesc="gpx.frontmatter.shortdesc"
            :description="gpx.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as graphics } from '../../.vitepress/theme/data/graphics.data.js'
</script>