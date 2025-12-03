---
next: false
giscus: false
license: false
---

# 软件推荐 <Badge type="warning" text="已归档" />

::: tip
未来将移除该板块，全心投入 FOSS 推荐。
:::

## 2025

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
  <ClientOnly v-for="soft of software" :key="soft.url">
    <CardStacked 
      :imgs="soft.frontmatter.image" 
      :title="soft.frontmatter.title" 
      :description="soft.frontmatter.description || ''"
      :href="soft.url"
    />
  </ClientOnly>
</div>

<script setup>
import { data as software } from '../../.vitepress/theme/data/software.data.js'
</script>