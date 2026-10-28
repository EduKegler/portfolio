import styles from "@/features/resume/components/resume.module.css";
import type { Metadata, Viewport } from "next";
import clsx from "clsx";
import { displayFont, labelFont } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Eduardo Kegler | Resume",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className={clsx(styles.page, displayFont.variable, labelFont.variable)}>{children}</div>;
}
