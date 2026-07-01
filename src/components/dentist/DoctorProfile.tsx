import Image from 'next/image';
import { DENTIST } from '@/lib/constants';

export function DoctorProfile() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Doctor profile">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[6px]">
            <Image
              src="/images/doctors/doctor(1).jpg"
              alt={`${DENTIST.name} — ${DENTIST.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div>
            <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
              {DENTIST.name}
            </h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-accent">{DENTIST.title}</p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-text-muted">
              <p>
                {DENTIST.name} is the lead dentist at Arpon Dental Aesthetics, bringing years of clinical experience
                and a deep commitment to patient-centred care.
              </p>
              <p>
                After completing dental training and advanced certifications, {DENTIST.name} returned to Golaghat with a
                vision — to create a practice where advanced dentistry meets genuine compassion in a warm,
                welcoming environment.
              </p>
              <p>
                Known for a gentle touch and clear communication, {DENTIST.name} takes the time to understand each
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
