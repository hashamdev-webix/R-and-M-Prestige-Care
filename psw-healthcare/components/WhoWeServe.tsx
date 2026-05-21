import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

export function WhoWeServe() {
  return (
    <section className="py-16 md:py-20 bg-navy-50" aria-label="Who we serve">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Who We Serve in Calgary"
          subtitle={`${siteConfig.name} serves both private home care clients and healthcare organizations across Calgary.`}
          centered
          className="mb-12"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* For Families */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=600&h=400&fit=crop"
                alt="Family receiving compassionate home care services in Calgary"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4 font-heading">
                For Families and Private Clients
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We provide compassionate home care for seniors, individuals with
                disabilities, recovering patients, and clients who need help
                with daily activities at home. Our care professionals support
                personal routines, safety, comfort, mobility, meals,
                companionship, and household tasks.
              </p>
              <Button href={siteConfig.urls.contact} variant="blue">
                Request Home Care
              </Button>
            </div>
          </div>

          {/* For Facilities */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&h=400&fit=crop"
                alt="Healthcare facility receiving professional staffing support services"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold text-navy mb-4 font-heading">
                For Healthcare Facilities
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                We provide caregiver and Healthcare Aide staffing support for
                care homes, assisted living facilities, retirement residences,
                group homes, rehabilitation centers, hospitals, and healthcare
                support environments. Facilities can request short-term,
                long-term, casual, or emergency staffing support.
              </p>
              <Button href={siteConfig.urls.forFacilities} variant="green">
                Request Staffing Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
