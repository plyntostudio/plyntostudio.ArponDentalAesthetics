const TECH_ITEMS = [
  {
    title: 'Digital X-Rays',
    description:
      'High-resolution digital imaging with minimal radiation exposure for accurate diagnosis.',
  },
  {
    title: 'Intraoral Cameras',
    description:
      'Magnified, real-time views of your teeth and gums for precise treatment planning.',
  },
  {
    title: '3D Cone Beam CT',
    description:
      'Three-dimensional imaging for implant planning, root canal navigation, and surgical precision.',
  },
  {
    title: 'Laser Dentistry',
    description:
      'Minimally invasive laser technology for gum treatments and certain procedures with faster healing.',
  },
];

export function AdvancedTechnology() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Advanced technology">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Technology</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Advanced Technology
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We invest in the best tools available so you receive safer, more precise, and more comfortable care.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {TECH_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className="group rounded-[6px] border border-border bg-highlight p-6 transition-all duration-200 hover:border-accent-bg hover:bg-white md:p-8"
            >
              <div className="flex items-start gap-5">
                <div
                  className="mt-1 aspect-square w-12 shrink-0 rounded-[6px] bg-gradient-to-br from-accent-bg to-accent-light"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-serif text-lg leading-snug text-text-main">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
