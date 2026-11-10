const CLICK_SOUND_PATH = '/click.mp3'

let clickAudio: HTMLAudioElement | null = null

/**
 * Plays the UI click sound. Reuses a single Audio element so rapid
 * clicks don't stack up playback instances.
 */
export function playClickSound() {
  try {
    if (typeof window === 'undefined') return
    clickAudio ??= new Audio(CLICK_SOUND_PATH)
    clickAudio.volume = 0.5
    clickAudio.currentTime = 0
    void clickAudio.play().catch(() => {
      // Autoplay policies may block sound before user interaction — safe to ignore.
    })
  } catch {
    // Audio is a progressive enhancement; never break the UI over it.
  }
}
