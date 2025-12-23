import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers } from "react-icons/fi";

export default function ProfessorMokubeMathiasItoePage() {
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
                  src="/Professor%20Mokube%20Mathias%20Itoe,%20PhD.png"
                  alt="Professor Mokube Mathias Itoe"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  Professor Mokube Mathias Itoe, PhD
                </h1>
                <p className="text-sm text-orange-200">
                  Professor of Forensics | Governance &amp; Public Finance Expert
                </p>
                <p className="text-xs sm:text-sm text-slate-200/80">
                  Vice President – Governance / Compliance, Eva Helpful Foundation - Cameroon
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Professional Profile
                </h2>
                <p className="text-slate-100/85">
                  Professor Mokube Mathias Itoe is a distinguished academic and senior public servant with a
                  remarkable career spanning over a decade within the Cameroon Public Service. Since 2008, he has
                  made significant contributions to the Ministry of Finance, where he has held several strategic
                  positions covering public budgeting, financial management, risk governance, and fraud
                  investigation. His extensive practical experience in these areas has firmly positioned him as a
                  leading authority in forensic accounting and auditing.
                </p>
                <p className="text-slate-100/85">
                  Academically, Professor Mokube holds a Doctor of Philosophy (PhD) in Business Administration,
                  with a concentration in governance, earned with distinction. He also possesses dual Master’s
                  degrees in Human Resource Management and Accounting, Control, and Audit. His strong academic
                  background is further reinforced by multiple internationally recognized professional
                  certifications, including Certified Professional Forensic Accountant (CPFA) and Certified
                  Compliance Professional (CCP), reflecting his commitment to professional excellence and global
                  standards.
                </p>
                <p className="text-slate-100/85">
                  As an Associate Professor of Forensics, Professor Mokube has taught across several universities
                  and international institutions. His teaching portfolio encompasses systems auditing, forensic
                  investigation, cybercriminality, compliance, and risk management. Through his dedication to
                  education and mentorship, he has made a lasting impact on students and professionals within the
                  fields of forensics, accounting, and governance.
                </p>
                <p className="text-slate-100/85">
                  Beyond academia, Professor Mokube is globally recognized as a United Nations Sustainable
                  Development Goals (SDG) Peace Ambassador. His advocacy focuses on peacebuilding, food security,
                  ethical leadership, and sustainable development. He notably served as Chair of the 7th Global
                  IICFIP World Summit in Cameroon, convening international experts to address critical challenges
                  related to forensic sciences, financial crimes, and governance.
                </p>
                <p className="text-slate-100/85">
                  Professor Mokube has an extensive publication record, comprising numerous scholarly articles and
                  books that contribute meaningfully to discourse on corporate governance, fraud prevention, public
                  financial management, and forensic accounting. His research outputs have received both national
                  and international recognition, establishing him as a respected thought leader in his field.
                </p>
                <p className="text-slate-100/85">
                  In public administration, he has held several high-level positions, including Research Officer,
                  Private Secretary to the Minister, and Director of the Prime Minister’s Cabinet in Cameroon. In
                  these roles, he demonstrated exceptional leadership and strategic acumen, managing sensitive
                  assignments and initiatives to enhance governmental efficiency, accountability, and transparency.
                </p>
                <p className="text-slate-100/85">
                  In addition to his academic and public service responsibilities, Professor Mokube serves as Vice
                  President – Governance and Compliance at Eva Helpful Foundation, where he provides strategic
                  oversight on institutional governance frameworks, regulatory compliance, accountability
                  mechanisms, and ethical standards in support of humanitarian and development initiatives.
                </p>
                <p className="text-slate-100/85">
                  Professor Mokube’s influence extends further through active involvement in professional
                  associations and board memberships within several international institutions. His commitment to
                  lifelong learning is reflected in his regular participation in global conferences, workshops, and
                  executive training programmes, where he shares expertise and fosters professional collaboration.
                </p>
                <p className="text-slate-100/85">
                  In summary, Professor Mokube Mathias Itoe is a prominent figure in forensic accounting, auditing,
                  governance, and public service. His career is marked by academic excellence, professional
                  integrity, leadership, and a steadfast commitment to societal betterment. His contributions
                  continue to shape the evolving landscape of forensic investigation, governance, and sustainable
                  development, making him a valuable asset to Eva Helpful Foundation and the global community.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
