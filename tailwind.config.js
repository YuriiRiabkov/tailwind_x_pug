/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pug/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'lg': {'max': '990px'} ,
      'md': {'max': '770px'} ,
      'sm': {'max': '480px'} 
    },
    container : {
      padding : '20px',
      center: true
    },
    extend: {
      colors : {
        lightred : '#ef4444',
        darkred: '#7f1d1d',
        lightgray: '#9ca3af',
        darkgrey: '#111827',
        lightblack: '#64748b'
      },
      boxShadow : {
        'customred' : '0px 0px 30px rgba(255, 13, 56, 0.21);'
      }
    },
  },
  plugins: [],
};
