'use client';

import { useCallback, useRef } from 'react';
import Link from 'next/link';

import { SERVICE_ITEMS } from '@/lib/constants';
import { ScrollReveal, StaggerContainer, StaggerItem } from './ScrollReveal';

const FEATURED_DESCRIPTIONS: Record<string, string> = {
  'root-canal-treatment-golaghat':
    'Relieve pain and save your natural tooth with modern, gentle root canal therapy. Our approach prioritises your comfort throughout.',
  'teeth-whitening-golaghat':
    'Brighten your smile with professional whitening treatments. Visible, dramatic results in a single appointment.',
  'dental-implants-golaghat':
    'Restore missing teeth with permanent, natural-looking dental implants. Eat, speak, and smile with complete confidence.',
  'pediatric-dentistry-golaghat':
    'Gentle, caring dental treatment designed especially for children. Building positive habits that last a lifetime.',
  'braces-orthodontics-golaghat':
    'Straighten your smile with modern orthodontic solutions. Discreet options available for adults and teens.',
  'emergency-dental-care-golaghat':
    'Same-day emergency appointments when you need care the most. Prompt relief for dental pain and injuries.',
};

const GRADIENTS = [
  'from-highlight to-accent-bg',
  'from-accent-bg to-highlight',
  'from-highlight to-accent-bg',
];

const SLUG_PATTERN = /\/services\/(.+)$/;

function extractSlug(href: string): string {
  const match = SLUG_PATTERN.exec(href);
  return match ? match[1] : '';
}

function ToothIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="text-accent/30 transition-all duration-400 group-hover:text-accent/20 group-hover:scale-105">
      <path d="M12 3C8.5 3 5 5 5 9c0 2.5 1.5 5 2 7l1 3c.3.8 1 2 2 2h4c1 0 1.7-1.2 2-2l1-3c.5-2 2-4.5 2-7 0-4-3.5-6-7-6z" />
      <path d="M9 9c0-1 1-2 3-2s3 1 3 2" />
    </svg>
  );
}

interface TreatmentRowProps {
  title: string;
  description: string;
  href: string;
  gradient: string;
  reversed: boolean;
}

function TreatmentRow({ title, description, href, gradient, reversed }: TreatmentRowProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const applyTransform = useCallback((tiltX: number, tiltY: number, lift: number) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = `perspective(800px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) translateY(${lift}px)`;
  }, []);

  const applyHover = useCallback((tiltX: number, tiltY: number) => {
    const card = cardRef.current;
    if (!card) return;
    card.style.borderColor = 'var(--color-accent)';
    card.style.boxShadow = 'var(--shadow-lift)';
    applyTransform(tiltX, tiltY, -4);
  }, [applyTransform]);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 350ms cubic-bezier(0.23, 1, 0.32, 1), border-color 350ms ease, box-shadow 350ms cubic-bezier(0.23, 1, 0.32, 1)';
    applyHover(0, 0);
  }, [applyHover]);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -2.5;
    const tiltY = ((x - centerX) / centerX) * 2.5;
    card.style.transition = 'transform 50ms linear, border-color 350ms ease, box-shadow 350ms cubic-bezier(0.23, 1, 0.32, 1)';
    applyHover(tiltX, tiltY);
  }, [applyHover]);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 350ms cubic-bezier(0.23, 1, 0.32, 1), border-color 350ms ease, box-shadow 350ms cubic-bezier(0.23, 1, 0.32, 1)';
    applyTransform(0, 0, 0);
    card.style.borderColor = '';
    card.style.boxShadow = '';
  }, [applyTransform]);

  return (
    <div
      ref={cardRef}
      className="panel-surface group grid grid-cols-1 items-center gap-8 p-5 md:grid-cols-2 md:gap-12 md:p-7 lg:gap-16 lg:p-8"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <div className={`relative overflow-hidden ${reversed ? 'md:order-2' : ''}`}>
        <div className={`image-surface aspect-[4/3] w-full bg-gradient-to-br ${gradient}`} aria-hidden="true" />
        <div className="absolute inset-0 flex items-center justify-center opacity-40 transition-all duration-400 group-hover:opacity-55">
          <ToothIcon />
        </div>
      </div>
      <div className={reversed ? 'md:order-1' : ''} style={{ transform: 'translateZ(20px)' }}>
        <h3 className="font-serif text-[clamp(1.35rem,1.8vw,1.85rem)] leading-[1.08] tracking-[-0.025em] text-text-main">
          {title}
        </h3>
        <p className="mt-4 max-w-xl text-base leading-[1.85] text-text-muted">
          {description}
        </p>
        <Link href={href} className="text-link mt-5">
          Learn more
          <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}

export function FeaturedTreatmentsSection() {
  const featured = SERVICE_ITEMS.slice(0, 3);

  return (
    <section className="section-frame bg-white py-[4.5rem] lg:py-24" aria-label="Featured treatments">
      <div className="container-main">
        <ScrollReveal>
          <div className="section-intro">
            <h2 className="section-title">Treatments We Offer</h2>
            <p className="section-copy">
              Comprehensive dental care tailored to your needs, from routine check-ups to advanced restorative procedures.
            </p>
          </div>
        </ScrollReveal>

        <StaggerContainer className="mt-14 space-y-9 lg:mt-16 lg:space-y-10">
          {featured.map((item, index) => (
            <StaggerItem key={item.href}>
              <TreatmentRow
                title={item.label}
                description={FEATURED_DESCRIPTIONS[extractSlug(item.href)] ?? ''}
                href={item.href}
                gradient={GRADIENTS[index]}
                reversed={index % 2 !== 0}
              />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <ScrollReveal className="mt-14 text-center" delay={0.3}>
          <Link href="/services" className="button-secondary">
            View All Services
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
