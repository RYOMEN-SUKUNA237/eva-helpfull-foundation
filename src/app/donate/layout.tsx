import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Donate | Support Values-Based Education in Cameroon",
  description:
    "Support Eva Helpful Foundation's mission to deliver values-based education, outreach programs, and mentorship to students and schools in Cameroon. Your donation makes a difference.",
  keywords: [
    "donate to Eva Helpful",
    "support education Cameroon",
    "nonprofit donation Africa",
    "values education charity",
    "children education donation",
    "youth empowerment Cameroon",
    "give to children Cameroon",
    "help children Africa",
    "charity for kids",
    "donate to school programs",
    "support youth mentorship",
    "education charity Africa",
    "fund children education",
    "sponsor a child Cameroon",
    "give to nonprofit",
    "support values education",
    "donate to youth programs",
    "help African children",
    "charitable giving Cameroon",
  ],
  openGraph: {
    title: "Donate to Eva Helpful Foundation",
    description:
      "Your donation helps deliver values-based education and mentorship to students across Cameroon.",
    url: `${siteUrl}/donate`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate to Eva Helpful Foundation",
    description:
      "Support values-based education and mentorship for students in Cameroon.",
  },
  alternates: {
    canonical: `${siteUrl}/donate`,
  },
};

export default function DonateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
