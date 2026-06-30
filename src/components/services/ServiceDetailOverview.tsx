import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailOverview({ service }: Props) {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="What it is">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What Is {service.shortTitle}?
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
            {service.overview.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
