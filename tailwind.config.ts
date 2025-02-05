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
        foreground: Color.foreground,
        "foreground-light": Color.foregroundLight,
        "foreground-muted": Color.foregroundMuted,

        "border-color": Color.borderColor,

        "background-light": Color.backgroundLight,
      },
    },
  },
  plugins: [],
} satisfies Config;
