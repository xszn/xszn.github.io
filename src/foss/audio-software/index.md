# 音频软件 {#audio-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="aud of audio" :key="aud.url">
        <Card
            :icon="aud.frontmatter.icon"
            :link="aud.url"
            :subheading="aud.frontmatter.subheading"
            :shortdesc="aud.frontmatter.shortdesc"
            :description="aud.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as audio } from '../../../.vitepress/theme/data/audio.data.js'
</script>