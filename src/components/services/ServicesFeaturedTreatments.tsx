import Link from 'next/link';

const FEATURED = [
  {
    title: 'Root Canal Treatment',
    description:
      'Modern root canal therapy is comfortable, precise, and often completed in a single visit. Relieve pain and save your natural tooth.',
    href: '/services/root-canal-treatment-golaghat',
  },
  {
    title: 'Dental Implants',
    description:
      'Permanent, natural-looking replacement for missing teeth. Implants restore full function and prevent bone loss.',
    href: '/services/dental-implants-golaghat',
  },
  {
    title: 'Teeth Whitening',
    description:
      'Professional whitening for visibly brighter smiles. Safe, effective, and noticeably results in a single session.',
    href: '/services/teeth-whitening-golaghat',
  },
] as const;

export function ServicesFeaturedTreatments() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Featured treatments">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Featured Treatments
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Some of the most requested procedures — delivered with precision and care.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {FEATURED.map((item) => (
            <div key={item.title} className="rounded-[6px] border border-border bg-highlight p-6">
              <div className="mb-3 h-[2px] w-8 bg-accent" aria-hidden="true" />
              <h3 className="font-serif text-lg leading-snug text-text-main">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-dark"
              >
                Learn more
                <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
