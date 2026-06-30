import type { Review } from '@/types';

const PLACEHOLDER_REVIEWS: Review[] = [
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'I was genuinely nervous about my root canal, but Dr. [Name] made the entire experience comfortable and pain-free. Highly recommend.',
    treatmentType: 'Root Canal Treatment',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'The most gentle dentist I have ever visited. My whole family has been coming here for years and we always feel well cared for.',
    treatmentType: 'General Dentistry',
  },
  {
    name: 'Placeholder Name',
    rating: 5,
    text: 'Life-changing smile makeover. Dr. [Name] listened to exactly what I wanted and delivered beyond my expectations.',
    treatmentType: 'Cosmetic Dentistry',
  },
] as const;

export function DentistTestimonials() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Patient testimonials">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What Patients Say
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            The kindest feedback comes from the people we treat.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {PLACEHOLDER_REVIEWS.map((review, index) => (
            <div
              key={index}
              className="flex flex-col rounded-[6px] border border-border bg-white p-6"
            >
              <div className="flex items-center gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < review.rating ? 'text-accent' : 'text-border'} aria-hidden="true">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-text-muted">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-5 border-t border-border pt-4">
                <span className="block text-sm font-medium text-text-main">{review.name}</span>
                {review.treatmentType && (
                  <span className="mt-0.5 block text-xs text-text-muted">{review.treatmentType}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
