import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function NewPatientsCTA() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Book your first appointment">
      <div className="container-main">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Ready to Visit Us?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Take the first step toward a lifetime of healthy smiles. We cannot wait to meet you.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/book"
              className="inline-flex w-full items-center justify-center rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98] sm:w-auto"
            >
              Book Your First Visit
            </Link>
            <Link
              href={`tel:${SITE_CONFIG.phone}`}
              className="inline-flex w-full items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-7 py-3 text-sm font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-white active:scale-[0.98] sm:w-auto"
            >
              Call to Get Started
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
