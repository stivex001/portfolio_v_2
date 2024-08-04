import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  safelist: [{ pattern: /(bg|text)-tag-.(dark)?/, variants: ["dark"] }],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        sm: "480px",
        md: "768px",
        "semi-lg": "1024px",
        lg: "1280px",
        xl: "1440px",
      },
    },
    extend: {
      fontFamily: {
        visby: ["var(--font-visby)"],
        lato: ["var(--font-lato)"],
      },
      gridTemplateColumns: {
        "24": "repeat(24, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        auto: "auto 1fr",
      },
      colors: {
        gray1: "#f7f6fe",
        primary: "#251C31",
        secondary: "#1A0B2E",
        grayish: "#f9fafb",
        grey: {
          "0a": "#0a0a0a",
          "1": "#111111",
          "2": "#222222",
          "3": "#333333",
          "4": "#444444",
          "5": "#555555",
          "6": "#666666",
          "7": "#777777",
          "8": "#888888",
          "9": "#999999",
          "12": "#121212",
          "15": "#151515",
          b: "#bbbbbb",
          d: "#dddddd",
          ea: "#eaeaea",
          fb: "#fbfbfb",
        },
        blue: {
          "100": "#3592FF",
          "200": "#0070F3",
          "300": "#0061D2",
          "d-100": "#3C96ff",
          "d-200": "#3291ff",
          "d-300": "#187ff6",
        },
        tag: {
          redux: "#7D47C3",
          "redux-dark": "#B079F7",
          mongodb: "#009C20",
          "mongodb-dark": "#00B425",
          react: "#0093AA",
          "react-dark": "#00DDFF",
          firebase: "#DC8B02",
          "firebase-dark": "#FFA000",
          typescript: "#007ACC",
          "typescript-dark": "#0189E5",
          javascript: "#EBAD0E",
          "javascript-dark": "#EBAD0E",
          html: "#FF5800",
          "html-dark ": "#FF5800",
          css: "#0067FA",
          "css-dark": "#0067FA",
          scss: "#DC5F9B",
          "scss-dark": "#DC5F9B",
          "node-js": "#3C823B",
          "node-js-dark": "#4A9F49",
          "next-js": "#666666",
          "next-js-dark": "#bbbbbb",
        },
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom,var(--white),var(--primary-50))",
        grad: "url('/Gradient.png')",
        // aboutImg: "url('/src/images/modern.jpg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
