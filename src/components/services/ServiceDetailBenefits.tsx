import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailBenefits({ service }: Props) {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Benefits">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Benefits
          </h2>
          <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
            {service.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 rounded-[6px] border border-border bg-highlight p-4">
                <span
                  className="mt-1 block h-2 w-2 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-text-main">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
