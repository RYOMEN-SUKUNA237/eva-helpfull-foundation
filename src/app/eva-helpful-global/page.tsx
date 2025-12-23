import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiGlobe, FiHeart, FiUsers } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Eva Helpful Global",
  description:
    "Eva Helpful Global is the international arm of Eva Helpful Foundation, partnering across countries to promote positive values, citizenship, and psycho-social wellbeing among children and adolescents.",
};

export default function EvaHelpfulGlobalPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col gap-16">
          {/* Hero – Eva Helpful Global */}
          <section className="mx-auto w-full max-w-5xl">
            <div className="flex flex-col items-center text-center gap-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/60 bg-orange-500/15 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-orange-200">
                <FiGlobe className="h-3.5 w-3.5" />
                <span>Eva Helpful Global</span>
              </div>
              <div className="space-y-4 max-w-3xl">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-50">
                  Eva Helpful Global
                </h1>
                <p className="text-sm sm:text-base text-slate-100/85">
                  Extending the Eva Helpful Essential Values beyond borders – nurturing children and adolescents
                  to become responsible, value-driven global citizens.
                </p>
              </div>
            </div>
          </section>

          {/* About Eva Helpful Global – structured like About section */}
          <section className="mx-auto w-full max-w-5xl">
            <div className="glass-panel p-6 sm:p-8 space-y-8">
              <header className="space-y-2 text-center sm:text-left">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                  About Eva Helpful Global
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                  Taking values-based education to the world
                </h2>
              </header>

              <div className="grid gap-6 md:grid-cols-2 text-sm sm:text-base text-slate-100/85">
                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                    <FiHeart className="h-5 w-5" />
                    Our global mission
                  </h3>
                  <p>
                    <strong>Eva Helpful Global</strong> is the international arm of the Eva Helpful Foundation,
                    dedicated to fostering global collaboration and promoting positive values among children and
                    adolescents. Operating across multiple countries, the initiative engages diverse communities
                    to develop programs that cultivate honesty, empathy, integrity, respect, and responsibility,
                    ensuring that young people grow into responsible adults and active global citizens.
                  </p>
                  <p>
                    Eva Helpful Global also prioritises values relating to psycho-social and mental well-being,
                    environmental protection, and sustainable livelihood practices. By enhancing understanding of
                    cultural and social diversity, the initiative equips children and adolescents with the
                    knowledge, skills, and values needed to contribute positively to society.
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                    <FiUsers className="h-5 w-5" />
                    How we work across borders
                  </h3>
                  <p>
                    Through strategic partnerships with educational institutions, community organisations,
                    companies, NGOs, governmental institutions, and international stakeholders, Eva Helpful Global
                    implements programs that deliver measurable outcomes: strengthened citizenship, enhanced
                    social and emotional competencies, and improved cross-cultural awareness.
                  </p>
                  <p>
                    By leveraging global networks and sharing best practices, the initiative empowers children and
                    adolescents to become socially conscious, responsible, and contributing members of their
                    communities and the wider world.
                  </p>
                </section>
              </div>
            </div>
          </section>

          {/* Eva Helpful Global Team */}
          <section className="mx-auto w-full max-w-5xl space-y-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-baseline justify-between gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                    Eva Helpful Global Team
                  </h2>
                  <p className="mt-2 text-sm sm:text-base text-slate-200/80">
                    Country representatives help extend Eva Helpful&apos;s values driven work into
                    communities around the world.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Arianna card */}
                <a
                  href="#arianna-profile"
                  className="glass-panel p-5 sm:p-6 flex flex-col items-center text-center bg-black/40 hover:bg-black/50 transition-colors"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-white/25 bg-black/40 mb-4">
                    <img
                      src="/Picture1.png"
                      alt="Arianna Romano"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    Arianna Romano
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-orange-100/90 font-medium">
                    Country Representative Eva Helpful Foundation (United Kingdom)
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200/80">Based in Romford, London</p>
                </a>

                {/* Arianna detailed profile */}
                <div
                  id="arianna-profile"
                  className="md:col-span-2 glass-panel p-5 sm:p-6 space-y-5 bg-black/40 text-sm sm:text-base text-slate-100/85"
                >
                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Professional Profile
                    </h3>
                    <p className="mt-2">
                      Arianna Romano serves as the Country Representative for Eva Helpful Foundation
                      in the United Kingdom, bringing a strategic, culturally informed, and
                      service-oriented approach to mission delivery and community engagement. With a
                      professional background spanning healthcare, education, and community-focused
                      environments, she offers substantial expertise in stakeholder communication,
                      coordination, and ethical representation.
                    </p>
                    <p className="mt-2">
                      Having lived and worked across multiple European countries, Arianna brings a
                      global perspective and strong cultural sensitivity, enabling her to serve as
                      an effective liaison among diverse communities, institutional partners, and
                      international stakeholders. Her experience in client-facing and
                      administrative roles has strengthened her ability to manage sensitive
                      information discreetly, uphold safeguarding standards, and operate with
                      integrity in complex, confidential contexts.
                    </p>
                    <p className="mt-2">
                      In her role with Eva Helpful Foundation UK, she supports partnership
                      development, local representation, and community initiatives, contributing to
                      the Foundation&apos;s mission through clear communication, reliable
                      coordination, and value driven leadership.
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Core Competencies
                    </h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside text-sm sm:text-[15px] text-slate-100/90">
                      <li>Stakeholder engagement and relationship management</li>
                      <li>Cross-cultural communication and international representation</li>
                      <li>Strategic coordination of activities, schedules, and resources</li>
                      <li>Community engagement and advocacy</li>
                      <li>Clear verbal and written communication</li>
                      <li>Organisation, prioritisation, and time management</li>
                      <li>Confidentiality, safeguarding, and ethical awareness</li>
                      <li>Data management, reporting, and documentation</li>
                      <li>Problem-solving and decision-making</li>
                      <li>Team collaboration and independent leadership</li>
                      <li>Adaptability within dynamic, multidisciplinary environments</li>
                      <li>Languages: Italian (native), English (fluent)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Professional Training, Certifications &amp; Education
                    </h3>
                    <div className="mt-2 space-y-3 text-sm sm:text-[15px]">
                      <div>
                        <p className="font-medium text-slate-50">
                          Child Psychology Certificate Level 3
                        </p>
                        <ul className="mt-1 list-disc list-inside space-y-1 text-slate-100/90">
                          <li>
                            Understanding the impact of family, environment, and peers on child
                            development
                          </li>
                          <li>
                            Recognising early signs of developmental and psychological challenges
                          </li>
                          <li>Designing activities to promote learning and wellbeing</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium text-slate-50">
                          Certificate in Teaching English as a Foreign Language (TEFL) | ITTT
                          Summer 2016 Winter 2016
                        </p>
                        <ul className="mt-1 list-disc list-inside space-y-1 text-slate-100/90">
                          <li>Structured lesson planning and classroom management</li>
                          <li>Effective use of teaching resources</li>
                          <li>Internationally recognised qualification</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium text-slate-50">
                          NVQ Level 3 in Customer Services | Carillion, Royal London Hospital,
                          London Winter 2015 Summer 2016
                        </p>
                        <ul className="mt-1 list-disc list-inside space-y-1 text-slate-100/90">
                          <li>Delivery of personalised customer service</li>
                          <li>Feedback monitoring and issue resolution</li>
                          <li>Contribution to service improvement strategies</li>
                        </ul>
                      </div>

                      <div>
                        <p className="font-medium text-slate-50">
                          Bachelor of Arts (Honours) Language Studies (English and French) The
                          Open University, Milton Keynes, UK Autumn 2015 Summer 2018
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
                {/* Ferdinand card */}
                <a
                  href="#ferdinand-profile"
                  className="glass-panel p-5 sm:p-6 flex flex-col items-center text-center bg-black/40 hover:bg-black/50 transition-colors"
                >
                  <div className="h-28 w-28 sm:h-32 sm:w-32 overflow-hidden rounded-full border border-white/25 bg-black/40 mb-4">
                    <img
                      src="/Ndifongong%20Ferdinand%20Nsanyui.png"
                      alt="Ndifongong Ferdinand Nsanyui"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    Ndifongong Ferdinand Nsanyui
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm text-orange-100/90 font-medium">
                    Country Representative | Eva Helpful Global | South Korea
                  </p>
                  <p className="mt-2 text-xs sm:text-sm text-slate-200/80">Country of Residence: South Korea</p>
                </a>

                <div className="md:col-span-2 glass-panel p-5 sm:p-6 space-y-5 bg-black/40 text-sm sm:text-base text-slate-100/85">
                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Profile
                    </h3>
                    <p className="mt-2">
                      Dedicated, results-driven professional with over 11 years&apos; experience across academic,
                      corporate, and non-profit settings. Possesses strong leadership, project management, and
                      organisational skills, with a proven ability to engage diverse stakeholders and enhance
                      operational efficiency. Passionate about empowering communities, supporting international
                      collaboration, and promoting sustainable development initiatives.
                    </p>
                    <p className="mt-2">
                      <span className="font-semibold">Career Focus:</span> Project Management, Finance &amp;
                      Administration, Capacity Building, Community Engagement, International Development.
                    </p>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Education
                    </h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>
                        Doctoral in Business Administration (In Progress) – Konyang University, South Korea
                        (2022–Present)
                      </li>
                      <li>
                        Korean Language Certificate (2 years study, 2022–2024)
                      </li>
                      <li>
                        MSc Accounting and Finance (First Class, Top-up) – University of Buea / Biaka University,
                        Cameroon (2021–2022)
                      </li>
                      <li>
                        MBA Accounting and Finance (First Class Hons) – University of Bamenda / HIMS Buea,
                        Cameroon (2017–2020)
                      </li>
                      <li>
                        ICAN Application Level – Institute of Chartered Accountants of Nigeria (2015–Present)
                      </li>
                      <li>
                        B.Tech Accounting (First Class Honors) – University of Bamenda, Cameroon (2013–2014)
                      </li>
                      <li>
                        HND Accounting (Lower Credit) – HIMS Buea / Minesup, Cameroon (2011–2013)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Professional Experience
                    </h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>
                        <span className="font-semibold">ANC Ltd, Buea – Financial Manager &amp; Shareholder (2018–Present):</span>
                        Oversees financial management, budgeting, and reporting; manages general affairs and operational
                        planning; coordinates with stakeholders to enhance organizational performance.
                      </li>
                      <li>
                        <span className="font-semibold">HIMS Buea – Deputy Registrar / Lecturer (2020–2022):</span>
                        Managed academic administration, curriculum delivery, and student support; developed workshops
                        and trainings to improve student skills and employability.
                      </li>
                      <li>
                        <span className="font-semibold">Konyang University, South Korea – Student Representative &amp; Assistant (2024–2025):</span>
                        Supported international students with documentation and university procedures; provided
                        Korean-English translation and interpretation for cross-cultural communication; facilitated
                        connections between students and university services.
                      </li>
                      <li>
                        <span className="font-semibold">Kosan Crisplant Cameroon S.A. – Intern (2014):</span>
                        Assisted in tax administration, financial reporting, stocktaking, and bank reconciliation.
                      </li>
                      <li>
                        <span className="font-semibold">Solid Foundation International (SOFI), Bamenda – Intern (2012):</span>
                        Maintained daily records and conducted financial reconciliations.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Projects &amp; Research
                    </h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>2014: Impact of Taxation on the Growth of SMEs in Buea Municipality</li>
                      <li>2020: Tax Administration and Compliance Level of Taxpayers in Fako Division, Southwest Cameroon</li>
                      <li>2022: Financial Literacy and Performance of SMEs in Fako Division, Southwest Cameroon</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                      <FiUsers className="h-5 w-5" />
                      Skills
                    </h3>
                    <ul className="mt-2 space-y-1 list-disc list-inside">
                      <li>
                        <span className="font-semibold">Project &amp; Organizational Management:</span> Leadership, team
                        coordination, goal-setting, scheduling, and decision-making.
                      </li>
                      <li>
                        <span className="font-semibold">Financial Management:</span> Budgeting, reporting, and strategic
                        planning.
                      </li>
                      <li>
                        <span className="font-semibold">Communication &amp; Networking:</span> Public speaking, stakeholder
                        engagement, and cross-cultural collaboration.
                      </li>
                      <li>
                        <span className="font-semibold">Technical Skills:</span> MS Word, Excel, PowerPoint (Excellent);
                        MS Publisher (Good).
                      </li>
                      <li>
                        <span className="font-semibold">Languages:</span> English (Excellent), French (Average), Korean (Average).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-center text-xs sm:text-sm text-slate-200/80">
                Stay tuned more Eva Helpful Global country teams, stories, and features are on the way.
              </p>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
