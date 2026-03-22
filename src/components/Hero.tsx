import Image from "next/image";
import {
  availabilityHref,
  getGoogleMapsUrl,
  getHeroImageSrc,
  heroCopy,
  site,
} from "@/lib/site";

const ctaBase =
  "flex min-h-[52px] w-full items-center justify-center rounded-xl px-4 py-3.5 text-sm font-semibold shadow-lg transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

/**
 * Hero: sky-tinted photo, stronger bottom scrim, high-contrast glass card, uniform CTAs.
 */
export function Hero() {
  return (
    <section
      className="relative isolate w-full bg-paper pb-6 pt-4 md:pb-8 md:pt-6"
      aria-label="Hero"
    >
      <div className="section-inner-wide">
        <div className="relative w-full overflow-hidden rounded-2xl shadow-glass ring-1 ring-sky-200/60 md:rounded-3xl">
          <div className="relative min-h-[min(82svh,880px)] w-full sm:min-h-[min(88svh,920px)] md:min-h-[min(80vh,900px)]">
            <Image
              src={getHeroImageSrc()}
              alt={`${site.name} — storefront`}
              fill
              className="object-cover object-center brightness-[0.88] saturate-[0.92]"
              sizes="(max-width: 768px) 100vw, 1280px"
              priority
              unoptimized
            />
            {/* Sky colour wash */}
            <div
              className="absolute inset-0 bg-gradient-to-br from-sky-300/40 via-sky-400/22 to-primary/30"
              aria-hidden
            />
            {/* Readability: deeper band at bottom, light sky haze at top */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-sky-950/92 via-sky-900/45 via-[36%] to-sky-200/15"
              aria-hidden
            />
            <div className="absolute inset-0 flex flex-col justify-end">
              <div className="w-full pb-8 pt-10 md:pb-14 md:pt-12">
                <div className="mx-auto w-full max-w-xl animate-fade-up sm:max-w-2xl lg:max-w-3xl">
                  <div className="rounded-2xl border border-sky-400/30 bg-slate-950/88 px-5 py-7 shadow-[0_20px_50px_-12px_rgba(8,47,73,0.55)] backdrop-blur-lg md:px-10 md:py-8">
                    <div className="mx-auto max-w-xl text-center">
                      <h1 className="text-balance text-3xl font-bold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
                        {heroCopy.headline}
                      </h1>
                      <p className="mx-auto mt-4 max-w-lg text-pretty text-base font-medium leading-relaxed text-white drop-shadow-[0_1px_12px_rgba(0,0,0,0.9)] sm:max-w-xl sm:text-lg">
                        {heroCopy.sub}
                      </p>
                    </div>
                    <div className="mx-auto mt-8 grid w-full max-w-xl grid-cols-1 gap-3 sm:max-w-none sm:grid-cols-3 sm:gap-4">
                      <a
                        href={getGoogleMapsUrl()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${ctaBase} bg-primary text-white hover:bg-primary-hover`}
                      >
                        {heroCopy.ctaVisit}
                      </a>
                      <a
                        href={`tel:${site.phoneE164}`}
                        className={`${ctaBase} border-2 border-white bg-white text-slate-900 hover:bg-sky-50`}
                      >
                        {heroCopy.ctaCall}
                      </a>
                      <a
                        href={availabilityHref}
                        className={`${ctaBase} border-2 border-sky-700 bg-sky-800 text-white hover:bg-sky-700`}
                      >
                        {heroCopy.ctaAvailability}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
