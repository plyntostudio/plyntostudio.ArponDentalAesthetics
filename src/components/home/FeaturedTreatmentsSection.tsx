import Link from 'next/link';

import { SERVICE_ITEMS } from '@/lib/constants';

const FEATURED_DESCRIPTIONS: Record<string, string> = {
  'root-canal-treatment-golaghat':
    'Relieve pain and save your natural tooth with modern, gentle root canal therapy. Our approach prioritises your comfort throughout.',
  'teeth-whitening-golaghat':
    'Brighten your smile with professional whitening treatments. Visible, dramatic results in a single appointment.',
  'dental-implants-golaghat':
    'Restore missing teeth with permanent, natural-looking dental implants. Eat, speak, and smile with complete confidence.',
  'pediatric-dentistry-golaghat':
    'Gentle, caring dental treatment designed especially for children. Building positive habits that last a lifetime.',
  'braces-orthodontics-golaghat':
    'Straighten your smile with modern orthodontic solutions. Discreet options available for adults and teens.',
  'emergency-dental-care-golaghat':
    'Same-day emergency appointments when you need care the most. Prompt relief for dental pain and injuries.',
};

const GRADIENTS = [
  'from-highlight to-accent-bg',
  'from-accent-bg to-highlight',
  'from-highlight to-accent-bg',
];

const SLUG_PATTERN = /\/services\/(.+)$/;

function extractSlug(href: string): string {
  const match = SLUG_PATTERN.exec(href);
  return match ? match[1] : '';
}

interface TreatmentRowProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  reversed: boolean;
}

function TreatmentRow({ title, description, href, gradient, reversed }: TreatmentRowProps) {
  return (
    <div className="panel-surface grid grid-cols-1 items-center gap-8 p-5 md:grid-cols-2 md:gap-12 md:p-7 lg:gap-16 lg:p-8">
      <div className={reversed ? 'md:order-2' : undefined}>
        <div className={`image-surface aspect-[4/3] w-full bg-gradient-to-br ${gradient}`} aria-hidden="true" />
      </div>
      <div className={reversed ? 'md:order-1' : undefined}>
        <h3 className="font-serif text-[clamp(1.35rem,1.8vw,1.85rem)] leading-[1.08] tracking-[-0.025em] text-text-main">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-[1.85] text-text-muted">
          {description}
        </p>
        <Link href={href} className="text-link mt-5">
          Learn more
          <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export function FeaturedTreatmentsSection() {
  const featured = SERVICE_ITEMS.slice(0, 3);

  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Featured treatments">
      <div className="container-main">
        <div className="section-intro">
          <h2 className="section-title">Treatments We Offer</h2>
          <p className="section-copy">
            Comprehensive dental care tailored to your needs, from routine check-ups to advanced restorative procedures.
          </p>
        </div>

        <div className="mt-14 space-y-9 lg:mt-16 lg:space-y-10">
          {featured.map((item, index) => (
            <TreatmentRow
              key={item.href}
              title={item.label}
              description={FEATURED_DESCRIPTIONS[extractSlug(item.href)] ?? ''}
              href={item.href}
              gradient={GRADIENTS[index]}
              reversed={index % 2 !== 0}
            />
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link href="/services" className="button-secondary">
            View All Services
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
