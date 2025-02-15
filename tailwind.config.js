/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './src/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#001f3f',
        secondary: '#003366',
        tertiary: '#004080',
        quaternary: '#0059b3',
        quinary: '#0073e6',
        black: '#000000',
        white: '#ffffff',
        gray: '#808080',
        lightGray: '#d3d3d3',
        darkGray: '#a9a9a9',
        red: '#ff0000',
        green: '#00ff00',
      },
    },
  },
  plugins: [],
};
