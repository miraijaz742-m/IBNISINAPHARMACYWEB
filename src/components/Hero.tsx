"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  availabilityHref,
  getGoogleMapsUrl,
  heroCarouselFilenames,
  heroCopy,
  heroImageVersion,
  site,
} from "@/lib/site";

const SLIDE_INTERVAL_MS = 6000;
const CROSSFADE_MS = 1000;

const ctaBase =
  "group relative inline-flex min-h-[3.5rem] w-full items-center justify-center gap-2.5 rounded-2xl px-5 py-3.5 text-[15px] font-semibold leading-tight tracking-wide transition-[background-color,color,transform,box-shadow] duration-200 ease-out motion-safe:active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:min-h-[3.5rem] sm:rounded-full sm:text-[0.9375rem]";

/**
 * Hero — rotating images, copy on image (no card); bottom gradient for contrast.
 */
export function Hero() {
  const slides = useMemo(
    () => heroCarouselFilenames.map((f) => `/${f}?v=${heroImageVersion}`),
    [],
  );
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  return (
    <section className="relative isolate w-full bg-sky-950" aria-label="Hero">
      <div className="relative min-h-[min(74svh,640px)] w-full max-sm:min-h-[min(78svh,700px)] sm:min-h-[min(86svh,920px)] lg:min-h-[min(88svh,960px)]">
        {slides.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 motion-reduce:transition-none"
            style={{
              opacity: active === i ? 1 : 0,
              transitionProperty: "opacity",
              transitionDuration: reduceMotion ? "0ms" : `${CROSSFADE_MS}ms`,
              transitionTimingFunction: "ease-in-out",
              zIndex: active === i ? 2 : 1,
            }}
          >
            <Image
              src={src}
              alt={i === 0 ? `${site.name} — storefront` : ""}
              fill
              className="object-cover object-center"
              sizes="100vw"
              priority={i === 0}
              unoptimized
            />
          </div>
        ))}

        {/* Light top/mid wash — photo stays visible */}
        <div
          className="absolute inset-0 z-[3] bg-gradient-to-b from-sky-950/40 via-sky-900/20 to-transparent"
          aria-hidden
        />
        {/* Full-width bottom fade (no card) for text contrast */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[4] h-[min(62%,580px)] bg-gradient-to-t from-sky-950/94 via-sky-950/78 to-transparent max-sm:h-[min(68%,620px)] sm:h-[min(55%,540px)]"
          aria-hidden
        />

        <div className="absolute inset-x-0 bottom-0 z-[5] flex flex-col items-center px-4 pb-[max(1.5rem,env(safe-area-inset-bottom,0px))] pt-4 sm:px-5 sm:pb-6 sm:pt-6 md:px-6 lg:px-8">
          {slides.length > 1 ? (
            <div className="mb-4 flex justify-center gap-3 sm:mb-4" role="tablist" aria-label="Hero images">
              {slides.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Slide ${i + 1} of ${slides.length}`}
                  onClick={() => setActive(i)}
                  className={`flex min-h-11 min-w-11 items-center justify-center rounded-full p-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300 sm:min-h-0 sm:min-w-0 sm:p-0 ${
                    active === i
                      ? "bg-white/15 sm:bg-transparent"
                      : "active:bg-white/10 sm:active:bg-transparent"
                  }`}
                >
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      active === i ? "h-2.5 w-9 bg-white shadow-[0_0_14px_rgb(125_211_252_/_0.45)] sm:h-2 sm:w-8" : "h-2 w-2 bg-white/40 sm:bg-white/35"
                    }`}
                  />
                </button>
              ))}
            </div>
          ) : null}

          <div className="mx-auto w-full max-w-4xl px-1 py-3 sm:px-4 sm:py-6 md:py-8 motion-safe:animate-fade-up motion-reduce:animate-none">
            <div className="mx-auto max-w-3xl text-center">
              <div className="mb-4 flex flex-col items-center gap-3 sm:mb-6 sm:gap-4">
                <span className="inline-flex max-w-[95%] items-center justify-center rounded-full border border-white/30 bg-white/10 px-3 py-2 text-center text-[10px] font-semibold uppercase leading-tight tracking-[0.18em] text-sky-100 sm:px-4 sm:text-xs sm:tracking-[0.2em]">
                  {site.name}
                </span>
                <span className="h-px w-12 rounded-full bg-gradient-to-r from-transparent via-sky-300/80 to-transparent sm:w-14" aria-hidden />
              </div>

              <h1 className="text-balance text-[clamp(1.7rem,5.8vw,2rem)] font-extrabold leading-[1.1] tracking-tight text-white [text-shadow:0_2px_24px_rgb(0_0_0_/_0.4)] sm:text-5xl sm:leading-[1.08] lg:text-6xl lg:leading-[1.05]">
                {heroCopy.headline}
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-pretty text-[15px] font-normal leading-relaxed text-sky-50 [text-shadow:0_1px_14px_rgb(0_0_0_/_0.45)] sm:mt-6 sm:text-lg sm:leading-relaxed lg:text-xl lg:leading-relaxed">
                {heroCopy.sub}
              </p>

              <div className="mx-auto mt-7 grid w-full max-w-md grid-cols-1 gap-3.5 sm:mt-10 sm:max-w-2xl sm:grid-cols-3 sm:gap-3 lg:gap-4">
                <a
                  href={getGoogleMapsUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${ctaBase} bg-sky-200 text-sky-950 shadow-sm ring-1 ring-white/40 hover:bg-sky-100`}
                >
                  <MapPinIcon className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-90 transition-transform duration-200 group-hover:-translate-y-px" />
                  <span>{heroCopy.ctaVisit}</span>
                </a>
                <a
                  href={`tel:${site.phoneE164}`}
                  className={`${ctaBase} bg-white text-slate-900 shadow-sm ring-1 ring-white/60 hover:bg-sky-50 hover:text-sky-950`}
                >
                  <PhoneIcon className="h-[1.125rem] w-[1.125rem] shrink-0 text-sky-600 transition-transform duration-200 group-hover:scale-105" />
                  <span>{heroCopy.ctaCall}</span>
                </a>
                <a
                  href={availabilityHref}
                  className={`${ctaBase} bg-primary text-white shadow-[0_8px_30px_-8px_rgb(77_166_255_/_0.55)] ring-1 ring-white/30 hover:bg-primary-hover`}
                >
                  <ClipboardIcon className="h-[1.125rem] w-[1.125rem] shrink-0 opacity-95 transition-transform duration-200 group-hover:-translate-y-px" />
                  <span>{heroCopy.ctaAvailability}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.949.684V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
      />
    </svg>
  );
}

function ClipboardIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
      />
    </svg>
  );
}
