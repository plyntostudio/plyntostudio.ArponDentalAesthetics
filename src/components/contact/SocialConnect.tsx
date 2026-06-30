import { SOCIAL_LINKS } from '@/lib/constants';

export function SocialConnect() {
  const available = SOCIAL_LINKS.filter((link) => link.href && link.href !== '#');

  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Social media">
      <div className="container-main">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Follow Us
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Stay connected with us on social media for oral health tips, clinic updates, and more.
          </p>

          {available.length > 0 ? (
            <div className="mt-8 flex items-center justify-center gap-4">
              {available.map((link) => (
                <a
                  key={link.platform}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[6px] border border-border bg-white px-5 py-3 text-sm font-medium text-text-main transition-all duration-200 hover:border-text-muted hover:bg-white active:scale-[0.98]"
                >
                  {link.label}
                  <span aria-hidden="true" className="text-xs text-text-muted">&rarr;</span>
                </a>
              ))}
            </div>
          ) : (
            <p className="mt-6 text-sm text-text-muted">
              Social media links will appear here once confirmed by the clinic.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
