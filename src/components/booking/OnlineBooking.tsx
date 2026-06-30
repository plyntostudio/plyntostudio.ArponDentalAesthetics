import { SERVICE_ITEMS } from '@/lib/constants';

function generateTimeSlots() {
  const slots: string[] = [];
  for (let h = 9; h <= 18; h++) {
    for (let m = 0; m < 60; m += 30) {
      const hour = h > 12 ? h - 12 : h;
      const ampm = h >= 12 ? 'PM' : 'AM';
      const minute = m.toString().padStart(2, '0');
      slots.push(`${hour}:${minute} ${ampm}`);
    }
  }
  return slots;
}

const TIME_SLOTS = generateTimeSlots();

export function OnlineBooking() {
  return (
    <section className="bg-highlight py-16 lg:py-20" aria-label="Online booking form">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">Online Booking</span>
          <h2 className="mt-3 font-serif text-[clamp(1.75rem,3vw,2.75rem)] leading-[1.1] text-text-main">
            Book Online
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-text-muted">
            Complete the form below and we will confirm your appointment shortly.
          </p>
        </div>

        <div id="book" className="mx-auto mt-10 max-w-xl rounded-[6px] border border-border bg-white p-8">
          <div className="space-y-5">
            <div>
              <label htmlFor="service" className="block text-sm font-medium text-text-main">
                Service Required
              </label>
              <select
                id="service"
                required
                className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                defaultValue=""
              >
                <option value="" disabled>Select a service</option>
                {SERVICE_ITEMS.map((item) => (
                  <option key={item.href} value={item.href}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="date" className="block text-sm font-medium text-text-main">
                  Preferred Date
                </label>
                <input
                  id="date"
                  type="date"
                  required
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="time" className="block text-sm font-medium text-text-main">
                  Preferred Time
                </label>
                <select
                  id="time"
                  required
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  defaultValue=""
                >
                  <option value="" disabled>Select a time</option>
                  {TIME_SLOTS.map((slot) => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="patient-name" className="block text-sm font-medium text-text-main">
                  Full Name
                </label>
                <input
                  id="patient-name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
              <div>
                <label htmlFor="patient-phone" className="block text-sm font-medium text-text-main">
                  Phone Number
                </label>
                <input
                  id="patient-phone"
                  type="tel"
                  required
                  placeholder="Your phone number"
                  className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="patient-email" className="block text-sm font-medium text-text-main">
                Email Address
              </label>
              <input
                id="patient-email"
                type="email"
                placeholder="Your email address"
                className="mt-1.5 block w-full rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <div>
              <label htmlFor="patient-notes" className="block text-sm font-medium text-text-main">
                Notes (Optional)
              </label>
              <textarea
                id="patient-notes"
                rows={3}
                placeholder="Any specific concerns or requests"
                className="mt-1.5 block w-full resize-y rounded-[6px] border border-border bg-white px-4 py-2.5 text-sm text-text-main placeholder:text-text-muted transition-colors duration-200 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[6px] bg-accent px-7 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-accent-dark active:scale-[0.98]"
            >
              Request Appointment
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
