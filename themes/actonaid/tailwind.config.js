/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './**/*.php',
    './assets/js/**/*.js',
    './assets/css/**/*.css',
    './theme.json',
    './templates/**/*.php',
    './patterns/**/*.php',
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        red: '#cd0c0c',
        purpleG: '#7B6D8D',
        greenG: '#619B8A',
      },
      fontFamily: {
        bitter: ['Bitter', 'serif'],
        zilla: ['Zilla Slab', 'serif'],
      },
    },
  },
  plugins: [
    require('./plugins/openVariant'),
    require('./plugins/linearGradient'),
    require('./plugins/btnAnimate'),
  ],
};
