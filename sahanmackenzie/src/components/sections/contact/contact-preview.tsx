import ContactDetails from './contact-details';

export default function ContactPreview() {
  return (
    <section className="sec bg-walnut py-[52px] text-ivory tablet:py-[42px]">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <h1 className="mb-[30px] text-[clamp(28px,2.8vw,42px)]">Begin a conversation</h1>
        <ContactDetails />
      </div>
    </section>
  );
}
