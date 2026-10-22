import Image from 'next/image';
import AnimatedCounter from '@/components/ui/animated-counter';
import { about } from '@/content/about';
import { revealDelay as d } from '@/lib/animation';

export default function AboutContent() {
  return (
    <section className="sec py-[52px] tablet:py-[42px]" id="about">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="about grid grid-cols-[minmax(200px,.8fr)_minmax(0,2.2fr)] items-stretch gap-[clamp(30px,4vw,64px)] tablet:grid-cols-1 tablet:gap-[28px]">
          <div className="ph editorial-photo about-photo rv relative overflow-hidden aspect-[3/4] min-h-[360px] compact:aspect-auto tablet:aspect-[16/10] tablet:min-h-0 tablet:max-h-[380px] transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)]">
            <Image
              src="/images/atelier/philosophy-vase.webp"
              alt="Handmade ceramic vase and leafy branch in a sunlit limestone niche"
              fill
              className="object-cover"
              sizes="(max-width: 820px) 90vw, 25vw"
            />
          </div>
          <div className="about-copy flex min-w-0 flex-col justify-between">
            <div className="rv" style={d(0.1)}>
              <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Pillars of Aesthetic Harmony</div>
              <h2 className="max-w-[32ch] text-[clamp(27px,2.5vw,38px)] leading-[1.15] font-sans font-light uppercase tablet:max-w-none phone:text-[28px]">
                Every decision has a reason. Every element, a relationship.
              </h2>
            </div>
            <div className="about-story rv mt-[16px] grid grid-cols-[minmax(0,1fr)_190px] items-center gap-[32px] compact:grid-cols-1 compact:gap-[16px]" style={d(0.2)}>
              <div>
                <p className="m-0 mb-[18px] text-[18px] leading-[1.75] text-walnut phone:text-[17px]">
                  {about.paragraphs[0]}
                </p>
                <p className="m-0 mb-[18px] text-[18px] leading-[1.75] text-walnut phone:text-[17px]">
                  {about.paragraphs[1]}
                </p>
              </div>
              <div className="attribution">
                <span className="sign m-0 inline-block [font-family:var(--font-jost),sans-serif] text-[16px] leading-[1.6] font-normal not-italic tracking-[.08em] text-walnut uppercase">Sahan Mackenzie</span>
                <span className="role mt-[5px] block text-[14px] leading-[1.7] tracking-[.04em] text-walnut uppercase">Interior Designer &amp; Director</span>
              </div>
            </div>
            <div className="stats rv mt-[24px] grid grid-cols-4 gap-0 border-t border-solid border-t-rule pt-[20px] narrow:grid-cols-2 phone:gap-x-0 phone:gap-y-[20px]">
              <div className="px-[16px] text-center phone:px-[10px]">
                <AnimatedCounter to={10} suffix="+" />
                <span className="block px-[2px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Years leading residential design</span>
              </div>
              <div className="border-l border-solid border-l-rule px-[16px] text-center phone:px-[10px]">
                <AnimatedCounter to={8} />
                <span className="block px-[2px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Stages from enquiry to handover</span>
              </div>
              <div className="border-l border-solid border-l-rule px-[16px] text-center phone:px-[10px] phone:border-l-0">
                <AnimatedCounter to={8} />
                <span className="block px-[2px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Sri Lankan craft traditions</span>
              </div>
              <div className="border-l border-solid border-l-rule px-[16px] text-center phone:px-[10px]">
                <AnimatedCounter to={4} />
                <span className="block px-[2px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Lenses: proportion, light, colour, materials</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
