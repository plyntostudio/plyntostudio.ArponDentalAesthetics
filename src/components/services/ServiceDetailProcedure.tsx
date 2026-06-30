import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailProcedure({ service }: Props) {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Procedure steps">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            The Procedure
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Here is what you can expect during your {service.shortTitle.toLowerCase()} treatment.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-2xl space-y-6">
          {service.procedure.map((step, index) => (
            <div key={index} className="rounded-[6px] border border-border bg-white p-6 md:p-8">
              <div className="mb-3 flex items-center gap-3">
                <span
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-accent text-xs font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>
                <h3 className="font-serif text-lg leading-snug text-text-main">{step.heading}</h3>
              </div>
              <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
