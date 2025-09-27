<template>
    <button>
        <a :href="link">{{ text }}</a>
    </button>
</template>

<style scoped>
a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    line-height: 28px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-text-1);
    transition: color 0.25s;
    background-color: #6cb3eb;
    border-radius: 20px;
}

a:hover {
    color: #3b68c6;
}
</style>

<script setup lang="ts">
defineProps<{
    text: string
    link: string
}>()
</script>