import type { Metadata } from 'next';
import ProcessPreview from '@/components/sections/process/process-preview';

export const metadata: Metadata = { title: "Our process | Mackenzie’s Atelier" };

export default function ProcessPage() {
  return (
    <main id="top" className="pt-[100px] phone:pt-[150px]">
      <h1 className="sr-only">Our process</h1>
      <ProcessPreview />
    </main>
  );
}
