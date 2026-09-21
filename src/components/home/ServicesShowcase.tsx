"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles, Pause, Play } from "lucide-react";
import { SERVICES, BOOKING_LINKS } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ServicesShowcase() {
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Duplicate the 4 authentic salon services for seamless infinite marquee loop
  const loopServices = [...SERVICES, ...SERVICES, ...SERVICES];

  return (
    <section className="py-24 sm:py-32 bg-cream-100 text-noir-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="Explore our complete range of premium hair, beauty, and aesthetic services."
            align="left"
            className="mb-0 max-w-2xl"
          />

          {/* Controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <button
              onClick={() => setIsPaused(!isPaused)}
              title={isPaused ? "Resume continuous scrolling" : "Pause continuous scrolling"}
              className="px-3.5 py-2 rounded-full bg-white border border-zinc-200 text-xs font-medium text-zinc-700 hover:border-gold-500 hover:text-noir-950 flex items-center gap-1.5 shadow-sm"
            >
              {isPaused ? <Play className="w-3.5 h-3.5 text-gold-600" /> : <Pause className="w-3.5 h-3.5 text-gold-600" />}
              <span>{isPaused ? "Resume" : "Pause"}</span>
            </button>
          </div>
        </div>

        {/* Container-Constrained Continuous Scrolling Track */}
        <div
          className="relative w-full overflow-hidden pause-hover select-none rounded-2xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Edge fade overlays */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-cream-100 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-cream-100 to-transparent z-10" />

          <div
            className="flex gap-6 pb-6 pt-2 animate-marquee-continuous"
            style={{ animationPlayState: isPaused ? "paused" : "running" }}
          >
            {loopServices.map((service, index) => {
              const originalIndex = index % SERVICES.length;

              return (
                <div
                  key={`${service.id}-${index}`}
                  className="w-[290px] sm:w-[350px] md:w-[380px] flex-shrink-0 bg-white rounded-2xl overflow-hidden border border-zinc-200/80 hover:border-gold-500/60 shadow-luxury hover:shadow-luxury_hover transition-all duration-300 flex flex-col group cursor-pointer"
                >
                  {/* Image Container with Zoom effect */}
                  <div className="relative h-56 w-full overflow-hidden bg-zinc-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-noir-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md text-gold-400 border border-gold-500/30 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase">
                      {service.category}
                    </div>

                    {/* Number Badge */}
                    <div className="absolute bottom-3 right-4 font-serif text-3xl font-bold text-white/30 group-hover:text-gold-400/80 transition-colors">
                      0{originalIndex + 1}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-serif text-noir-950 group-hover:text-gold-600 transition-colors mb-3">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed line-clamp-4">
                        {service.shortDesc}
                      </p>
                    </div>

                    {/* Card Footer CTAs */}
                    <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-600 hover:text-gold-700 transition-colors"
                      >
                        <span>Learn More</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>

                      <a
                        href={BOOKING_LINKS.salonFresha}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 rounded-full text-xs font-semibold bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors"
                      >
                        Book Now
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Callout */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-noir-950 bg-white hover:bg-noir-950 hover:text-white border-2 border-noir-950 transition-all duration-300 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-gold-500" />
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
