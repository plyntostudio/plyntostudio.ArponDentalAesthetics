import { SITE_CONFIG } from '@/lib/constants';

export function LocationMap() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Location map">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Find Us</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Our Location
          </h2>
        </div>

        <div className="mx-auto mt-8 max-w-4xl">
          <div className="overflow-hidden rounded-[6px] border border-border shadow-soft">
            <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
              <iframe
                src={SITE_CONFIG.googleMapsEmbedUrl}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title="Arpon Dental Aesthetics Location"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <div>
              <p className="text-sm leading-relaxed text-text-muted">
                <span className="font-medium text-text-main">Arpon Dental Aesthetics</span><br />
                {SITE_CONFIG.address.street}<br />
                {SITE_CONFIG.address.building}<br />
                {SITE_CONFIG.address.landmark}<br />
                {SITE_CONFIG.address.city}, {SITE_CONFIG.address.state} {SITE_CONFIG.address.pin}
              </p>
              <p className="mt-3 text-sm text-text-muted">
                <span className="font-medium text-text-main">Phone:</span>{' '}
                <a href={`tel:${SITE_CONFIG.phone}`} className="text-accent transition-colors duration-200 hover:text-accent-dark">
                  {SITE_CONFIG.phone}
                </a>
              </p>
            </div>
            <div className="text-center md:text-right">
              <a
                href={SITE_CONFIG.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary"
              >
                Get Directions
                <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
