import Link from 'next/link';

const TEAM_MEMBERS = [
  {
    name: 'Dr. [Name]',
    role: 'Lead Dentist',
    description:
      'With years of experience and advanced training, our lead dentist brings expertise and genuine compassion to every patient interaction.',
  },
  {
    name: '[Name]',
    role: 'Dental Hygienist',
    description:
      'Our skilled hygienist ensures every cleaning is thorough, gentle, and tailored to your oral health needs.',
  },
  {
    name: '[Name]',
    role: 'Patient Coordinator',
    description:
      'The first and last smile you see. Our coordinator handles scheduling, insurance, and ensures a seamless visit.',
  },
] as const;

export function MeetTeamPreview() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Meet the team">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Meet the Team
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            The people behind your smile — dedicated, skilled, and genuinely caring.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div key={member.name} className="text-center">
              <div
                className="mx-auto aspect-[3/4] w-full max-w-[260px] rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
                aria-hidden="true"
              />
              <h3 className="mt-5 font-serif text-xl leading-snug text-text-main">{member.name}</h3>
              <p className="mt-0.5 text-xs font-semibold uppercase tracking-wider text-accent">{member.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/dentist"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
          >
            Meet Our Dentist
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
