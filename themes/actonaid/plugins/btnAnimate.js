const plugin = require('tailwindcss/plugin');

const btnAnimate = plugin(function ({ addUtilities }) {
  addUtilities({
    '.btn-animate': {
      fontFamily: '"Zilla Slab", serif',
      fontWeight: '200',
      margin: '2rem 0',
      borderWidth: '2px',
      borderColor: 'white',
      padding: '1rem',
      color: 'white',
      backgroundSize: '200% 100%',
      backgroundPosition: '200% bottom', // Start from the left
      backgroundImage:
        'linear-gradient(to right, transparent, rgba(255, 255, 255, 0.9))', // Gradient definition
      transition: 'all .8s ease',
    },
    '.btn-animate:hover': {
      backgroundPosition: '100% bottom', // Slide to the right on hover
      color: 'black',
    },
  });
});

module.exports = btnAnimate;
