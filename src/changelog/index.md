---
giscus: false
next: false
---

# 更新日志

::: info
增加新软件记录。
:::

<ul v-for="log of changelog.filter(item => 
    typeof item.frontmatter.date === 'string'
)">
    <li>
        {{ log.frontmatter.date.slice(0, 10) }}：<a :href="log.url">{{ log.url.replace(/\.html$/, '') }}</a>
    </li>
</ul>

<script setup>
import { data as changelog } from '../../.vitepress/theme/data/changelog.data.js'
</script>
