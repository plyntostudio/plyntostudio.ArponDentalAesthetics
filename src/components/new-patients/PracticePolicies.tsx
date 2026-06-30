const POLICIES = [
  {
    title: 'Appointment Cancellation',
    description:
      'We kindly request 24-hour notice for cancellations. This allows us to offer the appointment time to another patient in need.',
  },
  {
    title: 'Late Arrival',
    description:
      'If you arrive late, we will do our best to accommodate you. Please note that your appointment may need to be shortened or rescheduled depending on availability.',
  },
  {
    title: 'Patient Privacy',
    description:
      'Your health information is protected. We comply with all applicable privacy regulations and will never share your information without your consent.',
  },
  {
    title: 'Infection Control',
    description:
      'We follow strict sterilisation and infection control protocols. All instruments are sterilised after every use, and clinical surfaces are disinfected between patients.',
  },
  {
    title: 'Parental Presence',
    description:
      'Parents are welcome to accompany children during examinations and treatments. We encourage a supportive, comforting environment for our younger patients.',
  },
];

export function PracticePolicies() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Practice policies">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Policies</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Our Practice Policies
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We believe in clear communication. Here are the guidelines that help us provide the best care for everyone.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl space-y-4">
          {POLICIES.map((policy) => (
            <details key={policy.title} className="group rounded-[6px] border border-border bg-highlight">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text-main transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
                {policy.title}
                <span
                  className="shrink-0 text-lg text-text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-sm leading-relaxed text-text-muted">{policy.description}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
