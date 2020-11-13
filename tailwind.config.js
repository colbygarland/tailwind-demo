module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: [
      //'./pages/**/*.js',
      //'./components/**/*.js'
    ]
  },
  theme: {
    extend: {
      colors: {
        primary: '#0cd07e',
        secondary: '#eb3440',
      }
    },
  },
  variants: {},
  plugins: [],
}
