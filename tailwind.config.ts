import type { Config } from "tailwindcss";
import { Color } from "./contants/colors";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./primitives/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "414px",
      },
      colors: {
        background: "var(--background)",
        level1: Color.level1,
        level2: Color.level2,
        level3: Color.level3,
        level4: Color.level4,
        level5: Color.level5,
      },
    },
  },
  plugins: [],
} satisfies Config;
