'use client';

import { useState } from 'react';
import { faqs } from '@/content/home';
import { revealDelay as d } from '@/lib/animation';

export default function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="sec py-[52px] tablet:py-[42px]" id="faq">
      <div className="wrap faq mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px] grid grid-cols-[1fr_1.4fr] gap-[64px] tablet:grid-cols-1 tablet:gap-[24px]">
        <div className="faq-intro rv">
          <h2 className="text-[36px] leading-[1.15] font-sans font-light uppercase tablet:text-[30px]">Questions</h2>
          <p className="mt-[20px] max-w-[30ch] text-[16px] leading-[1.75] tracking-[.04em] text-walnut uppercase">
            A few common questions about our process, projects and approach to working together.
          </p>
        </div>
        <div className="rv" style={d(0.15)}>
          {faqs.map(([q, a], i) => (
            <div className={`it border-b border-solid border-b-rule ${open === i ? 'open' : ''}`} key={q}>
              <button
                className="flex w-full justify-between gap-[16px] border-0 bg-transparent px-0 py-[18px] text-left text-[18px] leading-[1.6] font-medium cursor-pointer"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <i className={`not-italic text-copper transition-transform duration-400 ${open === i ? 'rotate-180' : ''}`}>⌄</i>
              </button>
              <div className={`ans grid transition-[grid-template-rows] duration-450 ${open === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                <p className={`m-0 overflow-hidden text-[18px] leading-[1.75] text-walnut phone:text-[17px] ${open === i ? 'pb-[18px]' : ''}`}>
                  {a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
