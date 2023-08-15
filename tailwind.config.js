/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./*{.html,js,jsx}",
      "./components/*.{html,js,jsx}",
      "./pages/**/*.{html,js,jsx}",
      "./pages/home/sections/*.{html,js,jsx}"],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#2B1200',
            light: '#564D47'
          },
          accent: {
            DEFAULT: '#F7BA0A',
            dark: '#BF8022'
          },
          secondary: {
            DEFAULT: '#FFF5EE'
          },
          offwhite: '#D9D9D9'
          
        },
        animation:{
          'rightToLeft': 'rightToLeft 3s linear infinite' 
        },
        keyframes: {
          rightToLeft:{
            '0%':{transform:'translate(0)'},
            '100%': {transform: 'translate(-1300px)'}
          }
        }
      },
    },
    plugins: [],
  }
  
  