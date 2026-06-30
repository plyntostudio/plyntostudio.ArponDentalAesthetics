import { ScrollReveal } from './ScrollReveal';

export function TrustParallaxSection() {
  return (
    <section
      className="section-frame flex min-h-[50vh] items-center justify-center overflow-hidden bg-fixed bg-gradient-to-br from-accent-dark/95 via-accent/90 to-highlight/95 max-md:bg-scroll"
      aria-label="Trust and care"
    >
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <div
        className="absolute inset-0 opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage:
            'radial-gradient(circle at 30% 50%, rgba(255,255,255,0.3) 0%, transparent 50%), radial-gradient(circle at 70% 30%, rgba(255,255,255,0.15) 0%, transparent 40%)',
        }}
      />
      <div className="container-main relative">
        <ScrollReveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-serif text-[clamp(1.6rem,2.5vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-white/95">
              Your smile is our priority.
            </p>
            <p className="mx-auto mt-5 max-w-lg text-[clamp(0.95rem,1.15vw,1.1rem)] leading-[1.8] text-white/75">
              Every treatment is delivered with precision, compassion, and a commitment to your lasting comfort.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
