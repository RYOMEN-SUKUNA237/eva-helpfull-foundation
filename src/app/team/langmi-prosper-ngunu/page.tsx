import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers } from "react-icons/fi";

export default function LangmiProsperNgunuPage() {
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
                  src="/Langmi%20Prosper%20Ngunu.png"
                  alt="Langmi Prosper Ngunu"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">Langmi Prosper Ngunu</h1>
                <p className="text-sm text-orange-200">
                  Director of Public Engagement &amp; Strategic Partnerships, Eva Helpful Foundation
                </p>
                <p className="text-xs sm:text-sm text-slate-200/80">Country of Residence: Cameroon</p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Executive Summary
                </h2>
                <p className="text-slate-100/85">
                  Langmi Prosper Ngunu is a youth leader and development advocate with a strong commitment to
                  advancing youth leadership, entrepreneurship and community empowerment. In his role as Director
                  of Public Engagement &amp; Strategic Partnerships at the Eva Helpful Foundation, he oversees
                  stakeholder relations, public outreach and collaborative initiatives that enhance the
                  Foundation&apos;s impact and visibility.
                </p>
                <p className="text-slate-100/85">
                  He is also the Founder and Chief Executive Officer of Elysian Media, where he leads strategic
                  communication projects, media innovation and digital engagement solutions. His work reflects a
                  commitment to empowering young people through advocacy, capacity-building and the promotion of
                  opportunities that support their social and economic advancement.
                </p>
                <p className="text-slate-100/85">
                  Known for his leadership, professionalism and strategic insight, Mr Ngunu plays a central role
                  in fostering partnerships and driving youth-focused initiatives within and beyond the
                  Foundation.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
