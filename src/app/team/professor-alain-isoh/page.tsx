import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiBookOpen, FiAward, FiGlobe, FiUsers, FiHeart } from "react-icons/fi";

export default function ProfessorAlainIsohPage() {
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
                  src="/images/founder-professor-alain-isoh.jpg"
                  alt="Professor Alain Vilard Ndi Isoh"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-semibold text-slate-50">
                  Professor Alain Vilard Ndi Isoh
                </h1>
                <p className="text-sm text-orange-200">
                  Founder &amp; President, Eva Helpful Foundation
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  Profile
                </h2>
                <p className="text-slate-100/85">
                  Professor Alain Vilard Ndi Isoh is an accomplished researcher, administrator, and educator
                  with expertise in Business Management, Finance, and Public Sector Leadership. He founded Eva
                  Helpful Foundation to restore moral values, strengthen families, and nurture responsible
                  future leaders.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                    <FiUsers className="h-4 w-4" />
                    Current roles
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                    <li>Deputy Vice-Chancellor for Academics &amp; Administration, ICT University.</li>
                    <li>Co-Chair of the ICT University Scientific Committee.</li>
                    <li>Director of Studies, Cardiff Metropolitan University (UK).</li>
                    <li>International Board Member, Anthem Press (New York &amp; London).</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                    <FiAward className="h-4 w-4" />
                    Professional highlights
                  </h3>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                    <li>
                      Reviewer for international journals including Springer Nature, IJEBR, AJBM, JASD, and
                      others.
                    </li>
                    <li>
                      Reviewer for major grant programs in Uganda (MAK-RIF, STI Ministry, NRIP).
                    </li>
                    <li>Supervisor of more than 15 PhD dissertations and numerous Masters/undergraduate theses.</li>
                    <li>Recognized as Best Doctoral Lecturer (2018).</li>
                    <li>Recognized as Outstanding Administrator of the Year (2022).</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiGlobe className="h-4 w-4" />
                  Education
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>Ph.D., Cardiff Metropolitan University (UK).</li>
                  <li>MBA in Finance, University of Gloucestershire.</li>
                  <li>Advanced Diploma in Management, London School of Management.</li>
                  <li>B.Sc. Business Management, University of Buea.</li>
                </ul>
              </div>

              <div className="space-y-2">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiHeart className="h-4 w-4" />
                  Why Eva Helpful Foundation
                </h3>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Drawing from his experience in academia and public leadership, Professor Isoh created Eva
                  Helpful Foundation as a practical response to the moral and social crises affecting
                  children and adolescents. Through this work, he seeks to help families, schools, and
                  communities raise a generation of compassionate, responsible, and value-driven leaders.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
