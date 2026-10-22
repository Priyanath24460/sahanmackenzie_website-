'use client';

import Image from 'next/image';
import useHorizontalTrack from '@/hooks/use-horizontal-track';
import HorizontalTrack from '@/components/ui/horizontal-track';
import { serviceOptions } from '@/content/services';
import ServicesGrid from './services-grid';

export default function ServicesPreview() {
  const { ref: trackRef, by: scrollTrack, handlers } = useHorizontalTrack();

  return (
    <section className="sec alt bg-sand py-[52px] tablet:py-[42px]" id="services" aria-labelledby="services-heading">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="rv mb-[28px]">
          <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Services</div>
          <h2 id="services-heading" className="text-[clamp(28px,2.8vw,42px)] leading-[1.15] font-sans font-light uppercase phone:text-[28px]">
            A considered approach to your home
          </h2>
        </div>

        <div className="mb-[36px] grid grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] items-start gap-[clamp(28px,3vw,44px)] tablet:grid-cols-1 tablet:gap-[24px]">
          <figure className="rv m-0 min-w-0">
            <div className="ph relative aspect-[5/4] overflow-hidden tablet:aspect-[16/10] phone:aspect-[5/4]">
              <Image
                src="/images/services/site-styling.webp"
                alt="Warm natural light across a considered living room with timber furniture, linen seating and textured stone"
                fill
                sizes="(max-width: 820px) 92vw, (max-width: 1440px) 45vw, 630px"
                className="object-cover object-[center_55%]"
              />
            </div>
            <figcaption className="mt-[8px] text-[14px] leading-[1.6] text-walnut">Spaces shaped around you.</figcaption>
          </figure>

          <ol className="rv m-0 min-w-0 list-none p-0">
            {serviceOptions.map((service, index) => (
              <li key={service.id} id={service.id} className="border-b border-solid border-b-walnut/30 py-[22px] first:pt-0 last:border-b-0 last:pb-0">
                <a href="/contact" aria-label={`Enquire about ${service.title.toLowerCase()}`} className="group grid grid-cols-[26px_minmax(0,1fr)_30px] items-start gap-[14px] phone:grid-cols-[22px_minmax(0,1fr)_24px] phone:gap-[10px]">
                  <span aria-hidden="true" className="text-[23px] leading-[1.3] font-light text-copper phone:text-[21px]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-[clamp(18px,1.55vw,23px)] leading-[1.25] font-light uppercase">{service.title}</h3>
                    <p className="mt-[6px] mb-[10px] text-[16px] leading-[1.6] text-walnut">{service.description}</p>
                    <ul className="m-0 list-none p-0 text-[14px] leading-[1.7] text-walnut">
                      {service.includes.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                    {service.note && <p className="mt-[8px] mb-0 text-[13px] leading-[1.6] text-walnut">{service.note}</p>}
                  </div>
                  <span aria-hidden="true" className="self-center text-[30px] leading-none font-light text-copper transition-transform duration-300 group-hover:translate-x-[5px] group-focus-visible:translate-x-[5px]">→</span>
                </a>
              </li>
            ))}
          </ol>
        </div>

        <div className="rv mb-[14px] flex items-center justify-between gap-[20px]">
          <h3 className="text-[14px] leading-[1.6] font-normal tracking-[.08em] text-walnut uppercase">Our design capabilities</h3>
          <div className="flex gap-[8px] phone:gap-[6px]">
            <button type="button" className="grid h-[30px] w-[30px] place-items-center rounded-full bg-copper text-[16px] text-ivory transition-transform duration-250 hover:scale-[1.12]" onClick={() => scrollTrack(-1)} aria-label="Previous design capabilities">←</button>
            <button type="button" className="grid h-[30px] w-[30px] place-items-center rounded-full bg-copper text-[16px] text-ivory transition-transform duration-250 hover:scale-[1.12]" onClick={() => scrollTrack(1)} aria-label="Next design capabilities">→</button>
          </div>
        </div>
        <HorizontalTrack trackRef={trackRef} handlers={handlers}>
          <ServicesGrid />
        </HorizontalTrack>
      </div>
    </section>
  );
}
