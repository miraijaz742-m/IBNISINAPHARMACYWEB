"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { availabilityHref, getHeroImageSrc, pageNavGroups, site } from "@/lib/site";

/**
 * Header — floating pill design / high-end medical aesthetic.
 */
export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="sticky top-4 z-[100] mx-auto w-full max-w-7xl px-4 lg:px-8">
      <div className="rounded-full border border-slate-200/50 bg-white/95 py-2.5 shadow-matte-lg backdrop-blur-md ring-1 ring-slate-900/[0.04]">
        <div className="mx-auto w-full max-w-[1280px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-[1fr_auto_auto] items-center gap-x-3 px-1 sm:gap-x-4 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)_minmax(0,auto)] lg:gap-8">
            {/* Brand Logo & Name */}
            <Link
              href="/"
              aria-label={site.name}
              className="group col-start-1 row-start-1 flex min-w-0 max-w-full flex-row items-center justify-start gap-2.5 rounded-full px-1.5 py-1 active:bg-slate-50 lg:max-w-none lg:gap-3 lg:justify-self-start"
              onClick={() => setDrawerOpen(false)}
            >
              <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white shadow-matte-sm sm:h-11 sm:w-11 lg:h-12 lg:w-12">
                <Image
                  src={getHeroImageSrc()}
                  alt=""
                  fill
                  className="object-contain transition duration-300 group-hover:scale-110"
                  sizes="48px"
                  priority
                  unoptimized
                />
              </div>
              <span className="truncate text-[0.9375rem] font-bold tracking-tight text-slate-900 sm:text-base lg:text-[1.05rem]">
                {site.name}
              </span>
            </Link>

            {/* Desktop: Navigation */}
            <nav className="col-start-2 row-start-1 hidden min-w-0 lg:block lg:justify-self-center" aria-label="On this page">
              <ul className="flex items-center gap-1 xl:gap-2">
                {pageNavGroups.map((g) => (
                  <li key={g.id} className="relative group/nav">
                    <button className="rounded-full px-4 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 transition hover:bg-slate-50 hover:text-primary">
                      {g.label}
                    </button>
                    {/* Dropdown can go here if needed, keeping it flat for "MedMe" look */}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Actions */}
            <div className="col-start-2 row-start-1 flex items-center gap-2 lg:col-start-3 lg:justify-self-end">
              <a
                href={availabilityHref}
                className="hidden rounded-full bg-slate-900 px-6 py-2.5 text-sm font-bold text-white shadow-matte transition hover:bg-slate-800 active:scale-[0.98] lg:block"
              >
                Book Appointment
              </a>
              
              <div className="flex shrink-0 items-center gap-1.5 lg:hidden">
                <a
                  href={`tel:${site.phoneE164}`}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-100 bg-sky-50 text-primary transition active:bg-sky-100"
                >
                  <PhoneGlyph className="h-4.5 w-4.5" />
                </a>
                <button
                  type="button"
                  className="flex h-9 w-9 items-center justify-center rounded-full text-slate-700 active:bg-slate-100"
                  onClick={() => setDrawerOpen(!drawerOpen)}
                >
                  {drawerOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {drawerOpen ? (
          <div className="max-h-[min(70dvh,calc(100dvh-6rem))] overflow-y-auto rounded-b-[2.5rem] bg-white pt-2 lg:hidden">
            <div className="px-6 pb-8 pt-4">
              <a
                href={availabilityHref}
                className="mb-8 flex min-h-[54px] w-full items-center justify-center rounded-full bg-slate-900 text-base font-bold text-white shadow-matte"
                onClick={() => setDrawerOpen(false)}
              >
                Book Appointment
              </a>
              <nav className="space-y-6">
                {pageNavGroups.map((g) => (
                  <div key={g.id}>
                    <p className="px-1 text-[11px] font-bold uppercase tracking-[0.2em] text-slate-400">{g.label}</p>
                    <ul className="mt-3 grid grid-cols-1 gap-2">
                      {g.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="flex min-h-[48px] items-center rounded-2xl bg-slate-50 px-5 text-[15px] font-semibold text-slate-700 active:bg-primary/5 active:text-primary"
                            onClick={() => setDrawerOpen(false)}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

function PhoneGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.949.684V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function MenuIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
