import type { Metadata } from 'next';

import { AboutCTA } from '@/components/about/AboutCTA';
import { AboutHero } from '@/components/about/AboutHero';
import { ClinicStory } from '@/components/about/ClinicStory';
import { ClinicTimeline } from '@/components/about/ClinicTimeline';
import { MeetTeamPreview } from '@/components/about/MeetTeamPreview';
import { MissionValues } from '@/components/about/MissionValues';
import { ModernTechnology } from '@/components/about/ModernTechnology';
import { PatientCenteredPhilosophy } from '@/components/about/PatientCenteredPhilosophy';
import { SterilizationSafety } from '@/components/about/SterilizationSafety';
import { WhyPatientsTrustUs } from '@/components/about/WhyPatientsTrustUs';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'About',
  description: `Learn about ${SITE_CONFIG.name} — our story, values, and commitment to gentle, expert dental care in ${SITE_CONFIG.location}.`,
  openGraph: {
    title: `About | ${meta.siteName}`,
    description: `Learn about ${SITE_CONFIG.name} — our story, values, and commitment to gentle, expert dental care in ${SITE_CONFIG.location}.`,
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <ClinicStory />
      <MissionValues />
      <PatientCenteredPhilosophy />
      <ModernTechnology />
      <SterilizationSafety />
      <WhyPatientsTrustUs />
      <ClinicTimeline />
      <MeetTeamPreview />
      <AboutCTA />
    </>
  );
}
