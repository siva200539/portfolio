/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
       fontSize: {
        'huge': '5rem', // you can use text-huge
        'gigantic': '8rem',
      },
    },
  },
  plugins: [],
};
