import { SITE_CONFIG } from '@/lib/constants';

export function ContactHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="Contact us"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            Contact Us
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            We are here to answer your questions and help you schedule your visit. Reach out any way that is
            convenient for you.
          </p>
        </div>
      </div>
    </section>
  );
}
