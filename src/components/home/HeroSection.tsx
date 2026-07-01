import Link from 'next/link';

import { DENTIST, SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="section-frame -mt-16 flex min-h-[85dvh] items-center overflow-hidden bg-gradient-to-b from-highlight via-accent-bg/80 to-white md:min-h-dvh lg:-mt-[72px]"
      aria-label="Welcome"
    >
      <div className="absolute inset-0 animate-hero-bg" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-tr from-accent-dark/[0.04] via-transparent to-highlight/[0.08]" />
      </div>

      <div className="absolute inset-0 opacity-50 max-md:opacity-30" aria-hidden="true">
        <div className="absolute left-[-6%] top-[6%] h-72 w-72 rounded-full bg-white/35 blur-3xl max-md:h-48 max-md:w-48 max-md:left-[-4%] max-md:top-[3%]" />
        <div className="absolute bottom-[15%] right-[5%] h-56 w-56 rounded-full bg-accent-bg/60 blur-3xl max-md:hidden" />
        <div className="absolute left-[40%] top-[40%] h-40 w-40 rounded-full bg-white/20 blur-2xl max-md:hidden" />
      </div>

      <div className="container-main relative z-10 w-full pt-16 lg:pt-[72px]">
        <div className="max-w-2xl">
          <h1 className="animate-fade-in-up font-display text-[clamp(2.2rem,5vw,4.75rem)] leading-[0.96] tracking-[-0.045em] text-text-main">
            {SITE_CONFIG.name}
          </h1>
          <p className="animate-fade-in-up mt-5 max-w-xl text-[clamp(1rem,1.45vw,1.42rem)] leading-[1.85] text-text-muted delay-200 md:mt-6 md:leading-[1.9]">
            {SITE_CONFIG.tagline}. {SITE_CONFIG.location}.
          </p>
          <div className="animate-fade-in-up mt-8 flex flex-col gap-4 sm:flex-row delay-[400ms] md:mt-10">
            <Link href="/book" className="button-primary">
              Book Appointment
            </Link>
            <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary">
              Call Now
            </Link>
          </div>
          <div
            className="animate-fade-in-up mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium uppercase tracking-wider text-text-muted delay-[600ms] md:mt-10"
            aria-label="Trust indicators"
          >
            <span className="inline-flex items-center gap-1.5">
              <span className="text-accent" aria-hidden="true">★</span>
              <span>{DENTIST.title}</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-accent" aria-hidden="true">◈</span>
              <span>Golaghat, Assam</span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="text-accent" aria-hidden="true">◈</span>
              <span>{SITE_CONFIG.hours[0].label}, {SITE_CONFIG.hours[0].value}</span>
            </span>
          </div>
        </div>
      </div>

      <div
        className="animate-scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs font-medium uppercase tracking-widest text-text-muted/60 md:bottom-10"
        aria-hidden="true"
      >
        <span className="block text-center">↓</span>
      </div>
    </section>
  );
}
