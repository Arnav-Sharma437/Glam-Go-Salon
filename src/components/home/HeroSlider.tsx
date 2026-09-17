"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { HERO_SLIDES } from "@/data/siteContent";

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 7000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <div
      className="relative w-full h-[640px] sm:h-[700px] lg:h-[780px] bg-noir-950 overflow-hidden select-none"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      {HERO_SLIDES.map((slide, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Background Image with Dark Vignette Overlay */}
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={idx === 0}
                className={`object-cover object-center transition-transform duration-[8000ms] ease-out ${
                  isActive ? "scale-105" : "scale-100"
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-noir-950/90 via-noir-950/65 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-noir-950/30" />
            </div>

            {/* Slide Content */}
            <div className="absolute inset-0 flex items-center z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl text-left space-y-6">
                  {/* Eyebrow */}
                  <div
                    className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase transition-all duration-700 delay-100 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                    }`}
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>{slide.eyebrow}</span>
                  </div>

                  {/* Main Title */}
                  <h1
                    className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-normal text-white tracking-tight leading-[1.1] drop-shadow-md transition-all duration-700 delay-200 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.title}
                  </h1>

                  {/* Description */}
                  <p
                    className={`text-base sm:text-lg text-zinc-300 font-light max-w-xl leading-relaxed transition-all duration-700 delay-300 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    {slide.description}
                  </p>

                  {/* CTA Buttons */}
                  <div
                    className={`flex flex-wrap items-center gap-4 pt-4 transition-all duration-700 delay-400 ${
                      isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}
                  >
                    <Link
                      href={slide.primaryCta.href}
                      className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury hover:scale-105 transition-all duration-300"
                    >
                      {slide.primaryCta.label}
                    </Link>
                    <Link
                      href={slide.secondaryCta.href}
                      className="px-8 py-3.5 rounded-full text-xs sm:text-sm font-bold tracking-[0.15em] uppercase text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md hover:border-gold-400 transition-all duration-300"
                    >
                      {slide.secondaryCta.label}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Slide Navigation Controls & Counter */}
      <div className="absolute bottom-8 right-4 sm:right-8 lg:right-16 z-30 flex items-center gap-4 bg-noir-950/80 backdrop-blur-md px-5 py-3 rounded-full border border-white/10 shadow-2xl">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide counter */}
        <div className="flex items-center text-xs font-semibold tracking-widest text-gold-400 font-mono">
          <span>0{currentIndex + 1}</span>
          <span className="mx-2 text-zinc-600">/</span>
          <span className="text-zinc-400">0{HERO_SLIDES.length}</span>
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-2 rounded-full text-zinc-300 hover:text-white hover:bg-white/10 transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress Dots Indicator */}
      <div className="absolute bottom-8 left-4 sm:left-8 lg:left-16 z-30 flex items-center gap-2">
        {HERO_SLIDES.map((_, dotIdx) => (
          <button
            key={dotIdx}
            onClick={() => setCurrentIndex(dotIdx)}
            aria-label={`Go to slide ${dotIdx + 1}`}
            className={`h-1.5 transition-all duration-300 rounded-full ${
              dotIdx === currentIndex
                ? "w-8 bg-gradient-to-r from-gold-400 to-gold-600"
                : "w-2 bg-white/30 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
