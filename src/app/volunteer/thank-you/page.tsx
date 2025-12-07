"use client";

import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

export default function VolunteerThankYouPage() {
  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <section className="max-w-xl glass-panel p-6 sm:p-8 text-sm sm:text-base text-center">
            <h1 className="text-2xl sm:text-3xl font-semibold mb-3 text-orange-300">
              Thank you for offering to volunteer
            </h1>
            <p className="text-slate-100/85 mb-4">
              Your details have been received. Our team will review your interest and get in touch
              with you shortly about how you can support Eva Helpful Foundation.
            </p>
            <p className="text-xs sm:text-sm text-slate-200/80 mb-6">
              We deeply appreciate your willingness to stand with young people and families.
            </p>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600"
            >
              Go back to main site
            </a>
          </section>
        </main>
      </div>
    </div>
  );
}
