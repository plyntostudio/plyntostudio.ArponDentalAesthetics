import Link from 'next/link';

export function MeetDentistSection() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Meet the dentist">
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
              Meet Your Dentist
            </h2>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              Your oral health is in experienced, caring hands. Our dentist combines advanced training with a genuine
              commitment to patient comfort â€” taking the time to listen, explain, and tailor every treatment to your
              needs.
            </p>
            <p className="mt-4 text-base leading-relaxed text-text-muted">
              From routine preventive care to complex restorative procedures, every visit is built on trust, transparency,
              and a shared goal: a healthy, confident smile.
            </p>
            <div className="mt-8">
              <Link
                href="/dentist"
                className="inline-flex items-center justify-center rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
              >
                Learn More About Your Dentist
                <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
