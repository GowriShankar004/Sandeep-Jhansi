"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { MandalaBackground } from "@/components/ui/MandalaBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pb-20 pt-10 text-center sm:px-8 sm:pb-28 sm:pt-16"
    >
      <MandalaBackground spin priority />

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0}
        className="relative z-10 h-16 w-12 sm:h-20 sm:w-[3.75rem]"
      >
        <Image src="/images/ganesh.png" alt="Shree Ganesha" width={484} height={659} className="h-full w-full object-contain" priority />
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.15}
        className="relative z-10 mt-5 font-body text-[11px] tracking-widest2 text-gold sm:text-xs"
      >
        {wedding.invocation}
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.25}
        className="relative z-10 mt-3 font-body text-[10px] tracking-widest2 text-gold-light/80 sm:text-[11px]"
      >
        {wedding.eyebrow.toUpperCase()}
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.45}
        className="relative z-10 mt-6 flex flex-col items-center font-display text-4xl leading-tight text-maroon xs:text-5xl sm:mt-8 sm:text-6xl md:text-7xl"
      >
        <span>{wedding.groom}</span>
        <span className="my-1 block text-2xl text-rose-500 sm:text-3xl">&#10084;</span>
        <span>{wedding.bride}</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-7 h-28 w-28 overflow-hidden rounded-full border-2 border-gold/50 shadow-[0_0_0_6px_rgba(180,137,79,0.08)] sm:mt-10 sm:h-40 sm:w-40"
      >
        <Image
          src={wedding.couplePhoto}
          alt={`${wedding.groom} and ${wedding.bride}`}
          fill
          sizes="(min-width: 640px) 10rem, 7rem"
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.7}
        className="relative z-10 mt-8 font-display text-lg italic text-gold-light sm:text-xl"
      >
        &ldquo;{wedding.tagline}&rdquo;
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.78}
        className="relative z-10 mt-3 max-w-xs font-body text-sm text-ink-muted sm:max-w-sm sm:text-base"
      >
        {wedding.intro}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.86}
        className="relative z-10 mt-6 space-y-1.5 font-body text-xs font-semibold tracking-wide text-maroon sm:text-sm"
      >
        <p>ON {wedding.date.toUpperCase()}</p>
        <p>{wedding.time.toUpperCase()}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.ceremonyPlace}</p>
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.94}
        className="relative z-10 mt-3 space-y-1 font-body text-xs font-semibold tracking-wide text-maroon sm:text-sm"
      >
        <p>{wedding.muhurtham.toUpperCase()}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.muhurthamPlace}</p>
      </motion.div>
    </section>
  );
}
