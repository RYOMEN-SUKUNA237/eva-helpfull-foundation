import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const siteUrl = "https://example.com";

export const metadata: Metadata = {
  title:
    "The Silent Epidemic: A Cameroonian Parents Guide to Managing Teen Smartphone Use | Eva Helpful Foundation",
  description:
    "Is your teen constantly on their phone? Discover practical strategies for Cameroonian parents to manage screen time, build trust, and restore family connection.",
  openGraph: {
    title:
      "The Silent Epidemic: A Cameroonian Parents Guide to Managing Teen Smartphone Use | Eva Helpful Foundation",
    description:
      "Is your teen constantly on their phone? Discover practical strategies for Cameroonian parents to manage screen time, build trust, and restore family connection.",
    url: `${siteUrl}/blog/managing-teen-smartphone-use-cameroon`,
    type: "article",
  },
};

export default function ManagingTeenSmartphoneUseBlogPost() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-4 pb-16 pt-28 sm:px-6 lg:px-8">
        <div className="mb-2 flex justify-between text-[11px] sm:text-xs text-slate-300/80">
          <Link
            href="/"
            className="inline-flex items-center gap-1 rounded-full border border-white/25 bg-white/5 px-3 py-1.5 font-medium text-slate-100 hover:bg-white/10 hover:border-white/40 transition-colors"
          >
            <span className="text-lg leading-none">860</span>
            <span>Back to Home</span>
          </Link>
        </div>

        <header className="space-y-3 border-b border-white/10 pb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-300">
            Parenting Guides by Modern Values
          </p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.6rem]">
            The Silent Epidemic: A Cameroonian Parents Guide to Managing Teen Smartphone Use
          </h1>
          <p className="max-w-2xl text-sm sm:text-base text-slate-100/85">
            A practical guide for Cameroonian parents on managing smartphone use, setting healthy screen time
            limits for teens, and promoting internet safety at home while rebuilding trust and family connection.
          </p>
          <p className="text-xs text-slate-400">By Eva Helpful Foundation</p>
        </header>

        <article className="space-y-6 text-sm leading-relaxed sm:text-base">
            <section aria-label="Introduction" className="space-y-4">
              <p>
                You know the scene. You call your teenager for dinner, and they arrive with their eyes glued to a
                glowing screen. You ask how their day was, and you get a mumbled reply as their thumbs scroll
                through an endless feed. The vibrant, chatty child you once knew seems replaced by a silent figure,
                connected to the whole world but disconnected from the people right in front of them.
              </p>
              <div className="float-right ml-4 mb-4 w-full max-w-xs sm:max-w-sm">
                <Image
                  src="/distracted%20teen%20at%20dinner.jpg"
                  alt="African teenager distracted by smartphone at family dinner table in Cameroon"
                  width={800}
                  height={534}
                  className="h-auto w-full rounded-2xl border border-white/15 object-cover object-top"
                />
              </div>
              <p>
                As parents in Cameroon, we are raising the first generation of "digital natives." While smartphones
                are incredible tools for learning and communication especially for staying in touch with family via
                WhatsApp they have also introduced a new set of challenges. We are seeing a rise in anxiety, sleep
                deprivation, and a erosion of traditional values like presence and respect.
              </p>
              <p>
                At Eva Helpful Foundation, we believe that technology should serve our families, not control them.
                This guide goes beyond simple "screen time limits" to offer a framework for building healthy digital
                habits based on trust and values.
              </p>
            </section>

            <section aria-labelledby="why-section" className="space-y-4 clear-both">
              <h2 id="why-section" className="text-xl font-semibold text-orange-300">
                1. Acknowledge the "Why": It's Not Just About Rebellion
              </h2>
              <p>
                Before we can fix the problem, we must understand it. For a teenager, their smartphone isn&apos;t just a
                toy; it&apos;s their social lifeline. It&apos;s where their friends are, where they form their identity, and
                where they fear missing out (FOMO).
              </p>
              <p>
                When we simply confiscate a phone, we aren&apos;t just taking away a device; to them, it feels like we&apos;re
                cutting them off from their world. This often leads to secrecy and resentment, the opposite of the
                open communication we want. Our goal is not to ban the phone but to teach them how to use it as a
                responsible tool.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">The "Connection Gap"</h3>
                <p>
                  The biggest danger isn&apos;t what they are looking at, but what they are missing out on. Every hour
                  spent scrolling is an hour not spent talking to a grandparent, helping with chores, or simply
                  daydreaming and developing their own thoughts. This "connection gap" weakens the family bond, which
                  is the root of a child&apos;s moral foundation.
                </p>
              </div>
            </section>

            <section aria-labelledby="three-cs" className="space-y-4">
              <h2 id="three-cs" className="clear-both text-xl font-semibold text-orange-300">
                2. The "3 C&apos;s" Framework for Managing Smartphone Use
              </h2>
              <p>
                Instead of arbitrary rules, we recommend a collaborative approach built on three pillars: Connect,
                Contract, and Control.
              </p>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">C1: Connect Before You Correct</h3>
                <div className="float-right ml-4 mb-4 w-full max-w-xs sm:max-w-sm">
                  <Image
                    src="/mother%20&%20daughter%20with%20phone.jpg"
                    alt="Black mother and teenage daughter smiling while looking at a smartphone together, building trust"
                    width={800}
                    height={534}
                    className="h-auto w-full rounded-2xl border border-white/15 object-cover object-top"
                  />
                </div>
                <p>
                  Don&apos;t start with rules. Start with a conversation. Pick a calm moment not when you&apos;re angry about
                  their phone use and ask open-ended questions.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    "What&apos;s the most interesting thing you saw online today?"
                  </li>
                  <li>
                    "How does it make you feel when you see your friends posting about their lives?"
                  </li>
                  <li>
                    "Do you ever feel stressed by how many messages you get?"
                  </li>
                </ul>
                <p>
                  By listening without judgment, you show them that you are on their team. You are not against them;
                  you are against the negative effects of the phone.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">C2: Create a Family "Digital Contract"</h3>
                <p>
                  Rules work best when everyone agrees to them. Sit down and write a simple "contract" that applies
                  to everyone in the house, including parents. If you are on your phone during dinner, you cannot
                  expect your teen to be different.
                </p>
                <p className="font-semibold text-slate-100/90">Key Clauses for Your Contract:</p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    <span className="font-semibold">No-Phone Zones:</span> The dinner table and bedrooms after a
                    certain hour (e.g., 9 PM) are sacred spaces for family and rest.
                  </li>
                  <li>
                    <span className="font-semibold">The "Eyes Up" Rule:</span> When someone is speaking to you, you
                    must put the phone down and make eye contact. This is a fundamental lesson in respect, one of Eva
                    Helpful&apos;s core values.
                  </li>
                  <li>
                    <span className="font-semibold">Tech-Free Tuesdays:</span> Designate one evening a week for a
                    family activity with absolutely no screens board games, cooking together, or just talking.
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-slate-50">C3: Control with Compassion (Not Just Filtering)</h3>
                <p>
                  Parental control apps that filter content can be helpful tools, but they are not a complete
                  solution. A determined teenager will always find a way around a filter. The best filter is their
                  own conscience.
                </p>
                <p>
                  Instead of spying, focus on mentorship.
                </p>
                <ul className="ml-5 list-disc space-y-1">
                  <li>
                    Teach them about digital footprints: "Would you be proud if your grandmother saw what you just
                    posted?"
                  </li>
                  <li>
                    Discuss cyberbullying: "If you wouldn&apos;t say it to someone&apos;s face, don&apos;t type it."
                  </li>
                </ul>
                <p>
                  This approach builds the emotional intelligence they need to navigate the online world safely on
                  their own.
                </p>
              </div>
            </section>

            <section aria-labelledby="signs-of-problem" className="space-y-4 clear-both">
              <h2 id="signs-of-problem" className="text-xl font-semibold text-orange-300">
                3. The Signs of a Problem: When to Seek Help
              </h2>
              <p>
                It is normal for a teen to love their phone, but sometimes it crosses the line into dependence or
                addiction. Be on the lookout for these red flags:
              </p>
              <div className="float-left mr-4 mb-4 w-full max-w-xs sm:max-w-sm">
                <Image
                  src="/stressed%20student.jpg"
                  alt="Stressed African student looking at smartphone, showing signs of digital overwhelm"
                  width={800}
                  height={534}
                  className="h-auto w-full rounded-2xl border border-white/15 object-cover object-top"
                />
              </div>
              <ul className="ml-5 list-disc space-y-1">
                <li>
                  <span className="font-semibold">Extreme Irritability:</span> Getting unusually angry or anxious
                  when they cannot check their phone.
                </li>
                <li>
                  <span className="font-semibold">Sleep Issues:</span> Staying awake late into the night scrolling,
                  leading to exhaustion at school.
                </li>
                <li>
                  <span className="font-semibold">Declining Grades:</span> A sudden drop in school performance due
                  to distraction.
                </li>
                <li>
                  <span className="font-semibold">Social Withdrawal:</span> Losing interest in hobbies or friends
                  they used to enjoy in real life.
                </li>
              </ul>
              <p>
                If you see these signs, it may be time to seek outside support.
              </p>
            </section>

            <section aria-labelledby="conclusion" className="space-y-4 pt-4 clear-both">
              <h2 id="conclusion" className="text-xl font-semibold text-slate-50">
                Conclusion: Reclaiming the Real World
              </h2>
              <p>
                The goal isn&apos;t to return to a pre-digital past but to build a future where our children are masters
                of their technology, not its slaves. By setting clear boundaries rooted in love and values, we can
                help them enjoy the benefits of the digital world without losing their connection to the real one.
              </p>
              <div className="float-right ml-4 mb-4 w-full max-w-xs sm:max-w-sm">
                <Image
                  src="/family-board-game-stockcake.webp"
                  alt="Happy African family playing a board game together, enjoying offline time"
                  width={800}
                  height={534}
                  className="h-auto w-full rounded-2xl border border-white/15 object-cover object-top"
                />
              </div>
              <p>
                Let&apos;s work together to raise a generation that is "smart" in every sense of the word digitally
                savvy, emotionally intelligent, and deeply connected to their community.
              </p>

              <div className="space-y-2 pt-2">
                <p className="font-semibold text-slate-100/90">
                  Do you Need support in your school or community?
                </p>
                <p>
                  Eva Helpful Foundation runs workshops for parents and students on digital wellness and character
                  development.
                </p>
                <ul className="space-y-2 text-sm sm:text-base">
                  <li>
                    <Link
                      href="/#contact"
                      className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                    >
                      Invite us to speak at your school&apos;s PTA meeting
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/#values"
                      className="font-medium text-orange-300 underline underline-offset-4 hover:text-orange-200"
                    >
                      Learn more about the core values that guide our work
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
        </article>

        <section className="mt-10 border-t border-white/10 pt-8 text-sm sm:text-base">
          <h2 className="text-base sm:text-lg font-semibold text-slate-50 mb-3">You may also like</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Link
              href="/blog/5-ways-to-teach-honesty"
              className="glass-panel flex flex-col p-4 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                For Parents
              </p>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                5 Simple Ways to Teach Honesty to Your Child This Week
              </h3>
              <p className="text-slate-100/80 text-xs sm:text-sm">
                Simple, practical steps to strengthen trust and truth-telling in your family.
              </p>
            </Link>

            <Link
              href="/blog/emotional-intelligence-in-schools"
              className="glass-panel flex flex-col p-4 text-sm transition hover:border-orange-400/70 hover:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-wide text-orange-300 mb-1">
                Future of Education
              </p>
              <h3 className="text-sm sm:text-base font-semibold mb-1">
                The Future of Education: Integrating Emotional Intelligence in Schools
              </h3>
              <p className="text-slate-100/80 text-xs sm:text-sm">
                How Social and Emotional Learning (SEL) can transform wellbeing, safety, and success for learners.
              </p>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
