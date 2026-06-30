import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailHero({ service }: Props) {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label={service.title}
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <span className="inline-block rounded-[6px] bg-accent-bg px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
            {service.category}
          </span>
          <h1 className="mt-4 font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            {service.title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            {service.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}
