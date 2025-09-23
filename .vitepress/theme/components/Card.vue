<template>
    <div class="vp-raw">
        <fwb-card :href="href" :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined">
            <div class="p-5 flex flex-col gap-2">
                <div class="flex flex-row gap-2 items-center">
                    <fwb-avatar :img="img" size="md" :alt="title" bordered />
                    <span class="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {{ title }}
                    </span>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 truncate">{{ details }}</p>
            </div>
        </fwb-card>
    </div>
</template>

<script setup lang="ts">
import {
    FwbAvatar,
    FwbCard
} from './index'

defineProps<{
    href: string
    target?: string
    img: string
    title: string
    details: string
}>()
</script>