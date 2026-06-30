'use client';

import { cn } from '@/lib/utils';

interface MobileNavToggleProps {
  open: boolean;
  onToggle: () => void;
}

export function MobileNavToggle({ open, onToggle }: MobileNavToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="lg:hidden relative z-50 ml-auto flex h-10 w-10 items-center justify-center rounded-[6px] transition-colors duration-200 hover:bg-highlight focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
      aria-expanded={open}
      aria-controls="mobile-navigation"
      aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
    >
      <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
      <span
        aria-hidden="true"
        className={cn(
          'absolute block h-[2px] w-5 rounded-full bg-text-main transition-all duration-250 ease-out',
          open ? 'translate-y-0 rotate-45' : '-translate-y-[6px]',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute block h-[2px] w-5 rounded-full bg-text-main transition-all duration-200 ease-out',
          open ? 'opacity-0 scale-x-0' : 'opacity-100',
        )}
      />
      <span
        aria-hidden="true"
        className={cn(
          'absolute block h-[2px] w-5 rounded-full bg-text-main transition-all duration-250 ease-out',
          open ? 'translate-y-0 -rotate-45' : 'translate-y-[6px]',
        )}
      />
    </button>
  );
}
