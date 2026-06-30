import type { Metadata } from 'next';

import { AdvancedTechnology } from '@/components/gallery/AdvancedTechnology';
import { GalleryCTA } from '@/components/gallery/GalleryCTA';
import { GalleryHero } from '@/components/gallery/GalleryHero';
import { OurClinic } from '@/components/gallery/OurClinic';
import { PatientSmiles } from '@/components/gallery/PatientSmiles';
import { SmileTransformations } from '@/components/gallery/SmileTransformations';
import { TreatmentGallery } from '@/components/gallery/TreatmentGallery';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Smile Gallery',
  description: `Browse real patient smile transformations, clinic photos, and advanced dental technology at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}.`,
  openGraph: {
    title: `Smile Gallery | ${meta.siteName}`,
    description: `Browse real patient smile transformations, clinic photos, and advanced dental technology at ${SITE_CONFIG.name}.`,
  },
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <SmileTransformations />
      <OurClinic />
      <AdvancedTechnology />
      <TreatmentGallery />
      <PatientSmiles />
      <GalleryCTA />
    </>
  );
}
