module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        farsi: ['"iranyekan"'],
      },
      fontSize: {
        s: ['0.6875rem', { lineHeight: '1rem' }],
        '2xs': ['0.8125rem', { lineHeight: '1.125rem' }],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')],
};
