"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Clock,
  Tag,
  CalendarCheck,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import {
  SERVICES,
  BOOKING_LINKS,
  TREATMENT_PACKAGES,
  ServiceItem,
  TreatmentItem,
} from "@/data/siteContent";

function TreatmentCard({
  treatment,
  tIdx,
  bookingUrl,
}: {
  treatment: TreatmentItem;
  tIdx: number;
  bookingUrl: string;
}) {
  return (
    <div className="shrink-0 w-[260px] sm:w-[280px] md:w-[300px] bg-white rounded-2xl p-4 sm:p-5 text-noir-950 shadow-xl border border-white/20 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 group">
      <div className="space-y-1.5">
        <div className="flex items-start justify-between gap-2">
          <span className="w-7 h-7 rounded-lg bg-noir-950 text-gold-400 flex items-center justify-center font-serif text-[11px] font-semibold">
            {String(tIdx + 1).padStart(2, "0")}
          </span>
          {treatment.price && (
            <span className="inline-flex items-center gap-1 font-bold text-[11px] text-gold-700 bg-gold-50 px-2 py-0.5 rounded-full border border-gold-200">
              <Tag className="w-3 h-3" />
              <span>{treatment.price}</span>
            </span>
          )}
        </div>

        <h3 className="font-serif text-sm sm:text-base font-bold text-noir-950 line-clamp-2 group-hover:text-gold-700 transition-colors pt-1">
          {treatment.name}
        </h3>

        {treatment.description && (
          <p className="text-[11px] sm:text-xs text-zinc-600 font-light leading-relaxed line-clamp-2">
            {treatment.description}
          </p>
        )}
      </div>

      <div className="pt-3 mt-2 border-t border-zinc-100 flex items-center justify-between gap-2">
        {treatment.duration ? (
          <span className="flex items-center gap-1 text-[11px] text-zinc-500">
            <Clock className="w-3 h-3 text-gold-600" />
            <span>{treatment.duration}</span>
          </span>
        ) : (
          <span className="text-[11px] text-zinc-400">Enquire</span>
        )}

        <a
          href={treatment.freshaUrl || bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-noir-950 bg-gold-400 hover:bg-gold-500 transition-colors shadow-sm"
        >
          <span>Book</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
}

function ServiceCategorySection({
  service,
  index,
  total,
}: {
  service: ServiceItem;
  index: number;
  total: number;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 300;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const bookingUrl = BOOKING_LINKS.salonFresha;

  const paddedIndex = String(index + 1).padStart(2, "0");
  const paddedTotal = String(total).padStart(2, "0");
  const treatments = service.treatments || [];

  return (
    <section
      id={service.slug}
      className="sticky top-0 h-screen min-h-[600px] max-h-[960px] w-full flex flex-col justify-center overflow-hidden bg-noir-950 text-white shadow-2xl border-t border-gold-500/20"
      style={{
        zIndex: index + 10,
      }}
    >
      {/* Background Image with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <Image
          src={service.image}
          alt={service.title}
          fill
          priority={index === 0}
          className="object-cover opacity-35 filter brightness-75 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/80 to-noir-950/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-noir-950/50 to-noir-950" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-between py-6 sm:py-8 h-full max-h-[860px]">
        {/* Category Header */}
        <div className="space-y-2 sm:space-y-3 pt-2">
          {/* Top meta indicator */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs font-semibold tracking-[0.2em] text-gold-400 uppercase">
              <span>{paddedIndex} / {paddedTotal}</span>
              <span>•</span>
              <span>{service.category}</span>
            </div>

            {service.startingPrice && (
              <span className="text-xs sm:text-sm font-semibold text-gold-400 bg-noir-900/80 px-3 py-1 rounded-full border border-gold-500/30 backdrop-blur-md">
                {service.startingPrice}
              </span>
            )}
          </div>

          {/* Title & Short Description */}
          <div className="max-w-3xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-white tracking-tight leading-tight">
              {service.title}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-300 font-light mt-1.5 line-clamp-2 leading-relaxed">
              {service.shortDesc}
            </p>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-1">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-luxury"
            >
              <span>View Category</span>
              <ArrowRight className="w-3 h-3" />
            </Link>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[11px] sm:text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
            >
              <CalendarCheck className="w-3 h-3 text-gold-400" />
              <span>Book on Fresha</span>
            </a>
          </div>
        </div>

        {/* Treatments Showcase */}
        <div className="w-full pt-1">
          {/* Header with Navigation Arrows */}
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-gold-400/90 uppercase tracking-widest">
              <span>Treatments Menu</span>
              <span>•</span>
              <span className="text-zinc-400 font-normal">Auto Scrolling</span>
            </div>

            {/* Manual Arrows for Mobile and Desktop click */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll left"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-noir-950 border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-md"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll right"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 hover:text-noir-950 border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-md"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Desktop Continuous Auto Scroll Marquee with pause on hover */}
          <div className="hidden md:block overflow-hidden pause-hover relative py-1">
            <div className="animate-marquee-continuous flex items-stretch gap-4">
              {/* First loop */}
              {treatments.map((treatment, tIdx) => (
                <TreatmentCard
                  key={`orig-${tIdx}`}
                  treatment={treatment}
                  tIdx={tIdx}
                  bookingUrl={bookingUrl}
                />
              ))}
              {/* Duplicate loop for seamless infinite marquee scroll */}
              {treatments.map((treatment, tIdx) => (
                <TreatmentCard
                  key={`dup-${tIdx}`}
                  treatment={treatment}
                  tIdx={tIdx}
                  bookingUrl={bookingUrl}
                />
              ))}
            </div>
          </div>

          {/* Mobile / Tablet Horizontal Manual Snap Scroll with Arrows */}
          <div
            ref={scrollContainerRef}
            className="md:hidden flex items-stretch gap-3 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-1"
          >
            {treatments.map((treatment, tIdx) => (
              <div key={tIdx} className="snap-start shrink-0">
                <TreatmentCard
                  treatment={treatment}
                  tIdx={tIdx}
                  bookingUrl={bookingUrl}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

function PackagesSection() {
  return (
    <section className="relative z-30 bg-noir-950 text-white py-20 lg:py-28 border-t border-gold-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs uppercase tracking-widest font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Value Courses &amp; Programs</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-white">
            Treatment Packages &amp; Courses
          </h2>
          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Multi-session packages structured for optimal treatment results and exceptional value across PRP, Microneedling, Peels, Radiofrequency, and IV Therapy.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TREATMENT_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className="p-6 bg-noir-900/90 rounded-2xl border border-white/10 hover:border-gold-500/60 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] uppercase tracking-wider font-semibold text-gold-400 bg-noir-950 px-2.5 py-1 rounded-md border border-white/10">
                    {pkg.category}
                  </span>
                  {pkg.saving && (
                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      {pkg.saving}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-white group-hover:text-gold-400 transition-colors">
                  {pkg.title}
                </h3>

                {pkg.description && (
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pkg.description}
                  </p>
                )}

                {/* Pricing Breakdown: Single Treatment | Course Price | Saving */}
                <div className="pt-3 pb-1 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">Single Session</span>
                    <span className="font-semibold text-zinc-300">{pkg.singlePrice}</span>
                  </div>
                  <div>
                    <span className="text-gold-400 block text-[10px] uppercase tracking-wider">
                      Course ({pkg.courseSessions})
                    </span>
                    <span className="font-bold text-gold-400 text-sm">{pkg.coursePrice}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-3 border-t border-white/10">
                <a
                  href={pkg.freshaUrl || BOOKING_LINKS.salonFresha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-sm"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Book Package</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Clinical suitability note */}
        <div className="mt-12 p-4 rounded-xl bg-noir-900 border border-white/10 text-center text-xs text-zinc-400 max-w-2xl mx-auto flex items-center justify-center gap-2">
          <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
          <span>All advanced treatments and IV infusions are subject to consultation, medical assessment and clinical suitability.</span>
        </div>
      </div>
    </section>
  );
}

export default function ServicesInteractiveView() {
  const total = SERVICES.length;

  return (
    <div className="relative bg-noir-950">
      {/* Stacking Sticky Service Categories */}
      <div className="relative">
        {SERVICES.map((service, index) => (
          <ServiceCategorySection
            key={service.id}
            service={service}
            index={index}
            total={total}
          />
        ))}
      </div>

      {/* Verified Master Treatment Packages & Courses Section */}
      <PackagesSection />
    </div>
  );
}
