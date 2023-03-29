// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
