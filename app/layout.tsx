import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://kegler.dev"),
  title: "Eduardo Kegler | Portfolio",
  description:
    "Showcasing my work as a software engineer specializing in React, Typescript and Next.js.",
  keywords:
    "Eduardo Kegler, portfolio, web developer, Next.js, React, TypeScript, PostgreSQL, Software Engineer",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Eduardo Kegler | Portfolio",
    description:
      "Explore my projects and skills as a software engineer specializing in React.",
    url: "https://kegler.dev",
    siteName: "Eduardo Kegler Portfolio",
    images: [
      {
        url: "/og-image.png",
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
    images: ["/og-image.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Eduardo Kegler",
      jobTitle: "Senior Software Engineer",
      url: "https://kegler.dev",
      email: "eduardokegler1@gmail.com",
      image: "https://kegler.dev/og-image.png",
      sameAs: [
        "https://www.linkedin.com/in/eduardokegler/",
        "https://github.com/EduKegler",
      ],
    },
    {
      "@type": "WebSite",
      name: "Eduardo Kegler Portfolio",
      url: "https://kegler.dev",
      description:
        "Showcasing my work as a software engineer specializing in React, Typescript and Next.js.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`antialiased max-w-[1280px] mx-auto`}>{children}</body>
    </html>
  );
}
