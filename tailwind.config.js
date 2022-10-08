/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        chiThao: {
          50: '#f3f8ff',
          100: '#e8f1ff',
          200: '#c5ddff',
          300: '#a2c9ff',
          400: '#5ca0ff',
          500: '#1677ff',
          600: '#146be6',
          700: '#1159bf',
          800: '#0d4799',
          900: '#0b3a7d',
        },
      },
    },
  },
  plugins: [],
};
