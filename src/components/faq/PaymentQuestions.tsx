import { SITE_CONFIG } from '@/lib/constants';

const ITEMS = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept cash, debit and credit cards, and UPI payments. We also offer flexible payment plans for larger treatment procedures.',
  },
  {
    question: 'Do you accept insurance?',
    answer:
      'We accept most major dental insurance plans. Our team will help you verify your coverage and understand your benefits before treatment begins.',
  },
  {
    question: 'Can I get a cost estimate before treatment?',
    answer:
      'Absolutely. We provide a detailed treatment plan with transparent pricing before any procedure. You will never be surprised by unexpected costs.',
  },
  {
    question: 'Do you offer payment plans?',
    answer:
      'Yes, we offer flexible payment options for larger treatments. Speak with our front desk team to find a plan that works for your budget.',
  },
];

export function PaymentQuestions() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Payment questions">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Payments</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Payment and Insurance
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
        <div className="mx-auto mt-6 max-w-xl text-center">
          <p className="text-sm text-text-muted">
            For specific questions about your insurance plan, call us at{' '}
            <a href={`tel:${SITE_CONFIG.phone}`} className="font-medium text-accent underline transition-colors duration-200 hover:text-accent-dark">
              {SITE_CONFIG.phone}
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
