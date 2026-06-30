const ITEMS = [
  {
    question: 'How long does a root canal treatment take?',
    answer:
      'Most root canal treatments are completed in one or two visits, depending on the complexity of the tooth. Each visit typically lasts 60–90 minutes.',
  },
  {
    question: 'Are dental implants painful?',
    answer:
      'The procedure is performed under local anaesthesia, so you will not feel pain during surgery. Post-operative discomfort is usually mild and manageable with over-the-counter pain relievers.',
  },
  {
    question: 'How long does teeth whitening last?',
    answer:
      'Professional whitening results typically last 6–12 months with proper care. Avoiding staining foods and drinks and maintaining good oral hygiene helps prolong the brightness.',
  },
  {
    question: 'At what age should my child first visit the dentist?',
    answer:
      'The first dental visit should be by age 1 or within 6 months of the first tooth appearing. Early visits help prevent problems and build comfort with dental care.',
  },
  {
    question: 'Do you offer emergency dentistry?',
    answer:
      'Yes. We offer same-day emergency appointments for urgent dental problems. Call us immediately if you are experiencing severe pain, swelling, or a dental injury.',
  },
];

export function TreatmentQuestions() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Treatment questions">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Treatments</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Treatment Questions
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
