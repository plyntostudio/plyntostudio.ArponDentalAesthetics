import { SITE_CONFIG } from '@/lib/constants';
import { waLink } from '@/lib/utils';

const CONTACT_DETAILS = [
  {
    label: 'Address',
    value: SITE_CONFIG.address.full,
    href: SITE_CONFIG.googleMapsUrl !== 'Requires Client Confirmation' ? SITE_CONFIG.googleMapsUrl : undefined,
    linkLabel: 'Get directions',
  },
  {
    label: 'Phone',
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
    linkLabel: SITE_CONFIG.phone,
  },
  {
    label: 'WhatsApp',
    value: 'Message us',
    href: waLink(SITE_CONFIG.whatsapp, 'Hello, I would like to book an appointment.'),
    linkLabel: 'Send a message',
    external: true,
  },
  {
    label: 'Email',
    value: SITE_CONFIG.email !== 'Requires Client Confirmation' ? SITE_CONFIG.email : 'Email coming soon',
    href: SITE_CONFIG.email !== 'Requires Client Confirmation' ? `mailto:${SITE_CONFIG.email}` : undefined,
  },
];

export function ContactInformation() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Contact information">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Choose the method that works best for you. We typically respond within a few hours during business hours.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {CONTACT_DETAILS.map((detail) => (
            <div
              key={detail.label}
              className="rounded-[6px] border border-border bg-white p-5"
            >
              <span className="block text-xs font-medium uppercase tracking-wider text-text-muted">
                {detail.label}
              </span>
              <span className="mt-1 block text-sm text-text-main">{detail.value}</span>
              {detail.href && (
                <a
                  href={detail.href}
                  target={detail.external ? '_blank' : undefined}
                  rel={detail.external ? 'noopener noreferrer' : undefined}
                  className="mt-2 inline-block text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
                >
                  {detail.linkLabel || detail.value}
                  {detail.external && (
                    <span aria-hidden="true" className="ml-1 text-xs">&rarr;</span>
                  )}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
