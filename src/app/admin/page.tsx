"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase/client";
import { Navbar } from "@/components/layout/Navbar";
import { BackgroundScene } from "@/components/three/BackgroundScene";
import { useDropzone } from "react-dropzone";

interface Donation {
  id: string;
  donor_name: string;
  email: string;
  amount: number;
  frequency: string;
  created_at: string;
}

interface Volunteer {
  id: string;
  name: string;
  email: string;
  phone: string;
  interest: string;
  created_at: string;
}

interface SiteAsset {
  id: string;
  title: string;
  image_url: string;
  category: string;
  created_at: string;
}

export default function AdminDashboardPage() {
  const router = useRouter();
  const [loadingUser, setLoadingUser] = useState(true);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [assets, setAssets] = useState<SiteAsset[]>([]);
  const [uploadCategory, setUploadCategory] = useState<"background" | "podcast" | "gallery">("background");
  const [uploadTitle, setUploadTitle] = useState("");
  const [uploadFile, setUploadFile] = useState<File | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string>("");

  useEffect(() => {
    if (!supabase) {
      setLoadingUser(false);
      return;
    }

    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      const currentUser = data.user;
      if (!currentUser) {
        router.replace("/admin/login");
      } else {
        setUserEmail(currentUser.email ?? null);
        await Promise.all([loadDonations(), loadVolunteers(), loadAssets()]);
      }
      setLoadingUser(false);
    };

    checkUser();
  }, [router]);

  async function loadDonations() {
    if (!supabase) return;
    const { data } = await supabase.from("donations").select("*").order("created_at", { ascending: false }).limit(20);
    setDonations(data ?? []);
  }

  async function loadVolunteers() {
    if (!supabase) return;
    const { data } = await supabase.from("volunteers").select("*").order("created_at", { ascending: false }).limit(20);
    setVolunteers(data ?? []);
  }

  async function loadAssets() {
    if (!supabase) return;
    const { data } = await supabase.from("site_assets").select("*").order("created_at", { ascending: false }).limit(30);
    setAssets(data ?? []);
  }

  async function handleSignOut() {
    if (!supabase) return;
    await supabase.auth.signOut();
    router.replace("/admin/login");
  }

  const onDrop = (accepted: File[]) => {
    if (accepted[0]) {
      setUploadFile(accepted[0]);
      setUploadStatus("");
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: { "image/*": [] },
  });

  async function handleUpload(e: React.FormEvent) {
    e.preventDefault();
    if (!supabase) {
      setUploadStatus("Supabase not configured.");
      return;
    }
    if (!uploadFile || !uploadTitle) {
      setUploadStatus("Please add a title and choose a file.");
      return;
    }

    setUploadStatus("Uploading...");
    const ext = uploadFile.name.split(".").pop();
    const path = `${uploadCategory}/${Date.now()}.${ext}`;

    const { error: uploadError } = await supabase.storage
      .from("site-assets")
      .upload(path, uploadFile, { cacheControl: "3600", upsert: false });
    if (uploadError) {
      setUploadStatus(uploadError.message);
      return;
    }

    const { data: urlData } = await supabase.storage.from("site-assets").getPublicUrl(path);
    const publicUrl = urlData.publicUrl;

    const { error: insertError } = await supabase.from("site_assets").insert({
      title: uploadTitle,
      image_url: publicUrl,
      category: uploadCategory,
    });

    if (insertError) {
      setUploadStatus(insertError.message);
      return;
    }

    setUploadStatus("Uploaded successfully.");
    setUploadFile(null);
    setUploadTitle("");
    await loadAssets();
  }

  if (loadingUser) {
    return (
      <div className="page-shell">
        <BackgroundScene />
        <div className="page-shell-main flex items-center justify-center text-sm text-slate-100/80">
          Checking admin session...
        </div>
      </div>
    );
  }

  if (!supabase) {
    return (
      <div className="page-shell">
        <BackgroundScene />
        <div className="page-shell-main flex items-center justify-center px-4">
          <div className="max-w-lg glass-panel p-6 text-sm">
            <h1 className="text-xl font-semibold mb-2">Admin dashboard unavailable</h1>
            <p className="text-slate-100/80">
              Supabase is not configured. Set <code>NEXT_PUBLIC_SUPABASE_URL</code> and
              <code className="ml-1">NEXT_PUBLIC_SUPABASE_ANON_KEY</code> in your <code>.env.local</code> file,
              then restart the dev server.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-shell">
      <BackgroundScene />
      <div className="page-shell-main">
        <Navbar />
        <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 flex-1">
          <header className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-semibold">Admin dashboard</h1>
              <p className="text-sm text-slate-100/80">Manage media and view submissions.</p>
            </div>
            <div className="flex items-center gap-3 text-xs text-slate-100/80">
              {userEmail && <span className="px-3 py-1 rounded-full bg-black/30 border border-white/10">{userEmail}</span>}
              <button
                onClick={handleSignOut}
                className="rounded-full bg-slate-800 px-4 py-1.5 font-medium hover:bg-slate-700"
              >
                Sign out
              </button>
            </div>
          </header>

          <div className="grid gap-6 lg:grid-cols-3">
            {/* Upload panel */}
            <section className="glass-panel p-4 sm:p-5 lg:col-span-1 text-sm">
              <h2 className="mb-3 text-base font-semibold">Upload image asset</h2>
              <form className="space-y-3" onSubmit={handleUpload}>
                <div className="flex gap-2 text-xs">
                  {["background", "podcast", "gallery"].map((cat) => (
                    <button
                      type="button"
                      key={cat}
                      onClick={() => setUploadCategory(cat as any)}
                      className={`flex-1 rounded-full border px-2 py-1 capitalize ${
                        uploadCategory === cat
                          ? "border-orange-400 bg-orange-500/20 text-orange-100"
                          : "border-white/20 bg-black/20 text-slate-100"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
                <div>
                  <label className="mb-1 block text-xs font-medium text-slate-100/80">Title</label>
                  <input
                    value={uploadTitle}
                    onChange={(e) => setUploadTitle(e.target.value)}
                    className="w-full rounded-md border border-white/20 bg-black/20 px-3 py-2 text-sm outline-none focus:border-orange-400"
                  />
                </div>
                <div
                  {...getRootProps()}
                  className={`mt-1 flex cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed px-3 py-6 text-xs transition-colors ${
                    isDragActive ? "border-orange-400 bg-orange-500/10" : "border-white/20 bg-black/20"
                  }`}
                >
                  <input {...getInputProps()} />
                  <p className="font-medium">Drag & drop image, or click to select</p>
                  <p className="mt-1 text-[11px] text-slate-200/80">JPG, PNG, WEBP up to ~5MB</p>
                  {uploadFile && (
                    <p className="mt-2 text-[11px] text-orange-100">Selected: {uploadFile.name}</p>
                  )}
                </div>
                {uploadStatus && <p className="text-xs text-slate-100/90">{uploadStatus}</p>}
                <button
                  type="submit"
                  className="mt-1 inline-flex w-full items-center justify-center rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold text-white shadow shadow-orange-500/40 hover:bg-orange-600"
                >
                  Save asset
                </button>
              </form>
            </section>

            {/* Tables */}
            <section className="glass-panel p-4 sm:p-5 lg:col-span-2 text-xs sm:text-sm">
              <h2 className="mb-3 text-base font-semibold">Recent activity</h2>
              <div className="grid gap-4 lg:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Latest donations</h3>
                  <div className="max-h-60 overflow-auto rounded-md border border-white/10 bg-black/30">
                    <table className="min-w-full text-left text-[11px] sm:text-xs">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-2 py-1">Donor</th>
                          <th className="px-2 py-1">Amount</th>
                          <th className="px-2 py-1">Freq.</th>
                          <th className="px-2 py-1">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {donations.length === 0 && (
                          <tr>
                            <td colSpan={4} className="px-2 py-2 text-slate-200/70">
                              No donations yet.
                            </td>
                          </tr>
                        )}
                        {donations.map((d) => (
                          <tr key={d.id} className="border-t border-white/5">
                            <td className="px-2 py-1">{d.donor_name}</td>
                            <td className="px-2 py-1">${d.amount.toFixed(2)}</td>
                            <td className="px-2 py-1">{d.frequency}</td>
                            <td className="px-2 py-1">
                              {new Date(d.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-sm font-semibold">Latest volunteers</h3>
                  <div className="max-h-60 overflow-auto rounded-md border border-white/10 bg-black/30">
                    <table className="min-w-full text-left text-[11px] sm:text-xs">
                      <thead className="bg-white/5">
                        <tr>
                          <th className="px-2 py-1">Name</th>
                          <th className="px-2 py-1">Interest</th>
                          <th className="px-2 py-1">Date</th>
                        </tr>
                      </thead>
                      <tbody>
                        {volunteers.length === 0 && (
                          <tr>
                            <td colSpan={3} className="px-2 py-2 text-slate-200/70">
                              No volunteers yet.
                            </td>
                          </tr>
                        )}
                        {volunteers.map((v) => (
                          <tr key={v.id} className="border-t border-white/5">
                            <td className="px-2 py-1">{v.name}</td>
                            <td className="px-2 py-1">{v.interest}</td>
                            <td className="px-2 py-1">
                              {new Date(v.created_at).toLocaleDateString()}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h3 className="mt-5 mb-2 text-sm font-semibold">Recent media assets</h3>
              <div className="grid gap-3 sm:grid-cols-3">
                {assets.length === 0 && (
                  <p className="text-slate-200/70 text-xs col-span-full">
                    No assets uploaded yet. Use the uploader on the left to add background, podcast,
                    or gallery images.
                  </p>
                )}
                {assets.map((a) => (
                  <div key={a.id} className="rounded-md border border-white/10 bg-black/30 p-2">
                    <div className="mb-2 aspect-video overflow-hidden rounded">
                      <img src={a.image_url} alt={a.title} className="h-full w-full object-cover" />
                    </div>
                    <p className="text-xs font-semibold truncate">{a.title}</p>
                    <p className="text-[11px] text-slate-200/80 capitalize">{a.category}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}
