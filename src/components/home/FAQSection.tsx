import Link from 'next/link';

const FAQS = [
  {
    question: 'Does root canal treatment hurt?',
    answer:
      'Modern root canal treatment is performed under local anaesthesia and is no more uncomfortable than getting a filling. Most patients report feeling relief from the pain caused by the infection.',
  },
  {
    question: 'How often should I visit the dentist?',
    answer:
      'We recommend a check-up and professional cleaning every six months. Regular visits help prevent problems before they start and keep your smile healthy.',
  },
  {
    question: 'Do you accept dental insurance?',
    answer:
      'We accept most major dental insurance plans. Please contact our clinic with your policy details, and we will verify your coverage before your appointment.',
  },
  {
    question: 'What should I expect during my first visit?',
    answer:
      'Your first visit includes a comprehensive oral examination, professional cleaning, and a discussion of your dental health goals. We take the time to understand your needs and answer any questions.',
  },
  {
    question: 'Do you treat children?',
    answer:
      'Yes, we welcome patients of all ages. Our team is experienced in making children feel comfortable and building positive dental habits from an early age.',
  },
] as const;

export function FAQSection() {
  return (
    <section className="section-frame section-transition-top bg-highlight py-[4.5rem] lg:py-24" aria-label="Frequently asked questions">
      <div className="container-main">
        <div className="section-intro">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-copy">Answers to the questions we hear most often.</p>
        </div>

        <div className="panel-card mx-auto mt-12 max-w-3xl divide-y divide-border/80 px-5 md:px-7">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-[0.98rem] font-medium text-text-main transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="shrink-0 text-lg text-text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-5 pt-1">
                <p className="max-w-2xl text-sm leading-[1.9] text-text-muted">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link href="/faq" className="button-secondary">
            View All FAQs
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
