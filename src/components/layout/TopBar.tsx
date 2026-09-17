"use client";

import React from "react";
import Link from "next/link";
import { Phone, MapPin, Clock, Sparkles } from "lucide-react";
import { SITE_INFO } from "@/data/siteContent";

export default function TopBar() {
  return (
    <div className="bg-noir-950 text-white/80 border-b border-white/10 text-xs py-2 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
        {/* Left: Hiring Announcement / Tagline */}
        <div className="flex items-center gap-2 text-center md:text-left">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] uppercase font-semibold tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
            <Sparkles className="w-3 h-3 text-gold-400 animate-pulse" />
            We&apos;re Hiring
          </span>
          <span className="text-zinc-300 hidden sm:inline">Salon Manager &amp; Senior Stylists</span>
          <span className="text-zinc-400 text-[11px] hidden lg:inline">— Join Glam &amp; Go Today</span>
        </div>

        {/* Right: Phone, Location, Hours */}
        <div className="flex items-center flex-wrap justify-center gap-4 sm:gap-6 text-zinc-300">
          <a
            href={`tel:${SITE_INFO.phonePrimaryClean}`}
            className="flex items-center gap-1.5 hover:text-gold-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>{SITE_INFO.phonePrimary}</span>
          </a>

          <div className="hidden sm:flex items-center gap-1.5 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-gold-400" />
            <span>{SITE_INFO.shortAddress}</span>
          </div>

          <div className="hidden xl:flex items-center gap-1.5 text-zinc-400">
            <Clock className="w-3.5 h-3.5 text-gold-400" />
            <span>{SITE_INFO.openingHours}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
