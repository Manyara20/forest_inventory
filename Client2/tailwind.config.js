/** @type {import('tailwindcss').Config} */

import daisyui from 'daisyui';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        kenya: `url(/mtKenya.jpg)`,
        forest: `url(/forest.jpg)`,
        home: `url(/homePhoto.jpg)`
      },

      colors: {
        'custom-green': '#386816',
        'custom-blue' : '#00525f',
        'middle-green' : '#00f79a',
        'main-bg': '#2a3447',
        'soft-bg': '#384256',
        'dark-bg': '#222b3c',
        'main-color': '#white',
        'soft-color': '#ddd',
        'dark-color': '#2a3447',
      }
    },
  },
  plugins: [daisyui],
}
