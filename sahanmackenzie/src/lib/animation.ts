import type { CSSProperties } from 'react';

/** Delay used by the existing scroll-reveal transitions. */
export const revealDelay = (seconds: number) => ({ '--d': `${seconds}s` }) as CSSProperties;
