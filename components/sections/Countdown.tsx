"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { wedding } from "@/lib/constants";
import { ColorSplash } from "@/components/ui/ColorSplash";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const diff = new Date(wedding.countdownTargetISO).getTime() - Date.now();
  const clamped = Math.max(diff, 0);

  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

function CountdownTile({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, "0");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-gold/30 bg-gradient-to-b from-cream-light to-cream shadow-[0_8px_24px_-8px_rgba(124,179,66,0.35)] sm:h-20 sm:w-20">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            initial={{ y: 14, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -14, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="absolute font-display text-2xl text-maroon sm:text-3xl"
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className="font-body text-[10px] tracking-widest2 text-gold sm:text-xs">{label.toUpperCase()}</span>
    </div>
  );
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());
    const intervalId = window.setInterval(() => setTimeLeft(getTimeLeft()), 1000);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <section className="relative w-full overflow-hidden px-4 py-14 text-center sm:px-8 sm:py-20">
      <ColorSplash tone="gold" className="left-1/2 top-6 h-24 w-24 -translate-x-1/2 sm:h-32 sm:w-32" />

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
        COUNTDOWN
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-2 font-display text-3xl text-maroon sm:text-4xl"
      >
        Counting Down to Forever
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-8 flex max-w-md items-start justify-center gap-3 sm:gap-5"
      >
        <CountdownTile value={timeLeft?.days ?? 0} label="Days" />
        <CountdownTile value={timeLeft?.hours ?? 0} label="Hours" />
        <CountdownTile value={timeLeft?.minutes ?? 0} label="Minutes" />
        <CountdownTile value={timeLeft?.seconds ?? 0} label="Seconds" />
      </motion.div>
    </section>
  );
}
