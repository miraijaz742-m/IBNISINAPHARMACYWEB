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

const CROSSFADE_MS = 1000;
const SLIDE_INTERVAL_MS = 6000;

export function Hero() {
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
    <section className="relative overflow-hidden bg-[#F4F1FE] pb-20 pt-32 lg:pb-32 lg:pt-44">
      {/* Background soft glow / abstract shapes */}
      <div className="absolute left-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute right-[-5%] top-[20%] h-[400px] w-[400px] rounded-full bg-purple-400/10 blur-[100px]" />

      <div className="section-inner-wide relative">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-8">
          {/* Left: Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-matte-sm ring-1 ring-slate-200/60">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">#1</span>
              <span className="text-[13px] font-bold tracking-tight text-slate-600">Best Pharmacy in the Region</span>
            </div>

            <h1 className="mt-8 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              We bring professional <br className="hidden sm:block" />
              <span className="text-primary italic">pharmacy</span> support.
            </h1>

            <p className="mt-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {heroCopy.description} Delivering comprehensive healthcare support through our innovative 
              platform that seamlessly connects you to your medicines.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={availabilityHref}
                className="flex min-h-[60px] items-center justify-center rounded-full border border-primary bg-white px-8 text-[15px] font-bold text-primary shadow-matte-sm transition hover:bg-primary/5 active:scale-95 sm:min-w-[180px]"
              >
                Get Started Now
              </a>
              <a
                href={`tel:${site.phoneE164}`}
                className="flex min-h-[60px] items-center justify-center rounded-full bg-slate-900 px-8 text-[15px] font-bold text-white shadow-matte transition hover:bg-slate-800 active:scale-95 sm:min-w-[180px]"
              >
                Book Appointment
              </a>
            </div>

            {/* Doctors/Customers Stack Card */}
            <div className="mt-12 rounded-3xl bg-white p-6 shadow-matte-lg ring-1 ring-slate-200/50 sm:inline-flex sm:items-center sm:gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-12 w-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden relative">
                    <Image src={`https://i.pravatar.cc/150?u=${i}`} fill alt="" className="object-cover" />
                  </div>
                ))}
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white italic">
                  +
                </div>
              </div>
              <div className="mt-4 sm:mt-0">
                <p className="text-[15px] font-bold text-slate-900">More than 1,000+</p>
                <p className="text-[13px] font-medium text-slate-500">Experienced pharmacists & staff</p>
              </div>
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
                  style={{ opacity: active === i ? 1 : 0, zIndex: active === i ? 2 : 1 }}
                >
                  <Image
                    src={src}
                    alt={site.name}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              ))}
              
              {/* Image Gradient Overlay */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent z-10" />
            </div>

            {/* Floating Info Badge: Socials (Placeholder) */}
            <div className="absolute right-6 top-6 z-20 flex gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-matte-sm backdrop-blur-sm transition hover:scale-110">
                <span className="text-xs font-bold text-slate-900 italic">in</span>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 shadow-matte-sm backdrop-blur-sm transition hover:scale-110">
                <span className="text-xs font-bold text-slate-900 italic">ig</span>
              </div>
            </div>

            {/* Floating Info Badge: 24h Service */}
            <div className="absolute -bottom-6 -left-6 z-20 rounded-3xl bg-white p-5 shadow-matte-xl ring-1 ring-slate-200/50">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary shadow-inner">
                  <PhoneIcon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">24 hour service</p>
                  <p className="text-[15px] font-bold text-slate-900">{site.phoneDisplay}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.949.684V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}
