"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: siteConfig.urls.home },
    { label: "Home Care", href: siteConfig.urls.homeCare },
    { label: "For Facilities", href: siteConfig.urls.forFacilities },
    { label: "About Us", href: siteConfig.urls.about },
    { label: "Resources", href: siteConfig.urls.resources },
    { label: "Contact", href: siteConfig.urls.contact },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={siteConfig.urls.home}
            className="flex items-center gap-2 group"
          >
            <Image
              src="/logo.png"
              alt="PSW - Calgary Home Care & Healthcare Staffing"
              width={56}
              height={56}
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-700 hover:text-navy font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Phone Number */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center gap-2 text-navy">
              <Phone className="w-5 h-5" />
              <div className="flex flex-col">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-semibold hover:text-green transition-colors"
                >
                  {siteConfig.contact.phone}
                </a>
                <span className="text-xs text-slate-600">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-navy hover:bg-navy-50 rounded-lg transition-colors"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-slate-700 hover:text-navy font-medium py-2 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${siteConfig.contact.phoneRaw}`}
                className="flex items-center gap-2 text-navy font-semibold py-2 border-t border-gray-200 mt-2 pt-4"
              >
                <Phone className="w-5 h-5" />
                <div className="flex flex-col">
                  <span>{siteConfig.contact.phone}</span>
                  <span className="text-xs text-slate-600 font-normal">
                    24/7 Support
                  </span>
                </div>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
