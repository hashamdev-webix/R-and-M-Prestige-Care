import { Shield, UserCheck, CalendarClock, Phone } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

export function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      title: "Calgary-Based Care Provider",
      description:
        "Local care support for families, seniors, and healthcare facilities across Calgary.",
    },
    {
      icon: UserCheck,
      title: "Screened Care Professionals",
      description:
        "Caregivers and HCAs selected for compassion, reliability, and experience.",
    },
    {
      icon: CalendarClock,
      title: "Flexible Shift Coverage",
      description:
        "Morning, evening, overnight, live-in, and 24/7 support options.",
    },
    {
      icon: Phone,
      title: "24/7 Availability",
      description:
        "Morning, evening, overnight, live-in, and emergency shift coverage.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" aria-label="Trust indicators">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Trusted Care Support"
          centered
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-navy-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green rounded-full mb-4">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
