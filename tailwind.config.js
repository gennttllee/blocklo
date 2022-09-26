
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('/src/images/blue.jpeg')" },
      keyframes: {
        maker: {
          "0%": { backgroundImage: "url('/src/images/blue.jpeg')",  backgroundSize: "cover", backgroundPosition : "center"},
          "50%": { backgroundImage: "url('/src/images/monkey.jpeg')", backgroundSize: "cover", backgroundPosition : "center"},
          "10%": { backgroundImage: "url('/src/images/blue.jpeg')", backgroundSize: "cover", backgroundPosition : "center"},
        },
      },
      animation: {
        makers: " maker 9s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}