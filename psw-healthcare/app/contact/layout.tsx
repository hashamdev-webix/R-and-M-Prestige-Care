import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "Contact R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
  description:
    "Contact R&M Prestige Care for home care services or healthcare staffing support in Calgary. Our team is ready to help families, seniors, and healthcare facilities. Call us 24/7.",
  alternates: {
    canonical: `${siteUrl}/contact`,
  },
  openGraph: {
    title:
      "Contact R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
    description:
      "Contact R&M Prestige Care for home care services or healthcare staffing support in Calgary. Our team is ready to help families, seniors, and healthcare facilities. Call us 24/7.",
    url: `${siteUrl}/contact`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
    description:
      "Contact R&M Prestige Care for home care services or healthcare staffing support in Calgary. Available 24/7.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
