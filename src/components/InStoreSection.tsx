import { inStoreHighlights } from "@/lib/site";

const icons = [ShelvesIcon, ReceiptIcon, SearchIcon, SmileIcon] as const;

export function InStoreSection() {
  return (
    <section id="in-store" className="scroll-mt-24 border-t border-slate-100 bg-surface section-y">
      <div className="section-inner">
        <p className="section-eyebrow">Visit us</p>
        <h2 className="section-title">In-store experience</h2>
        <p className="section-intro">
          A tidy shop floor, clear signage, and staff who help you find what you need—without the rush.
        </p>
        <ul className="section-body grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
          {inStoreHighlights.map((t, i) => {
            const Icon = icons[i] ?? ShelvesIcon;
            return (
              <li
                key={t}
                className="atm-card-face rounded-2xl border border-sky-300/55 bg-transparent transition hover:border-sky-400/65 hover:shadow-[0_16px_44px_-14px_rgba(56,189,248,0.3)]"
              >
                <div className="atm-card-face__content card-pad">
                  <div className="mb-4 inline-flex rounded-xl border border-white/95 bg-white/88 p-3 text-mint shadow-sm ring-1 ring-mint/30 backdrop-blur-[2px]">
                    <Icon />
                  </div>
                  <p className="font-semibold text-slate-900">{t}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ShelvesIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h10" />
    </svg>
  );
}

function ReceiptIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 14l6-6m-5.5.5h.01m4.99 5h.01M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l3.5-2 3.5 2 3.5-2 3.5 2z"
      />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
      />
    </svg>
  );
}

function SmileIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
