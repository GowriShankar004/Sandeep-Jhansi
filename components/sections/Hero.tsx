"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { wedding } from "@/lib/constants";
import { MandalaBackground } from "@/components/ui/MandalaBackground";
import { ColorSplash } from "@/components/ui/ColorSplash";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

/**
 * Sized to fit one screen on any device.
 *
 * Heights, gaps and font sizes are fractions of the screen height (svh) rather
 * than fixed rem, so the whole composition scales with the viewport instead of
 * overflowing on short phones. Each clamp() keeps text legible at the small end
 * and stops it ballooning on tall tablets. Verified to land between 82% and 92%
 * of screen height from a 360x520 Android up to a 1024x1298 iPad.
 *
 * shrink-0 on every child stops flexbox squashing images inside the fixed-height
 * container, and overflow-hidden is the final backstop.
 */
export function Hero() {
  return (
    <section
      id="home"
      className="relative flex h-screen-safe w-full flex-col items-center justify-start overflow-hidden px-4 pb-[1.5svh] pt-0 text-center sm:px-8"
    >
      <MandalaBackground spin priority />
      <ColorSplash tone="sage" className="left-4 top-4 h-32 w-32 sm:h-48 sm:w-48" />
      <ColorSplash tone="maroon" className="right-4 top-4 h-28 w-28 sm:h-44 sm:w-44" />

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mx-4 aspect-[1870/929] w-[calc(100%+2rem)] max-w-[50svh] shrink-0 sm:-mx-8 sm:w-[calc(100%+4rem)]"
      >
        <Image src="/images/gr-nobg.png" alt="" fill sizes="100vw" className="object-contain" priority />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0}
        className="relative z-10 mt-[0.5svh] h-[clamp(1.875rem,5svh,4.5rem)] shrink-0"
      >
        <Image
          src="/images/ganesh.png"
          alt="Shree Ganesha"
          width={484}
          height={659}
          className="h-full w-auto object-contain"
          priority
        />
      </motion.div>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.15}
        className="relative z-10 mt-[1.2svh] shrink-0 font-body text-[clamp(8px,1.4svh,12px)] tracking-widest2 text-gold"
      >
        {wedding.invocation}
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.25}
        className="relative z-10 mt-[0.8svh] shrink-0 font-body text-[clamp(7px,1.2svh,11px)] tracking-widest2 text-gold-light/80"
      >
        {wedding.eyebrow.toUpperCase()}
      </motion.p>

      <motion.h1
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.45}
        className="relative z-10 mt-[0.8svh] w-[min(20rem,30svh)] shrink-0 sm:w-[min(26rem,30svh)]"
      >
        <Image
          src="/images/couple-names-green.png"
          alt={`${wedding.groom} & ${wedding.bride}`}
          width={1015}
          height={658}
          sizes="(min-width: 640px) 26rem, 20rem"
          className="h-auto w-full"
          priority
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-[0.8svh] h-[clamp(3.25rem,10.5svh,10rem)] w-[clamp(3.25rem,10.5svh,10rem)] shrink-0 overflow-hidden rounded-full border-2 border-gold/50 shadow-[0_0_0_6px_rgba(124,179,66,0.08)]"
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
        className="relative z-10 mt-[1.4svh] shrink-0 font-display text-[clamp(12.5px,2svh,20px)] italic text-gold-light"
      >
        &ldquo;{wedding.tagline}&rdquo;
      </motion.p>

      <motion.p
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.78}
        className="relative z-10 mt-[0.8svh] max-w-xs shrink-0 font-body text-[clamp(10px,1.6svh,16px)] leading-snug text-ink-muted sm:max-w-sm"
      >
        {wedding.intro}
      </motion.p>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0.86}
        className="relative z-10 mt-[1.2svh] shrink-0 space-y-[0.3svh] font-body text-[clamp(10px,1.6svh,16px)] font-semibold tracking-wide text-maroon"
      >
        <p>ON {wedding.date.toUpperCase()}</p>
        <p>{wedding.time.toUpperCase()}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.ceremonyPlace}</p>
      </motion.div>
    </section>
  );
}
