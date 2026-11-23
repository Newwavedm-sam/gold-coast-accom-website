import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import PropertyListingsEmbed from "../../components/PropertyListingsEmbed";

export const metadata: Metadata = {
  title: "Browse Gold Coast Holiday Accommodation | Gold Coast Accom",
  description: "Browse our Gold Coast stays and check current rates and availability with our booking provider.",
  alternates: { canonical: "https://goldcoast-accom.com.au/properties" },
};

export default function PropertiesPage() {
  return (
    <main>
      <SiteHeader />
      <section className="listing-hero">
        <p className="eyebrow">Gold Coast holiday homes</p>
        <h1>Find your place<br />on the coast.</h1>
        <p>Check live rates and availability with our booking provider.</p>
      </section>
      <section className="results-section" id="filters" aria-label="Browse properties">
        <PropertyListingsEmbed location="Gold Coast" />
      </section>
      <SiteFooter />
    </main>
  );
}
