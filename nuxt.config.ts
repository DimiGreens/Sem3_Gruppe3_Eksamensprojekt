// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/class/MMD-CSD-S24/10632176/MMD3/Tester/'
  },
  css: [
    '@/assets/css/style.css'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
