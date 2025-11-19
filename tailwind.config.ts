import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        primary: "#0052CC",
        secondary: "#00C2FF",
        accent: "#041E49",
        background: "#F5F8FF",
        slate: {
          950: "#030712",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "Poppins", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 25px 65px -30px rgba(0, 82, 204, 0.45)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(135deg, rgba(0, 194, 255, 0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(0, 194, 255, 0.08) 25%, transparent 25%), linear-gradient(45deg, rgba(0, 82, 204, 0.08) 25%, transparent 25%), linear-gradient(315deg, rgba(0, 82, 204, 0.08) 25%, #ffffff 25%)",
      },
    },
  },
  plugins: [],
};

export default config;

