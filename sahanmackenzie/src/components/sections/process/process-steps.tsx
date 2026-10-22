import { steps } from '@/content/process';
import { revealDelay as d } from '@/lib/animation';

export default function ProcessSteps() {
  return (
    <div className="steps grid grid-cols-4 gap-x-[24px] gap-y-[36px] text-left tablet:grid-cols-2 phone:gap-x-[20px] phone:gap-y-[28px]">
      {steps.map(([n, t, text], i) => (
        <div className="step rv relative grid grid-cols-[44px_minmax(0,1fr)] content-start gap-x-[16px] gap-y-[8px] p-0 phone:grid-cols-1 phone:gap-[10px]" style={d((i % 4) * 0.15)} key={n}>
          <div className="ico row-span-2 m-0 grid h-[44px] w-[44px] place-items-center rounded-[50%] border-0 bg-copper [font-family:var(--font-jost),Arial,sans-serif] text-[18px] text-ivory phone:row-auto">
            {n}
          </div>
          <h3 className="m-0 text-[18px] leading-[1.45] font-sans font-light uppercase phone:text-[17px]">{t}</h3>
          <p className="col-start-2 m-0 text-[16px] leading-[1.75] text-walnut phone:col-start-1">{text}</p>
        </div>
      ))}
    </div>
  );
}
