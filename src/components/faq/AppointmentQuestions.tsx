const ITEMS = [
  {
    question: 'How do I schedule an appointment?',
    answer:
      'You can call us during clinic hours, use the contact form on our website, or visit us in person. We will find a convenient time for your visit.',
  },
  {
    question: 'Can I reschedule or cancel my appointment?',
    answer:
      'Yes. We kindly request 24-hour notice for cancellations or rescheduling. This allows us to offer the slot to another patient.',
  },
  {
    question: 'How long is a typical appointment?',
    answer:
      'A routine check-up and cleaning takes about 30–45 minutes. More complex procedures may require longer appointments. We will inform you of the expected duration when booking.',
  },
  {
    question: 'What if I need to be seen urgently?',
    answer:
      'We reserve same-day slots for emergency patients. Call us as early as possible, and we will do our best to accommodate you.',
  },
  {
    question: 'Is parking available at the clinic?',
    answer:
      'Yes, we have convenient parking available for patients. Our location is also easily accessible by public transport.',
  },
];

export function AppointmentQuestions() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Appointment questions">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Appointments</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Appointments and Logistics
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-xl divide-y divide-border rounded-[6px] border border-border bg-highlight">
          {ITEMS.map((item) => (
            <details key={item.question} className="group">
              <summary className="flex cursor-pointer items-center justify-between gap-4 px-6 py-4 text-sm font-medium text-text-main transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
                {item.question}
                <span
                  className="shrink-0 text-lg text-text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="px-6 pb-4">
                <p className="text-sm leading-relaxed text-text-muted">{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
