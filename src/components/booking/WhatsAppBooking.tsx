import { SITE_CONFIG } from '@/lib/constants';
import { waLink } from '@/lib/utils';

export function WhatsAppBooking() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Book via WhatsApp">
      <div className="container-main">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Or Message Us on WhatsApp
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Send us a message on WhatsApp and we will get back to you within a few hours.
            </p>
            <a
              href={waLink(SITE_CONFIG.whatsapp, 'Hello, I would like to book an appointment.')}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center justify-center rounded-[6px] bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Message on WhatsApp
            </a>
            <p className="mt-4 text-sm text-text-muted">
              WhatsApp number: {SITE_CONFIG.whatsapp}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
