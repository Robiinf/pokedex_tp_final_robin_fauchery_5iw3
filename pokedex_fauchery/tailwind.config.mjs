module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50", // Vert agréable
        secondary: "#FF9800", // Orange doux
        background: "#F9FAFB", // Gris clair
        surface: "#FFFFFF", // Blanc pur
        textPrimary: "#333333", // Noir doux
        textSecondary: "#666666", // Gris moyen
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
