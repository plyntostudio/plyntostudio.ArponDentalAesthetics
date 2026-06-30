import { SITE_CONFIG } from '@/lib/constants';

export function WelcomeMessage() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Welcome message">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">A Warm Welcome</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Your Smile Journey Begins Here
          </h2>
          <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
            <p>
              At {SITE_CONFIG.name}, we believe every patient deserves to feel welcome, informed, and at ease from
              the moment they walk through our doors. Whether you are visiting for a routine check-up or a
              specialised procedure, you will be treated with the same warmth and respect we would offer our own
              family.
            </p>
            <p>
              Our team takes the time to listen to your concerns, answer your questions, and create a treatment plan
              that is tailored to your unique needs and goals. There is no pressure, no judgement — just honest,
              compassionate care.
            </p>
            <p>
              We are proudly serving families in Golaghat and the surrounding communities. We look forward to
              welcoming you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
