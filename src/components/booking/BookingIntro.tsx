export function BookingIntro() {
  return (
    <section className="bg-white py-16 lg:py-20" aria-label="Introduction">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Schedule Your Visit
          </h2>
          <p className="mt-5 text-base leading-relaxed text-text-muted">
            Book your appointment online in just a few clicks. Select the service you need, pick a date and time
            that works for you, and we will confirm your visit promptly. If you prefer, you can also call or
            message us directly.
          </p>
        </div>
      </div>
    </section>
  );
}
