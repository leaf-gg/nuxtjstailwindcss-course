/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [

    "./components/**/*.{js,vue,ts}",
    "./common/**/*.vue",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",

  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

