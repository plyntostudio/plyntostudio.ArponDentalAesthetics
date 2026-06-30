const TRANSFORMATIONS = [
  {
    title: 'Full Mouth Rehabilitation',
    description:
      'Comprehensive restoration of function and aesthetics for a patient with advanced wear and missing teeth.',
  },
  {
    title: 'Cosmetic Smile Makeover',
    description:
      'A complete transformation using porcelain veneers and professional whitening for a naturally radiant smile.',
  },
  {
    title: 'Dental Implant Restoration',
    description:
      'Single-tooth implant replacing a missing molar. The result is indistinguishable from the adjacent natural teeth.',
  },
];

export function SmileTransformations() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Smile transformations">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Before and After</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Smile Transformations
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Every smile tells a story. Here are some of the transformations that mean the most to us.
          </p>
        </div>

        <div className="mt-12 space-y-16">
          {TRANSFORMATIONS.map((item, index) => (
            <div
              key={item.title}
              className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-10"
            >
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
                    aria-hidden="true"
                  />
                  <div
                    className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-accent-light"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-2 flex justify-center gap-6 text-xs font-medium text-text-muted">
                  <span>Before</span>
                  <span>After</span>
                </div>
              </div>

              <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                <div className="h-[2px] w-8 bg-accent" aria-hidden="true" />
                <h3 className="mt-3 font-serif text-xl leading-snug text-text-main">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-text-muted">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
