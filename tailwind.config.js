/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        br:{
          'main-red': '#DE2E54',
          'main-blue': '#0EB4C1',
          'dark-black': '#222',
        }
      }
    },
  },
  plugins: [],
}