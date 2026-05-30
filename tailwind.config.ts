import type { Config } from "tailwindcss"

const darkest = "197, 94%, 6%"
const darker = "201, 96%, 9%"
const dark = "204, 97%, 12%"
const mediumDark = "206, 98%, 18%"
const medium = "208, 100%, 30%"
const mediumLight = "208, 49%, 56%"
const light = "208, 72%, 82%"
const lighter = "208, 68%, 90%"
const lightest = "189, 100%, 94%"
const white = "0, 0%, 99%"

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "media",
  theme: {
    extend: {
      colors: {
        darkest: `hsl(${darkest})`,
        darker: `hsl(${darker})`,
        dark: `hsl(${dark})`,
        "medium-dark": `hsl(${mediumDark})`,
        medium: `hsl(${medium})`,
        "medium-light": `hsl(${mediumLight})`,
        light: `hsl(${light})`,
        lighter: `hsl(${lighter})`,
        lightest: `hsl(${lightest})`,
        white: `hsl(${white})`,
      },
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      dropShadow: {
        dark: "0 2px 4px rgba(20, 20, 20, 0.5)",
        darker: "0 2px 4px rgba(20, 20, 20, 0.8)",
        light: "0 2px 4px rgba(250, 250, 250, 0.5)",
        lighter: "0 2px 4px rgba(250, 250, 250, 0.8)",
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.3rem",
        sm: "0.2rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
