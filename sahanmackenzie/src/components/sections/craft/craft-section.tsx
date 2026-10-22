import { crafts } from '@/content/home';
import { revealDelay as d } from '@/lib/animation';

export default function CraftSection() {
  return (
    <section
      className="video band relative grid h-auto min-h-[310px] place-items-center overflow-hidden py-[52px] tablet:min-h-[360px] before:absolute before:inset-0 before:z-[1] before:bg-[rgba(105,73,60,.5)] before:content-['']"
      aria-label="Sri Lankan craft"
    >
      <div
        className="ph craft-photo absolute inset-x-0 -inset-y-[8%] bg-[url('/images/atelier/craft-carving.webp')] bg-cover bg-[position:center_55%] bg-no-repeat transition-none will-change-transform"
        id="vp"
        role="img"
        aria-label="An artisan carving floral details into a walnut panel"
      />
      <div className="bandin relative z-[2] max-w-[1200px] px-[24px] text-center text-ivory">
        <div className="kick rv mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-ivory uppercase">Sri Lankan craft</div>
        <p className="big rv mt-[14px] mb-[18px] font-sans text-[clamp(28px,3vw,44px)] leading-[1.15] font-light tracking-normal uppercase phone:text-[29px]" style={d(0.1)}>
          Rooted without being restricted by tradition.
        </p>
        <p className="sub rv mx-auto mt-0 mb-[28px] max-w-[70ch] text-[18px] leading-[1.75] opacity-[.92] phone:text-[17px]" style={d(0.2)}>
          The craft is the starting point; the relationship it creates within the space is the design.
        </p>
        <div className="crafts rv flex flex-wrap justify-center gap-[10px] phone:gap-[8px]" style={d(0.3)}>
          {crafts.map((c) => (
            <i className="border border-solid border-[rgba(255,255,255,.5)] px-[12px] py-[6px] text-[14px] leading-[1.6] not-italic tracking-[.05em] uppercase" key={c}>
              {c}
            </i>
          ))}
        </div>
      </div>
    </section>
  );
}
