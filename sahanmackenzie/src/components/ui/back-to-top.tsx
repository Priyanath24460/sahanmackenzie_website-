'use client';

export default function BackToTop() {
  return (
    <button
      className="top pointer-events-none fixed right-[max(18px,env(safe-area-inset-right,0px))] bottom-[calc(18px_+_env(safe-area-inset-bottom,0px))] z-[60] h-[42px] w-[42px] rounded-[50%] border-0 bg-copper text-[18px] text-ivory opacity-0 translate-y-[20px] transition duration-400 [&.show]:pointer-events-auto [&.show]:opacity-100 [&.show]:transform-none"
      id="top-btn"
      aria-label="Back to top"
      onClick={() => scrollTo({ top: 0 })}
    >
      ↑
    </button>
  );
}
