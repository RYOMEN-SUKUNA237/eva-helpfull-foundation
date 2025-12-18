import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiBookOpen, FiTarget, FiList } from "react-icons/fi";

export default function LeviWamMfuaPage() {
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
                  src="/lewi%20wam.png"
                  alt="Levi Wam Mfua"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">LEVI WAM MFUA</h1>
                <p className="text-sm text-orange-200">
                  Coordinator – Digital Communications and Protocol
                </p>
                <p className="text-xs sm:text-sm text-slate-200/90 mt-1">
                  Country of residence: Cameroon
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  Profile
                </h2>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Motivated and detail-oriented digital communications professional with a strong interest in
                  protocol, stakeholder engagement, and content management. Highly organised and committed to
                  delivering effective communication strategies in dynamic organisational environments.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiTarget className="h-4 w-4" />
                  Career objective
                </h3>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  To serve as Coordinator of Digital Communication and Protocol, leveraging skills in digital
                  media management, strategic communication, and protocol compliance to enhance organizational
                  outreach and stakeholder engagement.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiBookOpen className="h-4 w-4" />
                  Education
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                  <li>BSc Management, University of Buea – 2025.</li>
                  <li>Advanced Level Certificate, Saint Joseph College, Sasse – 2022.</li>
                  <li>Ordinary Level Certificate, G.B.H.S Tiko – 2020.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiList className="h-4 w-4" />
                  Key skills
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                  <li>Digital communication and social media management.</li>
                  <li>Protocol and event coordination.</li>
                  <li>Content creation and stakeholder engagement.</li>
                  <li>Strong organisational and multitasking abilities.</li>
                  <li>Effective written and verbal communication (English).</li>
                  <li>Adaptability to new tools, platforms, and technologies.</li>
                  <li>Time management and attention to detail.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
