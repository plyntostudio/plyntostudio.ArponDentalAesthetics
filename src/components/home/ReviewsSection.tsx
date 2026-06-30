import Link from 'next/link';

import type { Review } from '@/types';

const PLACEHOLDER_REVIEWS: Review[] = [
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'General Dentistry',
    source: 'google',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'Cosmetic Dentistry',
    source: 'clinic',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'Root Canal Treatment',
    source: 'google',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'text-accent' : 'text-border'} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Patient reviews">
      <div className="container-main">
        <div className="section-intro">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-copy">Real feedback from the people we care for.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="panel-card flex h-full flex-col p-6 transition-transform duration-200 hover:-translate-y-1"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-[0.95rem] leading-[1.9] text-text-muted">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-6 border-t border-border/80 pt-4">
                <span className="block text-sm font-medium text-text-main">{review.name}</span>
                {review.treatmentType && (
                  <span className="mt-0.5 block text-xs text-text-muted">{review.treatmentType}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/reviews" className="button-secondary">
            Read All Reviews
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
