"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { UtensilsCrossed } from "lucide-react";
import { wedding } from "@/lib/constants";

export function Dinner() {
  return (
    <section className="relative w-full overflow-hidden px-4 pb-4 pt-2 text-center sm:px-8 sm:pb-8 sm:pt-4">
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
        <UtensilsCrossed className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 font-body text-[11px] tracking-widest2 text-gold sm:text-xs"
      >
        DINNER
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-2 font-display text-3xl text-maroon sm:text-4xl"
      >
        Let&apos;s Dine Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.22 }}
        className="mx-auto mt-2 max-w-xs font-body text-sm text-ink-muted sm:max-w-sm sm:text-base"
      >
        Join us for a delightful dinner as we celebrate this beautiful beginning together.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="relative mx-auto mt-2 h-48 w-48 sm:h-56 sm:w-56"
      >
        <Image
          src="/images/dinner.png"
          alt="Dinner celebration"
          fill
          sizes="(min-width: 640px) 14rem, 12rem"
          className="object-contain"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.34 }}
        className="mt-2 space-y-1 font-body text-sm font-semibold tracking-wide text-maroon sm:text-base"
      >
        <p>{wedding.dinner.time}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.dinner.place}</p>
      </motion.div>
    </section>
  );
}
