import styles from "@/features/resume/components/resume.module.css";
import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "Eduardo Kegler | Resume",
  description:
    "Senior Frontend Engineer specializing in authentication, onboarding, and real-time trading interfaces. React, TypeScript, Next.js, GraphQL.",
  alternates: {
    canonical: "/resume",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Eduardo Kegler | Resume",
    description:
      "Senior Frontend Engineer specializing in authentication, onboarding, and real-time trading interfaces.",
    url: "https://kegler.dev/resume",
    siteName: "Eduardo Kegler Portfolio",
    type: "profile",
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
  return <div className={styles.page}>{children}</div>;
}
