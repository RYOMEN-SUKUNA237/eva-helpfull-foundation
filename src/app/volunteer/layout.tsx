import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Volunteer | Join Eva Helpful Foundation",
  description:
    "Volunteer with Eva Helpful Foundation in Cameroon. Share your time, skills, and passion to help young people grow in values and confidence through our community programs.",
  keywords: [
    "volunteer Eva Helpful",
    "volunteer Cameroon nonprofit",
    "youth mentorship volunteer",
    "education volunteer Africa",
    "community service Cameroon",
    "values education volunteer",
    "volunteer with children",
    "help kids Cameroon",
    "volunteer opportunities Africa",
    "teach children volunteer",
    "mentor youth Cameroon",
    "school volunteer programs",
    "community outreach volunteer",
    "nonprofit volunteer Yaounde",
    "work with children Africa",
    "give back to community",
    "volunteer teaching Africa",
    "youth worker Cameroon",
  ],
  openGraph: {
    title: "Volunteer with Eva Helpful Foundation",
    description:
      "Share your time and skills to help young people grow in values and confidence.",
    url: `${siteUrl}/volunteer`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Volunteer with Eva Helpful Foundation",
    description:
      "Join our community of volunteers making a difference in Cameroon.",
  },
  alternates: {
    canonical: `${siteUrl}/volunteer`,
  },
};

export default function VolunteerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
