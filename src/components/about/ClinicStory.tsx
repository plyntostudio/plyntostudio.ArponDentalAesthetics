import { SITE_CONFIG } from '@/lib/constants';

export function ClinicStory() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Our story">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <div
              className="aspect-[4/3] w-full rounded-[6px] bg-gradient-to-br from-highlight to-accent-bg"
              aria-hidden="true"
            />
          </div>
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              Our Story
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                {SITE_CONFIG.name} was built on a simple belief: everyone deserves access to gentle, expert dental care
                in an environment that feels safe, welcoming, and genuinely compassionate.
              </p>
              <p>
                Founded in Golaghat, our practice brings together modern clinical techniques with the warmth of a
                community-focused dental home. From advanced diagnostic technology to a calming treatment environment,
                every detail is designed with your comfort and confidence in mind.
              </p>
              <p>
                We take the time to listen, explain, and involve you in every decision about your care. Because the best
                treatment plans are built on trust, not pressure.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
