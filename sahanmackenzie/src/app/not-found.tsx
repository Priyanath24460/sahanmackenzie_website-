import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="top" className="mx-auto max-w-[1440px] px-[clamp(24px,3.6vw,52px)] pt-[160px] pb-[80px] phone:px-[22px]">
      <h1 className="text-[clamp(28px,2.8vw,42px)]">Page not found</h1>
      <p className="text-walnut">The page you are looking for could not be found.</p>
      <Link href="/" className="inline-block bg-copper px-[20px] py-[11px] text-ivory">Return home</Link>
    </main>
  );
}
