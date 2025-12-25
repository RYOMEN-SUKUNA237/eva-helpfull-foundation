import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers, FiBookOpen, FiBriefcase, FiFileText } from "react-icons/fi";

export default function NdifongongFerdinandNsanyuiPage() {
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
                  src="/Ndifongong%20Ferdinand%20Nsanyui.png"
                  alt="Ndifongong Ferdinand Nsanyui"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  Ndifongong Ferdinand Nsanyui
                </h1>
                <p className="text-sm text-orange-200">
                  Country Representative | Eva Helpful Global | South Korea
                </p>
                <p className="text-xs text-slate-300/85 mt-1">Country of Residence: South Korea</p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-6 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Profile
                </h2>
                <p className="text-slate-100/85">
                  Dedicated, results-driven professional with over 11 years&apos; experience across academic,
                  corporate, and non-profit settings. Possesses strong leadership, project management, and
                  organisational skills, with a proven ability to engage diverse stakeholders and enhance
                  operational efficiency. Passionate about empowering communities, supporting international
                  collaboration, and promoting sustainable development initiatives.
                </p>
                <p className="text-slate-100/85">
                  <span className="font-semibold">Career Focus:</span> Project Management, Finance &amp;
                  Administration, Capacity Building, Community Engagement, International Development.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  Education
                </h2>
                <ul className="space-y-2 text-slate-100/85">
                  <li>• Doctoral in Business Administration (In Progress) – Konyang University, South Korea (2022–Present)</li>
                  <li>• Korean Language Certificate (2 years study, 2022–2024)</li>
                  <li>• MSc Accounting and Finance (First Class, Top-up) – University of Buea / Biaka University, Cameroon (2021–2022)</li>
                  <li>• MBA Accounting and Finance (First Class Hons) – University of Bamenda / HIMS Buea, Cameroon (2017–2020)</li>
                  <li>• ICAN Application Level – Institute of Chartered Accountants of Nigeria (2015–Present)</li>
                  <li>• B.Tech Accounting (First Class Honors) – University of Bamenda, Cameroon (2013–2014)</li>
                  <li>• HND Accounting (Lower Credit) – HIMS Buea / Minesup, Cameroon (2011–2013)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBriefcase className="h-5 w-5" />
                  Professional Experience
                </h2>
                <div className="space-y-3 text-slate-100/85">
                  <div>
                    <p className="font-semibold text-slate-50">ANC Ltd, Buea – Financial Manager &amp; Shareholder (2018–Present)</p>
                    <p className="text-sm">Oversees financial management, budgeting, and reporting; manages general affairs and operational planning; coordinates with stakeholders to enhance organizational performance.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">HIMS Buea – Deputy Registrar / Lecturer (2020–2022)</p>
                    <p className="text-sm">Managed academic administration, curriculum delivery, and student support; developed workshops and trainings to improve student skills and employability.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Konyang University, South Korea – Student Representative &amp; Assistant (2024–2025)</p>
                    <p className="text-sm">Supported international students with documentation and university procedures; provided Korean-English translation and interpretation for cross-cultural communication; facilitated connections between students and university services.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Kosan Crisplant Cameroon S.A. – Intern (2014)</p>
                    <p className="text-sm">Assisted in tax administration, financial reporting, stocktaking, and bank reconciliation.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Solid Foundation International (SOFI), Bamenda – Intern (2012)</p>
                    <p className="text-sm">Maintained daily records and conducted financial reconciliations.</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiFileText className="h-5 w-5" />
                  Projects &amp; Research
                </h2>
                <ul className="space-y-2 text-slate-100/85">
                  <li>• 2014: Impact of Taxation on the Growth of SMEs in Buea Municipality</li>
                  <li>• 2020: Tax Administration and Compliance Level of Taxpayers in Fako Division, Southwest Cameroon</li>
                  <li>• 2022: Financial Literacy and Performance of SMEs in Fako Division, Southwest Cameroon</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Skills
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-100/85">
                  <div>
                    <p className="font-semibold text-slate-50">Project &amp; Organizational Management</p>
                    <p className="text-sm">Leadership, team coordination, goal-setting, scheduling, and decision-making.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Financial Management</p>
                    <p className="text-sm">Budgeting, reporting, and strategic planning.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Communication &amp; Networking</p>
                    <p className="text-sm">Public speaking, stakeholder engagement, and cross-cultural collaboration.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Technical Skills</p>
                    <p className="text-sm">MS Word, Excel, PowerPoint (Excellent); MS Publisher (Good).</p>
                  </div>
                  <div className="sm:col-span-2">
                    <p className="font-semibold text-slate-50">Languages</p>
                    <p className="text-sm">English (Excellent), French (Average), Korean (Average).</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
