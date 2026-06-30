import Link from 'next/link';

const PLACEHOLDER_GRADIENTS = [
  'from-highlight to-accent-bg',
  'from-accent-bg to-accent-light',
  'from-accent-bg to-highlight',
  'from-accent-light to-accent-bg',
];

export function SmileGalleryPreview() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Smile gallery preview">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Smile Gallery
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            See the kind of results that bring our patients back â€” and send their friends.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 md:gap-6">
          {PLACEHOLDER_GRADIENTS.map((gradient, index) => (
            <div
              key={index}
              className={`aspect-square w-full rounded-[6px] bg-gradient-to-br ${gradient}`}
              aria-hidden="true"
            />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-border bg-transparent px-8 py-3.5 text-base font-semibold text-text-main transition-all duration-200 hover:border-text-muted hover:bg-white active:scale-[0.98]"
          >
            View Full Gallery
            <span aria-hidden="true" className="ml-1.5 text-lg leading-none">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
