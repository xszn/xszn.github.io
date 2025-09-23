<template>
    <div class="vp-raw">
        <fwb-card :href="href" :target="target" :rel="target === '_blank' ? 'noopener noreferrer' : undefined">
            <div class="p-5 flex flex-col gap-2">
                <div class="flex flex-row gap-2 items-center">
                    <fwb-avatar-stack>
                        <!-- 这里循环输出所有头像 -->
                        <fwb-avatar v-for="(item, index) in imgs.slice(0, 4)" :key="index" :img="item.src" rounded
                            stacked />
                        <fwb-avatar-stack-counter v-if="imgs.length > 4" href="#" :total="imgs.length - 4" />
                    </fwb-avatar-stack>
                    <span class="text-base font-bold tracking-tight text-gray-900 dark:text-white truncate">
                        {{ title }}
                    </span>
                </div>
                <p class="font-normal text-gray-700 dark:text-gray-400 truncate">
                    {{ description }}
                </p>
            </div>
        </fwb-card>
    </div>
</template>

<script setup lang="ts">
import {
    FwbAvatar,
    FwbAvatarStack,
    FwbAvatarStackCounter,
    FwbCard
} from './index'

defineProps<{
    href: string
    target?: string
    imgs: { src: string }[]   // 接收一个数组
    title: string
    description: string
}>()
</script>
