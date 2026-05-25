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
      <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-white bg-sky-100">
        <Image
          src={src}
          alt={`${author}`}
          fill
          className="object-cover object-center scale-[1.25] transition-transform duration-500 hover:scale-[1.4]"
          sizes="56px"
          unoptimized
        />
      </div>
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
