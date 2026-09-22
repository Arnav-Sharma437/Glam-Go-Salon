import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sparkles, ArrowRight } from "lucide-react";
import { ABOUT_CONTENT, STATS, SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";
import WhyChooseUs from "@/components/home/WhyChooseUs";

export const metadata: Metadata = {
  title: "About Us | Luxury Aesthetic & Beauty Salon",
  description: "Learn about Glam & Go — where expertise meets the latest technology in Hounslow.",
};

export default function AboutPage() {
  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/salon/salon-interior-main.jpg"
            alt="Glam & Go Salon background"
            fill
            className="object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">About Us</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Welcome to Glam and Go — where expertise meets the latest technology.
          </p>
        </div>
      </section>

      {/* Main Story & Legacy */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-6 space-y-6">
              <SectionHeading
                eyebrow={ABOUT_CONTENT.eyebrow}
                title={ABOUT_CONTENT.title}
                align="left"
                className="mb-6"
              />
              <p className="text-base sm:text-lg font-medium text-noir-900 leading-relaxed">
                {ABOUT_CONTENT.lead}
              </p>
              <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                {ABOUT_CONTENT.paragraph1}
              </p>

              <div className="pt-4 p-6 bg-white rounded-2xl border border-gold-500/30 shadow-sm space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" /> Founder&apos;s Vision
                </span>
                <p className="text-sm text-zinc-700 italic">
                  &ldquo;{ABOUT_CONTENT.founderNote}&rdquo;
                </p>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
                >
                  <span>Our Services</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-noir-950 bg-white border border-zinc-300 hover:border-gold-500"
                >
                  <span>Contact Salon</span>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <div className="relative h-[400px] sm:h-[460px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/salon/salon-atmosphere.jpg"
                  alt="Glam & Go Salon Atmosphere"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/salon/salon-suite-2.webp"
                    alt="Salon Treatment Suite"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-48 rounded-xl overflow-hidden shadow-md border-2 border-white">
                  <Image
                    src="/images/salon/salon-suite-3.webp"
                    alt="Hair Care Studio"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter */}
      <section className="bg-noir-950 text-white py-16 border-y border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {STATS.map((stat, i) => (
              <div key={i} className="p-4 flex flex-col items-center justify-center group">
                <div className="text-4xl sm:text-5xl font-serif font-bold text-gold-400 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs uppercase tracking-wider text-zinc-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <WhyChooseUs />

      {/* CTA */}
      <section className="py-20 bg-cream-100 text-center border-t border-zinc-200">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif text-noir-950">
            Visit Glam &amp; Go
          </h2>
          <p className="text-sm sm:text-base text-zinc-600">
            Unit 21, Treaty Centre, High St, Hounslow TW3 1ES
          </p>
          <div className="pt-2 flex flex-wrap justify-center gap-4">
            <a
              href={BOOKING_LINKS.salonFresha}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
            >
              Book An Appointment
            </a>
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-white border border-zinc-300 hover:border-gold-500 shadow-sm"
            >
              Contact Salon
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
