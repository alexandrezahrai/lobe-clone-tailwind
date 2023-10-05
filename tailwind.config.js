/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'xs': '575px',
        'lg': '992px',
        'xl': '1358px',
      },
      container: {
        padding: {
          DEFAULT: '36px',
          md: '44px',
        }
      },
      colors: {
        'green-primary': '#04ddb2',
        'gray-light': '#767676',
        'gray-dark': '#333',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        'custom': '0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)',
      }
    },
  },
  plugins: [],
}