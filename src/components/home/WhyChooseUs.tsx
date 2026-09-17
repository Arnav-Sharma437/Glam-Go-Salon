import React from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Award,
  Sparkles,
  MessageSquareHeart,
  MapPin,
  HeartHandshake,
} from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/siteContent";
import SectionHeading from "@/components/ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-gold-500" />,
  Award: <Award className="w-6 h-6 text-gold-500" />,
  Sparkles: <Sparkles className="w-6 h-6 text-gold-500" />,
  MessageSquareHeart: <MessageSquareHeart className="w-6 h-6 text-gold-500" />,
  MapPin: <MapPin className="w-6 h-6 text-gold-500" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-gold-500" />,
};

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32 bg-cream-50 text-noir-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Distinctive Excellence"
          title="What Makes Us Different?"
          description="We take immense pride in setting the standard for care, comfort, and clinical precision in London."
          align="center"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: 6 Distinctive Value Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {WHY_CHOOSE_US.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-zinc-200/80 hover:border-gold-500/50 shadow-sm hover:shadow-luxury transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold-500/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-gold-500/20 transition-all duration-300">
                  {iconMap[item.iconName]}
                </div>
                <h3 className="text-lg font-serif font-semibold text-noir-950 mb-2 group-hover:text-gold-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Premium Salon Visual Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative h-[480px] sm:h-[560px] w-full rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <Image
                src="/images/salon/salon-atmosphere.jpg"
                alt="Glam & Go Salon Care & Professional Atmosphere"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-noir-950/80 via-noir-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                <div className="text-xs uppercase tracking-widest text-gold-400 font-semibold">
                  Hounslow Flagship
                </div>
                <div className="text-xl font-serif">
                  A Welcoming Space Designed For Your Peace Of Mind
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
