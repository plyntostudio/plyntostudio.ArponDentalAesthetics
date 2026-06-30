import { SITE_CONFIG } from '@/lib/constants';

const REASONS = [
  {
    title: 'Gentle, Expert Care',
    description:
      'Every patient is treated with patience, empathy, and respect. Our gentle approach helps even the most anxious patients feel at ease.',
  },
  {
    title: 'Modern Technology',
    description:
      'We invest in advanced diagnostic and treatment technology for more precise outcomes, shorter recovery times, and a comfortable experience.',
  },
  {
    title: 'Patient Comfort First',
    description:
      'From a calming environment to clear communication about every step of your treatment, your comfort is built into everything we do.',
  },
  {
    title: 'Comprehensive Family Care',
    description:
      'From children to seniors, we provide complete dental care for every member of your family under one roof.',
  },
] as const;

export function WhyChooseUsSection() {
  return (
    <section className="section-frame section-divider bg-highlight py-[4.5rem] lg:py-24" aria-label="Why choose us">
      <div className="container-main">
        <div className="section-intro">
          <h2 className="section-title">Why Choose {SITE_CONFIG.name}</h2>
          <p className="section-copy">
            What makes our practice different, and why patients trust us with their smiles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => (
            <div key={reason.title} className="panel-surface px-6 py-7 transition-transform duration-200 hover:-translate-y-1">
              <div className="mb-5 h-[3px] w-12 rounded-full bg-accent" aria-hidden="true" />
              <h3 className="font-serif text-[1.3rem] leading-[1.15] tracking-[-0.02em] text-text-main">
                {reason.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.85] text-text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
