import type { Metadata } from 'next';
import AboutContent from '@/components/sections/about/about-content';

export const metadata: Metadata = { title: "About the studio | Mackenzie’s Atelier" };

export default function AboutPage() {
  return (
    <main id="top" className="pt-[100px] phone:pt-[150px]">
      <h1 className="sr-only">About the studio</h1>
      <AboutContent />
    </main>
  );
}
