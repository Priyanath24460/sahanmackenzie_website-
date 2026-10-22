'use client';

import { useEffect, useRef, useState } from 'react';

/** Number that counts up the first time it scrolls into view. */
export default function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLElement>(null);
  const [v, setV] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const f = (t: number) => {
        const p = Math.min(1, (t - t0) / 2200);
        setV(Math.round(to * (1 - Math.pow(1 - p, 3))));
        if (p < 1) requestAnimationFrame(f); else setDone(true);
      };
      requestAnimationFrame(f);
    }, { threshold: 0.6 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return <b ref={ref} className="mb-[8px] block font-sans text-[36px] leading-[1.1] font-light tabular-nums">{v.toLocaleString('en-US')}{done ? suffix : ''}</b>;
}
