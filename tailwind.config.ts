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
          DEFAULT: "#FFFDF7",
          light: "#FFFFFB",
          dark: "#F5F1E6",
        },
        maroon: {
          DEFAULT: "#2F5233",
          light: "#3F6B45",
          dark: "#1F3A22",
        },
        gold: {
          DEFAULT: "#7CB342",
          light: "#96C761",
          dark: "#5D8A2E",
        },
        sage: {
          DEFAULT: "#8A9A5B",
          light: "#A3B18A",
          dark: "#6E7C48",
        },
        ink: {
          muted: "#8A8078",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        script: ["var(--font-script)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        "mandala-glow":
          "radial-gradient(circle at center, rgba(124,179,66,0.10) 0%, rgba(124,179,66,0) 70%)",
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
