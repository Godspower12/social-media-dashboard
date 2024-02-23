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
      'header': "hsl(232, 29%, 95%)" ,
      'cardLight': "hsl(227, 47%, 92%)" ,
      'cardLight-hover': "hsl(227, 47%, 88%)" ,
      },
      
    },
  },
  plugins: [],
}
