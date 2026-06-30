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
        <span
          key={i}
          className={i < rating ? 'text-accent' : 'text-border'}
          aria-hidden="true"
        >
          â˜…
        </span>
      ))}
    </div>
  );
}

export function ReviewsSection() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Patient reviews">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What Our Patients Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Real feedback from the people we care for.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[6px] border border-border bg-white p-6"
            >
              <StarRating rating={review.rating} />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-border pt-4">
                <span className="block text-sm font-medium text-text-main">{review.name}</span>
                {review.treatmentType && (
                  <span className="mt-0.5 block text-xs text-text-muted">
                    {review.treatmentType}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
          >
            Read All Reviews
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
