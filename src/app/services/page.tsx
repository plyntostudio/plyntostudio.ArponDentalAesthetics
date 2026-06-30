import type { Metadata } from 'next';

import { ServiceCategories } from '@/components/services/ServiceCategories';
import { ServicesCTA } from '@/components/services/ServicesCTA';
import { ServicesFAQ } from '@/components/services/ServicesFAQ';
import { ServicesFeaturedTreatments } from '@/components/services/ServicesFeaturedTreatments';
import { ServicesHero } from '@/components/services/ServicesHero';
import { ServicesIntroduction } from '@/components/services/ServicesIntroduction';
import { TreatmentPhilosophy } from '@/components/services/TreatmentPhilosophy';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Our Services',
  description: `Comprehensive dental services at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. General, cosmetic, restorative, and emergency dentistry.`,
  openGraph: {
    title: `Our Services | ${meta.siteName}`,
    description: `Comprehensive dental services at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. General, cosmetic, restorative, and emergency dentistry.`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesIntroduction />
      <ServiceCategories />
      <ServicesFeaturedTreatments />
      <TreatmentPhilosophy />
      <ServicesFAQ />
      <ServicesCTA />
    </>
  );
}
