'use client';

import { usePathname } from 'next/navigation';
import ContactDetails from '@/components/sections/contact/contact-details';

export default function SiteFooter() {
  const homePath = usePathname() === '/' ? '' : '/';

  return (
    <footer className="bg-walnut pt-[38px] text-ivory" id="contact">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="fgrid grid grid-cols-[1.2fr_1fr_1.2fr] gap-[44px] tablet:grid-cols-2 tablet:gap-[28px] phone:grid-cols-1">
          <div>
            <a className="logo font-sans text-[17px] font-medium tracking-[.15em] whitespace-normal uppercase" href={`${homePath}#top`}>
              Mackenzie’s Atelier
            </a>
            <span className="tagl mt-[10px] block font-sans text-[15px] leading-[1.75] not-italic tracking-[.12em] text-sand uppercase">
              Design Minutiae Colonnade
            </span>
            <p className="studio-location mt-[32px] mb-0 text-[15px] leading-[1.75] text-sand tablet:mt-[18px]">
              Sri Lanka, with selected projects abroad
            </p>
          </div>
          <div className="footer-links border-l border-solid border-l-[rgba(234,219,199,.25)] pl-[36px] tablet:pl-[24px] phone:border-t phone:border-t-[rgba(234,219,199,.25)] phone:border-l-0 phone:px-0 phone:pt-[22px]">
            <ul className="m-0 grid list-none grid-cols-2 gap-x-[24px] gap-y-[12px] p-0 text-[15px] leading-[1.75] text-sand">
              <li><a className="hover:text-white" href={`${homePath}#about`}>Philosophy</a></li>
              <li><a className="hover:text-white" href={`${homePath}#services`}>Services</a></li>
              <li><a className="hover:text-white" href={`${homePath}#projects`}>Spaces</a></li>
              <li><a className="hover:text-white" href={`${homePath}#process`}>Process</a></li>
              <li><a className="hover:text-white" href={`${homePath}#faq`}>Questions</a></li>
              <li><a className="hover:text-white" href={`${homePath}#blog`}>Journal</a></li>
              <li><a className="hover:text-white" href={`${homePath}#contact`}>Contact</a></li>
              <li><a className="hover:text-white" href={`${homePath}#top`}>Back to top</a></li>
            </ul>
          </div>
          <div className="border-l border-solid border-l-[rgba(234,219,199,.25)] pl-[36px] tablet:col-span-full tablet:border-t tablet:border-t-[rgba(234,219,199,.25)] tablet:border-l-0 tablet:px-0 tablet:pt-[24px] phone:border-t phone:border-t-[rgba(234,219,199,.25)] phone:border-l-0 phone:px-0 phone:pt-[22px]">
            <ContactDetails />
          </div>
        </div>
        <div className="copy mt-[30px] border-t border-solid border-t-[rgba(234,219,199,.3)] py-[18px] text-right text-[15px] leading-[1.75] text-sand tablet:text-left">
          © 2026 Mackenzie’s Atelier · The Art of Timeless Living
        </div>
      </div>
    </footer>
  );
}
