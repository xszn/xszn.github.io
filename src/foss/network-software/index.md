---
giscus: false
---

# 网络软件 {#network-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="net of network" :key="net.url">
        <Card
            :icon="net.frontmatter.icon"
            :link="net.url"
            :subheading="net.frontmatter.subheading"
            :shortdesc="net.frontmatter.shortdesc"
            :description="net.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as network } from '../../../.vitepress/theme/data/network.data.js'
</script>