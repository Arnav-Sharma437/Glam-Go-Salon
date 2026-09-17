"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Sparkles, HelpCircle, Phone } from "lucide-react";
import { FAQS, SITE_INFO } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

export default function FaqsPage() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Frequently Asked Questions
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Got Questions?</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Everything you need to know about our treatments, booking policies, consultations, and salon etiquette.
          </p>
        </div>
      </section>

      {/* FAQs Accordion */}
      <section className="py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-zinc-200/80 overflow-hidden shadow-sm transition-all duration-300"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-lg sm:text-xl text-noir-950 font-medium">
                      {faq.question}
                    </span>
                    <span
                      className={`p-2 rounded-full bg-cream-100 text-gold-600 transition-transform duration-300 flex-shrink-0 ${
                        isOpen ? "rotate-180 bg-gold-500 text-white" : ""
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-7 pb-6 pt-0 text-sm sm:text-base text-zinc-600 leading-relaxed border-t border-zinc-100 mt-2 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div className="mt-16 bg-noir-950 text-white p-8 sm:p-10 rounded-3xl border border-gold-500/30 text-center space-y-4">
            <h3 className="text-2xl font-serif text-gold-400">Still have questions?</h3>
            <p className="text-sm text-zinc-300 max-w-lg mx-auto">
              Our specialists are always on hand to assist you with treatment recommendations and booking inquiries.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={`tel:${SITE_INFO.phonePrimaryClean}`}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gold-400 hover:bg-gold-300 transition-colors shadow-luxury"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SITE_INFO.phonePrimary}</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-colors"
              >
                <span>Send Us A Message</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
