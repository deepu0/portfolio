import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://onlyfrontendjobs.com"),
  title: "Deepak Sharma — Senior Frontend Engineer @ Target & Founder of OnlyFrontendJobs",
  description:
    "Senior Frontend Engineer at Target. Founder of OnlyFrontendJobs.com (720+ live roles). Creator of @THEENGINEERBHAI & @ghumta_firta_techie. Topmate mentor with 1.4k+ bookings.",
  keywords: [
    "Deepak Sharma",
    "Senior Frontend Engineer",
    "Target",
    "OnlyFrontendJobs",
    "Frontend Junction",
    "Next.js",
    "React",
    "TypeScript",
    "Topmate",
  ],
  authors: [{ name: "Deepak Sharma", url: "https://onlyfrontendjobs.com" }],
  openGraph: {
    title: "Deepak Sharma — Senior Frontend Engineer @ Target & Founder of OnlyFrontendJobs",
    description:
      "I build web systems that scale, ship products that help developers find work, and chase horizons.",
    url: "https://onlyfrontendjobs.com",
    siteName: "Deepak Sharma Portfolio",
    images: [
      {
        url: "/images/ofj-home.png",
        width: 1200,
        height: 630,
        alt: "Deepak Sharma Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deepak Sharma — Senior Frontend Engineer @ Target",
    description:
      "Senior Frontend Engineer at Target. Founder of OnlyFrontendJobs.com. Mentored 1.4k+ engineers on Topmate.",
    creator: "@sharmadeepak__",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Deepak Sharma",
    jobTitle: "Senior Frontend Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Target",
    },
    url: "https://onlyfrontendjobs.com",
    sameAs: [
      "https://www.linkedin.com/in/depaksharma/",
      "https://github.com/deepu0",
      "https://topmate.io/deepak_sharma/",
      "https://www.youtube.com/@THEENGINEERBHAI",
      "https://www.youtube.com/@ghumta_firta_techie",
      "https://www.instagram.com/devmemes.ai/",
      "https://www.instagram.com/ghumta_phirta_techie",
      "https://x.com/sharmadeepak__",
      "https://t.me/+T824I7hHtsc4YWNl",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
