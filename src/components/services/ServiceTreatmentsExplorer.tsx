"use client";

import React, { useState, useMemo } from "react";
import {
  Clock,
  Tag,
  ArrowRight,
  Search,
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  X,
  Filter,
} from "lucide-react";
import { TreatmentItem, PackageItem } from "@/data/siteContent";

interface ServiceTreatmentsExplorerProps {
  treatments?: TreatmentItem[];
  packages?: PackageItem[];
  serviceTitle: string;
  serviceCategory: string;
  startingPrice?: string;
  defaultFreshaUrl: string;
  slug: string;
}

const AESTHETIC_GROUPS = [
  { id: "all", label: "All Treatments" },
  { id: "prp", label: "PRP Therapy", keywords: ["prp", "o-shot", "joint"] },
  { id: "anti-wrinkle", label: "Anti-Wrinkle", keywords: ["anti-wrinkle", "botox", "smokers", "periorbital", "bunny", "bruxism", "jawline", "nefertiti", "sweating", "hyperhidrosis"] },
  { id: "fillers", label: "Dermal Fillers", keywords: ["filler", "lip", "chin", "nose", "hand", "nasolabial", "cheek", "augmentation", "profhilo"] },
  { id: "boosters", label: "Skin Boosters & Threads", keywords: ["booster", "polynucleotide", "pdo", "thread", "microneedling", "exosome", "rejuvenation"] },
  { id: "fat-dissolve", label: "Fat Dissolving", keywords: ["fat", "cavitation", "small areas", "large areas"] },
  { id: "im", label: "IM Injections", keywords: ["vitamin b12", "vitamin c", "biotin", "fat burner", "vitamin d"] },
  { id: "iv", label: "IV Drips", keywords: ["drip", "hydration", "magnesium", "immunity", "glutathione", "multivitamin", "brightening", "anti-ageing", "iron", "weight loss", "nad"] },
];

