import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiUsers, FiAward, FiBookOpen } from "react-icons/fi";

export default function AriannaRomanoPage() {
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
                  src="/Picture1.png"
                  alt="Arianna Romano"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-slate-50">
                  Arianna Romano
                </h1>
                <p className="text-sm text-orange-200">
                  Country Representative Eva Helpful Foundation (United Kingdom)
                </p>
                <p className="text-xs text-slate-300/85 mt-1">Based in Romford, London</p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-6 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Professional Profile
                </h2>
                <p className="text-slate-100/85">
                  Arianna Romano serves as the Country Representative for Eva Helpful Foundation
                  in the United Kingdom, bringing a strategic, culturally informed, and
                  service-oriented approach to mission delivery and community engagement. With a
                  professional background spanning healthcare, education, and community-focused
                  environments, she offers substantial expertise in stakeholder communication,
                  coordination, and ethical representation.
                </p>
                <p className="text-slate-100/85">
                  Having lived and worked across multiple European countries, Arianna brings a
                  global perspective and strong cultural sensitivity, enabling her to serve as
                  an effective liaison among diverse communities, institutional partners, and
                  international stakeholders. Her experience in client-facing and
                  administrative roles has strengthened her ability to manage sensitive
                  information discreetly, uphold safeguarding standards, and operate with
                  integrity in complex, confidential contexts.
                </p>
                <p className="text-slate-100/85">
                  In her role with Eva Helpful Foundation UK, she supports partnership
                  development, local representation, and community initiatives, contributing to
                  the Foundation&apos;s mission through clear communication, reliable
                  coordination, and value driven leadership.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiAward className="h-5 w-5" />
                  Core Competencies
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-100/85 text-sm">
                  <li>• Stakeholder engagement and relationship management</li>
                  <li>• Cross-cultural communication and international representation</li>
                  <li>• Strategic coordination of activities, schedules, and resources</li>
                  <li>• Community engagement and advocacy</li>
                  <li>• Clear verbal and written communication</li>
                  <li>• Organisation, prioritisation, and time management</li>
                  <li>• Confidentiality, safeguarding, and ethical awareness</li>
                  <li>• Data management, reporting, and documentation</li>
                  <li>• Problem-solving and decision-making</li>
                  <li>• Team collaboration and independent leadership</li>
                  <li>• Adaptability within dynamic, multidisciplinary environments</li>
                  <li>• Languages: Italian (native), English (fluent)</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  Professional Training, Certifications &amp; Education
                </h2>
                <div className="space-y-4 text-slate-100/85">
                  <div>
                    <p className="font-semibold text-slate-50">Child Psychology Certificate Level 3</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      <li>• Understanding the impact of family, environment, and peers on child development</li>
                      <li>• Recognising early signs of developmental and psychological challenges</li>
                      <li>• Designing activities to promote learning and wellbeing</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Certificate in Teaching English as a Foreign Language (TEFL) | ITTT (Summer–Winter 2016)</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      <li>• Structured lesson planning and classroom management</li>
                      <li>• Effective use of teaching resources</li>
                      <li>• Internationally recognised qualification</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">NVQ Level 3 in Customer Services | Carillion, Royal London Hospital (Winter 2015–Summer 2016)</p>
                    <ul className="mt-1 space-y-1 text-sm">
                      <li>• Delivery of personalised customer service</li>
                      <li>• Feedback monitoring and issue resolution</li>
                      <li>• Contribution to service improvement strategies</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-50">Bachelor of Arts (Honours) Language Studies (English and French)</p>
                    <p className="text-sm">The Open University, Milton Keynes, UK (Autumn 2015–Summer 2018)</p>
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
