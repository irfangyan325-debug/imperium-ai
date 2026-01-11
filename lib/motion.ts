export const MOTION = {
  dur: {
    slow: 0.9,
    slower: 1.2,
    fade: 0.8,
  },
  ease: {
    heavy: [0.22, 1, 0.36, 1] as const,
    deliberate: [0.4, 0, 0.2, 1] as const,
  },
} as const;
