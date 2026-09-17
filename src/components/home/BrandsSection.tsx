import React from "react";
import Image from "next/image";
import { BRANDS } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function BrandsSection() {
  return (
    <section className="py-24 sm:py-32 bg-noir-950 text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="What We Provide"
          title="Our Products"
          dark={true}
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="bg-noir-900/80 p-8 rounded-2xl border border-white/10 hover:border-gold-500/60 transition-all duration-300 flex flex-col items-center justify-center text-center space-y-4 group hover:shadow-gold_glow"
            >
              {/* Brand Logo Container */}
              <div className="relative h-20 w-44 filter brightness-95 contrast-125 transition-transform duration-300 group-hover:scale-105 flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="pt-2 border-t border-white/5 w-full">
                <h3 className="text-base font-serif font-semibold text-gold-400">
                  {brand.name}
                </h3>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  {brand.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
