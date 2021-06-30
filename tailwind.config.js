// import tailwindcss color palette
const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    /** 
     * override default theme options
     * referrence: https://tailwindcss.com/docs/theme#overriding-the-default-theme
    */

    /** 
     * choice your screen size
     * referrence: https://tailwindcss.com/docs/theme#screens
     * example: 'breakpoint': 'value',
    */
    screens: {
       
    },

    /** 
     * choice your color fromtailwind colr palette
     * referrence: https://tailwindcss.com/docs/customizing-colors#color-palette-reference
     * example: colorname: 'value',
    */
     colors: {
        
    },

    /** 
     * choice your spacing
     * referrence: https://tailwindcss.com/docs/theme#spacing
     * example: colorname: 'value',
    */
    spacing: {
      
    },
    /** 
     * center mode
    */
    container: {
        center: true,
    },

    /** 
     * preserve default values and add new values
     * referrence: https://tailwindcss.com/docs/theme#extending-the-default-theme
    */
    extend: {
      
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
