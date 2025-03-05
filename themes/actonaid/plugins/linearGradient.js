const plugin = require("tailwindcss/plugin");

const linearGradient = plugin(function ({ addUtilities }) {
  addUtilities({
    ".repeating-diagonal-gradient": {
      background:
        "repeating-linear-gradient(-45deg, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0) 1px, rgba(0, 0, 0, 0.9) 3px, rgba(0, 0, 0, 0.9) 3px)",
    },
  });
});

module.exports = linearGradient;
