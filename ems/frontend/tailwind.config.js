export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3490DC",
        secondary: "#FFC312",
        success: "#2ECC71",
        info: "#34495E",
        warning: "#FFA500",
        danger: "#E74C3C",
      },
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
        pacific: ["Pacifico", "san-serif"],
      },
    },
  },
  plugins: [],
};
