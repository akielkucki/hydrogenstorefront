export default function ContactSection() {
  return (
    <section className="bg-[#EDEDED] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Ready to start your custom food truck build? Have questions about parts or service? Our team is here to help.
            </p>

            <div className="mt-8 space-y-6">
              {/* Phone */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D6452F]/10">
                  <svg className="h-6 w-6 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Phone</h3>
                  <a href="tel:+18005550123" className="text-[#8A8A8A] hover:text-[#D6452F]">
                    (800) 555-0123
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D6452F]/10">
                  <svg className="h-6 w-6 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Email</h3>
                  <a href="mailto:sales@foodtruckparts.com" className="text-[#8A8A8A] hover:text-[#D6452F]">
                    sales@foodtruckparts.com
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#D6452F]/10">
                  <svg className="h-6 w-6 text-[#D6452F]" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[#2F2F2F]">Visit Us</h3>
                  <p className="text-[#8A8A8A]">
                    123 Industrial Parkway, Suite 100<br />Houston, TX 77001
                  </p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-8 rounded-xl bg-white p-6">
              <h3 className="font-semibold text-[#2F2F2F]">Business Hours</h3>
              <div className="mt-4 space-y-2 text-sm text-[#8A8A8A]">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-[#2F2F2F]">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-[#2F2F2F]">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-[#2F2F2F]">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-xl bg-white p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-[#2F2F2F]">
              Send us a Message
            </h3>
            <form className="mt-6 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#2F2F2F]">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-lg border border-[#EDEDED] px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#2F2F2F]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border border-[#EDEDED] px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#2F2F2F]">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border border-[#EDEDED] px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#2F2F2F]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-[#EDEDED] px-4 py-2.5 text-[#2F2F2F] placeholder:text-[#8A8A8A]/50 focus:border-[#D6452F] focus:outline-none focus:ring-1 focus:ring-[#D6452F]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
