"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { backgroundImages } from "@/lib/images";

const SLIDE_INTERVAL_MS = 8000;

export function BackgroundScene() {
  const pathname = usePathname();

  // Disable slideshow on media page; keep dark gradient only.
  const isMediaPage = pathname?.startsWith("/media");
  const isHome = pathname === "/";

  const slides = useMemo(
    () => backgroundImages.map((name) => `/images/${name}`),
    [],
  );

  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (isMediaPage || slides.length === 0) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => clearInterval(timer);
  }, [isMediaPage, slides.length]);

  const current = slides[index] ?? null;

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base teal gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_#0f766e_0,_#022c33_45%,_#020617_100%)]" />

      {/* Image slide, hidden on media page */}
      {!isMediaPage && current && (
        <div key={current} className="absolute inset-0 animate-fade-slide">
          <img
            src={current}
            alt="Eva Helpful background"
            className="h-full w-full object-cover opacity-55 blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-teal-950/70 to-black/90" />
        </div>
      )}

      {/* Minimal overlay when slideshow is disabled (media page) */}
      {isMediaPage && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-teal-950/60 to-black/90" />
      )}

      {/* Home-only manual controls */}
      {isHome && slides.length > 1 && (
        <div className="pointer-events-auto absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-4 text-xs text-slate-100/80">
          <button
            onClick={() => setIndex((prev) => (prev - 1 + slides.length) % slides.length)}
            className="rounded-full border border-white/30 bg-black/40 px-3 py-1 hover:bg-black/70"
          >
            Prev
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`h-1.5 w-4 rounded-full transition-colors ${
                  i === index ? "bg-orange-400" : "bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((prev) => (prev + 1) % slides.length)}
            className="rounded-full border border-white/30 bg-black/40 px-3 py-1 hover:bg-black/70"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
