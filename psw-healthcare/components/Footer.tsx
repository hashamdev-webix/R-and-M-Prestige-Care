import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  UserCheck,
  CalendarClock,
} from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      {/* Trust Strip */}
      <div className="border-b border-navy-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">
                  Locally Owned & Operated in Calgary
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UserCheck className="w-5 h-5 text-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">
                  Screened, Trained & Compassionate Staff
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CalendarClock className="w-5 h-5 text-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">
                  Flexible Care & Staffing When You Need It
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-green flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-sm">
                  Committed to Dignity, Safety & Quality Care
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Link href={siteConfig.urls.home} className="inline-block mb-4">
              <div className="bg-white rounded-lg p-2 inline-block">
                <Image
                  src="/logo.png"
                  alt="R&M Prestige Care - Calgary Home Care & Healthcare Staffing"
                  width={64}
                  height={64}
                  className="w-16 h-16 object-contain"
                />
              </div>
            </Link>
            <p className="text-navy-100 text-sm mb-4">
              Calgary-based home care and healthcare staffing provider helping
              families and facilities since {siteConfig.foundingYear}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/free-assessment"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Free Assessment
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/home-care-calgary"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Home Care Services
                </Link>
              </li>
              <li>
                <Link
                  href="/senior-care-calgary"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Senior Care
                </Link>
              </li>
              <li>
                <Link
                  href="/personal-care-calgary"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Personal Care Assistance
                </Link>
              </li>
              <li>
                <Link
                  href="/dementia-alzheimers-care-calgary"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Dementia & Alzheimer{"'"}s Care
                </Link>
              </li>
              <li>
                <Link
                  href="/healthcare-staffing-calgary"
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  Healthcare Staffing
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-heading">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-green flex-shrink-0 mt-1" />
                <div>
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="text-navy-100 hover:text-green transition-colors text-sm"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <p className="text-xs text-navy-200">24/7 Support</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-green flex-shrink-0 mt-1" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-navy-100 hover:text-green transition-colors text-sm"
                >
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green flex-shrink-0 mt-1" />
                <div className="text-navy-100 text-sm">
                  <p>Serving Calgary, AB & nearby areas</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-500">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-navy-200 text-sm">
              © {siteConfig.foundingYear}–{currentYear} {siteConfig.name}. All
              rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href={siteConfig.urls.privacyPolicy}
                className="text-navy-200 hover:text-green transition-colors text-sm"
              >
                Privacy Policy
              </Link>
              <Link
                href={siteConfig.urls.terms}
                className="text-navy-200 hover:text-green transition-colors text-sm"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
