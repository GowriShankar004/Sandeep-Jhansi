import Image from "next/image";

export function MandalaBackground({
  className = "",
  spin = false,
  priority = false,
}: {
  className?: string;
  spin?: boolean;
  priority?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className={`relative h-[140vw] w-[140vw] max-w-none ${spin ? "opacity-[0.26]" : "opacity-[0.16]"} sm:h-[70vw] sm:w-[70vw] ${
          spin ? "animate-spin-slow" : ""
        }`}
      >
        <Image src="/images/mandala.png" alt="" fill sizes="140vw" className="object-contain" priority={priority} />
      </div>
    </div>
  );
}
