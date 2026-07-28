import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      xs: "380px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FBF2E4",
          light: "#FDF8F0",
          dark: "#F3E6D2",
        },
        maroon: {
          DEFAULT: "#7A2432",
          light: "#93394A",
          dark: "#5C1B26",
        },
        gold: {
          DEFAULT: "#B4894F",
          light: "#C9A063",
          dark: "#96713D",
        },
        ink: {
          muted: "#8A8078",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "mandala-glow":
          "radial-gradient(circle at center, rgba(180,137,79,0.10) 0%, rgba(180,137,79,0) 70%)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 60s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
