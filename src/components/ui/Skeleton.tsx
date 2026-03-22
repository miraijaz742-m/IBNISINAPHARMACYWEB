import type { HTMLAttributes } from "react";

type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "span";
  /** default: light gray; dark: footer / dark surfaces */
  variant?: "default" | "dark";
};

const variantClass = {
  default: "bg-slate-200/90",
  dark: "bg-slate-700",
} as const;

/**
 * Base pulse skeleton — use for any block or combine for layouts.
 */
export function Skeleton({
  className = "",
  variant = "default",
  as: Tag = "div",
  ...rest
}: SkeletonProps) {
  return (
    <Tag
      className={`animate-pulse rounded-md ${variantClass[variant]} ${className}`}
      {...rest}
    />
  );
}

/** Rounded pill */
export function SkeletonPill({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-9 rounded-full ${className}`} />;
}

/** Heading block */
export function SkeletonHeading({ className = "" }: { className?: string }) {
  return <Skeleton className={`h-8 w-48 max-w-full rounded-lg md:h-9 ${className}`} />;
}

/** Paragraph lines */
export function SkeletonLines({
  lines = 3,
  className = "",
}: {
  lines?: number;
  className?: string;
}) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 rounded ${i === lines - 1 ? "w-4/5" : "w-full"}`}
        />
      ))}
    </div>
  );
}

/** Card with optional image area */
export function SkeletonCard({
  withImage,
  className = "",
}: {
  withImage?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-100 bg-white p-5 shadow-sm ${className}`}
    >
      {withImage && <Skeleton className="mb-4 h-36 w-full rounded-xl" />}
      <Skeleton className="h-5 w-3/5 rounded" />
      <Skeleton className="mt-2 h-3 w-full rounded" />
      <Skeleton className="mt-2 h-3 w-2/3 rounded" />
    </div>
  );
}
