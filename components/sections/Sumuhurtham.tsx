"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { wedding } from "@/lib/constants";

export function Sumuhurtham() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-8 pt-2 text-center sm:px-8 sm:pb-12 sm:pt-4">
      <div className="pointer-events-none absolute inset-0 -z-10 flex items-center justify-center">
        <Image
          src="/images/f-nobg.png"
          alt=""
          width={800}
          height={1422}
          className="h-[36rem] w-auto opacity-[0.08] sm:h-[44rem]"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold"
      >
        <Sparkles className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 font-body text-[11px] tracking-widest2 text-gold sm:text-xs"
      >
        AUSPICIOUS TIME
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-2 font-display text-4xl text-maroon sm:text-5xl"
      >
        Sumuhurtham
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.24 }}
        className="relative mx-auto -mt-4 h-72 w-48 sm:mt-0 sm:h-80 sm:w-56"
      >
        <Image
          src="/images/sita-nobg-v2.png"
          alt="Shree Rama and Sita"
          fill
          sizes="(min-width: 640px) 14rem, 12rem"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="-mt-4 space-y-1 font-body text-sm font-semibold tracking-wide text-maroon sm:mt-2 sm:text-base"
      >
        <p>{wedding.muhurtham.toUpperCase()}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.muhurthamPlace}</p>
      </motion.div>
    </section>
  );
}
