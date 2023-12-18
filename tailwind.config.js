/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    screens: {
      sm: "320px",
      //for mobiles
      // => @media (min-width: 640px) { ... }

      md: "768px",
      //for tablets and ipads
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      //for small laptops (<14 inch)
      // => @media (min-width: 1024px) { ... }

      xl: "1440px",
      //for large laptops (>14 inch)
      // => @media (min-width: 1280px) { ... }

      "2xl": "2560px",
      //for desktop screens
      // => @media (min-width: 2560px) { ... }
    },
  },
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js"
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '320px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '2560px',
      },
      padding: {
        md: '2rem',
      },
    },
    extend: {
      fontFamily: {
        primary: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: [],
}

