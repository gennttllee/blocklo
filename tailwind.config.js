
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('/public/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')" },
      keyframes: {
        maker: {
          "0%": { backgroundImage: "url('/public/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')"},
          "50%": { backgroundImage: "url('/public/Mask group.png')"},
          "10%": { backgroundImage: "url('/public/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')"},
        },
      },
      animation: {
        makers: " maker 9s ease-in-out infinite",
      }
    },
  },
  plugins: [],
}