import type { Metadata } from 'next';
import ContactPreview from '@/components/sections/contact/contact-preview';

export const metadata: Metadata = { title: 'Contact | Mackenzie’s Atelier' };

export default function ContactPage() {
  return (
    <main id="top" className="pt-[100px] phone:pt-[150px]">
      <ContactPreview />
    </main>
  );
}
