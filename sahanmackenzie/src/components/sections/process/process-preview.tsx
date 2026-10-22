import ProcessSteps from './process-steps';

export default function ProcessPreview() {
  return (
    <section className="sec alt py-[52px] tablet:py-[42px] bg-sand" id="process">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="phead rv mx-auto mt-0 mb-[32px] max-w-none text-left">
          <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Process</div>
          <h2 className="text-[clamp(28px,2.8vw,42px)] leading-[1.15] font-sans font-light uppercase phone:text-[28px]">Understanding before designing</h2>
        </div>
        <ProcessSteps />
      </div>
    </section>
  );
}
