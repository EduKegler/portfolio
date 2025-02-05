import "./globals.css";

export const metadata = {
  title: "Eduardo Kegler | Portfolio",
  description:
    "Showcasing my work as a software engineer specializing in React, Typescript and Next.js.",
  keywords:
    "Eduardo Kegler, portfolio, web developer, Next.js, React, TypeScript, PostgreSQL, Software Engineer",
  openGraph: {
    title: "Eduardo Kegler | Portfolio",
    description:
      "Explore my projects and skills as a software engineer specializing in React.",
    url: "https://kegler.dev",
    siteName: "Eduardo Kegler Portfolio",
    images: [
      {
        url: "https://yourportfolio.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Eduardo Kegler Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Kegler | Portfolio",
    description:
      "Discover my latest projects as a software engineer specializing in React.",
    images: ["https://kegler.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="32x32" />
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <body className={`antialiased max-w-[1280px] mx-auto`}>{children}</body>
    </html>
  );
}
