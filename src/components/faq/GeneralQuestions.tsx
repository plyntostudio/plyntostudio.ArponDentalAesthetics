const ITEMS = [
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend a check-up and professional cleaning every six months. Regular visits help detect problems early, prevent gum disease, and keep your smile healthy.',
  },
  {
    question: 'What time should I arrive for my appointment?',
    answer:
      'Please arrive 10–15 minutes early for your appointment to complete or update any paperwork. For first-time visits, arriving 15–20 minutes early is recommended.',
  },
  {
    question: 'Does dental treatment hurt?',
    answer:
      'Modern dentistry is designed to be as comfortable as possible. We use local anaesthesia to numb the treatment area, and offer sedation options for anxious patients. Most procedures involve minimal to no discomfort.',
  },
  {
    question: 'How can I improve my oral hygiene at home?',
    answer:
      'Brush twice a day with a fluoride toothpaste, floss daily, and use an antiseptic mouthwash. Limit sugary snacks and drinks, and avoid tobacco products. We provide personalised guidance during your visits.',
  },
  {
    question: 'What should I do in a dental emergency?',
    answer:
      'Call us immediately. For severe pain, swelling, or a knocked-out tooth, we offer same-day emergency appointments. Rinse your mouth with warm water and apply a cold compress to reduce swelling while you wait.',
  },
];

export function GeneralQuestions() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="General questions">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">General</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            General Questions
          </h2>
        </div>
        <div className="mx-auto mt-10 max-w-xl divide-y divide-border rounded-[6px] border border-border bg-white">
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
