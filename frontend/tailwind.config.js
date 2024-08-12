/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'integral': ['Integral CF', 'sans-serif'],
      'shatoshi': ['Shatochi'],
      'concert-one': ['"Concert One"', 'sans-serif'],
      // คุณสามารถเพิ่มฟอนต์อื่นๆ ได้ที่นี่
    },
  },
  plugins: [],
}
