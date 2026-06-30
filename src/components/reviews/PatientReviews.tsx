import type { Review } from '@/types';

const ALL_REVIEWS: Review[] = [
  {
    name: 'Bora Sunita',
    rating: 5,
    text: 'One of the best dental clinics in Assam. Dr. Darpon Bora is humble, approachable, and provides excellent treatment. Half of your worries disappear the moment you speak with him.',
    source: 'google',
  },
  {
    name: 'Dibyashree Bordoloi',
    rating: 5,
    text: 'One of the best dental clinics in Golaghat. The clinic is clean, hygienic, and equipped with modern facilities. I was very satisfied with the treatment and highly recommend Arpon Dental Aesthetics.',
    source: 'google',
  },
  {
    name: 'Gitartha Talukdar',
    rating: 5,
    text: 'A trusted dental clinic in Golaghat offering quality treatment that meets international standards. Highly recommended.',
    source: 'google',
  },
  {
    name: 'Deepa Bhattacharya',
    rating: 5,
    text: 'Choosing Arpon Dental Aesthetics was the right decision. The care and service exceeded my expectations, and I confidently recommend the clinic to anyone seeking dental treatment.',
    source: 'google',
  },
  {
    name: 'Shilpi Gogoi',
    rating: 5,
    text: 'A wonderful experience with a supportive and caring doctor. I received excellent treatment and genuinely appreciate the professionalism and results.',
    source: 'google',
  },
  {
    name: 'Pranjal Chetia',
    rating: 5,
    text: 'Dr. Darpon Bora and the entire team were caring and professional. My root canal treatment and dental implant were painless, and the results were excellent.',
    source: 'google',
    badge: 'Local Guide',
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
                  <span className="block text-sm font-medium text-text-main">
                    {review.name}
                    {review.badge && (
                      <span className="ml-1.5 inline-block rounded-[3px] bg-accent-bg px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                        {review.badge}
                      </span>
                    )}
                  </span>
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
