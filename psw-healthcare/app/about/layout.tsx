import type { Metadata } from "next";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

export const metadata: Metadata = {
  title: "About R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
  description:
    "Learn about R&M Prestige Care, a trusted Calgary provider of compassionate home care and reliable healthcare staffing. Our mission is to support families and facilities with dignity and professionalism.",
  alternates: {
    canonical: `${siteUrl}/about`,
  },
  openGraph: {
    title: "About R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
    description:
      "Learn about R&M Prestige Care, a trusted Calgary provider of compassionate home care and reliable healthcare staffing. Our mission is to support families and facilities with dignity and professionalism.",
    url: `${siteUrl}/about`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About R&M Prestige Care | Calgary Home Care & Healthcare Staffing",
    description:
      "Learn about R&M Prestige Care, a trusted Calgary provider of compassionate home care and reliable healthcare staffing.",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
