export function PatientSmiles() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Patient smiles">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Our Patients</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Happy Patients, Healthy Smiles
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            There is nothing we love more than seeing our patients smile with confidence. Each photo represents a
            journey we were honoured to be part of.
          </p>
        </div>

        <div className="mt-10 columns-2 gap-4 md:columns-3 lg:columns-4">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="mb-4 inline-block w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              style={{ aspectRatio: i % 3 === 0 ? '3/4' : i % 3 === 1 ? '1/1' : '4/5' }}
              aria-hidden="true"
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-medium uppercase tracking-wider text-text-muted">
          Photos shown with patient consent
        </p>
      </div>
    </section>
  );
}
