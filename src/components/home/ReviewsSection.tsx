import Link from 'next/link';

import type { Review } from '@/types';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const REVIEWS: Review[] = [
  {
    name: 'Bora Sunita',
    rating: 5,
    text: 'One of the best dental clinics in Assam. Dr. Darpon Bora is humble, approachable, and provides excellent treatment. Half of your worries disappear the moment you speak with him.',
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
        <ScrollReveal>
          <div className="section-intro">
            <h2 className="section-title">What Our Patients Say</h2>
            <p className="section-copy">Real feedback from the people we care for.</p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
          {REVIEWS.map((review, index) => (
            <StaggerItem key={index}>
              <div className="card-hover panel-surface flex h-full flex-col p-6">
                <StarRating rating={review.rating} />
                <blockquote className="mt-4 flex-1 text-[0.95rem] leading-[1.9] text-text-muted">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="mt-6 border-t border-border/80 pt-4">
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
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-10 text-center" delay={0.3}>
          <Link href="/reviews" className="button-secondary">
            Read All Reviews
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
