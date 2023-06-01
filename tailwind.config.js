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
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins"],
      },
      colors: {
        primary: "#1683FE",
        secondary: "#FE9216",
        "dark-blue": "#02145A",
        pink: "#FB2283"
      },
    },
    maxWidth: {
      "8xl": "90rem",
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
