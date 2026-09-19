import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/layout/TopBar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MobileAppTabBar from "@/components/layout/MobileAppTabBar";
import { SITE_INFO } from "@/data/siteContent";

export const metadata: Metadata = {
  metadataBase: new URL("https://glamandgolondon.com"),
  title: {
    default: "Glam and Go – Luxury Aesthetic & Beauty Salon | London",
    template: "%s | Glam & Go London",
  },
  description:
    "Welcome to Glam and Go — where expertise meets the latest technology. We provide premium hair, beauty, and aesthetic services all under one roof in Hounslow, London.",
  keywords: [
    "Glam and Go",
    "Glam and Go London",
    "Hounslow beauty salon",
    "luxury aesthetic clinic London",
    "SkinCeuticals Hounslow",
    "Hijab friendly salon London",
    "Balayage Hounslow",
    "Keratin treatment London",
    "Laser skin clinic",
    "VTCT training academy",
  ],
  authors: [{ name: "Glam & Go London" }],
  creator: "Glam & Go London",
  icons: {
    icon: "/images/logo/favicon-32x32.jpg",
    apple: "/images/logo/apple-touch-icon.jpg",
  },
  openGraph: {
    title: "Glam and Go – Luxury Aesthetic & Beauty Salon",
    description:
      "Premium hair, beauty, and aesthetic services all under one roof in Hounslow, London.",
    url: "https://glamandgolondon.com",
    siteName: "Glam & Go London",
    images: [
      {
        url: "/images/salon/salon-interior-main.jpg",
        width: 1200,
        height: 630,
        alt: "Glam & Go Luxury Salon",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-cream-50 text-noir-950 antialiased selection:bg-gold-500 selection:text-noir-950 pb-16 md:pb-0">
        <TopBar />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileAppTabBar />
      </body>
    </html>
  );
}
