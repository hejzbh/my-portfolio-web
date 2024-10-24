import { base } from "framer-motion/client";
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
        primary: "#5271FF",
        secondary: "#292929",
        paragraph: "#4f4f4f",
        sidebarBG: "#FAFAFA",
      },
      gridTemplateColumns: {
        "projects-list-xl": "repeat(auto-fit, minmax(280px, 1fr))",
        "projects-list-3xl": "repeat(auto-fit, minmax(350px, 1fr))",
        "projects-list-sm": "repeat(auto-fit, minmax(250px, 1fr))",
      },
    },
    fontSize: {
      xs: ".70rem",
      sm: ".775rem",
      tiny: ".875rem",
      base: "1.1rem",
      lg: "1.180rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "4rem",
      "7xl": "5rem",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "3xl": "1800px",
      "4xl": "1930px",
    },
  },
  plugins: [],
};
export default config;
