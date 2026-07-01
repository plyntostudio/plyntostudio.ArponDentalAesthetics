'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { SITE_CONFIG } from '@/lib/constants';
import { cn } from '@/lib/utils';

function CallIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:h-5 md:w-5">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="md:h-5 md:w-5">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FloatingButton({
  href,
  icon,
  label,
  rel,
  target,
  isExternal,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  rel?: string;
  target?: string;
  isExternal?: boolean;
}) {
  const shared = `group relative flex h-12 w-12 items-center justify-center rounded-full bg-accent text-white shadow-lg transition-all duration-300 ease-out hover:bg-accent-dark hover:shadow-xl active:scale-95 md:h-14 md:w-14`;
  const labelEl = (
    <span className="absolute right-full mr-3 hidden whitespace-nowrap rounded-[6px] bg-text-main/90 px-3 py-1.5 text-xs font-medium text-white opacity-0 transition-all duration-300 ease-out group-hover:opacity-100 md:block">
      {label}
    </span>
  );

  if (isExternal) {
    return (
      <a href={href} target={target} rel={rel} className={shared} aria-label={label}>
        {labelEl}
        <span className="flex items-center justify-center">{icon}</span>
      </a>
    );
  }

  return (
    <Link href={href} className={shared} aria-label={label}>
      {labelEl}
      <span className="flex items-center justify-center">{icon}</span>
    </Link>
  );
}

export function FloatingActions() {
  const [nearFooter, setNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;
      setNearFooter(scrollBottom >= pageHeight - 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={cn(
        'fixed bottom-6 right-4 z-40 flex flex-col items-end gap-3 transition-all duration-300 ease-out md:bottom-8 md:right-6',
        nearFooter ? 'opacity-0 translate-y-4 pointer-events-none' : 'opacity-100',
      )}
      style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <FloatingButton
        href={`tel:${SITE_CONFIG.phone}`}
        icon={<CallIcon />}
        label={`Call ${SITE_CONFIG.phone}`}
      />
      <FloatingButton
        href="/book"
        icon={<CalendarIcon />}
        label="Book Appointment"
      />
    </div>
  );
}
