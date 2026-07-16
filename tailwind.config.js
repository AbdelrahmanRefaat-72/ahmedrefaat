/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        medical: {
          50: '#f0f7ff',
          100: '#e0effe',
          200: '#bae2fd',
          300: '#7cc8fc',
          400: '#38a9fa',
          500: '#0e8cf0',
          600: '#026ec7', // Primary Medical Blue
          700: '#0358a1',
          800: '#074b84',
          900: '#0b3f6e',
          950: '#072849',
        },
        darkbg: {
          50: '#1e293b',
          100: '#0f172a', // Dark Gray / Soft Dark background
          200: '#0b0f19',
        }
      },
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
