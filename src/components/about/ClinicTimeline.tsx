const MILESTONES = [
  {
    year: '2020',
    title: 'Clinic Founded',
    description:
      'The clinic opened its doors in Golaghat with a vision to provide gentle, expert dental care for the whole family.',
  },
  {
    year: '2021',
    title: 'Services Expanded',
    description:
      'Added cosmetic dentistry and orthodontic services to meet growing patient demand for comprehensive care under one roof.',
  },
  {
    year: '2023',
    title: 'Digital Transformation',
    description:
      'Invested in digital radiography, intraoral scanning, and 3D imaging technology for more precise diagnosis and treatment.',
  },
  {
    year: '2024',
    title: 'Practice Growth',
    description:
      'Expanded our team and renovated the clinic to create an even more comfortable, welcoming environment for patients.',
  },
  {
    year: '2025',
    title: 'Community Partnership',
    description:
      'Launched community outreach programmes focused on dental education and preventive care for local schools and families.',
  },
] as const;

export function ClinicTimeline() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Clinic timeline">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Our Journey
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            A look back at the milestones that shaped our practice.
          </p>
        </div>

        <div className="relative mx-auto mt-12 max-w-xl">
          <div className="absolute left-[19px] top-0 h-full w-px bg-border" aria-hidden="true" />
          <ul className="space-y-10">
            {MILESTONES.map((milestone, index) => (
              <li key={index} className="relative pl-12">
                <div
                  className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-accent bg-white"
                  aria-hidden="true"
                />
                <span className="block text-xs font-semibold uppercase tracking-widest text-accent">
                  {milestone.year}
                </span>
                <h3 className="mt-1 font-serif text-lg leading-snug text-text-main">{milestone.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-text-muted">{milestone.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
