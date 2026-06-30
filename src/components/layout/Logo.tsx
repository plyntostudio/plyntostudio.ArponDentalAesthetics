import Link from 'next/link';

export function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex items-baseline gap-1 font-display text-xl leading-none transition-colors duration-200 hover:opacity-80 focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-4"
      aria-label="Arpon Dental Aesthetics — Home"
    >
      <span className="text-accent">Arpon</span>
      <span className="text-text-main font-medium text-lg">Dental</span>
    </Link>
  );
}
