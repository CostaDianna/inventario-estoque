module.exports = {
  plugins: {
    'postcss-import': {},
    'tailwindcss': {},
    'autoprefixer': {},
  },
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: ['tailwind']
    }]
  }
}
