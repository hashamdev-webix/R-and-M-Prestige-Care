import Image from "next/image";
import { SectionHeading } from "./SectionHeading";

export function BuiltAroundNeeds() {
  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-label="Built around real needs"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <SectionHeading
              title="Home Care and Staffing Support Built Around Real Needs"
              className="mb-6"
            />
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Finding the right care should feel simple, safe, and reassuring.
                PSW helps individuals and families arrange dependable in-home
                support for daily living, personal care, senior assistance,
                companionship, light housekeeping, overnight supervision, and
                ongoing care needs.
              </p>
              <p>
                We also help healthcare facilities manage staffing demands by
                supplying trained caregivers and Healthcare Aides for temporary
                coverage, emergency shift support, casual staffing, long-term
                contracts, and scheduled care team support.
              </p>
              <p>
                Our goal is to provide care that protects dignity, supports
                independence, improves comfort, and gives families and facility
                managers peace of mind.
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop"
                alt="Calgary city skyline"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
