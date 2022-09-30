
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('/src/images/blue.jpeg')" },
      keyframes: {
        moveUp: {
          'from': { right: '-50rem' },
          'to': { right: '0' },
        }
      },
      animation: {
        mover: 'moveUp .5s ease-in-out',
      }
    },
  },
  plugins: [],
}