import { SITE_CONFIG } from '@/lib/constants';

export function GalleryHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="Gallery"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            Our Smile Gallery
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            Real results from real patients. Browse smile transformations, clinic photos, and the technology
            that makes it all possible at {SITE_CONFIG.name}.
          </p>
        </div>
      </div>
    </section>
  );
}
