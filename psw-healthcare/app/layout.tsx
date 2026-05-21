import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `Calgary Home Care & Healthcare Staffing Services | ${siteConfig.name}`,
    template: `%s | ${siteConfig.name}`,
  },
  description:
    "PSW provides compassionate Calgary home care for seniors and reliable healthcare staffing for facilities. Certified Healthcare Aides, personal care, dementia support, and 24/7 service.",
  keywords: [
    "Calgary home care",
    "healthcare staffing Calgary",
    "certified Healthcare Aides",
    "senior care Calgary",
    "dementia care",
    "personal care assistance",
    "home care services",
    "healthcare staffing solutions",
    "Calgary caregivers",
    "assisted living staffing",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteUrl,
    siteName: siteConfig.name,
    title: `Calgary Home Care & Healthcare Staffing Services | ${siteConfig.name}`,
    description:
      "PSW provides compassionate Calgary home care for seniors and reliable healthcare staffing for facilities. Certified Healthcare Aides, personal care, dementia support, and 24/7 service.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Calgary Home Care & Healthcare Staffing`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Calgary Home Care & Healthcare Staffing Services | ${siteConfig.name}`,
    description:
      "Compassionate Calgary home care for seniors and reliable healthcare staffing for facilities.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // JSON-LD Structured Data
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${siteUrl}/#organization`,
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    image: `${siteUrl}/og-image.jpg`,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.province,
      postalCode: siteConfig.contact.address.postalCode,
      addressCountry: siteConfig.contact.address.country,
    },
    areaServed: {
      "@type": "City",
      name: "Calgary",
      "@id": "https://en.wikipedia.org/wiki/Calgary",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    priceRange: "$$",
    foundingDate: siteConfig.foundingYear,
    slogan: siteConfig.tagline,
  };

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body className="font-sans">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
