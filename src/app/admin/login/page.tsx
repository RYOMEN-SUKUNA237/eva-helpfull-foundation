"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setStatus("error");
      setMessage("Supabase is not configured. Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.");
      return;
    }
    setStatus("loading");
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setStatus("error");
      setMessage(error.message || "Invalid credentials");
    } else {
      router.push("/admin");
    }
  }

  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
          <section className="w-full max-w-md glass-panel p-6 sm:p-8">
            <h1 className="text-2xl font-semibold mb-2">Admin sign in</h1>
            <p className="text-sm text-slate-100/80 mb-4">
              Use the email and password you created for Eva Helpful Foundation in Supabase Auth.
            </p>

            {message && (
              <div className="mb-4 rounded-md border border-red-400 bg-red-500/10 px-3 py-2 text-sm text-red-100">
                {message}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 text-sm">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-100/80">Email</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-100/80">Password</label>
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2.5 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600 disabled:opacity-60"
              >
                {status === "loading" ? "Signing in..." : "Sign in"}
              </button>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}
