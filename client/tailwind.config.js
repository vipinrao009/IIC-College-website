module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure this is correct
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite", // Animation duration can be adjusted
      },
      keyframes: {
        marquee: {
          "0%": {
            transform: "translateX(100%)", // Start from the right
          },
          "100%": {
            transform: "translateX(-100%)", // End at the left
          },
        },
      },
    },
  },
  plugins: [],
};
