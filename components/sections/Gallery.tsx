"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";
import { ColorSplash } from "@/components/ui/ColorSplash";

export function Gallery() {
  return (
    <section id="gallery" className="relative w-full overflow-hidden py-16 text-center sm:py-24">
      <ColorSplash tone="sage" className="bottom-6 left-6 h-56 w-56 sm:h-72 sm:w-72" />
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="font-body text-[11px] tracking-widest2 text-gold sm:text-xs"
      >
        OUR STORY
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        className="mt-2 font-display text-3xl text-maroon sm:text-4xl"
      >
        Gallery of Moments
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-8"
      >
        <GalleryCarousel items={[...wedding.gallery]} />
      </motion.div>
    </section>
  );
}
