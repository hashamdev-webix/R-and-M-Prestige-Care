import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

export function CtaBand() {
  return (
    <section
      className="py-16 md:py-20 bg-navy text-white"
      aria-label="Call to action"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
          Need Home Care or Healthcare Staffing in Calgary?
        </h2>
        <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
          Whether you are arranging care for a loved one or looking for
          dependable staffing support for your facility, PSW is ready to help.
          Request support today and let our team guide you through the next
          step.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href={siteConfig.urls.contact} variant="blue" size="lg">
            Request Home Care
          </Button>
          <Button
            href={siteConfig.urls.forFacilities}
            variant="green"
            size="lg"
          >
            Request Staffing Support
          </Button>
          <Button
            href={`tel:${siteConfig.contact.phoneRaw}`}
            variant="white"
            size="lg"
          >
            Call PSW
          </Button>
        </div>
      </div>
    </section>
  );
}
