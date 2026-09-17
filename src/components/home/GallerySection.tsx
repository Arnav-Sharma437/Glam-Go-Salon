import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function GallerySection() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50 text-noir-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Photo Gallery"
            title="Timeless Beauties"
            align="left"
            className="mb-0"
          />

          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors self-start md:self-end shadow-sm"
          >
            <span>View Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Editorial Masonry/Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div
              key={item.id}
              className="relative h-72 sm:h-80 lg:h-96 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md group cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Text Details */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 bg-noir-950/60 px-2.5 py-1 rounded-md backdrop-blur-sm">
                  {item.category}
                </span>
                <h3 className="text-lg font-serif mt-2 font-medium">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
