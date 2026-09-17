import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, ArrowRight, Check, Sparkles, Phone, CalendarCheck } from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/siteContent";

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
    title: `${service.title} | Glam & Go London`,
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
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-4 left-4 bg-noir-950/80 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-wider">
                {service.category}
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Premium Treatment
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950 mt-1">
                {service.title}
              </h1>
            </div>

            <p className="text-base sm:text-lg text-noir-900 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            {/* Popular Treatments */}
            {service.popularTreatments && (
              <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm space-y-4">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-600 flex items-center gap-2">
                  <Sparkles className="w-4 h-4" /> Popular In-Clinic Options &amp; Treatments
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.popularTreatments.map((treatment, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-700">
                      <span className="w-4 h-4 rounded-full bg-gold-500/20 text-gold-600 flex items-center justify-center flex-shrink-0">
                        <Check className="w-2.5 h-2.5" />
                      </span>
                      <span>{treatment}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Booking Actions */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                href={`/book?service=${encodeURIComponent(service.title)}`}
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book This Service</span>
              </Link>
              <a
                href={`tel:${SITE_INFO.phonePrimaryClean}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-semibold text-zinc-700 bg-white border border-zinc-300 hover:border-gold-500 transition-colors shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-gold-500" />
                <span>Call to Enquire</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
