const CATEGORIES = [
  {
    title: 'General Dentistry',
    description: 'Routine care, cleanings, fillings, and preventive treatments.',
    count: 4,
  },
  {
    title: 'Cosmetic Procedures',
    description: 'Whitening, veneers, bonding, and complete smile makeovers.',
    count: 4,
  },
  {
    title: 'Restorative Care',
    description: 'Implants, crowns, bridges, root canals, and dentures.',
    count: 4,
  },
  {
    title: 'Specialty Treatments',
    description: 'Orthodontics, pediatric care, and oral surgery.',
    count: 4,
  },
];

export function TreatmentGallery() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Treatment gallery">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Browse by Treatment
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Explore results organised by the type of care you are looking for.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div key={category.title} className="rounded-[6px] border border-border bg-white p-6 md:p-8">
              <h3 className="font-serif text-xl leading-snug text-text-main">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{category.description}</p>
              <div className="mt-5 grid grid-cols-2 gap-2">
                {Array.from({ length: category.count }, (_, i) => (
                  <div
                    key={i}
                    className="aspect-square w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
                    aria-hidden="true"
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
