"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { siteConfig } from "@/lib/site";

interface DropdownItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href?: string;
  dropdown?: DropdownItem[];
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null,
  );
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const navItems: NavItem[] = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    {
      label: "HOME CARE",
      dropdown: [
        { label: "Home Care Services", href: "/home-care-calgary" },
        { label: "Senior Care", href: "/senior-care-calgary" },
        { label: "Personal Care Assistance", href: "/personal-care-calgary" },
        {
          label: "Dementia & Alzheimer's Care",
          href: "/dementia-alzheimers-care-calgary",
        },
        {
          label: "24-Hour & Overnight Care",
          href: "/24-hour-overnight-care-calgary",
        },
        { label: "Companionship Care", href: "/companionship-care-calgary" },
        {
          label: "Housekeeping Services",
          href: "/housekeeping-services-calgary",
        },
      ],
    },
    {
      label: "HEALTHCARE STAFFING",
      dropdown: [
        {
          label: "Healthcare Staffing Services",
          href: "/healthcare-staffing-calgary",
        },
        { label: "HCA Staffing", href: "/hca-staffing-calgary" },
        {
          label: "Temporary & Shift Staffing",
          href: "/temporary-shift-staffing-calgary",
        },
      ],
    },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT", href: "/contact" },
  ];

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const toggleMobileDropdown = (label: string) => {
    setMobileOpenDropdown(mobileOpenDropdown === label ? null : label);
  };

  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  // Close mobile menu on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setOpenDropdown(null);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav
        className="container mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="R&M Prestige Care - Calgary Home Care & Healthcare Staffing"
              width={200}
              height={60}
              className="h-14 w-auto object-contain sm:h-16"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && handleMouseEnter(item.label)
                }
                onMouseLeave={handleMouseLeave}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className="flex items-center gap-1 text-slate-700 hover:text-navy font-medium transition-colors py-2"
                      aria-expanded={openDropdown === item.label}
                      aria-haspopup="true"
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {openDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-0 bg-white shadow-lg rounded-lg py-2 min-w-[260px] border border-gray-100">
                        {item.dropdown.map((dropdownItem) => (
                          <Link
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-slate-700 hover:bg-navy-50 hover:text-navy transition-colors"
                          >
                            {dropdownItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href!}
                    className="text-slate-700 hover:text-navy font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Free Assessment Button & Phone */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/free-assessment"
              className="bg-green text-white px-6 py-2.5 rounded-lg font-semibold hover:bg-green/90 transition-colors shadow-sm"
            >
              Free Assessment
            </Link>
            <div className="flex items-center gap-2 text-navy">
              <Phone className="w-5 h-5" />
              <div className="flex flex-col">
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="font-semibold hover:text-green transition-colors text-sm"
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
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.dropdown ? (
                    <>
                      <button
                        onClick={() => toggleMobileDropdown(item.label)}
                        className="w-full flex items-center justify-between text-slate-700 hover:text-navy font-medium py-2 transition-colors"
                        aria-expanded={mobileOpenDropdown === item.label}
                      >
                        {item.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            mobileOpenDropdown === item.label
                              ? "rotate-180"
                              : ""
                          }`}
                        />
                      </button>
                      {mobileOpenDropdown === item.label && (
                        <div className="pl-4 flex flex-col gap-2 mt-2 mb-2">
                          {item.dropdown.map((dropdownItem) => (
                            <Link
                              key={dropdownItem.href}
                              href={dropdownItem.href}
                              className="text-slate-600 hover:text-navy py-1.5 transition-colors text-sm"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {dropdownItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href!}
                      className="text-slate-700 hover:text-navy font-medium py-2 transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}

              {/* Mobile Free Assessment Button */}
              <Link
                href="/free-assessment"
                className="bg-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green/90 transition-colors text-center mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Free Assessment
              </Link>

              {/* Mobile Phone */}
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
