"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { wedding } from "@/lib/constants";
import { Divider } from "@/components/ui/Divider";

export function Venue() {
  return (
    <section id="venue" className="relative w-full px-4 pt-16 pb-10 text-center sm:px-8 sm:pt-24 sm:pb-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/40 text-gold"
      >
        <MapPin className="h-5 w-5" strokeWidth={1.5} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-4 font-body text-[11px] tracking-widest2 text-gold sm:text-xs"
      >
        LOCATION
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.18 }}
        className="mt-2 font-display text-4xl text-maroon sm:text-5xl"
      >
        Venue
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.26 }}
        className="mt-4"
      >
        <Divider />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.32 }}
        className="mt-6"
      >
        <p className="font-display text-xl text-maroon sm:text-2xl">{wedding.venue.name}</p>
        <p className="mx-auto mt-2 max-w-sm font-body text-sm text-ink-muted sm:text-base">
          {wedding.venue.shortAddress}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-8 aspect-video w-full max-w-2xl overflow-hidden rounded-2xl border border-gold/20 shadow-lg"
      >
        <iframe
          src={wedding.venue.mapEmbedUrl}
          title="Venue location map"
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </motion.div>

      <motion.a
        href={wedding.venue.mapLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-gold/50 px-6 py-3 font-body text-xs font-semibold tracking-wide text-gold transition-colors hover:bg-gold/10 sm:text-sm"
      >
        <MapPin className="h-4 w-4" strokeWidth={1.5} />
        VIEW ON MAP
        <ExternalLink className="h-3.5 w-3.5" strokeWidth={1.5} />
      </motion.a>
    </section>
  );
}
