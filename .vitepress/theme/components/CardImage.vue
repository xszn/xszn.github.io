<template>
    <a class="!no-underline" :href="href">
        <div class="vp-raw">
            <fwb-card :img-alt="alt" :img-src="src" variant="image">
                <div class="p-5">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {{ title }}
                    </h5>
                    <p class="font-normal text-gray-700 dark:text-gray-400 truncate" :title="details">
                        {{ details }}
                    </p>
                </div>
            </fwb-card>
        </div>
    </a>
</template>

<script setup lang="ts">
import { FwbCard } from './index'

defineProps<{
    href: string
    alt: string
    src: string
    title: string
    details: string
}>()
</script>