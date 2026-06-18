<script setup lang="ts">
import { onMounted, watch, nextTick, provide } from 'vue'
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import runPlugins from './plugins'
import Ads from "./components/Ads.vue"
import AdSense from './components/AdSense.vue'
import FeedBack from './components/FeedBack.vue'

const { isDark, page } = useData()
const route = useRoute()

const init = () => {
    runPlugins()
}

onMounted(() => {
    nextTick(init)
})

watch(
    () => route.path,
    () => nextTick(init)
)

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
        <template #doc-before>
            <FeedBack v-if="page.frontmatter.feedback !== false" />
        </template>
        <template #doc-after>
            <br>
            <AdSense />
        </template>
        <template #sidebar-nav-after>
            <AdSense />
        </template>
        <!-- <template #aside-ads-after>
            <Ads v-if="page.frontmatter.ads !== false" />
        </template> -->
        <template #home-hero-before v-if="!page.relativePath.startsWith('zh/')">
            <br>
            <Jumbotron />
            <br>
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
</style>