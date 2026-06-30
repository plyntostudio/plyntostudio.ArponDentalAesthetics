import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { ServiceDetailBenefits } from '@/components/services/ServiceDetailBenefits';
import { ServiceDetailCost } from '@/components/services/ServiceDetailCost';
import { ServiceDetailCTA } from '@/components/services/ServiceDetailCTA';
import { ServiceDetailFAQ } from '@/components/services/ServiceDetailFAQ';
import { ServiceDetailHero } from '@/components/services/ServiceDetailHero';
import { ServiceDetailOverview } from '@/components/services/ServiceDetailOverview';
import { ServiceDetailProcedure } from '@/components/services/ServiceDetailProcedure';
import { ServiceDetailRecovery } from '@/components/services/ServiceDetailRecovery';
import { ServiceDetailWhenNeeded } from '@/components/services/ServiceDetailWhenNeeded';
import { getAllServiceSlugs, getServiceBySlug } from '@/lib/services-data';
import { SITE_CONFIG } from '@/lib/constants';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.description,
    openGraph: {
      title: `${service.title} | ${SITE_CONFIG.metadata.siteName}`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <ServiceDetailHero service={service} />
      <ServiceDetailOverview service={service} />
      <ServiceDetailWhenNeeded service={service} />
      <ServiceDetailBenefits service={service} />
      <ServiceDetailProcedure service={service} />
      <ServiceDetailRecovery service={service} />
      <ServiceDetailCost service={service} />
      <ServiceDetailFAQ service={service} />
      <ServiceDetailCTA service={service} />
    </>
  );
}
