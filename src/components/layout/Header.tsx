'use client';

import { useState, useCallback, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NAV_ITEMS, SITE_CONFIG } from '@/lib/constants';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { Logo } from './Logo';
import { DesktopNav } from './DesktopNav';
import { MobileNavToggle } from './MobileNavToggle';
import { MobileNav } from './MobileNav';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const lastScrollYRef = useRef(0);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isScrolled = useScrollPosition(20);

  const [direction, setDirection] = useState<'up' | 'down'>('up');

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 20) {
        setDirection(currentY < lastScrollYRef.current ? 'up' : 'down');
      } else {
        setDirection('up');
      }
      lastScrollYRef.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const showHeader = !isScrolled || direction === 'up';

  const handleToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMobileMenuOpen(false);
    toggleRef.current?.focus();
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-all duration-300 ease-out',
          showHeader ? 'translate-y-0' : '-translate-y-full',
          isScrolled
            ? 'bg-white/85 backdrop-blur-md border-b border-border shadow-soft'
            : isHomePage
              ? 'bg-transparent'
              : 'bg-white border-b border-border shadow-none',
        )}
      >
        <div className="container-main flex h-16 items-center justify-between lg:h-[72px]">
          <div className="flex items-center gap-8">
            <Logo />
          </div>

          <DesktopNav items={NAV_ITEMS} />

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${SITE_CONFIG.phone}`}
              className="text-sm font-medium text-text-muted transition-colors duration-200 hover:text-text-main whitespace-nowrap"
            >
              {SITE_CONFIG.phone}
            </a>
            <a
              href="/book"
              className="inline-flex items-center rounded-[6px] bg-accent px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.97]"
            >
              Book Appointment
            </a>
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className={cn(
                'inline-flex items-center justify-center rounded-[6px] p-2.5 text-sm text-text-muted transition-all duration-300 ease-out hover:text-text-main hover:bg-highlight/60',
                isScrolled ? 'opacity-100' : 'opacity-0 pointer-events-none',
              )}
              aria-label="Back to top"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="18 15 12 9 6 15" />
              </svg>
            </button>
          </div>

          <MobileNavToggle ref={toggleRef} open={mobileMenuOpen} onToggle={handleToggle} />
        </div>
      </header>

      <MobileNav
        open={mobileMenuOpen}
        onClose={handleClose}
        items={NAV_ITEMS}
      />
    </>
  );
}
