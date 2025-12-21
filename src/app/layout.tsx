import type { Metadata } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import { Footer } from "@/components/layout/Footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eva Helpful Foundation",
    template: "%s | Eva Helpful Foundation",
  },
  description:
    "Eva Helpful Foundation – empowering communities through education, health, and social support across Africa.",
  openGraph: {
    title: "Eva Helpful Foundation",
    description:
      "Eva Helpful Foundation – empowering communities through education, health, and social support across Africa.",
    url: siteUrl,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/photo_1_2025-12-03_18-28-46.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Helpful Foundation outreach program group photo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Helpful Foundation",
    description:
      "Eva Helpful Foundation – empowering communities through education, health, and social support across Africa.",
    images: ["/images/photo_1_2025-12-03_18-28-46.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <body className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white antialiased font-sans">
        {/* Floating Eva Helpful Global button */}
        <Link
          href="/eva-helpful-global"
          className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-1 rounded-r-full border border-l-0 border-orange-400/80 bg-orange-500/30 px-4 py-3 text-xs font-semibold text-orange-50 shadow-[0_18px_55px_rgba(248,250,252,0.35)] backdrop-blur-xl hover:bg-orange-500/40 hover:border-orange-300 transition-colors sm:flex"
        >
          <span className="uppercase tracking-[0.18em] leading-tight text-center text-[10px]">
            <span className="block">Eva Helpful</span>
            <span className="block">Global</span>
          </span>
        </Link>
        {/* Mobile floating button, slightly higher to avoid footer */}
        <Link
          href="/eva-helpful-global"
          className="fixed left-0 bottom-24 z-40 flex items-center justify-center rounded-r-full border border-l-0 border-orange-400/80 bg-orange-500/30 px-4 py-2 text-xs font-semibold text-orange-50 shadow-[0_18px_55px_rgba(248,250,252,0.35)] backdrop-blur-xl hover:bg-orange-500/40 hover:border-orange-300 transition-colors sm:hidden"
        >
          Eva Helpful Global
        </Link>

        <div className="flex min-h-screen flex-col pb-56 sm:pb-72">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
