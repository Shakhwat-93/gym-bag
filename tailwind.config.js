/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f4f6f8',
          100: '#eef1f6',
          200: '#d5dce6',
          300: '#aabccc',
          400: '#7a96ae',
          500: '#567a96',
          600: '#43617b',
          700: '#354e64',
          800: '#2b4052',
          900: '#1b2631',
          950: '#10161d',
        },
        accent: {
          DEFAULT: '#ff5c35',
          hover: '#ff4317',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans Bengali', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
