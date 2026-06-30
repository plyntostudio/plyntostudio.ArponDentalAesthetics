import Link from 'next/link';

import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const PLACEHOLDER_GRADIENTS = [
  'from-highlight to-accent-bg',
  'from-accent-bg to-accent-light',
  'from-accent-bg to-highlight',
  'from-accent-light to-accent-bg',
];

export function SmileGalleryPreview() {
  return (
    <section className="section-frame bg-highlight py-[4.5rem] lg:py-24" aria-label="Smile gallery preview">
      <div className="container-main">
        <ScrollReveal>
          <div className="section-intro">
            <h2 className="section-title">Smile Gallery</h2>
            <p className="section-copy">
              See the kind of results that bring our patients back and send their friends.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-12 grid grid-cols-2 gap-4 md:gap-6">
          {PLACEHOLDER_GRADIENTS.map((gradient, index) => (
            <StaggerItem key={index}>
              <div
                className={`image-surface aspect-square w-full bg-gradient-to-br ${gradient} transition-transform duration-500 hover:scale-[1.03] cursor-pointer`}
                aria-hidden="true"
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-10 text-center" delay={0.3}>
          <Link href="/gallery" className="button-secondary">
            View Full Gallery
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
