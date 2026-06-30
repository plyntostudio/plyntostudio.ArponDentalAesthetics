import type { Review } from '@/types';

const TESTIMONIALS: Review[] = [
  {
    name: 'Bora Sunita',
    rating: 5,
    text: 'One of the best dental clinics in Assam. Dr. Darpon Bora is humble, approachable, and provides excellent treatment. Half of your worries disappear the moment you speak with him.',
  },
  {
    name: 'Pranjal Chetia',
    rating: 5,
    text: 'Dr. Darpon Bora and the entire team were caring and professional. My root canal treatment and dental implant were painless, and the results were excellent.',
    badge: 'Local Guide',
  },
  {
    name: 'Shilpi Gogoi',
    rating: 5,
    text: 'A wonderful experience with a supportive and caring doctor. I received excellent treatment and genuinely appreciate the professionalism and results.',
  },
];

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
          {TESTIMONIALS.map((review, index) => (
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
                <span className="block text-sm font-medium text-text-main">
                  {review.name}
                  {review.badge && (
                    <span className="ml-1.5 inline-block rounded-[3px] bg-accent-bg px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                      {review.badge}
                    </span>
                  )}
                </span>
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
