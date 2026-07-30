"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { wedding } from "@/lib/constants";
import { playSong, primeSong } from "@/lib/audio";

/**
 * Entry cover. Beyond looking like the printed invitation, the tap serves a
 * technical purpose: it is a user gesture, which is the only thing that reliably
 * unlocks audio on iOS Safari. Starting the song here means playback never
 * depends on the visitor happening to scroll.
 *
 * The whole overlay is one <button>, so tapping anywhere works and it stays
 * keyboard reachable, with the "Open" pill as the visual affordance.
 */
export function Cover() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    primeSong(wedding.song);
  }, []);

  // Hold the page still behind the cover so it can't be scrolled past.
  useEffect(() => {
    if (opened) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [opened]);

  const open = () => {
    if (opened) return;
    playSong(wedding.song); // synchronous: this is what unlocks iOS audio
    setOpened(true);
  };

  return (
    <AnimatePresence>
      {!opened && (
        <motion.button
          key="cover"
          type="button"
          onClick={open}
          aria-label="Open the wedding invitation"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          // backdrop matches the artwork's sage edges so the letterboxing on
          // wide screens reads as part of the design
          className="fixed inset-0 z-50 block w-full cursor-pointer overflow-hidden border-0 bg-gradient-to-b from-[#DCE1C8] to-[#B9C7A2] p-0"
        >
          {/* Phones: zoomed to fill edge to edge, no side gaps. The card is much
              taller-than-wide (0.47) than a phone viewport, so filling by width
              crops ~7-9% off the top and bottom, trimming the gold frame's
              horizontal lines -- the accepted cost of no gaps.
              Wide screens keep the whole card: filling a 1440x820 window would
              show only 27% of it, a band through the names with the wreath,
              monogram and frame all cropped away. */}
          <Image
            src="/images/cover.png"
            alt={`${wedding.groom} & ${wedding.bride} — wedding invitation`}
            fill
            sizes="100vw"
            className="object-cover object-center sm:object-contain"
            priority
          />

          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="pointer-events-none absolute inset-x-0 bottom-24 z-10 flex flex-col items-center gap-1.5 sm:bottom-28"
          >
            <motion.span
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="rounded-full border border-gold-dark/40 bg-cream/85 px-8 pb-3 pt-1.5 font-script text-4xl leading-none text-maroon shadow-[0_4px_20px_rgba(47,82,51,0.18)] backdrop-blur-[2px] sm:text-5xl"
            >
              Tap to Open
            </motion.span>
            <motion.span
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              className="text-gold-dark"
            >
              <ChevronUp className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2.25} />
            </motion.span>
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
