"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

export default function VolunteerPage() {
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
      setMessage("Thank you for offering to serve. Our team will reach out soon.");
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
          <section className="max-w-3xl mx-auto glass-panel p-6 sm:p-8">
            <h1 className="text-3xl font-semibold mb-3">Volunteer with Us</h1>
            <p className="text-sm sm:text-base text-slate-100/80 mb-6">
              Volunteers are at the heart of Eva Helpful Foundation. Share your time, skills,
              and passion to help young people grow in values and confidence.
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
                {status === "loading" ? "Submitting..." : "Submit details"}
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
