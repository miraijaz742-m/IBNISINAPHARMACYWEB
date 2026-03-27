"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { availabilityHref, site } from "@/lib/site";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      ),
    },
    {
      label: "Call",
      href: `tel:${site.phoneE164}`,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      ),
    },
    {
      label: "Stock",
      href: availabilityHref,
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .415.162.798.425 1.081.263.283.646.445 1.06.445.415 0 .798-.162 1.081-.445.283-.283.445-.666.445-1.06 0-.231-.035-.454-.1-.664m-5.801 0A48.585 48.585 0 016.246 4.096c-1.13.094-1.976 1.057-1.976 2.192v12.723a2.25 2.25 0 002.25 2.25h1.35m11.31 0h.45m-3 0h-1.125" />
        </svg>
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-white/80 backdrop-blur-lg border-t border-slate-200 lg:hidden pb-[env(safe-area-inset-bottom,0px)]">
      <nav className="flex items-center justify-around h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          const isExternal = item.href.startsWith("tel:") || item.href.startsWith("#");
          const Tag = isExternal ? "a" : Link;
          
          return (
            <Tag
              key={item.label}
              href={item.href}
              className={`flex flex-col items-center justify-center w-full h-full gap-1 transition-colors ${
                isActive ? "text-primary" : "text-slate-500 active:text-primary"
              }`}
            >
              <div className={`transition-transform duration-200 ${isActive ? "scale-110" : "scale-100"}`}>
                {item.icon}
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
            </Tag>
          );
        })}
      </nav>
    </div>
  );
}
