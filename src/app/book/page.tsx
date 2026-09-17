"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  Activity,
  Scissors,
  CreditCard,
  Lock,
} from "lucide-react";
import { SERVICES, SITE_INFO } from "@/data/siteContent";

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

  const serviceOptions =
    bookingType === "clinical"
      ? [
          "AESTHETICS - SkinCeuticals Clinical Peel",
          "AESTHETICS - Laser Skin Rejuvenation",
          "AESTHETICS - Radio Frequency Skin Tightening",
          "AESTHETICS - Microneedling & Collagen Therapy",
          "AESTHETICS - Free Clinical Consultation",
        ]
      : [
          "BEAUTY & MAKEUP - Signature Glow Facial",
          "BEAUTY & MAKEUP - Bridal & Party Makeup",
          "BEAUTY & MAKEUP - Precision Eyebrow Shaping / Waxing",
          "Hair - Bespoke Balayage & Colour",
          "Hair - Cut & Luxury Styling",
          "Hair - Keratin Hair Smoothing Treatment",
          "Hair - Kérastase Intensive Scalp Ritual",
          "Complete Body & Wellness Care",
        ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedService) {
      alert("Please select a service.");
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
        setResponseMsg(data.message || "Your appointment has been requested successfully!");
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
            Online Appointment Request
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-noir-950">
            Book Your Treatment
          </h1>
          <p className="text-sm text-zinc-600 max-w-lg mx-auto">
            Select your consultation type, date, and preferred specialist.
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
                Aesthetics &amp; Skin
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
              <div className="text-sm font-serif font-bold">Salon Services</div>
              <div
                className={`text-xs ${
                  bookingType === "salon" ? "text-zinc-400" : "text-zinc-500"
                }`}
              >
                Hair, Beauty &amp; Wellness
              </div>
            </div>
          </button>
        </div>

        {/* Booking Form Card */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-zinc-200/80 shadow-luxury">
          {status === "success" ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif text-noir-950">Appointment Requested!</h3>
              <p className="text-sm text-zinc-600 max-w-md mx-auto">{responseMsg}</p>
              <div className="p-4 bg-cream-50 rounded-2xl border border-zinc-200 text-xs text-zinc-700 max-w-md mx-auto text-left space-y-1">
                <div>
                  <strong>Service:</strong> {selectedService}
                </div>
                <div>
                  <strong>Date:</strong> {formData.preferredDate} at {formData.preferredTime}
                </div>
                <div>
                  <strong>Location:</strong> Treaty Centre, Hounslow
                </div>
              </div>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  onClick={() => setStatus("idle")}
                  className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider bg-noir-950 text-white hover:bg-gold-500 hover:text-noir-950 transition-colors"
                >
                  Book Another Appointment
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
                  Select {bookingType === "clinical" ? "Clinical Treatment" : "Salon Service"} *
                </label>
                <select
                  required
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                >
                  <option value="">-- Choose a treatment or service --</option>
                  {serviceOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.clientName}
                    onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                    placeholder="Full name"
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.clientEmail}
                    onChange={(e) => setFormData({ ...formData, clientEmail: e.target.value })}
                    placeholder="Email"
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.clientPhone}
                    onChange={(e) => setFormData({ ...formData, clientPhone: e.target.value })}
                    placeholder="+44 7..."
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Date, Time, Specialist */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
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
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Preferred Time Slot *
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  >
                    <option value="10:00 AM">10:00 AM</option>
                    <option value="11:00 AM">11:00 AM</option>
                    <option value="12:00 PM">12:00 PM</option>
                    <option value="1:00 PM">1:00 PM</option>
                    <option value="2:00 PM">2:00 PM</option>
                    <option value="3:00 PM">3:00 PM</option>
                    <option value="4:00 PM">4:00 PM</option>
                    <option value="5:00 PM">5:00 PM</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                    Specialist Preference
                  </label>
                  <input
                    type="text"
                    value={formData.practitionerPreference}
                    onChange={(e) =>
                      setFormData({ ...formData, practitionerPreference: e.target.value })
                    }
                    placeholder="e.g. Any / Karan / Lovely"
                    className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white"
                  />
                </div>
              </div>

              {/* Notes */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-700 mb-1.5">
                  Special Notes or Requirements
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Hijab-friendly private suite requested, skin allergies, etc."
                  className="w-full bg-cream-50 border border-zinc-300 rounded-xl py-3 px-4 text-sm text-noir-950 focus:outline-none focus:border-gold-500 focus:bg-white resize-none"
                />
              </div>

              {/* Payment Info Note */}
              <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 flex items-start gap-3">
                <Lock className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold">No upfront payment required today.</span> Our reception will review availability, confirm your slot, and discuss deposit details where applicable.
                </div>
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
                <Calendar className="w-4 h-4" />
                <span>{status === "loading" ? "Submitting Request..." : "Confirm Appointment Request"}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BookPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center">Loading Booking System...</div>}>
      <BookingContent />
    </Suspense>
  );
}
