import { availabilityHref, getGoogleMapsEmbedSrc, getGoogleMapsUrl, site } from "@/lib/site";

export function ContactSection() {
  const mapSrc = getGoogleMapsEmbedSrc();

  return (
    <section id="contact" className="scroll-mt-24 bg-white section-y">
      <div className="section-inner">
        <p className="section-eyebrow">Visit or call</p>
        <h2 className="section-title">Store &amp; contact</h2>
        <p className="section-intro">
          Walk in at Beerwah, Budgam—or call or WhatsApp to check stock before you visit.
        </p>

        <div className="section-body grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="space-y-6 rounded-2xl border border-slate-200/90 bg-surface/80 card-pad-lg shadow-card backdrop-blur-sm sm:rounded-3xl">
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Address
              </h3>
              <p className="mt-1 text-base font-semibold text-slate-900 sm:text-lg">{site.landmarkName}</p>
              <p
                lang="ur"
                dir="rtl"
                className="font-urdu mt-1 text-[0.95rem] font-semibold leading-relaxed text-primary"
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
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Phone
              </h3>
              <p className="mt-1 text-xs font-medium text-slate-500">WhatsApp &amp; primary</p>
              <a
                href={`tel:${site.phoneE164}`}
                className="text-base font-semibold text-primary hover:underline sm:text-lg"
              >
                {site.phoneDisplay}
              </a>
              <p className="mt-3 text-xs font-medium text-slate-500">Alternate</p>
              <a
                href={`tel:${site.phoneSecondaryE164}`}
                className="text-base font-semibold text-slate-800 hover:text-primary hover:underline sm:text-lg"
              >
                {site.phoneSecondaryDisplay}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Email
              </h3>
              <a
                href={`mailto:${site.email}`}
                className="break-all text-base font-semibold text-primary hover:underline sm:text-lg"
              >
                {site.email}
              </a>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                Working hours
              </h3>
              <p className="text-base font-medium text-slate-900 sm:text-lg">{site.hours}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-primary-hover sm:min-h-0"
              >
                Open in Google Maps
              </a>
              <a
                href={availabilityHref}
                className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-white/80 bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-card transition hover:bg-primary-hover sm:min-h-0"
              >
                Check availability
              </a>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl border border-slate-200/90 shadow-card sm:rounded-3xl">
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
            <p className="border-t border-slate-100 bg-white px-4 py-3 text-center text-xs leading-relaxed text-slate-500">
              Embedded map for directions. Use &ldquo;Open in Google Maps&rdquo; for full navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
