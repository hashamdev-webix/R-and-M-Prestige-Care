import Image from "next/image";
import { Metadata } from "next";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Home,
  Shield,
  AlertTriangle,
  Calendar,
  Shirt,
  UtensilsCrossed,
  Bath,
  Wind,
  BedDouble,
  FolderOpen,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Housekeeping Services in Calgary | R&M Prestige Care",
  description:
    "R&M Prestige Care provides light housekeeping services in Calgary for seniors and older adults. Help with laundry, dishes, tidying, and home organization for safer, more comfortable living.",
  openGraph: {
    title: "Housekeeping Services in Calgary | R&M Prestige Care",
    description:
      "Light housekeeping support for seniors in Calgary. Help with laundry, dishes, vacuuming, and home organization to support safe, comfortable daily living.",
    url: `${process.env.NEXT_PUBLIC_SITE_URL}/housekeeping-services-calgary`,
    siteName: siteConfig.name,
    locale: "en_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Housekeeping Services in Calgary | R&M Prestige Care",
    description:
      "Light housekeeping support for seniors in Calgary. Help with laundry, dishes, vacuuming, and home organization for safer, more comfortable living.",
  },
};

export default function HousekeepingServicesPage() {
  const trustCards = [
    {
      icon: Home,
      title: "Light Housekeeping Support",
      description:
        "Help with everyday household tasks that keep the home clean, safe, and comfortable.",
    },
    {
      icon: Shield,
      title: "Senior-Friendly Home Care",
      description:
        "Support designed around the needs of seniors, older adults, and private home care clients.",
    },
    {
      icon: AlertTriangle,
      title: "Safety-Focused Cleaning",
      description:
        "Care that helps reduce clutter, fall risks, and unsafe spaces around the home.",
    },
    {
      icon: Calendar,
      title: "Flexible Visit Options",
      description:
        "Housekeeping can be arranged on its own or alongside other home care services.",
    },
  ];

  const whyItMattersChecklist = [
    "Keeping walkways clear and safer to move through",
    "Reducing clutter that may increase fall risks",
    "Supporting a cleaner and more comfortable home environment",
    "Helping with laundry, dishes, linens, and daily tidying",
    "Making the home easier to manage for seniors with limited mobility",
    "Giving families peace of mind when they cannot always help with household tasks",
  ];

  const housekeepingServices = [
    {
      icon: Shirt,
      title: "Laundry Support",
      description:
        "Help with washing, drying, folding, and organizing clothing, towels, and linens.",
    },
    {
      icon: UtensilsCrossed,
      title: "Kitchen Tidying",
      description:
        "Support with dishes, counters, light kitchen cleaning, and keeping meal areas clean and usable.",
    },
    {
      icon: Bath,
      title: "Bathroom Tidying",
      description:
        "Light bathroom cleaning to help maintain comfort, hygiene, and a safer home environment.",
    },
    {
      icon: Wind,
      title: "Vacuuming & Dusting",
      description:
        "Light vacuuming, dusting, and surface cleaning in the areas the client uses most.",
    },
    {
      icon: BedDouble,
      title: "Linen Changes",
      description:
        "Support with changing bed sheets, making the bed, and keeping bedding fresh and comfortable.",
    },
    {
      icon: FolderOpen,
      title: "General Home Organization",
      description:
        "Help with tidying, organizing small household items, reducing clutter, and keeping living spaces comfortable.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="Housekeeping services hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                Housekeeping Services in Calgary
              </h1>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                R&M Prestige Care provides light housekeeping services in
                Calgary for seniors, older adults, and families who need help
                keeping the home clean, safe, organized, and comfortable.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Our housekeeping support is designed for daily living and home
                safety, not deep cleaning or move-out cleaning. Caregivers help
                with light household tasks that support comfort, mobility, fall
                prevention, and independence at home.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/free-assessment" variant="blue" size="lg">
                  Book Free In-Home Assessment
                </Button>
                <Button
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  variant="white"
                  size="lg"
                >
                  Call R&M Prestige Care
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&h=600&fit=crop"
                  alt="Clean and organized senior home with caregiver providing light housekeeping support in Calgary"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST BLOCK - 4 ICON CARDS */}
      <section
        className="py-12 bg-white border-b border-slate-200"
        aria-label="Housekeeping support features"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-navy mb-2 font-heading">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {card.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. WHAT IS LIGHT HOUSEKEEPING SUPPORT */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="What is light housekeeping support"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="What Is Light Housekeeping Support?"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              Light housekeeping support is non-medical home care assistance
              that helps with everyday household tasks such as laundry, dishes,
              vacuuming, dusting, tidying, linen changes, and general home
              organization. It is different from a professional deep-cleaning
              service because the focus is on safe, comfortable daily living
              rather than heavy cleaning, move-out cleaning, or large cleaning
              projects.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHY HOUSEKEEPING SUPPORT MATTERS FOR SENIORS */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Why housekeeping support matters for seniors"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why Housekeeping Support Matters for Seniors"
              className="mb-8"
              centered
            />
            <p className="text-lg text-slate-600 leading-relaxed mb-8 text-center">
              A clean and organized home can make daily life safer and easier
              for seniors. Clutter, laundry buildup, spills, and disorganized
              spaces can increase fall risks, make movement harder, and create
              stress for families.
            </p>

            <div className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-lg font-semibold text-navy mb-6">
                Housekeeping support can help by:
              </p>
              <ul className="space-y-4">
                {whyItMattersChecklist.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-slate-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR HOUSEKEEPING SERVICES IN CALGARY - 6 CARDS */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Our housekeeping services"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Housekeeping Services in Calgary"
            subtitle="R&M Prestige Care provides light housekeeping support built around the client's home, routine, comfort level, and care needs."
            className="mb-12"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {housekeepingServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <article
                  key={index}
                  className="bg-navy-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. CTA BAND */}
      <section
        className="py-16 md:py-20 bg-navy text-white"
        aria-label="Call to action"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">
            Need Housekeeping Services in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            When household tasks become difficult to manage, the right support
            can help your loved one stay safer, more comfortable, and more
            independent at home. R&M Prestige Care provides light housekeeping
            services focused on cleanliness, comfort, safety, and peace of mind.
            Book a free in-home assessment today and let our team guide you
            through the next step.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/free-assessment" variant="blue" size="lg">
              Book Free In-Home Assessment
            </Button>
            <Button
              href={`tel:${siteConfig.contact.phoneRaw}`}
              variant="white"
              size="lg"
            >
              Call R&M Prestige Care
            </Button>
            <Button href="/contact" variant="green" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
