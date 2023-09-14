// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {

    public: {

      BASE_URL: process.env.BASE_URL,
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID

    }

  },

  ssr: true,
  buildModules: [
    '@nuxtjs/google-fonts'
  ],
  build: {
    extend() { },
    transpile: ['gsap'],
  },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {

      'Poppins': true,
    }
  }
})
