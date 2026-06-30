import { SITE_CONFIG } from '@/lib/constants';

const PLANS = [
  'Cash and debit / credit cards accepted',
  'Most major dental insurance plans welcome',
  'UPI and digital payment options available',
  'Flexible payment plans for larger treatments',
];

export function PaymentInsurance() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Payment and insurance">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Payment and Insurance
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            We believe in transparent pricing and flexible options. Our team will help you understand your coverage
            and explore payment choices before any treatment begins.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-2">
          {PLANS.map((item) => (
            <div
              key={item}
              className="flex items-center gap-3 rounded-[6px] border border-border bg-white p-4 text-left"
            >
              <span
                className="block h-2 w-2 shrink-0 rounded-full bg-accent"
                aria-hidden="true"
              />
              <span className="text-sm leading-relaxed text-text-main">{item}</span>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[6px] border border-border bg-white p-6 text-center">
          <p className="text-sm font-medium text-text-main">Have questions about payment or insurance?</p>
          <p className="mt-1 text-sm text-text-muted">
            Call us at <a href={`tel:${SITE_CONFIG.phone}`} className="font-medium text-accent underline transition-colors duration-200 hover:text-accent-dark">{SITE_CONFIG.phone}</a> and we will be happy to help.
          </p>
        </div>
      </div>
    </section>
  );
}
