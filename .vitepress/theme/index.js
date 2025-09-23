// https://vitepress.dev/guide/custom-theme
import { onMounted, watch, nextTick } from 'vue'
import { useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import mediumZoom from 'medium-zoom'
import Layout from './Layout.vue'
import Ads from './components/Ads.vue'
import Card from './components/Card.vue'
import CardHorizontal from './components/CardHorizontal.vue'
import CardImage from './components/CardImage.vue'
import CardStacked from './components/CardStacked.vue'
import Carousel from './components/Carousel.vue'
import Img from './components/Img.vue'
import './style.css'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Ads', Ads)
    app.component('Card', Card)
    app.component('CardHorizontal', CardHorizontal)
    app.component('CardImage', CardImage)
    app.component('CardStacked', CardStacked)
    app.component('Carousel', Carousel)
    app.component('Img', Img)
  },
  setup() {
    const route = useRoute()

    // Medium Zoom
    const zoom = () => {
      mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' })
    }

    onMounted(() => {
      nextTick(() => {
        zoom()
      })
    })

    watch(
      () => route.path,
      () => nextTick(() => {
        zoom()
      })
    )
  }
}