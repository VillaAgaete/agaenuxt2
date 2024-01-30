// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image",
  '@fullpage/nuxt-fullpage'
  ],
  plugins: [
    { src: '~/plugins/plyr-Vue.js' }
  ]
})