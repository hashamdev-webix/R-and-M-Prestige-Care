import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1B3A6B",
          50: "#EEF4FB",
          100: "#D4E4F7",
          200: "#A9C9EF",
          300: "#7EAEE7",
          400: "#5393DF",
          500: "#2878D7",
          600: "#1B3A6B",
          700: "#152E54",
          800: "#0F223D",
          900: "#0A1626",
        },
        green: {
          DEFAULT: "#2E9E4F",
          50: "#F0F9F3",
          100: "#D9F0E0",
          200: "#B3E1C1",
          300: "#8DD2A2",
          400: "#67C383",
          500: "#2E9E4F",
          600: "#257E3F",
          700: "#1C5F2F",
          800: "#133F20",
          900: "#0A2010",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        heading: ["var(--font-poppins)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
