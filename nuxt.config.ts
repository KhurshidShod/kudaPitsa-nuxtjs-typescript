// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-icons', 'nuxt-swiper', ['@pinia/nuxt', {
    autoImports: ['defineStore', 'accetpHMRUpdate']
  }], "@nuxtjs/i18n"],
  i18n: {
    vueI18n: './i18n.config.ts'
  },
  css: ['~/assets/css/main.scss'],
  imports: {
    dirs: ['stores']
  }
})