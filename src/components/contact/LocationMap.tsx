export function LocationMap() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Location map">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Find Us</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Our Location
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div
            className="aspect-[16/7] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
            aria-hidden="true"
          />
          <p className="mt-3 text-center text-xs font-medium uppercase tracking-wider text-text-muted">
            Map placeholder — Google Maps embed will appear here once location is confirmed
          </p>
        </div>
      </div>
    </section>
  );
}
