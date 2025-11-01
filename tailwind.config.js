/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',  // ⬅️ TRÈS IMPORTANT !
  theme: {
    extend: {
      colors: {
        red: {
          400: '#f87171',
          500: '#ef4444', 
          600: '#dc2626',
        },
        blue: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
    },
  },
  plugins: [],
}