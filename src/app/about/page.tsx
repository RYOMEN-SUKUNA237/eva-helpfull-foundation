"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

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
              <h1 className="text-3xl sm:text-4xl font-semibold">Eva Helpful Foundation</h1>
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
          </section>
        </main>
      </div>
    </div>
  );
}
