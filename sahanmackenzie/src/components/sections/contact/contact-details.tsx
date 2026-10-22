import { contact } from '@/content/site';

export default function ContactDetails() {
  return (
    <>
      <h3 className="group mb-[6px] inline-flex items-center justify-between gap-[18px] bg-copper px-[18px] py-[12px] text-[17px] leading-[1.5] font-sans font-light uppercase">
        Begin a conversation <span className="inline-block transition-transform duration-400 group-hover:translate-x-[8px] group-hover:-translate-y-[8px]">↗</span>
      </h3>
      <small className="mt-[10px] block text-[15px] leading-[1.75] tracking-[.08em] text-sand uppercase">Email</small>
      <div className="big text-sand text-[15px] leading-[1.75] normal-case [overflow-wrap:anywhere]">{contact.email}</div>
      <small className="mt-[10px] block text-[15px] leading-[1.75] tracking-[.08em] text-sand uppercase">Phone</small>
      <div className="big text-sand text-[15px] leading-[1.75] normal-case [overflow-wrap:anywhere]">{contact.phone}</div>
      <small className="mt-[10px] block text-[15px] leading-[1.75] tracking-[.08em] text-sand uppercase">Instagram</small>
      <div className="big text-sand text-[15px] leading-[1.75] normal-case [overflow-wrap:anywhere]">{contact.instagram}</div>
    </>
  );
}
