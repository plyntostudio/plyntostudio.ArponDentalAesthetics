import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailCost({ service }: Props) {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Cost information">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Investment
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">{service.cost}</p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-[6px] border border-border bg-white px-5 py-3">
            <span className="text-sm text-text-muted">We accept all major insurance plans</span>
          </div>
        </div>
      </div>
    </section>
  );
}
