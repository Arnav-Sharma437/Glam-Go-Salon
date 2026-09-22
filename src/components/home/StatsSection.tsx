import React from "react";
import { STATS } from "@/data/siteContent";

export default function StatsSection() {
  return (
    <section className="bg-noir-950 text-white relative py-12 lg:py-16 border-y border-gold-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-noir-900/60 border border-white/5 hover:border-gold-500/40 hover:bg-noir-900/90 transition-all duration-300 group"
            >
              <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm font-medium tracking-wider uppercase text-zinc-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
