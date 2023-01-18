/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#14b8a6",
        dark: "#0f172a",
      },
      fontFamily: {
        Inter: "Inter , sans-serif",
        Poppins: "Poppins",
      },
      screens: {},
      animation: {
        "spin-slow": "spin 5s ease infinite",
      },
    },
  },
  plugins: [],
};
