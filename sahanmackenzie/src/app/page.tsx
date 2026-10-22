import HeroSection from '@/components/sections/hero/hero-section';
import AboutPreview from '@/components/sections/about/about-preview';
import FounderProfile from '@/components/sections/about/founder-profile';
import ServicesPreview from '@/components/sections/services/services-preview';
import QuotesSection from '@/components/sections/quotes/quotes-section';
import SpacesPreview from '@/components/sections/spaces/spaces-preview';
import ProcessPreview from '@/components/sections/process/process-preview';
import CraftSection from '@/components/sections/craft/craft-section';
import FaqSection from '@/components/sections/faq/faq-section';
import JournalPreview from '@/components/sections/journal/journal-preview';

export default function HomePage() {
  return (
    <div className="stage relative" id="top">
      <HeroSection />
      <div className="cover relative z-[2] bg-ivory">
        <AboutPreview />
        <FounderProfile />
        <ServicesPreview />
        <QuotesSection />
        <SpacesPreview />
        <ProcessPreview />
        <CraftSection />
        <FaqSection />
        <JournalPreview />
      </div>
    </div>
  );
}
