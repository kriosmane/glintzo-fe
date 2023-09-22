// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

  runtimeConfig: {

    public: {

      BASE_URL: process.env.BASE_URL,
      environment: process.env.APP_ENV,
      google_analytics_id: process.env.GOOGLE_ANALYTICS_ID

    }

  },

  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
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
