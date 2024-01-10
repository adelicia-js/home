/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        'fosterama':['Fosterama', 'monospace'],
      },
      screens:{
        'mobile-sm':'320px',
        'mobile-md':'375px',
        'mobile-lg':'425px',
      }
    },
  },
  plugins: [],
};
