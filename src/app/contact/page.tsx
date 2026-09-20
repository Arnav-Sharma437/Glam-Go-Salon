"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageCircle,
  Navigation,
  Calendar,
} from "lucide-react";
import { SITE_INFO } from "@/data/siteContent";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We have received your message.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit. Please try again.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("An error occurred. Please contact us by phone.");
    }
  };

  return (
    <div className="bg-cream-50 text-noir-950">
      {/* Page Header */}
      <section className="bg-noir-950 text-white py-20 lg:py-28 relative overflow-hidden border-b border-gold-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-xs uppercase tracking-[0.25em] font-semibold text-gold-400 mb-3 inline-block">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif">Contact Us</h1>
          <p className="mt-4 text-zinc-300 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Located in the Treaty Centre on High Street, Hounslow.
          </p>
        </div>
      </section>

      {/* Quick Action Bar (Book Now, Call Us, WhatsApp Us, Get Directions) */}
      <section className="bg-white border-b border-zinc-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/book"
              className="p-4 rounded-2xl bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Now</span>
            </Link>

            <a
              href={`tel:${SITE_INFO.phonePrimaryClean}`}
              className="p-4 rounded-2xl bg-cream-50 border border-zinc-200 hover:border-gold-500 text-noir-950 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Phone className="w-4 h-4 text-gold-600" />
              <span>Call Us</span>
            </a>

            <a
              href={SITE_INFO.whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 text-emerald-950 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={SITE_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-2xl bg-cream-50 border border-zinc-200 hover:border-gold-500 text-noir-950 transition-all flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              <Navigation className="w-4 h-4 text-gold-600" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Section: Details & Contact Form */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info Cards */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600 block mb-1">
                  Salon Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-noir-950">
                  Visit Or Call Glam &amp; Go
                </h2>
              </div>

              <div className="space-y-4 pt-2">
                {/* Address Card */}
                <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-noir-950">Address</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      {SITE_INFO.address}
                    </p>
                    <a
                      href={SITE_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gold-600 hover:underline mt-2 inline-block font-semibold"
                    >
                      View on Google Maps →
                    </a>
                  </div>
                </div>

                {/* Telephone Card */}
                <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-noir-950">Salon Phone Numbers</h3>
                    <div className="mt-1 space-y-1 text-xs sm:text-sm">
                      <div>
                        <a href={`tel:${SITE_INFO.phonePrimaryClean}`} className="text-gold-600 hover:underline">
                          {SITE_INFO.phonePrimary} (Primary)
                        </a>
                      </div>
                      <div>
                        <a href={`tel:${SITE_INFO.phoneSecondaryClean}`} className="text-gold-600 hover:underline">
                          {SITE_INFO.phoneSecondary} (Secondary)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Academy Contact Card */}
                <div className="p-6 bg-gold-50/50 rounded-2xl border border-gold-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500 text-noir-950 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-noir-950">Glam &amp; Go Academy</h3>
                    <div className="mt-1 space-y-1 text-xs sm:text-sm">
                      <div>
                        <a href={`tel:${SITE_INFO.phoneAcademyClean}`} className="text-gold-700 font-medium hover:underline">
                          {SITE_INFO.phoneAcademy}
                        </a>
                      </div>
                      <a
                        href={SITE_INFO.academyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-gold-700 hover:underline mt-1 inline-block font-semibold"
                      >
                        Visit Training Academy Website →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-noir-950">Email</h3>
                    <a
                      href={`mailto:${SITE_INFO.email}`}
                      className="text-xs sm:text-sm text-gold-600 hover:underline mt-1 block break-all"
                    >
                      {SITE_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Hours Card */}
                <div className="p-6 bg-white rounded-2xl border border-zinc-200/80 shadow-sm flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 text-gold-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-noir-950">Opening Hours</h3>
                    <p className="text-xs sm:text-sm text-zinc-600 mt-1 leading-relaxed">
                      {SITE_INFO.openingHours}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-luxury">
              <div className="mb-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-gold-600">
                  Send A Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-serif text-noir-950">
                  Enquiry Form
                </h2>
                <p className="text-xs sm:text-sm text-zinc-500">
                  Please complete the form below and our team will get back to you.
                </p>
              </div>

              {status === "success" ? (
                <div className="p-8 text-center bg-emerald-50 rounded-2xl border border-emerald-200 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h3 className="text-xl font-serif text-emerald-900">Message Sent</h3>
                  <p className="text-sm text-emerald-700">{responseMsg}</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-600 text-white hover:bg-emerald-700"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Your email"
                        className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Your phone"
                        className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Service enquiry"
                        className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we assist you?"
                      className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white transition-all resize-none"
                    />
                  </div>

                  {status === "error" && (
                    <div className="p-3 bg-rose-50 text-rose-700 text-xs rounded-xl flex items-center gap-2 border border-rose-200">
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      <span>{responseMsg}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{status === "loading" ? "Sending..." : "Submit Enquiry"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
