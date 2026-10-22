import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import SiteHeader from '@/components/layout/site-header';
import SiteFooter from '@/components/layout/site-footer';
import BackToTop from '@/components/ui/back-to-top';
import ScrollReveal from '@/components/ui/scroll-reveal';
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mackenzie’s Atelier — The Art of Timeless Living",
  description: "An independent interior design studio in Sri Lanka. Layered, refined interiors where architecture, craft and the way you live come into harmony.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`js ${jost.variable}`}>
      <body className={jost.className}>
        <SiteHeader />
        {children}
        <SiteFooter />
        <BackToTop />
        <ScrollReveal />
      </body>
    </html>
  );
}
