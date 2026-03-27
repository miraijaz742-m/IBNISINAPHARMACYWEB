"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useState } from "react";

export type GalleryImageItem = {
  readonly src: string;
  readonly alt: string;
};

type Props = {
  images: readonly GalleryImageItem[];
};

/**
 * Responsive image grid; tap opens a full-screen style lightbox with prev/next.
 */
export function GalleryGrid({ images }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const titleId = useId();

  const close = useCallback(() => setOpenIndex(null), []);

  const goPrev = useCallback(() => {
    setOpenIndex((i) => (i === null || i <= 0 ? i : i - 1));
  }, []);

  const goNext = useCallback(() => {
    setOpenIndex((i) => (i === null || i >= images.length - 1 ? i : i + 1));
  }, [images.length]);

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, goPrev, goNext]);

  if (images.length === 0) return null;

  const active = openIndex !== null ? images[openIndex] : null;

  return (
    <>
      <ul className="section-body grid grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-3 md:gap-4">
        {images.map((img, i) => (
          <li key={img.src} className="min-w-0">
            <button
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group relative aspect-[4/3] w-full cursor-zoom-in overflow-hidden rounded-md bg-slate-100 text-left ring-0 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
              aria-label={`View larger: ${img.alt}`}
            >
              <Image
                src={img.src}
                alt=""
                fill
                className="object-cover transition duration-300 ease-out motion-safe:group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/55 to-transparent px-2 py-2 pt-8">
                <span className="line-clamp-2 text-[11px] font-medium leading-snug text-white/95 sm:text-xs">
                  {img.alt}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {active && openIndex !== null ? (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center px-4 pb-[max(1.25rem,env(safe-area-inset-bottom,0px))] pt-[max(3.25rem,env(safe-area-inset-top,0px))] sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
        >
          <button
            type="button"
            className="absolute inset-0 bg-slate-950/88 backdrop-blur-sm"
            aria-label="Close gallery"
            onClick={close}
          />

          <div className="relative z-10 flex w-full max-w-6xl flex-col items-center justify-center gap-3">
            <p id={titleId} className="sr-only">
              {active.alt}
            </p>

            <div className="relative h-[min(85vh,900px)] w-full max-w-5xl shrink-0">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                className="object-contain object-center drop-shadow-[0_20px_40px_rgb(0_0_0_/_0.2)]"
                sizes="(max-width: 1024px) 100vw, 1024px"
                priority
              />
            </div>

            <p className="relative z-10 max-w-2xl text-center text-sm font-medium text-white/90 sm:text-base">
              {active.alt}
            </p>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={goPrev}
                disabled={openIndex <= 0}
                className="rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-35"
                aria-label="Previous image"
              >
                Previous
              </button>
              <span className="px-2 text-sm tabular-nums text-white/70">
                {openIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={goNext}
                disabled={openIndex >= images.length - 1}
                className="rounded-lg border border-white/25 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20 disabled:pointer-events-none disabled:opacity-35"
                aria-label="Next image"
              >
                Next
              </button>
            </div>
          </div>

          <button
            type="button"
            onClick={close}
            className="absolute right-[max(0.75rem,env(safe-area-inset-right,0px))] top-[max(0.75rem,env(safe-area-inset-top,0px))] z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:bg-white/20 sm:right-5 sm:top-5"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>
      ) : null}
    </>
  );
}

function CloseIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}
