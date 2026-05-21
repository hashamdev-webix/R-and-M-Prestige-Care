import Image from "next/image";
import {
  Brain,
  Activity,
  Stethoscope,
  Heart,
  Flower2,
  Users,
  Accessibility,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "./Button";
import { siteConfig } from "@/lib/site";

export function SpecializedConditions() {
  const conditions = [
    {
      icon: Brain,
      title: "Dementia & Alzheimer&#39;s Care",
      description:
        "Structured routines, memory cues, safety supervision, and emotional support delivered in the comfort of home.",
    },
    {
      icon: Activity,
      title: "Parkinson&#39;s Support",
      description:
        "Mobility assistance, fall prevention, medication reminders, and help with the daily activities Parkinson&#39;s makes difficult.",
    },
    {
      icon: Stethoscope,
      title: "Post-Surgery & Hospital Discharge Recovery",
      description:
        "Short-term home support during the critical recovery window after surgery or hospitalization.",
    },
    {
      icon: Heart,
      title: "Stroke Recovery Care",
      description:
        "Assistance with mobility, transfers, daily routines, and rehabilitation exercises prescribed by your care team.",
    },
    {
      icon: Flower2,
      title: "Palliative & End-of-Life Comfort Care",
      description:
        "Compassionate non-medical support focused on dignity, comfort, and family presence.",
    },
    {
      icon: Users,
      title: "Senior Care & Aging at Home",
      description:
        "Daily living assistance that helps older adults stay independent and safe in their own homes.",
    },
    {
      icon: Accessibility,
      title: "Disability Support",
      description:
        "Practical daily help for adults living with physical or developmental disabilities.",
    },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-label="Specialized conditions care"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden shadow-xl sticky top-24">
              <Image
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&h=800&fit=crop"
                alt="Professional caregiver providing specialized care for seniors with medical conditions"
                width={700}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 lg:order-2">
            <SectionHeading
              title="Specialized Home Care for Common Conditions"
              className="mb-8"
            />

            <div className="space-y-6">
              {conditions.map((condition, index) => {
                const Icon = condition.icon;
                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-xl hover:bg-navy-50 transition-colors"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-1 font-heading">
                        {condition.title}
                      </h3>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        {condition.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Button href={siteConfig.urls.contact} variant="blue" size="lg">
                Speak With Our Care Team
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
