"use client";

import { useEffect, useState } from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiMapPin, FiPhone } from "react-icons/fi";

export function Footer() {
  // 0 = compact, 1 = fully expanded based on how close we are to the bottom of the page
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const distanceFromBottom = scrollHeight - (scrollTop + clientHeight);
      const threshold = 260; // px from bottom where expansion begins

      if (distanceFromBottom >= threshold) {
        setProgress(0);
        return;
      }

      const clamped = Math.max(0, Math.min(threshold, distanceFromBottom));
      const next = 1 - clamped / threshold;
      setProgress(next);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-teal-950/80 backdrop-blur">
      <div
        className="mx-auto max-w-6xl px-3 sm:px-4 lg:px-6 text-xs sm:text-sm text-slate-100/80 transition-all duration-300 ease-out"
        style={{
          paddingTop: 8 + progress * 4,
          paddingBottom: 8 + progress * 4,
        }}
      >
        {/* Compact bar (always visible) */}
        <div className="flex items-center justify-between text-[11px] sm:text-xs">
          <span className="font-semibold text-slate-50">Eva Helpful Foundation</span>
          <span className="text-slate-300/80">
            © {new Date().getFullYear()} Eva Helpful Foundation
          </span>
        </div>

        {/* Expanded info only when near bottom */}
        {progress > 0 && (
          <>
            {/* Desktop/tablet: circular logo on top when expanded */}
            <div
              className="mt-1 hidden w-full justify-center sm:flex"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 8}px)`,
                transition: "opacity 200ms ease-out, transform 200ms ease-out",
              }}
            >
              <img
                src="/photo_2025-12-05_09-47-34.jpg"
                alt="Eva Helpful Foundation footer logo"
                className="h-[160px] w-[160px] rounded-full object-cover"
              />
            </div>

            <div
              className="mt-1 flex flex-col gap-2 text-[11px] sm:text-xs sm:flex-row sm:items-center sm:justify-between"
              style={{
                opacity: progress,
                transform: `translateY(${(1 - progress) * 6}px)`,
                transition: "opacity 200ms ease-out, transform 200ms ease-out",
              }}
            >
              <div className="w-full sm:w-auto">
                <div className="flex items-center justify-between gap-3 sm:block">
                  <div className="space-y-1">
                    <div className="flex items-center justify-start gap-2">
                      <FiPhone className="h-4 w-4 text-orange-300" />
                      <p>
                        <span className="font-semibold">Phone 1:</span> (237) 671 80 82 32
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <FiPhone className="h-4 w-4 text-orange-300" />
                      <p>
                        <span className="font-semibold">Phone 2:</span> (237) 676 37 70 43
                      </p>
                    </div>
                    <div className="flex items-center justify-start gap-2">
                      <FiMapPin className="h-4 w-4 text-orange-300" />
                      <p>
                        <span className="font-semibold">Address:</span> Nkofoulou, Entrée Wague, Soa
                      </p>
                    </div>
                  </div>

                  {/* Mobile: logo on the right, large and circular when expanded */}
                  <div className="block sm:hidden h-[160px] w-[160px] overflow-hidden rounded-full">
                    <img
                      src="/photo_2025-12-05_09-47-34.jpg"
                      alt="Eva Helpful footer logo"
                      className="h-full w-full object-cover rounded-full"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center gap-2 sm:items-end">
                <p className="text-slate-200/80 text-xs sm:text-sm">Connect with us</p>
                <div className="flex gap-3">
                  <a
                    href="https://web.facebook.com/profile.php?id=61573685994628"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-slate-50 hover:bg-orange-500 hover:border-orange-400"
                    aria-label="Eva Helpful Foundation on Facebook"
                  >
                    <FaFacebookF className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.instagram.com/eva_helpful?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-slate-50 hover:bg-orange-500 hover:border-orange-400"
                    aria-label="Eva Helpful Foundation on Instagram"
                  >
                    <FaInstagram className="h-3.5 w-3.5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/eva-helpful-foundation/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/30 text-slate-50 hover:bg-orange-500 hover:border-orange-400"
                    aria-label="Eva Helpful Foundation on LinkedIn"
                  >
                    <FaLinkedinIn className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </footer>
  );
}
