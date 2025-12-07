"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { PhoneField } from "@/components/form/PhoneField";

export default function DonatePage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const searchParams = useSearchParams();

  useEffect(() => {
    const statusParam = searchParams.get("status");
    if (statusParam === "success") {
      setStatus("success");
      setMessage(
        "Thank you for your generosity. Your pledge has been received and our team will contact you shortly with payment details."
      );
    }
  }, [searchParams]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/donations", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unable to submit donation");
      setStatus("success");
      setMessage(
        "Thank you for your generosity. Your pledge has been received and our team will contact you shortly with payment details."
      );
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
            <h1 className="text-3xl font-semibold mb-3">Support Eva Helpful Foundation</h1>
            <p className="text-sm sm:text-base text-slate-100/80 mb-6">
              Your donation helps us deliver values-based education, outreach programs, and
              mentorship sessions to more students and schools.
            </p>

            {message && (
              <div
                className={`mb-4 rounded-md border px-3 py-3 text-sm ${
                  status === "success"
                    ? "border-emerald-400 bg-emerald-500/10 text-emerald-100"
                    : status === "error"
                    ? "border-red-400 bg-red-500/10 text-red-100"
                    : "border-slate-500 bg-slate-800/40 text-slate-100"
                }`}
              >
                <p>{message}</p>
                {status === "success" && (
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                    <span className="text-emerald-100/80">
                      We deeply appreciate your support and wish you well.
                    </span>
                    <a
                      href="/"
                      className="inline-flex items-center justify-center rounded-full border border-emerald-400/70 bg-emerald-500/20 px-3 py-1 font-medium text-emerald-50 hover:bg-emerald-500/30"
                    >
                      Go back to main page
                    </a>
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm sm:text-base">
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-slate-100/80 mb-1">Full name</label>
                  <input
                    name="donor_name"
                    required
                    className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="block text-xs font-medium text-slate-100/80 mb-1">Email address</label>
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
                  <label className="block text-xs font-medium text-slate-100/80 mb-1">Amount (USD)</label>
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
                  <label className="block text-xs font-medium text-slate-100/80 mb-1">Frequency</label>
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

              <p className="text-xs text-slate-200/70">
                This form records your pledge in our system. A team member will follow up with
                details on how to complete your donation via bank transfer or other channels.
              </p>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-2.5 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600 disabled:opacity-60"
              >
                {status === "loading" ? "Submitting..." : "Submit pledge"}
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
