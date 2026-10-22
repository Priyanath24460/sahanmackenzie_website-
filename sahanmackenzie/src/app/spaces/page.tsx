import type { Metadata } from 'next';
import SpacesPreview from '@/components/sections/spaces/spaces-preview';

export const metadata: Metadata = { title: "Spaces | Mackenzie’s Atelier" };

export default function SpacesPage() {
  return (
    <main id="top" className="pt-[100px] phone:pt-[150px]">
      <h1 className="sr-only">Spaces</h1>
      <SpacesPreview />
    </main>
  );
}
