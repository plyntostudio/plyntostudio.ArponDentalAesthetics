import Link from 'next/link';

export function MeetDentistSection() {
  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Meet the dentist">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16 lg:gap-20">
          <div>
            <div
              className="image-shell aspect-[3/4] w-full bg-gradient-to-br from-highlight via-white to-accent-bg"
              aria-hidden="true"
            />
          </div>

          <div className="max-w-xl">
            <h2 className="section-title">Meet Your Dentist</h2>
            <p className="mt-5 text-base leading-[1.9] text-text-muted">
              Your oral health is in experienced, caring hands. Our dentist combines advanced training with a genuine
              commitment to patient comfort, taking the time to listen, explain, and tailor every treatment to your
              needs.
            </p>
            <p className="mt-4 text-base leading-[1.9] text-text-muted">
              From routine preventive care to complex restorative procedures, every visit is built on trust, transparency,
              and a shared goal: a healthy, confident smile.
            </p>
            <div className="mt-8">
              <Link href="/dentist" className="button-primary">
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
