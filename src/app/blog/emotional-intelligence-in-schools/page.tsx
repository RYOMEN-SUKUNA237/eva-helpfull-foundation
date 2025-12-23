import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  title: "The Future of Education: Integrating Emotional Intelligence in Schools | Eva Helpful Foundation",
  description:
    "Is your child smart but unhappy? Discover why Social and Emotional Learning (SEL) is the missing link in Cameroonian schools and how it prevents violence and boosts success.",
  openGraph: {
    title: "The Future of Education: Integrating Emotional Intelligence in Schools | Eva Helpful Foundation",
    description:
      "Is your child smart but unhappy? Discover why Social and Emotional Learning (SEL) is the missing link in Cameroonian schools and how it prevents violence and boosts success.",
    url: `${siteUrl}/blog/emotional-intelligence-in-schools`,
    type: "article",
  },
};

export default function EmotionalIntelligenceBlogPost() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-36 pt-28 sm:px-6 lg:px-8">
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
            Social & Emotional Learning in Cameroon
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
            The Future of Education: Integrating Emotional Intelligence in Schools
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-100/85">
            Why Social and Emotional Learning (SEL) is the missing link in many classrooms, and how it can
            transform student wellbeing, safety, and long-term success.
          </p>
          <p className="text-xs text-slate-400">By Eva Helpful Foundation</p>
        </header>

        <article className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(260px,2fr)]">
          <div className="space-y-6 text-sm leading-relaxed sm:text-base">
            <section aria-label="Introduction" className="space-y-4">
              <p>
                For decades, the measure of a "good student" in Cameroon has been simple: high marks in Math,
                high marks in Science, and a report card full of As. But as we look around our communities
                today, we have to ask a difficult question: Is academic intelligence enough?
              </p>
              <p>
                At Eva Helpful Foundation, we believe the answer is no. To build a peaceful society and
                successful future leaders, we must integrate Emotional Intelligence (EQ) into our classrooms
                alongside traditional subjects. This approach is globally known as Social and Emotional Learning
                (SEL).
              </p>
            </section>

            <section aria-labelledby="what-is-sel" className="space-y-3">
              <h2 id="what-is-sel" className="text-xl font-semibold text-orange-300">
                What is Social and Emotional Learning (SEL)?
              </h2>
              <p>
                SEL is not a new subject like History or Geography. It is the process of learning how to manage
                feelings, show empathy for others, and make responsible decisions.
              </p>
              <p>
                Imagine a classroom where a student who fails a test does not tear up their paper in anger but
                asks, "How can I improve?" Imagine a playground where a disagreement does not turn into a fight
                but into a conversation. That is the power of SEL.
              </p>
            </section>

            <section aria-labelledby="why-cameroon-needs-sel" className="space-y-3">
              <h2 id="why-cameroon-needs-sel" className="text-xl font-semibold text-orange-300">
                Why Cameroon needs this now
              </h2>
              <p>Our schools are facing a crisis. We see rising cases of:</p>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-semibold">School violence:</span> Arguments escalating into dangerous
                  physical altercations.
                </li>
                <li>
                  <span className="font-semibold">Student depression:</span> The immense pressure to perform
                  academically is harming mental health.
                </li>
                <li>
                  <span className="font-semibold">Lack of empathy:</span> Students are often competing against
                  each other rather than supporting one another.
                </li>
              </ul>
              <p>
                By teaching values like empathy and tolerance, we treat the root cause of these problems, not
                just the symptoms.
              </p>
            </section>

            <section aria-labelledby="benefits-of-eq" className="space-y-3">
              <h2 id="benefits-of-eq" className="text-xl font-semibold text-slate-50">
                The 3 key benefits of EQ in schools
              </h2>
              <p>
                Research shows that students with high emotional intelligence do not just behave better they
                actually perform better in life.
              </p>

              <h3 className="text-lg font-semibold text-orange-300">1. Better academic results</h3>
              <p>
                A calm mind learns faster. When students know how to handle stress and anxiety, they can focus
                better on their lessons.
              </p>
              <p>
                <Link
                  href="/programs"
                  className="text-sm font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                >
                  See how our partner schools are seeing these results.
                </Link>
              </p>

              <h3 className="text-lg font-semibold text-orange-300">2. Future career success</h3>
              <p>
                Employers today are not just looking for degrees. They are looking for people who can work in
                teams, listen to colleagues, and lead with respect. SEL prepares youth for the modern
                workplace.
              </p>

              <h3 className="text-lg font-semibold text-orange-300">3. Safer communities</h3>
              <p>
                Children who learn to resolve conflicts peacefully at school grow up to be adults who build
                peaceful neighborhoods. This is the heart of our mission at Eva Helpful.
              </p>
            </section>

            <section aria-labelledby="how-eva-helpful-is-leading" className="space-y-3 pt-2">
              <h2 id="how-eva-helpful-is-leading" className="text-xl font-semibold text-slate-50">
                How Eva Helpful is leading the way
              </h2>
              <p>
                We are not waiting for the curriculum to change are bringing the change to the schools.
                Through our outreach programs in Soa and Yaounde, we provide:
              </p>
              <ul className="ml-5 list-disc space-y-1">
                <li>Workshops on self-awareness</li>
                <li>Conflict resolution games</li>
                <li>Mentorship for at-risk students</li>
              </ul>
              <p>
                We are planting the seeds for a generation that is not just smart, but also kind and resilient.
              </p>
            </section>

            <section aria-labelledby="partner-with-us" className="space-y-3 pt-4">
              <h2 id="partner-with-us" className="text-xl font-semibold text-slate-50">
                Partner with us
              </h2>
              <p>
                Are you a school administrator or a concerned parent? Let us work together to bring Emotional
                Intelligence to your classrooms.
              </p>
              <ul className="space-y-2 text-sm sm:text-base">
                <li>
                  <Link
                    href="/#contact"
                    className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                  >
                    Invite Eva Helpful to your school
                  </Link>
                </li>
                <li>
                  <Link
                    href="/donate"
                    className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                  >
                    Support our student workshops
                  </Link>
                </li>
              </ul>
            </section>
          </div>

          <aside className="space-y-5 lg:pl-6">
            <div className="overflow-hidden rounded-2xl border border-white/15 bg-slate-900/40">
              <Image
                src="/images/sel-happy-students.jpg"
                alt="Happy African students participating in a classroom lesson in Cameroon"
                width={1024}
                height={682}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="space-y-3 rounded-2xl border border-orange-400/30 bg-orange-500/10 p-4 text-xs sm:text-sm text-slate-100/90">
              <h2 className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                About this article
              </h2>
              <p>
                This piece is part of Eva Helpful Foundations vision for a future where classrooms develop both
                the minds and hearts of children and young people in Cameroon.
              </p>
            </div>
          </aside>
        </article>

        <section className="mt-10 border-t border-white/10 pt-8 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-semibold text-slate-50 mb-3">You may also like</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/5-ways-to-teach-honesty"
              className="glass-panel flex flex-col p-4 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                For Parents
              </p>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                5 Simple Ways to Teach Honesty to Your Child This Week
              </h3>
              <p className="text-slate-100/80 text-xs sm:text-sm">
                Practical ideas from Eva Helpful Foundation to help you build trust, courage and honesty at home.
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
                A guide to balancing technology, values, and mental well-being for today&apos;s teens.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
