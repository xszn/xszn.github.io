---
giscus: false
---

# 电子游戏软件 {#video-game-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="vg of game" :key="vg.url">
        <Card
            :icon="vg.frontmatter.icon"
            :link="vg.url"
            :subheading="vg.frontmatter.subheading"
            :shortdesc="vg.frontmatter.shortdesc"
            :description="vg.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as game } from '../../../.vitepress/theme/data/game.data.js'
</script>