export default function ServiceTreatmentsExplorer({
  treatments = [],
  packages = [],
  serviceTitle,
  serviceCategory,
  startingPrice,
  defaultFreshaUrl,
  slug,
}: ServiceTreatmentsExplorerProps) {
  const [activeTab, setActiveTab] = useState<"treatments" | "packages">("treatments");
  const [selectedSubgroup, setSelectedSubgroup] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const isAesthetics = slug === "aesthetics-injectables";
  const hasPackages = packages.length > 0;

  const filteredTreatments = useMemo(() => {
    return treatments.filter((item) => {
      if (isAesthetics && selectedSubgroup !== "all") {
        const group = AESTHETIC_GROUPS.find((g) => g.id === selectedSubgroup);
        if (group && group.keywords) {
          const itemText = `${item.name} ${item.description || ""}`.toLowerCase();
          const matchesGroup = group.keywords.some((kw) => itemText.includes(kw));
          if (!matchesGroup) return false;
        }
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchesName = item.name.toLowerCase().includes(q);
        const matchesDesc = (item.description || "").toLowerCase().includes(q);
        const matchesPrice = (item.price || "").toLowerCase().includes(q);
        if (!matchesName && !matchesDesc && !matchesPrice) return false;
      }

      return true;
    });
  }, [treatments, selectedSubgroup, searchQuery, isAesthetics]);

  const filteredPackages = useMemo(() => {
    if (!searchQuery.trim()) return packages;
    const q = searchQuery.toLowerCase().trim();
    return packages.filter((pkg) => {
      const matchesTitle = pkg.title.toLowerCase().includes(q);
      const matchesCategory = pkg.category.toLowerCase().includes(q);
      const matchesDesc = (pkg.description || "").toLowerCase().includes(q);
      const matchesPrice = `${pkg.singlePrice} ${pkg.coursePrice}`.toLowerCase().includes(q);
      return matchesTitle || matchesCategory || matchesDesc || matchesPrice;
    });
  }, [packages, searchQuery]);

  return (
    <div className="bg-white rounded-3xl border border-zinc-200 shadow-sm overflow-hidden">
      {/* Top Header & Mode Tabs */}
      <div className="p-6 sm:p-8 bg-gradient-to-b from-cream-50 to-white border-b border-zinc-100">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-widest text-gold-600">
                Catalogue &amp; Pricing
              </span>
              {startingPrice && (
                <span className="text-[11px] font-medium text-zinc-500 bg-white px-2.5 py-0.5 rounded-full border border-zinc-200">
                  {startingPrice}
                </span>
              )}
            </div>
            <h2 className="text-xl sm:text-2xl font-serif text-noir-950 mt-1">
              Select Your {serviceTitle} Treatment
            </h2>
          </div>

          {/* Treatments vs Packages Switcher */}
          {hasPackages && (
            <div className="inline-flex p-1 bg-zinc-100 rounded-2xl border border-zinc-200 self-start md:self-auto">
              <button
                type="button"
                onClick={() => setActiveTab("treatments")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "treatments"
                    ? "bg-noir-950 text-gold-400 shadow-md"
                    : "text-zinc-600 hover:text-noir-950"
                }`}
              >
                <span>Treatments</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeTab === "treatments" ? "bg-gold-500/20 text-gold-300" : "bg-zinc-200 text-zinc-700"
                }`}>
                  {treatments.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveTab("packages")}
                className={`px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 ${
                  activeTab === "packages"
                    ? "bg-noir-950 text-gold-400 shadow-md"
                    : "text-zinc-600 hover:text-noir-950"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>Packages &amp; Courses</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  activeTab === "packages" ? "bg-gold-500/20 text-gold-300" : "bg-zinc-200 text-zinc-700"
                }`}>
                  {packages.length}
                </span>
              </button>
            </div>
          )}
        </div>

        {/* Search Input */}
        <div className="mt-6 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${activeTab === "treatments" ? treatments.length : packages.length} ${serviceTitle.toLowerCase()} options...`}
              className="w-full bg-white border border-zinc-200 rounded-full pl-10 pr-10 py-2.5 text-xs sm:text-sm text-noir-950 placeholder-zinc-400 focus:outline-none focus:border-gold-500 focus:ring-2 focus:ring-gold-500/20 transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 p-1"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Aesthetics Subcategory Filter Chips */}
        {isAesthetics && activeTab === "treatments" && (
          <div className="mt-4 pt-4 border-t border-zinc-200/60">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
              <span className="text-[10px] uppercase font-bold text-zinc-400 tracking-wider flex items-center gap-1 shrink-0 mr-1">
                <Filter className="w-3 h-3" />
                Category:
              </span>
              {AESTHETIC_GROUPS.map((grp) => {
                const isSelected = selectedSubgroup === grp.id;
                return (
                  <button
                    key={grp.id}
                    type="button"
                    onClick={() => setSelectedSubgroup(grp.id)}
                    className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all shrink-0 ${
                      isSelected
                        ? "bg-noir-950 text-gold-400 shadow-sm"
                        : "bg-white text-zinc-600 hover:bg-zinc-100 hover:text-noir-950 border border-zinc-200"
                    }`}
                  >
                    {grp.label}
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Main Grid View */}
      <div className="p-6 sm:p-8">
        {activeTab === "treatments" ? (
          filteredTreatments.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              {filteredTreatments.map((treatment, idx) => {
                const bookUrl = treatment.freshaUrl || defaultFreshaUrl;
                return (
                  <div
                    key={idx}
                    className="p-4 sm:p-5 rounded-2xl bg-cream-50/60 hover:bg-cream-100/90 border border-zinc-200/80 hover:border-gold-500/50 transition-all duration-200 flex flex-col justify-between group shadow-sm hover:shadow-md"
                  >
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-serif font-bold text-sm sm:text-base text-noir-950 group-hover:text-gold-700 transition-colors leading-snug">
                          {treatment.name}
                        </h3>
                      </div>

                      {treatment.description && (
                        <p className="text-xs text-zinc-600 line-clamp-2 leading-relaxed">
                          {treatment.description}
                        </p>
                      )}
                    </div>

                    <div className="pt-3 mt-3 border-t border-zinc-200/60 flex items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {treatment.price && (
                          <span className="font-bold text-xs text-gold-800 bg-gold-100/80 px-2.5 py-1 rounded-md border border-gold-300/60">
                            {treatment.price}
                          </span>
                        )}
                        {treatment.duration && (
                          <span className="flex items-center gap-1 text-[11px] text-zinc-500 font-medium">
                            <Clock className="w-3 h-3 text-zinc-400" />
                            <span>{treatment.duration}</span>
                          </span>
                        )}
                      </div>

                      <a
                        href={bookUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-sm flex items-center gap-1.5 shrink-0 hover:scale-105 active:scale-95"
                      >
                        <span>Book</span>
                        <ArrowRight className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-zinc-700">No treatments match your search.</p>
              <p className="text-xs text-zinc-500">Try changing keywords or resetting your filter.</p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedSubgroup("all");
                }}
                className="mt-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )
        ) : (
          filteredPackages.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-600">
                  Multi-session packages structured for maximum clinical efficacy and cost savings.
                </p>
                <span className="text-xs font-bold text-gold-700 bg-gold-50 px-2.5 py-1 rounded-full border border-gold-200">
                  {filteredPackages.length} Courses Available
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {filteredPackages.map((pkg) => {
                  const bookUrl = pkg.freshaUrl || defaultFreshaUrl;
                  return (
                    <div
                      key={pkg.id}
                      className="p-5 rounded-2xl bg-noir-950 text-white border border-gold-500/30 hover:border-gold-400/80 transition-all flex flex-col justify-between group shadow-lg"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-gold-400 bg-white/10 px-2.5 py-0.5 rounded">
                            {pkg.category}
                          </span>
                          {pkg.saving && (
                            <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-full border border-emerald-500/30">
                              {pkg.saving}
                            </span>
                          )}
                        </div>

                        <h3 className="font-serif font-bold text-base text-white group-hover:text-gold-400 transition-colors">
                          {pkg.title}
                        </h3>

                        {pkg.description && (
                          <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2">
                            {pkg.description}
                          </p>
                        )}

                        <div className="pt-2 border-t border-white/10 grid grid-cols-2 gap-2 text-xs">
                          <div>
                            <span className="text-zinc-400 text-[10px] uppercase block">Single Session</span>
                            <span className="font-semibold text-zinc-200">{pkg.singlePrice}</span>
                          </div>
                          <div>
                            <span className="text-gold-400 text-[10px] uppercase block">
                              Course ({pkg.courseSessions})
                            </span>
                            <span className="font-bold text-gold-400 text-sm">{pkg.coursePrice}</span>
                          </div>
                        </div>
                      </div>

                      <div className="pt-4 mt-3 border-t border-white/10">
                        <a
                          href={bookUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full text-xs font-bold uppercase tracking-wider text-noir-950 bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 transition-all shadow-sm"
                        >
                          <CalendarCheck className="w-3.5 h-3.5" />
                          <span>Book Package</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="py-12 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-zinc-100 text-zinc-400 flex items-center justify-center mx-auto">
                <Search className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-zinc-700">No packages match your search.</p>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="mt-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors"
              >
                Clear Search
              </button>
            </div>
          )
        )}
      </div>

      {/* Footer Info Notice */}
      <div className="px-6 py-4 bg-cream-50/80 border-t border-zinc-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
          <span>Real-time appointment availability &amp; instant confirmation on Fresha.</span>
        </div>
        <a
          href={defaultFreshaUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-bold text-gold-700 hover:text-gold-800 underline underline-offset-4 shrink-0"
        >
          View Full Menu on Fresha &rarr;
        </a>
      </div>
    </div>
  );
}
