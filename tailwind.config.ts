import type { Config } from "tailwindcss"

const darkest = "197, 94%, 6%"
const darker = "197, 71%, 14%"
const dark = "197, 66%, 21%"
const mediumDark = "197, 37%, 34%"
const medium = "196, 24%, 46%"
const mediumLight = "176, 14%, 58%"
const light = "126, 15%, 72%"
const lighter = "100, 24%, 83%"
const lightest = "198, 60%, 85%"
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
