'use client';

import type { ReactNode, Ref } from 'react';
import type useHorizontalTrack from '@/hooks/use-horizontal-track';

type HorizontalTrackProps = {
  trackRef: Ref<HTMLDivElement>;
  handlers: ReturnType<typeof useHorizontalTrack>['handlers'];
  children: ReactNode;
};

export default function HorizontalTrack({ trackRef, handlers, children }: HorizontalTrackProps) {
  return (
    <div
      className="track rv flex snap-x snap-mandatory gap-[20px] overflow-x-auto pb-[4px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab [&.drag]:snap-none [&.drag]:scroll-auto [&.drag]:cursor-grabbing"
      ref={trackRef}
      {...handlers}
    >
      {children}
    </div>
  );
}
