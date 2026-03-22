"use client";

import Link from "next/link";
import { useState } from "react";
import { availabilityHref, pageNavLinks, site } from "@/lib/site";

/** SaaS-style header: white surfaces, slate text, single sky accent, airy spacing */
export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative z-50 border-b border-slate-200/80 bg-white">
      {/* Brand row */}
      <div className="bg-white">
        <div className="section-inner-wide flex items-center justify-between gap-2 py-4 sm:gap-4 md:py-5">
          <Link
            href="/"
            className="group flex min-w-0 min-h-[3rem] flex-1 items-center gap-2.5 sm:gap-3.5 md:min-h-0 md:gap-5"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/25 bg-gradient-to-br from-primary-muted to-white transition duration-200 group-hover:border-primary/40 md:h-12 md:w-12">
              <svg
                viewBox="0 0 40 40"
                className="h-7 w-7 text-primary transition-transform duration-200 group-hover:scale-105 md:h-8 md:w-8"
                fill="none"
                aria-hidden
              >
                <path
                  d="M20 10v20M10 20h20"
                  stroke="currentColor"
                  strokeWidth="2.25"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            <div className="flex min-w-0 flex-1 flex-col gap-1 sm:flex-row sm:items-center sm:gap-0">
              <div className="min-w-0 sm:pr-5 md:pr-6">
                <p className="text-base font-bold leading-snug tracking-tight text-primary sm:truncate sm:text-lg md:text-xl">
                  {site.name}
                </p>
                <p className="mt-0.5 text-[11px] font-medium leading-snug text-slate-500 sm:truncate md:text-[13px]">
                  {site.tagline}
                </p>
                <p
                  lang="ur"
                  dir="rtl"
                  className="font-urdu mt-1.5 text-[0.72rem] font-semibold leading-snug text-primary sm:hidden"
                >
                  {site.nameUrdu}
                </p>
              </div>
              <span
                className="hidden h-11 w-px shrink-0 self-center rounded-full bg-gradient-to-b from-primary-muted via-primary/35 to-primary-muted sm:block md:h-12"
                aria-hidden
              />
              <p
                lang="ur"
                dir="rtl"
                className="font-urdu hidden max-w-[11rem] text-right text-[0.85rem] font-semibold leading-snug tracking-wide text-primary sm:block md:max-w-none md:pl-6 md:text-[0.95rem]"
              >
                {site.nameUrdu}
              </p>
            </div>
          </Link>

          <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
            <a
              href={availabilityHref}
              className="hidden rounded-lg bg-primary px-4 py-2.5 text-xs font-medium text-white transition hover:bg-primary-hover sm:inline-flex md:px-5 md:text-sm"
            >
              Check availability
            </a>
            <a
              href={availabilityHref}
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white transition hover:bg-primary-hover sm:hidden"
              aria-label="Check medicine availability"
              title="Check availability"
            >
              <AvailabilityIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              className="inline-flex rounded-lg p-2 text-slate-600 transition hover:bg-slate-100 lg:hidden"
              aria-expanded={open}
              aria-label="Open menu"
              onClick={() => setOpen(!open)}
            >
              {open ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      {/* Section nav (desktop) — matches on-page headings, not shop mega-menu */}
      <nav
        className="hidden border-t border-slate-200 bg-[#f8fafc] lg:block"
        aria-label="On this page"
      >
        <div className="section-inner-wide border-b border-slate-200">
          <ul className="flex flex-wrap items-center justify-center gap-x-0.5 gap-y-1 py-2.5">
            {pageNavLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="block rounded-lg px-3 py-2 text-center text-[13px] font-medium text-slate-600 transition-colors hover:bg-white hover:text-slate-900"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile */}
      {open && (
        <div className="border-t border-slate-100 bg-white lg:hidden">
          <div className="section-inner py-6">
            <a
              href={availabilityHref}
              className="mb-6 flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-primary py-3 text-sm font-semibold text-white hover:bg-primary-hover"
              onClick={() => setOpen(false)}
            >
              Check availability
            </a>
            <p className="mb-3 text-center text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              On this page
            </p>
            <nav className="flex flex-col border-b border-slate-100 pb-2">
              {pageNavLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="min-h-[48px] rounded-lg py-3 pl-1 pr-1 text-sm font-medium text-slate-800 active:bg-slate-50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

function AvailabilityIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
        stroke="currentColor"
        strokeWidth={1.75}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
