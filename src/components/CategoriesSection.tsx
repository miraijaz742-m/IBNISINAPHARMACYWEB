import { showcaseCategories } from "@/lib/site";

const icons = [VitaminIcon, DropletIcon, BabyIcon, PillOtcIcon, HeartPulseIcon] as const;

export function CategoriesSection() {
  return (
    <section id="categories" className="scroll-mt-24 w-full bg-white py-20 md:py-24 lg:py-28">
      <div className="section-inner">
        <p className="section-eyebrow">Browse in store</p>
        <h2 className="section-title">Categories</h2>
        <p className="section-intro">
          Popular aisles we keep stocked—ask staff if you need a substitute or a specific brand.
        </p>
        <ul className="section-body grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-12">
          {showcaseCategories.map((c, i) => {
            const Icon = icons[i] ?? VitaminIcon;
            return (
              <li key={c.id} id={c.id} className="scroll-mt-28">
                <div className="flex h-10 w-10 items-center text-sky-600" aria-hidden>
                  <Icon />
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-600">{c.blurb}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function VitaminIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
      />
    </svg>
  );
}

function DropletIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 3c4 6 8 9 8 13a8 8 0 11-16 0c0-4 4-7 8-13z"
      />
    </svg>
  );
}

function BabyIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M12 11a4 4 0 100-8 4 4 0 000 8zM6 20v-1a4 4 0 014-4h4a4 4 0 014 4v1"
      />
    </svg>
  );
}

function PillOtcIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
      />
    </svg>
  );
}

function HeartPulseIcon() {
  return (
    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.75}
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  );
}
