// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  // Kunfigurations-linjer tilføjet med hjælp af AI (For at kunne oploades til student serveren)
  ssr: false,
  nitro: {
    preset: 'static'
  },
  app: {
    baseURL: '/class/MMD-CSD-S24/10632176/MMD3/cafe_ulla_t/'
  },

  css: [
    '@/assets/css/style.css'
  ],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})
