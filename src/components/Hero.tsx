"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import {
  availabilityHref,
  getGoogleMapsUrl,
  getWhatsAppUrl,
  heroCarouselFilenames,
  heroCopy,
  heroImageVersion,
  site,
} from "@/lib/site";
import { Phone, ArrowRight } from "lucide-react";

const CROSSFADE_MS = 1000;
const SLIDE_INTERVAL_MS = 6000;

export function Hero() {
  const instagram = site.social.instagram?.trim();
  const slides = useMemo(
    () => heroCarouselFilenames.map((f) => `/${f}?v=${heroImageVersion}`),
    [],
  );
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <section className="relative overflow-hidden min-h-[90vh] md:min-h-[85vh] flex items-center pb-20 pt-16 sm:pb-28 sm:pt-28 lg:pb-32 lg:pt-36">
      
      {/* World-Class Background Slideshow */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        {slides.map((src, i) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-[1500ms] ease-in-out ${
              active === i ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              className={`object-cover transition-transform duration-[6000ms] ease-out ${
                active === i ? "scale-105" : "scale-100"
              }`}
              priority={i === 0}
              unoptimized
            />
          </div>
        ))}
        {/* Next-Level SaaS Frosted Overlay: perfectly balanced to let background images pop while keeping text super readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/25 to-white/40 md:bg-gradient-to-r md:from-white/50 md:via-white/20 md:to-transparent backdrop-blur-[0.5px] z-10" />
      </div>

      <div className="section-inner-wide relative z-20 w-full">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 justify-items-center lg:justify-items-start">
          
          {/* Left: Content (Premium Glassmorphic Card for 100% legibility and modern SaaS feel) */}
          <div className="max-w-2xl bg-white/80 backdrop-blur-md border border-white/60 rounded-3xl p-6 sm:p-10 shadow-matte-xl text-center lg:text-left flex flex-col items-center lg:items-start transition-all duration-300 hover:bg-white/85 hover:shadow-matte-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 shadow-matte-sm ring-1 ring-slate-200/50 transition-all duration-300 hover:scale-105 hover:bg-white hover:ring-primary/30 select-none">
              <span className="flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white shadow-sm">#1</span>
              <span className="text-[13px] font-bold tracking-tight text-slate-600">Best Pharmacy in the Region</span>
            </div>

            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.12] tracking-tight text-slate-900">
              Your trusted care at <br className="hidden sm:block" />
              <span className="text-primary">Ibni Sina</span> pharmacy.
            </h1>

            <p className="mt-6 sm:mt-8 text-[15px] sm:text-xl leading-relaxed text-slate-600 max-w-xl">
              {heroCopy.sub} Delivering comprehensive healthcare support and authentic medicines that seamlessly connect you to premium care.
            </p>

            <div className="mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row sm:justify-start">
              {/* Call Now Outline Button (Slate Border) */}
              <a
                href={`tel:${site.phoneE164}`}
                className="flex min-h-[56px] w-full max-w-[280px] items-center justify-center gap-2 rounded-full border-2 border-slate-200 bg-white px-8 text-[15px] font-bold text-slate-700 shadow-sm transition duration-300 hover:bg-slate-50 hover:border-slate-400 hover:text-slate-900 active:scale-95 sm:w-auto sm:min-w-[180px]"
              >
                <Phone className="h-4 w-4 text-slate-400" strokeWidth={2.5} />
                <span>{heroCopy.ctaCall}</span>
              </a>
              
              {/* Check Availability Solid Button (Mint Green) */}
              <a
                href={availabilityHref}
                className="group/btn flex min-h-[56px] w-full max-w-[280px] items-center justify-center gap-2 rounded-full bg-mint px-8 text-[15px] font-bold text-white shadow-matte transition duration-300 hover:bg-[#43927b] hover:shadow-lg active:scale-95 sm:w-auto sm:min-w-[180px]"
              >
                <span>{heroCopy.ctaAvailability}</span>
                <ArrowRight className="h-4 w-4 text-white/70 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Immersive Blank space on desktop to let images shine */}
          <div className="relative w-full h-[150px] lg:h-[400px] flex items-end justify-center lg:justify-end select-none">
            {/* Floating Info Badge: 24h Service (Positioned nicely on the right) */}
            <div className="rounded-[2rem] bg-white/95 backdrop-blur-md p-5 shadow-matte-xl ring-1 ring-slate-200/50 hover:scale-105 transition-transform duration-300">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-mint/10 text-mint shadow-inner">
                  <Phone className="h-6 sm:h-7 w-6 sm:w-7 text-mint animate-pulse" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">24 hour service</p>
                  <p className="text-[16px] font-black text-slate-900 whitespace-nowrap">{site.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="18" cy="6" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

