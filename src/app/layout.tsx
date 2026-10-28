import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import Providers from "@/components/common/Providers";
import SkipNavigation from "@/components/common/SkipNavigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://kegler.dev"),
  title: "Eduardo Kegler | Portfolio",
  description:
    "Senior Frontend Engineer. Trading products, auth flows and design systems in React, TypeScript and Next.js.",
  keywords:
    "Eduardo Kegler, portfolio, Senior Frontend Engineer, React, React Native, TypeScript, Next.js, Web3, trading UI, authentication",
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
      "Senior Frontend Engineer. Trading products, auth flows and design systems in React, TypeScript and Next.js.",
    url: "https://kegler.dev",
    siteName: "Eduardo Kegler Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eduardo Kegler | Portfolio",
    description:
      "Senior Frontend Engineer. Trading products, auth flows and design systems in React, TypeScript and Next.js.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Eduardo Kegler",
      jobTitle: "Senior Frontend Engineer",
      url: "https://kegler.dev",
      email: "eduardokegler1@gmail.com",
      image: "https://kegler.dev/opengraph-image",
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
        "Senior Frontend Engineer. Trading products, auth flows and design systems in React, TypeScript and Next.js.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-MB2VZ76TZN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-MB2VZ76TZN');
        `}
      </Script>
      <body className="antialiased max-w-[1280px] mx-auto">
        <SkipNavigation />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
