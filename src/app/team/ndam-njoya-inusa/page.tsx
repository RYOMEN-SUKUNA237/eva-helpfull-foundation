import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiBookOpen, FiAward, FiBriefcase, FiLayers } from "react-icons/fi";

export default function NdamNjoyaInusaPage() {
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
                  src="/ndam%20njoya.jpg"
                  alt="Ndam Njoya Inusa"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  NDAM NJOYA INUSA, JUNIOR ACCA
                </h1>
                <p className="text-sm text-orange-200">
                  Director of Grants Management and Audit – Eva Helpful
                </p>
                <p className="text-xs sm:text-sm text-slate-200/90 mt-1">
                  Senior Financial Auditor | EY Cameroon · Country of residence: Cameroon (Douala)
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  Professional summary
                </h2>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  Qualified ACCA (UK) Accountant with over 3 years of experience in audit, accounting, and
                  financial reporting across Oil &amp; Gas, Energy, Banking, Industrial, and Service sectors.
                  Adept at delivering high-quality work, learning rapidly, and exceeding objectives in
                  challenging team environments. Experienced in applying IFRS, SYSCOHADA, and ISAs, leading
                  teams, and making high-stakes decisions with a focus on compliance, accuracy, and efficiency.
                </p>
                <p className="text-slate-100/80 text-xs sm:text-sm">
                  Country of residence: Cameroon · Location: Douala · Email: ndamnjoya40@yahoo.com · Mobile:
                  (+237) 670 68 38 51
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiBriefcase className="h-4 w-4" />
                  Professional experience
                </h3>

                <div className="space-y-1">
                  <p className="font-semibold text-slate-50 text-sm">
                    Senior Financial Auditor | EY Cameroon
                  </p>
                  <p className="text-[11px] text-slate-300/90">
                    November 2021 – Present · Clients: CNPCIC TCHAD, GLOBELEQ (GCMS, KPDC &amp; DPDC), Total
                    Energies Chad, OLA Energy Cameroon &amp; Chad, GOLAR Cameroon, BDT (Brasseries du Tchad),
                    SGC Cameroon, SCB Cameroon
                  </p>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                    <li>Conducts risk assessments using a data-driven, risk-based approach.</li>
                    <li>
                      Develops and executes audit strategies, ensuring compliance with IFRS, SYSCOHADA, and
                      group accounting standards.
                    </li>
                    <li>Leads, coaches, and trains junior staff on audit methodology and digital procedures.</li>
                    <li>
                      Documents client business processes, identifies financial and operational risks, and
                      recommends corrective actions.
                    </li>
                    <li>Reviews debt covenants and lender reporting according to applicable frameworks.</li>
                    <li>Manages audit projects from planning through completion.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-slate-50 text-sm">Accountant | ENEO Cameroon SA</p>
                  <p className="text-[11px] text-slate-300/90">November 2019 – November 2021</p>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                    <li>
                      Processed invoices and deferred expenses in Oracle, ensuring completeness of supporting
                      documentation.
                    </li>
                    <li>Performed bank statement entries and reconciliations.</li>
                    <li>Analysed inter-office operations and prepared accounts payable reports.</li>
                    <li>Ensured proper filing of accounting documents and supported payment preparation.</li>
                  </ul>
                </div>

                <div className="space-y-1">
                  <p className="font-semibold text-slate-50 text-sm">Audit Trainee | PwC Cameroon</p>
                  <p className="text-[11px] text-slate-300/90">March 2019 – April 2019 · Clients: UBIPHARM, MSC, GEODIS</p>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                    <li>Conducted year-end physical stock counts and validated inventory records.</li>
                    <li>
                      Performed audit procedures on cash, equity, and other accounts in line with PwC
                      methodology.
                    </li>
                    <li>
                      Carried out consistency checks to ensure trial balance figures matched financial
                      statements.
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiLayers className="h-4 w-4" />
                  Skills and competencies
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                  <li>
                    Strong knowledge of Oil &amp; Gas sector, tax laws, OHADA, and local regulatory frameworks.
                  </li>
                  <li>Financial reporting in IFRS, US GAAP, and SYSCOHADA.</li>
                  <li>Risk assessment, internal control evaluation, and audit methodology.</li>
                  <li>Proficient in Microsoft Office Suite (Excel, Word, PowerPoint).</li>
                  <li>Team leadership, coaching, and mentoring of junior staff.</li>
                  <li>Analytical thinking, innovative problem-solving, and sound decision-making.</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-orange-300">
                  <FiAward className="h-4 w-4" />
                  Education &amp; professional qualifications
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-[11px] sm:text-xs">
                  <li>
                    Association of Chartered Certified Accountants (ACCA – UK) · Member since May 2024; Professional
                    Completion: October 2021.
                  </li>
                  <li>
                    ICT University USA – Cameroon Campus · Bachelor of Science in Accountancy (First Class
                    Upper), July 2019.
                  </li>
                </ul>
              </div>

              <div className="space-y-2 text-[11px] sm:text-xs text-slate-300/85">
                <h3 className="font-semibold text-orange-300">References</h3>
                <p>
                  Ebot Joe Clark – Assistant Manager, EY Cameroon · Email: ebotjoeclark@gmail.com
                </p>
                <p>
                  Mesode Koge Fonderson FCCA – Former Senior Manager/RM Lead, AVV Limited (Partner) · Email:
                  kamesode@yahoo.co
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
