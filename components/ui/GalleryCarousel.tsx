"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Heart } from "lucide-react";

type GalleryItem = {
  id: number;
  alt: string;
  src: string | null;
};

const SETTLE_DEBOUNCE_MS = 120;

function GalleryCard({
  item,
  cardRef,
  priority = false,
}: {
  item: GalleryItem;
  cardRef: (el: HTMLDivElement | null) => void;
  priority?: boolean;
}) {
  const inViewRef = useRef<HTMLDivElement | null>(null);
  const isActive = useInView(inViewRef, { margin: "-35% 0px -35% 0px" });

  return (
    <motion.div
      ref={(el) => {
        inViewRef.current = el;
        cardRef(el);
      }}
      animate={{ scale: isActive ? 1 : 0.85, opacity: isActive ? 1 : 0.45 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="relative aspect-[3/4] w-56 shrink-0 snap-center overflow-hidden rounded-2xl border border-gold/20 bg-cream-dark shadow-lg sm:w-64"
    >
      {item.src ? (
        <Image src={item.src} alt={item.alt} fill sizes="16rem" className="object-cover" priority={priority} />
      ) : (
        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-gold/10 to-maroon/10 text-gold">
          <Heart className="h-6 w-6" strokeWidth={1.5} />
          <span className="font-body text-xs tracking-wide text-ink-muted">{item.alt}</span>
        </div>
      )}
    </motion.div>
  );
}

export function GalleryCarousel({ items }: { items: GalleryItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const settleTimerRef = useRef<number | undefined>(undefined);
  const hasCentered = useRef(false);

  const canLoop = items.length > 1;
  const n = items.length;

  // Render three copies back-to-back so swiping past the last photo smoothly
  // scrolls into an identical-looking copy of the first (real native scroll,
  // no snapping). Once settled deep in a copy, silently rewind to the
  // matching card in the middle copy — invisible since the image is identical.
  const extended = useMemo(() => {
    if (!canLoop) return items;
    return [...items, ...items, ...items];
  }, [items, canLoop]);

  const centerCard = (index: number) => {
    const container = containerRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;
    container.scrollLeft = card.offsetLeft + card.offsetWidth / 2 - container.clientWidth / 2;
  };

  useEffect(() => {
    if (!canLoop || hasCentered.current) return;
    if (cardRefs.current[n]) {
      centerCard(n);
      hasCentered.current = true;
    }
  }, [canLoop, n]);

  useEffect(() => {
    if (!canLoop) return;
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      window.clearTimeout(settleTimerRef.current);
      settleTimerRef.current = window.setTimeout(() => {
        const center = container.scrollLeft + container.clientWidth / 2;
        let nearest = 0;
        let nearestDistance = Infinity;
        cardRefs.current.forEach((card, i) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.offsetWidth / 2;
          const distance = Math.abs(cardCenter - center);
          if (distance < nearestDistance) {
            nearestDistance = distance;
            nearest = i;
          }
        });

        if (nearest < n) {
          centerCard(nearest + n);
        } else if (nearest >= 2 * n) {
          centerCard(nearest - n);
        }
      }, SETTLE_DEBOUNCE_MS);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.clearTimeout(settleTimerRef.current);
    };
  }, [canLoop, n]);

  return (
    <div
      ref={containerRef}
      className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto px-[calc(50%-7rem)] py-4 sm:px-[calc(50%-8rem)]"
    >
      {extended.map((item, i) => (
        <GalleryCard
          key={`${item.id}-${i}`}
          item={item}
          cardRef={(el) => (cardRefs.current[i] = el)}
          priority={canLoop ? i === n : i === 0}
        />
      ))}
    </div>
  );
}
