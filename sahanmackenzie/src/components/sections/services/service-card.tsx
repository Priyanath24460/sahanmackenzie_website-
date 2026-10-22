import Image from 'next/image';
import type { services } from '@/content/services';

export default function ServiceCard({ item: s }: { item: (typeof services)[number] }) {
  return (
    <a
      className="card relative block shrink-0 grow-0 snap-start overflow-hidden text-ivory basis-[calc((100%_-_60px)/4)] aspect-[3/3.8] compact:basis-[calc((100%_-_40px)/3)] tablet:basis-[calc((100%_-_20px)/2)] phone:basis-[82%] after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:z-[1] after:h-[55%] after:bg-[linear-gradient(transparent,rgba(47,47,47,.88))] after:content-[''] group"
      href="#contact"
    >
      <div className="ph service-photo absolute inset-0 overflow-hidden transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.08]">
        <Image
          src={`/images/services/${s.image}.webp`}
          alt={s.alt}
          fill
          className="object-cover"
          sizes="(max-width: 520px) 82vw, (max-width: 820px) 45vw, (max-width: 1100px) 30vw, (max-width: 1440px) 22vw, 320px"
          draggable={false}
        />
      </div>
      <span className="go absolute top-[18px] right-[18px] z-[2] grid h-[36px] w-[36px] place-items-center rounded-[50%] bg-ivory text-charcoal opacity-0 -translate-x-[10px] translate-y-[10px] -rotate-45 transition duration-400 group-hover:opacity-100 group-hover:transform-none group-focus-visible:opacity-100 group-focus-visible:transform-none">
        →
      </span>
      <h3 className="absolute right-[20px] bottom-[20px] left-[20px] z-[2] text-[clamp(18px,1.8vw,26px)] leading-[1.1] font-sans font-light uppercase tablet:text-[21px] phone:text-[23px]">
        {s.t}
      </h3>
    </a>
  );
}
