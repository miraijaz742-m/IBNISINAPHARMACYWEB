# IBNISINAPHARMACYWEB

Ibni Sina Pharmacy — portfolio site

Next.js 15 (App Router) + TypeScript + Tailwind CSS. Pharmacy landing page; store copy is centred in `src/lib/site.ts` (Beerwah, Budgam, J&K).

## Scripts

| Command        | Action              |
| -------------- | ------------------- |
| `npm install`  | Install dependencies |
| `npm run dev`  | Dev server with **Turbopack** (faster; avoids many Webpack HMR issues) |
| `npm run dev:webpack` | Dev with classic Webpack if you need it |
| `npm run build`| Production build    |
| `npm run start`| Run production server |

## Content

Edit copy and dummy data in `src/lib/site.ts`.

## Stack

- **Next.js 15** — routing, `next/image`, metadata
- **Tailwind CSS** — ocean blue palette (`#1E88E5` primary, `#1565C0` secondary)
- **System UI font stack** — no runtime Google Fonts fetch (reliable offline builds)

Prescription upload and cart actions are **frontend-only** demos.

### Dev error `__webpack_modules__[moduleId] is not a function`

1. Stop the dev server, delete the `.next` folder, then run `npm run dev` again (uses Turbopack by default).
2. If it persists, try `npm run dev:webpack` after clearing `.next`.
