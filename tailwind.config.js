
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('/src/images/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')" },
      keyframes: {
        maker: {
          "0%": { backgroundImage: "url('/src/images/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')",  backgroundSize: "cover", backgroundPosition : "center"},
          "50%": { backgroundImage: "url('/src/images/Mask group.png')", backgroundSize: "cover", backgroundPosition : "center"},
          "10%": { backgroundImage: "url('/src/images/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')", backgroundSize: "cover", backgroundPosition : "center"},
        },
      },
      animation: {
        makers: " maker 9s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}