/**
 * Central site configuration
 * All company information, contact details, and branding constants
 */

export const siteConfig = {
  name: "R&M Prestige Care",
  tagline: "Calgary Home Care & Healthcare Staffing Services",
  description:
    "R&M Prestige Care is a Calgary-based home care and healthcare staffing provider serving families, seniors, individuals with disabilities, and healthcare facilities.",
  foundingYear: "2015",

  contact: {
    phone: "(403) 555-0123",
    phoneRaw: "+14035550123",
    email: "info@rmprestigecare.ca",
    address: {
      street: "123 Main Street SW",
      city: "Calgary",
      province: "AB",
      postalCode: "T2P 1A1",
      country: "Canada",
    },
    serviceArea: "Calgary, AB and surrounding areas",
  },

  social: {
    facebook: "https://facebook.com/rmprestigecare",
    linkedin: "https://linkedin.com/company/rmprestigecare",
    instagram: "https://instagram.com/rmprestigecare",
  },

  urls: {
    home: "/",
    homeCare: "/home-care-calgary",
    forFacilities: "/healthcare-staffing-calgary",
    about: "/about-us",
    resources: "/resources",
    contact: "/contact",
    privacyPolicy: "/privacy-policy",
    terms: "/terms-of-service",
  },
} as const;
