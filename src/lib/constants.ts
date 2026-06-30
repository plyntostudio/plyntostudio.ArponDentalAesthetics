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
  { label: 'WhatsApp', href: 'https://wa.me/917002059744', platform: 'whatsapp' },
  { label: 'Facebook', href: '#', platform: 'facebook' },
  { label: 'Instagram', href: 'https://instagram.com/arpondentalaesthetics', platform: 'instagram' },
];

export const DENTIST = {
  name: 'Dr. Darpon Bora',
  title: 'Dental Surgeon & Implantologist',
} as const;

export const SITE_CONFIG = {
  name: 'Arpon Dental Aesthetics',
  tagline: 'Gentle, expert dental care for the whole family',
  location: 'Golaghat, Assam',

  address: {
    street: 'GBM Nursing Home Road',
    building: 'GDSA Complex, Room No. 8(C)',
    landmark: 'Near Ratnagiri Travels',
    city: 'Golaghat',
    state: 'Assam',
    pin: '785621',
    country: 'India',
    full: 'GBM Nursing Home Road, GDSA Complex, Room No. 8(C), Near Ratnagiri Travels, Golaghat, Assam – 785621, India',
  },

  phone: '+91 70020 59744',
  whatsapp: '+917002059744',
  email: 'drdarponbora@gmail.com',

  hours: [
    { label: 'Monday – Saturday', value: '10:00 AM – 8:00 PM' },
  ],

  googleMapsUrl: 'https://maps.app.goo.gl/xSTcAj5AuDMQiy7w7',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.204671194185!2d93.96814081143415!3d26.51354117679091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37468f2026983b73%3A0xaac669d1424d3b25!2sArpon%20Dental%20Aesthetics%20-%20Best%20Dentist%20in%20Golaghat%20%7C%20Best%20Dental%20Clinic%20in%20Golaghat!5e0!3m2!1sen!2sin!4v1782857267874!5m2!1sen!2sin',
  googleReviewsUrl: 'https://maps.app.goo.gl/xSTcAj5AuDMQiy7w7',

  social: {
    whatsapp: '+917002059744',
    facebook: '#',
    instagram: 'arpondentalaesthetics',
  },

  schema: {
    '@type': 'Dentist',
    '@id': 'https://arpondental.com/#identity',
    url: 'https://arpondental.com',
    name: 'Arpon Dental Aesthetics',
    description: 'Gentle, expert dental care for the whole family in Golaghat, Assam. General, cosmetic, restorative, and family dentistry.',
    image: 'https://arpondental.com/og-image.jpg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'GBM Nursing Home Road, GDSA Complex, Room No. 8(C)',
      addressLocality: 'Golaghat',
      addressRegion: 'Assam',
      postalCode: '785621',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '26.5158',
      longitude: '93.9770',
    },
    priceRange: 'INR',
    telephone: '+917002059744',
    email: 'drdarponbora@gmail.com',
    openingHours: ['Mo-Sa 10:00-20:00'],
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
