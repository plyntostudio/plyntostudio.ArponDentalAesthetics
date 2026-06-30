import { SITE_CONFIG } from '@/lib/constants';

export function NewPatientsHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="New patients"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            Welcome to {SITE_CONFIG.name}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            We are delighted you are considering us for your dental care. Here is everything you need to know
            before your first visit.
          </p>
        </div>
      </div>
    </section>
  );
}
