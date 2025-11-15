# 生产力软件 {#productivity-software}

## 精选

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="pro of productivity" :key="pro.url">
        <Card
            :icon="pro.frontmatter.icon"
            :link="pro.url"
            :subheading="pro.frontmatter.subheading"
            :shortdesc="pro.frontmatter.shortdesc"
            :description="pro.frontmatter.description"
        />
    </ClientOnly>
</div>

<script setup>
import { data as productivity } from '../../../.vitepress/theme/data/productivity.data.js'
</script>