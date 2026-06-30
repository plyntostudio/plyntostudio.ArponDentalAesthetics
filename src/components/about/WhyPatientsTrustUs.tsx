const TRUST_FACTORS = [
  {
    value: '10+',
    label: 'Years of experience serving Golaghat',
  },
  {
    value: '1000+',
    label: 'Smiles transformed and counting',
  },
  {
    value: '4.9',
    label: 'Average patient rating',
  },
  {
    value: '100%',
    label: 'Commitment to your comfort',
  },
] as const;

export function WhyPatientsTrustUs() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Why patients trust us">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Why Patients Trust Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Trust is earned through consistent, compassionate care — every visit, every time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-4">
          {TRUST_FACTORS.map((factor) => (
            <div key={factor.label} className="text-center">
              <span className="block font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1] text-accent">
                {factor.value}
              </span>
              <span className="mt-2 block text-sm leading-snug text-text-muted">{factor.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
