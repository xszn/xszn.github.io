---
giscus: false
next: false
---

# 更新日志

增加新软件、移除和修改变更记录。

<ul v-for="log of changelog">
    <li>
        <a :href="log.url">{{ log.frontmatter.date }} 年</a>
    </li>
</ul>

<script setup>
import { data as changelog } from '../../.vitepress/theme/data/changelog.data.js'
</script>