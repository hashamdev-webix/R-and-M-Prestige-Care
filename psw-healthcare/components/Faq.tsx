"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
  {
    question: "How do I register for home care in Calgary?",
    answer:
      "You can start by contacting PSW through phone, email, or the website inquiry form. Our team will ask about your care needs, preferred schedule, location, and type of support required, then guide you toward the right home care option.",
  },
  {
    question: "How much does home care cost in Calgary?",
    answer:
      "The cost of home care in Calgary depends on the type of support needed, the number of hours required, the care schedule, and whether the client needs daytime, overnight, live-in, or 24-hour support. PSW can review your needs and provide a care option based on your schedule, service type, and level of support.",
  },
  {
    question: "How quickly can home care start after I call?",
    answer:
      "Home care can often be arranged based on caregiver availability, service needs, and schedule requirements. For urgent support, overnight care, or short-notice assistance, PSW can review your request and help you understand the earliest available care option.",
  },
  {
    question: "Do you provide personal care assistance?",
    answer:
      "Yes. Our personal care services include toileting assistance, incontinence care, transfers, repositioning, bedside care, morning routines, evening routines, wellness monitoring, and mobility support.",
  },
  {
    question: "Do you provide housekeeping services?",
    answer:
      "Yes. We provide light housekeeping support, including kitchen cleaning, bathroom cleaning, vacuuming, mopping, dusting, bed making, laundry, linen changes, and general home organization.",
  },
  {
    question: "Can I request overnight or 24-hour care?",
    answer:
      "Yes. PSW offers morning shifts, evening shifts, night shifts, overnight care, live-in care, and 24/7 support services depending on client needs and staff availability.",
  },
  {
    question: "Will I get the same caregiver every visit?",
    answer:
      "PSW aims to provide consistent caregiver support whenever possible because familiarity helps build comfort and trust. Caregiver consistency depends on scheduling, care hours, availability, and the level of support required. If a regular caregiver is unavailable, the team works to arrange suitable coverage.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="py-16 md:py-20 bg-white"
      aria-label="Frequently asked questions"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Frequently Asked Questions"
          centered
          className="mb-12"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="bg-navy-50 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-navy-100 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-bold text-navy pr-4 font-heading">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-5 h-5 text-navy flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-6">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
