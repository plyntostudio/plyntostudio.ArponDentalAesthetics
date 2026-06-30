export function OurClinic() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Our clinic environment">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Space</span>
            <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Step Into Our Clinic
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              From the moment you walk in, we want you to feel at ease. Our clinic is designed with your comfort in
              mind — warm lighting, calm colours, and a team that greets you by name.
            </p>
            <p className="mt-3 text-base leading-relaxed text-text-muted">
              Every treatment room is equipped with modern technology to ensure precise, comfortable care. We believe
              the environment you are treated in matters as much as the treatment itself.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              aria-hidden="true"
            />
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-accent-light"
              aria-hidden="true"
            />
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-light to-highlight"
              aria-hidden="true"
            />
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-highlight"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
