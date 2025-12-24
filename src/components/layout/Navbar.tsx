"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import { FiMenu, FiX, FiSearch } from "react-icons/fi";

const NAV_ITEMS = [
  { label: "Eva Helpful Global", href: "/eva-helpful-global" },
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Essential Values", href: "/#values" },
  { label: "Team", href: "/#team" },
  { label: "Blog", href: "/#blog" },
  { label: "Media", href: "/#media" },
  { label: "Donate", href: "/#donate" },
  { label: "Volunteer", href: "/#volunteer" },
  { label: "Contact", href: "/#contact" },
  { label: "Endorsers", href: "/team/endorsers-and-value-advocates" },
];

type SearchItem = {
  label: string;
  href: string;
};

const SEARCH_ITEMS: SearchItem[] = [
  // Home sections
  { label: "Home – Top", href: "/#top" },
  { label: "About – Eva Helpful Foundation", href: "/#about" },
  { label: "Essential Values", href: "/#values" },
  { label: "Team – Leadership", href: "#team" },
  { label: "Blog – Stories from Eva Helpful", href: "/#blog" },
  { label: "Blog – 5 Simple Ways to Teach Honesty", href: "/blog/5-ways-to-teach-honesty" },
  { label: "Blog – Emotional Intelligence in Schools", href: "/blog/emotional-intelligence-in-schools" },
  {
    label:
      "Blog – The Silent Epidemic: A Cameroonian Parent’s Guide to Managing Teen Smartphone Use",
    href: "/blog/managing-teen-smartphone-use-cameroon",
  },
  { label: "Media & Gallery", href: "/#media" },
  { label: "Donate", href: "/#donate" },
  { label: "Volunteer", href: "/#volunteer" },
  { label: "Contact", href: "/#contact" },

  // Standalone pages
  { label: "Eva Helpful Global", href: "/eva-helpful-global" },
  { label: "Programs", href: "/programs" },
  { label: "Documentation Library", href: "/docs" },
  { label: "Endorsers & Value Advocates", href: "/team/endorsers-and-value-advocates" },

  // People – leadership & value models
  { label: "Professor Alain Vilard Ndi Isoh", href: "/team/professor-alain-isoh" },
  { label: "Mrs. Awah Beltine Sirri", href: "/team/awah-beltine-sirri" },
  { label: "Mr. Ndi Brain Webje", href: "/team/ndi-brain-webje" },
  { label: "NDAM NJOYA INUSA", href: "/team/ndam-njoya-inusa" },
  { label: "Levi Wam Mfua", href: "/team/levi-wam-mfua" },
  { label: "Dr. Ngoata Sylvanus Diangha", href: "/team/ngoata-sylvanus-diangha" },
  { label: "Professor Jean-Emmanuel Pondi", href: "/team/professor-jean-emmanuel-pondi" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [teamOpen, setTeamOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [results, setResults] = useState<SearchItem[]>([]);
  const [notFound, setNotFound] = useState(false);
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

  function updateResults(nextQuery: string) {
    const value = nextQuery.trim();
    if (value.length < 2) {
      setResults([]);
      setNotFound(false);
      return;
    }

    const q = value.toLowerCase();
    const matches = SEARCH_ITEMS.filter((item) => item.label.toLowerCase().includes(q));
    setResults(matches.slice(0, 6));
    setNotFound(matches.length === 0);
  }

  function navigateTo(target: string) {
    if (!target) return;
    // Full route like "/eva-helpful-global" or "/docs" or "/team/levi-wam-mfua"
    if (!target.startsWith("#") && target.startsWith("/")) {
      if (target.startsWith("/#")) {
        // Anchor on home
        if (pathname !== "/") {
          router.push(target);
        } else {
          const anchor = target.slice(1); // remove leading "/"
          const el = document.querySelector(anchor) as HTMLElement | null;
          if (el) {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }
      } else {
        router.push(target);
      }
      return;
    }

    // Hash anchor only, e.g. "#team"
    if (target.startsWith("#")) {
      if (pathname !== "/") {
        router.push(`/${target}`);
      } else {
        const el = document.querySelector(target) as HTMLElement | null;
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    }
  }

  // Fallback keyword resolver when there is no exact SEARCH_ITEMS match
  function resolveAnchor(value: string): string {
    const q = value.toLowerCase();

    // Standalone pages
    if (q.includes("global")) return "/eva-helpful-global";
    if (q.includes("endorser") || q.includes("advocate")) return "/team/endorsers-and-value-advocates";
    if (q.includes("program")) return "/programs";
    if (q.includes("doc") || q.includes("pdf") || q.includes("library")) return "/docs";

    // Specific people → profile pages
    if (q.includes("alain") || q.includes("isoh")) return "/team/professor-alain-isoh";
    if (q.includes("awah") || q.includes("beltine")) return "/team/awah-beltine-sirri";
    if (q.includes("ndi") || q.includes("brain")) return "/team/ndi-brain-webje";
    if (q.includes("ndam") || q.includes("njoya")) return "/team/ndam-njoya-inusa";
    if (q.includes("levi") || q.includes("wam")) return "/team/levi-wam-mfua";
    if (q.includes("ngoata") || q.includes("sylvanus")) return "/team/ngoata-sylvanus-diangha";
    if (q.includes("pondi")) return "/team/professor-jean-emmanuel-pondi";

    // Generic team queries → team section on home
    if (q.includes("team") || q.includes("staff") || q.includes("leadership") || q.includes("founder")) {
      return "#team";
    }

    // Main home sections
    if (q.includes("about")) return "#about";
    if (q.includes("value") || q.includes("essential")) return "#values";
    if (q.includes("blog") || q.includes("article") || q.includes("news") || q.includes("story")) return "#blog";
    if (q.includes("media") || q.includes("photo") || q.includes("gallery")) return "#media";
    if (q.includes("donate") || q.includes("give") || q.includes("support")) return "#donate";
    if (q.includes("volunteer") || q.includes("serve")) return "#volunteer";
    if (q.includes("contact") || q.includes("phone") || q.includes("address") || q.includes("email")) return "#contact";

    // Fallback: go to top of home
    return "#top";
  }

  function handleSearch(e: FormEvent) {
    e.preventDefault();
    if (!query.trim()) return;
    const raw = query.trim();
    const exact = SEARCH_ITEMS.find((item) => item.label.toLowerCase() === raw.toLowerCase());
    const target = exact?.href ?? resolveAnchor(raw);
    setOpen(false);
    if (!target || target === "#top") {
      setNotFound(true);
      return;
    }
    navigateTo(target);
    setQuery("");
    setResults([]);
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-30 bg-teal-950/80 backdrop-blur border-b border-white/10 transition-all duration-300">
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8 transition-all duration-300 ${
            scrolled ? "h-16" : "h-[110px]"
          }`}
        >
          <Link href="/" className="flex items-center gap-3">
            <div
              className={`relative overflow-hidden rounded-lg border border-white/20 bg-black/40 transition-all duration-300 ${
                scrolled ? "h-10 w-10" : "h-[100px] w-[100px]"
              }`}
            >
              <Image
                src="/photo_2025-12-05_09-46-53.jpg"
                alt="Eva Helpful Foundation logo"
                fill
                className="object-cover"
                sizes={scrolled ? "40px" : "100px"}
                priority
              />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold tracking-wide">Eva Helpful</div>
              <div className="text-[11px] text-slate-200/80">Nurturing values, inspiring futures</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-4 text-sm font-medium text-slate-100 md:flex">
            {NAV_ITEMS.filter((item) => item.label !== "Endorsers").map((item) => {
              if (item.label === "Eva Helpful Global") {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="inline-flex items-center justify-center rounded-full border border-orange-400/70 bg-orange-500/20 px-3 py-1.5 text-xs font-semibold text-orange-100 shadow-[0_12px_35px_rgba(248,250,252,0.18)] backdrop-blur-xl hover:bg-orange-500/30 hover:border-orange-300 transition-colors"
                  >
                    {item.label}
                  </Link>
                );
              }
              if (item.label === "Team") {
                return (
                  <div key={item.label} className="relative">
                    <button
                      type="button"
                      onClick={() => setTeamOpen((v) => !v)}
                      className="inline-flex items-center gap-1 hover:text-orange-300 transition-colors"
                    >
                      <span>{item.label}</span>
                      <span className="text-[9px]">▾</span>
                    </button>
                    {teamOpen && (
                      <div className="absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 transform">
                        <div className="min-w-[180px] rounded-2xl border border-white/15 bg-slate-950/95 px-3 py-2 shadow-[0_18px_45px_rgba(8,47,73,0.9)] backdrop-blur-2xl">
                          <Link
                            href="/#team"
                            className="block rounded-md px-2 py-1.5 text-xs hover:bg-slate-800/60"
                            onClick={() => setTeamOpen(false)}
                          >
                            Leadership
                          </Link>
                          <Link
                            href="/team/endorsers-and-value-advocates"
                            className="block rounded-md px-2 py-1.5 text-xs hover:bg-slate-800/60"
                            onClick={() => setTeamOpen(false)}
                          >
                            Endorsers
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link key={item.href} href={item.href} className="hover:text-orange-300 transition-colors">
                  {item.label}
                </Link>
              );
            })}
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center gap-1.5 text-xs">
                <label htmlFor="navbar-search-desktop" className="sr-only">
                  Search site
                </label>
                <input
                  id="navbar-search-desktop"
                  type="search"
                  placeholder="Search pages, people, sections..."
                  value={query}
                  onChange={(e) => {
                    const v = e.target.value;
                    setQuery(v);
                    updateResults(v);
                  }}
                  className="w-40 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs outline-none focus:border-orange-400 focus:bg-black/50"
                />
                <button
                  type="submit"
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/30 bg-black/30 text-[10px] hover:bg-black/60"
                >
                  <FiSearch className="h-3 w-3" />
                </button>
              </form>
              {(results.length > 0 || notFound) && query.trim().length >= 2 && (
                <div className="absolute right-0 top-full z-40 mt-1 w-64 rounded-2xl border border-white/15 bg-slate-950/95 shadow-[0_18px_45px_rgba(8,47,73,0.95)] backdrop-blur-2xl text-xs">
                  {results.length > 0 ? (
                    <ul className="py-1 max-h-64 overflow-y-auto">
                      {results.map((item) => (
                        <li key={item.href}>
                          <button
                            type="button"
                            onClick={() => {
                              navigateTo(item.href);
                              setQuery("");
                              setResults([]);
                              setNotFound(false);
                            }}
                            className="w-full px-3 py-2 text-left hover:bg-slate-800/70"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-3 py-2 text-slate-300/80">No matches found</div>
                  )}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <div className="relative">
              <form onSubmit={handleSearch} className="flex items-center gap-1 text-[11px]">
                <div className="flex items-center gap-1 rounded-full border border-white/20 bg-black/30 px-2 py-1">
                  <FiSearch className="h-3 w-3 text-slate-200" />
                  <label htmlFor="navbar-search-mobile" className="sr-only">
                    Search site
                  </label>
                  <input
                    id="navbar-search-mobile"
                    type="search"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => {
                      const v = e.target.value;
                      setQuery(v);
                      updateResults(v);
                    }}
                    className="w-24 bg-transparent text-[11px] outline-none placeholder:text-slate-300/60"
                  />
                </div>
              </form>
              {(results.length > 0 || notFound) && query.trim().length >= 2 && (
                <div className="absolute right-0 top-full z-40 mt-1 w-60 rounded-2xl border border-white/15 bg-slate-950/95 shadow-[0_18px_45px_rgba(8,47,73,0.95)] backdrop-blur-2xl text-[11px]">
                  {results.length > 0 ? (
                    <ul className="py-1 max-h-56 overflow-y-auto">
                      {results.map((item) => (
                        <li key={item.href}>
                          <button
                            type="button"
                            onClick={() => {
                              navigateTo(item.href);
                              setQuery("");
                              setResults([]);
                              setNotFound(false);
                            }}
                            className="w-full px-3 py-1.5 text-left hover:bg-slate-800/70"
                          >
                            {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="px-3 py-1.5 text-slate-300/80">No matches found</div>
                  )}
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-100 hover:bg-teal-900"
            >
              {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-50 flex justify-end md:hidden"
          onClick={() => setOpen(false)}
        >
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative flex h-full w-[78%] max-w-xs justify-end">
            <nav
              className="mt-4 mb-4 mr-0 h-[calc(100%-2rem)] w-full rounded-l-3xl border-l border-emerald-300/60 bg-emerald-950/90 bg-gradient-to-b from-emerald-900/90 via-teal-950/90 to-slate-950/95 px-5 pb-6 pt-5 shadow-[0_18px_45px_rgba(6,95,70,0.95)] backdrop-blur-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mb-4 flex items-center justify-between text-xs text-slate-100/85">
                <span className="font-semibold tracking-[0.18em] uppercase">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/25 bg-black/30 text-[11px] hover:bg-black/60"
                >
                  <FiX className="h-3.5 w-3.5" />
                </button>
              </div>

              <div className="flex h-[calc(100%-2.5rem)] flex-col overflow-y-auto pr-1 text-sm font-medium text-slate-100">
                <div className="flex flex-col gap-1.5 pb-2">
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2 hover:bg-emerald-900/50 hover:text-emerald-100 transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
