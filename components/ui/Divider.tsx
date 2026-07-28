export function Divider({ className = "" }: { className?: string }) {
  return <div className={`mx-auto h-px w-16 bg-gold/40 ${className}`} aria-hidden="true" />;
}
