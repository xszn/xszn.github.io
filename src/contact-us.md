---
title: 联系我们
layout: page
---

<script setup>
import {
    VPTeamPage,
    VPTeamPageTitle,
    VPTeamMembers
} from 'vitepress/theme'

const members = [
    {
        avatar: '/images/logo-dark.webp',
        name: '行书指南',
        title: '管理员',
        desc: 'XSZN.org 的传话筒',
        links: [
            {
                icon: 'telegram',
                link: 'https://t.me/xsznChatBot',
                ariaLabel: 'telegram link'
            },
            {
                icon: 'gmail',
                link: 'mailto:xsznorg@gmail.com',
                ariaLabel: 'gmail e-mail'
            }
        ]
    }
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      联系我们
    </template>
    <template #lead>
      提交项目、合作广告、友情链接
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />
</VPTeamPage>