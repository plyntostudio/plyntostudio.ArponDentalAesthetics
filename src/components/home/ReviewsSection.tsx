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

const AVATAR_COLORS = [
  'from-accent to-accent-dark',
  'from-accent-dark to-accent',
  'from-accent/80 to-accent-dark/80',
];

function Avatar({ name, index }: { name: string; index: number }) {
  const initial = name.charAt(0).toUpperCase();
  return (
    <div
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${AVATAR_COLORS[index % AVATAR_COLORS.length]} text-sm font-semibold text-white shadow-soft`}
      aria-hidden="true"
    >
      {initial}
    </div>
  );
}

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
                <div className="flex items-start gap-3">
                  <Avatar name={review.name} index={index} />
                  <div className="min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-text-main">
                      {review.name}
                      {review.badge && (
                        <span className="ml-1.5 inline-block rounded-[3px] bg-accent-bg px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-accent">
                          {review.badge}
                        </span>
                      )}
                    </span>
                    <StarRating rating={review.rating} />
                  </div>
                </div>

                <div className="relative mt-4 flex-1">
                  <span
                    className="absolute -left-1 -top-2 font-serif text-[3.5rem] leading-none text-accent/10 select-none"
                    aria-hidden="true"
                  >
                    &ldquo;
                  </span>
                  <blockquote className="relative pl-3 text-[0.95rem] leading-[1.85] text-text-muted">
                    {review.text}
                  </blockquote>
                </div>

                <div className="mt-5 flex items-center gap-2 border-t border-border/60 pt-4">
                  <span className="inline-flex items-center gap-1 rounded-[4px] bg-accent-bg/60 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                    Verified
                  </span>
                  <span className="text-[10px] text-text-muted">
                    {review.source === 'google' ? 'Google Review' : 'Clinic Review'}
                  </span>
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
