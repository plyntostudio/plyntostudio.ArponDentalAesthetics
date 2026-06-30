import type { Metadata } from 'next';

import { BookingCTA } from '@/components/booking/BookingCTA';
import { BookingHero } from '@/components/booking/BookingHero';
import { BookingIntro } from '@/components/booking/BookingIntro';
import { OnlineBooking } from '@/components/booking/OnlineBooking';
import { PhoneBooking } from '@/components/booking/PhoneBooking';
import { WhatsAppBooking } from '@/components/booking/WhatsAppBooking';
import { WhatHappensNext } from '@/components/booking/WhatHappensNext';
import { SITE_CONFIG } from '@/lib/constants';

const { metadata: meta } = SITE_CONFIG;

export const metadata: Metadata = {
  title: 'Book an Appointment',
  description: `Book your dental appointment at ${SITE_CONFIG.name} in ${SITE_CONFIG.location}. Online booking, phone, or WhatsApp — choose what is convenient for you.`,
  openGraph: {
    title: `Book an Appointment | ${meta.siteName}`,
    description: `Book your dental appointment at ${SITE_CONFIG.name}. Online, phone, or WhatsApp.`,
  },
};

export default function BookingPage() {
  return (
    <>
      <BookingHero />
      <BookingIntro />
      <OnlineBooking />
      <PhoneBooking />
      <WhatsAppBooking />
      <WhatHappensNext />
      <BookingCTA />
    </>
  );
}
