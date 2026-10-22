'use client';

import useHorizontalTrack from '@/hooks/use-horizontal-track';
import HorizontalTrack from '@/components/ui/horizontal-track';
import SpacesGrid from './spaces-grid';

export default function SpacesPreview() {
  const { ref: trackRef, by: scrollTrack, handlers } = useHorizontalTrack();

  return (
    <section className="sec py-[52px] tablet:py-[42px]" id="projects">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="head rv mb-[30px] grid grid-cols-[1.3fr_1fr_auto] items-center gap-[36px] tablet:grid-cols-[1fr_auto] tablet:gap-[16px] phone:gap-[14px]">
          <div>
            <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Spaces</div>
            <h2 className="text-[clamp(28px,2.8vw,42px)] leading-[1.15] font-sans font-light uppercase phone:text-[28px]">Homes designed as one composition</h2>
          </div>
          <p className="m-0 max-w-[46ch] text-[18px] leading-[1.75] text-walnut tablet:col-span-full tablet:row-start-2 phone:text-[17px]">
            The focus is high-end residential interiors, with selective boutique hospitality.
          </p>
          <div className="arrows flex gap-[8px] tablet:col-start-2 tablet:row-start-1 phone:gap-[6px]">
            <button
              className="h-[36px] w-[36px] rounded-[50%] border-0 bg-copper text-[16px] text-ivory transition-transform duration-250 hover:scale-[1.12] phone:h-[30px] phone:w-[30px]"
              onClick={() => scrollTrack(-1)}
              aria-label="Previous"
            >
              ←
            </button>
            <button
              className="h-[36px] w-[36px] rounded-[50%] border-0 bg-copper text-[16px] text-ivory transition-transform duration-250 hover:scale-[1.12] phone:h-[30px] phone:w-[30px]"
              onClick={() => scrollTrack(1)}
              aria-label="Next"
            >
              →
            </button>
          </div>
        </div>
        <HorizontalTrack trackRef={trackRef} handlers={handlers}>
          <SpacesGrid />
        </HorizontalTrack>
        <p className="note rv mt-[16px] mb-0 text-[15px] leading-[1.7] text-walnut italic">
          AI-generated imagery illustrates our design approach. Completed projects will appear here once client permissions and image rights are confirmed.
        </p>
      </div>
    </section>
  );
}
