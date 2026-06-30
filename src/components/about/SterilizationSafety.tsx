const SAFETY_POINTS = [
  'Hospital-grade sterilization equipment for all instruments',
  'Single-use disposable materials where applicable',
  'Strict adherence to infection control protocols',
  'Regular staff training on latest safety standards',
  'Thorough cleaning and disinfection of all treatment areas between patients',
] as const;

export function SterilizationSafety() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Sterilization and safety">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              aria-hidden="true"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Sterilization &amp; Safety
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Your health and safety are our highest priority. Every instrument, surface, and treatment room follows
              rigorous sterilization and infection control standards.
            </p>
            <ul className="mt-6 space-y-3">
              {SAFETY_POINTS.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm leading-relaxed text-text-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
