"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";
import { GalleryCarousel } from "@/components/ui/GalleryCarousel";

export function Gallery() {
  return (
    <section id="gallery" className="relative w-full py-16 text-center sm:py-24">
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
        className="mt-2 font-display text-4xl text-maroon sm:text-5xl"
      >
        Gallery of Moments
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.16 }}
        className="mt-4"
      >
        <Divider />
      </motion.div>

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
