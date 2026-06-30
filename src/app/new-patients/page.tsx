import type { Metadata } from 'next';

import { DocumentsToBring } from '@/components/new-patients/DocumentsToBring';
import { FirstVisitSteps } from '@/components/new-patients/FirstVisitSteps';
import { NewPatientsCTA } from '@/components/new-patients/NewPatientsCTA';
import { NewPatientsHero } from '@/components/new-patients/NewPatientsHero';
import { PaymentInsurance } from '@/components/new-patients/PaymentInsurance';
import { PracticePolicies } from '@/components/new-patients/PracticePolicies';
import { WelcomeMessage } from '@/components/new-patients/WelcomeMessage';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'New Patients',
  description: `Welcome to ${SITE_CONFIG.name}. Learn what to expect on your first visit, what to bring, payment options, and clinic policies. Book your appointment today.`,
  openGraph: {
    title: `New Patients | ${meta.siteName}`,
    description: `Welcome to ${SITE_CONFIG.name}. Everything you need to know before your first visit.`,
  },
};

export default function NewPatientsPage() {
  return (
    <>
      <NewPatientsHero />
      <WelcomeMessage />
      <FirstVisitSteps />
      <DocumentsToBring />
      <PaymentInsurance />
      <PracticePolicies />
      <NewPatientsCTA />
    </>
  );
}
