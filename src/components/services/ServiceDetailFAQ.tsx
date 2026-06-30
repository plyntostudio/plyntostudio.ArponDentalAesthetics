import Link from 'next/link';

import type { ServiceData } from '@/lib/services-data';

interface Props {
  service: ServiceData;
}

export function ServiceDetailFAQ({ service }: Props) {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Frequently asked questions">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Common questions about {service.shortTitle.toLowerCase()}.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl divide-y divide-border">
          {service.faqs.map((faq) => (
            <details key={faq.question} className="group py-2">
              <summary className="flex cursor-pointer items-center justify-between gap-4 py-3 text-sm font-medium text-text-main transition-colors duration-200 hover:text-accent [&::-webkit-details-marker]:hidden">
                {faq.question}
                <span
                  className="shrink-0 text-lg text-text-muted transition-transform duration-200 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>
              <div className="pb-5 pt-1">
                <p className="text-sm leading-relaxed text-text-muted">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-highlight active:scale-[0.98]"
          >
            View All FAQs
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
