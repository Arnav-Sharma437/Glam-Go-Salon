import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gold: {
          50: "#fbf8f0",
          100: "#f5eedb",
          200: "#ebdeb5",
          300: "#ddc787",
          400: "#d0b05b",
          500: "#c59956", // Primary brand gold
          600: "#a97d41",
          700: "#865e33",
          800: "#6e4b2e",
          900: "#5b3e2a",
        },
        noir: {
          950: "#080808",
          900: "#0f0f0f",
          850: "#161616",
          800: "#1e1e1e",
          700: "#2d2d2d",
        },
        cream: {
          50: "#FCFAF7",
          100: "#F9F6F0",
          200: "#F2ECE1",
          300: "#E5DDD0",
        },
      },
      fontFamily: {
        serif: ["var(--font-marcellus)", "var(--font-playfair)", "serif"],
        sans: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        widest_luxury: "0.25em",
        wide_luxury: "0.15em",
      },
      boxShadow: {
        luxury: "0 10px 40px -10px rgba(0, 0, 0, 0.08)",
        luxury_hover: "0 20px 50px -15px rgba(197, 153, 86, 0.18)",
        gold_glow: "0 0 25px rgba(197, 153, 86, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
