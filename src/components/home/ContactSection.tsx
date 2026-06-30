import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';
import { waLink } from '@/lib/utils';

export function ContactSection() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Contact and location">
      <div className="container-main">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div
              className="aspect-[16/9] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              aria-hidden="true"
            />
          </div>

          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Visit Our Clinic
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              We&rsquo;re conveniently located in Golaghat. Walk-ins welcome, but appointments are recommended.
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Address</span>
                <p className="mt-0.5 text-sm text-text-main">{SITE_CONFIG.address.full}</p>
              </div>
              <div>
                <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">Phone</span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="mt-0.5 block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
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
                  className="mt-0.5 block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
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
              <Link
                href="/book"
                className="inline-flex items-center justify-center rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
              >
                Book Appointment
              </Link>
              <Link
                href={`tel:${SITE_CONFIG.phone}`}
                className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-7 py-3 text-sm font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
              >
                Call Now
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-14 rounded-[6px] bg-accent-bg p-6 text-center md:p-10">
          <p className="font-serif text-xl leading-snug text-text-main">
            Need urgent dental care?
          </p>
          <p className="mt-2 text-sm leading-relaxed text-text-muted">
            Same-day emergency appointments available. Call us right away.
          </p>
          <Link
            href={`tel:${SITE_CONFIG.phone}`}
            className="mt-5 inline-flex items-center justify-center rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
          >
            Call for Emergency Care
          </Link>
        </div>
      </div>
    </section>
  );
}
