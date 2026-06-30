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
    <section className="bg-highlight py-16 lg:py-20" aria-label="Why choose us">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Why Choose {SITE_CONFIG.name}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            What makes our practice different — and why patients trust us with their smiles.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {REASONS.map((reason) => (
            <div key={reason.title}>
              <div className="mb-4 h-[3px] w-10 bg-accent" aria-hidden="true" />
              <h3 className="font-serif text-xl leading-snug text-text-main">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
