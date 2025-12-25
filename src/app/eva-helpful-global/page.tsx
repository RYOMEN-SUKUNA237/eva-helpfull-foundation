import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiGlobe, FiHeart, FiUsers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Eva Helpful Global",
  description:
    "Eva Helpful Global is the international arm of Eva Helpful Foundation, partnering across countries to promote positive values, citizenship, and psycho-social wellbeing among children and adolescents.",
};

export default function EvaHelpfulGlobalPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col gap-16">
          {/* Hero – Eva Helpful Global */}
          <section className="mx-auto w-full max-w-5xl">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-200">
                <FiGlobe className="h-3.5 w-3.5" />
                <span>Eva Helpful Global</span>
              </div>
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
                  Eva Helpful Global
                </h1>
                <p className="text-sm sm:text-base text-slate-100/85">
                  Extending the Eva Helpful Essential Values beyond borders – nurturing children and adolescents
                  to become responsible, value-driven global citizens.
                </p>
              </div>
            </div>
          </section>

          {/* About Eva Helpful Global – structured like About section */}
          <section className="mx-auto w-full max-w-5xl">
            <div className="glass-panel p-6 sm:p-8 space-y-8">
              <header className="space-y-2 text-center sm:text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                  About Eva Helpful Global
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                  Taking values-based education to the world
                </h2>
              </header>

              <div className="grid gap-6 md:grid-cols-2 text-sm sm:text-base text-slate-100/85">
                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                    <FiHeart className="h-5 w-5" />
                    Our global mission
                  </h3>
                  <p>
                    <strong>Eva Helpful Global</strong> is the international arm of the Eva Helpful Foundation,
                    dedicated to fostering global collaboration and promoting positive values among children and
                    adolescents. Operating across multiple countries, the initiative engages diverse communities
                    to develop programs that cultivate honesty, empathy, integrity, respect, and responsibility,
                    ensuring that young people grow into responsible adults and active global citizens.
                  </p>
                  <p>
                    Eva Helpful Global also prioritises values relating to psycho-social and mental well-being,
                    environmental protection, and sustainable livelihood practices. By enhancing understanding of
                    cultural and social diversity, the initiative equips children and adolescents with the
                    knowledge, skills, and values needed to contribute positively to society.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                    <FiUsers className="h-5 w-5" />
                    How we work across borders
                  </h3>
                  <p>
                    Through strategic partnerships with educational institutions, community organisations,
                    companies, NGOs, governmental institutions, and international stakeholders, Eva Helpful Global
                    implements programs that deliver measurable outcomes: strengthened citizenship, enhanced
                    social and emotional competencies, and improved cross-cultural awareness.
                  </p>
                  <p>
                    By leveraging global networks and sharing best practices, the initiative empowers children and
                    adolescents to become socially conscious, responsible, and contributing members of their
                    communities and the wider world.
                  </p>
                </section>
              </div>
            </div>
          </section>

          {/* Eva Helpful Global Team */}
          <section className="mx-auto w-full max-w-5xl space-y-8">
            <header className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Eva Helpful Global Team
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 flex items-center gap-3">
                <FiGlobe className="h-7 w-7 text-orange-300" />
                Country Representatives
              </h2>
              <p className="text-sm sm:text-base text-slate-200/80">
                Country representatives help extend Eva Helpful&apos;s values driven work into
                communities around the world.
              </p>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Arianna Romano */}
              <a
                href="/team/arianna-romano"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Picture1.png"
                    alt="Arianna Romano"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                    Arianna Romano
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Country Representative – United Kingdom
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Based in Romford, London</p>
                </div>
              </a>

              {/* Ndifongong Ferdinand Nsanyui */}
              <a
                href="/team/ndifongong-ferdinand-nsanyui"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Ndifongong%20Ferdinand%20Nsanyui.png"
                    alt="Ndifongong Ferdinand Nsanyui"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                    Ndifongong Ferdinand Nsanyui
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Country Representative – South Korea
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of Residence: South Korea</p>
                </div>
              </a>
            </div>

            <p className="text-center text-xs sm:text-sm text-slate-200/80">
              Stay tuned – more Eva Helpful Global country teams, stories, and features are on the way.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}
