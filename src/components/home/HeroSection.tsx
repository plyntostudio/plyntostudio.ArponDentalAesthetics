import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function HeroSection() {
  return (
    <section
      className="section-frame hero-surface -mt-16 flex min-h-dvh items-center lg:-mt-[72px]"
      aria-label="Welcome"
    >
      <div className="container-main relative w-full pt-16 lg:pt-[72px]">
        <div className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-14 md:py-[4.5rem] lg:min-h-[calc(100dvh-72px)] lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.7fr)] lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-accent-dark/80">
              Dental Clinic in Golaghat
            </p>
            <h1 className="mt-5 font-display text-[clamp(2.7rem,5vw,5.1rem)] leading-[0.94] tracking-[-0.045em] text-text-main">
              {SITE_CONFIG.name}
            </h1>
            <p className="mt-7 max-w-xl text-[clamp(1.08rem,1.6vw,1.42rem)] leading-[1.9] text-text-muted">
              {SITE_CONFIG.tagline}. {SITE_CONFIG.location}.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/book" className="button-primary">
                Book Appointment
              </Link>
              <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary">
                Call Now
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="panel-card relative ml-auto max-w-md p-5">
              <div
                className="image-shell aspect-[4/5] w-full bg-gradient-to-br from-white via-highlight to-accent-bg"
                aria-hidden="true"
              >
                <div className="absolute inset-x-[12%] top-[14%] h-px bg-white/80" />
                <div className="absolute inset-x-[18%] top-[20%] h-px bg-accent/18" />
                <div className="absolute inset-x-[20%] top-[28%] h-[42%] rounded-[24px] border border-white/65 bg-white/18 backdrop-blur-[2px]" />
                <div className="absolute bottom-[16%] left-[18%] h-[18%] w-[28%] rounded-full border border-white/70 bg-white/28" />
                <div className="absolute bottom-[13%] right-[12%] w-[34%] rounded-[20px] border border-white/70 bg-white/72 px-5 py-4 shadow-[0_18px_35px_rgba(12,36,36,0.08)]">
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.22em] text-accent-dark/70">
                    Calm care
                  </p>
                  <p className="mt-2 font-serif text-[1.05rem] leading-snug text-text-main">
                    Gentle treatment, modern dentistry, considered detail.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
