/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // Elegant & tech palette 🌸💻
        softLavender: "#d8b4fe",
        techPurple: "#a78bfa",
        blushPink: "#fbcfe8",
        softBlue: "#bae6fd",
        mintGreen: "#bbf7d0",
        sunshineGold: "#fcd34d",

        // Replacing desert tones with elegant tones
        darkText: "#2e2e2e",
        lightBackground: "#fdfafa",
        accent: "#8b5cf6", // vibrant purple for buttons, tags
      },
      fontFamily: {
        elegant: ['"DM Sans"', "sans-serif"],
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
  ],
};
