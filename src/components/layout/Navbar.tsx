"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ExternalLink, Calendar } from "lucide-react";
import { SITE_INFO } from "@/data/siteContent";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  {
    label: "Academy",
    href: SITE_INFO.academyUrl,
    isExternal: true,
    badge: "External Portal",
  },
  { label: "FAQs", href: "/faqs" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-noir-950/95 backdrop-blur-md shadow-2xl border-b border-gold-500/20 py-3"
          : "bg-noir-950 border-b border-white/5 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-12 w-44 sm:h-14 sm:w-52 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/logo/logo.png"
                alt="Glam & Go London"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative text-sm font-medium text-gold-400 hover:text-gold-300 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <span>{link.label}</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-medium tracking-wide transition-colors py-1 ${
                    isActive
                      ? "text-gold-400 font-semibold"
                      : "text-zinc-200 hover:text-gold-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold-400 to-gold-600 rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/book"
              className="relative inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300 hover:scale-105 hover:shadow-gold_glow active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/book"
              className="px-3.5 py-1.5 rounded-full text-[11px] font-bold tracking-wider uppercase text-noir-950 bg-gold-400 hover:bg-gold-300 transition-colors"
            >
              Book
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-zinc-300 hover:text-white hover:bg-noir-900 border border-white/10 transition-colors focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[73px] bg-noir-950/98 backdrop-blur-xl border-b border-gold-500/20 px-6 py-6 space-y-4 shadow-2xl transition-all">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.isExternal) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between py-2 text-base font-medium text-gold-400 hover:text-gold-300 border-b border-white/5"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs bg-gold-500/20 text-gold-300 px-2 py-0.5 rounded border border-gold-500/30 flex items-center gap-1">
                      Dedicated Website <ExternalLink className="w-3 h-3" />
                    </span>
                  </a>
                );
              }

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`flex items-center justify-between py-2 text-base font-medium border-b border-white/5 transition-colors ${
                    isActive ? "text-gold-400 font-semibold" : "text-zinc-200 hover:text-gold-400"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />}
                </Link>
              );
            })}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <Link
              href="/book"
              className="w-full text-center py-3 rounded-full text-xs font-bold uppercase tracking-widest bg-gradient-to-r from-gold-400 to-gold-600 text-noir-950 hover:from-gold-300 hover:to-gold-500 shadow-luxury"
            >
              Book An Appointment
            </Link>
            <div className="text-center text-xs text-zinc-400 pt-2">
              Call us: <a href={`tel:${SITE_INFO.phonePrimaryClean}`} className="text-gold-400 hover:underline">{SITE_INFO.phonePrimary}</a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
