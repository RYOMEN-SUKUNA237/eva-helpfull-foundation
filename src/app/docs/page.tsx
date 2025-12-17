import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { DOCUMENTATIONS } from "@/data/documentations";

export default function DocsLibraryPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="max-w-6xl mx-auto space-y-6">
            <header className="space-y-2">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Official Documents
              </p>
              <h1 className="text-2xl sm:text-3xl font-semibold text-slate-50">
                Eva Helpful Documentation Library
              </h1>
              <p className="max-w-3xl text-sm sm:text-base text-slate-100/85">
                Open any document to view it inside the site.
              </p>
            </header>

            <div className="grid gap-4 md:grid-cols-2">
              {DOCUMENTATIONS.map((doc) => (
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
                      <h2 className="text-[11px] sm:text-sm font-semibold text-slate-50">{doc.title}</h2>
                      <p className="text-[11px] sm:text-[13px] text-slate-100/85">{doc.description}</p>
                      <p className="mt-1 text-[10px] sm:text-[11px] text-slate-300/85">
                        Click to open full view-only PDF in a new tab.
                      </p>
                    </div>
                  </article>
                </a>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
