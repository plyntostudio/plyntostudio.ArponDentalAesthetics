import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function QuickAppointmentSection() {
  return (
    <section
      className="border-t border-border bg-white py-14 lg:py-18"
      aria-label="Quick appointment"
    >
      <div className="container-main">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-[clamp(1.375rem,2vw,2rem)] leading-[1.2] text-text-main">
            Ready to Book Your Appointment?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-text-muted">
            Call us or book online. We&rsquo;re here to help you smile with confidence.
          </p>
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex w-full items-center justify-center rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98] sm:w-auto"
            >
              Book Appointment
            </Link>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex w-full items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-7 py-3 text-sm font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98] sm:w-auto"
            >
              Call Now
            </Link>
          </div>
          <p className="mt-5 text-sm text-text-muted">
            Or call{' '}
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
            >
              {SITE_CONFIG.phone}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
