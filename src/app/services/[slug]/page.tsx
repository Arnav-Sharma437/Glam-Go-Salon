import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Phone, CalendarCheck, Clock, Tag, ArrowRight } from "lucide-react";
import { SERVICES, SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} | Treatments & Pricing | Glam & Go Hounslow`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const bookingUrl =
    service.bookingType === "clinical"
      ? BOOKING_LINKS.clinicalPhorest
      : BOOKING_LINKS.salonFresha;

  return (
    <div className="bg-cream-50 text-noir-950 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-zinc-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Main Details Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[380px] sm:h-[480px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white sticky top-28">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-3.5 py-1.5 rounded-full border border-gold-500/30 uppercase tracking-wider">
                {service.category}
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Salon &amp; Clinical Category
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950 mt-1">
                {service.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-noir-900 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            {/* Treatments & Pricing */}
            {service.treatments && (
              <div className="p-6 sm:p-8 bg-white rounded-3xl border border-zinc-200/90 shadow-sm space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                    Treatments &amp; Pricing
                  </h3>
                  {service.startingPrice && (
                    <span className="text-xs font-medium text-gold-700">
                      {service.startingPrice}
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  {service.treatments.map((treatment, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-cream-50/80 hover:bg-cream-100/80 rounded-2xl border border-zinc-200/80 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm"
                    >
                      <div className="space-y-0.5">
                        <span className="font-semibold text-noir-950 block">{treatment.name}</span>
                        {treatment.description && (
                          <p className="text-xs text-zinc-500 leading-relaxed max-w-md">
                            {treatment.description}
                          </p>
                        )}
                        <div className="flex flex-wrap items-center gap-3 pt-1 text-xs text-zinc-600">
                          {treatment.duration && (
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-gold-600" />
                              <span>{treatment.duration}</span>
                            </span>
                          )}
                          {treatment.price && (
                            <span className="flex items-center gap-1.5 font-bold text-gold-700 bg-gold-50 px-2.5 py-0.5 rounded border border-gold-200">
                              <Tag className="w-3.5 h-3.5" />
                              <span>{treatment.price}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="shrink-0 pt-2 sm:pt-0">
                        <a
                          href={treatment.freshaUrl || bookingUrl}
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

            {/* Booking Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book on {service.bookingType === "clinical" ? "Phorest" : "Fresha"}</span>
              </a>
              <a
                href={`tel:${SITE_INFO.phonePrimaryClean}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-xs font-semibold text-zinc-700 bg-white border border-zinc-300 hover:border-gold-500 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>Call: {SITE_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
