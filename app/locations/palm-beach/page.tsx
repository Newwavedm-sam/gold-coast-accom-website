import type { Metadata } from "next";
import SiteHeader from "../../../components/SiteHeader";
import LandingFooter from "../../../components/LandingFooter";
import LandingHero from "../../../components/LandingHero";
import PropertyListingsEmbed from "../../../components/PropertyListingsEmbed";
import { bookingCollections } from "../../../lib/booking-collections";
import "../../../components/landing-page.css";

const canonical = "https://goldcoast-accom.com.au/locations/palm-beach";
const description = "Find your Palm Beach accommodation on the Gold Coast. Explore local stays, check dates and discover the beach, creeks and neighbourhood with Gold Coast Accom.";
export const metadata: Metadata = {
  title: "Palm Beach Accommodation Gold Coast | Gold Coast Accom",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Palm Beach accommodation, your way | Gold Coast Accom",
    description, url: canonical, type: "website", locale: "en_AU",
    images: [{ url: "https://goldcoast-accom.com.au/assets/palm-beach-coast.webp", alt: "Palm Beach coastline on the Gold Coast" }],
  },
};

const faqs = [
  { question: "Where is Palm Beach on the Gold Coast?", answer: "Palm Beach is on the southern Gold Coast, between Tallebudgera Creek to the north and Currumbin Creek to the south. It is a good base for exploring the coastline around Burleigh Heads and Currumbin." },
  { question: "How do I find a Palm Beach stay for my dates?", answer: "Use the accommodation search on this page to choose your dates and number of guests. Open a property to view its details and available dates. Your selected dates determine availability and the final price." },
  { question: "Are all of the Palm Beach properties beachfront?", answer: "Locations vary. Check the description, photos and location information for each property to find out whether it is beachfront or set back from the beach. Our team can help if being right on the water is essential." },
  { question: "Can I find accommodation for a family or group?", answer: "Check each property's guest capacity, bedroom layout and house rules before booking. Choose the guest count in the search to narrow your options, and contact our team if you need help matching a stay to your group." },
  { question: "Where can I check parking, pets and cancellation terms?", answer: "Amenities and policies vary between properties. Review the individual listing and the terms shown during booking. If a detail is important to your stay, confirm it with our team before you book." },
];

export default function PalmBeachPage() {
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://goldcoast-accom.com.au/" },
      { "@type": "ListItem", position: 2, name: "Locations", item: "https://goldcoast-accom.com.au/locations" },
      { "@type": "ListItem", position: 3, name: "Palm Beach", item: canonical },
    ],
  };
  return <div className="landing-page">
    <a className="lp-skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <LandingHero title="Palm Beach accommodation." location="Palm Beach" description="A place by the water. Space to settle in. Find your stay on the southern Gold Coast." image="/assets/palm-beach-coast.webp" imageAlt="Palm Beach coastline on the Gold Coast" action="Explore the stays" />
      <section className="lp-section lp-stays" id="stays" aria-labelledby="stays-title">
        <div className="lp-section-heading"><h2 id="stays-title">Find your Palm Beach stay.</h2><p>Choose your dates. Make yourself at home.</p></div>
        <PropertyListingsEmbed tag={bookingCollections.palmBeach.tag} location="Palm Beach" />
      </section>
      <section className="lp-section lp-information" aria-labelledby="location-title">
        <div className="lp-location-copy"><p className="lp-label">A little local knowledge</p><h2 id="location-title">Get to know Palm Beach.</h2><p>Between Tallebudgera Creek and Currumbin Creek, Palm Beach offers a long ocean beach and an easy base for the southern Gold Coast.</p><p>Make time for a beach walk, a coffee in the neighbourhood or an afternoon by the creek. Choose your pace.</p><div className="lp-related"><a href="/locations/burleigh-heads">Burleigh Heads ↗</a><a href="/locations/broadbeach">Broadbeach ↗</a><a href="/locations">All locations ↗</a></div></div>
        <div className="lp-faqs" aria-label="Questions about Palm Beach stays">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
    <LandingFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
  </div>;
}
