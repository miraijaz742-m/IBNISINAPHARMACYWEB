import { availabilityHref, featuredProducts } from "@/lib/site";

export function FeaturedProducts() {
  return (
    <section id="featured" className="scroll-mt-24 bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl page-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          In-store &amp; on request
        </p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight text-ink md:text-4xl">
          Popular medicines &amp; essentials
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-center text-slate-600">
          Indicative prices—confirm availability and substitutes on WhatsApp or at the counter.
        </p>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProducts.map((p) => (
            <li
              key={p.name}
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-200/75 bg-paper shadow-matte-sm transition hover:border-primary/22 hover:shadow-matte"
            >
              <div className="h-1.5 bg-gradient-to-r from-primary via-primary to-secondary" />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-bold text-ink">{p.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{p.unit}</p>
                <p className="mt-4 text-2xl font-bold text-primary">{p.price}</p>
                <a
                  href={availabilityHref}
                  className="mt-5 inline-flex w-full items-center justify-center rounded-full border border-primary/40 bg-white py-2.5 text-sm font-bold text-secondary transition hover:bg-primary hover:text-white"
                >
                  Check availability
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
