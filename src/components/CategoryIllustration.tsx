/** Flat illustration per carousel card — HealKart-style */

export function CategoryIllustration({ variant }: { variant: string }) {
  return (
    <svg
      className="h-[6.5rem] w-full max-w-[128px] transition-transform duration-300 group-hover:scale-[1.03]"
      viewBox="0 0 120 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {variant === "beige" && (
        <>
          <rect x="18" y="38" width="22" height="44" rx="6" fill="#1A56B3" />
          <rect x="48" y="28" width="22" height="54" rx="6" fill="#2ECC71" />
          <rect x="78" y="44" width="22" height="38" rx="6" fill="#FFB4C4" />
          <path d="M24 22h72v8H24z" fill="#E3E9F2" opacity="0.9" />
        </>
      )}
      {variant === "mint" && (
        <>
          <rect x="28" y="30" width="64" height="40" rx="10" fill="#E8FFF6" />
          <rect x="38" y="40" width="44" height="8" rx="3" fill="#2ECC71" />
          <circle cx="60" cy="58" r="10" stroke="#1A56B3" strokeWidth="3" />
          <path d="M60 52v12M54 58h12" stroke="#1A56B3" strokeWidth="2" />
        </>
      )}
      {variant === "rose" && (
        <>
          <ellipse cx="60" cy="62" rx="28" ry="14" fill="#C8E6D5" />
          <path
            d="M60 28c-8 12-16 22-16 34h32c0-12-8-22-16-34z"
            fill="#2ECC71"
          />
          <circle cx="60" cy="26" r="6" fill="#FFB4C4" />
        </>
      )}
      {variant === "cream" && (
        <>
          <circle cx="60" cy="48" r="22" fill="#FFE8CC" />
          <path d="M52 44h16v20H52z" fill="#FF9F5A" opacity="0.85" />
          <ellipse cx="60" cy="78" rx="24" ry="8" fill="#E3E9F2" />
        </>
      )}
      {variant === "lavender" && (
        <>
          <rect x="22" y="36" width="20" height="36" rx="5" fill="#D9C8F5" />
          <rect x="50" y="30" width="20" height="42" rx="5" fill="#1A56B3" />
          <rect x="78" y="40" width="18" height="32" rx="5" fill="#2ECC71" />
        </>
      )}
    </svg>
  );
}
