---
giscus: false
---

# 系统软件 {#system-software}

## 推荐

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="sys of system" :key="sys.url">
        <Card
            :icon="sys.frontmatter.icon"
            :link="sys.url"
            :subheading="sys.frontmatter.subheading"
            :shortdesc="sys.frontmatter.shortdesc"
            :description="sys.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as system } from '../../.vitepress/theme/data/system.data.js'
</script>