const EXPERTISE_AREAS = [
  'General &amp; family dentistry',
  'Cosmetic dentistry &amp; smile makeovers',
  'Root canal therapy',
  'Dental implants &amp; restorative dentistry',
  'Pediatric dentistry',
  'Orthodontic evaluations &amp; referrals',
  'Emergency dental care',
  'Sedation dentistry for anxious patients',
] as const;

export function AreasOfExpertise() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Areas of expertise">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Areas of Expertise
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Comprehensive training across all major disciplines of dentistry — so you receive the care you need without
            unnecessary referrals.
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {EXPERTISE_AREAS.map((area) => (
              <li
                key={area}
                className="flex items-start gap-3 rounded-[6px] border border-border bg-white p-4 text-sm leading-relaxed text-text-muted"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                <span dangerouslySetInnerHTML={{ __html: area }} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
