"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

const VALUES = [
  {
    title: "Changing Values",
    body:
      "As times evolve, traditional values may be challenged. It's essential to reflect on which values we wish to preserve and promote.",
  },
  {
    title: "Mental Health",
    body:
      "Imparting positive values fosters a positive state of mind and supports the mental well-being of our children.",
  },
  {
    title: "Civic Responsibility",
    body:
      "Caring for the next generation is a collective responsibility. Communities must create environments where children can thrive.",
  },
  {
    title: "Sustainable Future",
    body:
      "Prioritizing the education of our children in alignment with sustainability, ethics, and mutual respect.",
  },
];

export default function ProgramsPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="max-w-5xl mx-auto space-y-8">
            <header className="space-y-3 text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Essential Values
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold">
                Our Essential Values: Building Responsible Futures
              </h1>
              <p className="mx-auto max-w-3xl text-sm sm:text-base text-slate-100/80">
                These pillars guide our work with children, adolescents, and the adults who support them.
                Each value is translated into practical conversations, activities, and everyday choices.
              </p>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {VALUES.map((item) => (
                <article
                  key={item.title}
                  className="glass-panel p-4 sm:p-5 flex flex-col gap-3 text-sm h-full"
                >
                  <div className="inline-flex items-center gap-2 rounded-full bg-orange-500/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-orange-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    Essential Value
                  </div>
                  <h2 className="text-lg font-semibold text-orange-300">{item.title}</h2>
                  <p className="text-slate-100/85">{item.body}</p>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
