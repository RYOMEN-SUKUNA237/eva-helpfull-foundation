import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { Reveal } from "@/components/animation/Reveal";
import { PhoneField } from "@/components/form/PhoneField";
import {
  FiHeart,
  FiUsers,
  FiBookOpen,
  FiCamera,
  FiPhone,
  FiMapPin,
  FiTrendingUp,
  FiSmile,
  FiGlobe,
} from "react-icons/fi";
import { DOCUMENTATIONS } from "@/data/documentations";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.evahelpful.org";

export const metadata: Metadata = {
  title: "Home | Building a Generation Grounded in Values",
  description:
    "Eva Helpful Foundation builds a generation grounded in values that protect the future through values-based education, school partnerships, and community programs in Cameroon.",
  keywords: [
    "Eva Helpful Foundation",
    "Eva Helpful",
    "values education Cameroon",
    "character development",
    "youth empowerment",
    "school partnerships Africa",
    "parenting values",
    "emotional intelligence children",
    "children values Cameroon",
    "teach kids values",
    "moral education",
    "youth programs Yaounde",
    "school outreach",
    "child mentorship",
    "respect empathy honesty",
    "raising responsible children",
    "nonprofit education Africa",
    "volunteer with children",
    "donate to children education",
  ],
  alternates: {
    canonical: siteUrl,
  },
};

