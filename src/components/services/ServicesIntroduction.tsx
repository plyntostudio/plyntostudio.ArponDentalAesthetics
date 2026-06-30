import { SITE_CONFIG } from '@/lib/constants';

export function ServicesIntroduction() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Introduction">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Complete Care for Your Smile
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
            <p>
              At {SITE_CONFIG.name}, we offer a full spectrum of dental services — from preventive care and routine
              cleanings to advanced restorative and cosmetic procedures.
            </p>
            <p>
              Every treatment is delivered with the same philosophy: gentle, personalised, and focused on your
              long-term oral health. Whether you need a simple check-up or a complete smile transformation, you will
              receive care that is tailored to your unique needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
