<template>
    <div class="vp-raw">
        <fwb-carousel :pictures="pictures" slide :slide-interval="3000" />
    </div>
</template>

<script setup>
import { FwbCarousel } from './index'

const pictures = [
    { src: '/images/submit-project.webp', href: '/submit', target: '_blank', alt: '提交项目' }
]
</script>