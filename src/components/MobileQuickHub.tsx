"use client";

import { Search, FileText, Pill, Sparkles, Heart, Truck, ShieldCheck, ArrowRight } from "lucide-react";

const actions = [
  { id: "presc", label: "Prescription", icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  { id: "otc", label: "Medicine", icon: Pill, color: "text-emerald-600", bg: "bg-emerald-50" },
  { id: "wellness", label: "Wellness", icon: Sparkles, color: "text-amber-600", bg: "bg-amber-50" },
  { id: "care", label: "Care", icon: Heart, color: "text-rose-600", bg: "bg-rose-50" },
];

export function MobileQuickHub() {
  return (
    <section className="lg:hidden">
      <div className="mx-auto max-w-xl px-4 py-8">
        {/* Search Bar */}
        <div className="relative group">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" strokeWidth={1.5} />
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
              Slide for more <ArrowRight className="h-3 w-3" strokeWidth={2} />
            </span>
          </div>
          <div className="no-scrollbar -mx-4 flex gap-5 overflow-x-auto px-4 pb-1">
            {actions.map((item) => (
              <button
                key={item.id}
                className="flex shrink-0 flex-col items-center gap-2.5 transition active:scale-95"
              >
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${item.bg} shadow-matte-sm ring-1 ring-slate-200/50`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} strokeWidth={1.5} />
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
              <Truck className="h-4 w-4" strokeWidth={1.5} />
            </div>
            <div className="leading-none">
              <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Fast</p>
              <p className="text-[12px] font-bold text-slate-800">Delivery</p>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-200/60" />
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-primary shadow-matte-sm ring-1 ring-slate-200/50">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.5} />
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

