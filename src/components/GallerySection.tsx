import { GalleryGrid } from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/site";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 w-full bg-sky-50 py-20 md:py-24 lg:py-28">
      <div className="section-inner">
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
