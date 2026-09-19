import React from "react";
import { Metadata } from "next";
import ServicesInteractiveView from "@/components/services/ServicesInteractiveView";

export const metadata: Metadata = {
  title: "Our Services | Laser, Facials, Aesthetics, Skin, Hair & Beauty | Glam & Go",
  description: "Explore the complete treatment catalogue for Glam & Go Hounslow: Laser Hair Removal, Facials, Skin Treatments, Aesthetics & Injectables, Hair, Beauty, and Body Wellness.",
};

export default function ServicesPage() {
  return <ServicesInteractiveView />;
}
