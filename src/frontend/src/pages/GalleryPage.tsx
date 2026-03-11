import { X, ZoomIn } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { useMetaTags } from "../hooks/useMetaTags";

const galleryImages = [
  {
    src: "/assets/generated/hero-grill.dim_1600x800.jpg",
    alt: "BBQ Grill with Glowing Coals",
    caption: "The Heart of It All",
  },
  {
    src: "/assets/generated/ribs.dim_800x600.jpg",
    alt: "Baby Back Ribs",
    caption: "Baby Back Ribs",
  },
  {
    src: "/assets/generated/brisket.dim_800x600.jpg",
    alt: "Smoked Beef Brisket",
    caption: "Beef Brisket",
  },
  {
    src: "/assets/generated/pulled-pork.dim_800x600.jpg",
    alt: "Pulled Pork",
    caption: "Pulled Pork",
  },
  {
    src: "/assets/generated/smoked-chicken.dim_800x600.jpg",
    alt: "Smoked Chicken",
    caption: "Smoked Chicken",
  },
  {
    src: "/assets/generated/restaurant-interior.dim_800x600.jpg",
    alt: "Restaurant Interior",
    caption: "Come on In",
  },
  {
    src: "/assets/generated/smoker.dim_800x600.jpg",
    alt: "BBQ Smoker",
    caption: "The Pit",
  },
  {
    src: "/assets/generated/sides.dim_800x600.jpg",
    alt: "BBQ Sides",
    caption: "The Sides",
  },
];

export default function GalleryPage() {
  useMetaTags({
    title: "Gallery | Chapman's BBQ Monticello Indiana",
    description:
      "See inside Chapman's BBQ — photos of our smoked meats, grill, restaurant, and atmosphere in Monticello, Indiana.",
    ogImage: "/assets/generated/hero-grill.dim_1600x800.jpg",
  });

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) =>
      i !== null ? (i - 1 + galleryImages.length) % galleryImages.length : 0,
    );
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryImages.length : 0));

  return (
    <div className="pt-16">
      <div className="py-16 px-4 text-center">
        <span className="text-accent text-sm font-semibold tracking-widest uppercase">
          Visual Tour
        </span>
        <h1 className="font-display text-5xl md:text-6xl font-black mt-2">
          Gallery
        </h1>
        <p className="text-muted-foreground mt-3 max-w-lg mx-auto">
          A peek at the pits, plates, and people that make Chapman's BBQ
          special.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-20">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {galleryImages.map((img, idx) => (
            <motion.div
              key={img.src}
              data-ocid={`gallery.item.${idx + 1}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group relative cursor-pointer rounded-xl overflow-hidden break-inside-avoid"
              onClick={() => openLightbox(idx)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col gap-2">
                <ZoomIn className="w-8 h-8 text-foreground" />
                <span className="text-foreground font-semibold text-sm">
                  {img.caption}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              type="button"
              className="absolute top-4 right-4 p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors z-10"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              type="button"
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors z-10 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous"
            >
              ‹
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
              className="max-w-4xl max-h-[85vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                className="max-w-full max-h-[80vh] object-contain rounded-xl"
              />
              <p className="text-center text-muted-foreground mt-3 font-semibold">
                {galleryImages[lightboxIndex].caption}
              </p>
            </motion.div>
            <button
              type="button"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-muted hover:bg-accent/20 transition-colors z-10 text-xl font-bold"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next"
            >
              ›
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
