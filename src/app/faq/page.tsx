import type { Metadata } from 'next';

import { AppointmentQuestions } from '@/components/faq/AppointmentQuestions';
import { FAQCTA } from '@/components/faq/FAQCTA';
import { FAQHero } from '@/components/faq/FAQHero';
import { FAQIntro } from '@/components/faq/FAQIntro';
import { GeneralQuestions } from '@/components/faq/GeneralQuestions';
import { PaymentQuestions } from '@/components/faq/PaymentQuestions';
import { TreatmentQuestions } from '@/components/faq/TreatmentQuestions';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: `Find answers to common questions about dental care at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. Appointments, treatments, payment options, and more.`,
  openGraph: {
    title: `Frequently Asked Questions | ${meta.siteName}`,
    description: `Find answers to common questions about dental care at ${SITE_CONFIG.name}.`,
  },
};

export default function FAQPage() {
  return (
    <>
      <FAQHero />
      <FAQIntro />
      <GeneralQuestions />
      <TreatmentQuestions />
      <PaymentQuestions />
      <AppointmentQuestions />
      <FAQCTA />
    </>
  );
}
