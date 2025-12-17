import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers, FiBookOpen, FiHeart } from "react-icons/fi";

export default function AwahBeltineSirriPage() {
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
                  src="/awah%20beltine.jpg"
                  alt="Mrs. Awah Beltine Sirri"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  Mrs. Awah Beltine Sirri
                </h1>
                <p className="text-sm text-orange-200">Vice President, Eva Helpful Foundation</p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Leadership Profile
                </h2>
                <p className="text-slate-100/85">
                  Mrs. Awah Beltine Sirri is an accomplished education specialist, development advocate, and
                  administrator with over a decade of progressive experience in youth empowerment, gender
                  education, and community-focused program management. She provides critical strategic
                  leadership, program oversight, and partnership coordination to advance the Foundation&apos;s
                  mission.
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiBookOpen className="h-4 w-4" />
                  Key Expertise Areas
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    <span className="font-semibold">Educational Leadership:</span> curriculum design,
                    learner assessment, instructional leadership, and academic program coordination.
                  </li>
                  <li>
                    <span className="font-semibold">Development Advocacy:</span> youth empowerment, gender
                    equity, public relations, and stakeholder mobilization for social impact initiatives.
                  </li>
                  <li>
                    <span className="font-semibold">Editorial &amp; Research:</span> experienced editor,
                    proofreader, and qualitative data transcriber, bringing academic rigour to research
                    projects.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiUsers className="h-4 w-4" />
                  Professional Background
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    Has served as an English Language Instructor for several years at institutions including
                    Lycée de Nkolpoblo and Government Bilingual Secondary School Akougou.
                  </li>
                  <li>
                    Held instructional leadership roles as Deputy Head of Department and English Club
                    Coordinator.
                  </li>
                  <li>
                    Championed youth engagement and gender-focused initiatives through roles in organizations
                    like Girls Strength and Gender Education and Deserve.
                  </li>
                  <li>
                    Co-author of <span className="italic">Modern Primary English Pupils&apos; Books 3 and 4</span>,
                    contributing to foundational literacy development.
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiHeart className="h-4 w-4" />
                  Academic Credentials
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    Master of Science in Education (Curriculum and Evaluation) – in progress, University of
                    Yaoundé I.
                  </li>
                  <li>Bachelor of Arts in English Language – University of Yaoundé I.</li>
                  <li>DIPES I – English Language – Higher Teachers Training College, University of Maroua.</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
