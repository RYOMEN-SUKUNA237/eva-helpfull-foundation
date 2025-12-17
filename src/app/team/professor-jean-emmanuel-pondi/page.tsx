import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiAward, FiShield, FiBookOpen } from "react-icons/fi";

export default function ProfessorJeanEmmanuelPondiPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border border-white/20 bg-black/40" />
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  Professor Jean-Emmanuel Pondi
                </h1>
                <p className="text-sm text-orange-200">
                  EVA Helpful Distinguished Value Model
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiAward className="h-5 w-5" />
                  Recognition and Significance
                </h2>
                <p className="text-slate-100/85">
                  Professor Jean-Emmanuel Pondi is formally recognized as the Foundation&apos;s Distinguished
                  Value Model—a living reference framework that embodies the core values of integrity,
                  accountability, and social responsibility. His exemplary career is used by the Foundation to
                  promote ethical leadership for younger generations.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiShield className="h-4 w-4" />
                  Model Significance
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    <span className="font-semibold">Ethical leadership:</span> his tenure as Vice-Rector and
                    Secretary General of the University of Yaoundé I was notably marked by principled action.
                  </li>
                  <li>
                    <span className="font-semibold">Moral courage:</span> he consistently upheld a
                    zero-tolerance standard against sexual harassment, resulting in formal convictions by the
                    university&apos;s disciplinary board and protecting students and staff.
                  </li>
                  <li>
                    <span className="font-semibold">Legacy:</span> his influence extends beyond academia,
                    contributing scholarly writings on sexual harassment and academic ethics that have shaped
                    national policy and institutional reform.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiBookOpen className="h-4 w-4" />
                  Alignment with EVA Helpful
                </h3>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Professor Pondi&apos;s unwavering commitment to integrity, empathy, and social justice aligns
                  profoundly with the EVA Helpful Value Framework, establishing him as an inspiring figure for
                  the ethical renewal of society.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
