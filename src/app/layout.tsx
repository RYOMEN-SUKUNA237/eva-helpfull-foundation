import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import "react-phone-number-input/style.css";
import { Footer } from "@/components/layout/Footer";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-geist-mono",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0f766e",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Eva Helpful Foundation | Values-Based Education in Cameroon",
    template: "%s | Eva Helpful Foundation",
  },
  description:
    "Eva Helpful Foundation builds a generation grounded in values that protect the future through values-based education, school partnerships, and community programs in Cameroon and across Africa.",
  keywords: [
    "Eva Helpful Foundation",
    "Eva Helpful",
    "values education Cameroon",
    "character development children",
    "moral education Africa",
    "youth empowerment Cameroon",
    "parenting values",
    "school partnerships Africa",
    "emotional intelligence children",
    "community programs Cameroon",
    "nonprofit Cameroon",
    "NGO Cameroon",
    "children values",
    "teach children values",
    "teaching values",
    "child development",
    "youth development",
    "adolescent programs",
    "teen mentorship",
    "youth mentorship Cameroon",
    "parenting tips Cameroon",
    "raising children with values",
    "good values for children",
    "respect for children",
    "empathy education",
    "honesty for kids",
    "responsibility children",
    "school outreach Cameroon",
    "education nonprofit Africa",
    "Yaounde nonprofit",
    "Soa Cameroon",
    "child welfare Cameroon",
    "family values Africa",
    "social emotional learning",
    "SEL Cameroon",
    "character education",
    "youth charity Cameroon",
    "children charity Africa",
    "volunteer Cameroon",
    "donate to education Cameroon",
  ],
  authors: [{ name: "Eva Helpful Foundation", url: siteUrl }],
  creator: "Eva Helpful Foundation",
  publisher: "Eva Helpful Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Eva Helpful Foundation | Values-Based Education in Cameroon",
    description:
      "Building a generation grounded in values that protect the future through values-based education, school partnerships, and community programs.",
    url: siteUrl,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/photo_1_2025-12-03_18-28-46.jpg",
        width: 1200,
        height: 630,
        alt: "Eva Helpful Foundation outreach program group photo with students and volunteers in Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eva Helpful Foundation | Values-Based Education",
    description:
      "Building a generation grounded in values that protect the future through values-based education in Cameroon.",
    images: ["/images/photo_1_2025-12-03_18-28-46.jpg"],
    creator: "@evahelpful",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/favicon.ico",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "8370d953ce42b517",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "nonprofit",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NGO",
  "@id": `${siteUrl}/#organization`,
  name: "Eva Helpful Foundation",
  alternateName: "Eva Helpful",
  url: siteUrl,
  logo: `${siteUrl}/photo_2025-12-05_09-46-53.jpg`,
  image: `${siteUrl}/images/photo_1_2025-12-03_18-28-46.jpg`,
  description:
    "Eva Helpful Foundation builds a generation grounded in values that protect the future through values-based education, school partnerships, and community programs in Cameroon.",
  foundingDate: "2025-03-27",
  founder: {
    "@type": "Person",
    name: "Professor Alain Vilard Ndi Isoh",
    jobTitle: "Founder & President",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nkofoulou, Entrée Wague",
    addressLocality: "Soa",
    addressCountry: "CM",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+237-671-808-232",
      contactType: "customer service",
      areaServed: "CM",
      availableLanguage: ["English", "French"],
    },
  ],
  sameAs: [
    "https://www.facebook.com/evahelpful",
    "https://www.instagram.com/evahelpful",
    "https://www.linkedin.com/company/evahelpful",
  ],
  areaServed: {
    "@type": "Country",
    name: "Cameroon",
  },
  knowsAbout: [
    "Values-based education",
    "Character development",
    "Youth empowerment",
    "Emotional intelligence",
    "Parenting",
    "School partnerships",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  url: siteUrl,
  name: "Eva Helpful Foundation",
  description:
    "Building a generation grounded in values that protect the future through values-based education in Cameroon.",
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/?s={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${sans.variable} ${mono.variable}`}>
      <head>
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-teal-950 to-teal-900 text-white antialiased font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
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
