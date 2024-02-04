/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
      'wite': "hsl(227, 47%, 96%)" ,
      },
    },
  },
  plugins: [],
}
