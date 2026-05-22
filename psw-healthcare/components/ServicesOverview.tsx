import {
  Home,
  HandHeart,
  Users,
  Brain,
  Sparkles,
  Building2,
  BadgeCheck,
} from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";
import { siteConfig } from "@/lib/site";

export function ServicesOverview() {
  const services = [
    {
      icon: Home,
      title: "Home Care Services",
      description:
        "In-home support that helps seniors and recovering adults stay safely at home. Personal hygiene, meal prep, medication reminders, mobility help, and companionship built around your loved one's routine.",
      href: siteConfig.urls.homeCare,
    },
    {
      icon: HandHeart,
      title: "Personal Care Assistance",
      description:
        "Compassionate help with sensitive daily routines that require patience and trust. Bathing, dressing, toileting, transfers, and bedside support handled with respect for privacy and dignity.",
      href: siteConfig.urls.homeCare,
    },
    {
      icon: Users,
      title: "Senior Care",
      description:
        "Daily living support that helps Calgary seniors stay independent and safe at home. Companionship, safety supervision, mobility help, and dementia-friendly routines from a few hours a week to full 24/7 care.",
      href: siteConfig.urls.homeCare,
    },
    {
      icon: Brain,
      title: "Dementia & Alzheimer's Care",
      description:
        "Specialized care for clients living with memory loss or cognitive decline. Structured routines, memory cues, calm hands-on support, and safety supervision that reduces stress for clients and families.",
      href: siteConfig.urls.homeCare,
    },
    {
      icon: Sparkles,
      title: "Housekeeping Support",
      description:
        "Light home cleaning and laundry to keep clients comfortable and the home safe. Kitchen, bathroom, vacuuming, linen changes, and general tidying available on its own or alongside care services.",
      href: siteConfig.urls.homeCare,
    },
    {
      icon: Building2,
      title: "Healthcare Staffing for Facilities",
      description:
        "Flexible staffing solutions for Calgary care homes, retirement residences, and hospitals. Single-shift coverage, emergency call-outs, and long-term contracts for assisted living, LTC and group homes.",
      href: siteConfig.urls.forFacilities,
    },
    {
      icon: BadgeCheck,
      title: "Certified HCA Staffing",
      description:
        "Screened, certified Healthcare Aides ready to join your resident care team. HCA-specific staffing for facilities that need credentialed aides — credentials verified, references checked, ready to start.",
      href: siteConfig.urls.forFacilities,
    },
  ];

  return (
    <section
      className="py-16 md:py-20 bg-navy-50"
      aria-label="Services overview"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Services Overview"
          title="Professional Home Care and Healthcare Staffing Services in Calgary"
          centered
          className="mb-8"
        />

        <div className="max-w-4xl mx-auto mb-12 space-y-4 text-slate-600 leading-relaxed">
          <p>
            Home care is non-medical in-home support that helps seniors and
            recovering adults with daily activities so they can stay safely at
            home instead of moving to a facility.
          </p>
          <p>
            Our home care includes personal hygiene assistance, bathing and
            dressing, mobility and transfer support, meal preparation and
            feeding assistance, medication reminders, companionship, light
            housekeeping, laundry, and overnight or 24-hour supervision. Every
            care plan is built around the client{"'"}s routine, preferences, and
            dignity.
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-navy text-center mb-3 font-heading">
            Our Home Care & Healthcare Staffing Services
          </h3>
          <p className="text-slate-600 text-center max-w-3xl mx-auto">
            Our home care services help clients live more safely and comfortably
            in their own homes. We provide practical daily support while
            respecting each client{"'"}s independence, privacy, routine, and
            dignity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
