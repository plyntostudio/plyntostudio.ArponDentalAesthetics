const STEPS = [
  {
    title: 'Schedule Your Appointment',
    description:
      'Call us or book online to schedule your first visit. We will ask about your dental history and any specific concerns to ensure we allocate the right amount of time.',
  },
  {
    title: 'Complete Your Paperwork',
    description:
      'We will send you the new patient forms ahead of time so you can complete them from the comfort of your home. Bring them with you or arrive a few minutes early to fill them out at the clinic.',
  },
  {
    title: 'Meet Your Care Team',
    description:
      'When you arrive, you will be greeted by our friendly front desk team and introduced to your dentist. We will take the time to understand your concerns and goals.',
  },
  {
    title: 'Comprehensive Examination',
    description:
      'Your first visit includes a thorough oral health assessment, digital X-rays if needed, oral cancer screening, and a discussion of any findings and treatment recommendations.',
  },
  {
    title: 'Personalised Treatment Plan',
    description:
      'We will present our findings in clear, plain language and outline recommended treatments with transparent pricing. There is never any pressure to proceed — the decision is always yours.',
  },
];

export function FirstVisitSteps() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="First visit steps">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Your First Visit</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What to Expect
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We have designed the first visit experience to be as comfortable and stress-free as possible.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-8">
          {STEPS.map((step, index) => (
            <div key={step.title} className="flex gap-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
                {index + 1}
              </span>
              <div>
                <h3 className="font-serif text-lg leading-snug text-text-main">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
