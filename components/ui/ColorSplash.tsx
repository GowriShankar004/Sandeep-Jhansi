const TONE_RGB = {
  gold: "124, 179, 66",
  maroon: "47, 82, 51",
  sage: "138, 154, 91",
} as const;

export function ColorSplash({
  tone = "gold",
  className = "",
}: {
  tone?: keyof typeof TONE_RGB;
  className?: string;
}) {
  return (
    <div
      className={`pointer-events-none absolute -z-10 ${className}`}
      style={{
        background: `radial-gradient(circle at center, rgba(${TONE_RGB[tone]}, 0.3) 0%, rgba(${TONE_RGB[tone]}, 0.13) 35%, rgba(${TONE_RGB[tone]}, 0) 68%)`,
      }}
      aria-hidden="true"
    />
  );
}
