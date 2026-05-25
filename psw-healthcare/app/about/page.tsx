import Image from "next/image";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { siteConfig } from "@/lib/site";
import {
  Heart,
  Shield,
  Clock,
  UserCheck,
  Calendar,
  Award,
  Target,
  Eye,
} from "lucide-react";

export default function AboutPage() {
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description:
        "We provide care with kindness, patience, and understanding.",
    },
    {
      icon: Shield,
      title: "Dignity",
      description:
        "Every client deserves support that respects privacy, comfort, and independence.",
    },
    {
      icon: Clock,
      title: "Reliability",
      description:
        "Families and facilities need care they can count on, especially during important moments.",
    },
    {
      icon: UserCheck,
      title: "Safety",
      description:
        "We focus on safe support, careful routines, and dependable care practices.",
    },
    {
      icon: Calendar,
      title: "Flexibility",
      description:
        "Care needs can change quickly, so we offer flexible scheduling and support options.",
    },
    {
      icon: Award,
      title: "Professionalism",
      description:
        "Our team understands the importance of communication, respect, and responsible care.",
    },
  ];

  return (
    <main>
      {/* 1. HERO SECTION */}
      <section
        className="relative bg-gradient-to-br from-navy-50 to-white py-16 md:py-24"
        aria-label="About hero section"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy font-heading mb-6 leading-tight">
                About R&M Prestige Care
              </h1>
              <p className="text-xl md:text-2xl text-slate-700 font-semibold mb-6">
                Home care and reliable healthcare staffing services in Calgary.
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                R&M Prestige Care is a Calgary-based home care and healthcare
                staffing provider supporting families, seniors, individuals with
                disabilities, recovering patients, and healthcare facilities. We
                provide dependable in-home care for people who need daily
                support and flexible staffing solutions for care homes,
                retirement residences, assisted living facilities, hospitals,
                and healthcare environments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/free-assessment" variant="blue" size="lg">
                  Request Home Care
                </Button>
                <Button href="/contact" variant="green" size="lg">
                  Request Staffing Support
                </Button>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop"
                  alt="Compassionate caregiver providing personalized care to senior client in a warm, supportive home environment in Calgary"
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

      {/* 2. WHY R&M PRESTIGE CARE WAS STARTED */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Why we were started"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading
              title="Why R&M Prestige Care Was Started"
              className="mb-8"
              centered
            />
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                R&M Prestige Care was founded by [OWNER NAME] after seeing a
                clear need in Calgary&apos;s home care and healthcare staffing
                sector. Families needed caregivers they could trust, while care
                homes needed qualified staff on short notice.
              </p>
              <p>
                R&M Prestige Care was created to support both with reliable
                caregivers, certified Healthcare Aides, and a care-first
                approach built around dignity, safety, and trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE */}
      <section className="py-16 md:py-20 bg-navy-50" aria-label="Who we are">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <SectionHeading title="Who We Are" className="mb-8" centered />
            <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                R&M Prestige Care was created to make care easier to arrange,
                safer to receive, and more dependable for families and
                healthcare facilities in Calgary.
              </p>
              <p>
                Families often need support for a loved one but may not know
                where to begin. Healthcare facilities may need qualified care
                professionals quickly when staffing gaps happen. R&M Prestige
                Care helps both by providing compassionate home care and
                reliable healthcare staffing support.
              </p>
              <p>
                Our care approach is built around dignity, comfort, safety, and
                trust. Whether someone needs help at home with personal routines
                or a facility needs trained staff for a critical shift, our goal
                is to provide support that feels professional, respectful, and
                dependable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MISSION & VISION */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-label="Mission and vision"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Mission and Vision"
            className="mb-12"
            centered
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Mission Card */}
            <article className="bg-navy-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-heading">
                Mission Statement
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our mission is to provide compassionate, reliable, and
                respectful care support that helps people live safely and
                comfortably. We aim to give families peace of mind and help
                healthcare facilities maintain dependable care coverage when
                they need extra support.
              </p>
            </article>

            {/* Vision Card */}
            <article className="bg-navy-50 rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-green rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-navy mb-4 font-heading">
                Vision Statement
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Our vision is to become a trusted Calgary care provider known
                for professional home care, dependable healthcare staffing, and
                a care-first approach that protects dignity, supports
                independence, and improves quality of life.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* 5. OUR CARE VALUES */}
      <section
        className="py-16 md:py-20 bg-navy-50"
        aria-label="Our care values"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Care Values" className="mb-12" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => {
              const Icon = value.icon;
              return (
                <article
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-3 font-heading">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {value.description}
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
            Need Trusted Home Care or Healthcare Staffing in Calgary?
          </h2>
          <p className="text-lg text-navy-100 max-w-3xl mx-auto mb-8">
            Whether you are arranging care for a loved one or looking for
            dependable staffing support for your facility, R&M Prestige Care is
            ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button href="/free-assessment" variant="blue" size="lg">
              Book Free In-Home Assessment
            </Button>
            <Button href="/contact" variant="green" size="lg">
              Request Staffing Support
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
      </section>
    </main>
  );
}
