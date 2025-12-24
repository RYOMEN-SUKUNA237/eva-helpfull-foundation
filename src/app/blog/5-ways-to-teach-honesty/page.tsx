import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "5 Simple Ways to Teach Honesty to Your Child This Week",
  description:
    "Struggling to teach values at home? Discover 5 practical tips to encourage honesty and build trust with your children. A guide for Cameroonian parents from Eva Helpful Foundation.",
  keywords: [
    "teaching honesty to children",
    "parenting tips Cameroon",
    "building trust with children",
    "values-based parenting",
    "moral education at home",
    "character development children",
    "honesty activities for kids",
    "African parenting values",
    "family values education",
  ],
  authors: [{ name: "Eva Helpful Foundation" }],
  openGraph: {
    title: "5 Simple Ways to Teach Honesty to Your Child This Week",
    description:
      "Struggling to teach values at home? Discover 5 practical tips to encourage honesty and build trust with your children. A guide for Cameroonian parents from Eva Helpful Foundation.",
    url: `${siteUrl}/blog/5-ways-to-teach-honesty`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "article",
    publishedTime: "2025-12-20T00:00:00.000Z",
    authors: ["Eva Helpful Foundation"],
    images: [
      {
        url: `${siteUrl}/images/parent-teaching-child-values.jpg`,
        width: 1200,
        height: 630,
        alt: "Parent teaching child values at home in Cameroon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "5 Simple Ways to Teach Honesty to Your Child This Week",
    description:
      "Practical tips to encourage honesty and build trust with your children at home.",
    images: [`${siteUrl}/images/parent-teaching-child-values.jpg`],
  },
  alternates: {
    canonical: `${siteUrl}/blog/5-ways-to-teach-honesty`,
  },
};

export default function TeachHonestyBlogPost() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "5 Simple Ways to Teach Honesty to Your Child This Week",
    description:
      "Struggling to teach values at home? Discover 5 practical tips to encourage honesty and build trust with your children. A guide for Cameroonian parents from Eva Helpful Foundation.",
    image: `${siteUrl}/images/parent-teaching-child-values.jpg`,
    author: {
      "@type": "Organization",
      name: "Eva Helpful Foundation",
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Eva Helpful Foundation",
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/photo_2025-12-05_09-46-53.jpg`,
      },
    },
    datePublished: "2025-12-20T00:00:00.000Z",
    dateModified: "2025-12-20T00:00:00.000Z",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteUrl}/blog/5-ways-to-teach-honesty`,
    },
    keywords:
      "teaching honesty to children, parenting tips Cameroon, building trust with children, values-based parenting, moral education at home",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${siteUrl}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "5 Ways to Teach Honesty",
        item: `${siteUrl}/blog/5-ways-to-teach-honesty`,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-between text-[11px] sm:text-xs text-slate-300/80">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/5 px-3 py-1.5 font-medium text-slate-100 hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <span className="text-lg leading-none">←</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            Parenting Tips in Cameroon
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
            5 Simple Ways to Teach Honesty to Your Child This Week
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-100/85">
            Practical ideas from Eva Helpful Foundation to help you build trust, courage and honesty with
            your child at home.
          </p>
          <p className="text-xs text-slate-400">By Eva Helpful Foundation</p>
        </header>

        <article className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)]">
          <div className="space-y-6 text-sm leading-relaxed sm:text-base">
            <section aria-label="Introduction" className="space-y-4">
              <p>
                As parents in Cameroon, we often worry about the influences our children face outside the
                home. From school pressure to social media, the temptation to lie or hide the truth is
                everywhere. But here is the good news: honesty is like a muscle. The more we train it at
                home, the stronger it becomes.
              </p>
              <p>
                At Eva Helpful Foundation, we believe that values start at the <span className="italic">roots</span>
                the family. You dont need a lecture hall to teach character; you just need small,
                intentional moments during your daily routine.
              </p>
              <p>Here are 5 practical ways you can encourage honesty in your home this week.</p>
            </section>

            <section aria-labelledby="tip-1" className="space-y-3">
              <h2 id="tip-1" className="text-xl font-semibold text-orange-300">
                1. Model the behavior you want to see
              </h2>
              <p>
                Children are like sponges they soak up what we do, not just what we say. If your child hears you
                tell a "small lie" to a neighbor or on a phone call to avoid a commitment, they learn that lying
                is a convenient tool.
              </p>
              <p>
                <span className="font-semibold">Try this:</span> If you make a mistake, admit it openly in front
                of your children. Saying, "I forgot to buy the bread, I am sorry," teaches them that owning up to
                errors is brave, not shameful.
              </p>
            </section>

            <section aria-labelledby="tip-2" className="space-y-3">
              <h2 id="tip-2" className="text-xl font-semibold text-orange-300">
                2. Praise the truth, even when it hurts
              </h2>
              <p>
                It is a natural reaction to get angry when a child confesses to breaking a plate or losing money.
                But if we react with anger, we teach them that truth equals punishment.
              </p>
              <p>
                <span className="font-semibold">Try this:</span> When they tell you the truth about something bad
                they did, pause. Say, "Thank you for being honest with me. I appreciate your courage. Now, let6s
                talk about how to fix the mistake." This separates the behavior from the value of honesty.
              </p>
            </section>

            <section aria-labelledby="tip-3" className="space-y-3">
              <h2 id="tip-3" className="text-xl font-semibold text-orange-300">
                3. Read stories about moral courage
              </h2>
              <p>
                Stories are powerful teachers. In African tradition, we have always used storytelling to pass down
                wisdom.
              </p>
              <p>
                <span className="font-semibold">Try this:</span> Before bed, tell a story where the hero succeeds
                because they were honest, not because they were strong or rich. Ask your child, "What would you
                have done in that situation?"
              </p>
              <p>
                <Link
                  href="/#values"
                  className="text-sm font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                >
                  See more about our core values here
                </Link>
                .
              </p>
            </section>

            <section aria-labelledby="tip-4" className="space-y-3">
              <h2 id="tip-4" className="text-xl font-semibold text-orange-300">
                4. Avoid "trap" questions
              </h2>
              <p>
                If you know your child did not brush their teeth, dont ask, "Did you brush your teeth?" That is a
                trap that tempts them to lie.
              </p>
              <p>
                <span className="font-semibold">Try this:</span> Instead, state what you know: "I see you haven't
                brushed your teeth yet. Please go do it now." This removes the need for them to invent a story to
                protect themselves.
              </p>
            </section>

            <section aria-labelledby="tip-5" className="space-y-3">
              <h2 id="tip-5" className="text-xl font-semibold text-orange-300">
                5. Create a "truth zone"
              </h2>
              <p>
                Make your home a safe space for difficult conversations. Let your children know that they can tell
                you anything without fear of immediate judgment.
              </p>
              <p>
                <span className="font-semibold">Try this:</span> Establish a rule that if they come to you
                voluntarily to confess a mistake, the consequences will be much lighter than if you find out later.
              </p>
            </section>

            <section aria-labelledby="building-strong-roots" className="space-y-3 pt-4">
              <h2 id="building-strong-roots" className="text-xl font-semibold text-slate-50">
                Building strong roots for the future
              </h2>
              <p>
                Teaching honesty is not a one-time lesson; it is a daily practice. By using these simple tips, you
                are not just raising a polite child; you are building a future leader for our community.
              </p>
              <p>
                At Eva Helpful Foundation, we support families in this journey because we know that strong families
                build strong societies.
              </p>
            </section>

            <section aria-labelledby="join-the-movement" className="space-y-3 pt-4">
              <h2 id="join-the-movement" className="text-xl font-semibold text-slate-50">
                Join the movement
              </h2>
              <p>Do you want to support more values-based education in our schools?</p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link
                    href="/donate"
                    className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                  >
                    Support our outreach programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/volunteer"
                    className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                  >
                    Volunteer with us in Soa
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:pl-6">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/40">
              <Image
                src="/images/parent-teaching-child-values.jpg"
                alt="Parent teaching child values at home in Cameroon"
                width={800}
                height={533}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3 rounded-2xl border border-orange-400/30 bg-orange-500/10 p-4 text-xs sm:text-sm text-slate-100/90">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                About this guide
              </h2>
              <p>
                This article is part of Eva Helpful Foundations resources for parents who want to raise honest,
                confident and value-driven children in Cameroon and beyond.
              </p>
            </div>
          </aside>
        </article>

        <section className="mt-10 border-t border-white/10 pt-8 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-semibold text-slate-50 mb-3">You may also like</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/emotional-intelligence-in-schools"
              className="glass-panel flex flex-col p-4 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                Future of Education
              </p>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                The Future of Education: Integrating Emotional Intelligence in Schools
              </h3>
              <p className="text-slate-100/80 text-xs sm:text-sm">
                Why Social and Emotional Learning (SEL) is essential for safer, happier, and more successful schools.
              </p>
            </Link>

            <Link
              href="/blog/managing-teen-smartphone-use-cameroon"
              className="glass-panel flex flex-col p-4 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                Parenting Guides
              </p>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                The Silent Epidemic: A Cameroonian Parents Guide to Managing Teen Smartphone Use
              </h3>
              <p className="text-slate-100/80 text-xs sm:text-sm">
                Practical strategies to manage teen screen time, build trust, and restore family connection at home.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
