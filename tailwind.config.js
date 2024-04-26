/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Mons: ["Montserrat", "sans-serif"],
      lato: ["Lato", "sans-serif"],
      inter: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
