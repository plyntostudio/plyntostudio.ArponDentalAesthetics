'use client';

import { useState, useCallback } from 'react';
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
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isScrolled = useScrollPosition(20);

  const showSolid = isScrolled || !isHomePage;

  const handleToggle = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleClose = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-30 transition-colors duration-300 ease-out',
          showSolid
            ? 'bg-white border-b border-border'
            : 'bg-transparent',
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
          </div>

          <MobileNavToggle open={mobileMenuOpen} onToggle={handleToggle} />
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
