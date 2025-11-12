<script setup>
import { useData } from 'vitepress'

const { theme } = useData()
</script>

<template>
    <div class="ads">
        <span>
            <span v-if="theme.ads.aside.href && theme.ads.aside.src && theme.ads.aside.details">
                <a :href="theme.ads.aside.href" target="_blank" rel="noopener sponsored">
                    <img :src="theme.ads.aside.src" :alt="theme.ads.aside.alt" class="rounded-lg w-full" />
                    <span class="ads-text" v-html="theme.ads.aside.details"></span>
                </a>
            </span>
            <span class="ads-poweredby"
                v-if="theme.ads.aside.href && theme.ads.aside.src && theme.ads.aside.details">赞助商广告</span>
            <span class="ads-poweredby" v-else>
                <a href="#" class="ads-text">成为赞助商</a>
            </span>
        </span>
    </div>
</template>

<style scoped>
.ads {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
    border-radius: 12px;
    min-height: 256px;
    text-align: center;
    line-height: 18px;
    font-size: 12px;
    font-weight: 500;
    background-color: var(--vp-carbon-ads-bg-color);
}

.ads :deep(img) {
    margin: 0 auto;
    border-radius: 6px;
}

.ads :deep(.ads-text) {
    display: block;
    margin: 0 auto;
    padding-top: 12px;
    color: var(--vp-carbon-ads-text-color);
    transition: color 0.25s;
}

.ads :deep(.ads-text:hover) {
    color: var(--vp-carbon-ads-hover-text-color);
}

.ads :deep(.ads-poweredby) {
    display: block;
    padding-top: 6px;
    font-size: 11px;
    font-weight: 500;
    color: var(--vp-carbon-ads-poweredby-color);
    text-transform: uppercase;
    transition: color 0.25s;
}

.ads :deep(.ads-poweredby:hover) {
    color: var(--vp-carbon-ads-hover-poweredby-color);
}

.ads :deep(> div) {
    display: none;
}

.ads :deep(> div:first-of-type) {
    display: block;
}
</style>