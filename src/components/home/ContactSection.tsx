import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';
import { waLink } from '@/lib/utils';
import { ScrollReveal } from './ScrollReveal';

export function ContactSection() {
  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Contact and location">
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <ScrollReveal>
            <div className="overflow-hidden rounded-[26px] border border-border shadow-card">
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <iframe
                  src={SITE_CONFIG.googleMapsEmbedUrl}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Arpon Dental Aesthetics Location"
                  className="absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </ScrollReveal>

          <div className="max-w-xl">
            <ScrollReveal delay={0.15}>
              <h2 className="section-title">Visit Our Clinic</h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="mt-5 text-base leading-[1.9] text-text-muted">
                We&rsquo;re conveniently located in Golaghat. Walk-ins welcome, but appointments are recommended.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.25}>
              <div className="panel-surface mt-8 space-y-5 p-6">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Address</span>
                  <a href={SITE_CONFIG.googleMapsUrl} target="_blank" rel="noopener noreferrer" className="mt-1 block text-sm text-text-main transition-colors duration-200 hover:text-accent">{SITE_CONFIG.address.full}</a>
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Phone</span>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="mt-1 block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">WhatsApp</span>
                  <a
                    href={waLink(SITE_CONFIG.whatsapp, 'Hello, I would like to book an appointment.')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
                  >
                    Message us on WhatsApp
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Clinic Hours</span>
                  <ul className="mt-1 space-y-1">
                    {SITE_CONFIG.hours.map((slot) => (
                      <li key={slot.label} className="flex gap-4 text-sm">
                        <span className="text-text-main">{slot.label}</span>
                        <span className="ml-auto text-text-muted">{slot.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="/book" className="button-primary">
                  Book Appointment
                </Link>
                <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary">
                  Call Now
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>

        <ScrollReveal className="mt-14" delay={0.3}>
          <div className="panel-surface-dark p-6 text-center md:p-10">
            <p className="font-serif text-[1.55rem] leading-[1.08] tracking-[-0.03em] text-text-main">
              Need urgent dental care?
            </p>
            <p className="mt-3 text-sm leading-[1.85] text-text-muted">
              Same-day emergency appointments available. Call us right away.
            </p>
            <Link href={`tel:${SITE_CONFIG.phone}`} className="button-primary mt-5">
              Call for Emergency Care
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
