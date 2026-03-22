import {
  Skeleton,
  SkeletonCard,
  SkeletonHeading,
  SkeletonLines,
  SkeletonPill,
} from "@/components/ui/Skeleton";

/**
 * Mirrors home page sections for route-level loading (app/loading.tsx).
 */
export function HomePageSkeleton() {
  return (
    <>
      <main className="min-h-screen">
        {/* Hero */}
        <section className="w-full bg-paper page-px pb-6 pt-4 md:pb-8 md:pt-6">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-2xl bg-slate-300 md:rounded-3xl">
            <div className="h-[min(88svh,920px)] w-full md:h-[min(80vh,900px)]" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <Skeleton className="mx-auto h-4 w-40 !bg-white/40 md:mx-0" />
              <Skeleton className="mx-auto mt-3 h-10 w-full max-w-md !bg-white/45 md:mx-0" />
              <Skeleton className="mx-auto mt-3 h-4 w-full max-w-lg !bg-white/35 md:mx-0" />
              <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
                <Skeleton className="h-11 w-28 rounded-xl !bg-white/40" />
                <Skeleton className="h-11 w-24 rounded-xl !bg-white/35" />
                <Skeleton className="h-11 w-36 rounded-xl !bg-white/35" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl page-px text-center">
            <SkeletonHeading className="mx-auto w-72" />
            <SkeletonLines lines={3} className="mx-auto mt-6 max-w-3xl" />
          </div>
        </section>

        {/* Services */}
        <section className="bg-surface py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-56" />
            <Skeleton className="mx-auto mt-3 h-4 w-80 max-w-full rounded" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonCard key={i} withImage={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-t border-slate-100 bg-white py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-48" />
            <Skeleton className="mx-auto mt-3 h-4 w-72 max-w-full rounded" />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <SkeletonCard key={i} withImage={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Trust — brand band */}
        <section className="border-t border-primary-hover/30 bg-primary py-20 md:py-24">
          <div className="mx-auto max-w-7xl page-px">
            <Skeleton className="mx-auto h-3 w-48 max-w-full rounded-full !bg-white/35" />
            <Skeleton className="mx-auto mt-4 h-9 w-72 max-w-full rounded-lg !bg-white/40" />
            <Skeleton className="mx-auto mt-4 h-4 w-full max-w-2xl rounded !bg-white/30" />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
              {Array.from({ length: 4 }).map((_, i) => (
                <Skeleton
                  key={i}
                  className="h-[5.5rem] w-full rounded-2xl border border-white/25 !bg-white/20"
                />
              ))}
            </div>
          </div>
        </section>

        {/* In-store */}
        <section className="border-t border-slate-100 bg-surface py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-64" />
            <Skeleton className="mx-auto mt-3 h-4 w-80 max-w-full rounded" />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <SkeletonCard key={i} withImage={false} />
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-72" />
            <Skeleton className="mx-auto mt-3 h-4 w-64 rounded" />
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Medicine availability */}
        <section className="border-y border-slate-100 bg-surface py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-80" />
            <Skeleton className="mx-auto mt-3 h-4 w-full max-w-xl rounded" />
            <div className="mx-auto mt-10 max-w-2xl space-y-3">
              <Skeleton className="h-12 w-full rounded-xl" />
              <div className="flex flex-wrap gap-3">
                <Skeleton className="h-12 min-w-[8rem] flex-1 rounded-xl" />
                <Skeleton className="h-12 w-24 rounded-xl" />
                <Skeleton className="h-12 w-32 rounded-xl" />
              </div>
              <Skeleton className="h-11 w-36 rounded-xl" />
              <Skeleton className="h-24 w-full rounded-xl" />
              <Skeleton className="h-12 w-full rounded-xl" />
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-40" />
            <Skeleton className="mx-auto mt-3 h-4 w-72 max-w-full rounded" />
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 3 }).map((_, i) => (
                <Skeleton key={i} className="aspect-[4/3] w-full rounded-2xl" />
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="bg-white py-16">
          <div className="mx-auto max-w-6xl page-px">
            <SkeletonHeading className="mx-auto w-80" />
            <Skeleton className="mx-auto mt-3 h-4 w-96 max-w-full rounded" />
            <div className="mt-12 grid gap-10 lg:grid-cols-2">
              <div className="space-y-6 rounded-3xl border border-slate-100 bg-surface p-8">
                <SkeletonLines lines={2} />
                <SkeletonLines lines={2} />
                <SkeletonLines lines={2} />
                <SkeletonPill className="h-10 w-40" />
              </div>
              <Skeleton className="aspect-[4/3] w-full min-h-[280px] rounded-3xl" />
            </div>
          </div>
        </section>
      </main>

      {/* Footer skeleton */}
      <footer className="border-t border-primary-hover/40 bg-primary">
        <div className="mx-auto max-w-6xl page-px py-12">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="w-full max-w-sm space-y-3">
              <Skeleton className="h-6 w-48 rounded !bg-white/40" />
              <Skeleton className="h-4 w-full rounded !bg-white/30" />
              <Skeleton className="h-4 w-3/4 rounded !bg-white/25" />
            </div>
            <div className="flex flex-col gap-3">
              <Skeleton className="h-4 w-40 rounded !bg-white/30" />
              <Skeleton className="h-4 w-56 rounded !bg-white/30" />
            </div>
          </div>
          <Skeleton className="mx-auto mt-10 h-4 w-64 rounded !bg-white/25" />
        </div>
      </footer>
    </>
  );
}
