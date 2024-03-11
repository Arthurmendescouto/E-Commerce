/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        'back':'#F0F2F5',
        'backphone':'#FEFEFE',
        'phone1':'#555F6B',
        'phone2':'#8EA9BE',
        'phone3':'#FFC750',
        'phone4':'#065116'

      },
      spacing: {
        '500':'500px',
        '300':'300px',
        '550':'550px'
      }
    },
  },
  plugins: [],
}

