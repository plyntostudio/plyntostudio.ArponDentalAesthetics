import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="section-frame -mt-16 flex min-h-[80dvh] items-center overflow-hidden bg-gradient-to-b from-highlight via-accent-bg/80 to-white md:min-h-dvh lg:-mt-[72px]"
      aria-label="Welcome"
    >
      <div className="absolute inset-0 opacity-70 max-md:opacity-40" aria-hidden="true">
        <div className="animate-float absolute left-[-8%] top-[8%] h-64 w-64 rounded-full bg-white/45 blur-3xl max-md:h-40 max-md:w-40 max-md:left-[-4%] max-md:top-[4%]" />
        <div className="animate-float absolute right-[8%] top-[18%] h-48 w-48 rounded-full bg-accent-bg/80 blur-3xl max-md:hidden" style={{ animationDelay: '-4s', animationDuration: '16s' }} />
      </div>
      <div className="container-main relative w-full pt-16 lg:pt-[72px]">
        <div className="max-w-2xl">
          <h1 className="animate-fade-in-up font-display text-[clamp(2.2rem,5vw,4.75rem)] leading-[0.96] tracking-[-0.045em] text-text-main">
            {SITE_CONFIG.name}
          </h1>
          <p className="animate-fade-in-up mt-5 max-w-xl text-[clamp(1rem,1.45vw,1.42rem)] leading-[1.8] text-text-muted delay-200 md:mt-7 md:leading-[1.9]">
            {SITE_CONFIG.tagline}. {SITE_CONFIG.location}.
          </p>
          <div className="animate-fade-in-up mt-6 flex flex-col gap-4 sm:flex-row delay-300 md:mt-10">
            <Link href="/book" className="button-primary">
              Book Appointment
            </Link>
            <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary">
              Call Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
