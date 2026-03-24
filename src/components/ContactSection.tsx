import { availabilityHref, getGoogleMapsEmbedSrc, getGoogleMapsUrl, site } from "@/lib/site";

export function ContactSection() {
  const mapSrc = getGoogleMapsEmbedSrc();

  return (
    <section id="contact" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Visit or call</p>
        <h2 className="section-title">Store &amp; contact</h2>
        <p className="section-intro">
          Walk in at Beerwah, Budgam—or call or WhatsApp to check stock before you visit.
        </p>

        <div className="section-body grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">Address</h3>
              <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{site.landmarkName}</p>
              <p
                lang="ur"
                dir="rtl"
                className="font-urdu mt-1 text-[0.95rem] font-semibold leading-relaxed text-sky-700"
              >
                {site.landmarkNameUrdu}
              </p>
              <p className="mt-2 text-base font-medium text-slate-800">{site.address}</p>
              <p className="text-slate-600">{site.locationLabel}</p>
              <p className="mt-2 text-xs font-medium text-slate-500">
                Map pin: <span className="font-mono text-slate-700">{site.mapLocationQuery}</span>
              </p>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">Phone</h3>
              <p className="mt-1 text-xs font-medium text-slate-500">WhatsApp &amp; primary</p>
              <a
                href={`tel:${site.phoneE164}`}
                className="text-base font-semibold text-sky-700 hover:underline sm:text-lg"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-xs font-medium text-slate-500">Alternate</p>
              <a
                href={`tel:${site.phoneSecondaryE164}`}
                className="text-base font-semibold text-slate-800 hover:text-sky-700 hover:underline sm:text-lg"
              >
                {site.phoneSecondaryDisplay}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">Email</h3>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-base font-semibold text-sky-700 hover:underline sm:text-lg"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-700">Working hours</h3>
              <p className="text-base font-medium text-slate-900 sm:text-lg">{site.hours}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-primary-hover sm:min-h-0"
              >
                Open in Google Maps
              </a>
              <a
                href={availabilityHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-md border border-sky-300 bg-white px-5 py-2.5 text-sm font-semibold text-sky-800 transition hover:bg-sky-50 sm:min-h-0"
              >
                Check availability
              </a>
            </div>
          </div>

          <div className="border-t border-sky-100 pt-10 sm:pt-12 lg:border-t-0 lg:border-l lg:border-sky-100 lg:pt-0 lg:pl-16">
            <div className="aspect-[4/3] w-full min-h-[240px] bg-slate-100 sm:min-h-[280px]">
              <iframe
                title={`Map — ${site.name}`}
                src={mapSrc}
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="mt-4 text-center text-xs leading-relaxed text-slate-500 lg:text-left">
              Embedded map for directions. Use &ldquo;Open in Google Maps&rdquo; for full navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
