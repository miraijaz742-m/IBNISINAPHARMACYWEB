"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Phone, ClipboardList, MapPin } from "lucide-react";
import { availabilityHref, site } from "@/lib/site";

export function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    {
      label: "Home",
      href: "/",
      icon: (
        <Home className="h-6 w-6" strokeWidth={1.5} />
      ),
    },
    {
      label: "Call",
      href: `tel:${site.phoneE164}`,
      icon: (
        <Phone className="h-6 w-6" strokeWidth={1.5} />
      ),
    },
    {
      label: "Stock",
      href: availabilityHref,
      icon: (
        <ClipboardList className="h-6 w-6" strokeWidth={1.5} />
      ),
    },
    {
      label: "Contact",
      href: "#contact",
      icon: (
        <MapPin className="h-6 w-6" strokeWidth={1.5} />
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
