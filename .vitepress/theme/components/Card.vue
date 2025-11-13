<template>
    <div class="vp-raw">
        <fwb-card :href="link">
            <div class="p-5 flex flex-col gap-2">
                <div class="flex flex-row gap-2 items-center">
                    <fwb-avatar bordered :img="icon" size="md" :alt="title" />
                    <h5 class="text-base font-bold tracking-tight text-gray-900 dark:text-white">
                        {{ title }}
                    </h5>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 truncate" :title="description">
                    {{ description }}
                </p>
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
    icon: string
    link: string
    title: string
    description: string
}>()
</script>