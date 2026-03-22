import { trustItems } from "@/lib/site";

const icons = [ShieldCheckIcon, TagIcon, UsersIcon, BoltIcon] as const;

export function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="scroll-mt-24 border-t border-slate-900/15 bg-gradient-to-b from-hero via-secondary to-hero-deep section-y text-white"
    >
      <div className="section-inner-wide">
        <header className="mx-auto max-w-3xl text-center px-0">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-sky-100">
            Why choose us
          </p>
          <h2
            id="trust-heading"
            className="mt-3 text-balance text-[1.65rem] font-bold leading-tight tracking-tight text-white sm:text-3xl md:text-4xl"
          >
            Care you can trust
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-sky-50 sm:text-base md:text-[17px]">
            Licensed retail pharmacy with transparent pricing and products sourced through authorised
            channels—here to support walk-in patients every day.
          </p>
        </header>

        <ul className="section-body grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {trustItems.map((t, i) => {
            const Icon = icons[i] ?? ShieldCheckIcon;
            return (
              <li
                key={t}
                className="atm-card-face flex min-h-[5.5rem] items-stretch rounded-2xl border border-sky-200/80 bg-transparent transition hover:border-sky-300/90 hover:shadow-[0_16px_44px_-12px_rgba(15,23,42,0.2)]"
              >
                <div className="atm-card-face__content flex w-full items-center gap-4 card-pad">
                  <span
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-white/95 bg-white/90 text-secondary shadow-sm ring-1 ring-sky-300/50 backdrop-blur-[2px]"
                    aria-hidden
                  >
                    <Icon />
                  </span>
                  <span className="text-left text-[15px] font-semibold leading-snug text-slate-900">
                    {t}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ShieldCheckIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
      />
    </svg>
  );
}

function TagIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
      />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.8}
        d="M13 10V3L4 14h7v7l9-11h-7z"
      />
    </svg>
  );
}
