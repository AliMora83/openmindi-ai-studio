import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        sand: "#F5EDD8",
        clay: "#C1622F",
        ochre: "#D4903A",
        dusk: "#1A0F0A",
        bark: "#2E1A0E",
        moss: "#3D5A3E",
        cream: "#FAF6EE",
        smoke: "#F0E8D8",
        gold: "#E8B84B",
        "warm-white": "#FFFDF8",
        muted: "#7A5C44",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dmsans: ["var(--font-dm-sans)", "sans-serif"],
        spacemono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "orb-drift": "orb-drift 8s ease-in-out infinite alternate",
        marquee: "marquee 26s linear infinite",
      },
      keyframes: {
        "orb-drift": {
          "0%": { transform: "translate(0, 0) scale(1)" },
          "100%": { transform: "translate(30px, -20px) scale(1.08)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
