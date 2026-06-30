import type { Metadata } from 'next';

import { FeaturedStories } from '@/components/reviews/FeaturedStories';
import { GoogleReviews } from '@/components/reviews/GoogleReviews';
import { OverallRating } from '@/components/reviews/OverallRating';
import { PatientReviews } from '@/components/reviews/PatientReviews';
import { ReviewsCTA } from '@/components/reviews/ReviewsCTA';
import { ReviewsHero } from '@/components/reviews/ReviewsHero';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Patient Reviews',
  description: `Read real patient reviews and testimonials for ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. See why families trust us with their smiles.`,
  openGraph: {
    title: `Patient Reviews | ${meta.siteName}`,
    description: `Read real patient reviews and testimonials for ${SITE_CONFIG.name}.`,
  },
};

export default function ReviewsPage() {
  return (
    <>
      <ReviewsHero />
      <OverallRating />
      <FeaturedStories />
      <PatientReviews />
      <GoogleReviews />
      <ReviewsCTA />
    </>
  );
}
