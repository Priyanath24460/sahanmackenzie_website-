'use client';

import { useEffect, useState } from 'react';
import { quotes } from '@/content/home';

export default function QuotesSection() {
  const [qi, setQi] = useState(0);

  // quote slider (timer restarts when someone picks a dot)
  useEffect(() => {
    const t = setInterval(() => setQi((i) => (i + 1) % quotes.length), 5500);
    return () => clearInterval(t);
  }, [qi]);

  return (
    <section
      className="testi relative grid min-h-[310px] overflow-hidden text-ivory tablet:min-h-[340px] before:absolute before:inset-0 before:z-[1] before:bg-[rgba(47,47,47,.5)] before:content-['']"
      aria-label="Design convictions"
    >
      <div className="ph testi-img on absolute inset-x-0 -top-[50vh] -bottom-[50vh] opacity-0 will-change-transform transition-opacity duration-[1300ms] ease-out bg-[url('/images/atelier/quote-lounge.webp')] bg-cover bg-center bg-no-repeat [&.on]:opacity-100" />
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px] relative z-[2] grid w-full grid-cols-1 items-center gap-[10px] py-[48px] text-center tablet:py-[42px]">
        <div className="kick m-0 text-[14px] leading-[1.6] tracking-[.05em] text-ivory uppercase">In Sahan’s words</div>
        <div>
          <div className="qs m-auto grid max-w-[940px]">
            {quotes.map(([t, q], i) => (
              <div
                className={`q [grid-area:1/1] pointer-events-none opacity-0 translate-y-[24px] transition-[opacity,transform] duration-900 [&.on]:pointer-events-auto [&.on]:opacity-100 [&.on]:transform-none${i === qi ? ' on' : ''}`}
                key={t}
              >
                <div className="text-[14px] leading-[1.6] tracking-[.05em] uppercase">{t}</div>
                <p className="my-[12px] font-sans text-[clamp(25px,3vw,42px)] leading-[1.2] font-light tracking-normal uppercase">“{q}”</p>
                <span className="text-[14px] leading-[1.6] tracking-[.05em] uppercase">Sahan Mackenzie</span>
              </div>
            ))}
          </div>
          <div className="dots mt-[18px] flex justify-center gap-[8px]">
            {quotes.map(([t], i) => (
              <button
                key={t}
                className={`h-[8px] w-[8px] rounded-[50%] border-0 bg-[rgba(255,255,255,.4)] p-0 transition-transform duration-300 [&.on]:bg-ivory [&.on]:scale-[1.4] ${i === qi ? 'on' : ''}`}
                onClick={() => setQi(i)}
                aria-label={`Quote ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
