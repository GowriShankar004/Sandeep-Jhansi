"use client";

import { motion } from "framer-motion";

export function FloralDivider({ className = "" }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6 }}
      className={`relative z-10 mx-auto flex w-full max-w-xs items-center justify-center gap-3 px-4 py-2 sm:max-w-sm ${className}`}
      aria-hidden="true"
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <svg
        width="34"
        height="24"
        viewBox="0 0 34 24"
        fill="none"
        className="shrink-0"
      >
        <g className="text-gold" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round" opacity="0.85">
          <path d="M17 12c0-4.5 2.6-8 5.6-8 1.6 0 2.4 1.3 2.4 2.8 0 3.7-3.5 5.2-8 5.2Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M17 12c0-4.5-2.6-8-5.6-8-1.6 0-2.4 1.3-2.4 2.8 0 3.7 3.5 5.2 8 5.2Z" fill="currentColor" fillOpacity="0.15" />
          <path d="M17 12c3.4 0 6.4 1.7 6.4 4.3 0 1.4-1 2.3-2.3 2.3-2.9 0-4.1-3-4.1-6.6Z" fill="currentColor" fillOpacity="0.1" />
          <path d="M17 12c-3.4 0-6.4 1.7-6.4 4.3 0 1.4 1 2.3 2.3 2.3 2.9 0 4.1-3 4.1-6.6Z" fill="currentColor" fillOpacity="0.1" />
        </g>
        <g className="text-maroon" fill="currentColor" opacity="0.55">
          <path d="M17 14c-1.6 1.4-2.2 3.3-1.6 4.8 1.6-.2 3-1.5 3.2-3.3.1-.9-.4-1.6-1.6-1.5Z" />
          <path d="M17 14c1.6 1.4 2.2 3.3 1.6 4.8-1.6-.2-3-1.5-3.2-3.3-.1-.9.4-1.6 1.6-1.5Z" />
        </g>
        <circle cx="17" cy="12" r="2" className="text-gold" fill="currentColor" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </motion.div>
  );
}
