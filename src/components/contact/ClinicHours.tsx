import { SITE_CONFIG } from '@/lib/constants';

export function ClinicHours() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Clinic hours">
      <div className="container-main">
        <div className="mx-auto max-w-xl">
          <div className="text-center">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Clinic Hours
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-text-muted">
              We are open six days a week to serve you and your family.
            </p>
          </div>

          <div className="mt-8 divide-y divide-border rounded-[6px] border border-border bg-highlight">
            {SITE_CONFIG.hours.map((slot) => (
              <div key={slot.label} className="flex items-center justify-between px-6 py-4">
                <span className="text-sm font-medium text-text-main">{slot.label}</span>
                <span className="text-sm text-text-muted">{slot.value}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-text-muted">
              Emergency appointments available outside regular hours. Call us for assistance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
