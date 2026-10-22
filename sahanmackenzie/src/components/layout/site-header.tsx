'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

export default function SiteHeader() {
  const homePath = usePathname() === '/' ? '' : '/';
  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Add slight shadow / solid background styling once scrolled past 50px
      setIsScrolled(currentScrollY > 50);

      // Always show when near the very top of the page
      if (currentScrollY <= 60) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current + 8) {
        // Scrolling DOWN -> Hide header
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current - 8) {
        // Scrolling UP -> Show header
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="hd"
      className={`fixed inset-x-0 top-0 z-50 bg-walnut [padding-top:calc(env(safe-area-inset-top,0px)_+_12px)] pb-[12px] text-ivory transition-transform duration-350 ease-in-out ${
        isScrolled ? 'shadow-md' : 'shadow-none'
      } ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="wrap nav mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px] flex items-center justify-between gap-[24px] compact:gap-[18px] phone:flex-wrap phone:gap-x-[16px] phone:gap-y-[10px]">
        <a className="logo font-sans text-[19px] font-medium tracking-[.15em] whitespace-nowrap uppercase compact:text-[16px] phone:text-[15px] phone:tracking-[.1em]" href={`${homePath}#top`}>
          Mackenzie’s Atelier
        </a>
        <nav className="links flex gap-[20px] text-[14px] tracking-[.06em] uppercase nav-hidden:hidden" aria-label="Main">
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#about`}>Philosophy</a>
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#services`}>Services</a>
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#projects`}>Spaces</a>
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#process`}>Process</a>
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#blog`}>Journal</a>
          <a className="relative py-[4px] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:bg-current after:content-[''] after:scale-x-0 after:transition-transform after:duration-350 hover:after:origin-left hover:after:scale-x-100" href={`${homePath}#contact`}>Contact</a>
        </nav>
        <a
          className="btn inline-block bg-copper px-[20px] py-[11px] text-[14px] leading-[1.5] font-medium tracking-[.07em] text-ivory uppercase transition-[transform,background] duration-300 hover:bg-charcoal hover:-translate-y-[2px] phone:px-[14px] phone:py-[10px] phone:text-[13px]"
          href={`${homePath}#contact`}
        >
          Begin a conversation
        </a>
      </div>
    </header>
  );
}
