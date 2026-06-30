import { ScrollReveal } from './ScrollReveal';

export function TrustParallaxSection() {
  return (
    <section
      className="section-frame flex min-h-[50vh] items-center justify-center overflow-hidden bg-fixed bg-[url('/images/parallax/clinic.jpg')] bg-cover bg-center bg-no-repeat max-md:bg-scroll"
      aria-label="Trust and care"
    >
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/5 to-black/30"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 opacity-25"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 25% 45%, rgba(255,255,255,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 25%, rgba(255,255,255,0.08) 0%, transparent 40%)',
        }}
      />
      <div className="container-main relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p
              className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-white/95"
              style={{ textShadow: '0 2px 10px rgba(0,0,0,.28), 0 1px 2px rgba(0,0,0,.18)' }}
            >
              Your smile is our priority.
            </p>
            <p
              className="mx-auto mt-5 max-w-lg text-[clamp(0.95rem,1.15vw,1.1rem)] leading-[1.8] text-white/75"
              style={{ textShadow: '0 1px 6px rgba(0,0,0,.22)' }}
            >
              Every treatment is delivered with precision, compassion, and a commitment to your lasting comfort.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
