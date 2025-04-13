module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "marquee 50s linear infinite",
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInUp: "fadeInUp 1s ease-in-out",
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
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
