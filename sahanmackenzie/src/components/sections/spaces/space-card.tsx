import Image from 'next/image';
import type { spaces } from '@/content/spaces';

export default function SpaceCard({ item: s }: { item: (typeof spaces)[number] }) {
  return (
    <a
      className="card wide relative block shrink-0 grow-0 snap-start overflow-hidden text-ivory basis-[calc((100%_-_40px)/2.05)] aspect-[16/9] tablet:basis-[80%] tablet:aspect-[16/11] phone:basis-[92%] after:pointer-events-none after:absolute after:inset-y-0 after:h-full after:bg-[linear-gradient(180deg,rgba(47,47,47,.7),transparent_55%,rgba(47,47,47,.45))] after:content-[''] group"
      href="#contact"
    >
      <div className="ph space-photo absolute inset-0 overflow-hidden transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.08]">
        <Image
          src={`/images/spaces/${s.image}.webp`}
          alt={s.alt}
          fill
          className="object-cover"
          sizes="(max-width: 520px) 84vw, (max-width: 820px) 74vw, (max-width: 1440px) 44vw, 632px"
          draggable={false}
        />
      </div>
      <h3 className="absolute top-[20px] bottom-auto right-[20px] left-[20px] z-[2] text-[clamp(22px,2.3vw,34px)] leading-[1.1] font-sans font-light uppercase tablet:text-[25px] phone:text-[24px]">
        {s.t}
      </h3>
      <div className="chips absolute bottom-[18px] left-[18px] z-[2] flex flex-wrap gap-[8px]">
        {s.c.map((c) => (
          <i className="bg-[rgba(47,47,47,.55)] px-[12px] py-[6px] text-[14px] leading-[1.6] not-italic tracking-[.05em] backdrop-blur-[6px]" key={c}>
            {c}
          </i>
        ))}
      </div>
    </a>
  );
}
