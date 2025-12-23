import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

export default function AdministrativeTeamPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <section className="mx-auto flex w-full max-w-6xl flex-col gap-8">
            <div className="text-center space-y-3">
              <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                Administrative Team
              </h1>
              <p className="text-sm sm:text-base text-slate-100/80 max-w-2xl mx-auto">
                The Administrative Team provides strategic leadership, governance and day-to-day coordination
                for Eva Helpful Foundation and Eva Helpful Global.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-sm">
              {/* Founder */}
              <a
                href="/team/professor-alain-isoh"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/uppdate%20prof%20alain.jpeg"
                    alt="Professor Alain Vilard Ndi Isoh"
                    className="h-full w-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">
                    Professor Alain Vilard Ndi Isoh
                  </h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Founder &amp; President, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Vice President */}
              <a
                href="/team/awah-beltine-sirri"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/awah%20beltine.jpg"
                    alt="Awah Beltine Sirri"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Awah Beltine Sirri</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Vice President (General / Deputy President), Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Creative Director */}
              <a
                href="/team/ndi-brain-webje"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/ndi%20brain.jpg"
                    alt="Mr. Ndi Brain Webje"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Mr. Ndi Brain Webje</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Creative Director &amp; Lead Visual Communications Officer
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Director of Grants Management and Audit */}
              <a
                href="/team/ndam-njoya-inusa"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/ndam%20njoya.jpg"
                    alt="Ndam Njoya Inusa"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">NDAM NJOYA INUSA</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Grants Management and Audit – Eva Helpful
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Coordinator – Digital Communications and Protocol */}
              <a
                href="/team/levi-wam-mfua"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/lewi%20wam.png"
                    alt="Levi Wam Mfua"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Levi Wam Mfua</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Coordinator – Digital Communications and Protocol
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Director of Research, Training and Capacity Building */}
              <a
                href="/team/ngoata-sylvanus-diangha"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/dr.diangha.png"
                    alt="Dr. Ngoata Sylvanus Diangha"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">
                    Dr. Ngoata Sylvanus Diangha
                  </h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Research, Training, and Capacity Building – Eva Helpful
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Director of Public Engagement & Strategic Partnerships */}
              <a
                href="/team/langmi-prosper-ngunu"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Langmi%20Prosper%20Ngunu.png"
                    alt="Langmi Prosper Ngunu"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Langmi Prosper Ngunu</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Public Engagement &amp; Strategic Partnerships, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Vice President – Governance / Compliance */}
              <a
                href="/team/professor-mokube-mathias-itoe"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Professor%20Mokube%20Mathias%20Itoe,%20PhD.png"
                    alt="Professor Mokube Mathias Itoe"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">
                    Professor Mokube Mathias Itoe, PhD
                  </h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Vice President – Governance / Compliance, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Director of Adolescent & Youth Mentoring Services */}
              <a
                href="/team/ndifon-gervais-nuvadga"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <img
                    src="/Ndifon%20Gervais%20Nuvadga.png"
                    alt="Ndifon Gervais Nuvadga"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h2 className="text-base sm:text-lg font-semibold text-slate-50">Ndifon Gervais Nuvadga</h2>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Adolescent &amp; Youth Mentoring Services, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Belgium</p>
                </div>
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
