import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';
import { ScrollReveal } from './ScrollReveal';

export function QuickAppointmentSection() {
  return (
    <section
      className="section-frame bg-white py-[4.5rem] lg:py-24"
      aria-label="Quick appointment"
    >
      <div className="container-main">
        <ScrollReveal>
          <div className="panel-surface mx-auto max-w-4xl px-6 py-10 text-center md:px-10 md:py-12">
            <h2 className="section-title">Ready to Book Your Appointment?</h2>
            <p className="section-copy">
              Call us or book online. We&rsquo;re here to help you smile with confidence.
            </p>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/book" className="button-primary w-full sm:w-auto">
                Book Appointment
              </Link>
              <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary w-full sm:w-auto">
                Call Now
              </Link>
            </div>
            <p className="mt-6 text-sm text-text-muted">
              Or call{' '}
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
              >
                {SITE_CONFIG.phone}
              </a>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
