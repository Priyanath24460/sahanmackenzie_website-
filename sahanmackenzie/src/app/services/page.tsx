import type { Metadata } from 'next';
import ServicesPreview from '@/components/sections/services/services-preview';

export const metadata: Metadata = { title: "Services | Mackenzie’s Atelier" };

export default function ServicesPage() {
  return (
    <main id="top" className="pt-[100px] phone:pt-[150px]">
      <h1 className="sr-only">Services</h1>
      <ServicesPreview />
    </main>
  );
}
