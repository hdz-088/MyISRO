import {
  Audiowide,
  JetBrains_Mono,
  Michroma,
  Sarpanch,
  Zen_Dots,
} from "next/font/google";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Zen_Dots: ["Zen Dots", "sans-serif"],
        Michroma: ["Michroma", "serif"],
      },
      boxShadow: {
        "custom-inset":
          "30px 30px 50px 0 #12141e inset, -30px -30px 50px 0 #12141e inset",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "black-transparent": "rgba(0, 0, 0, 0.15)",
        "white-transparent": "rgba(255, 255, 255, 0.15)",
      },
      keyframes: {
        hoverInSpace: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
      animation: {
        hoverInSpace: "hoverInSpace 7s ease-in-out infinite",
      },
      textShadow: {
        cover: "0 0 10px rgba(0, 0, 0, 1)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-cover": {
          "text-shadow": "0 0 10px rgba(0, 0, 0, 1)",
        },
      });
    },
  ],
};
