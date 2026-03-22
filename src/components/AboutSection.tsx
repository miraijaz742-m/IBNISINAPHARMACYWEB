import { aboutText, site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 bg-white section-y-spacious">
      <div className="section-inner">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <p className="section-eyebrow lg:text-left">Our store</p>
            <h2 className="section-title lg:text-left">About {site.name}</h2>
            <p className="section-intro lg:mx-0 lg:max-w-none lg:text-left">{aboutText}</p>
            <ul className="section-body flex flex-col items-center gap-3 text-sm text-slate-700 lg:items-start">
              <li className="flex w-full max-w-md gap-3 text-left lg:max-w-none">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-muted text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Walk-in counter for purchases, advice, and billing
              </li>
              <li className="flex w-full max-w-md gap-3 text-left lg:max-w-none">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-muted text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Prescription checks—message us to confirm availability before visiting
              </li>
              <li className="flex w-full max-w-md gap-3 text-left lg:max-w-none">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-muted text-primary">
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                Genuine stock, clear labels, and patient safety first
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-surface to-white card-pad-lg shadow-card backdrop-blur-sm sm:rounded-3xl">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary-muted" aria-hidden />
            <div className="relative">
              <p className="text-sm font-semibold text-slate-500">Location</p>
              <p className="mt-1 text-lg font-bold text-ink sm:text-xl">{site.landmarkName}</p>
              <p
                lang="ur"
                dir="rtl"
                className="font-urdu mt-1 text-[0.95rem] font-semibold leading-relaxed text-primary"
              >
                {site.landmarkNameUrdu}
              </p>
              <p className="mt-2 font-semibold text-slate-800">{site.address}</p>
              <p className="mt-1 text-slate-600">{site.locationLabel}</p>
              <p className="mt-2 text-xs text-slate-500">
                Maps: <span className="font-mono text-slate-600">{site.mapLocationQuery}</span>
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-slate-100 pt-8">
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Hours</p>
                  <p className="mt-1 font-semibold text-ink">{site.hours}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase text-slate-500">Phone</p>
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="mt-1 block font-semibold text-primary hover:underline"
                  >
                    {site.phoneDisplay}
                  </a>
                  <p className="mt-2 text-[11px] font-medium text-slate-500">Alt.</p>
                  <a
                    href={`tel:${site.phoneSecondaryE164}`}
                    className="block text-sm font-semibold text-slate-800 hover:text-primary hover:underline"
                  >
                    {site.phoneSecondaryDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
