import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Clock, Tag, ShieldCheck, Sparkles, CheckCircle2, Phone, CalendarCheck } from "lucide-react";
import { SERVICES, SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Laser Hair Removal Hounslow | Medical-Grade Laser | Glam & Go",
  description: "Discover safe, medical-grade laser hair removal in Hounslow at Glam & Go Beauty Salon. Long-lasting smooth results across all skin tones with certified laser specialists.",
};

export default function LaserHairRemovalPage() {
  const laserService = SERVICES.find((s) => s.slug === "laser-hair-removal") || SERVICES[0];

  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Hero Banner */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/banners/banner-aesthetics.png"
            alt="Laser Hair Removal Hounslow"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Advanced Medical Technology • Hounslow
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-white">
            Laser Hair Removal
          </h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Safe, medical-grade laser hair removal delivering smooth, long-lasting reduction across all skin tones. Centrally located in Treaty Centre, Hounslow.
          </p>
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            <a
              href={BOOKING_LINKS.laserBooking}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300"
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book on Fresha</span>
            </a>
            <a
              href={`tel:${SITE_INFO.phonePrimaryClean}`}
              className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold-400" />
              <span>Call: {SITE_INFO.phonePrimary}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content & Treatments */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
            {/* Visual Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/services/laser-hair-removal.jpg"
                  alt="Laser Hair Removal Treatment"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gold-500/30 uppercase tracking-wider">
                  Medical-Grade Laser
                </div>
              </div>

              {/* Quality Highlights */}
              <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm space-y-4">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-gold-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-gold-600" />
                  Why Choose Glam &amp; Go Laser?
                </h3>
                <ul className="space-y-3 text-xs sm:text-sm text-zinc-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Hijab-Friendly &amp; Private:</strong> Dedicated private treatment suites for your complete comfort and dignity.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Certified Specialists:</strong> Fully qualified practitioners with extensive clinical laser experience.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Free Consultation &amp; Patch Test:</strong> Detailed skin assessment prior to every treatment plan.</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0 mt-0.5" />
                    <span><strong>Central Hounslow Location:</strong> Located in Treaty Centre with accessible parking.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Treatments & Direct Booking Route */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Treatment Menu &amp; Booking
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-noir-950 mt-1">
                  Laser Hair Removal Treatments
                </h2>
                <p className="mt-3 text-sm sm:text-base text-zinc-600 leading-relaxed">
                  Select your treatment below to book instantly via our verified booking route or reserve your in-depth consultation with our specialists.
                </p>
              </div>

              {/* Treatment Cards */}
              <div className="space-y-3 pt-2">
                {laserService.treatments?.map((treatment, idx) => (
                  <div
                    key={idx}
                    className="p-5 sm:p-6 bg-white rounded-2xl border border-zinc-200/90 hover:border-gold-500/60 transition-all duration-300 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <h4 className="font-serif text-base sm:text-lg text-noir-950 font-semibold">
                        {treatment.name}
                      </h4>
                      {treatment.description && (
                        <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                          {treatment.description}
                        </p>
                      )}
                      <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-zinc-600">
                        {treatment.duration && (
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-gold-600" />
                            <span>{treatment.duration}</span>
                          </span>
                        )}
                        {treatment.price && (
                          <span className="flex items-center gap-1.5 font-semibold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded-full border border-gold-200">
                            <Tag className="w-3.5 h-3.5" />
                            <span>{treatment.price}</span>
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shrink-0 flex items-center gap-2">
                      <a
                        href={treatment.freshaUrl || BOOKING_LINKS.laserBooking}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 shadow-sm transition-all"
                      >
                        <span>Book Now</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Consultation Card */}
              <div className="p-6 rounded-2xl bg-noir-950 text-white border border-gold-500/30 space-y-3">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-semibold uppercase tracking-wider">
                  <Sparkles className="w-4 h-4" />
                  <span>Important Treatment Policy</span>
                </div>
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  All laser treatments require a brief initial consultation and patch test at least 24 hours in advance to evaluate your skin type and ensure optimal comfort. For appointments surpassing £75, a standard deposit is applicable.
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <Link
                    href="/book?type=salon&service=Laser%20Hair%20Removal"
                    className="text-xs font-semibold text-gold-400 hover:text-gold-300 underline underline-offset-4"
                  >
                    Request Consultation Online &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
