import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { DOCUMENTATIONS } from "@/data/documentations";

export const metadata: Metadata = {
  title: "About Eva Helpful Foundation",
  description:
    "Learn about Eva Helpful Foundation's mission to promote essential values and character development in children and adolescents, and explore our official documentation.",
};

export default function AboutPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="max-w-5xl mx-auto space-y-8">
            <header className="space-y-3 text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                About Us
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">Eva Helpful Foundation</h1>
              <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-100/80">
                Promoting essential values and character development in children and adolescents.
              </p>
            </header>

            <article className="glass-panel p-6 sm:p-8 space-y-8">
              <section className="border-l-4 border-orange-400/80 pl-4 sm:pl-6">
                <p className="text-lg sm:text-2xl italic text-slate-50">
                  "No Values, No Future for Our Children: The Eva Helpful Essential Values"
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-orange-300">Our Core Identity</h2>
                <p className="text-sm sm:text-base text-slate-100/85">
                  The Eva Helpful Foundation is a pioneering organization that promotes reputable values
                  and character development in children and adolescents for a sustainable and responsible
                  adulthood.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="text-xl font-semibold text-orange-300">Why We Exist</h2>
                <p className="text-sm sm:text-base text-slate-100/85">
                  Around the world, many parents and caregivers are facing increasing pressure: longer
                  working hours, financial uncertainty, and constant digital distraction. As a result,
                  there is often less intentional time to sit with children, talk about values, and model
                  the kind of character that prepares them for life. Schools are also stretched, and may
                  not always have the tools or space to address values and emotional development in a
                  consistent way.
                </p>
                <p className="text-sm sm:text-base text-slate-100/85">
                  When this happens, children are left to learn primarily from social media, peers, and
                  whatever voices are the loudest around them. This can lead to confusion about identity,
                  a loss of respect for self and others, and behaviours that place both their wellbeing and
                  their future at risk.
                </p>
                <p className="text-sm sm:text-base text-slate-100/85">
                  Eva Helpful Foundation steps into this gap by partnering with schools, families, and
                  communities to make values education visible, practical, and consistent. Through
                  interactive sessions, storytelling, and real-life examples, we help young people
                  understand that values such as respect, empathy, responsibility, honesty, and kindness
                  are not abstract ideas, but everyday choices that shape their future and the future of
                  their communities.
                </p>
              </section>
            </article>

            <section className="space-y-4">
              <header className="space-y-1">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                  Official Documents
                </p>
                <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  Eva Helpful Documentation Library
                </h2>
                <p className="text-sm sm:text-base text-slate-100/80">
                  A quick preview of key official documents. Tap a card to open the full PDF.
                </p>
              </header>

              <div className="grid gap-4 sm:grid-cols-2">
                {DOCUMENTATIONS.slice(0, 2).map((doc) => (
                  <a
                    key={doc.slug}
                    href={`/documentations/${encodeURIComponent(doc.file)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group block"
                  >
                    <article className="glass-panel flex items-center gap-3 p-4 sm:p-5 text-xs sm:text-sm group-hover:bg-white/10 transition-colors">
                      <div className="flex h-16 w-14 sm:h-20 sm:w-16 flex-shrink-0 items-center justify-center rounded-md border border-white/25 bg-slate-900/70">
                        <span className="text-[10px] sm:text-xs font-semibold text-orange-200">PDF</span>
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-[11px] sm:text-sm font-semibold text-slate-50">{doc.title}</h3>
                        <p className="text-[11px] sm:text-[13px] text-slate-100/85 line-clamp-3">
                          {doc.description}
                        </p>
                        <p className="mt-1 text-[10px] sm:text-[11px] text-slate-300/85">
                          Click to open full view-only PDF in a new tab.
                        </p>
                      </div>
                    </article>
                  </a>
                ))}
              </div>

              <div>
                <Link
                  href="/docs"
                  className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-orange-300 hover:text-orange-200"
                >
                  View more documents
                  <span className="ml-1 text-base leading-none">→</span>
                </Link>
              </div>
            </section>

          </section>
        </main>
      </div>
    </div>
  );
}
