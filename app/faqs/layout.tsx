import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Gold Coast Accommodation FAQs",
  description: "Answers to common questions about Gold Coast stays and booking direct.",
  alternates: { canonical: "https://goldcoast-accom.com.au/faqs" },
};

export default function FaqLayout({ children }: { children: ReactNode }) {
  return children;
}
