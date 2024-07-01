/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Oswald", "Poppins", "sans-serif"],
    },
    extend: {
      animation: {
        marquee: "marquee 15s linear infinite",
        marquee2: "marquee2 15s linear infinite",
        upDown: "upDown 1s infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
        upDown: {
          "0%": { transform: "translateX(0)", rotate: "-90deg" },
          "50%": { transform: "translateX(-20px)", rotate: "-90deg" },
          "100%": { transform: "translateX(0px)", rotate: "-90deg" },
        },
      },
    },
  },
  plugins: [],
};
