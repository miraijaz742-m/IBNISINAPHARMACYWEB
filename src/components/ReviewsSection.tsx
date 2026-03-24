import { ReviewAvatar } from "@/components/ReviewAvatar";
import { reviews } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 w-full border-t border-sky-100 bg-sky-50 py-16 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">From our customers</p>
        <h2 className="section-title">Reviews</h2>
        <p className="section-intro">Short notes from neighbours who shop with us in store.</p>
        <ul className="section-body grid gap-10 sm:gap-12 md:grid-cols-3 md:gap-10 lg:gap-14">
          {reviews.map((r) => (
            <li key={r.author} className="motion-safe:animate-fade-up motion-reduce:animate-none">
              <article className="flex gap-4">
                <ReviewAvatar author={r.author} src={r.avatarSrc} />
                <div className="min-w-0 flex-1 pt-0.5">
                  <div className="mb-2.5 flex gap-0.5 text-amber-500" aria-hidden>
                    {"★★★★★".split("").map((star, i) => (
                      <span key={i} className="text-[15px] leading-none">
                        {star}
                      </span>
                    ))}
                  </div>
                  <blockquote className="text-[15px] leading-relaxed text-slate-700 sm:text-base">
                    &ldquo;{r.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-3 text-sm font-semibold text-sky-700">— {r.author}</footer>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
