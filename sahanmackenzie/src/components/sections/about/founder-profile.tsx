import Image from 'next/image';
import { founder } from '@/content/about';
import { revealDelay as d } from '@/lib/animation';

export default function FounderProfile() {
  return (
    <section
      id="founder"
      aria-labelledby="founder-heading"
      className="sec border-t border-solid border-t-rule bg-ivory py-[52px] tablet:py-[42px]"
    >
      <div className="wrap mx-auto grid max-w-[1440px] grid-cols-[minmax(0,1.15fr)_minmax(0,.85fr)] items-center gap-[clamp(32px,5vw,72px)] px-[clamp(24px,3.6vw,52px)] tablet:grid-cols-1 tablet:gap-[28px] phone:px-[22px]">
        <div className="rv min-w-0">
          <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">
            {founder.eyebrow}
          </div>
          <h2
            id="founder-heading"
            className="text-[clamp(28px,2.8vw,42px)] leading-[1.15] font-sans font-light uppercase phone:text-[28px]"
          >
            {founder.heading}
          </h2>
          <p className="mt-[10px] mb-[22px] text-[14px] leading-[1.7] tracking-[.06em] text-walnut uppercase">
            {founder.role}
          </p>
          {founder.paragraphs.map((paragraph) => (
            <p key={paragraph} className="m-0 mb-[18px] max-w-[60ch] text-[18px] leading-[1.75] text-walnut phone:text-[17px]">
              {paragraph}
            </p>
          ))}
          <ol
            aria-label="Career journey"
            className="relative mt-[28px] mr-0 mb-[26px] ml-0 grid list-none grid-cols-3 gap-[20px] border-t border-solid border-t-rule px-0 pt-[20px] phone:gap-[12px]"
          >
            {founder.careerStages.map((stage) => (
              <li
                key={stage}
                className="relative text-[13px] leading-[1.6] tracking-[.06em] text-walnut uppercase before:absolute before:-top-[24px] before:left-0 before:h-[7px] before:w-[7px] before:rounded-full before:border before:border-solid before:border-copper before:bg-ivory before:content-[''] phone:text-[12px]"
              >
                {stage}
              </li>
            ))}
          </ol>
          <a
            href={founder.link.href}
            className="group inline-flex items-center gap-[24px] border border-solid border-copper px-[20px] py-[11px] text-[14px] leading-[1.5] font-medium tracking-[.07em] text-copper uppercase transition-[color,background,transform] duration-300 hover:-translate-y-[2px] hover:bg-copper hover:text-ivory"
          >
            {founder.link.label}
            <span aria-hidden="true" className="inline-block transition-transform duration-300 group-hover:translate-x-[4px]">→</span>
          </a>
        </div>
        <figure className="rv mx-auto my-0 w-full max-w-[440px] min-w-0 pl-[22px] phone:pl-[16px]" style={d(0.15)}>
          <div className="relative">
            <div aria-hidden="true" className="absolute top-[22px] right-[24px] bottom-[60px] -left-[22px] bg-sand/60 phone:-left-[16px]" />
            <div className="relative border border-solid border-copper/70 bg-ivory p-[7px] phone:p-[5px]">
              <div className="ph relative aspect-[4/5] overflow-hidden bg-[linear-gradient(145deg,#d1bfae_0%,#e4d7c8_58%,#cbb7a4_100%)]">
                <Image
                  src={founder.image.src}
                  alt={founder.image.alt}
                  fill
                  sizes="(max-width: 520px) 85vw, 400px"
                  className="object-contain object-bottom"
                />
              </div>
            </div>
          </div>
          <figcaption className="mt-[10px] flex items-center gap-[16px] text-[17px] leading-[1.6] tracking-[.14em] text-copper phone:gap-[12px] phone:text-[15px]">
            <span>{founder.image.caption}</span>
            <span aria-hidden="true" className="h-px min-w-[24px] flex-1 bg-copper/70" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
