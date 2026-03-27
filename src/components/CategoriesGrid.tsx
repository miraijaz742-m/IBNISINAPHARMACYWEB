import { carouselCategories } from "@/lib/site";
import { CategoryIllustration } from "@/components/CategoryIllustration";

const tintClass: Record<
  (typeof carouselCategories)[number]["tint"],
  string
> = {
  beige: "from-[#faf6ef] to-[#f0e8d8]",
  mint: "from-[#f0faf6] to-[#dff5ea]",
  rose: "from-[#fff8fa] to-[#ffe8f0]",
  cream: "from-[#fffdf8] to-[#fff3dc]",
  lavender: "from-[#faf8ff] to-[#ede8ff]",
};

const ringTint: Record<
  (typeof carouselCategories)[number]["tint"],
  string
> = {
  beige: "hover:ring-amber-200/80",
  mint: "hover:ring-emerald-200/80",
  rose: "hover:ring-pink-200/80",
  cream: "hover:ring-orange-200/80",
  lavender: "hover:ring-violet-200/80",
};

export function CategoriesGrid() {
  return (
    <section
      id="categories"
      className="scroll-mt-24 border-t border-slate-200/50 bg-paper py-14 md:py-20"
    >
      <div className="mx-auto max-w-6xl page-px">
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-slate-500">Browse</p>
          <h2 className="font-display mt-2 text-3xl font-semibold tracking-[-0.02em] text-ink md:text-[2rem]">
            Medicines &amp; care by category
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            From daily medicines to devices and wellness—scroll sideways on your phone to explore
            sections.
          </p>
        </div>

        {/* Carousel + edge fade */}
        <div className="relative mt-10 -mx-4 px-4 sm:mx-0 sm:px-0">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-slate-50/90 to-transparent sm:w-12"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-white to-transparent sm:w-12"
            aria-hidden
          />

          <div className="categories-scroll flex snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-visible pb-3 pl-1 pr-1 pt-2">
            {carouselCategories.map((c) => (
              <article
                key={c.slug}
                id={`cat-${c.slug}`}
                className={`group relative flex w-[min(100%,268px)] shrink-0 snap-start flex-col overflow-hidden rounded-[1.35rem] border border-slate-200/55 bg-gradient-to-b p-6 shadow-matte ring-1 ring-slate-900/[0.04] transition duration-300 hover:-translate-y-0.5 hover:shadow-matte-lg hover:ring-slate-900/[0.06] ${tintClass[c.tint]} ${ringTint[c.tint]}`}
              >
                <div className="relative z-[1]">
                  <h3 className="text-[1.05rem] font-bold leading-snug text-slate-900">
                    {c.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-snug text-slate-600">
                    {c.blurb}
                  </p>
                </div>

                <div className="relative z-[1] mt-5 flex min-h-[132px] flex-1 items-center justify-center rounded-2xl bg-white/82 p-5 shadow-[inset_0_1px_0_rgb(255_255_255_/_0.65)] ring-1 ring-slate-200/50 backdrop-blur-[1px] transition group-hover:bg-white/90">
                  <CategoryIllustration variant={c.tint} />
                </div>

                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary opacity-90 transition group-hover:gap-2">
                  View products
                  <span aria-hidden className="inline-block transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
