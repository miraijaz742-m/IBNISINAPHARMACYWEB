import { inStoreHighlights } from "@/lib/site";
import { PackageOpen, Receipt, Search, Smile } from "lucide-react";

const icons = [PackageOpen, Receipt, Search, Smile] as const;

export function InStoreSection() {
  return (
    <section id="in-store" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Visit us</p>
        <h2 className="section-title">In-store experience</h2>
        <p className="section-intro">
          A tidy shop floor, clear signage, and staff who help you find what you need—without the rush.
        </p>
        <ul className="section-body grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {inStoreHighlights.map((t, i) => {
            const Icon = icons[i] ?? PackageOpen;
            return (
              <li key={t} className="flex">
                <div className="flex w-full flex-col items-center text-center sm:items-start sm:text-left p-6 sm:p-8 bg-white rounded-3xl shadow-matte-sm ring-1 ring-slate-200/50 hover:-translate-y-1 hover:shadow-matte-lg transition duration-300">
                  <span className="mb-4 sm:mb-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <p className="text-[16px] font-bold leading-snug text-slate-900">{t}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

