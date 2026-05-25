import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Free In-Home Care Assessment in Calgary | R&M Prestige Care",
  description:
    "Request a free in-home care assessment from R&M Prestige Care. Our team will review your needs and recommend the right care option at no cost. Serving Calgary and surrounding areas.",
};

export default function FreeAssessmentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
