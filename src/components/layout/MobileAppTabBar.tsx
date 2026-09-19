"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Sparkles,
  Layers,
  Calendar,
  PhoneCall,
} from "lucide-react";

export default function MobileAppTabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      label: "Home",
      href: "/",
      icon: Home,
      isActive: pathname === "/",
    },
    {
      label: "Services",
      href: "/services",
      icon: Layers,
      isActive: pathname.startsWith("/services"),
    },
    {
      label: "Laser",
      href: "/laser-hair-removal",
      icon: Sparkles,
      isActive: pathname === "/laser-hair-removal",
      badge: "Special",
    },
    {
      label: "Book",
      href: "/book",
      icon: Calendar,
      isActive: pathname === "/book",
      isPrimary: true,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: PhoneCall,
      isActive: pathname === "/contact",
    },
  ];

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-noir-950/95 backdrop-blur-xl border-t border-gold-500/25 px-2 py-1.5 pb-safe shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center justify-around">
        {tabs.map((tab) => {
          const Icon = tab.icon;

          if (tab.isPrimary) {
            return (
              <Link
                key={tab.label}
                href={tab.href}
                className="flex flex-col items-center justify-center -mt-5 relative group"
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-gold-500 via-gold-400 to-gold-300 text-noir-950 flex items-center justify-center shadow-luxury border-2 border-noir-950 active:scale-95 transition-transform">
                  <Icon className="w-5 h-5 text-noir-950" />
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 mt-1">
                  {tab.label}
                </span>
              </Link>
            );
          }

          return (
            <Link
              key={tab.label}
              href={tab.href}
              className={`flex flex-col items-center justify-center py-1 px-2 relative transition-all duration-200 active:scale-95 ${
                tab.isActive ? "text-gold-400" : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${tab.isActive ? "text-gold-400 scale-110" : "text-zinc-400"}`} />
                {tab.badge && (
                  <span className="absolute -top-1 -right-2 bg-gold-500 text-noir-950 text-[8px] font-extrabold px-1 rounded-full uppercase">
                    •
                  </span>
                )}
              </div>
              <span
                className={`text-[10px] font-medium tracking-tight mt-1 ${
                  tab.isActive ? "text-gold-400 font-bold" : "text-zinc-400"
                }`}
              >
                {tab.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
