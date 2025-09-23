<template>
    <fwb-img :alt="alt" :caption="caption" :src="src" />
</template>

<script setup lang="ts">
import { FwbImg } from './index'

defineProps<{
    alt: string
    src: string
    caption?: string
}>()
</script>