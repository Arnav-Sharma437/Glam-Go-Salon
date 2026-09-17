"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Calendar } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

const allGalleryPhotos = [
  ...GALLERY_ITEMS,
  { id: "gal-7", image: "/images/salon-1.jpg", title: "Flagship Salon Floor", category: "Salon Space" },
  { id: "gal-8", image: "/images/salon-4.jpg", title: "Consultation & Aesthetics Area", category: "Clinic Interior" },
  { id: "gal-9", image: "/images/hairstylists-working-with-customers-at-the-hair-sa-2023-11-27-05-05-59-utc2.webp", title: "Styling Artistry in Motion", category: "Hair Artistry" },
  { id: "gal-10", image: "/images/AD_08736-scaled-880x952.jpg", title: "Private Treatment Suite", category: "Aesthetics" },
  { id: "gal-11", image: "/images/glam-go-beauty-scaled.jpg", title: "Signature Glow Facials", category: "Beauty & Glow" },
  { id: "gal-12", image: "/images/glam-go-wellness-scaled.jpg", title: "Wellness Care Suite", category: "Salon Space" },
];

export default function GalleryPage() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Hair Artistry", "Aesthetics", "Beauty & Glow", "Salon Space", "Clinic Interior"];

  const filteredPhotos =
    filter === "All"
      ? allGalleryPhotos
      : allGalleryPhotos.filter((p) => p.category === filter);

  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Visual Transformations
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Timeless Beauties Gallery</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Explore authentic moments, couture hairstyling, and clinical aesthetics created at our Hounslow salon.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  filter === cat
                    ? "bg-noir-950 text-white shadow-md"
                    : "bg-white text-zinc-700 hover:text-noir-950 border border-zinc-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Photos Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPhotos.map((item) => (
              <div
                key={item.id}
                className="relative h-80 sm:h-96 rounded-2xl overflow-hidden border border-zinc-200/80 shadow-md group"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-gold-400 bg-noir-950/80 px-2.5 py-1 rounded">
                    {item.category}
                  </span>
                  <h3 className="text-lg font-serif mt-2">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>

          {/* Book CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Your Transformation</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
