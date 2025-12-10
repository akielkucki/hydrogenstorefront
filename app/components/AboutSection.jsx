import { Link } from "react-router";

const stats = [
  { value: "25+", label: "Years in Business" },
  { value: "500+", label: "Trucks Built" },
  { value: "50+", label: "Custom Designs" },
  { value: "98%", label: "Customer Satisfaction" },
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Company Story */}
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image / Facility Photo */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#EDEDED]">
            <div className="flex h-full flex-col items-center justify-center text-[#8A8A8A]/50">
              <svg className="h-20 w-20" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
              </svg>
              <span className="mt-2 text-sm">Workshop / Facility photo</span>
            </div>
          </div>

          {/* Company History */}
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#F5A623]">
              Our Story
            </span>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
              Building Custom Food Trucks Since 1999
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#8A8A8A]">
              What started as a passion for mobile culinary innovation has grown into one of the most trusted custom food truck builders in the industry. For over 25 years, we've been transforming visions into rolling restaurants.
            </p>
            <p className="mt-4 text-[#8A8A8A]">
              Our founder combined restaurant equipment expertise with custom fabrication skills to create something unique—a full-service shop dedicated to building dream food trucks from the ground up. Today, our team of skilled craftsmen and designers work together to create mobile kitchens that are as functional as they are impressive.
            </p>
            <p className="mt-4 text-[#8A8A8A]">
              From our 15,000 sq. ft. fabrication facility, we design and build custom trucks for entrepreneurs across the country. We also offer parts, service, and maintenance for those who need it. Whether you're launching your first truck or expanding your fleet, we bring your vision to life.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl bg-[#EDEDED] p-6 text-center"
            >
              <p className="text-3xl font-bold text-[#D6452F] sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-[#8A8A8A]">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              to="/about"
              className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
            >
              Learn More About Us
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border-2 border-[#2F2F2F] px-8 py-3.5 text-base font-semibold text-[#2F2F2F] transition-all hover:bg-[#2F2F2F] hover:text-white"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
