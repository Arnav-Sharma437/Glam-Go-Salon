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
  Layers,
} from "lucide-react";
import { SERVICES, BOOKING_LINKS, ServiceItem } from "@/data/siteContent";

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
      const scrollAmount = 320;
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

  return (
    <section
      id={service.slug}
      className="sticky top-0 min-h-screen w-full flex flex-col justify-between overflow-hidden bg-noir-950 text-white shadow-2xl border-t border-gold-500/20"
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

      {/* Top Header Bar inside the card */}
      <div className="relative z-10 w-full pt-20 sm:pt-24 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] font-semibold text-gold-400">
              Services • {paddedTotal} Categories
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="font-serif text-2xl sm:text-3xl text-gold-400 font-normal">
              {paddedIndex}
            </span>
            <span className="text-zinc-500 text-sm sm:text-base font-light">
              / {paddedTotal}
            </span>
          </div>
        </div>
      </div>

      {/* Middle: Category Title & Description */}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 my-auto py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 items-end">
          <div className="lg:col-span-8 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-[11px] sm:text-xs font-medium uppercase tracking-wider">
              <span>{service.treatments?.length || 0} Treatments in this category</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif text-white tracking-tight leading-tight">
              {service.title}
            </h2>

            <p className="text-zinc-300 text-xs sm:text-sm md:text-base font-light max-w-3xl leading-relaxed line-clamp-2 sm:line-clamp-3">
              {service.shortDesc}
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-wrap lg:justify-end items-center gap-3">
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300"
            >
              <span>View This Category</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Book on {service.bookingType === "clinical" ? "Phorest" : "Fresha"}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: Horizontal Scrolling Treatment Cards Carousel */}
      <div className="relative z-10 w-full pb-8 sm:pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Navigation Controls Bar */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 uppercase tracking-wider">
              <span>Scroll Treatments</span>
              <span className="text-gold-400">→</span>
            </div>

            {/* Arrow controls (Always visible, extra handy on mobile & touch) */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll treatments left"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-noir-950 border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-md"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll treatments right"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-gold-500 hover:text-noir-950 border border-white/20 text-white flex items-center justify-center transition-all duration-200 active:scale-95 backdrop-blur-md"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Treatment Cards Scroll Container */}
          <div
            ref={scrollContainerRef}
            className="flex items-stretch gap-4 sm:gap-5 overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory py-2"
          >
            {service.treatments?.map((treatment, tIdx) => (
              <div
                key={tIdx}
                className="snap-start shrink-0 w-[270px] sm:w-[310px] md:w-[330px] bg-white rounded-2xl p-5 sm:p-6 text-noir-950 shadow-2xl border border-white/20 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300 group"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <span className="w-8 h-8 rounded-xl bg-noir-950 text-gold-400 flex items-center justify-center font-serif text-xs font-semibold">
                      {String(tIdx + 1).padStart(2, "0")}
                    </span>
                    {treatment.price && (
                      <span className="inline-flex items-center gap-1 font-bold text-[11px] sm:text-xs text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                        <Tag className="w-3 h-3" />
                        <span>{treatment.price}</span>
                      </span>
                    )}
                  </div>

                  <h3 className="font-serif text-base sm:text-lg font-bold text-noir-950 line-clamp-2 group-hover:text-gold-700 transition-colors pt-1">
                    {treatment.name}
                  </h3>

                  {treatment.description && (
                    <p className="text-xs text-zinc-600 font-light leading-relaxed line-clamp-2">
                      {treatment.description}
                    </p>
                  )}
                </div>

                <div className="pt-4 mt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                  {treatment.duration ? (
                    <span className="flex items-center gap-1 text-[11px] sm:text-xs text-zinc-500">
                      <Clock className="w-3.5 h-3.5 text-gold-600" />
                      <span>{treatment.duration}</span>
                    </span>
                  ) : (
                    <span className="text-[11px] text-zinc-400">Enquire in salon</span>
                  )}

                  <a
                    href={treatment.freshaUrl || bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-wider text-noir-950 bg-gold-400 hover:bg-gold-500 transition-colors shadow-sm"
                  >
                    <span>Book</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
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
