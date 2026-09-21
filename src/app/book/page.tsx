"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  Calendar,
  CheckCircle2,
  AlertCircle,
  Activity,
  Scissors,
  ExternalLink,
  Phone,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { SERVICES, SITE_INFO, BOOKING_LINKS } from "@/data/siteContent";

function BookingContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") === "clinical" ? "clinical" : "salon";
  const initialService = searchParams.get("service") || "";

  const [bookingType, setBookingType] = useState<"clinical" | "salon">(initialType);
  const [selectedService, setSelectedService] = useState<string>(initialService);
  const [formData, setFormData] = useState({
    clientName: "",
    clientEmail: "",
    clientPhone: "",
    preferredDate: "",
    preferredTime: "11:00 AM",
    practitionerPreference: "Any Specialist",
    notes: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  useEffect(() => {
    if (searchParams.get("type") === "clinical") {
      setBookingType("clinical");
    } else if (searchParams.get("type") === "salon") {
      setBookingType("salon");
    }
    if (searchParams.get("service")) {
      setSelectedService(searchParams.get("service") || "");
    }
  }, [searchParams]);

  // Dynamically generate all verified services for selection based on category
  const clinicalServices = SERVICES.filter((s) => s.bookingType === "clinical").flatMap((s) =>
    (s.treatments || []).map((t) => `${s.title}: ${t.name} (${t.price || "Enquire"})`)
  );

  const salonServices = SERVICES.filter((s) => s.bookingType === "salon").flatMap((s) =>
    (s.treatments || []).map((t) => `${s.title}: ${t.name} (${t.price || "Enquire"})`)
  );

  const serviceOptions = bookingType === "clinical" ? clinicalServices : salonServices;

  const directExternalBookingUrl = BOOKING_LINKS.salonFresha;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a treatment.");
      return;
    }

    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          bookingType,
          serviceName: selectedService,
          ...formData,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setResponseMsg(data.message || "Your appointment request has been submitted successfully!");
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit booking request.");
      }
    } catch {
      setStatus("error");
      setResponseMsg("An error occurred while booking. Please call us directly.");
    }
  };

  return (
    <div className="bg-cream-50 text-noir-950 py-12 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-600">
            Appointments &amp; Consultations
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950">
            Book Your Appointment
          </h1>
          <p className="text-sm text-zinc-600 max-w-lg mx-auto">
            Book salon services, laser treatments, or request a clinical aesthetic consultation in Hounslow.
          </p>
        </div>

        {/* Booking Type Selector */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          <button
            type="button"
            onClick={() => {
              setBookingType("clinical");
              setSelectedService("");
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
              bookingType === "clinical"
                ? "bg-noir-950 text-white border-gold-500 shadow-luxury"
                : "bg-white text-noir-950 border-zinc-200 hover:border-gold-500/50"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                bookingType === "clinical"
                  ? "bg-gold-500/20 text-gold-400"
                  : "bg-cream-100 text-gold-600"
              }`}
            >
              <Activity className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold">Clinical Booking</div>
              <div
                className={`text-xs ${
                  bookingType === "clinical" ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Aesthetics, Peels, Skin
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => {
              setBookingType("salon");
              setSelectedService("");
            }}
            className={`p-5 rounded-2xl border text-left transition-all flex items-center gap-4 ${
              bookingType === "salon"
                ? "bg-noir-950 text-white border-gold-500 shadow-luxury"
                : "bg-white text-noir-950 border-zinc-200 hover:border-gold-500/50"
            }`}
          >
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                bookingType === "salon"
                  ? "bg-gold-500/20 text-gold-400"
                  : "bg-cream-100 text-gold-600"
              }`}
            >
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-serif font-bold">Salon &amp; Laser</div>
              <div
                className={`text-xs ${
                  bookingType === "salon" ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Laser, Hair, Beauty, Body
              </div>
            </div>
          </button>
        </div>

        {/* Direct Verified Booking Route CTA Banner */}
        <div className="mb-8 p-5 bg-noir-950 text-white rounded-2xl border border-gold-500/40 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-luxury">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-xs font-semibold uppercase tracking-wider text-gold-400 flex items-center justify-center sm:justify-start gap-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Instant Online Booking</span>
            </div>
            <p className="text-xs text-zinc-300">
              Book directly via our verified Fresha portal for live slot availability and instant confirmation.
            </p>
          </div>
          <a
            href={directExternalBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-gold-400 to-gold-500 hover:from-gold-300 hover:to-gold-400 text-noir-950 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <span>Open Fresha Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-luxury">
          {status === "success" ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-noir-950">Appointment Requested</h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">{responseMsg}</p>
              <div className="p-4 bg-cream-50 rounded-2xl border border-zinc-200 text-xs text-zinc-700 max-w-md mx-auto text-left space-y-1">
                <div>
                  <strong>Treatment:</strong> {selectedService}
                </div>
                <div>
                  <strong>Date:</strong> {formData.preferredDate} at {formData.preferredTime}
                </div>
                <div>
                  <strong>Location:</strong> Unit 21, Treaty Centre, Hounslow TW3 1ES
                </div>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors"
                >
                  Book Another
                </button>
                <Link
                  href="/"
                  className="px-6 py-2.5 rounded-full text-xs font-semibold text-zinc-700 bg-cream-100 hover:bg-cream-200 transition-colors"
                >
                  Return to Home
                </Link>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                  Select {bookingType === "clinical" ? "Clinical Treatment" : "Salon / Laser Treatment"} *
                </label>
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                >
                  <option value="">-- Choose from our verified service menu --</option>
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    placeholder="e.g. +44 7440 591153"
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={formData.clientEmail}
                  onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                />
              </div>

              {/* Date & Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                    Preferred Time Slot
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  >
                    <option value="Morning (9:30 AM - 12:00 PM)">Morning (9:30 AM - 12:00 PM)</option>
                    <option value="Early Afternoon (12:00 PM - 2:30 PM)">Early Afternoon (12:00 PM - 2:30 PM)</option>
                    <option value="Late Afternoon (2:30 PM - 5:00 PM)">Late Afternoon (2:30 PM - 5:00 PM)</option>
                    <option value="Evening (5:00 PM - 6:30 PM)">Evening (5:00 PM - 6:30 PM)</option>
                  </select>
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-2">
                  Special Notes / Skin Consultation Details
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Any specific preferences, allergies, or questions..."
                  className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white resize-none"
                />
              </div>

              {status === "error" && (
                <div className="p-4 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{responseMsg}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full text-xs font-bold uppercase tracking-widest text-noir-950 bg-gradient-to-r from-gold-400 via-gold-500 to-gold-400 hover:from-gold-300 hover:to-gold-500 shadow-luxury transition-all duration-300 disabled:opacity-50"
              >
                {status === "loading" ? "Submitting Request..." : "Request Appointment"}
              </button>

              <div className="text-center text-xs text-zinc-500 pt-2 flex items-center justify-center gap-1">
                <span>Prefer to speak directly?</span>
                <a
                  href={`tel:${SITE_INFO.phonePrimaryClean}`}
                  className="text-gold-700 font-semibold hover:underline"
                >
                  Call {SITE_INFO.phonePrimary}
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-zinc-500">Loading booking portal...</div>}>
      <BookingContent />
    </Suspense>
  );
}
