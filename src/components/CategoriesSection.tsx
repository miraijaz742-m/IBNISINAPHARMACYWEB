import { showcaseCategories } from "@/lib/site";
import { FlaskConical, Droplets, Baby, Pill, HeartPulse } from "lucide-react";

const icons = [FlaskConical, Droplets, Baby, Pill, HeartPulse] as const;
export function CategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Browse in store</p>
        <h2 className="section-title">Categories</h2>
        <p className="section-intro">
          Popular aisles we keep stocked—ask staff if you need a substitute or a specific brand.
        </p>
        <ul className="section-body grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-8">
          {showcaseCategories.map((c, i) => {
            const Icon = icons[i] ?? FlaskConical;
            return (
              <li key={c.id} id={c.id} className="scroll-mt-28">
                <div className="flex flex-col h-full rounded-3xl bg-white p-6 md:p-8 shadow-matte-sm ring-1 ring-slate-200/50 transition duration-300 hover:-translate-y-1 hover:shadow-matte-lg group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-colors group-hover:bg-primary/10 group-hover:text-primary" aria-hidden>
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold tracking-tight text-slate-900">{c.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.blurb}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

