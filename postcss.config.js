module.exports = {
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('tailwindcss/nesting'),
    require('autoprefixer'),
    require('postcss-100vh-fix'),
    require('cssnano')({
      preset: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
  ],
};
