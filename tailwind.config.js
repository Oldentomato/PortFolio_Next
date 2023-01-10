/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,tx,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        slider: {
           '0%': {
             transform: 'translateX(0px)'
           },
           '100%': {
             transform: 'translateX(-1400px)'
           }
         },
       },
       animation: {
         slider: 'slider 10s linear infinite'
       }
    },
  },
  plugins: [],

};

