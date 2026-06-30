'use client';

import { useCallback, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
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

const overlayVariants = {
  hidden: { x: '100%' },
  visible: {
    x: 0,
    transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] } as const,
  },
  exit: {
    x: '100%',
    transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] } as const,
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 + i * 0.04,
      duration: 0.3,
      ease: [0.25, 0.1, 0.25, 1] as const,
    },
  }),
};

export function MobileNav({ open, onClose, items }: MobileNavProps) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);

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

  return (
    <AnimatePresence>
      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden"
          onClick={handleBackdropClick}
          aria-hidden={!open}
        >
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" />
          <motion.div
            ref={overlayRef}
            id="mobile-navigation"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-bg shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-border px-4 h-16">
              <span className="font-display text-lg text-accent">Arpon Dental</span>
            </div>

            <nav aria-label="Mobile navigation" className="flex-1 overflow-y-auto px-4 py-6">
              <ul className="flex flex-col gap-1">
                {items.map((item, i) => {
                  const active = isActiveRoute(pathname, item.href);
                  return (
                    <motion.li
                      key={item.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      <Link
                        href={item.href}
                        className={cn(
                          'flex items-center rounded-[6px] px-4 py-3 text-lg transition-colors duration-200',
                          active
                            ? 'bg-accent-bg font-medium text-accent'
                            : 'text-text-main hover:bg-highlight',
                        )}
                        aria-current={active ? 'page' : undefined}
                        tabIndex={0}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </nav>

            <div className="border-t border-border px-4 py-6 space-y-3">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex w-full items-center justify-center rounded-[6px] bg-accent px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-dark"
              >
                Call {SITE_CONFIG.phone}
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-[6px] border border-accent px-4 py-3 text-sm font-semibold text-accent transition-colors hover:bg-accent-bg"
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
