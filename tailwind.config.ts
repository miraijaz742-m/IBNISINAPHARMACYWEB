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
        /** Brand primary — user #38B6FF */
        primary: {
          DEFAULT: "#38B6FF",
          hover: "#2CA3EB",
          muted: "rgba(56, 182, 255, 0.1)",
        },
        secondary: "#2A99E0",
        mint: "#5EBB9B",
        hero: {
          DEFAULT: "#1578C4",
          deep: "#0d4a7a",
        },
        cta: "#5EBB9B",
        "cta-hover": "#4DA88A",
        surface: "#F5F9FC",
        paper: "#f1f3f6",
        "paper-warm": "#eeeff2",
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
        display: ["var(--font-display)", "Georgia", "ui-serif", "serif"],
        urdu: ["var(--font-urdu)", "Tahoma", "Segoe UI", "sans-serif"],
      },
      boxShadow: {
        /** Diffuse, low-contrast — matte finish (no glossy color glow) */
        matte:
          "0 1px 0 rgb(255 255 255 / 0.65) inset, 0 22px 48px -28px rgb(15 23 42 / 0.12), 0 8px 20px -12px rgb(15 23 42 / 0.06)",
        "matte-sm":
          "0 1px 0 rgb(255 255 255 / 0.5) inset, 0 12px 28px -20px rgb(15 23 42 / 0.1), 0 4px 12px -6px rgb(15 23 42 / 0.05)",
        "matte-lg":
          "0 1px 0 rgb(255 255 255 / 0.55) inset, 0 32px 64px -36px rgb(15 23 42 / 0.14), 0 12px 28px -16px rgb(15 23 42 / 0.07)",
        card: "0 20px 50px -28px rgb(15 23 42 / 0.11), 0 8px 20px -12px rgb(15 23 42 / 0.05)",
        lift: "0 28px 56px -32px rgb(15 23 42 / 0.12), 0 12px 24px -14px rgb(15 23 42 / 0.06)",
        glass: "0 12px 40px -16px rgb(15 23 42 / 0.08)",
      },
      backdropBlur: {
        glass: "12px",
      },
      animation: {
        "fade-up": "fadeUp 0.65s ease-out forwards",
        "fade-up-slow": "fadeUp 0.85s ease-out forwards",
        "slide-in": "slideIn 0.6s ease-out forwards",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideIn: {
          "0%": { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
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
