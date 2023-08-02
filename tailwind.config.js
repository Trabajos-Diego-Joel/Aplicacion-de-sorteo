/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'senior': "url('./src/assets/senior.png')",
      },
      colors: {
        gradiente: 'linear-gradient(to right, #4f206c, #8337c0, #9a4cd8, #b16de0, #c98ee8)',
      },
    },
  },
  plugins: [],
}

