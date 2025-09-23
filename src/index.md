---
titleTemplate: 软件资源分享
layout: home

# features:
#   - icon: 🛠️
#     title: Simple and minimal, always
#     details: Lorem ipsum...
#   - icon:
#       src: /cool-feature-icon.svg
#     title: Another cool feature
#     details: Lorem ipsum...
#   - icon:
#       dark: /dark-feature-icon.svg
#       light: /light-feature-icon.svg
#     title: Another cool feature
#     details: Lorem ipsum...
---

## 软件推荐

<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  <ClientOnly v-for="soft of software" :key="soft.url">
    <CardStacked 
      :imgs="soft.frontmatter.image" 
      :title="soft.frontmatter.title" 
      :description="soft.frontmatter.description || ''"
      :href="soft.url"
    />
  </ClientOnly>
</div>

<p></p>
<div class="text-right">
  <a class="!no-underline" href="/software/">查看更多</a>
</div>

<!-- ## 科技周刊

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ClientOnly v-for="week of weekly" >
      <CardHorizontal :src="week.frontmatter.img" :title="week.frontmatter.title" />
    </ClientOnly>
</div> -->

## 使用教程

<div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <ClientOnly v-for="post of posts" >
        <CardImage :href="post.url" :src="post.frontmatter.image" :title="post.frontmatter.title" :details="post.frontmatter.description"/>
    </ClientOnly>
</div>

<p></p>
<div class="text-right">
  <a class="!no-underline" href="/guide/">查看更多</a>
</div>

<script setup>
import { data as software } from '../.vitepress/theme/data/software.data.js'
import { data as weekly } from '../.vitepress/theme/data/weekly.data.js'
import { data as posts } from '../.vitepress/theme/data/guide.data.js'
</script>