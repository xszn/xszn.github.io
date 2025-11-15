<template>
    <fwb-img :alt="alt" :caption="alt" :src="src" />
</template>

<script setup lang="ts">
import { FwbImg } from './index.ts'

defineProps<{
    alt: string
    caption: string
    src: string
}>()
</script>