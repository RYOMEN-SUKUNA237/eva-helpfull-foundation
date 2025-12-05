"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { galleryImages } from "@/lib/images";

export default function MediaPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const open = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);
  const hasActive = activeIndex !== null;

  const next = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex + 1) % galleryImages.length);
  };

  const prev = () => {
    if (activeIndex === null) return;
    setActiveIndex((activeIndex - 1 + galleryImages.length) % galleryImages.length);
  };

  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="max-w-6xl mx-auto space-y-8">
            <header className="space-y-3 text-center">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-orange-300">
                Media &amp; Gallery
              </p>
              <h1 className="text-3xl sm:text-4xl font-semibold">Eva Helpful Moments</h1>
              <p className="mx-auto max-w-3xl text-sm sm:text-base text-slate-100/80">
                Explore highlights from school visits, value-building activities, and community
                engagements powered by Eva Helpful Foundation.
              </p>
            </header>

            {/* Featured real-moments grid (similar feel to home hero grid) */}
            <div className="glass-panel p-4 sm:p-6">
              <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr] items-stretch">
                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="col-span-2 aspect-[16/9] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <img
                      src="/images/photo_10_2025-12-03_18-28-46.jpg"
                      alt="Large group of students with Eva Helpful team"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <img
                      src="/images/photo_18_2025-12-03_18-28-46.jpg"
                      alt="Students engaging during values session"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/15 bg-black/30">
                    <img
                      src="/images/photo_24_2025-12-03_18-28-46.jpg"
                      alt="Close-up of students sharing a moment"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-col justify-between gap-3 text-xs sm:text-sm text-slate-100/80">
                  <h2 className="text-lg sm:text-xl font-semibold text-orange-300">
                    Real moments from Eva Helpful
                  </h2>
                  <p>
                    These images capture the atmosphere of our outreach: curiosity in the classroom,
                    laughter in the courtyard, and focused conversations about respect, empathy, and
                    responsibility.
                  </p>
                  <p>
                    The grid below holds even more stories from different schools and communities where
                    Eva Helpful Foundation is planting essential values.
                  </p>
                </div>
              </div>
            </div>

            {/* Full gallery collage grid */}
            <div className="glass-panel p-4 sm:p-6">
              <div className="grid auto-rows-[100px] gap-2 sm:auto-rows-[120px] sm:grid-cols-4 lg:grid-cols-6">
                {galleryImages.map((name, index) => {
                  const wide = index % 7 === 0;
                  const tall = index % 5 === 0;
                  return (
                    <button
                      key={name}
                      type="button"
                      onClick={() => open(index)}
                      className={`group relative overflow-hidden rounded-lg border border-white/10 bg-black/40 ${
                        wide ? "col-span-2" : ""
                      } ${tall ? "row-span-2" : ""}`}
                    >
                      <img
                        src={`/images/${name}`}
                        alt="Eva Helpful media"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  );
                })}
              </div>
            </div>
          </section>
        </main>
      </div>

      {hasActive && activeIndex !== null && (
        <div className="pointer-events-auto fixed inset-0 z-40 flex items-center justify-center bg-black/80 px-4">
          <button
            className="absolute right-4 top-4 rounded-full bg-black/70 px-3 py-1 text-sm text-slate-50 hover:bg-black"
            onClick={close}
          >
            Close
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-slate-50 hover:bg-black"
            onClick={prev}
          >
            Prev
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/70 px-3 py-1 text-sm text-slate-50 hover:bg-black"
            onClick={next}
          >
            Next
          </button>
          <div className="max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl border border-white/20 bg-black/80">
            <img
              src={`/images/${galleryImages[activeIndex]}`}
              alt="Eva Helpful media fullscreen"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
