import Image from 'next/image';
import type { posts } from '@/content/journal';
import { revealDelay as d } from '@/lib/animation';

export default function ArticleCard({ post: p, index: i }: { post: (typeof posts)[number]; index: number }) {
  return (
    <a className="post rv group" style={d(i * 0.15)} href="#blog">
      <div className="frame mb-[14px] overflow-hidden">
        <div className="ph editorial-photo journal-photo relative overflow-hidden mb-0 aspect-[16/8.5] tablet:aspect-[16/9] transition-transform duration-[1100ms] [transition-timing-function:cubic-bezier(.2,.7,.2,1)] group-hover:scale-[1.05]">
          <Image
            src={`/images/atelier/${p.image}.webp`}
            alt={p.alt}
            fill
            className="object-cover"
            sizes="(max-width: 820px) 90vw, 30vw"
          />
        </div>
      </div>
      <span className="soon mb-[8px] inline-block border border-solid border-rule px-[10px] py-[4px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">
        Coming soon
      </span>
      <h3 className="mb-[8px] text-[22px] leading-[1.4] font-sans font-light uppercase">{p.t}</h3>
      <p className="m-0 mb-[8px] text-[18px] leading-[1.75] text-walnut phone:text-[17px]">{p.d}</p>
      <small className="text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Sahan Mackenzie</small>
    </a>
  );
}
