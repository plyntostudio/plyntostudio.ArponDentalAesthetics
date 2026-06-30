const COURSES = [
  { year: '2025', title: 'Advanced Implantology', provider: 'International Dental Implant Association' },
  { year: '2024', title: 'Laser-Assisted Periodontal Therapy', provider: 'Indian Society of Oral Laser Applications' },
  { year: '2023', title: 'Full-Mouth Rehabilitation', provider: 'Academy of Restorative Dentistry' },
  { year: '2022', title: 'Paediatric Behaviour Management', provider: 'Indian Dental Association' },
  { year: '2021', title: 'Digital Smile Design', provider: 'Association of Cosmetic & Aesthetic Dentistry' },
] as const;

export function ContinuingEducation() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Continuing education">
      <div className="container-main">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Continuing Education
          </h2>
          <p className="mt-4 text-base leading-relaxed text-text-muted">
            Dentistry evolves rapidly. We invest in ongoing education to bring you the latest techniques and best
            evidence-based care.
          </p>
          <div className="mt-8 space-y-6">
            {COURSES.map((course) => (
              <div key={`${course.year}-${course.title}`} className="flex gap-4">
                <span className="mt-0.5 shrink-0 text-xs font-semibold uppercase tracking-widest text-accent">
                  {course.year}
                </span>
                <div>
                  <h3 className="text-sm font-medium text-text-main">{course.title}</h3>
                  <p className="mt-0.5 text-sm text-text-muted">{course.provider}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
