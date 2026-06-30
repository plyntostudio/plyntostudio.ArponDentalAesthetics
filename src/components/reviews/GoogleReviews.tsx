import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

export function GoogleReviews() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Google reviews">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Google Reviews</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Hear From More Patients
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We believe in transparency. Our Google Reviews are unedited and unfiltered — real feedback from real
            patients in our community.
          </p>

          <div className="mt-8 rounded-[6px] border border-border bg-white p-8">
            <div className="flex items-center justify-center gap-4">
              <span className="text-3xl leading-none" aria-hidden="true">G</span>
              <div>
                <span className="block text-lg font-semibold text-text-main">
                  Google Reviews
                </span>
                <span className="block text-sm text-text-muted">
                  Review data will appear here once connected
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Link
              href={SITE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-white px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
            >
              Read reviews on Google
              <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
