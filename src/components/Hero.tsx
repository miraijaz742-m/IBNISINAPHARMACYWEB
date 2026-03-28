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
import { Phone } from "lucide-react";

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
    <section className="relative overflow-hidden bg-[#F4F1FE] pb-20 pt-24 sm:pt-32 lg:pb-32 lg:pt-44">
      {/* Background soft glow / abstract shapes */}
      <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-400/10 blur-[100px]" />

      <div className="section-inner-wide relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 justify-items-center lg:justify-items-start">
          {/* Left: Content */}
          <div className="max-w-2xl text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-matte-sm ring-1 ring-slate-200/60">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">#1</span>
              <span className="text-[13px] font-bold tracking-tight text-slate-600">Best Pharmacy in the Region</span>
            </div>

            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.12] tracking-tight text-slate-900">
              We bring professional <br className="hidden sm:block" />
              <span className="text-primary italic">pharmacy</span> support.
            </h1>

            <p className="mt-6 sm:mt-8 text-[15px] sm:text-xl leading-relaxed text-slate-600">
              {heroCopy.sub} Delivering comprehensive healthcare support through our innovative 
              platform that seamlessly connects you to your medicines.
            </p>

            <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row sm:items-center sm:justify-start justify-center">
              <a
                href={availabilityHref}
                className="flex min-h-[56px] w-full max-w-[280px] items-center justify-center rounded-full border border-primary bg-white px-8 text-[15px] font-bold text-primary shadow-matte-sm transition hover:bg-primary/5 active:scale-95 sm:w-auto sm:min-w-[180px]"
              >
                Get Started Now
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex min-h-[56px] w-full max-w-[280px] items-center justify-center rounded-full bg-slate-900 px-8 text-[15px] font-bold text-white shadow-matte transition hover:bg-slate-800 active:scale-95 sm:w-auto sm:min-w-[180px]"
              >
                Book Appointment
              </a>
            </div>


          </div>

          {/* Right: Image & Badges */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[3rem] shadow-matte-2xl ring-1 ring-slate-200/40 lg:aspect-square">
              {slides.map((src, i) => (
                <div
                  key={src}
                  className="absolute inset-0 transition-opacity duration-1000"
                  style={{ 
                    opacity: active === i ? 1 : 0, 
                    zIndex: active === i ? 2 : 1,
                  }}
                >
                  <Image
                    src={src}
                    alt={site.name}
                    fill
                    className={`object-cover transition-transform duration-[6000ms] ease-out ${active === i ? "scale-110" : "scale-100"}`}
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              ))}
              
            </div>



            {/* Floating Info Badge: Socials (Hidden on mobile) */}
            <div className="absolute right-6 top-6 z-20 hidden lg:flex gap-2">
              {instagram ? (
                <a
                  href={instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-matte-lg backdrop-blur-sm transition hover:scale-110 hover:text-pink-600 ring-1 ring-slate-200/50"
                  title="Follow us on Instagram"
                  aria-label="Instagram"
                >
                  <InstagramGlyph className="h-[22px] w-[22px]" />
                </a>
              ) : null}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/95 text-green-600 shadow-matte-lg backdrop-blur-sm transition hover:scale-110 hover:text-green-500 ring-1 ring-slate-200/50"
                title="Message on WhatsApp"
                aria-label="WhatsApp"
              >
              </a>
            </div>

            {/* Floating Info Badge: 24h Service (Hidden on mobile) */}
            <div className="absolute bottom-4 left-4 z-20 hidden lg:block rounded-[2rem] bg-white p-4 shadow-matte-xl ring-1 ring-slate-200/50 sm:-bottom-6 sm:-left-6 sm:p-5">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner sm:h-12 sm:w-12 text-left">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 sm:text-[11px]">24 hour service</p>
                  <p className="text-sm font-bold text-slate-900 sm:text-[15px] whitespace-nowrap">{site.phoneDisplay}</p>
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

