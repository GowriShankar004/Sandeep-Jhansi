"use client";

import { useEffect, useRef, useState } from "react";

type Petal = {
  id: number;
  left: number;
  size: number;
  toneIndex: number;
  shapeIndex: number;
  duration: number;
  opacity: number;
  drift: number;
  rotate: number;
};

const PETAL_TONES = [
  { light: "#FFEAF1", base: "#F8C8DC", dark: "#E7A9C2" },
  { light: "#FFFDF6", base: "#FFF8E7", dark: "#EFE3C7" },
  { light: "#FFF1E1", base: "#FFDAB9", dark: "#EFBE93" },
  { light: "#FFFFFF", base: "#FFFFFF", dark: "#EFECE8" },
];

const PETAL_SHAPES = [
  "50% 0% 50% 50% / 60% 0% 60% 60%",
  "0% 50% 50% 50% / 0% 60% 60% 60%",
  "50% 50% 0% 50% / 60% 60% 0% 60%",
];

// Every petal is a separately composited, continuously animating layer, so the
// count is the main lever on scroll smoothness. Phones get fewer.
const MAX_PETALS_MOBILE = 10;
const MAX_PETALS_DESKTOP = 18;
const MIN_SPAWN_MS = 700;
const MAX_SPAWN_MS = 1300;

function randomBetween(min: number, max: number) {
  return min + Math.random() * (max - min);
}

function createPetal(id: number): Petal {
  return {
    id,
    left: randomBetween(0, 100),
    size: randomBetween(10, 22),
    toneIndex: Math.floor(Math.random() * PETAL_TONES.length),
    shapeIndex: Math.floor(Math.random() * PETAL_SHAPES.length),
    duration: randomBetween(10, 18),
    opacity: randomBetween(0.6, 1),
    drift: randomBetween(20, 60) * (Math.random() < 0.5 ? -1 : 1),
    rotate: randomBetween(90, 360) * (Math.random() < 0.5 ? -1 : 1),
  };
}

export function FlowerPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let timeoutId: number;
    const maxPetals = window.matchMedia("(min-width: 640px)").matches
      ? MAX_PETALS_DESKTOP
      : MAX_PETALS_MOBILE;

    const spawn = () => {
      setPetals((prev) => {
        const next = [...prev, createPetal(idRef.current++)];
        return next.length > maxPetals ? next.slice(next.length - maxPetals) : next;
      });
      timeoutId = window.setTimeout(spawn, randomBetween(MIN_SPAWN_MS, MAX_SPAWN_MS));
    };

    timeoutId = window.setTimeout(spawn, randomBetween(MIN_SPAWN_MS, MAX_SPAWN_MS));
    return () => window.clearTimeout(timeoutId);
  }, []);

  const removePetal = (id: number) => {
    setPetals((prev) => prev.filter((petal) => petal.id !== id));
  };

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => {
        const tone = PETAL_TONES[petal.toneIndex];
        return (
          <span
            key={petal.id}
            onAnimationEnd={() => removePetal(petal.id)}
            className="petal"
            style={
              {
                left: `${petal.left}vw`,
                width: `${petal.size}px`,
                height: `${petal.size * 1.2}px`,
                borderRadius: PETAL_SHAPES[petal.shapeIndex],
                background: `radial-gradient(circle at 30% 22%, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0) 38%), linear-gradient(180deg, transparent 46%, rgba(0,0,0,0.07) 50%, transparent 54%), linear-gradient(155deg, ${tone.light} 0%, ${tone.base} 55%, ${tone.dark} 100%)`,
                animationDuration: `${petal.duration}s`,
                "--petal-opacity": petal.opacity,
                "--drift": petal.drift,
                "--rotate": petal.rotate,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
