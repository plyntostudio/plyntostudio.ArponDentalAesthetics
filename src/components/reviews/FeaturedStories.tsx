const FEATURED = [
  {
    name: 'Patient Name',
    rating: 5,
    text: 'Placeholder testimonial. Patient stories highlighting exceptional care experiences will appear here once content is confirmed with the clinic.',
    treatmentType: 'Smile Makeover',
    date: 'Coming soon',
  },
  {
    name: 'Patient Name',
    rating: 5,
    text: 'Placeholder testimonial. Patient stories highlighting exceptional care experiences will appear here once content is confirmed with the clinic.',
    treatmentType: 'Root Canal Treatment',
    date: 'Coming soon',
  },
] as const;

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

export function FeaturedStories() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Featured stories">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Featured Stories</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Patient Journeys That Inspire Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            These stories represent why we do what we do. Each one is a reminder of the trust our patients place in us.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          {FEATURED.map((review) => (
            <div
              key={review.name}
              className="relative rounded-[6px] border border-border bg-white p-8 md:p-10"
            >
              <div
                className="absolute left-0 top-0 h-1 w-full rounded-t-[6px] bg-accent"
                aria-hidden="true"
              />
              <StarRating rating={review.rating} />
              <blockquote className="mt-5 text-base leading-relaxed text-text-muted">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div
                  className="h-10 w-10 rounded-full bg-gradient-to-br from-highlight to-accent-bg"
                  aria-hidden="true"
                />
                <div>
                  <span className="block text-sm font-semibold text-text-main">{review.name}</span>
                  <span className="block text-xs text-text-muted">
                    {review.treatmentType} &middot; {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
