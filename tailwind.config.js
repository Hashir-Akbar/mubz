/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./pages/*.html", "./*.js"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
