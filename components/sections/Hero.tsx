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

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-4 pb-8 pt-10 text-center sm:px-8 sm:pb-12 sm:pt-16"
    >
      <MandalaBackground spin priority />
      <ColorSplash tone="sage" className="left-4 top-4 h-32 w-32 sm:h-48 sm:w-48" />
      <ColorSplash tone="maroon" className="right-4 top-4 h-28 w-28 sm:h-44 sm:w-44" />

      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 -mx-4 -mt-10 aspect-[1870/929] w-[calc(100%+2rem)] sm:-mx-8 sm:-mt-16 sm:w-[calc(100%+4rem)]"
      >
        <Image src="/images/gr-nobg.png" alt="" fill sizes="100vw" className="object-contain" priority />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="show"
        variants={fadeUp}
        custom={0}
        className="relative z-10 -mt-6 h-16 w-12 sm:-mt-10 sm:h-20 sm:w-[3.75rem]"
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
        className="relative z-10 mt-6 w-full max-w-[19rem] xs:max-w-[22rem] sm:mt-8 sm:max-w-md md:max-w-lg"
      >
        <Image
          src="/images/couple-names-green.png"
          alt={`${wedding.groom} & ${wedding.bride}`}
          width={1015}
          height={658}
          sizes="(min-width: 768px) 32rem, (min-width: 640px) 28rem, (min-width: 380px) 22rem, 19rem"
          className="h-auto w-full"
          priority
        />
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mt-6 h-28 w-28 overflow-hidden rounded-full border-2 border-gold/50 shadow-[0_0_0_6px_rgba(124,179,66,0.08)] sm:mt-8 sm:h-40 sm:w-40"
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
        className="relative z-10 mt-6 font-display text-lg italic text-gold-light sm:text-xl"
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
        className="relative z-10 mt-5 space-y-1.5 font-body text-sm font-semibold tracking-wide text-maroon sm:text-base"
      >
        <p>ON {wedding.date.toUpperCase()}</p>
        <p>{wedding.time.toUpperCase()}</p>
        <p className="font-normal normal-case text-ink-muted">{wedding.ceremonyPlace}</p>
      </motion.div>
    </section>
  );
}
