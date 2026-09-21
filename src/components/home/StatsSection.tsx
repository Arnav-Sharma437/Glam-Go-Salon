import React from "react";
import { Award, Leaf, ThumbsUp, Users } from "lucide-react";
import { STATS } from "@/data/siteContent";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Leaf,
  ThumbsUp,
  Users,
};

export default function StatsSection() {
  return (
    <section className="bg-noir-950 text-white relative py-12 lg:py-16 border-y border-gold-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon ? iconMap[stat.icon] : null;
            return (
              <div
                key={idx}
                className="flex flex-col items-center justify-center text-center p-6 sm:p-8 rounded-2xl bg-noir-900/60 border border-white/5 hover:border-gold-500/40 hover:bg-noir-900/90 transition-all duration-300 group"
              >
                {Icon && (
                  <div className="w-12 h-12 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center mb-4 text-gold-400 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all">
                    <Icon className="w-6 h-6 stroke-[1.5]" />
                  </div>
                )}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-600 mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-medium tracking-wider text-zinc-300">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
