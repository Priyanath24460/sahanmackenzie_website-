'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/** Preserves the original document-wide reveal, header and parallax behavior. */
export default function ScrollReveal() {
  const pathname = usePathname();
  // scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    }), { threshold: 0.15 });
    document.querySelectorAll('.rv').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  // header, back-to-top and parallax
  useEffect(() => {
    const $ = (s: string) => document.querySelector<HTMLElement>(s);
    const hd = $('#hd'), tb = $('#top-btn'), vp = $('#vp'), hero = $('.hero-in'), band = $('.video'), testi = $('.testi');
    const heroHeading = $('.hero h1'), heroTags = $('.hero .tags');
    const layers = document.querySelectorAll<HTMLElement>('.testi>.ph');
    const still = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let ly = 0;
    const onScroll = () => {
      const y = scrollY, h = innerHeight;
      hd?.classList.toggle('solid', y > 60);
      hd?.classList.toggle('hide', y > h && y > ly + 4);
      if (y < ly - 4) hd?.classList.remove('hide');
      ly = y;
      tb?.classList.toggle('show', y > h * 0.6);
      if (still) return;
      if (hero && y < h) {
        // Keep the parallax copy clear of the independently positioned labels.
        const maxShift = heroHeading && heroTags
          ? Math.max(0, heroTags.offsetTop - hero.offsetTop - heroHeading.offsetTop - heroHeading.offsetHeight - 24)
          : y * 0.25;
        hero.style.transform = `translateY(${Math.min(y * 0.25, maxShift)}px)`;
        hero.style.opacity = String(Math.max(0, 1 - y / (h * 0.8)));
      }
      const b = band?.getBoundingClientRect();
      if (b && vp && b.top < h && b.bottom > 0) vp.style.transform = `translateY(${(b.top - h / 2) * -0.08}px)`;
      const t = testi?.getBoundingClientRect();
      if (t && t.top < h && t.bottom > 0) {
        const v = `translate3d(0,${(h / 2 - (t.top + t.height / 2)) * 0.5}px,0)`;
        layers.forEach((el) => { el.style.transform = v; });
      }
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => removeEventListener('scroll', onScroll);
  }, [pathname]);

  return null;
}
