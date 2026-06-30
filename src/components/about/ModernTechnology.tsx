const TECHNOLOGIES = [
  {
    title: 'Digital Radiography',
    description: 'Up to 80% less radiation than traditional film X-rays. Images are available instantly for faster diagnosis.',
  },
  {
    title: 'Intraoral Cameras',
    description: 'High-resolution cameras let you see exactly what we see — making it easier to understand your treatment needs.',
  },
  {
    title: '3D Cone Beam CT',
    description: 'Advanced 3D imaging for precise treatment planning — from implant placement to root canal therapy.',
  },
  {
    title: 'Laser Dentistry',
    description: 'Minimally invasive laser technology for faster healing, less discomfort, and reduced need for anaesthesia.',
  },
] as const;

export function ModernTechnology() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Modern technology">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-accent-light"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Modern Technology
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              We invest in advanced technology to make your visits more comfortable, more precise, and more efficient.
            </p>
            <ul className="mt-8 space-y-6">
              {TECHNOLOGIES.map((tech) => (
                <li key={tech.title}>
                  <div className="mb-1.5 h-[2px] w-8 bg-accent" aria-hidden="true" />
                  <h3 className="font-serif text-lg leading-snug text-text-main">{tech.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-text-muted">{tech.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
