import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailRecovery({ service }: Props) {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Recovery and aftercare">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Recovery and Aftercare
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Most patients recover quickly. Follow these guidelines for the best outcome:
          </p>
          <ul className="mt-8 space-y-4">
            {service.recovery.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span
                  className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-base leading-relaxed text-text-main">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
