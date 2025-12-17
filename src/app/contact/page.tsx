"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/volunteers", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to submit form");
      setStatus("success");
      setMessage("Thank you for reaching out. Our team will contact you soon.");
      form.reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong.");
    }
  }

  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <section className="mx-auto flex max-w-5xl flex-col gap-6 lg:flex-row">
            {/* Form */}
            <div className="flex-1 glass-panel p-6 sm:p-8 text-sm sm:text-base">
              <h1 className="text-2xl sm:text-3xl font-semibold mb-2">Contact &amp; Volunteer</h1>
              <p className="text-sm sm:text-base text-slate-100/80 mb-4">
                Fill out this form if you would like to volunteer, invite us to your school, or learn more
                about Eva Helpful Foundation programs.
              </p>

              {message && (
                <div
                  className={`mb-4 rounded-md border px-3 py-2 text-sm ${
                    status === "success"
                      ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                      : status === "error"
                      ? "border-red-400 bg-red-500/10 text-red-100"
                      : "border-slate-500 bg-slate-800/40 text-slate-100"
                  }`}
                >
                  {message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">Full name</label>
                    <input
                      name="name"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">Email address</label>
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
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">Phone number</label>
                    <input
                      name="phone"
                      required
                      className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-100/80 mb-1">Area of interest</label>
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
                  disabled={status === "loading"}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600 disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting..." : "Send details"}
                </button>
              </form>
            </div>

            {/* Info card */}
            <aside className="flex-1 glass-panel bg-teal-950/90 p-6 sm:p-8 text-sm sm:text-base border border-teal-500/40">
              <h2 className="text-xl font-semibold mb-3">Official Contact Information</h2>
              <div className="space-y-2 text-slate-100/85 mb-4">
                <p>
                  <span className="font-semibold">Phone 1:</span> (237) 671 80 82 32
                </p>
                <p>
                  <span className="font-semibold">Phone 2:</span> (237) 676 37 70 43
                </p>
                <p>
                  <span className="font-semibold">Address:</span> Nkofoulou, Entrée Wague, Soa
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-orange-300">
                  Connect with us
                </h3>
                <p className="text-xs sm:text-sm text-slate-100/80">
                  Follow Eva Helpful Foundation on social media to see stories, program highlights, and
                  opportunities to get involved.
                </p>
                <div className="mt-3 flex flex-wrap gap-3">
                  <a
                    href="https://web.facebook.com/profile.php?id=61573685994628"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-slate-50 hover:bg-orange-500 transition-colors"
                    aria-label="Eva Helpful Foundation on Facebook"
                  >
                    <FaFacebookF className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.instagram.com/eva_helpful?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-slate-50 hover:bg-orange-500 transition-colors"
                    aria-label="Eva Helpful Foundation on Instagram"
                  >
                    <FaInstagram className="h-4 w-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/eva-helpful-foundation/?viewAsMember=true"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-900 text-slate-50 hover:bg-orange-500 transition-colors"
                    aria-label="Eva Helpful Foundation on LinkedIn"
                  >
                    <FaLinkedinIn className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
