export interface NavItem {
  label: string;
  href: string;
}

export interface TrustStat {
  value: string;
  label: string;
  prefix?: string;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
  treatmentType?: string;
  date?: string;
  source?: 'google' | 'clinic';
}

export interface ServiceSummary {
  title: string;
  slug: string;
  shortDescription: string;
  image?: SanityImage;
}

export interface SanityImage {
  asset: {
    _ref: string;
    _type: 'reference';
  };
  alt?: string;
  hotspot?: { x: number; y: number };
  crop?: { top: number; bottom: number; left: number; right: number };
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ProcedureStep {
  heading: string;
  description: string;
  image?: SanityImage;
}

export interface AccordionItemData {
  question: string;
  answer: React.ReactNode;
}
