export function PatientCenteredPhilosophy() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Patient-centered philosophy">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="md:order-2">
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-accent-bg to-highlight"
              aria-hidden="true"
            />
          </div>
          <div className="md:order-1">
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Patient-Centered Philosophy
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Every treatment plan at our practice begins with a conversation — not a prescription. We believe that
                informed patients make confident decisions, so we take the time to understand your concerns, explain your
                options, and answer every question.
              </p>
              <p>
                Whether you are visiting for a routine check-up or considering a complex procedure, you will never feel
                rushed or pressured. Our goal is to provide care that aligns with your needs, values, and comfort level.
              </p>
              <p>
                From the moment you walk through our doors, every aspect of your experience is designed to put you at
                ease — from our calming environment to the gentle chairside manner of our team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
