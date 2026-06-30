import Link from 'next/link';
import { NAV_ITEMS, SERVICE_ITEMS, SOCIAL_LINKS, SITE_CONFIG } from '@/lib/constants';

function FooterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-serif text-lg font-medium text-text-main mb-4">{title}</h3>
      {children}
    </div>
  );
}

function FooterLinkList({ items }: { items: { label: string; href: string }[] }) {
  return (
    <ul className="space-y-2.5" role="list">
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="text-sm text-text-muted transition-colors duration-200 hover:text-text-main focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-highlight border-t border-border" role="contentinfo">
      <div className="container-main py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="sm:col-span-2 lg:col-span-1">
            <Link
              href="/"
              className="inline-flex items-baseline gap-1 font-display text-xl leading-none"
              aria-label="Arpon Dental Aesthetics — Home"
            >
              <span className="text-accent">Arpon</span>
              <span className="text-text-main font-medium text-lg">Dental</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted max-w-xs leading-relaxed">
              {SITE_CONFIG.tagline}. {SITE_CONFIG.location}.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIAL_LINKS.filter((s) => s.platform !== 'whatsapp').map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-xs text-text-muted transition-colors duration-200 hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
                  aria-label={social.label}
                >
                  {social.platform === 'facebook' ? 'f' : social.platform === 'instagram' ? 'ig' : social.label}
                </a>
              ))}
            </div>
          </div>

          <FooterSection title="Quick Links">
            <FooterLinkList items={NAV_ITEMS} />
          </FooterSection>

          <FooterSection title="Treatments">
            <FooterLinkList items={SERVICE_ITEMS} />
          </FooterSection>

          <FooterSection title="Contact">
            <ul className="space-y-3 text-sm text-text-muted" role="list">
              <li>
                <span className="block text-text-main font-medium text-xs uppercase tracking-wider mb-0.5">Address</span>
                <span className="leading-relaxed">{SITE_CONFIG.address.full}</span>
              </li>
              <li>
                <span className="block text-text-main font-medium text-xs uppercase tracking-wider mb-0.5">Phone</span>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="transition-colors duration-200 hover:text-text-main"
                >
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <span className="block text-text-main font-medium text-xs uppercase tracking-wider mb-0.5">WhatsApp</span>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors duration-200 hover:text-text-main"
                >
                  Message us
                </a>
              </li>
            </ul>

            <div className="mt-5">
              <span className="block text-text-main font-medium text-xs uppercase tracking-wider mb-2">
                Clinic Hours
              </span>
              <ul className="space-y-1.5 text-sm text-text-muted" role="list">
                {SITE_CONFIG.hours.map((slot) => (
                  <li key={slot.label} className="flex justify-between gap-4">
                    <span className="shrink-0">{slot.label}</span>
                    <span>{slot.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FooterSection>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-main flex flex-col items-center justify-between gap-4 py-6 text-xs text-text-muted sm:flex-row">
          <p>&copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link
              href="/privacy-policy"
              className="transition-colors duration-200 hover:text-text-main focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-border">&middot;</span>
            <Link
              href="/terms"
              className="transition-colors duration-200 hover:text-text-main focus-visible:outline-2 focus-visible:outline-accent focus-visible:outline-offset-2"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
