import { DENTIST } from '@/lib/constants';

export function PersonalPhilosophy() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Personal philosophy">
      <div className="container-main">
        <div className="mx-auto max-w-xl text-center">
          <span className="block font-display text-5xl leading-none text-accent/30" aria-hidden="true">
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-serif text-[clamp(1.25rem,2vw,1.75rem)] leading-relaxed text-text-main">
            I believe every patient deserves to be treated with the same care and respect I would want for my own
            family. Dentistry is not just about fixing teeth — it&rsquo;s about building trust, relieving anxiety, and
            helping people feel confident in their smiles.
          </blockquote>
          <div className="mt-6 h-[2px] w-10 bg-accent" aria-hidden="true" />
          <p className="mt-4 text-sm font-medium text-text-muted">&mdash; {DENTIST.name}</p>
        </div>
      </div>
    </section>
  );
}
