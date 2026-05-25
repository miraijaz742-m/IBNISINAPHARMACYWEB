import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { GallerySection } from "@/components/GallerySection";
import { Hero } from "@/components/Hero";
import { InStoreSection } from "@/components/InStoreSection";
import { MedicineAvailabilitySection } from "@/components/MedicineAvailabilitySection";

import { ReviewsSection } from "@/components/ReviewsSection";
import { SiteFooter } from "@/components/SiteFooter";
import { TrustSection } from "@/components/TrustSection";

export default function HomePage() {
  return (
    <>
      <main className="min-h-screen">
        <Hero />

        <AboutSection />
        <TrustSection />
        <InStoreSection />
        <ReviewsSection />
        <MedicineAvailabilitySection />
        <GallerySection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
