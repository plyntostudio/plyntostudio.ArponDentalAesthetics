import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function EmergencyContact() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Emergency contact">
      <div className="container-main">
        <div className="mx-auto max-w-xl">
          <div className="rounded-[6px] border-2 border-accent bg-accent-bg p-8 text-center md:p-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Urgent Care</span>
            <h2 className="mt-3 font-serif text-[clamp(1.5rem,2.5vw,2rem)] leading-[1.15] text-text-main">
              Need Emergency Dental Care?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Same-day emergency appointments available. Call us right away and we will see you as soon as possible.
            </p>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="mt-6 inline-flex items-center justify-center rounded-[6px] bg-accent px-8 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Call for Emergency Care
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
