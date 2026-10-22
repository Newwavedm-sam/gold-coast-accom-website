import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import LandingHero from "../components/LandingHero";
import LandingFooter from "../components/LandingFooter";
import PropertyListingsEmbed from "../components/PropertyListingsEmbed";
import "../components/landing-page.css";

export const metadata: Metadata = {
  title: "Gold Coast Accommodation | Gold Coast Accom",
  description: "Find your Gold Coast accommodation. Explore local homes, check dates and book your next coastal stay with Gold Coast Accom.",
  alternates: { canonical: "https://goldcoast-accom.com.au/" },
  openGraph: {
    title: "Gold Coast Accommodation | Gold Coast Accom",
    description: "A place by the water. A little more time to yourself. Discover your next Gold Coast stay.",
    url: "https://goldcoast-accom.com.au/", type: "website", locale: "en_AU",
    images: [{ url: "https://goldcoast-accom.com.au/assets/broadbeach-coast.jpg", alt: "Gold Coast beach and coastline" }],
  },
};

const places = [
  { name: "Palm Beach", image: "/assets/palm-beach-coast.webp", href: "/locations/palm-beach", caption: "Beach mornings. Creek-side afternoons." },
  { name: "Broadbeach", image: "/assets/broadbeach-coast.jpg", href: "/locations/broadbeach", caption: "A little beach. A little city." },
  { name: "Burleigh Heads", image: "/assets/burleigh-coast.jpg", href: "/locations/burleigh-heads", caption: "The headland. The village. The coast." },
];
const faqs = [
  { question: "How do I find a stay for my dates?", answer: "Choose your dates and guest count in the property search. Open a listing to view its photos, amenities, availability and booking details. Pricing and availability depend on the property and dates you select." },
  { question: "Can you help us choose the right location?", answer: "Yes. Tell our local team what brings you to the Gold Coast, your dates and what matters most. We can help you compare locations and property options before you book." },
  { question: "What should I check before booking?", answer: "Review the property's location, guest capacity, bedroom layout, amenities and booking terms. Check any particular requirements such as parking, pets or arrival arrangements with our team before booking." },
  { question: "Are you visiting for an event or with a group?", answer: "Share your event dates, guest count and preferred room arrangements with our team. We can help you review suitable options and confirm the details of your stay." },
];

export default function HomePage() {
  return <div className="landing-page lp-home">
    <a className="lp-skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <LandingHero home title="Gold Coast accommodation." location="Gold Coast" caption="The coast, at your own pace." description="A place by the water. A little more time to yourself. Find a home for your next Gold Coast stay." image="/assets/broadbeach-coast.jpg" imageAlt="Broadbeach coastline and beach on the Gold Coast" action="Find your next stay" />
      <section className="lp-section lp-stays" id="stays" aria-labelledby="stays-title">
        <div className="lp-section-heading"><h2 id="stays-title">Somewhere you’ll want to stay.</h2><p>Explore the homes. Pick your dates.</p></div>
        <PropertyListingsEmbed location="Gold Coast" />
      </section>
      <section className="lp-section lp-places" aria-labelledby="places-title">
        <div className="lp-section-heading"><h2 id="places-title">Find your part of the coast.</h2><a className="lp-inline-link" href="/locations">All locations ↗</a></div>
        <div className="lp-place-grid">{places.map(place => <a key={place.href} href={place.href}><img src={place.image} alt={`${place.name} coastline, Gold Coast`} width="800" height="600" loading="lazy" /><div><h3>{place.name}</h3><span aria-hidden="true">↗</span></div><p>{place.caption}</p></a>)}</div>
      </section>
      <section className="lp-section lp-information" aria-labelledby="about-title">
        <div className="lp-location-copy"><p className="lp-label">A stay with local perspective</p><h2 id="about-title">Make yourself at home.</h2><p>From a beach-first break to a visit built around an event, start with the stay that fits your plans. Gold Coast Accom brings together local homes and a team who know the coast.</p><p>Need a hand choosing? Tell us what you have in mind.</p><div className="lp-related"><a href="mailto:info@abmgc.com.au">Talk to our team ↗</a><a href="/accommodation-near-gc-convention-centre">Convention Centre stays ↗</a><a href="/experiences">Local experiences ↗</a></div></div>
        <div className="lp-faqs" aria-label="Questions about Gold Coast accommodation">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
    <LandingFooter />
  </div>;
}
