import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Programs | Essential Values for Responsible Futures",
  description:
    "Explore Eva Helpful Foundation's programs focused on essential values: changing values, mental health, civic responsibility, and sustainable futures for children in Cameroon.",
  keywords: [
    "Eva Helpful programs",
    "values education programs",
    "youth programs Cameroon",
    "mental health education children",
    "civic responsibility youth",
    "sustainable education Africa",
    "character development programs",
    "children programs Cameroon",
    "school programs values",
    "youth outreach programs",
    "life skills for children",
    "emotional learning programs",
    "moral education programs",
    "after school programs Africa",
    "mentorship programs youth",
    "child development programs",
    "teen programs Cameroon",
    "community programs for kids",
    "values workshops",
    "school partnership programs",
  ],
  openGraph: {
    title: "Programs | Eva Helpful Foundation",
    description:
      "Our programs focus on essential values that build responsible futures for children and young people.",
    url: `${siteUrl}/programs`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programs | Eva Helpful Foundation",
    description:
      "Essential values programs for responsible futures in Cameroon.",
  },
  alternates: {
    canonical: `${siteUrl}/programs`,
  },
};

export default function ProgramsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
