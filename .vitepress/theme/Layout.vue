<script setup lang="ts">
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide } from 'vue'
import Giscus from '@giscus/vue'

const { isDark } = useData()
const { page } = useData()

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      fill: 'forwards',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})
</script>

<template>
  <DefaultTheme.Layout>
    <template #aside-ads-before>
      <div class="doc-aside-ads">
        <!-- <Ads /> -->
      </div>
    </template>
    <template #doc-after>
      <br>
      <Giscus v-if="page.frontmatter.giscus !== false" repo="xszn/xszn.github.io" repo-id="R_kgDON7SifQ"
        category="Announcements" category-id="DIC_kwDON7Sifc4Cq7dH" mapping="pathname" strict="0" reactions-enabled="1"
        emit-metadata="0" input-position="bottom" theme="preferred_color_scheme" lang="zh-CN" crossorigin="anonymous"
        async />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

.doc-aside-ads {
  position: sticky;
  bottom: 0;
  z-index: 2;
  margin-top: 16px;
}
</style>