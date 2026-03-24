import { aboutText, site } from "@/lib/site";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="section-eyebrow lg:text-left">Our store</p>
            <h2 className="section-title lg:text-left">About {site.name}</h2>
            <p className="section-intro lg:mx-0 lg:max-w-none lg:text-left">{aboutText}</p>
            <ul className="section-body flex flex-col gap-6 text-center text-base text-slate-700 sm:text-left lg:items-start">
              <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-sky-600 sm:mt-1" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="max-w-md sm:max-w-none">Walk-in counter for purchases, advice, and billing</span>
              </li>
              <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-sky-600 sm:mt-1" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="max-w-md sm:max-w-none">
                  Prescription checks—message us to confirm availability before visiting
                </span>
              </li>
              <li className="flex flex-col items-center gap-2 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center text-sky-600 sm:mt-1" aria-hidden>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="max-w-md sm:max-w-none">Genuine stock, clear labels, and patient safety first</span>
              </li>
            </ul>
          </div>
          <div className="bg-sky-50 px-5 py-10 text-center sm:px-8 sm:py-12 sm:text-left lg:px-10 lg:py-14">
            <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">Location</p>
            <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{site.landmarkName}</p>
            <p
              lang="ur"
              dir="rtl"
              className="font-urdu mt-2 text-[0.95rem] font-semibold leading-relaxed text-sky-700"
            >
              {site.landmarkNameUrdu}
            </p>
            <p className="mt-4 font-medium text-slate-800">{site.address}</p>
            <p className="mt-1 text-slate-600">{site.locationLabel}</p>
            <p className="mt-4 text-sm text-slate-500">
              Maps: <span className="font-mono text-slate-700">{site.mapLocationQuery}</span>
            </p>
            <div className="mt-10 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Hours</p>
                <p className="mt-2 text-lg font-semibold text-slate-900">{site.hours}</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-sky-700">Phone</p>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="mt-2 block text-lg font-semibold text-sky-700 hover:underline"
                >
                  {site.phoneDisplay}
                </a>
                <p className="mt-1 text-xs font-medium text-slate-500">Alt.</p>
                <a
                  href={`tel:${site.phoneSecondaryE164}`}
                  className="text-base font-semibold text-slate-800 hover:text-sky-700 hover:underline"
                >
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
