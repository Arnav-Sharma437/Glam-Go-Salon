import React from "react";
import Image from "next/image";
import {
  Phone,
  MapPin,
  Clock,
  Mail,
  Calendar,
  Sparkles,
  Instagram,
  Facebook,
  MessageCircle,
} from "lucide-react";
import { SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";
import { MAINTENANCE_CONFIG } from "@/data/maintenanceConfig";

export default function MaintenanceScreen() {
  return (
    <div className="min-h-screen bg-noir-950 text-white flex flex-col justify-between relative overflow-hidden selection:bg-gold-500 selection:text-noir-950">
      {/* Ambient background glow effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-gold-500/15 via-gold-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gold-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-gold-400/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header / Brand */}
      <header className="relative z-10 w-full pt-8 pb-4 px-4 sm:px-8 border-b border-gold-500/10 bg-noir-950/40 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-gold-500/40 shadow-lg">
              <Image
                src="/images/logo/logo-square.jpg"
                alt="Glam & Go London"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 block">
                GLAM &amp; GO
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-[0.25em] text-zinc-400 block">
                London Salon
              </span>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${SITE_INFO.phonePrimaryClean}`}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gold-400 hover:text-gold-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>{SITE_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="max-w-3xl w-full mx-auto text-center space-y-8">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold animate-pulse">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>{MAINTENANCE_CONFIG.title}</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white tracking-tight leading-[1.15]">
              {MAINTENANCE_CONFIG.headline}
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed font-light">
              {MAINTENANCE_CONFIG.message}
            </p>
          </div>

          {/* Primary Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <a
              href={BOOKING_LINKS.salonFresha}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-noir-950 font-semibold text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(197,153,86,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <Calendar className="w-4 h-4" />
              <span>Book on Fresha</span>
            </a>

            <a
              href={`tel:${SITE_INFO.phonePrimaryClean}`}
              className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-noir-900 border border-gold-500/40 text-gold-400 font-semibold text-sm tracking-wider uppercase hover:bg-gold-500/10 hover:border-gold-400 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              <span>Call Salon</span>
            </a>
          </div>

          {/* Contact & Location Cards */}
          <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            {/* Location */}
            <div className="p-4 rounded-2xl bg-noir-900/60 border border-white/5 backdrop-blur-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Location
              </div>
              <div className="text-xs text-zinc-300 leading-snug">
                {SITE_INFO.shortAddress}
              </div>
            </div>

            {/* Opening Hours */}
            <div className="p-4 rounded-2xl bg-noir-900/60 border border-white/5 backdrop-blur-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Clock className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Opening Hours
              </div>
              <div className="text-xs text-zinc-300 leading-snug space-y-0.5">
                <div>{SITE_INFO.openingHours}</div>
              </div>
            </div>

            {/* Get In Touch */}
            <div className="p-4 rounded-2xl bg-noir-900/60 border border-white/5 backdrop-blur-sm space-y-2">
              <div className="w-8 h-8 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center text-gold-400">
                <Mail className="w-4 h-4" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                Direct Inquiries
              </div>
              <div className="text-xs text-zinc-300 leading-snug space-y-1">
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="block hover:text-gold-400 transition-colors truncate"
                >
                  {SITE_INFO.email}
                </a>
                <a
                  href={SITE_INFO.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gold-400 hover:underline"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 w-full py-6 px-4 border-t border-gold-500/10 bg-noir-950/60 backdrop-blur-md">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {new Date().getFullYear()} Glam &amp; Go London. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/glamandgolondon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500/20 text-zinc-300 hover:text-gold-400 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.facebook.com/glamandgolondon"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/5 hover:bg-gold-500/20 text-zinc-300 hover:text-gold-400 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
