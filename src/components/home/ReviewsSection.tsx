"use client";

import React, { useRef } from "react";
import { Star, ChevronLeft, ChevronRight, CheckCircle2, MessageSquare } from "lucide-react";
import { REVIEWS, SITE_INFO } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function ReviewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -380 : 380;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 sm:py-32 bg-cream-100 text-noir-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Trustindex Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <SectionHeading
              eyebrow="What Our Clients Say"
              title="Verified Customer Reviews"
              description="Read genuine feedback from our valued clients in Hounslow and across London."
              align="left"
              className="mb-0"
            />
            {/* Live Trust Banner */}
            <div className="mt-4 inline-flex items-center gap-3 bg-white px-4 py-2 rounded-full border border-zinc-200 shadow-sm text-xs">
              <span className="font-bold text-noir-950">{SITE_INFO.googleReviewsCount} Google reviews</span>
              <div className="flex items-center text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
              </div>
              <span className="text-zinc-500 font-medium">Verified by Google</span>
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex items-center gap-3 self-start md:self-end">
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-xs font-semibold bg-white border border-zinc-200 hover:border-gold-500 text-noir-950 transition-colors shadow-sm inline-flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-gold-500" />
              <span>Write a review</span>
            </a>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll("left")}
                aria-label="Scroll reviews left"
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-noir-950 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors shadow-sm"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scroll("right")}
                aria-label="Scroll reviews right"
                className="w-10 h-10 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-noir-950 hover:bg-gold-500 hover:text-white hover:border-gold-500 transition-colors shadow-sm"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Reviews Horizontal Slider */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-8 pt-2 snap-x snap-mandatory scroll-smooth no-scrollbar"
        >
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="flex-shrink-0 w-[300px] sm:w-[360px] md:w-[400px] snap-start bg-white p-7 rounded-2xl border border-zinc-200/80 hover:border-gold-500/60 shadow-luxury hover:shadow-luxury_hover transition-all duration-300 flex flex-col justify-between space-y-5"
            >
              <div className="space-y-4">
                {/* Rating & Google Verification Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full font-medium border border-emerald-200">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Google Verified
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-zinc-700 leading-relaxed italic line-clamp-6">
                  &ldquo;{review.text}&rdquo;
                </p>
              </div>

              {/* Author & Verification Tag */}
              <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-noir-950">{review.author}</h4>
                  <p className="text-[11px] text-zinc-400">Trustindex verified review</p>
                </div>
                <div className="w-7 h-7 rounded-full bg-zinc-100 flex items-center justify-center font-bold text-xs text-zinc-600">
                  {review.author.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
