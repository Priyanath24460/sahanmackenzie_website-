'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [slide, setSlide] = useState(0);

  // hero slideshow
  useEffect(() => {
    const t = setInterval(() => setSlide((i) => (i + 1) % 2), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="hero sticky top-0 z-0 h-[80svh] min-h-[720px] max-h-[960px] overflow-hidden text-ivory tablet:h-[90svh] tablet:min-h-[780px] tablet:max-h-none phone:min-h-[820px] after:absolute after:inset-0 after:z-[1] after:bg-[rgba(105,73,60,.4)] after:content-['']"
      aria-label="Introduction"
    >
      <div className={`slide absolute inset-0 opacity-0 scale-[1.02] transition-opacity duration-[1600ms] ease-out [&.on]:opacity-100 [&.on]:animate-kb${slide === 0 ? ' on' : ''}`}>
        <div
          className="ph hero-img absolute inset-0 overflow-hidden bg-[url('/images/atelier/hero-living.webp')] bg-cover bg-[position:center_45%] bg-no-repeat transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)]"
          role="img"
          aria-label="Tropical living room with an ivory sofa, travertine coffee table and timber-framed garden windows"
        />
      </div>
      <div className={`slide absolute inset-0 opacity-0 scale-[1.02] transition-opacity duration-[1600ms] ease-out [&.on]:opacity-100 [&.on]:animate-kb${slide === 1 ? ' on' : ''}`}>
        <div
          className="ph hero-img hero-img2 absolute inset-0 overflow-hidden bg-[url('/images/living-room.jpg')] bg-cover bg-center bg-no-repeat transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)]"
          role="img"
          aria-label="Sunlit living room with a cream sectional, marble feature wall and sea view"
        />
      </div>
      <div className="wrap hero-in mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px] relative z-[2] flex h-full flex-col justify-center py-[110px] phone:py-[130px]">
        <h1 className="flex shrink-0 flex-col font-sans leading-[1] font-light not-italic tracking-normal uppercase text-ivory text-[clamp(54px,min(9.4vw,16.5svh),140px)] tablet:text-[clamp(46px,9vw,82px)] phone:text-[clamp(38px,9.6vw,52px)]">
          <span className="ln block overflow-hidden pb-[.04em]"><span className="block animate-up">The art of</span></span>
          <span className="ln r block overflow-hidden pb-[.04em] self-end phone:self-start"><span className="block animate-up [animation-delay:.25s]">Timeless living</span></span>
        </h1>
      </div>
      <div className="tags absolute inset-x-0 bottom-[28px] z-[2]">
        <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px] flex justify-around gap-[12px] text-[14px] leading-[1.6] tracking-[.07em] uppercase opacity-0 animate-fade narrow:flex-col phone:gap-[8px]">
          <span>Classical &amp; contemporary</span>
          <span className="border-l border-solid border-l-[rgba(250,247,242,.45)] pl-[7%] phone:border-0 phone:border-current phone:p-0">Sri Lankan craft</span>
          <span className="border-l border-solid border-l-[rgba(250,247,242,.45)] pl-[7%] phone:border-0 phone:border-current phone:p-0">Design Minutiae</span>
        </div>
      </div>
    </section>
  );
}
