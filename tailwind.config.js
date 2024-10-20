/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        blue: "#1e1b4b",
      },
      backgroundImage: {
        bioskop: "url('./src/assets/bioskop.svg')",
      },
    },
  },
  plugins: [],
};
