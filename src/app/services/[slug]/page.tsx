import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { ArrowLeft, Phone, CalendarCheck, Sparkles, ShieldCheck } from "lucide-react";
import { SERVICES, SITE_INFO, BOOKING_LINKS, TREATMENT_PACKAGES } from "@/data/siteContent";
import ServiceTreatmentsExplorer from "@/components/services/ServiceTreatmentsExplorer";

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

  const bookingUrl = BOOKING_LINKS.salonFresha;

  const categoryPackages = TREATMENT_PACKAGES.filter((p) => {
    if (slug === "aesthetics-injectables") return true;
    if (slug === "facials") return p.category === "Chemical Peels" || p.category === "Microneedling" || p.category === "Advanced Facials";
    if (slug === "skin-treatments") return p.category === "PRP Therapy" || p.category === "Microneedling" || p.category === "Chemical Peels";
    return false;
  });

  return (
    <div className="bg-cream-50 text-noir-950 py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs uppercase font-semibold tracking-wider text-zinc-500 hover:text-gold-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to All Services</span>
          </Link>
        </div>

        {/* Main Details Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-3xl p-6 sm:p-10 border border-zinc-200/90 shadow-sm">
          {/* Left: Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[280px] sm:h-[360px] w-full rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <Image
                src={service.image}
                alt={service.title}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-noir-950/85 backdrop-blur-md text-gold-400 text-xs font-semibold px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-wider">
                {service.category}
              </div>
            </div>
          </div>

          {/* Right: Detailed Content */}
          <div className="lg:col-span-7 space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Salon &amp; Clinical Category
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950 mt-1">
                {service.title}
              </h1>
            </div>

            <p className="text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              {service.fullDesc}
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all"
              >
                <CalendarCheck className="w-4 h-4" />
                <span>Book on Fresha</span>
              </a>
              <a
                href={`tel:${SITE_INFO.phonePrimaryClean}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-semibold text-zinc-700 bg-cream-50 border border-zinc-300 hover:border-gold-500 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-600" />
                <span>Call: {SITE_INFO.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Interactive Treatment & Package Explorer (Eliminates excessive scrolling with compact 2-column grid, search, and category pills) */}
        <ServiceTreatmentsExplorer
          treatments={service.treatments}
          packages={categoryPackages}
          serviceTitle={service.title}
          serviceCategory={service.category}
          startingPrice={service.startingPrice}
          defaultFreshaUrl={bookingUrl}
          slug={slug}
        />

        {/* Clinical suitability note */}
        <div className="p-4 rounded-2xl bg-white border border-zinc-200/90 text-center text-xs text-zinc-600 max-w-3xl mx-auto flex items-center justify-center gap-2 shadow-sm">
          <ShieldCheck className="w-4 h-4 text-gold-600 shrink-0" />
          <span>All advanced aesthetic treatments, laser sessions and IV infusions are subject to initial consultation and clinical suitability.</span>
        </div>
      </div>
    </div>
  );
}
