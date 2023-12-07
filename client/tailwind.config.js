/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'primary': ['"Pixelify Sans"'],
      'secondary': ['"Roboto"']
    },
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp')],
}
