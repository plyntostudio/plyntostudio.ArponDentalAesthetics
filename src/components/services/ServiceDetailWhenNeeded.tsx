import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailWhenNeeded({ service }: Props) {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="When it is needed">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            When Is It Needed?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            You may need {service.shortTitle.toLowerCase()} if you are experiencing any of the following:
          </p>
          <ul className="mt-6 space-y-3">
            {service.whenNeeded.map((item, index) => (
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
