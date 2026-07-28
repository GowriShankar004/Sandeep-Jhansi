"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { MandalaBackground } from "@/components/ui/MandalaBackground";

export function Blessing() {
  const lines = wedding.blessing.heading.split("\n");

  return (
    <section className="relative flex w-full flex-col items-center justify-center overflow-hidden px-4 py-12 text-center sm:min-h-[70vh] sm:px-8 sm:py-24">
      <MandalaBackground />

      <div className="relative z-10 mt-8 font-display text-2xl leading-relaxed text-maroon sm:text-3xl md:text-4xl">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
          >
            {line}
          </motion.p>
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="relative z-10 mt-8 max-w-md font-body text-sm leading-relaxed text-ink-muted sm:text-base"
      >
        {wedding.blessing.subtext}
      </motion.p>
    </section>
  );
}
