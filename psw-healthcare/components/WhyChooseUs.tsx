import {
  Heart,
  GraduationCap,
  Calendar,
  Shield,
  Building2,
  MapPin,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUs() {
  const reasons = [
    {
      icon: Heart,
      title: "Compassionate Care Approach",
      description:
        "We provide care with kindness, patience, respect, and dignity. Every client deserves support that feels personal, safe, and reassuring.",
    },
    {
      icon: GraduationCap,
      title: "Trained Care Professionals",
      description:
        "PSW works with certified Healthcare Aides, experienced caregivers, support workers, and compassionate care professionals who understand the importance of dependable care.",
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description:
        "Clients and facilities can request hourly services, daily support, weekly plans, monthly contracts, yearly staffing agreements, overnight care, live-in care, or 24/7 support.",
    },
    {
      icon: Shield,
      title: "Insured and Reliable Services",
      description:
        "Our services are supported by company insurance policies and professional healthcare support standards to help provide safety, reliability, and peace of mind.",
    },
    {
      icon: Building2,
      title: "Support for Homes and Facilities",
      description:
        "We serve private clients at home and healthcare organizations that need trained staff for care environments.",
    },
    {
      icon: MapPin,
      title: "Calgary-Based Service",
      description:
        "PSW proudly supports Calgary families, seniors, private clients, care homes, and healthcare facilities across nearby areas.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" aria-label="Why choose us">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Families and Facilities Choose PSW"
          subtitle={
            <p className="mx-auto">
              Choosing a care provider is an important decision. Families need
              someone they can trust with their loved one, and healthcare
              facilities need staff they can depend on during critical shifts.
              PSW is built to support both with reliable service, flexible
              scheduling, and professional care standards.
            </p>
          }
          centered
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                  {reason.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
