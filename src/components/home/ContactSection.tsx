import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';
import { waLink } from '@/lib/utils';

export function ContactSection() {
  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Contact and location">
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <div
              className="image-surface aspect-[16/9] w-full bg-gradient-to-br from-highlight via-white to-accent-bg"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="section-title">Visit Our Clinic</h2>
            <p className="mt-5 text-base leading-[1.9] text-text-muted">
              We&rsquo;re conveniently located in Golaghat. Walk-ins welcome, but appointments are recommended.
            </p>

            <div className="panel-surface mt-8 space-y-5 p-6">
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Address</span>
                <p className="mt-1 text-sm text-text-main">{SITE_CONFIG.address.full}</p>
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

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/book" className="button-primary">
                Book Appointment
              </Link>
              <Link href={`tel:${SITE_CONFIG.phone}`} className="button-secondary">
                Call Now
              </Link>
            </div>
          </div>
        </div>

        <div className="panel-surface mt-14 bg-[linear-gradient(180deg,rgba(232,244,240,0.82),rgba(255,255,255,0.92))] p-6 text-center md:p-10">
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
      </div>
    </section>
  );
}
