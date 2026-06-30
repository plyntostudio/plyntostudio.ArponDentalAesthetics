export function ContactForm() {
  return (
    <section className="bg-accent-bg py-16 lg:py-20" aria-label="Contact form">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Send a Message</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Prefer to Write to Us?
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Fill out the form below and we will get back to you within 24 hours.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-xl rounded-[6px] border border-border bg-white p-8">
          <div className="space-y-5">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-main">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-main">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-main">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email address"
                className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-main">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="How can we help you?"
                className="mt-1.5 block w-full resize-y rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              disabled
              className="w-full cursor-not-allowed rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white opacity-60"
            >
              Send Message
            </button>
          </div>

          <p className="mt-4 text-center text-xs text-text-muted">
            Form submission is not yet connected — will be implemented with Server Actions.
          </p>
        </div>
      </div>
    </section>
  );
}
