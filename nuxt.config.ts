// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    buildModules: [
        '@nuxtjs/google-fonts'
    ],
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      googleFonts: {
        families: {
        
          'Maven+Pro': true,
        }
      }
})
