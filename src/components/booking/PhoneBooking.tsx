import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function PhoneBooking() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Book by phone">
      <div className="container-main">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Prefer to Book by Phone?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              Call us during clinic hours and our team will help you schedule an appointment.
            </p>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-6 inline-flex items-center justify-center rounded-[6px] bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Call {SITE_CONFIG.phone}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
