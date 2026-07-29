"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative w-full overflow-hidden px-4 pt-3 pb-6 text-center sm:px-8 sm:pt-10 sm:pb-10">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/images/f-nobg.png"
          alt=""
          width={800}
          height={1422}
          className="h-[32rem] w-auto opacity-[0.08] sm:h-[40rem]"
        />
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.06 }}
        className="mt-6 whitespace-pre-line font-body text-sm italic text-ink-muted sm:text-base"
      >
        {wedding.footer.message}
      </motion.p>

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
    </footer>
  );
}
