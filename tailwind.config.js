/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryBg: "#0F0F0F",
        primary: "#F90900",
        // secondary: "#00FF00",
        // tertiary: "#0000FF",
      },
    },
  },
  plugins: [],
};
