"use client";

import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";

export function Footer() {
  return (
    <footer className="w-full px-4 pt-8 pb-6 text-center sm:px-8 sm:pt-20 sm:pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
      >
        <Divider />
      </motion.div>

      <motion.h3
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-6 flex flex-col items-center font-display text-3xl leading-tight text-maroon sm:flex-row sm:justify-center sm:gap-3 sm:text-4xl"
      >
        <span>{wedding.bride}</span>
        <span className="my-1 sm:my-0">&amp;</span>
        <span>{wedding.groom}</span>
      </motion.h3>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-3 font-body text-xs tracking-widest2 text-gold sm:text-sm"
      >
        {wedding.footer.date}
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.26 }}
        className="mt-4 font-body text-sm text-ink-muted sm:text-base"
      >
        {wedding.footer.families}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.34 }}
        className="mt-8"
      >
        <Divider />
      </motion.div>
    </footer>
  );
}
