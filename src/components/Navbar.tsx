"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { availabilityHref, getHeroImageSrc, pageNavGroups, site } from "@/lib/site";
import { Phone, Menu, X, ChevronDown } from "lucide-react";

/**
 * Header — floating pill design / high-end medical aesthetic.
 */
export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-0 z-[100] mx-auto w-full transition-all duration-300">
      {/* Desktop View: Floating Pill */}
      <div className="hidden lg:block max-w-7xl mx-auto px-8 mt-4">
        <div className="rounded-full border border-slate-200/50 bg-white/95 py-2.5 shadow-matte-lg backdrop-blur-md ring-1 ring-slate-900/[0.04]">
          <div className="mx-auto w-full max-w-[1280px] px-8">
            <div className="grid grid-cols-[max-content_1fr_max-content] items-center gap-8">
              {/* Brand Logo & Name */}
              <Link
                href="/"
                aria-label={site.name}
                className="group flex flex-row items-center gap-3 rounded-full py-1"
                onClick={() => setDrawerOpen(false)}
              >
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-matte-lg">
                  <Image
                    src={getHeroImageSrc()}
                    alt=""
                    fill
                    className="object-contain scale-[1.7] transition duration-500 group-hover:scale-[1.9]"
                    sizes="120px"
                    priority
                    unoptimized
                  />
                </div>
                <div className="flex items-baseline gap-1.5 leading-[1.1]">
                  <span className="text-xl font-black uppercase tracking-tighter text-slate-900">
                    Ibni Sina
                  </span>
                  <span className="font-serif text-[1.1rem] italic leading-none text-primary">
                    pharmacy
                  </span>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <nav className="justify-self-center" aria-label="On this page">
                <ul className="flex items-center gap-2">
                  {pageNavGroups.map((g) => (
                    <li key={g.id} className="relative group/nav">
                      <a href={g.href} className="flex rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-[0.08em] text-slate-600 transition hover:bg-slate-50 hover:text-primary">
                        {g.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Desktop CTA */}
              <a
                href={availabilityHref}
                className="rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-matte transition hover:bg-slate-800 active:scale-[0.98]"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet View: App-style Header */}
      <div className="lg:hidden w-full transition-colors duration-300">
        <div className={`flex items-center justify-between px-4 py-3 bg-white/95 backdrop-blur-md border-b border-slate-200/50 shadow-sm transition-all duration-300 ${drawerOpen ? "bg-white border-transparent" : ""}`}>
          {/* Brand Logo & Name (Mobile) */}
          <Link
            href="/"
            aria-label={site.name}
            className="flex items-center gap-2.5"
            onClick={() => setDrawerOpen(false)}
          >
            <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-slate-100 shadow-sm">
              <Image
                src={getHeroImageSrc()}
                alt=""
                fill
                className="object-contain scale-[1.7]"
                sizes="44px"
                priority
                unoptimized
              />
            </div>
            <div className="flex flex-col leading-none pt-0.5">
              <span className="text-[14px] font-black uppercase tracking-tight text-slate-900">
                Ibni Sina
              </span>
              <span className="font-serif text-[13px] italic text-primary mt-0.5">
                pharmacy
              </span>
            </div>
          </Link>

          {/* Menu Toggle */}
          <button
            type="button"
            className={`flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 active:scale-90 ${drawerOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-700"}`}
            onClick={() => setDrawerOpen(!drawerOpen)}
            aria-label={drawerOpen ? "Close menu" : "Open menu"}
          >
            {drawerOpen ? <X className="h-6 w-6" strokeWidth={2.5} /> : <Menu className="h-7 w-7" strokeWidth={1.5} />}
          </button>
        </div>

        {/* Mobile Full-Screen Menu Overlay */}
        <div 
          className={`absolute left-0 top-[67px] w-full bg-white transition-all duration-500 ease-in-out lg:hidden h-[calc(100dvh-67px)] overflow-hidden z-20 ${drawerOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}`}
        >
          <div className="h-full flex flex-col p-6 overflow-y-auto">
            <a
              href={availabilityHref}
              className="group flex min-h-[64px] w-full items-center justify-center gap-3 rounded-2xl bg-slate-900 text-base font-bold text-white shadow-matte transition active:scale-[0.98]"
              onClick={() => setDrawerOpen(false)}
            >
              <span>Book Appointment</span>
              <ChevronDown className="h-4 w-4 -rotate-90 text-white/50" />
            </a>

            <nav className="mt-10 flex flex-col gap-10">
              {pageNavGroups.map((g) => (
                <div key={g.id} className="animate-in slide-in-from-left-4 duration-500 animate-out fill-mode-forwards" style={{ animationDelay: '100ms' }}>
                  <p className="px-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 mb-4">{g.label}</p>
                  <ul className="flex flex-col gap-3">
                    {g.items.map((item) => (
                      <li key={item.href}>
                        <a
                          href={item.href}
                          className="flex min-h-[56px] items-center justify-between rounded-xl bg-slate-50/80 px-5 text-[16px] font-bold text-slate-700 active:bg-primary/5 active:text-primary transition-all group/item"
                          onClick={() => setDrawerOpen(false)}
                        >
                          <span>{item.label}</span>
                          <span className="h-2 w-2 rounded-full bg-slate-200 group-item-active:bg-primary" />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            <div className="mt-auto py-8">
              <p className="text-center text-[10px] uppercase font-bold tracking-widest text-slate-300">
                {site.name} — Beerwah, Budgam
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

