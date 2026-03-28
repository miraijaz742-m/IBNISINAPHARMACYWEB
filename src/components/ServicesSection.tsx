import { services } from "@/lib/site";
import { Pill, ClipboardList, MessageSquare, Sparkles, HeartPulse } from "lucide-react";

const ServiceIcons = [Pill, ClipboardList, MessageSquare, Sparkles, HeartPulse] as const;
export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 w-full bg-premium-light relative overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Background soft glow / abstract shapes */}
      <div className="absolute right-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="absolute left-[-5%] top-[40%] h-[300px] w-[300px] rounded-full bg-purple-400/10 blur-[80px]" />
      <div className="section-inner relative z-10">
        <p className="section-eyebrow">What we offer</p>
        <h2 className="section-title">Pharmacy services</h2>
        <p className="section-intro">
          In-store dispensing, counselling, and wellness essentials—focused on face-to-face care at the
          counter.
        </p>
        <ul className="section-body mx-auto max-w-5xl grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = ServiceIcons[i];
            return (
              <li
                key={s}
                className="flex flex-col items-center gap-4 rounded-3xl bg-white p-6 md:p-8 shadow-matte-lg ring-1 ring-slate-200/50 sm:items-start text-center sm:text-left transition hover:-translate-y-1 hover:shadow-matte-xl"
              >
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary" aria-hidden>
                  {Icon ? <Icon className="h-7 w-7" strokeWidth={1.5} /> : null}
                </span>
                <p className="text-lg font-bold leading-snug text-slate-900">{s}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

