import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers, FiHeart, FiGlobe } from "react-icons/fi";

export default function EndorsersAndValueAdvocatesPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                Endorsers &amp; Value Advocates
              </h1>
              <p className="text-sm sm:text-base text-slate-100/80 max-w-2xl mx-auto">
                The Foundation is supported by respected voices across academia, advocacy, and the arts,
                affirming its credibility, values, and impact.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3 text-sm">
              <article className="glass-panel p-5 sm:p-6 space-y-2 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-sm font-semibold text-slate-100/90">
                  PF
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 mt-1">
                  Professor Pierre Fonkoua
                </h2>
                <p className="text-[11px] sm:text-xs text-orange-200">
                  Distinguished Professeur Titulaire des Universités (Educational Sciences)
                </p>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Seasoned academic leader with expertise in educational development, human rights, and social
                  advancement, including roles within UNESCO Chairs.
                </p>
                <p className="text-slate-100/80 text-[11px] sm:text-xs">
                  Commends Eva Helpful Foundation for aligning with his values of education, human rights, and
                  capacity-building.
                </p>
              </article>

              <article className="glass-panel p-5 sm:p-6 space-y-2 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto rounded-full border border-white/20 bg-black/40 flex items-center justify-center text-sm font-semibold text-slate-100/90">
                  LL
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 mt-1">Liz Lum</h2>
                <p className="text-[11px] sm:text-xs text-orange-200">
                  Feminist advocate, youth and SRHR specialist
                </p>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Passionate advocate for SRHR, girls&apos; rights, and youth engagement.
                </p>
                <p className="text-slate-100/80 text-[11px] sm:text-xs">
                  Recognizes Eva Helpful&apos;s role in creating opportunities for women, girls, and young people to
                  thrive and amplifying marginalized voices.
                </p>
              </article>

              <article className="glass-panel p-5 sm:p-6 space-y-2 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/images/photo_21_2025-12-03_18-28-46.jpg"
                    alt="Pchords (Favour Afaah)"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 mt-1">Pchords (Favour Afaah)</h2>
                <p className="text-[11px] sm:text-xs text-orange-200">
                  Cameroonian artist, pianist, and music producer
                </p>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Innovative artist whose work explores the therapeutic power of music to promote mental
                  well-being and social healing.
                </p>
                <p className="text-slate-100/80 text-[11px] sm:text-xs">
                  Affirms Eva Helpful&apos;s dedication to fostering holistic development and promoting positive
                  values among children and adolescents.
                </p>
              </article>

              <article className="glass-panel p-5 sm:p-6 space-y-2 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Dr%20Colin%20Agabalinda.png"
                    alt="Dr. Colin Agabalinda"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 mt-1">
                  Dr. Colin Agabalinda
                </h2>
                <p className="text-[11px] sm:text-xs text-orange-200">
                  Financial Inclusion &amp; Climate Finance Specialist – Kampala, Uganda
                </p>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Endorses Eva Helpful Foundation as a timely initiative that addresses the erosion of values
                  among children and adolescents, and highlights its potential to reshape cultural norms and
                  strengthen community value systems.
                </p>
                <p className="text-slate-100/80 text-[11px] sm:text-xs">
                  As Founder of Grounded Finance Africa, he brings over two decades of experience in applied
                  research, rural finance and policy engagement, collaborating with governments and international
                  financial institutions to advance inclusive and climate-linked finance across Africa.
                </p>
              </article>

              <article className="glass-panel p-5 sm:p-6 space-y-2 text-center">
                <div className="h-20 w-20 sm:h-24 sm:w-24 mx-auto overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/prof%20khebuma.png"
                    alt="Professor Kehbuma Langmia"
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-slate-50 mt-1">
                  Professor Kehbuma Langmia
                </h2>
                <p className="text-[11px] sm:text-xs text-orange-200">
                  Professor, Department of Strategic, Legal, and Management Communications, Howard University
                </p>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Warmly endorses Eva Helpful Foundation for its commitment to promoting positive values, ethics
                  and social responsibility among children and adolescents, and for preparing young people to make
                  meaningful contributions to their communities.
                </p>
                <p className="text-slate-100/80 text-[11px] sm:text-xs">
                  A widely respected scholar and mentor, he has served on institutional review boards, curriculum
                  committees and professional associations, led research projects on media, technology and
                  development, and supported emerging African leaders through teaching, supervision and public
                  engagement.
                </p>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
