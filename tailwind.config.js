/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle: "#127369",
        primaryContent: "#4C5958",
        primarySubcontent: "#8AA6A3",
        primaryBase: "#a9b5b4",
        primaryAccent: "#10403B",
        primaryBg: "#BFBFBF",
    }},
  },
  plugins: [],
}