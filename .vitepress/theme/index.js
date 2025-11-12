// https://vitepress.dev/guide/custom-theme
import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import Ads from './components/Ads.vue'
import './style.css'
import './custom.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('Ads', Ads)
  }
}