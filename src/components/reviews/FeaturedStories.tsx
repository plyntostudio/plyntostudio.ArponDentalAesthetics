const FEATURED: {
  name: string;
  rating: number;
  text: string;
  treatmentType: string;
  date: string;
  badge?: string;
}[] = [
  {
    name: 'Pranjal Chetia',
    rating: 5,
    text: 'Dr. Darpon Bora and the entire team were caring and professional. My root canal treatment and dental implant were painless, and the results were excellent.',
    treatmentType: 'Root Canal Treatment & Dental Implants',
    date: 'Verified Google Review',
    badge: 'Local Guide',
  },
  {
    name: 'Dibyashree Bordoloi',
    rating: 5,
    text: 'One of the best dental clinics in Golaghat. The clinic is clean, hygienic, and equipped with modern facilities. I was very satisfied with the treatment and highly recommend Arpon Dental Aesthetics.',
    treatmentType: 'General Dentistry',
    date: 'Verified Google Review',
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
                  <span className="block text-sm font-semibold text-text-main">
                    {review.name}
                    {review.badge && (
                      <span className="ml-1.5 inline-block rounded-[3px] bg-accent-bg px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                        {review.badge}
                      </span>
                    )}
                  </span>
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
