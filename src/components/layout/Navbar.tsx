"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Essential Values", href: "#values" },
  { label: "Team", href: "#team" },
  { label: "Blog", href: "#blog" },
  { label: "Media", href: "#media" },
  { label: "Donate", href: "#donate" },
  { label: "Volunteer", href: "#volunteer" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function resolveAnchor(value: string): string {
    const q = value.toLowerCase();
    if (q.includes("about")) return "#about";
    if (q.includes("value")) return "#values";
    if (q.includes("team") || q.includes("founder") || q.includes("staff")) return "#team";
    if (q.includes("blog") || q.includes("article") || q.includes("news")) return "#blog";
    if (q.includes("media") || q.includes("photo") || q.includes("gallery")) return "#media";
    if (q.includes("donate") || q.includes("give") || q.includes("support")) return "#donate";
    if (q.includes("volunteer") || q.includes("serve")) return "#volunteer";
    if (q.includes("contact") || q.includes("phone") || q.includes("address")) return "#contact";
    return "#top";
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    const anchor = resolveAnchor(query.trim());
    setOpen(false);
    if (pathname !== "/") {
      router.push(`/${anchor}`);
    } else {
      const el = document.querySelector(anchor) as HTMLElement | null;
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    setQuery("");
  }

  return (
    <header className="fixed inset-x-0 top-0 z-30 bg-teal-950/80 backdrop-blur border-b border-white/10 transition-all duration-300">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
          scrolled ? "h-16" : "h-[110px]"
        }`}
      >
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`overflow-hidden rounded-lg border border-white/20 bg-black/40 transition-all duration-300 ${
              scrolled ? "h-10 w-10" : "h-[100px] w-[100px]"
            }`}
          >
            <img
              src="/photo_2025-12-05_09-46-53.jpg"
              alt="Eva Helpful Foundation logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-wide">Eva Helpful</div>
            <div className="text-[11px] text-slate-200/80">Nurturing values, inspiring futures</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-4 text-sm font-medium text-slate-100 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              scroll={true}
              className="hover:text-orange-300 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <form onSubmit={handleSearch} className="flex items-center gap-1.5 text-xs">
            <input
              type="search"
              placeholder="Search sections..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-32 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs outline-none focus:border-orange-400 focus:bg-black/50"
            />
            <button
              type="submit"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-black/30 text-[10px] hover:bg-black/60"
            >
              <FiSearch className="h-3 w-3" />
            </button>
          </form>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <form onSubmit={handleSearch} className="flex items-center gap-1 text-[11px]">
            <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2 py-1">
              <FiSearch className="h-3 w-3 text-slate-200" />
              <input
                type="search"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-20 bg-transparent text-[11px] outline-none placeholder:text-slate-300/60"
              />
            </div>
          </form>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-teal-900"
          >
            {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-teal-950/95 px-4 pb-4 pt-2 md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-slate-100">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                scroll={true}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 hover:bg-teal-900"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
