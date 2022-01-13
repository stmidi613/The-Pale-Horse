const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    
      colors: {
        'pale-green': '#9cf098',
        'crimson': '#90191C',
        'dark-gray': '#343f3e',
        'light-gray': '#c4c4c4',
        'dark-green-hover': '#386641',
        'white': "#fff",
        'offwhite': "#fcfafa"
      },
      screens: {
        'xs': '425px',
        ...defaultTheme.screens,
      }
    
  },
  plugins: [],
}
