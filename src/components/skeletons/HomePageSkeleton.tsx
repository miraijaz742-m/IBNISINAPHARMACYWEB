import { Skeleton, SkeletonHeading, SkeletonLines } from "@/components/ui/Skeleton";

/**
 * Mirrors home page sections for route-level loading (app/loading.tsx).
 */
export function HomePageSkeleton() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero — no card; content over gradient */}
        <section className="w-full bg-sky-950">
          <div className="relative min-h-[min(82svh,860px)] w-full bg-slate-400 sm:min-h-[min(86svh,920px)]">
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(58%,520px)] bg-gradient-to-t from-slate-900/90 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex flex-col items-center px-4 pb-6 sm:px-5 md:px-6 lg:px-8">
              <div className="mb-3 flex gap-2">
                <Skeleton className="h-2 w-2 rounded-full !bg-white/40" />
                <Skeleton className="h-2 w-8 rounded-full !bg-white/50" />
                <Skeleton className="h-2 w-2 rounded-full !bg-white/40" />
              </div>
              <div className="w-full max-w-4xl px-2 py-4 sm:px-4 sm:py-6 md:py-8">
                <div className="mx-auto max-w-3xl text-center">
                  <Skeleton className="mx-auto h-7 w-48 rounded-full !bg-white/25" />
                  <Skeleton className="mx-auto mt-6 h-12 w-full max-w-lg !bg-white/35" />
                  <Skeleton className="mx-auto mt-4 h-4 w-full max-w-xl !bg-white/25" />
                  <Skeleton className="mx-auto mt-2 h-4 w-[85%] max-w-lg !bg-white/20" />
                  <div className="mx-auto mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    <Skeleton className="h-[3.25rem] w-full rounded-full !bg-white/30" />
                    <Skeleton className="h-[3.25rem] w-full rounded-full !bg-white/30" />
                    <Skeleton className="h-[3.25rem] w-full rounded-full !bg-white/30" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px text-center">
            <SkeletonHeading className="mx-auto w-72" />
            <SkeletonLines lines={3} className="mx-auto mt-6 max-w-3xl" />
          </div>
        </section>

        {/* Services — list rows */}
        <section className="bg-sky-50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-56" />
            <Skeleton className="mx-auto mt-3 h-4 w-80 max-w-full rounded" />
            <ul className="mx-auto mt-12 max-w-3xl divide-y divide-sky-200/80">
              {Array.from({ length: 5 }).map((_, i) => (
                <li key={i} className="flex gap-5 py-8 first:pt-4">
                  <Skeleton className="h-11 w-11 shrink-0 rounded-full" />
                  <Skeleton className="mt-2 h-6 flex-1 rounded" />
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Categories */}
        <section className="border-t border-sky-100 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-48" />
            <Skeleton className="mx-auto mt-3 h-4 w-72 max-w-full rounded" />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="space-y-3">
                  <Skeleton className="h-10 w-10 rounded" />
                  <Skeleton className="h-5 w-4/5 rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                  <Skeleton className="h-3 w-full rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Trust */}
        <section className="border-t border-sky-200/80 bg-sky-100 py-20 md:py-24">
          <div className="mx-auto max-w-7xl page-px">
            <Skeleton className="mx-auto h-3 w-48 max-w-full rounded-full" />
            <Skeleton className="mx-auto mt-4 h-9 w-72 max-w-full rounded-lg" />
            <Skeleton className="mx-auto mt-4 h-4 w-full max-w-2xl rounded" />
            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-10 w-10 shrink-0 rounded" />
                  <Skeleton className="mt-1 h-14 flex-1 rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* In-store */}
        <section className="border-t border-sky-100 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-64" />
            <Skeleton className="mx-auto mt-3 h-4 w-80 max-w-full rounded" />
            <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-10 w-10 rounded" />
                  <Skeleton className="h-5 w-full rounded" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="border-t border-sky-100 bg-sky-50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-72" />
            <Skeleton className="mx-auto mt-3 h-4 w-64 rounded" />
            <div className="mt-12 grid gap-12 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-4">
                  <Skeleton className="h-14 w-14 shrink-0 rounded-full" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-3 w-24 rounded" />
                    <Skeleton className="h-3 w-full rounded" />
                    <Skeleton className="h-3 w-full rounded" />
                    <Skeleton className="h-3 w-32 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Medicine availability */}
        <section className="border-y border-sky-100 bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-80" />
            <Skeleton className="mx-auto mt-3 h-4 w-full max-w-xl rounded" />
            <div className="mx-auto mt-10 max-w-2xl space-y-3">
              <Skeleton className="h-12 w-full rounded-md" />
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-12 min-w-[8rem] flex-1 rounded-md" />
                <Skeleton className="h-12 w-24 rounded-md" />
                <Skeleton className="h-12 w-32 rounded-md" />
              </div>
              <Skeleton className="h-11 w-36 rounded-md" />
              <Skeleton className="h-24 w-full rounded-md" />
              <Skeleton className="h-12 w-full rounded-md" />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-sky-50 py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-40" />
            <Skeleton className="mx-auto mt-3 h-4 w-72 max-w-full rounded" />
            <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-3.5 md:grid-cols-3 md:gap-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] w-full rounded-md" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-20 md:py-24">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-80" />
            <Skeleton className="mx-auto mt-3 h-4 w-96 max-w-full rounded" />
            <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <SkeletonLines lines={2} />
                <SkeletonLines lines={2} />
                <SkeletonLines lines={2} />
                <div className="flex flex-wrap gap-3">
                  <Skeleton className="h-10 w-44 rounded-md" />
                  <Skeleton className="h-10 w-40 rounded-md" />
                </div>
              </div>
              <Skeleton className="aspect-[4/3] w-full min-h-[280px] rounded-none" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-sky-700/30 bg-sky-800">
        <div className="mx-auto max-w-6xl page-px py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="w-full max-w-sm space-y-3">
              <Skeleton className="h-6 w-48 rounded bg-white/25" />
              <Skeleton className="h-4 w-full rounded bg-white/20" />
              <Skeleton className="h-4 w-3/4 rounded bg-white/15" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-40 rounded bg-white/20" />
              <Skeleton className="h-4 w-56 rounded bg-white/20" />
            </div>
          </div>
          <Skeleton className="mx-auto mt-10 h-4 w-64 rounded bg-white/15" />
        </div>
      </footer>
    </>
  );
}
