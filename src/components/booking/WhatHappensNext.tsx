const STEPS = [
  {
    title: 'We Confirm Your Appointment',
    description:
      'After you submit your booking request, we will call or message you within 24 hours to confirm the date and time.',
  },
  {
    title: 'You Receive a Reminder',
    description:
      'We will send you a reminder a day before your appointment so you never miss a visit.',
  },
  {
    title: 'Arrive and Get Treated',
    description:
      'Arrive a few minutes early, complete any remaining paperwork, and let our team take care of the rest.',
  },
  {
    title: 'Follow-Up Care',
    description:
      'After your visit, we will provide any necessary aftercare instructions and schedule your next appointment if needed.',
  },
];

export function WhatHappensNext() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="What happens next">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">After You Book</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What Happens Next
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Here is what you can expect after submitting your booking request.
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
