import { SITE_CONFIG } from '@/lib/constants';

export function FAQHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="Frequently asked questions"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            Frequently Asked Questions
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            Everything you need to know about visiting {SITE_CONFIG.name}. If you cannot find your answer here,
            we are just a phone call away.
          </p>
        </div>
      </div>
    </section>
  );
}
