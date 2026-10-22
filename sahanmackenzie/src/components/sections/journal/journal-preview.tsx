import { posts } from '@/content/journal';
import ArticleCard from './article-card';

export default function JournalPreview() {
  return (
    <section className="sec alt py-[52px] tablet:py-[42px] bg-sand" id="blog">
      <div className="wrap mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] phone:px-[22px]">
        <div className="head rv mb-[30px] grid grid-cols-[1.3fr_1fr_auto] items-center gap-[36px] tablet:grid-cols-[1fr_auto] tablet:gap-[16px] phone:gap-[14px]">
          <div>
            <div className="kick mb-[12px] text-[14px] leading-[1.6] tracking-[.05em] text-walnut uppercase">Journal</div>
            <h2 className="text-[clamp(28px,2.8vw,42px)] leading-[1.15] font-sans font-light uppercase phone:text-[28px]">The Niceties</h2>
          </div>
          <p className="m-0 max-w-[46ch] text-[18px] leading-[1.75] text-walnut tablet:col-span-full tablet:row-start-2 phone:text-[17px]">
            Notes on design thinking, craft and the details that change a room.
          </p>
        </div>
        <div className="posts grid grid-cols-3 gap-[24px] tablet:grid-cols-1 tablet:gap-[32px]">
          {posts.map((post, index) => <ArticleCard key={post.t} post={post} index={index} />)}
        </div>
      </div>
    </section>
  );
}
