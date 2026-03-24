import Image from "next/image";

function initialsFromName(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

type Props = {
  author: string;
  /** Local file only, e.g. `/reviews/aamir.jpg` — omit to show initials */
  src?: string;
};

/**
 * Review face — optional local photo; otherwise crisp initials (no external fetch).
 */
export function ReviewAvatar({ author, src }: Props) {
  const initials = initialsFromName(author);

  if (src?.startsWith("/")) {
    return (
      <Image
        src={src}
        alt={`${author}`}
        width={56}
        height={56}
        className="h-14 w-14 shrink-0 rounded-full object-cover object-center ring-2 ring-white bg-sky-100"
        sizes="56px"
        unoptimized
      />
    );
  }

  return (
    <div
      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-sky-200 text-[0.9375rem] font-bold tabular-nums tracking-tight text-sky-950 ring-2 ring-white select-none"
      aria-hidden
    >
      {initials}
    </div>
  );
}
