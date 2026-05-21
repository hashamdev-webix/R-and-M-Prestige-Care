import type { Metadata } from "next";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { BuiltAroundNeeds } from "@/components/BuiltAroundNeeds";
import { WhoWeServe } from "@/components/WhoWeServe";
import { SpecializedConditions } from "@/components/SpecializedConditions";
import { ServicesOverview } from "@/components/ServicesOverview";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { CtaBand } from "@/components/CtaBand";
import { Faq } from "@/components/Faq";
import { siteConfig } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: `Calgary Home Care & Healthcare Staffing Services | ${siteConfig.name}`,
  description:
    "PSW provides compassionate Calgary home care for seniors and reliable healthcare staffing for facilities. Certified Healthcare Aides, personal care, dementia support, and 24/7 service.",
  alternates: {
    canonical: siteUrl,
  },
};

// FAQ JSON-LD Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I register for home care in Calgary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start by contacting PSW through phone, email, or the website inquiry form. Our team will ask about your care needs, preferred schedule, location, and type of support required, then guide you toward the right home care option.",
      },
    },
    {
      "@type": "Question",
      name: "How much does home care cost in Calgary?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The cost of home care in Calgary depends on the type of support needed, the number of hours required, the care schedule, and whether the client needs daytime, overnight, live-in, or 24-hour support. PSW can review your needs and provide a care option based on your schedule, service type, and level of support.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly can home care start after I call?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Home care can often be arranged based on caregiver availability, service needs, and schedule requirements. For urgent support, overnight care, or short-notice assistance, PSW can review your request and help you understand the earliest available care option.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide personal care assistance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our personal care services include toileting assistance, incontinence care, transfers, repositioning, bedside care, morning routines, evening routines, wellness monitoring, and mobility support.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide housekeeping services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide light housekeeping support, including kitchen cleaning, bathroom cleaning, vacuuming, mopping, dusting, bed making, laundry, linen changes, and general home organization.",
      },
    },
    {
      "@type": "Question",
      name: "Can I request overnight or 24-hour care?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. PSW offers morning shifts, evening shifts, night shifts, overnight care, live-in care, and 24/7 support services depending on client needs and staff availability.",
      },
    },
    {
      "@type": "Question",
      name: "Will I get the same caregiver every visit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PSW aims to provide consistent caregiver support whenever possible because familiarity helps build comfort and trust. Caregiver consistency depends on scheduling, care hours, availability, and the level of support required. If a regular caregiver is unavailable, the team works to arrange suitable coverage.",
      },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Hero />
      <TrustBar />
      <BuiltAroundNeeds />
      <WhoWeServe />
      <SpecializedConditions />
      <ServicesOverview />
      <WhyChooseUs />
      <CtaBand />
      <Faq />
    </>
  );
}
