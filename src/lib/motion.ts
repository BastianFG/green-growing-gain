// Shared easing curves — use these everywhere, never hardcode inline
export const easeSnappy: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const easeOutQuint: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const easeInOutExpo: [number, number, number, number] = [0.87, 0, 0.13, 1];

// Reusable container variant — drives stagger children
export const staggerContainer = (stagger = 0.1, delayChildren = 0.05) => ({
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Standard fade-up item variant
export const fadeUp = (y = 28, duration = 0.75) => ({
  hidden: { opacity: 0, y },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration, ease: easeOutQuint },
  },
});

// Fade-in only (no y movement)
export const fadeIn = (duration = 0.6) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration, ease: easeOutQuint } },
});

// Slide in from left
export const slideLeft = (x = 40, duration = 0.8) => ({
  hidden: { opacity: 0, x: -x },
  show: { opacity: 1, x: 0, transition: { duration, ease: easeOutQuint } },
});

// Slide in from right
export const slideRight = (x = 40, duration = 0.8) => ({
  hidden: { opacity: 0, x },
  show: { opacity: 1, x: 0, transition: { duration, ease: easeOutQuint } },
});

// Scale-up entrance (for icons, badges)
export const scaleUp = (scale = 0.75, duration = 0.55) => ({
  hidden: { opacity: 0, scale },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration, ease: easeOutQuint },
  },
});
