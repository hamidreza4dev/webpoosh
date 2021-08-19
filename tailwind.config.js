const colors = require('tailwindcss/colors');

module.exports = {
  mode: process.env.NODE_ENV ? 'jit' : undefined,
  purge: ['./dist/**.html', './dist/**/**.html', './dist/js/script.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
    },

    extend: {
      colors: {
        orange: colors.orange,
      },
      fontFamily: {
        farsi: ['"iranyekan"'],
      },

      fontSize: {
        s: ['0.6875rem', { lineHeight: '1rem' }],
        '2xs': ['0.8125rem', { lineHeight: '1.125rem' }],
      },

      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-down': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-out-up': {
          from: {
            opacity: '1',
            transform: 'translateY(0px)',
          },
          to: {
            opacity: '0',
            transform: 'translateY(10px)',
          },
        },
      },

      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
        'fade-out-down': 'fade-out-down 0.5s ease-out',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'fade-out-up': 'fade-out-up 0.5s ease-out',
      },

      gridTemplateColumns: {
        'min-col': '0fr 1fr',
      },
    },

    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '639px' },
      // => @media (max-width: 639px) { ... }

      xs: { max: '575px' },
      // => @media (max-width: 575px) { ... }
    },
  },
  variants: {
    extend: {
      display: ['group-hover'],
      ringWidth: ['focus'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
