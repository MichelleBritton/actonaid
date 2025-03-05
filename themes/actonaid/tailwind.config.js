/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./actonaid/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        red: "#cd0c0c",
        purpleG: "#7B6D8D",
        greenG: "#619B8A",
      },
    },
  },
  plugins: [
    require("./plugins/openVariant"),
    require("./plugins/linearGradient"),
    require("./plugins/btnAnimate"),
  ],
};
