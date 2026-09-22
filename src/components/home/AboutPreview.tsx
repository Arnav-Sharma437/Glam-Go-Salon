"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { ABOUT_CONTENT } from "@/data/siteContent";

export default function AboutPreview() {
  return (
    <section className="py-20 sm:py-28 bg-cream-50 text-noir-950 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-gold-200/30 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Editorial Composition */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Primary Main Image */}
              <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={ABOUT_CONTENT.image1}
                  alt="Glam & Go Luxury Salon Interior"
                  fill
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>

              {/* Floating Secondary Image */}
              <div className="hidden sm:block absolute -bottom-10 -right-6 w-56 h-64 rounded-xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src={ABOUT_CONTENT.image2}
                  alt="Glam & Go Aesthetic Precision"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gold Badge */}
              <div className="absolute top-6 -left-4 sm:-left-6 bg-noir-950 text-white p-4 rounded-xl shadow-xl border border-gold-500/30 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-serif text-lg font-bold">
                  15+
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-gold-400">
                    Years Of Experience
                  </div>
                  <div className="text-[11px] text-zinc-400">Hounslow Beauty Haven</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-gold-600">
                <Sparkles className="w-4 h-4 text-gold-500" />
                {ABOUT_CONTENT.eyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950 leading-[1.15]">
                {ABOUT_CONTENT.title}
              </h2>
            </div>

            <p className="text-base sm:text-lg text-noir-850 font-medium leading-relaxed">
              {ABOUT_CONTENT.lead}
            </p>

            <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
              {ABOUT_CONTENT.paragraph1}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury hover:scale-105 transition-all duration-300"
              >
                <span>Discover More</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider text-noir-950 hover:text-gold-600 transition-colors"
              >
                <span>View Our Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
