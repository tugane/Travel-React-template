module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark': '#060b1d',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
  ],
}
