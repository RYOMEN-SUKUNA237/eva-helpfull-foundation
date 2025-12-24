import type { Metadata } from "next";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FiBookOpen, FiAward, FiGlobe, FiUsers, FiHeart } from "react-icons/fi";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Professor Alain Vilard Ndi Isoh | Founder & President",
  description:
    "Meet Professor Alain Vilard Ndi Isoh, Founder and President of Eva Helpful Foundation. An accomplished researcher, administrator, and educator dedicated to restoring moral values in Cameroon.",
  keywords: [
    "Professor Alain Isoh",
    "Eva Helpful founder",
    "values education leader Cameroon",
    "ICT University Cameroon",
    "youth empowerment leader",
  ],
  openGraph: {
    title: "Professor Alain Vilard Ndi Isoh | Eva Helpful Foundation",
    description:
      "Founder and President of Eva Helpful Foundation, dedicated to restoring moral values and nurturing responsible future leaders.",
    url: `${siteUrl}/team/professor-alain-isoh`,
    siteName: "Eva Helpful Foundation",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: `${siteUrl}/uppdate%20prof%20alain.jpeg`,
        width: 400,
        height: 400,
        alt: "Professor Alain Vilard Ndi Isoh",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Professor Alain Vilard Ndi Isoh | Eva Helpful Foundation",
    description: "Founder and President of Eva Helpful Foundation.",
  },
  alternates: {
    canonical: `${siteUrl}/team/professor-alain-isoh`,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Professor Alain Vilard Ndi Isoh",
  jobTitle: "Founder & President",
  worksFor: {
    "@type": "NGO",
    name: "Eva Helpful Foundation",
  },
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Cardiff Metropolitan University" },
    { "@type": "CollegeOrUniversity", name: "University of Gloucestershire" },
    { "@type": "CollegeOrUniversity", name: "University of Buea" },
  ],
  description:
    "Professor Alain Vilard Ndi Isoh is an accomplished researcher, administrator, and educator with expertise in Business Management, Finance, and Public Sector Leadership.",
  image: `${siteUrl}/uppdate%20prof%20alain.jpeg`,
  url: `${siteUrl}/team/professor-alain-isoh`,
};

export default function ProfessorAlainIsohPage() {
  return (
    <div className="page-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col">
          <section className="mx-auto flex w-full max-w-5xl flex-col gap-8">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="relative h-32 w-32 sm:h-40 sm:w-40 overflow-hidden rounded-full border border-white/20 bg-black/40">
                <Image
                  src="/uppdate prof alain.jpeg"
                  alt="Professor Alain Vilard Ndi Isoh"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 128px, 160px"
                  priority
                />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl font-semibold text-white">
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
