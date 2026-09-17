import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { ArrowRight, Sparkles, Check, ExternalLink } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Our Services | Hair, Beauty, Aesthetics & Wellness",
  description: "Explore our comprehensive suite of hair styling, beauty, SkinCeuticals aesthetics, and certified training in Hounslow.",
};

export default function ServicesPage() {
  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/beauty-banner.png"
            alt="Services Banner"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Bespoke Treatments &amp; Care
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Our Services</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            From precision hair couture and SkinCeuticals clinical peels to holistic body wellness and accredited training.
          </p>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
          {SERVICES.map((service, index) => {
            const isAcademy = service.slug.includes("academy") || service.slug.includes("cpd");
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center p-8 sm:p-12 rounded-3xl bg-white border border-zinc-200/80 shadow-luxury hover:border-gold-500/50 transition-all duration-300 ${
                  isReversed ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Col */}
                <div
                  className={`lg:col-span-6 relative ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
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
                  className={`lg:col-span-6 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-semibold tracking-widest uppercase text-gold-600 mb-2 block">
                      Service 0{index + 1}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-noir-950">
                      {service.title}
                    </h2>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Highlights/Features */}
                  {service.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700 font-medium">
                          <span className="w-4 h-4 rounded-full bg-gold-500/15 text-gold-600 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5" />
                          </span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTAs */}
                  <div className="pt-4 flex flex-wrap items-center gap-4">
                    {isAcademy ? (
                      <a
                        href={SITE_INFO.academyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
                      >
                        <span>Visit Academy Dedicated Portal</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <>
                        <Link
                          href={`/book?service=${encodeURIComponent(service.title)}`}
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
                        >
                          <span>Book Appointment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                        <Link
                          href={`/services/${service.slug}`}
                          className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-zinc-700 hover:text-gold-600 transition-colors"
                        >
                          <span>Full Details</span>
                        </Link>
                      </>
                    )}
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
