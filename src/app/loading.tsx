export default function RootLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-teal-950 via-slate-950 to-teal-900">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-2 border-emerald-300/40 border-t-transparent animate-spin" />
        <div className="absolute inset-3 rounded-full bg-emerald-400/10 backdrop-blur-xl" />
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/80 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-50 shadow-[0_12px_35px_rgba(16,185,129,0.7)]">
          Eva
        </div>
      </div>
    </div>
  );
}
