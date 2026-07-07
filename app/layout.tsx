import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Dev Shorts Hub — Web Dev Concepts in 60 Seconds",
    template: "%s | Devdas Shorts",
  },
  description:
    "Master web development one concept at a time. Deep-dive articles for every Daily Dev Shorts episode — React, JavaScript, CSS, Next.js, performance, rendering patterns, and more.",
  keywords: [
    "web development",
    "React",
    "React hooks",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "CSS",
    "HTML",
    "frontend development",
    "web performance",
    "rendering patterns",
    "SSR",
    "SSG",
    "Virtual DOM",
    "useState",
    "useEffect",
    "web dev tutorial",
    "Daily Dev Shorts",
    "Devdas Shorts",
  ],
  authors: [{ name: "Devdas", url: "https://instagram.com/react_devdas" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Dev Shorts Hub — Web Dev Concepts in 60 Seconds",
    description:
      "Master web development one concept at a time. Deep-dive articles for every Daily Dev Shorts episode.",
    siteName: "Dev Shorts Hub",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev Shorts Hub",
    description: "Deep-dive articles for every Daily Dev Shorts episode.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isProd = process.env.NODE_ENV === "production";

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {isProd && process.env.NEXT_PUBLIC_ADSENSE_CLIENT && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_ADSENSE_CLIENT}`}
            crossOrigin="anonymous"
          />
        )}
      </head>
      <body
        className="min-h-full flex flex-col relative"
        style={{ background: "#060913", color: "#e1e4e8" }}
      >
        {/* Background ambient orbs */}
        <div className="bg-orb bg-orb-1" aria-hidden="true" />
        <div className="bg-orb bg-orb-2" aria-hidden="true" />
        <div className="bg-orb bg-orb-3" aria-hidden="true" />

        {/* Header */}
        <Header />

        {/* Page content */}
        <div className="relative z-10 flex-1 flex flex-col">
          {children}
        </div>

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
