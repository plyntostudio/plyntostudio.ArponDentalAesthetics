const EXPERIENCE_HIGHLIGHTS = [
  {
    years: '10+',
    label: 'Years of clinical practice',
  },
  {
    years: '5000+',
    label: 'Patients treated',
  },
  {
    years: '2000+',
    label: 'Restorative procedures performed',
  },
  {
    years: '500+',
    label: 'Cosmetic smile transformations',
  },
] as const;

export function Experience() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Experience">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-highlight"
              aria-hidden="true"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Experience
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Years of dedicated practice have shaped a level of skill and judgement that only comes from hands-on
              experience. Every procedure — from routine cleanings to complex restorations — is approached with
              precision and care.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {EXPERIENCE_HIGHLIGHTS.map((item) => (
                <div key={item.label}>
                  <span className="block font-display text-[clamp(1.5rem,3vw,2.5rem)] leading-[1] text-accent">
                    {item.years}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-text-muted">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
