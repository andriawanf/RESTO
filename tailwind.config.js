/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary: '#232631',
        secondary: '#5A4FCF',
        third: '#FAFAFA',
        four: '#FDC886',
        
        
      },
      
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
  variants: {
    scrollbar: ['rounded']
}
}