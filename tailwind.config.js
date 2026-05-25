/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#38b6ff",
          hover: "#2ca3eb",
        },
        secondary: "#2a99e0",
        mint: "#52a88e",
        paper: "#ffffff",
        ink: "#0f172a",
      },
      fontFamily: {
        sans: ["var(--font-geist)", "var(--font-inter)", "sans-serif"],
        display: ["var(--font-geist)", "sans-serif"],
        urdu: ["var(--font-urdu)", "Noto Naskh Arabic", "serif"],
      },
    },
  },
  plugins: [],
};
