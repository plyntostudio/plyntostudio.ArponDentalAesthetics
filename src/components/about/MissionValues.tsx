const VALUES = [
  {
    title: 'Compassion',
    description:
      'We treat every patient with patience, empathy, and respect. Fear and anxiety are met with understanding, not judgement.',
  },
  {
    title: 'Excellence',
    description:
      'We invest in continuing education, modern technology, and evidence-based techniques to deliver the highest standard of care.',
  },
  {
    title: 'Transparency',
    description:
      'Clear communication, honest treatment recommendations, and no hidden fees. You deserve to make informed decisions about your health.',
  },
  {
    title: 'Community',
    description:
      'As a Golaghat-based practice, we are proud to serve our neighbours. Building a healthier community starts with a single smile.',
  },
] as const;

export function MissionValues() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Mission and values">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Our Mission &amp; Values
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            To provide gentle, expert dental care that improves lives — one patient, one smile at a time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {VALUES.map((value) => (
            <div key={value.title}>
              <div className="mb-4 h-[3px] w-10 bg-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl leading-snug text-text-main">{value.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
