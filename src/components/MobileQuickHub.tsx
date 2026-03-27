"use client";

import { ArrowRightIcon } from "@heroicons/react/24/outline";

// Since @heroicons/react is not installed in this project, we use local SVG components
// (Note: ArrowRightIcon above was a mistake, I'll define it locally too)

const actions = [
  { id: "presc", label: "Prescription", icon: DocumentTextIcon, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "otc", label: "Medicine", icon: MedicineIcon, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "wellness", label: "Wellness", icon: SparklesIcon, color: "text-amber-600", bg: "bg-amber-50" },
  { id: "care", label: "Care", icon: HeartIcon, color: "text-rose-600", bg: "bg-rose-50" },
];

export function MobileQuickHub() {
  return (
    <section className="lg:hidden">
      <div className="mx-auto max-w-xl px-4 py-8">
        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            placeholder="Search for medicines, brands..."
            className="block w-full rounded-2xl border-none bg-white py-4 pl-11 pr-4 text-sm text-slate-900 shadow-matte-sm ring-1 ring-slate-200/60 transition focus:bg-white focus:ring-2 focus:ring-primary/40 focus:outline-none placeholder:text-slate-400"
          />
        </div>

        {/* Action Shortcuts */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-[13px] font-bold uppercase tracking-widest text-slate-500">Quick Actions</h3>
            <span className="text-[11px] font-semibold text-primary/80 flex items-center gap-1">
              Slide for more <ArrowRightIconLocal className="h-3 w-3" />
            </span>
          </div>
          <div className="no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-1">
            {actions.map((item) => (
              <button
                key={item.id}
                className="flex shrink-0 flex-col items-center gap-2.5 transition active:scale-95"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} shadow-matte-sm ring-1 ring-slate-200/50`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <span className="text-[13px] font-semibold text-slate-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Trust Badges Bar */}
        <div className="mt-10 flex items-center justify-between rounded-2xl bg-slate-100/60 p-4 ring-1 ring-slate-200/40">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-matte-sm ring-1 ring-slate-200/50">
              <TruckIcon className="h-4 w-4" />
            </div>
            <div className="leading-none">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Fast</p>
              <p className="text-[12px] font-bold text-slate-800">Delivery</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200/60" />
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-matte-sm ring-1 ring-slate-200/50">
              <ShieldCheckIcon className="h-4 w-4" />
            </div>
            <div className="leading-none">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">100%</p>
              <p className="text-[12px] font-bold text-slate-800">Genuine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// LOCAL ICON COMPONENTS
function MagnifyingGlassIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  );
}

function DocumentTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function MedicineIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
    </svg>
  );
}

function SparklesIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.456-2.454L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
    </svg>
  );
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
    </svg>
  );
}

function TruckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.129-1.125V11.25c0-.442-.256-.837-.662-1.01l-3.39-1.411a1.125 1.125 0 00-.859.006l-4.254 1.77a1.125 1.125 0 01-.94 0l-4.609-1.921a1.125 1.125 0 00-.895 0L3.82 9.562c-.363.15-.626.5-.67.901l-.25 2.25m13.125 0V14.25" />
    </svg>
  );
}

function ShieldCheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  );
}

function ArrowRightIconLocal({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}
