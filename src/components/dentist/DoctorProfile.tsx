export function DoctorProfile() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Doctor profile">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div
              className="aspect-[3/4] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Dr. [Name]
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">Lead Dentist</p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                Dr. [Name] is the founding dentist at Arpon Dental Aesthetics, bringing years of clinical experience
                and a deep commitment to patient-centred care.
              </p>
              <p>
                After completing dental training and advanced certifications, Dr. [Name] returned to Golaghat with a
                vision — to create a practice where advanced dentistry meets genuine compassion in a warm,
                welcoming environment.
              </p>
              <p>
                Known for a gentle touch and clear communication, Dr. [Name] takes the time to understand each
                patient&rsquo;s unique concerns, goals, and fears — ensuring every visit is as comfortable as it is
                effective.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
