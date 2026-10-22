'use client';

import { useRef, type PointerEvent } from 'react';

/** Arrow buttons + mouse drag for a horizontal scroll-snap track. */
export default function useHorizontalTrack() {
  const ref = useRef<HTMLDivElement>(null);
  const st = useRef({ down: false, sx: 0, sl: 0, moved: 0 });
  const by = (dir: number) => {
    const t = ref.current;
    if (!t) return;
    const c = t.querySelector<HTMLElement>('.card');
    t.scrollBy({ left: dir * ((c?.offsetWidth ?? 300) + 20), behavior: 'smooth' });
  };
  const handlers = {
    onPointerDown: (e: PointerEvent<HTMLDivElement>) => {
      if (e.pointerType !== 'mouse') return;
      st.current = { down: true, sx: e.clientX, sl: ref.current!.scrollLeft, moved: 0 };
      ref.current!.classList.add('drag');
    },
    onPointerMove: (e: PointerEvent<HTMLDivElement>) => {
      const s = st.current;
      if (!s.down) return;
      s.moved = Math.abs(e.clientX - s.sx);
      ref.current!.scrollLeft = s.sl - (e.clientX - s.sx);
    },
    onPointerUp: () => { st.current.down = false; ref.current?.classList.remove('drag'); },
    onPointerLeave: () => { st.current.down = false; ref.current?.classList.remove('drag'); },
    onClickCapture: (e: React.MouseEvent) => { if (st.current.moved > 6) { e.preventDefault(); st.current.moved = 0; } },
    onDragStart: (e: React.DragEvent) => e.preventDefault(),
  };
  return { ref, by, handlers };
}
