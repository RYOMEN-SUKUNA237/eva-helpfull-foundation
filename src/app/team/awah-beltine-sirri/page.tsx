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
                  Awah Beltine Sirri
                </h1>
                <p className="text-sm text-orange-200">
                  Vice President (General / Deputy President), Eva Helpful Foundation
                </p>
              </div>
            </div>

            <div className="glass-panel flex-1 space-y-5 p-6 sm:p-8 text-sm sm:text-base">
              <div className="space-y-4">
                <h2 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Leadership Profile
                </h2>
                <p className="text-slate-100/85">
                  Awah Beltine Sirri is an education specialist, development advocate and organisational leader
                  with over a decade of progressive experience across teaching, curriculum development, editorial
                  services and community-focused programme management. Her professional journey reflects a
                  consistent commitment to empowering young people, advancing gender equity and strengthening
                  educational systems within Cameroon.
                </p>
                <p className="text-slate-100/85">
                  She currently serves as Vice President of the Eva Helpful Foundation, where she provides
                  strategic leadership in program development, partnership coordination and organisational
                  governance. Her contributions support the Foundation&apos;s mission to promote social welfare,
                  educational advancement, and community resilience.
                </p>
                <p className="text-slate-100/85">
                  With a strong academic foundation in English Language and ongoing postgraduate training in
                  Curriculum and Evaluation at the University of Yaoundé I, she combines technical expertise with
                  a practical understanding of classroom realities and learner-centred methodologies.
                </p>
                <p className="text-slate-100/85">
                  She has served as an English Language Instructor for several years at Lycée de Nkolpoblo and
                  Government Bilingual Secondary School Akougou, contributing to instructional leadership as
                  Deputy Head of Department and Coordinator of English Club initiatives. Her work in these
                  institutions reflects her proficiency in learner assessment, mentoring, counselling and academic
                  program coordination.
                </p>
                <p className="text-slate-100/85">
                  Beyond formal education, she has championed youth engagement and gender-focused initiatives
                  through her roles in organisations such as Girls Strength and Gender Education and Deserve,
                  where she has worked in public relations, advocacy and stakeholder mobilisation. She has also
                  collaborated with AJ Research Consulting as an editor and qualitative data transcriber, bringing
                  editorial precision and academic rigor to research projects.
                </p>
                <p className="text-slate-100/85">
                  As a contributor to curriculum enrichment, she has co-authored Modern Primary English Pupils’
                  Books 3 and 4, published by Quality Prints, supporting foundational literacy development for
                  young learners.
                </p>
                <p className="text-slate-100/85">
                  Driven by integrity, service and a passion for community development, Awah Beltine Sirri
                  continues to dedicate her expertise to promoting quality education, strengthening youth
                  capacities and advancing social impact initiatives across Cameroon and beyond.
                </p>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
