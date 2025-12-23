import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers } from "react-icons/fi";

export default function NdifonGervaisNuvadgaPage() {
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
                  src="/Ndifon%20Gervais%20Nuvadga.png"
                  alt="Ndifon Gervais Nuvadga"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">Ndifon Gervais Nuvadga</h1>
                <p className="text-sm text-orange-200">
                  Director of Adolescent &amp; Youth Mentoring Services, Eva Helpful Foundation
                </p>
                <p className="text-xs sm:text-sm text-slate-200/80">Current Residence: Liège, Belgium</p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-6 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-3">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Professional Profile
                </h2>
                <p className="text-slate-100/85">
                  🌍 Ndifon Gervais Nuvadga is an accomplished ICT professional, educator, and youth development
                  practitioner with extensive experience in higher education, technology integration, and
                  adolescent and youth mentorship in structured, rights-based settings. He is currently pursuing a
                  Postgraduate Degree in International Teaching at Thomas More University of Applied Sciences,
                  Belgium, reinforcing his commitment to inclusive, safe, and learner-centred education in
                  multicultural and international contexts.
                </p>
                <p className="text-slate-100/85">
                  📚 With a strong academic foundation in Information and Communication Technology, complemented by
                  formal studies in Humanism, Comparative Religions, and Engineering, Mr Ndifon brings a
                  multidisciplinary, child-centred perspective to youth programming. His professional practice is
                  guided by internationally recognised principles of child protection, safeguarding,
                  non-discrimination, participation, and the best interests of the child, ensuring that all
                  mentoring and educational interventions prioritise safety, dignity, and well-being.
                </p>
                <p className="text-slate-100/85">
                  💡 His work consistently integrates positive values education, including empathy, respect,
                  responsibility, discipline, patience, hard work, ethical leadership, and entrepreneurship. He
                  also incorporates psychosocial support approaches that promote emotional resilience, self-esteem,
                  social inclusion, and healthy coping mechanisms, particularly for adolescents and young people in
                  vulnerable or transitional contexts.
                </p>
                <p className="text-slate-100/85">
                  🤝 In his role as Director of Adolescent &amp; Youth Mentoring Services at Eva Helpful Foundation,
                  Mr. Ndifon provides strategic leadership for youth-focused programmes fully aligned with
                  safeguarding standards. He ensures the design and implementation of mentoring frameworks that are
                  safe, inclusive, gender-responsive, and trauma-informed, and embeds accountability,
                  confidentiality, and clear referral pathways for protection concerns. His leadership emphasises
                  youth participation, life skills development, and the responsible use of digital technologies to
                  enhance learning and social impact.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Core Competencies
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>Child Protection, Safeguarding &amp; Youth-Safe Programming</li>
                  <li>Adolescent &amp; Youth Mentorship (Rights-Based and Values-Driven)</li>
                  <li>Psychosocial Support &amp; Well-Being Promotion</li>
                  <li>Educational Leadership &amp; Capacity Building</li>
                  <li>ICT Support, Systems Administration &amp; Troubleshooting</li>
                  <li>Digital Education &amp; E-Learning Solutions</li>
                  <li>Graphic Design, Multimedia &amp; Animation</li>
                  <li>Video Production, Broadcasting &amp; Live Streaming</li>
                  <li>Website Development &amp; Content Management (WordPress, Odoo)</li>
                  <li>Digital Marketing, SEO &amp; Responsible Online Engagement</li>
                  <li>Academic Quality Assurance &amp; Institutional Development</li>
                  <li>Training, Facilitation &amp; Youth-Friendly Learning Environments</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Education
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>
                    Postgraduate Degree in International Teaching – Thomas More University of Applied Sciences,
                    Belgium (2025 – 2026)
                  </li>
                  <li>
                    Diploma in Comparative Studies in Religions and Humanism – KU Leuven, Faculty of Humanism and
                    Social Studies (2024)
                  </li>
                  <li>
                    Exchange Programme – Electrical Engineering (Electronics &amp; Electromechanics), University
                    College Leuven-Limburg, Campus Diepenbeek (2023)
                  </li>
                  <li>
                    Master of Science (MSc) in Information and Communication Technology – The ICT University,
                    Yaoundé, Cameroon (2014 – 2023)
                  </li>
                  <li>Bachelor of Science (BSc) in Physical Geography – University of Yaoundé I, Cameroon</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Professional Experience
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>
                    <span className="font-semibold">Chief Technology Officer</span> – Light TV, Light World Mission
                    International Church, Yaoundé
                    <span className="block">
                      Led installation and management of IT and broadcasting systems in compliance with ethical and
                      safety standards; supported responsible media production and digital safeguarding practices;
                      ensured secure handling of digital content and protection of personal data.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Assistant Director of Quality Assurance</span> – The ICT University
                    (USA), Cameroon Campus
                    <span className="block">
                      Supported institutional compliance with academic, ethical, and quality assurance standards;
                      contributed to monitoring and evaluation processes that promoted accountability and learner
                      protection; supported staff capacity building on professional conduct and student welfare.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Director of Admissions &amp; Student Welfare</span> – The ICT
                    University (USA), Cameroon Campus
                    <span className="block">
                      Oversaw admissions and student welfare services with a focus on safeguarding, inclusion, and
                      equal access; integrated student support mechanisms, psychosocial guidance, and referral
                      pathways; promoted safe learning environments and respectful institutional culture.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Assistant Lecturer (ICT)</span> – The ICT University (USA),
                    Cameroon Campus
                    <span className="block">
                      Delivered ICT instruction within structured, respectful, and learner-centred environments;
                      mentored students on discipline, responsibility, digital ethics, and professional conduct;
                      supported student well-being through guidance and referral to appropriate services when
                      required.
                    </span>
                  </li>
                  <li>
                    <span className="font-semibold">Freelance IT Consultant &amp; Graphic Designer</span> – Self-Employed
                    <span className="block">
                      Provided ethical and responsible digital services to organisations and youth-led initiatives;
                      supported entrepreneurship and skills development while promoting safe online practices;
                      ensured responsible data handling and client confidentiality.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Professional Certifications
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>Google IT Support Professional Certificate</li>
                  <li>Network Security Associate &amp; Network Security Expert (Fortinet)</li>
                  <li>Diploma in Computer Hardware &amp; Software Maintenance</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Technical Proficiencies
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>Operating Systems: Windows (All Versions), Linux</li>
                  <li>Software &amp; Tools: Adobe Photoshop, Adobe Premiere Pro, Canva, WordPress, Odoo</li>
                  <li>Specialisations: Computer Maintenance, Network Security, Multimedia Production</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Languages
                </h3>
                <p className="text-slate-100/90 text-sm sm:text-[15px]">
                  🌐 English – Fluent; French – Fluent; Pidgin English – Fluent; Mungaka – Native
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Leadership &amp; Civic Engagement
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text-[15px]">
                  <li>President, Messassi Center – Cameroon Youths for Jesus (CYJ)</li>
                  <li>Regional Observer, Legislative Elections – ELECAM, Cameroon</li>
                  <li>Team Leader, National Population Census – BUCREP, Cameroon</li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="flex items-center gap-2 text-base sm:text-lg font-semibold text-slate-50">
                  <FiUsers className="h-5 w-5" />
                  Awards &amp; Recognition
                </h3>
                <ul className="list-disc list-inside space-y-1 text-slate-100/90 text-sm sm:text[15px]">
                  <li>Distinguished Service Certificate of Award – ICT Contribution to University Development</li>
                  <li>STEM Education Appreciation Award (January 2022)</li>
                  <li>Mentorship &amp; Leadership Recognition (2021)</li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
