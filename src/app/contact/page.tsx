import type { Metadata } from 'next';

import { ClinicHours } from '@/components/contact/ClinicHours';
import { ContactCTA } from '@/components/contact/ContactCTA';
import { ContactForm } from '@/components/contact/ContactForm';
import { ContactHero } from '@/components/contact/ContactHero';
import { ContactInformation } from '@/components/contact/ContactInformation';
import { EmergencyContact } from '@/components/contact/EmergencyContact';
import { LocationMap } from '@/components/contact/LocationMap';
import { SocialConnect } from '@/components/contact/SocialConnect';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Contact Us',
  description: `Get in touch with ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. Call, WhatsApp, email, or visit our clinic. Same-day emergency appointments available.`,
  openGraph: {
    title: `Contact Us | ${meta.siteName}`,
    description: `Get in touch with ${SITE_CONFIG.name}. Call, WhatsApp, or visit us in ${SITE_CONFIG.location}.`,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <LocationMap />
      <ContactInformation />
      <ClinicHours />
      <ContactForm />
      <EmergencyContact />
      <SocialConnect />
      <ContactCTA />
    </>
  );
}
