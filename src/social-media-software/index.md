---
giscus: false
---

# 社交媒体软件 {#social-media-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="sm of social" :key="sm.url">
        <Card
            :icon="sm.frontmatter.icon"
            :link="sm.url"
            :subheading="sm.frontmatter.subheading"
            :shortdesc="sm.frontmatter.shortdesc"
            :description="sm.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as social } from '../../.vitepress/theme/data/social.data.js'
</script>