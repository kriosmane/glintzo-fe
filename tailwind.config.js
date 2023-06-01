/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  safelist: [
    'bg-slide-1',
    'bg-slide-2',
    'bg-slide-3',
    'bg-slide-4',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#1683FE",
        secondary: "#FE9216",
        "dark-blue": "#02145A",
        pink: "#FB2283",
        "pink-light": "#FED9EA",
      },
      backgroundImage: {
        "slide-1" : "linear-gradient(270deg, rgba(34, 134, 251, 0.6) 0.13%, rgba(34, 134, 251, 0.4) 50.52%, rgba(34, 134, 251, 0.6) 100%)",
        "slide-2" : "linear-gradient(270deg, rgba(251, 34, 131, 0.6) 0%, rgba(251, 34, 131, 0.4) 55.73%, rgba(251, 34, 131, 0.6) 100%)",
        "slide-3" : "linear-gradient(90deg, rgba(252, 146, 46, 0.6) 0%, rgba(252, 146, 46, 0.4) 46.25%, rgba(252, 146, 46, 0.6) 100%)",
        "slide-4" : "linear-gradient(90deg, rgba(50, 246, 253, 0.6) 2.47%, rgba(50, 246, 253, 0.4) 47.68%, rgba(50, 246, 253, 0.6) 96.44%)"

      }
    },
    maxWidth: {
      "8xl": "90rem",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
