import type { Review } from '@/types';

const ALL_REVIEWS: Review[] = [
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
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'Pediatric Dentistry',
    source: 'google',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'Dental Implants',
    source: 'clinic',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Patient testimonial coming soon. Real reviews from Google and our clinic will appear here once content is confirmed.',
    treatmentType: 'Teeth Whitening',
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
          ★
        </span>
      ))}
    </div>
  );
}

export function PatientReviews() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="All patient reviews">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            All Reviews
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Every review matters to us. Here is what our patients are saying.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {ALL_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[6px] border border-border bg-white p-6"
            >
              <StarRating rating={review.rating} />
              <span className="mt-2 inline-block rounded-[4px] bg-accent-bg px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                {review.source === 'google' ? 'Google' : 'Clinic'}
              </span>
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-text-muted">
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
      </div>
    </section>
  );
}
