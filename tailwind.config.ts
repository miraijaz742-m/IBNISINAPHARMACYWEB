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
        /** Increment 1 — premium clinical landing (#4DA6FF) */
        primary: {
          DEFAULT: "#4DA6FF",
          hover: "#3B94F0",
          muted: "rgba(77, 166, 255, 0.12)",
        },
        secondary: "#2B7FD4",
        mint: "#5EBB9B",
        hero: {
          DEFAULT: "#1A56B3",
          deep: "#0d3d82",
        },
        cta: "#5EBB9B",
        "cta-hover": "#4DA88A",
        surface: "#F5F9FC",
        paper: "#f4f7fa",
        ink: "#0f172a",
        accent: {
          purple: "#7C3AED",
          "purple-deep": "#6D28D9",
        },
        highlight: "#FEF9C3",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "sans-serif",
        ],
        urdu: ["var(--font-urdu)", "Tahoma", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(77, 166, 255, 0.12), 0 2px 12px rgba(15, 23, 42, 0.06)",
        lift: "0 12px 40px rgba(77, 166, 255, 0.18), 0 4px 16px rgba(15, 23, 42, 0.08)",
        glass: "0 8px 32px rgba(15, 23, 42, 0.08)",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
