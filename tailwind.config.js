/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'dark-toggle',
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
