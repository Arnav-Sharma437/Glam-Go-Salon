import React from "react";
import Link from "next/link";
import { Sparkles, Activity, Scissors, CalendarCheck } from "lucide-react";

export default function BookingCta() {
  return (
    <section className="py-20 sm:py-24 bg-noir-950 text-white relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.2em] font-semibold text-gold-400">
            Seamless Online Appointments
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif">
            Clinical Booking Or Salon Services
          </h2>
          <p className="text-sm sm:text-base text-zinc-300">
            Choose your desired experience and book your appointment with our certified specialists in seconds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Card 1: Clinical Booking */}
          <div className="p-8 sm:p-10 rounded-2xl bg-noir-900 border border-gold-500/30 hover:border-gold-400/80 shadow-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-2xl pointer-events-none" />
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center border border-gold-500/40">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors">
                Clinical Booking
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Advanced skin rejuvenation, SkinCeuticals clinical peels, microneedling, laser therapies, and anti-aging treatments led by experienced aesthetic practitioners.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/book?type=clinical"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book Clinical Treatment</span>
              </Link>
            </div>
          </div>

          {/* Card 2: Salon Services */}
          <div className="p-8 sm:p-10 rounded-2xl bg-noir-900 border border-white/10 hover:border-gold-500/60 shadow-2xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-white/10 text-white flex items-center justify-center border border-white/20 group-hover:border-gold-500/40 group-hover:text-gold-400 transition-colors">
                <Scissors className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-serif text-white group-hover:text-gold-400 transition-colors">
                Salon Services
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Couture hair styling, bespoke balayage, Kérastase rituals, luxury facials, makeup artistry, threading, waxing, and total body wellness care.
              </p>
            </div>
            <div className="pt-8">
              <Link
                href="/book?type=salon"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-gold-400 transition-all duration-300"
              >
                <Sparkles className="w-4 h-4 text-gold-400" />
                <span>Book Salon Service</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
