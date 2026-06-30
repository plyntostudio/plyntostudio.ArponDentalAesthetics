const DOCUMENTS = [
  'Government-issued photo ID (Aadhaar, Passport, or Driver\'s Licence)',
  'Insurance card and policy information (if applicable)',
  'List of current medications and dosages',
  'Any previous dental records or X-rays (if available)',
  'Medical history or referral documents from your physician (if applicable)',
  'Completed new patient forms (sent to you before your visit)',
];

export function DocumentsToBring() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Documents to bring">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            What to Bring
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            To make your first visit as smooth as possible, please bring the following:
          </p>
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {DOCUMENTS.map((item, index) => (
              <li key={index} className="flex items-start gap-3 rounded-[6px] border border-border bg-highlight p-4">
                <span
                  className="mt-0.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  aria-hidden="true"
                />
                <span className="text-sm leading-relaxed text-text-main">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
