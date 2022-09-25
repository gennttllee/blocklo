
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: { 'cover-pic': "url('/public/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')" },
      keyframes: {
        "maker": {
          from: {
            background: "url('/public/guerrillabuzz-crypto-pr-JlijbOtSWuw-unsplash 1.png')"
          },
          to: {
            background: "url('/public/Mask group.png')"
          }
        },
        animation: {
          "makers": " maker 1s ease-in-out infinite",
        }
      }
    },
  },
  plugins: [],
}