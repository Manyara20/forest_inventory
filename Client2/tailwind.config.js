/** @type {import('tailwindcss').Config} */
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
      }
    },
  },
  plugins: [],
}
