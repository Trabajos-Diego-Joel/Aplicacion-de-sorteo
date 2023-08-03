/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'senior': "url('https://oyltvjfmloodupovoqoe.supabase.co/storage/v1/object/sign/website/senior.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJ3ZWJzaXRlL3Nlbmlvci5wbmciLCJpYXQiOjE2OTEwNzY2NDYsImV4cCI6MTcyMjYxMjY0Nn0.W3Egl1rhjZou5-0Jy0SYOR-0WLHvnxWr1TAeUPkUTuM&t=2023-08-03T15%3A27%3A32.025Z')",
      },
      colors: {
        gradiente: 'linear-gradient(to right, #4f206c, #8337c0, #9a4cd8, #b16de0, #c98ee8)',
      },
    },
  },
  plugins: [],
}

