import { inStoreHighlights } from "@/lib/site";

const icons = [ShelvesIcon, ReceiptIcon, SearchIcon, SmileIcon] as const;

export function InStoreSection() {
  return (
    <section id="in-store" className="scroll-mt-24 w-full border-t border-sky-100 bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Visit us</p>
        <h2 className="section-title">In-store experience</h2>
        <p className="section-intro">
          A tidy shop floor, clear signage, and staff who help you find what you need—without the rush.
        </p>
        <ul className="section-body grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          {inStoreHighlights.map((t, i) => {
            const Icon = icons[i] ?? ShelvesIcon;
            return (
              <li key={t}>
                <div className="flex h-10 w-10 items-center text-sky-600" aria-hidden>
                  <Icon />
                </div>
                <p className="mt-4 text-base font-semibold leading-snug text-slate-900 sm:text-lg">{t}</p>
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
