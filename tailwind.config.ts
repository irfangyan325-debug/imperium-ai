// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        imperium: {
          black: "#1A1916",
          red: "#5A1818",
          gold: "#A48D60",
        },
      },
      letterSpacing: {
        imperial: "0.12em",
      },
      boxShadow: {
        gold: "0 0 24px rgba(164, 141, 96, 0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
