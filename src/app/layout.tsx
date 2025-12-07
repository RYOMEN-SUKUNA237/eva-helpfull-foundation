import type { Metadata } from "next";
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
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Helpful Foundation",
    description:
      "Eva Helpful Foundation – empowering communities through education, health, and social support across Africa.",
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
        <div className="flex min-h-screen flex-col">
          <div className="flex-1">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
