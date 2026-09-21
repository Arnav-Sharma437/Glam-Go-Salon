"use client";

import React, { Suspense } from "react";
import {
  Calendar,
  ExternalLink,
  Phone,
  MapPin,
  CheckCircle2,
} from "lucide-react";
import { SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";

function BookingContent() {
  return (
    <div className="bg-cream-50 text-noir-950 py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-600">
            Official Booking Portal
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950">
            Book Your Appointment
          </h1>
          <p className="text-sm sm:text-base text-zinc-600 max-w-2xl mx-auto">
            All appointments and treatments for Glam &amp; Go are booked directly through our verified Fresha platform.
          </p>
        </div>

        {/* Master Booking Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-gold-500/30 shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl pointer-events-none" />

          <div className="text-center space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-gold-500 via-gold-400 to-gold-300 text-noir-950 flex items-center justify-center mx-auto shadow-luxury">
              <Calendar className="w-8 h-8 text-noir-950" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-serif text-noir-950">
              Glam &amp; Go Salon on Fresha
            </h2>
            <p className="text-sm text-zinc-600 max-w-lg mx-auto leading-relaxed">
              Explore our complete menu of hair styling, laser hair removal, clinical aesthetics, facials, beauty, and wellness services with live real-time availability and instant confirmation.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="space-y-4 max-w-lg mx-auto pt-2">
            <a
              href={BOOKING_LINKS.salonFresha}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-8 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300 flex items-center justify-center gap-3 hover:scale-[1.02]"
            >
              <span>Launch Fresha Booking System</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={BOOKING_LINKS.sharedFresha}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-6 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gold-500/10 hover:bg-gold-500/20 border border-gold-500/30 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <span>Alternative Shared Booking Link</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Feature Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-zinc-100">
            <div className="flex items-center gap-3 text-xs text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Real-Time Availability</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Instant Confirmation</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-zinc-700">
              <CheckCircle2 className="w-4 h-4 text-gold-600 flex-shrink-0" />
              <span>Secure Payments</span>
            </div>
          </div>
        </div>

        {/* Quick Contact & Assistance */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Need Help Booking?</h3>
              <a
                href={`tel:${SITE_INFO.phonePrimaryClean}`}
                className="text-sm font-semibold text-noir-950 hover:text-gold-600 transition-colors"
              >
                Call Us: {SITE_INFO.phonePrimary}
              </a>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-zinc-200 shadow-sm flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500">Location</h3>
              <p className="text-xs text-zinc-700 font-medium">
                Unit 21, Treaty Centre, High St, Hounslow TW3 1ES
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense
      fallback={
        <div className="py-24 text-center text-zinc-500">
          Loading booking portal...
        </div>
      }
    >
      <BookingContent />
    </Suspense>
  );
}
