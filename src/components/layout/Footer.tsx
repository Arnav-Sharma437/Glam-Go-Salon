"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Send,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
} from "lucide-react";
import { SITE_INFO, SERVICES, ABOUT_CONTENT, BOOKING_LINKS } from "@/data/siteContent";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setMessage(data.message || "Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Failed to subscribe. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again later.");
    }
  };

  return (
    <footer className="bg-noir-950 text-white border-t border-white/10 pt-16 pb-12 relative overflow-hidden">
      {/* Subtle gold glow accent in corner */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative h-14 w-52">
                <Image
                  src="/images/logo/logo.png"
                  alt="Glam & Go"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md">
              {ABOUT_CONTENT.founderNote}
            </p>

            {/* Newsletter */}
            <div className="pt-2">
              <h4 className="text-xs uppercase tracking-widest text-gold-400 font-semibold mb-2">
                Newsletter Sign Up
              </h4>
              <p className="text-xs text-zinc-400 mb-3">
                Sign up for news and special offers
              </p>
              <form onSubmit={handleSubscribe} className="relative flex max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full bg-noir-900 border border-white/15 rounded-l-lg py-2.5 px-3.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500 transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-noir-950 font-bold px-4 rounded-r-lg flex items-center justify-center transition-all disabled:opacity-50"
                  aria-label="Subscribe to newsletter"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
              {status === "success" && (
                <p className="text-xs text-emerald-400 mt-2 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {message}
                </p>
              )}
              {status === "error" && (
                <p className="text-xs text-rose-400 mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {message}
                </p>
              )}
            </div>
          </div>

          {/* Col 2: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 border-b border-white/10 pb-2">
              Services
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-gold-400 transition-colors block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="text-xs text-gold-400/80 hover:text-gold-300 underline underline-offset-4 pt-1 block"
                >
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 border-b border-white/10 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm text-zinc-300">
              <li>
                <Link href="/" className="hover:text-gold-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <a
                  href={SITE_INFO.academyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors flex items-center gap-1 text-gold-400"
                >
                  <span>Academy</span>
                  <ExternalLink className="w-3 h-3 opacity-70" />
                </a>
              </li>
              <li>
                <Link href="/about" className="hover:text-gold-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-gold-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-gold-400 transition-colors">
                  FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gold-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href={BOOKING_LINKS.salonFresha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors font-medium text-gold-400"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold-400 border-b border-white/10 pb-2">
              Contact
            </h3>
            <div className="space-y-3 text-sm text-zinc-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-xs leading-relaxed">{SITE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_INFO.phonePrimaryClean}`}
                  className="text-xs hover:text-gold-400 transition-colors"
                >
                  {SITE_INFO.phonePrimary}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_INFO.phoneSecondaryClean}`}
                  className="text-xs hover:text-gold-400 transition-colors"
                >
                  {SITE_INFO.phoneSecondary}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`tel:${SITE_INFO.phoneAcademyClean}`}
                  className="text-xs hover:text-gold-400 transition-colors"
                >
                  Academy: {SITE_INFO.phoneAcademy}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <a
                  href={`mailto:${SITE_INFO.email}`}
                  className="text-xs hover:text-gold-400 transition-colors break-all"
                >
                  {SITE_INFO.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-noir-900 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-gold-400 hover:border-gold-500 transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-noir-900 border border-white/15 flex items-center justify-center text-zinc-300 hover:text-gold-400 hover:border-gold-500 transition-all"
                >
                  <Facebook className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <p>
            Copyright © {SITE_INFO.copyrightYear} All Right Reserved{" "}
            <span className="text-gold-400 font-semibold">{SITE_INFO.name}</span>
          </p>
          <div className="flex items-center gap-6">
            <Link href="/faqs" className="hover:text-zinc-200 transition-colors">
              Privacy &amp; Policy
            </Link>
            <Link href="/faqs" className="hover:text-zinc-200 transition-colors">
              Terms &amp; Conditions
            </Link>
            <a
              href={`tel:${SITE_INFO.phonePrimaryClean}`}
              className="hover:text-gold-400 text-gold-400/90 font-medium transition-colors"
            >
              Treaty Centre, Hounslow
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
