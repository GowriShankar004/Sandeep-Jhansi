// One audio element for the whole session, deliberately kept outside React so
// it keeps playing when the cover overlay unmounts.

let el: HTMLAudioElement | null = null;

function get(src: string, volume: number) {
  if (typeof window === "undefined") return null;
  if (!el) {
    el = new Audio(src);
    el.loop = true;
    el.volume = volume;
    el.preload = "auto";
  }
  return el;
}

/** Start buffering early so the first tap doesn't stall on the network. */
export function primeSong(src: string, volume = 0.55) {
  const audio = get(src, volume);
  audio?.load();
}

/**
 * Must be called synchronously from inside a click/tap handler. iOS Safari
 * discards the user-activation token if the play() call is deferred into a
 * promise, timeout or await, and playback is then refused.
 */
export function playSong(src: string, volume = 0.55) {
  const audio = get(src, volume);
  if (!audio) return;
  audio.play().catch(() => {
    /* blocked or interrupted; nothing useful to do without UI */
  });
}
