module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: "0%" },
          "100%": { width: "100%" }
        },
        blink: {
          "50%": { borderColor: "transparent" }
        }
      },
      animation: {
        typing: "typing 3s steps(20) infinite",
        blink: "blink .7s step-end infinite"
      }
    }
  },
  plugins: []
};
