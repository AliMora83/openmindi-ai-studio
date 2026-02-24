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
        sand: "var(--sand)",
        clay: "var(--clay)",
        ochre: "var(--ochre)",
        dusk: "var(--dusk)",
        bark: "var(--bark)",
        moss: "var(--moss)",
        cream: "var(--cream)",
        smoke: "var(--smoke)",
        gold: "var(--gold)",
        "warm-white": "var(--warm-white)",
        muted: "var(--muted)",
      },
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        dmsans: ["var(--font-dm-sans)", "sans-serif"],
        spacemono: ["var(--font-space-mono)", "monospace"],
      },
      animation: {
        "orb-drift": "orb-drift 8s ease-in-out infinite alternate",
        marquee: "marquee 22s linear infinite",
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
