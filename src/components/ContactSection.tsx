import { availabilityHref, getGoogleMapsEmbedSrc, getGoogleMapsUrl, site } from "@/lib/site";
import { Phone } from "lucide-react";

export function ContactSection() {
  const mapSrc = getGoogleMapsEmbedSrc();

  return (
    <section id="contact" className="scroll-mt-24 w-full overflow-x-clip bg-white py-16 md:py-24">
      <div className="section-inner">
        <p className="section-eyebrow">Visit or call</p>
        <h2 className="section-title">Store &amp; contact</h2>
        <p className="section-intro">
          Walk in at Beerwah, Budgam—or call or WhatsApp to check stock before you visit.
        </p>

        <div className="section-body mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          {/* Left Side: Contact Info */}
          <div className="flex w-full flex-col items-center space-y-10 text-center sm:items-start sm:text-left">
            
            {/* Address */}
            <div className="w-full">
              <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-primary/80">Address</h3>
              <div className="mt-3 space-y-1.5 flex flex-col items-center sm:items-start">
                <p className="text-lg font-bold text-slate-900">{site.landmarkName}</p>
                <p
                  lang="ur"
                  dir="rtl"
                  className="font-urdu text-[17px] font-semibold leading-relaxed text-primary"
                >
                  {site.landmarkNameUrdu}
                </p>
                <p className="max-w-xs text-[15px] font-medium leading-relaxed text-slate-600">
                  {site.address}
                </p>
                <p className="text-[14px] text-slate-500">{site.locationLabel}</p>
              </div>
            </div>

            {/* Primary Phone / 24h Badge */}
            <div className="w-full">
              <h3 className="mb-4 text-[13px] font-bold uppercase tracking-[0.15em] text-primary/80">Phone & Service</h3>
              <div className="mx-auto flex w-full max-w-[340px] items-center gap-4 rounded-3xl bg-slate-50 p-5 shadow-matte-sm ring-1 ring-slate-200/50 transition duration-300 hover:bg-white hover:shadow-matte-md sm:mx-0 sm:max-w-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
                  <Phone className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">24 hour service</p>
                  <a 
                    href={`tel:${site.phoneE164}`} 
                    className="text-lg font-bold text-slate-900 hover:text-primary transition-colors"
                  >
                    {site.phoneDisplay}
                  </a>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col items-center sm:items-start">
                <p className="text-[13px] font-medium text-slate-400">Alternate line</p>
                <a
                  href={`tel:${site.phoneSecondaryE164}`}
                  className="mt-1 text-[15px] font-bold text-slate-700 hover:text-primary transition-colors"
                >
                  {site.phoneSecondaryDisplay}
                </a>
              </div>
            </div>

            {/* Email & Hours */}
            <div className="grid w-full gap-8 sm:grid-cols-2 sm:text-left">
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-primary/80">Email</h3>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 break-all text-[15px] font-bold text-slate-700 hover:text-primary transition-colors"
                >
                  {site.email}
                </a>
              </div>
              <div className="flex flex-col items-center sm:items-start">
                <h3 className="text-[13px] font-bold uppercase tracking-[0.15em] text-primary/80">Working hours</h3>
                <p className="mt-2 text-[15px] font-bold text-slate-900">
                  {site.hours}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex w-full flex-col items-center gap-4 pt-4 sm:flex-row sm:justify-start">
              <a
                href={getGoogleMapsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center rounded-full bg-primary px-8 py-3 text-[15px] font-bold text-white shadow-matte-sm transition-all hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-matte-md sm:w-auto"
              >
                Open in Google Maps
              </a>
              <a
                href={availabilityHref}
                className="inline-flex min-h-[52px] w-full max-w-[280px] items-center justify-center rounded-full border border-slate-200 bg-white px-8 py-3 text-[15px] font-bold text-slate-800 shadow-matte-sm transition-all hover:-translate-y-0.5 hover:bg-slate-50 hover:shadow-matte-md sm:w-auto"
              >
                Check availability
              </a>
            </div>
          </div>

          {/* Right Side: Map */}
          <div className="w-full space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-[2.5rem] bg-slate-100 shadow-matte-lg ring-1 ring-slate-200/50">
              <iframe
                title={`Map — ${site.name}`}
                src={mapSrc}
                className="h-full w-full border-0 grayscale-[0.2] contrast-[1.1]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="text-center text-[13px] leading-relaxed text-slate-400 sm:text-left">
              Embedded map for directions. Use &ldquo;Open in Google Maps&rdquo; for live navigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
