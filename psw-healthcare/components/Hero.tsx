import Image from "next/image";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section
      className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
      aria-label="Hero section"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
              Calgary Home Care & Healthcare Staffing Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 font-semibold mb-6">
              Compassionate care for families. Reliable staffing for healthcare
              facilities.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {siteConfig.name} is a Calgary-based home care and healthcare
              staffing provider serving families, seniors, individuals with
              disabilities, and healthcare facilities since{" "}
              {siteConfig.foundingYear}. We help loved ones stay safely at home
              with personal care, senior support, housekeeping, dementia care,
              and overnight supervision — and we help care homes, assisted
              living facilities, and retirement residences fill shifts with
              screened, certified Healthcare Aides on short notice.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                href={siteConfig.urls.contact}
                variant="blue"
                size="lg"
                label="for families"
              >
                Book Free In-Home Assessment
              </Button>
              <Button
                href={siteConfig.urls.forFacilities}
                variant="green"
                size="lg"
                label="for facilities"
              >
                Request Staffing Quote
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&h=600&fit=crop"
                alt="Compassionate caregiver assisting senior client with daily activities in a warm home environment"
                width={800}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border-2 border-green">
              <p className="text-navy font-bold text-sm">Calgary Based</p>
              <p className="text-slate-600 text-xs">Community Focused</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
