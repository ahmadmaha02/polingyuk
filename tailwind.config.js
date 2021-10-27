const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: { 
    colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        gray: colors.gray,
        red: colors.red,
        yellow: colors.amber,
        blue: colors.blue,
        base:colors.coolGray,
        basefont:colors.lightBlue,
        bgseccond:'#1f2937',
        bgseccond2:'#262a2b',
        bgseccond3:'#252f3f',
        navbar:'#262a2b',
    }

  },
  variants: {
    extend: {},
  },
  plugins: [],
}
