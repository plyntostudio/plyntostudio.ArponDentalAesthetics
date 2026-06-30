import type { NavItem } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Contact', href: '/contact' },
];

export const SERVICE_ITEMS: NavItem[] = [
  { label: 'General Dentistry', href: '/services/general-dentistry-golaghat' },
  { label: 'Root Canal Treatment', href: '/services/root-canal-treatment-golaghat' },
  { label: 'Dental Implants', href: '/services/dental-implants-golaghat' },
  { label: 'Teeth Whitening', href: '/services/teeth-whitening-golaghat' },
  { label: 'Braces & Orthodontics', href: '/services/braces-orthodontics-golaghat' },
  { label: 'Pediatric Dentistry', href: '/services/pediatric-dentistry-golaghat' },
  { label: 'Emergency Dental Care', href: '/services/emergency-dental-care-golaghat' },
  { label: 'Dental Cleaning', href: '/services/dental-cleaning-golaghat' },
  { label: 'Dental Fillings', href: '/services/dental-fillings-golaghat' },
  { label: 'Crowns & Bridges', href: '/services/crowns-bridges-golaghat' },
  { label: 'Dentures', href: '/services/dentures-golaghat' },
  { label: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry-golaghat' },
  { label: 'Smile Makeover', href: '/services/smile-makeover-golaghat' },
  { label: 'Wisdom Tooth Removal', href: '/services/wisdom-tooth-removal-golaghat' },
];

export const SOCIAL_LINKS: { label: string; href: string; platform: string }[] = [
  { label: 'WhatsApp', href: 'https://wa.me/91XXXXXXXXXX', platform: 'whatsapp' },
  { label: 'Facebook', href: '#', platform: 'facebook' },
  { label: 'Instagram', href: '#', platform: 'instagram' },
];

export const SITE_CONFIG = {
  name: 'Arpon Dental Aesthetics',
  tagline: 'Gentle, expert dental care for the whole family',
  location: 'Golaghat, Assam',

  address: {
    street: 'Requires Client Confirmation',
    city: 'Golaghat',
    state: 'Assam',
    pin: '785621',
    full: 'Golaghat, Assam',
  },

  phone: '+91XXXXXXXXXX',
  whatsapp: '+91XXXXXXXXXX',
  email: 'Requires Client Confirmation',

  hours: [
    { label: 'Monday – Friday', value: '10:00 AM – 7:00 PM' },
    { label: 'Saturday', value: '10:00 AM – 4:00 PM' },
    { label: 'Sunday', value: 'Closed' },
  ],

  googleMapsUrl: 'Requires Client Confirmation',
  googleMapsEmbedUrl: 'Requires Client Confirmation',
  googleReviewsUrl: 'Requires Client Confirmation',

  social: {
    whatsapp: 'Requires Client Confirmation',
    facebook: 'Requires Client Confirmation',
    instagram: 'Requires Client Confirmation',
  },

  schema: {
    '@type': 'Dentist',
    '@id': 'https://arpondental.com/#identity',
    url: 'https://arpondental.com',
    name: 'Arpon Dental Aesthetics',
    description: 'Premium dental care in Golaghat, Assam. General, cosmetic, and family dentistry.',
    image: 'https://arpondental.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Golaghat',
      addressRegion: 'Assam',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 'Requires Client Confirmation',
      longitude: 'Requires Client Confirmation',
    },
    priceRange: 'INR',
    telephone: '+91XXXXXXXXXX',
    openingHours: ['Mo-Fr 10:00-19:00', 'Sa 10:00-16:00'],
  },

  metadata: {
    titleTemplate: '%s | Arpon Dental Aesthetics',
    defaultTitle: 'Dentist in Golaghat | Arpon Dental Aesthetics',
    defaultDescription:
      'Arpon Dental Aesthetics offers gentle, expert dental care for the whole family in Golaghat, Assam. Book your appointment today.',
    siteName: 'Arpon Dental Aesthetics',
    locale: 'en_IN',
    url: 'https://arpondental.com',
  },
} as const;
