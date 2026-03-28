import { trustItems } from "@/lib/site";
import { ShieldCheck, Tag, Users, Zap } from "lucide-react";

const icons = [ShieldCheck, Tag, Users, Zap] as const;
export function TrustSection() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="scroll-mt-24 w-full bg-premium-light py-20 md:py-24 lg:py-28"
    >
      <div className="section-inner-wide">
        <header className="mx-auto max-w-3xl px-0 text-center">
          <p className="section-eyebrow">Why choose us</p>
          <h2 id="trust-heading" className="section-title">
            Care you can trust
          </h2>
          <p className="section-intro">
            Licensed retail pharmacy with transparent pricing and products sourced through authorised
            channels—here to support walk-in patients every day.
          </p>
        </header>

        <ul className="section-body grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {trustItems.map((t, i) => {
            const Icon = icons[i] ?? ShieldCheck;
            return (
              <li key={t} className="flex">
                <div className="flex w-full flex-col items-center text-center sm:items-start sm:text-left p-6 sm:p-8 bg-white rounded-3xl shadow-matte-sm ring-1 ring-slate-200/50 hover:-translate-y-1 hover:shadow-matte-lg transition duration-300">
                  <span className="mb-4 sm:mb-6 flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                    <Icon className="h-7 w-7" strokeWidth={1.5} />
                  </span>
                  <p className="text-[17px] font-bold leading-snug text-slate-900">
                    {t}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

