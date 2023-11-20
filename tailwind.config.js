module.exports = {
  content: [
    "./pages/**/*.{js,jsx,tsx}",
    "./components/**/*.{js,jsx,tsx}",
    "*/*.{js,jsx,tsx,ttf}",
    "./*.{js,jsx,tsx,ttf}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["PlayfairDisplay-Black", "sans"],
        playfairExtraBold: ["PlayfairDisplay-ExtraBold", "sans"],
      },
      animation: {
        "fade-out-1000": "fadeOut 1s ease-out",
        "fade-out-2000": "fadeOut 2s ease-out",
        "fade-out-3000": "fadeOut 2s ease-out",
      },
      keyframes: {
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".absoluteYcenter": {
          top: "50%",
          transform: "translateY(-50%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        ".absoluteXcenter": {
          left: "50%",
          transform: "translateX(-50%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }) {
      const newUtilities = {
        ".absoluteXYcenter": {
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
