/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      jockey: "Jockey One, sans-serif",
      poppins: "Poppins, sans-serif",
    },
    extend: {
      colors: {
        trwaifu: "#3C38FC",
        teambg: "#363498",
        placeholder: "#D9D9D9",
      },
    },
  },
  plugins: [],
};
