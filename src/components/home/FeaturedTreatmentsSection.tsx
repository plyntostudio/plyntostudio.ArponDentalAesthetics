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
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
      <div className={reversed ? 'md:order-2' : undefined}>
        <div
          className={`aspect-[4/3] w-full bg-gradient-to-br ${gradient} rounded-[6px]`}
          aria-hidden="true"
        />
      </div>
      <div className={reversed ? 'md:order-1' : undefined}>
        <h3 className="font-serif text-[clamp(1.25rem,1.75vw,1.75rem)] leading-snug text-text-main">
          {title}
        </h3>
        <p className="mt-3 text-base leading-relaxed text-text-muted">
          {description}
        </p>
        <Link
          href={href}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-dark"
        >
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
    <section className="bg-white py-16 lg:py-20" aria-label="Featured treatments">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Treatments We Offer
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Comprehensive dental care tailored to your needs â€” from routine check-ups to advanced restorative procedures.
          </p>
        </div>

        <div className="mt-14 space-y-14 lg:mt-16 lg:space-y-16">
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
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
          >
            View All Services
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
