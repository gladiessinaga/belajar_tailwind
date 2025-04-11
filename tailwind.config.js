/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js}"],
    theme: {
      extend: {
        colors: {
          'accent': '#46A358',
          'grey': '#3D3D3D',
          'grey-small': '#727272',
          'light-green': '#46A3581A'
        },
        
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        }
      },
    },
    plugins: [],
  }