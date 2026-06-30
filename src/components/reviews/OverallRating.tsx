import Link from 'next/link';

import { SITE_CONFIG } from '@/lib/constants';

function StarRating({ rating, size = 'md' }: { rating: number; size?: 'sm' | 'md' | 'lg' }) {
  const starSize = size === 'lg' ? 'text-2xl' : size === 'sm' ? 'text-sm' : 'text-lg';
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span
          key={i}
          className={`${starSize} ${i < rating ? 'text-accent' : 'text-border'}`}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}

export function OverallRating() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Overall rating">
      <div className="container-main">
        <div className="mx-auto max-w-xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="font-display text-[clamp(3rem,5vw,4.5rem)] leading-none tracking-tight text-text-main">
              5.0
            </span>
            <div className="text-left">
              <StarRating rating={5} size="lg" />
              <span className="mt-1 block text-sm text-text-muted">Based on patient reviews</span>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-10">
            <div>
              <div className="flex justify-center">
                <StarRating rating={5} size="sm" />
              </div>
              <span className="mt-2 block text-center text-xs font-medium uppercase tracking-wider text-text-muted">
                Quality of Care
              </span>
            </div>
            <div>
              <div className="flex justify-center">
                <StarRating rating={5} size="sm" />
              </div>
              <span className="mt-2 block text-center text-xs font-medium uppercase tracking-wider text-text-muted">
                Staff Friendliness
              </span>
            </div>
            <div>
              <div className="flex justify-center">
                <StarRating rating={5} size="sm" />
              </div>
              <span className="mt-2 block text-center text-xs font-medium uppercase tracking-wider text-text-muted">
                Cleanliness
              </span>
            </div>
          </div>

          <div className="mt-10">
            <Link
              href={SITE_CONFIG.googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-6 py-2.5 text-sm font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
            >
              Leave us a review
              <span aria-hidden="true" className="ml-1.5 text-base leading-none">&rarr;</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
