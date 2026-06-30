const QUALIFICATIONS = [
  'Bachelor of Dental Surgery (BDS)',
  'Advanced certification in cosmetic dentistry',
  'Certified in laser dentistry',
  'Member of the Indian Dental Association',
  'Trained in sedation dentistry for anxious patients',
  'Continuing education in implantology and restorative dentistry',
] as const;

export function Qualifications() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Qualifications">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Qualifications &amp; Credentials
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Continuous learning and rigorous training ensure that every treatment you receive meets the highest
            professional standards.
          </p>
          <ul className="mt-8 space-y-4">
            {QUALIFICATIONS.map((qual) => (
              <li key={qual} className="flex items-start gap-3 text-sm leading-relaxed text-text-muted">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                {qual}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
