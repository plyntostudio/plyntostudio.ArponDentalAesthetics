'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/lib/constants';
import type { NavItem } from '@/types';

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
}

function isActiveRoute(pathname: string, href: string): boolean {
  if (href === '/') {
    return pathname === '/';
  }
  return pathname.startsWith(href);
}

const easeOut = [0.23, 1, 0.32, 1] as const;

const overlayVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: easeOut },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
};

const linkVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.06 + i * 0.04,
      duration: 0.3,
      ease: easeOut,
    },
  }),
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!open || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const focusable = overlay.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    first?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first?.focus();
          }
        }
      }
    };

    overlay.addEventListener('keydown', handleKeyDown);
    return () => overlay.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    },
    [onClose],
  );

  const disableAnimation = prefersReducedMotion;

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={handleBackdropClick}
          aria-hidden={!open}
        >
          <motion.div
            variants={disableAnimation ? undefined : backdropVariants}
            initial={disableAnimation ? false : 'hidden'}
            animate={disableAnimation ? undefined : 'visible'}
            exit={disableAnimation ? undefined : 'exit'}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
          />
          <motion.div
            ref={overlayRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={disableAnimation ? undefined : overlayVariants}
            initial={disableAnimation ? false : 'hidden'}
            animate={disableAnimation ? undefined : 'visible'}
            exit={disableAnimation ? undefined : 'exit'}
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 h-16">
              <span className="font-display text-lg text-accent">Arpon Dental</span>
              <button
                type="button"
                onClick={onClose}
                className="flex h-11 w-11 items-center justify-center rounded-[6px] transition-colors duration-200 hover:bg-highlight focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                aria-label="Close navigation menu"
              >
                <span aria-hidden="true" className="text-2xl leading-none text-text-main">&times;</span>
              </button>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="flex flex-col gap-1">
                {items.map((item, i) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      custom={i}
                      variants={disableAnimation ? undefined : linkVariants}
                      initial={disableAnimation ? false : 'hidden'}
                      animate={disableAnimation ? undefined : 'visible'}
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center rounded-[6px] px-4 py-3 text-lg transition-all duration-200',
                          active
                            ? 'bg-accent-bg font-medium text-accent'
                            : 'text-text-main hover:bg-highlight hover:text-accent-dark',
                        )}
                        aria-current={active ? 'page' : undefined}
                      >
                        <span className={cn(active && 'ml-0.5')}>{item.label}</span>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-border px-4 py-6 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex w-full items-center justify-center rounded-[6px] bg-accent px-4 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.97]"
              >
                Call {SITE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[6px] border border-accent px-4 py-3 text-sm font-semibold text-accent transition-all duration-200 hover:bg-accent-bg active:scale-[0.97]"
              >
                Message on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
