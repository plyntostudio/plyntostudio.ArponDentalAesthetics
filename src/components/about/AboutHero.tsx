import { SITE_CONFIG } from '@/lib/constants';

export function AboutHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="About us"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            About {SITE_CONFIG.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            A modern dental practice rooted in trust, compassion, and clinical excellence — serving families in Golaghat,
            Assam.
          </p>
        </div>
      </div>
    </section>
  );
}
