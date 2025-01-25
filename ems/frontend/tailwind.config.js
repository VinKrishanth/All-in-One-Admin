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
      keyframes: {
        spin988: {
          '0%': {
            transform: 'scale(1) rotate(0deg)',
          },
          '20%, 25%': {
            transform: 'scale(1.3) rotate(90deg)',
          },
          '45%, 50%': {
            transform: 'scale(1) rotate(180deg)',
          },
          '70%, 75%': {
            transform: 'scale(1.3) rotate(270deg)',
          },
          '95%, 100%': {
            transform: 'scale(1) rotate(360deg)',
          },
        },
      },
      animation: {
        spin988: 'spin988 2s linear infinite',
      },
    },
  },
  plugins: [],
};
