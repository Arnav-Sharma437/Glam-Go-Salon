import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Clock, Tag, CalendarCheck, Sparkles, Phone } from "lucide-react";
import { SERVICES, SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";

export const metadata: Metadata = {
  title: "Our Services | Laser, Facials, Aesthetics, Skin, Hair & Beauty | Glam & Go",
  description: "Explore the complete treatment catalogue for Glam & Go Hounslow: Laser Hair Removal, Facials, Skin Treatments, Aesthetics & Injectables, Hair, Beauty, and Body Wellness.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/banners/banner-beauty.png"
            alt="Services Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Complete Salon &amp; Aesthetics Catalogue
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Our Services</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light leading-relaxed">
            Providing premium hair, beauty, laser, and advanced aesthetic treatments under one roof in Hounslow.
          </p>

          {/* Quick Category Anchor Bar (Essential for Mobile & Desktop Discovery) */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
            {SERVICES.map((category) => (
              <a
                key={category.id}
                href={`#${category.slug}`}
                className="px-4 py-2 rounded-full bg-white/10 hover:bg-gold-500 hover:text-noir-950 text-white text-xs font-semibold tracking-wide transition-all border border-white/15 backdrop-blur-sm"
              >
                {category.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 lg:space-y-24">
          {SERVICES.map((service, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-zinc-200/90 shadow-luxury hover:border-gold-500/50 transition-all duration-300 scroll-mt-24 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-5 relative ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white sticky top-28">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-wider">
                      {service.category}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-1 block">
                      Category 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-noir-950">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Treatments table with duration, exact verified prices, and direct Book buttons */}
                  {service.treatments && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-xs uppercase tracking-wider font-semibold text-zinc-700">
                          Treatments &amp; Pricing
                        </h4>
                        <span className="text-xs text-gold-700 font-medium">
                          {service.startingPrice}
                        </span>
                      </div>
                      <div className="space-y-2.5">
                        {service.treatments.map((t, tIdx) => (
                          <div
                            key={tIdx}
                            className="p-4 bg-cream-50/80 hover:bg-cream-100/80 rounded-xl border border-zinc-200/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                          >
                            <div className="space-y-0.5">
                              <span className="font-semibold text-noir-950 block">{t.name}</span>
                              {t.description && (
                                <p className="text-xs text-zinc-500 leading-relaxed max-w-lg">
                                  {t.description}
                                </p>
                              )}
                              <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-600">
                                {t.duration && (
                                  <span className="flex items-center gap-1">
                                    <Clock className="w-3.5 h-3.5 text-gold-600" />
                                    <span>{t.duration}</span>
                                  </span>
                                )}
                                {t.price && (
                                  <span className="flex items-center gap-1 font-bold text-gold-700 bg-gold-50 px-2 py-0.5 rounded border border-gold-200">
                                    <Tag className="w-3 h-3" />
                                    <span>{t.price}</span>
                                  </span>
                                )}
                              </div>
                            </div>

                            {/* Direct Booking Action */}
                            <div className="shrink-0 pt-2 sm:pt-0">
                              <a
                                href={
                                  service.bookingType === "clinical"
                                    ? BOOKING_LINKS.clinicalPhorest
                                    : BOOKING_LINKS.salonFresha
                                }
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gold-400 hover:bg-gold-500 transition-colors shadow-sm"
                              >
                                <span>Book</span>
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Category CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    <a
                      href={
                        service.bookingType === "clinical"
                          ? BOOKING_LINKS.clinicalPhorest
                          : BOOKING_LINKS.salonFresha
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all"
                    >
                      <CalendarCheck className="w-4 h-4" />
                      <span>Book Full Category</span>
                    </a>
                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-zinc-700 bg-white border border-zinc-200 hover:border-gold-500 transition-colors"
                    >
                      <span>Category Overview</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
