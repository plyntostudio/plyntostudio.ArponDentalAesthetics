import Link from 'next/link';

import { DENTIST } from '@/lib/constants';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

export function MeetDentistSection() {
  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Meet the dentist">
      <div className="container-main">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-14 lg:gap-20">
          <ScrollReveal>
            <div className="relative">
              <div
                className="image-surface aspect-[4/5] w-full bg-gradient-to-br from-highlight via-white to-accent-bg md:aspect-[3/4]"
                aria-hidden="true"
              />
              <div className="absolute bottom-4 left-4 right-4 rounded-[6px] bg-white/90 backdrop-blur-sm px-4 py-3 shadow-soft">
                <p className="text-sm font-medium text-text-main">{DENTIST.name}</p>
                <p className="text-xs text-text-muted">{DENTIST.title}</p>
              </div>
            </div>
          </ScrollReveal>

          <StaggerContainer className="max-w-xl" staggerDelay={0.12}>
            <StaggerItem>
              <h2 className="section-title">Meet Your Dentist</h2>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-5 text-base leading-[1.9] text-text-muted">
                Your oral health is in experienced, caring hands. Our dentist combines advanced training with a genuine
                commitment to patient comfort, taking the time to listen, explain, and tailor every treatment to your
                needs.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-4 text-base leading-[1.9] text-text-muted">
                From routine preventive care to complex restorative procedures, every visit is built on trust, transparency,
                and a shared goal: a healthy, confident smile.
              </p>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8">
                <Link href="/dentist" className="button-primary">
                  Learn More About Your Dentist
                  <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
                </Link>
              </div>
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
