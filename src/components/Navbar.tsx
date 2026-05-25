"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { availabilityHref, getHeroImageSrc, heroCopy, pageNavGroups, site } from "@/lib/site";
import { Phone, Menu, X, ChevronDown, ArrowRight } from "lucide-react";

/**
 * Premium Full-Width SaaS Navigation Bar with Interactive Hover Dropdowns
 */
export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] w-full border-b border-slate-200/50 bg-white/80 backdrop-blur-md transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Brand Logo & Name (SaaS Style) */}
          <Link
            href="/"
            aria-label={site.name}
            className="group flex flex-row items-center gap-3 rounded-full py-1 shrink-0"
            onClick={() => setDrawerOpen(false)}
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100 shadow-sm transition-transform duration-300 group-hover:scale-105 bg-slate-50 flex items-center justify-center">
              <Image
                src={getHeroImageSrc()}
                alt=""
                fill
                className="object-contain p-[1px] scale-[1.2] transition duration-500 group-hover:scale-[1.3]"
                sizes="44px"
                priority
                unoptimized
              />
            </div>
            <div className="hidden sm:flex items-baseline gap-1.5 pt-0.5">
              <span className="text-[1.15rem] font-black uppercase tracking-[0.12em] text-slate-900 group-hover:text-primary transition-colors duration-300">
                Ibni Sina
              </span>
              <span className="font-display text-[1.2rem] font-semibold text-primary group-hover:text-slate-900 transition-colors duration-300">
                pharmacy
              </span>
            </div>
          </Link>

          {/* Desktop SaaS Navigation with Hover Dropdowns */}
          <nav className="hidden lg:flex items-center justify-center flex-1" aria-label="On this page">
            <ul className="flex items-center gap-1">
              {pageNavGroups.map((g) => (
                <li key={g.id} className="relative group/nav py-6">
                  {/* Top Level Nav Link */}
                  <a
                    href={g.href}
                    className="flex items-center gap-1 rounded-full px-4 py-2 text-[12px] font-bold uppercase tracking-[0.08em] text-slate-600 transition hover:bg-slate-50 hover:text-primary active:scale-95"
                  >
                    <span>{g.label}</span>
                    <ChevronDown className="h-3 w-3 text-slate-400 group-hover/nav:text-primary group-hover/nav:rotate-180 transition-all duration-300" />
                  </a>

                  {/* SaaS Interactive Submenu Card */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-60 rounded-2xl border border-slate-100 bg-white p-2.5 shadow-matte-xl opacity-0 translate-y-2 pointer-events-none group-hover/nav:opacity-100 group-hover/nav:translate-y-0 group-hover/nav:pointer-events-auto transition-all duration-200 ease-out z-[110]">
                    <div className="flex flex-col gap-0.5">
                      {g.items.map((item) => (
                        <a
                          key={item.href}
                          href={item.href}
                          className="group/item flex items-center justify-between rounded-xl px-4 py-3 text-[13px] font-bold text-slate-600 hover:bg-slate-50/80 hover:text-primary transition-all active:scale-[0.98]"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="h-3.5 w-3.5 text-slate-300 opacity-0 -translate-x-1 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200" />
                        </a>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop SaaS CTAs */}
          <div className="hidden lg:flex items-center justify-end shrink-0">
            {/* Outline CTA: Call now */}
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-[12px] font-bold uppercase tracking-[0.06em] text-slate-700 shadow-sm transition hover:bg-slate-50 active:scale-[0.98] mr-3"
            >
              <Phone className="h-3.5 w-3.5 text-primary" strokeWidth={2.5} />
              <span>Call now</span>
            </a>

            {/* Solid CTA: Check availability */}
            <a
              href={availabilityHref}
              className="rounded-full bg-slate-900 px-6 py-2.5 text-[12px] font-bold uppercase tracking-[0.06em] text-white shadow-matte transition hover:bg-slate-800 active:scale-[0.98]"
            >
              {heroCopy.ctaAvailability}
            </a>
          </div>

          {/* Mobile/Tablet View: Hamburger Toggle */}
          <div className="lg:hidden flex items-center gap-2 shrink-0">
            {/* Quick Call Button on Mobile Header */}
            <a
              href={`tel:${site.phoneE164}`}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 transition active:scale-90"
              aria-label="Call pharmacy"
            >
              <Phone className="h-5 w-5 text-primary" />
            </a>

            <button
              type="button"
              className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 active:scale-90 ${drawerOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700"}`}
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
            >
              {drawerOpen ? <X className="h-5 w-5" strokeWidth={2.5} /> : <Menu className="h-6 w-6" strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile SaaS Full-Screen Overlay */}
      <div 
        className={`absolute left-0 top-20 w-full bg-white transition-all duration-500 ease-in-out lg:hidden h-[calc(100dvh-80px)] overflow-hidden z-20 ${drawerOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
      >
        <div className="h-full flex flex-col p-6 overflow-y-auto">
          {/* Dual CTAs stacked on mobile menu top */}
          <div className="flex flex-col gap-3">
            <a
              href={availabilityHref}
              className="group flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl bg-slate-900 text-[15px] font-bold text-white shadow-matte transition active:scale-[0.98]"
              onClick={() => setDrawerOpen(false)}
            >
              <span>{heroCopy.ctaAvailability}</span>
              <ArrowRight className="h-4 w-4" />
            </a>
            
            <a
              href={`tel:${site.phoneE164}`}
              className="flex min-h-[56px] w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-slate-50 text-[15px] font-bold text-slate-700 transition active:bg-slate-100"
              onClick={() => setDrawerOpen(false)}
            >
              <Phone className="h-4 w-4 text-primary" strokeWidth={2.5} />
              <span>Call Pharmacy ({site.phoneDisplay})</span>
            </a>
          </div>

          {/* Interactive lists */}
          <nav className="mt-8 flex flex-col gap-8">
            {pageNavGroups.map((g) => (
              <div key={g.id} className="animate-in slide-in-from-left-4 duration-500 fill-mode-forwards">
                <p className="px-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">{g.label}</p>
                <ul className="flex flex-col gap-2">
                  {g.items.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="flex min-h-[48px] items-center justify-between rounded-xl bg-slate-50/60 px-4 text-[14px] font-bold text-slate-700 active:bg-primary/5 active:text-primary transition-all group/item"
                        onClick={() => setDrawerOpen(false)}
                      >
                        <span>{item.label}</span>
                        <ArrowRight className="h-4 w-4 text-slate-300" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>

          <div className="mt-auto py-8">
            <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-300">
              {site.name} — Budgam, J&K
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