export default function Home() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-20 pb-20 px-4 sm:px-6 lg:px-8 flex-1 flex flex-col gap-20">
          {/* Hero */}
          <Reveal
            as="section"
            direction="left"
            className="flex flex-col lg:flex-row items-center gap-10 max-w-6xl mx-auto"
            id="top"
          >
            <div className="flex-1 space-y-6">
              <p className="inline-flex items-center gap-2 text-sm font-medium text-orange-300 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-400/40 w-fit">
                Eva Helpful Foundation
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-slate-50">
                Building a generation
                <span className="block text-orange-400">
                  grounded in values that protect the future.
                </span>
              </h1>
              <p className="text-base sm:text-lg text-slate-100/80 max-w-xl">
                We exist to restore positive values among children and adolescents – respect, empathy,
                honesty, and responsibility – because the future depends on the values we teach today.
              </p>
              <div className="space-y-2 text-sm sm:text-base text-slate-100/85">
                <h2 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-orange-300">
                  Why we exist
                </h2>
                <p className="max-w-xl text-xs sm:text-sm text-slate-100/80">
                  Families are overwhelmed, schools focus mostly on academics, and communities have lost the
                  trust that once protected children. This has created a dangerous value gap, leading to
                  rising violence, disrespect, and emotional instability among the young.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/donate"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/40 hover:bg-orange-600 transition-colors text-sm sm:text-base"
                >
                  Support our movement
                </a>
                <a
                  href="/volunteer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/40 bg-white/5 text-white font-medium hover:bg-white/10 transition-colors text-sm sm:text-base"
                >
                  Volunteer with us
                </a>
              </div>
              <div className="grid grid-cols-3 gap-4 max-w-md text-sm sm:text-base">
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold text-orange-300">5k+</p>
                  <p className="text-slate-100/70">Students impacted</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold text-orange-300">20+</p>
                  <p className="text-slate-100/70">Schools partnered</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-semibold text-orange-300">10+</p>
                  <p className="text-slate-100/70">Core values taught</p>
                </div>
              </div>
            </div>

            <Reveal as="div" direction="right">
              <a
                href="#media"
                className="flex-1 w-full max-w-xl p-4 sm:p-6 lg:p-8 cursor-pointer rounded-3xl border border-white/25 bg-white/10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.15)] hover:bg-white/15 hover:border-white/35 transition-all duration-300"
              >
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <Image
                      src="/images/photo_1_2025-12-03_18-28-46.jpg"
                      alt="Eva Helpful Foundation school outreach group photo with students and volunteers"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                      priority
                    />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <Image
                      src="/images/photo_4_2025-12-03_18-28-46.jpg"
                      alt="Students listening during an Eva Helpful Foundation values education session"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 280px"
                    />
                  </div>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <Image
                      src="/images/photo_7_2025-12-03_18-28-46.jpg"
                      alt="Eva Helpful Foundation volunteers and facilitators with learners in Cameroon"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, 280px"
                    />
                  </div>
                </div>
                <p className="mt-4 text-xs sm:text-sm text-slate-100/70">
                  Real moments from Eva Helpful Foundation outreach programs, captured in partner schools
                  and community engagements. Tap to explore more media below.
                </p>
              </a>
            </Reveal>
          </Reveal>

          {/* Latest from blog teaser */}
          <Reveal as="section" className="max-w-6xl mx-auto flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex-1 space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Latest from the blog
              </p>
              <h2 className="text-xl sm:text-2xl font-semibold text-slate-50">
                Practical stories for parents, teachers, and value builders
              </h2>
              <p className="text-sm sm:text-base text-slate-100/80 max-w-2xl">
                Read short, real-life insights from Eva Helpful Foundation about parenting, emotional
                intelligence, and values-based education in Cameroon.
              </p>
            </div>
            <div className="flex justify-start sm:justify-end">
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-orange-500 text-white font-semibold shadow-lg shadow-orange-500/40 hover:bg-orange-600 transition-colors text-sm sm:text-base"
              >
                Latest from the blog
              </Link>
            </div>
          </Reveal>

          <Reveal as="section" className="max-w-6xl mx-auto space-y-8">
            <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Our Focus Areas</h2>
                <p className="mt-2 text-sm sm:text-base text-slate-100/80 max-w-2xl">
                  We design values-based programs that help young people develop
                  character, social skills, and confidence for life beyond the classroom.
                </p>
              </div>
              <a
                href="/programs"
                className="text-sm sm:text-base font-medium text-orange-300 hover:text-orange-200"
              >
                Explore programs
              </a>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              <article className="glass-panel p-5 sm:p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <FiBookOpen className="h-5 w-5 text-orange-300" />
                  Values &amp; Life Skills
                </h3>
                <p className="text-sm sm:text-base text-slate-100/80">
                  Interactive sessions on empathy, respect, responsibility, and
                  emotional intelligence tailored to different age groups.
                </p>
              </article>
              <article className="glass-panel p-5 sm:p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <FiUsers className="h-5 w-5 text-orange-300" />
                  School Partnerships
                </h3>
                <p className="text-sm sm:text-base text-slate-100/80">
                  Long-term collaborations with schools to reinforce positive
                  culture, leadership, and peer support systems.
                </p>
              </article>
              <article className="glass-panel p-5 sm:p-6">
                <h3 className="mb-2 flex items-center gap-2 text-lg sm:text-xl font-semibold">
                  <FiHeart className="h-5 w-5 text-orange-300" />
                  Parents &amp; Community
                </h3>
                <p className="text-sm sm:text-base text-slate-100/80">
                  Workshops and conversations that equip parents, teachers, and
                  volunteers to support young people holistically.
                </p>
              </article>
            </div>
          </Reveal>

          {/* Blog */}
          <Reveal as="section" className="max-w-6xl mx-auto space-y-6" id="blog">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Stories from Eva Helpful</h2>
                <p className="max-w-3xl text-sm sm:text-base text-slate-100/80">
                  Reflections, program highlights, and practical ideas for parents, teachers, and
                  volunteers who want to nurture values in young people.
                </p>
              </div>
              <div className="sm:text-right">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 rounded-full border border-orange-400/80 bg-orange-500/20 px-4 py-2 text-xs sm:text-sm font-semibold text-orange-50 shadow-[0_10px_30px_rgba(248,250,252,0.25)] hover:bg-orange-500/30 hover:border-orange-300 transition-colors"
                >
                  <span>View all blogs</span>
                  <span className="text-base leading-none">→</span>
                </Link>
              </div>
            </header>

            <div className="grid gap-5 md:grid-cols-3">
              {/* Featured published article */}
              <Link
                href="/blog/5-ways-to-teach-honesty"
                className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                  For Parents
                </p>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  5 Simple Ways to Teach Honesty to Your Child This Week
                </h3>
                <p className="mb-3 text-slate-100/80">
                  Practical tips to encourage honesty and build trust with your child at home.
                </p>
                <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
              </Link>

              {/* Second published article */}
              <Link
                href="/blog/emotional-intelligence-in-schools"
                className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                  Future of Education
                </p>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  The Future of Education: Integrating Emotional Intelligence in Schools
                </h3>
                <p className="mb-3 text-slate-100/80">
                  Why Social and Emotional Learning (SEL) is the missing link in classrooms across Cameroon.
                </p>
                <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
              </Link>

              <Link
                href="/blog/managing-teen-smartphone-use-cameroon"
                className="glass-panel flex flex-col p-5 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                  Parenting Guides
                </p>
                <h3 className="text-base sm:text-lg font-semibold mb-2">
                  The Silent Epidemic: A Cameroonian Parent’s Guide to Managing Teen Smartphone Use
                </h3>
                <p className="mb-3 text-slate-100/80">
                  Is your teen constantly on their phone? Discover strategies to manage screen time, build trust,
                  and restore family connection.
                </p>
                <span className="mt-auto text-xs font-medium text-orange-200">Read article</span>
              </Link>
            </div>
          </Reveal>

          {/* About */}
          <Reveal as="section" className="max-w-6xl mx-auto space-y-8" id="about">
            <div className="glass-panel p-6 sm:p-8 space-y-6">
              <header className="space-y-3">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                  About Us
                </p>
                <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Eva Helpful Foundation</h2>
                <p className="max-w-3xl text-sm sm:text-base text-slate-100/80">
                  Eva Helpful is a values-driven, youth-focused organization officially registered under
                  Authorization No. 254/G.37/VOL1/SAAJP/3AP of 27 March 2025. We were founded to address the
                  deep moral and social challenges affecting children and adolescents in Cameroon.
                </p>
              </header>

              <div className="grid gap-6 md:grid-cols-3 text-sm">
                <div className="md:col-span-2 space-y-4">
                  <h3 className="text-lg font-semibold text-orange-300">Why we exist: the problem</h3>
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-[11px] font-bold text-orange-300">
                        1
                      </span>
                      Family challenges
                    </h4>
                    <p className="text-slate-100/85">
                      Many parents work long hours, leaving little time to guide and mentor their children.
                      Without meaningful parental presence, children often turn to social media and peers for
                      direction, creating emotional gaps, identity confusion, and weakened character foundations.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-[11px] font-bold text-orange-300">
                        2
                      </span>
                      School system gaps
                    </h4>
                    <p className="text-slate-100/85">
                      Although education laws emphasize values like respect, honesty, and discipline, real
                      implementation is limited. Schools focus heavily on academic success and revenue, while
                      moral and civic education receive little attention.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <h4 className="flex items-center gap-2 text-sm font-semibold text-slate-50">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-orange-500/20 text-[11px] font-bold text-orange-300">
                        3
                      </span>
                      Weakening communities
                    </h4>
                    <p className="text-slate-100/85">
                      The communal spirit that once defined African societies has faded. Neighbors no longer
                      look out for one another, and children lack the safe environments that once provided
                      collective protection and guidance.
                    </p>
                  </div>
                </div>

                <div className="space-y-3 text-sm">
                  <h3 className="text-lg font-semibold text-orange-300">Our response to a crisis</h3>
                  <p className="text-slate-100/85">
                    Cameroon has witnessed escalating violence in schools and communities—from teacher
                    killings and student-on-student attacks to rising sexual violence and abuse. These
                    incidents reveal deep moral erosion and emotional instability among youths.
                  </p>
                  <p className="text-slate-100/85">
                    Eva Helpful Foundation responds directly to this crisis by restoring character,
                    emotional intelligence, and value-based education.
                  </p>
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2 text-sm">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-orange-300">Vision</h3>
                  <p className="text-slate-100/85">
                    To raise children and adolescents who embody compassion, respect, honesty, empathy,
                    strong mental health, and responsible citizenship, while promoting sustainable living and
                    care for the environment.
                  </p>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-orange-300">Mission</h3>
                  <p className="text-slate-100/85">
                    To nurture a generation rooted in positive values, emotional intelligence, ethical
                    thinking, and community responsibility, strengthening families, supporting schools, and
                    promoting national harmony through value-based education.
                  </p>
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2 text-sm">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-orange-300">Objectives</h3>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85">
                    <li>Teach strong moral values and good character.</li>
                    <li>Promote mental and emotional well-being.</li>
                    <li>Support research on children’s values and behavior.</li>
                    <li>Equip children with social and community skills.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-orange-300">Long-term goals</h3>
                  <ul className="list-disc space-y-1 pl-5 text-slate-100/85">
                    <li>Prepare youth for future professional and civic responsibility.</li>
                    <li>Establish an academy for family and community value education.</li>
                    <li>Encourage sustainable living and environmental care.</li>
                  </ul>
                </div>
              </div>
              <section className="mt-6 space-y-3">
                <header className="space-y-1">
                  <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                    Official Documents
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                    Eva Helpful Documentation Library
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100/80">
                    A quick preview of key official documents. Tap a card to open the full PDF.
                  </p>
                </header>

                <div className="grid gap-3 sm:grid-cols-2">
                  {DOCUMENTATIONS.slice(0, 2).map((doc) => (
                    <a
                      key={doc.slug}
                      href={`/documentations/${encodeURIComponent(doc.file)}`}
                      target="_blank"
                      rel="noreferrer"
                      className="group block"
                    >
                      <article className="glass-panel flex items-center gap-3 p-4 sm:p-5 text-xs sm:text-sm group-hover:bg-white/10 transition-colors">
                        <div className="flex h-16 w-14 sm:h-20 sm:w-16 flex-shrink-0 items-center justify-center rounded-md border border-white/25 bg-slate-900/70">
                          <span className="text-[10px] sm:text-xs font-semibold text-orange-200">PDF</span>
                        </div>
                        <div className="space-y-1">
                          <h4 className="text-[11px] sm:text-sm font-semibold text-slate-50">{doc.title}</h4>
                          <p className="text-[11px] sm:text-[13px] text-slate-100/85 line-clamp-3">
                            {doc.description}
                          </p>
                          <p className="mt-1 text-[10px] sm:text-[11px] text-slate-300/85">
                            Click to open full view-only PDF in a new tab.
                          </p>
                        </div>
                      </article>
                    </a>
                  ))}
                </div>

                <div className="pt-1">
                  <Link
                    href="/docs"
                    className="inline-flex items-center text-[11px] sm:text-xs font-semibold text-orange-300 hover:text-orange-200"
                  >
                    View more documents
                    <span className="ml-1 text-base leading-none">→</span>
                  </Link>
                </div>
              </section>
            </div>
          </Reveal>

          {/* Team */}
          <Reveal as="section" className="max-w-6xl mx-auto space-y-6" id="team">
            <header className="flex flex-col gap-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Leadership Team
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50 flex items-center gap-3">
                <FiUsers className="h-7 w-7 text-orange-300" />
                Leadership Team
              </h2>
            </header>

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {/* Founder */}
              <a
                href="/team/professor-alain-isoh"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/uppdate prof alain.jpeg"
                    alt="Professor Alain Vilard Ndi Isoh - Founder of Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">
                    Professor Alain Vilard Ndi Isoh
                  </h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Founder &amp; President, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* Vice President */}
              <a
                href="/team/awah-beltine-sirri"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/awah beltine.jpg"
                    alt="Awah Beltine Sirri - Vice President & Co-Founder of Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">Awah Beltine Sirri</h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Vice President & Co-Founder (General / Deputy President), Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* 3. Vice President – Governance / Compliance */}
              <a
                href="/team/professor-mokube-mathias-itoe"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/Professor Mokube Mathias Itoe, PhD.png"
                    alt="Professor Mokube Mathias Itoe - VP Governance at Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">Professor Mokube Mathias Itoe, PhD</h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Vice President – Governance / Compliance, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* 4. Dr. Sylvanus - Director of Research */}
              <a
                href="/team/ngoata-sylvanus-diangha"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/dr.diangha.png"
                    alt="Dr. Ngoata Sylvanus Diangha - Director of Research at Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">Dr. Ngoata Sylvanus Diangha</h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Research, Training, and Capacity Building – Eva Helpful
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>

              {/* 5. Ndifon - Director of Adolescent & Youth Mentoring */}
              <a
                href="/team/ndifon-gervais-nuvadga"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/Ndifon Gervais Nuvadga.png"
                    alt="Ndifon Gervais Nuvadga - Director of Youth Mentoring at Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">Ndifon Gervais Nuvadga</h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Adolescent &amp; Youth Mentoring Services, Eva Helpful Foundation
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Belgium</p>
                </div>
              </a>

              {/* 6. Director of Grants Management and Audit */}
              <a
                href="/team/ndam-njoya-inusa"
                className="glass-panel flex flex-col items-center gap-3 p-5 sm:p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="relative h-20 w-20 sm:h-24 sm:w-24 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src="/ndam njoya.jpg"
                    alt="Ndam Njoya Inusa - Director of Grants Management at Eva Helpful Foundation"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 80px, 96px"
                  />
                </div>
                <div className="space-y-1 text-sm sm:text-base">
                  <h3 className="text-base sm:text-lg font-semibold text-slate-50">Ndam Njoya Inusa</h3>
                  <p className="text-xs sm:text-sm text-orange-200">
                    Director of Grants Management and Audit – Eva Helpful
                  </p>
                  <p className="text-[11px] sm:text-xs text-slate-300/85">Country of residence: Cameroon</p>
                </div>
              </a>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <a
                href="/team/professor-jean-emmanuel-pondi"
                className="inline-flex items-center justify-center rounded-full border border-orange-400/70 bg-orange-500/20 px-7 py-2.5 text-sm sm:text-base font-semibold text-orange-100 shadow-[0_12px_35px_rgba(248,250,252,0.18)] backdrop-blur-xl hover:bg-orange-500/30 hover:border-orange-300 transition-colors"
              >
                View value models
              </a>
              <a
                href="/team/endorsers-and-value-advocates"
                className="inline-flex items-center justify-center rounded-full border border-orange-400/70 bg-orange-500/20 px-7 py-2.5 text-sm sm:text-base font-semibold text-orange-100 shadow-[0_12px_35px_rgba(248,250,252,0.18)] backdrop-blur-xl hover:bg-orange-500/30 hover:border-orange-300 transition-colors"
              >
                View endorsers
              </a>
              <a
                href="/team/administrative-team"
                className="inline-flex items-center justify-center rounded-full border border-orange-400/70 bg-orange-500/20 px-7 py-2.5 text-sm sm:text-base font-semibold text-orange-100 shadow-[0_12px_35px_rgba(248,250,252,0.18)] backdrop-blur-xl hover:bg-orange-500/30 hover:border-orange-300 transition-colors"
              >
                View all Leadership Team
              </a>
            </div>
          </Reveal>

          {/* Essential values / Value tree */}
          <section className="max-w-6xl mx-auto space-y-8" id="values">
            <header className="space-y-3">
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">Our Essential Values &amp; Value Tree</h2>
              <p className="max-w-3xl text-sm sm:text-base text-slate-100/80">
                We help children and adolescents grow like a healthy tree, with strong roots, a solid trunk,
                and fruitful lives built on enduring values.
              </p>
            </header>

            <div className="grid gap-6 md:grid-cols-3 text-sm">
              <div className="glass-panel p-5 sm:p-6 space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiHeart className="h-5 w-5" />
                  Core values
                </h3>
                <ul className="grid grid-cols-2 gap-2 text-slate-100/85 text-xs sm:text-sm">
                  <li>Respect</li>
                  <li>Empathy</li>
                  <li>Honesty</li>
                  <li>Responsibility</li>
                  <li>Tolerance</li>
                  <li>Community spirit</li>
                  <li>Emotional well-being</li>
                  <li>Sustainability</li>
                </ul>
              </div>

              <div className="glass-panel p-5 sm:p-6 space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiBookOpen className="h-5 w-5" />
                  UNICEF-aligned principles
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>Child rights and character education.</li>
                  <li>Inclusive, child-friendly learning environments.</li>
                  <li>Social and Emotional Learning (SEL).</li>
                  <li>Peace education and conflict resolution.</li>
                  <li>Rights-respecting schools with community involvement.</li>
                </ul>
              </div>

              <div className="glass-panel p-5 sm:p-6 space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiGlobe className="h-5 w-5" />
                  The Eva Helpful value tree
                </h3>
                <p className="text-slate-100/85 text-xs sm:text-sm">
                  We explain value development using the image of a growing tree:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    <span className="font-semibold">Roots</span> – early moral foundation from the family.
                  </li>
                  <li>
                    <span className="font-semibold">Trunk</span> – support systems: parents, schools,
                    communities, companies.
                  </li>
                  <li>
                    <span className="font-semibold">Leaves &amp; fruits</span> – responsible,
                    value-driven adults.
                  </li>
                </ul>
                <p className="text-slate-100/80 text-xs sm:text-sm">
                  Strong roots and strong support produce strong societies. Weak roots create instability,
                  disunity, and unsustainable communities.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 text-sm">
              <div className="glass-panel p-5 sm:p-6 space-y-3">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-orange-300">
                  <FiUsers className="h-5 w-5" />
                  Stakeholder engagement
                </h3>
                <ul className="list-disc space-y-1 pl-5 text-slate-100/85 text-xs sm:text-sm">
                  <li>
                    <span className="font-semibold">Parents:</span> training, workshops, and a pedagogic
                    calendar for intentional value teaching.
                  </li>
                  <li>
                    <span className="font-semibold">Schools:</span> value-based curricula, assessments, and
                    character development programs.
                  </li>
                  <li>
                    <span className="font-semibold">Community leaders:</span> advocacy and engagement for
                    safer, value-driven neighborhoods.
                  </li>
                  <li>
                    <span className="font-semibold">Companies:</span> support for work-life balance and
                    parental involvement at home.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Media preview */
          }
          <section className="max-w-6xl mx-auto space-y-6 glass-panel p-4 sm:p-6" id="media">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="space-y-2">
                <h2 className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                  <FiCamera className="h-6 w-6 text-orange-300" />
                  Media &amp; Gallery
                </h2>
                <p className="max-w-3xl text-sm sm:text-base text-slate-100/80">
                  A glimpse into our school visits and outreach activities. Scroll through these images
                  or open the full gallery to see more.
                </p>
              </div>
              <a
                href="/media"
                className="mt-2 inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-white hover:bg-white/20"
              >
                See more in full gallery
              </a>
            </header>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-4 sm:p-6">
              <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                  <div
                    key={i}
                    className="relative aspect-[4/3] overflow-hidden rounded-lg border border-white/10 bg-black/40"
                  >
                    <Image
                      src={`/images/photo_${i + 1}_2025-12-03_18-28-46.jpg`}
                      alt={`Eva Helpful Foundation outreach activity photo ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Donate */}
          <section className="max-w-6xl mx-auto" id="donate">
            <div className="glass-panel p-6 sm:p-8 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3">
                <h2 className="flex items-center gap-2 text-2xl sm:text-3xl font-semibold">
                  <FiHeart className="h-6 w-6 text-orange-300" />
                  Support Eva Helpful Foundation
                </h2>
                <p className="text-sm sm:text-base text-slate-100/80">
                  Your donation helps us deliver values-based education, outreach programs, and
                  mentorship sessions to more students and schools.
                </p>
                <p className="text-xs sm:text-sm text-slate-100/70">
                  This form records your pledge in our system. A team member will follow up with details
                  on how to complete your donation via bank transfer or other channels.
                </p>
              </div>
              <form
                action="/api/donations"
                method="post"
                className="space-y-4 text-sm sm:text-base"
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Full name
                    </label>
                    <input
                      name="donor_name"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <PhoneField />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Amount (USD)
                    </label>
                    <input
                      name="amount"
                      type="number"
                      step="0.01"
                      min="1"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Frequency
                    </label>
                    <select
                      name="frequency"
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    >
                      <option value="one-time">One-time</option>
                      <option value="monthly">Monthly</option>
                      <option value="quarterly">Quarterly</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600"
                >
                  Submit pledge
                </button>
              </form>
            </div>
          </section>

          {/* Volunteer + contact */}
          <section className="max-w-6xl mx-auto grid gap-6 lg:grid-cols-2" id="volunteer">
            <div className="glass-panel p-6 sm:p-8 text-sm sm:text-base">
              <h2 className="mb-2 flex items-center gap-2 text-2xl sm:text-3xl font-semibold text-slate-50">
                <FiUsers className="h-6 w-6 text-orange-300" />
                Volunteer with Us
              </h2>
              <p className="text-sm sm:text-base text-slate-100/80 mb-4">
                Volunteers are at the heart of Eva Helpful Foundation. Share your time, skills, and
                passion to help young people grow in values and confidence.
              </p>
              <form
                action="/api/volunteers"
                method="post"
                className="space-y-4 text-sm sm:text-base"
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Full name
                    </label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Email address
                    </label>
                    <input
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Phone number
                    </label>
                    <input
                      name="phone"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">
                      Area of interest
                    </label>
                    <input
                      name="interest"
                      placeholder="e.g. school visits, media, admin..."
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600"
                >
                  Submit details
                </button>
              </form>
            </div>

            <div className="glass-panel bg-teal-950/90 border border-teal-500/40 p-6 sm:p-8" id="contact">
              <h2 className="mb-3 flex items-center gap-2 text-xl sm:text-2xl font-semibold text-slate-50">
                <FiMapPin className="h-5 w-5 text-orange-300" />
                Contact &amp; Location
              </h2>
              <div className="space-y-2 text-slate-100/85 mb-4 text-sm sm:text-base">
                <p className="flex items-center gap-2">
                  <FiPhone className="h-4 w-4 text-orange-300" />
                  <span>
                    <span className="font-semibold">Phone 1:</span> (237) 671 80 82 32
                  </span>
                </p>
                <p className="flex items-center gap-2">
                  <FiPhone className="h-4 w-4 text-orange-300" />
                  <span>
                    <span className="font-semibold">Phone 2:</span> (237) 676 37 70 4
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Nkofoulou, Entrée Wague, Soa
                </p>
              </div>
              <p className="text-xs sm:text-sm text-slate-100/80 mb-4">
                Reach out if you would like to invite Eva Helpful Foundation to your school, co-create
                a program, or partner on a values-based initiative.
              </p>
              <div className="flex flex-wrap gap-3 text-xs sm:text-sm">
                <span className="rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  Facebook
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  Instagram
                </span>
                <span className="rounded-full bg-black/40 px-3 py-1 border border-white/10">
                  LinkedIn
                </span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
