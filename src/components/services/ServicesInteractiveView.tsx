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
} from "lucide-react";
import { SERVICES, BOOKING_LINKS, ServiceItem, TreatmentItem } from "@/data/siteContent";

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

  const bookingUrl =
    service.bookingType === "clinical"
      ? BOOKING_LINKS.clinicalPhorest
      : BOOKING_LINKS.salonFresha;

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
          className="object-cover object-center scale-105"
        />
        {/* Layered cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-noir-950/85 to-noir-950/75" />
        <div className="absolute inset-0 backdrop-blur-[1px]" />
      </div>

      {/* Main Centered Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex flex-col justify-center gap-4 sm:gap-6">
        
        {/* Top Mini Header inside Section */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-gold-400">
              Services • {paddedTotal} Categories
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="font-serif text-xl sm:text-2xl text-gold-400 font-normal">
              {paddedIndex}
            </span>
            <span className="text-zinc-500 text-xs sm:text-sm font-light">
              / {paddedTotal}
            </span>
          </div>
        </div>

        {/* Category Title & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-end">
          <div className="lg:col-span-8 space-y-2">
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider">
              <span>{treatments.length} Treatments in this category</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-white tracking-tight leading-tight">
              {service.title}
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm font-light max-w-2xl leading-relaxed line-clamp-2">
              {service.shortDesc}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end items-center gap-2.5">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300"
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
              <span>Book on {service.bookingType === "clinical" ? "Phorest" : "Fresha"}</span>
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
    </div>
  );
}
