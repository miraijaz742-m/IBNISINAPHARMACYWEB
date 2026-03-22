import Image from "next/image";
import { reviews } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 border-t border-slate-100 bg-paper section-y">
      <div className="section-inner">
        <p className="section-eyebrow">From our customers</p>
        <h2 className="section-title">Reviews</h2>
        <p className="section-intro">Short notes from neighbours who shop with us in store.</p>
        <ul className="section-body grid gap-4 md:grid-cols-3 md:gap-6 lg:gap-8">
          {reviews.map((r) => (
            <li
              key={r.author}
              className="animate-fade-up rounded-2xl border border-slate-200/80 bg-white/90 card-pad shadow-card backdrop-blur-sm transition hover:shadow-lift"
            >
              <div className="flex gap-4">
                <Image
                  src={r.avatarSrc}
                  alt={`${r.author} — customer review`}
                  width={56}
                  height={56}
                  className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-2 ring-sky-200 bg-sky-50"
                  sizes="56px"
                />
                <div className="min-w-0 flex-1">
                  <div className="mb-3 flex gap-0.5 text-amber-400" aria-hidden>
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[15px] leading-none">
                        {star}
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-3 text-sm font-semibold text-primary">— {r.author}</footer>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
