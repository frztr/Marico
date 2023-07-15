/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        sans: ['Poppins']
      },
      colors:
      {
        gray: "#707070",
        blue: "#3C82F4",
        sky:"#326CF9"
      }
    },
  },
  plugins: [],
}

