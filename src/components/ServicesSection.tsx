import { services } from "@/lib/site";

const ServiceIcons = [PillIcon, ClipboardIcon, ChatIcon, SparklesIcon, FirstAidIcon] as const;

export function ServicesSection() {
  return (
    <section id="services" className="scroll-mt-24 w-full bg-sky-50 py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">What we offer</p>
        <h2 className="section-title">Pharmacy services</h2>
        <p className="section-intro">
          In-store dispensing, counselling, and wellness essentials—focused on face-to-face care at the
          counter.
        </p>
        <ul className="section-body mx-auto max-w-3xl divide-y divide-sky-200/80">
          {services.map((s, i) => {
            const Icon = ServiceIcons[i];
            return (
              <li
                key={s}
                className="flex flex-col items-center gap-3 py-8 text-center first:pt-4 sm:flex-row sm:items-start sm:gap-5 sm:py-10 sm:text-left md:gap-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center text-sky-600" aria-hidden>
                  {Icon ? <Icon /> : null}
                </span>
                <p className="max-w-xl pt-0 text-lg font-semibold leading-snug text-slate-900 sm:pt-1 sm:text-xl">{s}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function PillIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function ClipboardIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
      />
    </svg>
  );
}

function SparklesIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function FirstAidIcon() {
  return (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v6m-3-3h6m6 3a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </svg>
  );
}
