import Link from 'next/link';

const CATEGORIES = [
  {
    title: 'General Dentistry',
    description: 'Preventive care, cleanings, exams, and routine treatments to maintain a healthy smile.',
    services: [
      { name: 'General Dentistry', href: '/services/general-dentistry-golaghat' },
      { name: 'Dental Cleaning', href: '/services/dental-cleaning-golaghat' },
      { name: 'Dental Fillings', href: '/services/dental-fillings-golaghat' },
    ],
  },
  {
    title: 'Restorative Dentistry',
    description: 'Rebuild and restore damaged or missing teeth for function and aesthetics.',
    services: [
      { name: 'Root Canal Treatment', href: '/services/root-canal-treatment-golaghat' },
      { name: 'Crowns & Bridges', href: '/services/crowns-bridges-golaghat' },
      { name: 'Dental Implants', href: '/services/dental-implants-golaghat' },
      { name: 'Dentures', href: '/services/dentures-golaghat' },
    ],
  },
  {
    title: 'Cosmetic Dentistry',
    description: 'Enhance the appearance of your smile with modern aesthetic treatments.',
    services: [
      { name: 'Cosmetic Dentistry', href: '/services/cosmetic-dentistry-golaghat' },
      { name: 'Teeth Whitening', href: '/services/teeth-whitening-golaghat' },
      { name: 'Smile Makeover', href: '/services/smile-makeover-golaghat' },
    ],
  },
  {
    title: 'Specialty Care',
    description: 'Specialised dental services for unique needs across all ages.',
    services: [
      { name: 'Pediatric Dentistry', href: '/services/pediatric-dentistry-golaghat' },
      { name: 'Braces & Orthodontics', href: '/services/braces-orthodontics-golaghat' },
      { name: 'Wisdom Tooth Removal', href: '/services/wisdom-tooth-removal-golaghat' },
      { name: 'Emergency Dental Care', href: '/services/emergency-dental-care-golaghat' },
    ],
  },
] as const;

export function ServiceCategories() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Service categories">
      <div className="container-main">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {CATEGORIES.map((category) => (
            <div
              key={category.title}
              className="rounded-[6px] border border-border bg-white p-6 md:p-8"
            >
              <h3 className="font-serif text-xl leading-snug text-text-main">{category.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">{category.description}</p>
              <ul className="mt-5 space-y-2">
                {category.services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-dark"
                    >
                      {service.name}
                      <span aria-hidden="true" className="text-base leading-none">&rarr;</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
