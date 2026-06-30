import type { Metadata } from 'next';

import { AppointmentCTA } from '@/components/dentist/AppointmentCTA';
import { AreasOfExpertise } from '@/components/dentist/AreasOfExpertise';
import { ContinuingEducation } from '@/components/dentist/ContinuingEducation';
import { DentistHero } from '@/components/dentist/DentistHero';
import { DentistTestimonials } from '@/components/dentist/DentistTestimonials';
import { DoctorProfile } from '@/components/dentist/DoctorProfile';
import { Experience } from '@/components/dentist/Experience';
import { PersonalPhilosophy } from '@/components/dentist/PersonalPhilosophy';
import { ProfessionalMemberships } from '@/components/dentist/ProfessionalMemberships';
import { Qualifications } from '@/components/dentist/Qualifications';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Meet Your Dentist',
  description: `Meet the dentist at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. Qualified, compassionate, and dedicated to your smile.`,
  openGraph: {
    title: `Meet Your Dentist | ${meta.siteName}`,
    description: `Meet the dentist at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. Qualified, compassionate, and dedicated to your smile.`,
  },
};

export default function DentistPage() {
  return (
    <>
      <DentistHero />
      <DoctorProfile />
      <Qualifications />
      <Experience />
      <AreasOfExpertise />
      <ProfessionalMemberships />
      <ContinuingEducation />
      <PersonalPhilosophy />
      <DentistTestimonials />
      <AppointmentCTA />
    </>
  );
}
