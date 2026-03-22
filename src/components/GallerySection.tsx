import Image from "next/image";
import { galleryImages } from "@/lib/site";

export function GallerySection() {
  return (
    <section id="gallery" className="scroll-mt-24 bg-white section-y">
      <div className="section-inner">
        <p className="section-eyebrow">Inside the store</p>
        <h2 className="section-title">Gallery</h2>
        <p className="section-intro">
          A calm, clinical environment—organised shelves and a space built for safe dispensing.
        </p>
        <ul className="section-body grid gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
          {galleryImages.map((img) => (
            <li
              key={img.src}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-100 shadow-card"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-[1.03]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
