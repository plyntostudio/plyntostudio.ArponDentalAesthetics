import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="-mt-16 flex min-h-dvh items-center bg-gradient-to-b from-highlight to-accent-bg lg:-mt-[72px]"
      aria-label="Welcome"
    >
      <div className="container-main w-full pt-16 lg:pt-[72px]">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            {SITE_CONFIG.name}
          </h1>
          <p className="mt-6 max-w-lg text-[clamp(1.125rem,1.5vw,1.5rem)] leading-relaxed text-text-muted">
            {SITE_CONFIG.tagline}. {SITE_CONFIG.location}.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/book"
              className="inline-flex items-center justify-center rounded-[6px] bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Book Appointment
            </Link>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
            >
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
