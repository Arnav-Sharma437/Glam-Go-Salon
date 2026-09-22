import React from "react";
import HeroSlider from "@/components/home/HeroSlider";
import AboutPreview from "@/components/home/AboutPreview";
import StatsSection from "@/components/home/StatsSection";
import ServicesShowcase from "@/components/home/ServicesShowcase";
import BookingCta from "@/components/home/BookingCta";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ReviewsSection from "@/components/home/ReviewsSection";
import BrandsSection from "@/components/home/BrandsSection";
import GallerySection from "@/components/home/GallerySection";

export default function HomePage() {
  return (
    <>
      {/* 3. Hero Slider (3 Slides, Full Width, Exact Copy) */}
      <HeroSlider />

      {/* 4. About Us (Editorial Split Layout, Exact Content) */}
      <AboutPreview />

      {/* 5. Experience / Stats Section (3.5K, 15+, 5+, 35+) */}
      <StatsSection />

      {/* 6. Our Services (Interactive Luxury Showcase, 6 Exact Services) */}
      <ServicesShowcase />

      {/* 7. Booking CTA (Clinical Booking vs Salon Services) */}
      <BookingCta />

      {/* 8. What Makes Us Different (6 Pillars + Salon Visual) */}
      <WhyChooseUs />

      {/* 9. Verified Customer Reviews (Google Trustindex + Authentic Reviews) */}
      <ReviewsSection />

      {/* 10. Our Products (Kérastase, SkinCeuticals, Olaplex, L'Oréal) */}
      <BrandsSection />

      {/* 11. Photo Gallery ("Timeless Beauties") */}
      <GallerySection />
    </>
  );
}
