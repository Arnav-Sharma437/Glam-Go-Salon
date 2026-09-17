import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={cn("max-w-3xl flex flex-col mb-12 sm:mb-16", alignmentClasses[align], className)}>
      {eyebrow && (
        <span className="text-xs sm:text-sm uppercase tracking-[0.2em] font-semibold text-gold-500 mb-3 flex items-center gap-2">
          <span className="inline-block w-6 h-[1.5px] bg-gold-400" />
          {eyebrow}
          <span className="inline-block w-6 h-[1.5px] bg-gold-400" />
        </span>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.15] mb-4",
          dark ? "text-white" : "text-noir-950"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "text-sm sm:text-base leading-relaxed font-light",
            dark ? "text-zinc-300" : "text-zinc-600"
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
