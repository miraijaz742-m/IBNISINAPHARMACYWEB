"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { availabilityHref, getHeroImageSrc, pageNavGroups, site } from "@/lib/site";

/**
 * Header — brand left | SaaS-style grouped nav (dropdowns) | contact right.
 */
export function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mobileOpenGroup, setMobileOpenGroup] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-[100] border-b border-slate-200/50 bg-[#fafbfc]/85 backdrop-blur-md shadow-matte-sm">
      <div className="section-inner-wide">
        <div className="grid grid-cols-[2.75rem_minmax(0,1fr)_2.75rem] items-center gap-x-2 gap-y-1 py-2 sm:grid-cols-[3rem_minmax(0,1fr)_3rem] sm:gap-x-3 sm:py-2.5 lg:grid-cols-[minmax(0,auto)_minmax(0,1fr)_minmax(0,auto)] lg:items-center lg:gap-5 lg:py-2.5">
          <div className="col-start-1 row-start-1 flex justify-self-start lg:hidden">
            <a
              href={`tel:${site.phoneE164}`}
              className="inline-flex h-10 min-w-[2.5rem] items-center justify-center rounded-lg border border-sky-200 bg-sky-50 px-2 text-primary transition active:scale-[0.98] active:bg-sky-100"
              aria-label={`Call ${site.phoneDisplay}`}
            >
              <PhoneGlyph className="h-[1.35rem] w-[1.35rem]" />
            </a>
          </div>

          <Link
            href="/"
            aria-label={site.name}
            className="group col-start-2 row-start-1 flex min-h-0 min-w-0 max-w-full flex-col items-center justify-center gap-1 rounded-lg px-1 py-0.5 text-center active:bg-slate-50 sm:flex-row sm:gap-2 sm:py-0 lg:col-start-1 lg:max-w-none lg:flex-row lg:justify-start lg:gap-2.5 lg:justify-self-start lg:pl-0 lg:text-left"
            onClick={() => setDrawerOpen(false)}
          >
            <span
              className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-2 ring-white sm:h-14 sm:w-14 lg:h-14 lg:w-14"
              aria-hidden
            >
              <Image
                src={getHeroImageSrc()}
                alt=""
                fill
                className="origin-center object-contain object-[48%_52%] -translate-x-[5%] translate-y-[4%] scale-[1.08] transition duration-300 ease-out group-hover:scale-[1.12] group-hover:-translate-x-[4%] group-hover:translate-y-[3%]"
                sizes="(max-width: 1023px) 56px, 56px"
                priority
                unoptimized
              />
            </span>
            <div className="min-w-0 max-w-full lg:flex-1 lg:text-left">
              <p className="leading-none">
                <span className="text-balance text-[0.875rem] font-bold tracking-tight text-primary sm:text-[0.9375rem] lg:text-base">
                  {site.name}
                </span>
              </p>
            </div>
          </Link>

          {/* Desktop: grouped dropdowns */}
          <nav className="col-start-2 row-start-1 hidden min-w-0 lg:block lg:justify-self-center" aria-label="On this page">
            <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 xl:gap-x-1">
              {pageNavGroups.map((g) => (
                <li key={g.id} className="group relative">
                  <button
                    type="button"
                    className="flex items-center gap-0.5 rounded-md px-2 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-800 outline-none transition hover:text-primary focus-visible:ring-2 focus-visible:ring-primary/35 focus-visible:ring-offset-2 xl:px-2.5 xl:text-[11px]"
                    aria-expanded="false"
                    aria-haspopup="menu"
                    aria-controls={`nav-panel-${g.id}`}
                    id={`nav-trigger-${g.id}`}
                  >
                    {g.label}
                    <ChevronDownIcon className="h-3 w-3 shrink-0 text-slate-500 transition duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
                  </button>
                  <div
                    id={`nav-panel-${g.id}`}
                    role="menu"
                    aria-labelledby={`nav-trigger-${g.id}`}
                    className="invisible absolute left-1/2 top-full z-[70] w-max min-w-[12rem] -translate-x-1/2 pt-1.5 opacity-0 transition duration-150 ease-out group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100"
                  >
                    <ul className="rounded-xl border border-slate-200/80 bg-[#fcfcfd] py-1.5 shadow-matte-lg ring-1 ring-slate-900/[0.035]">
                      {g.items.map((item) => (
                        <li key={item.href} role="none">
                          <a
                            role="menuitem"
                            href={item.href}
                            className="block whitespace-nowrap px-4 py-2.5 text-left text-[13px] font-medium text-slate-700 transition hover:bg-sky-50 hover:text-primary"
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-start-3 row-start-1 hidden shrink-0 items-center justify-self-end border-sky-100 lg:flex lg:border-l lg:pl-4">
            <div className="flex items-center gap-2.5">
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-50 text-primary ring-1 ring-sky-200/80"
                aria-hidden
              >
                <PhoneGlyph className="h-4 w-4" />
              </span>
              <div className="min-w-0 text-left leading-tight">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500">Call us now</p>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="mt-0.5 block text-sm font-bold tracking-tight text-primary hover:text-primary-hover"
                >
                  {site.phoneDisplay}
                </a>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-0.5 block max-w-[14rem] truncate text-[10px] text-slate-500 transition hover:text-sky-700"
                >
                  {site.email}
                </a>
              </div>
            </div>
          </div>

          <div className="col-start-3 row-start-1 flex shrink-0 justify-self-end lg:hidden">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-slate-700 transition active:bg-slate-100"
              aria-expanded={drawerOpen}
              aria-label={drawerOpen ? "Close menu" : "Open menu"}
              onClick={() => setDrawerOpen((o) => !o)}
            >
              {drawerOpen ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {drawerOpen ? (
        <div className="max-h-[min(78dvh,calc(100dvh-4.25rem))] overflow-y-auto overscroll-contain border-t border-slate-200/60 bg-[#fafbfc] shadow-inner lg:hidden">
          <div className="section-inner pb-[max(1.75rem,env(safe-area-inset-bottom,0px))] pt-4 text-center sm:pt-5 sm:text-left">
            <a
              href={availabilityHref}
              className="mb-5 flex min-h-[54px] w-full max-w-md items-center justify-center gap-2 rounded-2xl bg-primary px-4 py-4 text-base font-semibold text-white shadow-matte active:scale-[0.99] active:bg-primary-hover sm:max-w-none"
              onClick={() => setDrawerOpen(false)}
            >
              Check availability
            </a>

            <div className="mb-6 rounded-2xl border border-sky-200/80 bg-gradient-to-b from-sky-50 to-sky-50/50 p-5 sm:text-left">
              <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-4 sm:text-left">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-primary shadow-matte-sm ring-1 ring-slate-200/70">
                  <PhoneGlyph className="h-6 w-6" />
                </span>
                <div className="min-w-0 w-full max-w-sm flex-1 space-y-3 sm:max-w-none">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Call us now</p>
                    <a
                      href={`tel:${site.phoneE164}`}
                      className="mt-1 block text-lg font-bold leading-tight text-primary active:underline"
                      onClick={() => setDrawerOpen(false)}
                    >
                      {site.phoneDisplay}
                    </a>
                  </div>
                  <div className="border-t border-sky-200/60 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Alternate</p>
                    <a
                      href={`tel:${site.phoneSecondaryE164}`}
                      className="mt-1 block text-[15px] font-semibold text-slate-800 active:text-primary"
                      onClick={() => setDrawerOpen(false)}
                    >
                      {site.phoneSecondaryDisplay}
                    </a>
                  </div>
                  <div className="border-t border-sky-200/60 pt-3">
                    <p className="text-[11px] font-semibold uppercase tracking-wide text-slate-500">Email</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-1 break-all text-[15px] font-medium leading-snug text-sky-800 active:underline"
                      onClick={() => setDrawerOpen(false)}
                    >
                      {site.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <p className="mb-3 text-center text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400 sm:text-left">Browse</p>
            <nav className="rounded-xl border border-slate-100 bg-slate-50/50" aria-label="On this page">
              {pageNavGroups.map((g) => {
                const expanded = mobileOpenGroup === g.id;
                return (
                  <div key={g.id} className="border-b border-slate-100 last:border-b-0">
                    <button
                      type="button"
                      className="flex w-full min-h-[54px] items-center justify-center gap-2 px-3 py-2 text-center text-[13px] font-semibold uppercase tracking-wide text-slate-800 active:bg-white sm:justify-between sm:px-4 sm:text-left"
                      aria-expanded={expanded}
                      onClick={() => setMobileOpenGroup((x) => (x === g.id ? null : g.id))}
                    >
                      <span className="text-balance sm:pr-2">{g.label}</span>
                      <ChevronDownIcon
                        className={`h-5 w-5 shrink-0 text-slate-400 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                      />
                    </button>
                    <ul className={expanded ? "space-y-0.5 border-t border-slate-100 bg-white px-2 py-2" : "hidden"}>
                      {g.items.map((item) => (
                        <li key={item.href}>
                          <a
                            href={item.href}
                            className="flex min-h-[48px] items-center justify-center rounded-xl py-3 pl-4 pr-3 text-center text-[15px] font-medium text-slate-700 active:bg-sky-100 sm:justify-start sm:text-left"
                            onClick={() => {
                              setDrawerOpen(false);
                              setMobileOpenGroup(null);
                            }}
                          >
                            {item.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      ) : null}
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
