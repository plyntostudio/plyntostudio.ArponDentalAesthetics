export function BookingHero() {
  return (
    <section
      className="bg-gradient-to-b from-highlight to-accent-bg py-20 lg:py-24"
      aria-label="Book an appointment"
    >
      <div className="container-main">
        <div className="max-w-2xl">
          <h1 className="font-display text-[clamp(2.25rem,4.5vw,3.75rem)] leading-[1.05] tracking-tight text-text-main">
            Book an Appointment
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-text-muted">
            Choose a convenient time and let us take care of the rest. We look forward to seeing you.
          </p>
        </div>
      </div>
    </section>
  );
}
