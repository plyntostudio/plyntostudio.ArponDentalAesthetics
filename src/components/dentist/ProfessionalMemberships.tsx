const MEMBERSHIPS = [
  'Indian Dental Association (IDA)',
  'Association of Cosmetic &amp; Aesthetic Dentistry (ACAD)',
  'International Congress of Oral Implantologists (ICOI)',
  'Indian Society of Oral Laser Applications (ISOLA)',
] as const;

export function ProfessionalMemberships() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Professional memberships">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Professional Memberships
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Active participation in professional organisations ensures our practice stays at the forefront of dental
            medicine.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {MEMBERSHIPS.map((membership) => (
              <div
                key={membership}
                className="rounded-[6px] border border-border bg-highlight p-5 text-sm leading-relaxed text-text-main"
              >
                <div className="mb-2 h-[2px] w-8 bg-accent" aria-hidden="true" />
                <span dangerouslySetInnerHTML={{ __html: membership }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
