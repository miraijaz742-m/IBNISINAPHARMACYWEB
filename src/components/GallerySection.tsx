import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/site";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 w-full bg-premium-light relative overflow-hidden py-20 md:py-24 lg:py-28">
      {/* Background soft glow / abstract shapes */}
      <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-primary/5 blur-[100px]" />
      <div className="section-inner relative z-10">
        <p className="section-eyebrow">Inside the store</p>
        <h2 className="section-title">Gallery</h2>
        <p className="section-intro">
          A calm, clinical environment—organised shelves and a space built for safe dispensing.
        </p>
        <GalleryGrid images={galleryImages} />
      </div>
    </section>
  );
}
