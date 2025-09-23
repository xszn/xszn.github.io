---
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
      投稿、广告、友链和无限可能
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers size="medium" :members />
</VPTeamPage>