import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiCamera, FiFilm, FiGlobe } from "react-icons/fi";

export default function NdiBrainWebjePage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border border-white/20 bg-black/40">
                <img
                  src="/ndi%20brain.jpg"
                  alt="Mr. Ndi Brain Webje"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">Mr. Ndi Brain Webje</h1>
                <p className="text-sm text-orange-200">
                  Creative Director &amp; Lead Visual Communications Officer, Eva Helpful Foundation
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiCamera className="h-5 w-5" />
                  Creative Leadership Profile
                </h2>
                <p className="text-slate-100/85">
                  Mr. Ndi Brain Webje is the Foundation&apos;s skilled visual communications specialist,
                  responsible for directing Eva Helpful&apos;s creative and multimedia strategy. He ensures that
                  the Foundation&apos;s messaging is visually compelling, professional, and fully aligned with its
                  mission and values.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiFilm className="h-4 w-4" />
                  Key Responsibilities
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>Leads the development of all visual content, brand assets, and communication materials.</li>
                  <li>Directs multimedia projects and provides creative guidance across all departments.</li>
                  <li>
                    Strengthens engagement with partners, beneficiaries, and the wider public through effective
                    visual storytelling.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiGlobe className="h-4 w-4" />
                  Areas of Expertise
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>Graphic design and brand identity systems.</li>
                  <li>Digital media production and post-production.</li>
                  <li>Brand development for social impact organisations.</li>
                  <li>Social impact storytelling for web, print, and live events.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
