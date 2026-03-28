import { ReviewAvatar } from "@/components/ReviewAvatar";
import { reviews } from "@/lib/site";

export function ReviewsSection() {
  return (
    <section id="reviews" className="scroll-mt-24 w-full bg-premium-light relative overflow-hidden py-16 md:py-24 lg:py-28">
      {/* Background soft glow / abstract shapes */}
      <div className="absolute right-[5%] top-[10%] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[100px]" />
      <div className="section-inner relative z-10">
        <p className="section-eyebrow">From our customers</p>
        <h2 className="section-title">Reviews</h2>
        <p className="section-intro">Short notes from neighbours who shop with us in store.</p>
        <ul className="section-body grid gap-6 sm:gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <li key={r.author} className="motion-safe:animate-fade-up motion-reduce:animate-none">
              <article className="flex h-full flex-col gap-4 rounded-3xl bg-white p-6 md:p-8 shadow-matte-sm ring-1 ring-slate-200/50 hover:-translate-y-1 hover:shadow-matte-lg transition duration-300">
                <div className="flex items-center gap-4">
                  <ReviewAvatar author={r.author} src={r.avatarSrc} />
                  <div>
                    <footer className="text-[15px] font-bold text-slate-900">{r.author}</footer>
                    <div className="mt-0.5 flex gap-0.5 text-amber-500" aria-hidden>
                      {"★★★★★".split("").map((star, i) => (
                        <span key={i} className="text-[13px] leading-none">
                          {star}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="mt-2 text-[15px] leading-relaxed text-slate-600 sm:text-base flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
