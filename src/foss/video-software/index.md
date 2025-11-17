# 视频软件 {#video-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="vid of video" :key="vid.url">
        <Card
            :icon="vid.frontmatter.icon"
            :link="vid.url"
            :subheading="vid.frontmatter.subheading"
            :shortdesc="vid.frontmatter.shortdesc"
            :description="vid.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as video } from '../../../.vitepress/theme/data/video.data.js'
</script>