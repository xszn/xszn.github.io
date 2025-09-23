<template>
    <fwb-card :img-alt="alt" :img-src="src" variant="horizontal">
        <div class="p-5">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                {{ title }}
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400 truncate" :title="details">
                {{ details }}
            </p>
        </div>
    </fwb-card>
</template>

<script setup lang="ts">
import { FwbCard } from './index'

defineProps<{
    alt: string
    src: string
    title: string
    details: string
}>()
</script>