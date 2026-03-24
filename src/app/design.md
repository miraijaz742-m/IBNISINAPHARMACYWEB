# Design spec — Ibni Sina Pharmacy (UI refresh)

**Project:** `IBNISINAPHARMACYWEB`  
**Scope:** Visual / layout only — **no copy or data changes** (all strings stay in `src/lib/site.ts` and existing components).  
**Initialized:** 2026-03-22  

| Related | Purpose |
|--------|---------|
| `implement2.md` | Medicine availability UX + WhatsApp flow |
| `follow_up.md` | Project follow-ups & deploy notes |

---

## Hard rules (from product owner)

- **Do not** add, remove, or rename sections.
- **Do not** change any text, numbers, addresses, phones, or list items — only how they are **presented**.
- **Do** treat this as a **single-page** layout refresh: spacing, typography, backgrounds, alignment.

---

## Target look

| Area | Direction |
|------|-----------|
| **Cards / chrome** | Remove boxed look: no card frames, heavy borders, or drop shadows on section content. |
| **Layout** | Full-width sections; use **padding + section background** to separate blocks. |
| **Hierarchy** | Large headings, clear body size, generous whitespace. |
| **Color** | **Sky blue** primary; **white** and **very light blue** section backgrounds; soft, healthcare-friendly (no harsh dark slabs). |
| **Style** | Flat UI — **no gradients**, **no heavy shadows**; minimal, professional. |
| **Motion** | Smooth scroll (already global); **subtle** enter/hover motion only if needed. |
| **Tech** | Tailwind + semantic HTML; **mobile-first** responsive. |

---

## Section map (implement against these — content unchanged)

Order matches `src/app/page.tsx`:

1. **Hero** — `Hero.tsx`  
2. **About** — `AboutSection.tsx`  
3. **Services** — `ServicesSection.tsx`  
4. **Categories** — `CategoriesSection.tsx`  
5. **Trust** — `TrustSection.tsx`  
6. **In-store** — `InStoreSection.tsx`  
7. **Reviews** — `ReviewsSection.tsx`  
8. **Availability** — `MedicineAvailabilitySection.tsx`  
9. **Gallery** — `GallerySection.tsx`  
10. **Contact** — `ContactSection.tsx`  
11. **Footer** — `SiteFooter.tsx`  

**Global chrome:** `Navbar.tsx`, `layout.tsx`, `globals.css`.

---

## Layout patterns to prefer

- **Full bleed** section wrappers (`w-full`) with inner `max-w-*` + horizontal padding for text.
- **Split rows** where it helps: text left / visual right (or stacked on small screens).
- **Lists:** icon + text **rows** or **columns** with `gap-*`, not bordered tiles.
- **Separation:** alternate `bg-white` / `bg-sky-50` (or similar) instead of boxes.

---

## Goal (completed sentence)

Transform the existing pharmacy website into a **modern, sky-blue themed, no-card, full-width** experience while keeping **every word and data field** exactly as today.

---

## Implementation checklist (for agents / devs)

- [x] Strip card/border/shadow utilities from section list UIs; replace with spacing + background bands.
- [x] Unify primary accent to sky palette (align with `tailwind.config` / CSS variables).
- [x] Audit `atm-card-face` and similar utilities — remove or replace where they conflict with “no boxes.”
- [x] Verify **no** string changes in `site.ts` or component copy.
- [x] Run `npm run build` (static export) before deploy.
