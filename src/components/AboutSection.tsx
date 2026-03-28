import { aboutText, site } from "@/lib/site";
import { Check } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <div className="grid gap-10 sm:gap-12 lg:grid-cols-2 lg:items-start lg:gap-20">
          <div className="text-center lg:text-left">
            <p className="section-eyebrow lg:text-left">Our store</p>
            <h2 className="section-title lg:text-left">About {site.name}</h2>
            <p className="section-intro lg:mx-0 lg:max-w-none lg:text-left">{aboutText}</p>
            <ul className="section-body flex flex-col gap-6 text-center text-[15px] font-medium text-slate-700 sm:text-left lg:items-start">
              <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="max-w-md sm:max-w-none sm:pt-1">Walk-in counter for purchases, advice, and billing</span>
              </li>
              <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="max-w-md sm:max-w-none sm:pt-1">
                  Prescription checks—message us to confirm availability before visiting
                </span>
              </li>
              <li className="flex flex-col items-center gap-3 sm:flex-row sm:items-start sm:gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                  <Check className="h-5 w-5" strokeWidth={2.5} />
                </span>
                <span className="max-w-md sm:max-w-none sm:pt-1">Genuine stock, clear labels, and patient safety first</span>
              </li>
            </ul>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-matte-lg ring-1 ring-slate-200/50 sm:p-8 lg:p-10 text-center sm:text-left">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Location</p>
            <p className="mt-2 text-xl font-bold text-slate-900 sm:text-2xl">{site.landmarkName}</p>
            <p
              lang="ur"
              dir="rtl"
              className="font-urdu mt-2 text-[0.95rem] font-semibold leading-relaxed text-slate-500"
            >
              {site.landmarkNameUrdu}
            </p>
            <p className="mt-4 font-medium text-slate-800">{site.address}</p>
            <p className="mt-1 text-slate-600">{site.locationLabel}</p>
            <p className="mt-4 text-sm text-slate-500">
              Maps: <span className="font-mono text-slate-700">{site.mapLocationQuery}</span>
            </p>
            <div className="mt-8 space-y-6">
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/50">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Hours</p>
                <p className="mt-1.5 text-[15px] font-semibold text-slate-900">{site.hours}</p>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/50">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">Phone</p>
                <a
                  href={`tel:${site.phoneE164}`}
                  className="mt-1.5 block text-[15px] font-bold text-slate-900 hover:text-primary transition"
                >
                  {site.phoneDisplay}
                </a>
                <div className="mt-2 flex items-center justify-center sm:justify-start gap-2">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">Alt.</span>
                  <a
                    href={`tel:${site.phoneSecondaryE164}`}
                    className="text-sm font-semibold text-slate-600 hover:text-primary transition"
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
