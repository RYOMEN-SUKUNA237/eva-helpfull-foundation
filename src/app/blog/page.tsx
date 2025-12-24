import type { Metadata } from "next";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Blog | Parenting Tips & Values Education Resources",
  description:
    "Read practical stories, parenting guides, and insights on values-based education from Eva Helpful Foundation. Resources for parents, teachers, and community leaders in Cameroon.",
  keywords: [
    "parenting blog Cameroon",
    "values education articles",
    "teaching children values",
    "emotional intelligence tips",
    "African parenting resources",
    "character development blog",
    "Eva Helpful Foundation blog",
    "parenting tips Africa",
    "how to teach kids honesty",
    "raise respectful children",
    "teaching empathy to children",
    "child behavior tips",
    "youth guidance Cameroon",
    "family values blog",
    "positive parenting",
    "discipline with love",
    "moral lessons for kids",
    "stories for children values",
    "parent guide Cameroon",
    "teen advice Africa",
  ],
  openGraph: {
    title: "Blog | Eva Helpful Foundation",
    description:
      "Practical stories, parenting guides, and insights on values-based education for parents and teachers.",
    url: `${siteUrl}/blog`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Eva Helpful Foundation",
    description:
      "Practical stories and parenting guides on values-based education.",
  },
  alternates: {
    canonical: `${siteUrl}/blog`,
  },
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-4 pb-36 pt-28 sm:px-6 lg:px-8">
        <header className="space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            Eva Helpful Blog
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Stories and resources for value-based parenting and education
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-100/85">
            Browse reflections, practical guides, and program highlights from the Eva Helpful Foundation
            team.
          </p>
        </header>

        <section aria-label="Blog articles" className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/blog/5-ways-to-teach-honesty"
            className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
              For Parents
            </p>
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              5 Simple Ways to Teach Honesty to Your Child This Week
            </h2>
            <p className="mb-3 text-slate-100/80">
              Struggling to teach values at home? Discover 5 practical tips to encourage honesty and build
              trust with your children.
            </p>
            <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
          </Link>

          <Link
            href="/blog/emotional-intelligence-in-schools"
            className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
              Future of Education
            </p>
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              The Future of Education: Integrating Emotional Intelligence in Schools
            </h2>
            <p className="mb-3 text-slate-100/80">
              Discover why Social and Emotional Learning (SEL) is essential for safer, happier, and more
              successful schools.
            </p>
            <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
          </Link>

          <Link
            href="/blog/managing-teen-smartphone-use-cameroon"
            className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
              Parenting Guides
            </p>
            <h2 className="text-base sm:text-lg font-semibold mb-2">
              The Silent Epidemic: A Cameroonian Parents Guide to Managing Teen Smartphone Use
            </h2>
            <p className="mb-3 text-slate-100/80">
              Is your teen constantly on their phone? Explore practical strategies to manage screen time, build
              trust, and restore family connection.
            </p>
            <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
          </Link>
        </section>
      </div>
    </main>
  );
}
