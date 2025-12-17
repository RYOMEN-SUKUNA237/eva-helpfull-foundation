import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { getDocumentation, DOCUMENTATIONS } from "@/data/documentations";

interface DocumentationPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return DOCUMENTATIONS.map((doc) => ({ slug: doc.slug }));
}

export default function DocumentationPage({ params }: DocumentationPageProps) {
  const doc = getDocumentation(params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="max-w-6xl mx-auto space-y-6">
            <div className="flex items-center justify-between text-[11px] sm:text-xs text-slate-300/80">
              <Link
                href="/#about"
                className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/5 px-3 py-1.5 font-medium text-slate-100 hover:bg-white/10 hover:border-white/40 transition-colors"
              >
                <span className="text-lg leading-none">←</span>
                <span>Back to About</span>
              </Link>
            </div>

            <header className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Official Document
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">{doc.title}</h1>
              <p className="max-w-3xl text-sm sm:text-base text-slate-100/85">{doc.description}</p>
            </header>

            <article className="glass-panel p-4 sm:p-6 space-y-3">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10 bg-slate-950/70">
                <iframe
                  src={`/api/pdfs/${encodeURIComponent(doc.file)}#toolbar=0&navpanes=0&scrollbar=0`}
                  title={doc.title}
                  className="h-full w-full"
                  style={{ border: "none" }}
                />
              </div>

              <p className="text-[11px] sm:text-xs text-slate-300/80">
                These documents are presented in a view-only mode. Download and print options are
                disabled in this viewer where supported by your browser, but some devices may still
                offer their own save or share controls.
              </p>
            </article>
          </section>
        </main>
      </div>
    </div>
  );
}
