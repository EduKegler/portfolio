import { Atkinson_Hyperlegible_Next, Brygada_1918 } from "next/font/google";

export const displayFont = Brygada_1918({ subsets: ["latin"], variable: "--font-display" });
export const labelFont = Atkinson_Hyperlegible_Next({
  subsets: ["latin"],
  variable: "--font-label",
  adjustFontFallback: false,
  fallback: ["system-ui", "sans-serif"],
});
