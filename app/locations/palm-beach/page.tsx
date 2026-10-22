import type { Metadata } from "next";
import { IconBeach, IconRipple, IconSun } from "@tabler/icons-react";
import SiteHeader from "../../../components/SiteHeader";
import BrandLogo from "../../../components/BrandLogo";
import PropertyListingsEmbed from "../../../components/PropertyListingsEmbed";
import "./palm-beach.css";

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
  return <div className="pb-page">
    <a className="pb-skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="pb-hero" aria-labelledby="pb-title">
        <img className="pb-hero-photo" src="/assets/palm-beach-coast.webp" alt="Palm Beach coastline, Gold Coast" fetchPriority="high" width="1600" height="1067" />
        <div className="pb-hero-shade" />
        <div className="pb-hero-content">
          <nav className="pb-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><a href="/locations">Locations</a><span aria-hidden="true">/</span><span aria-current="page">Palm Beach</span></nav>
          <p className="pb-script">Find your part of the coast.</p>
          <h1 id="pb-title">Palm Beach<br />accommodation.</h1>
          <p className="pb-hero-intro">Beach mornings. Creek-side afternoons.<br />A little more room to slow down.</p>
          <a className="button primary" href="#stays">Find your Palm Beach stay <span aria-hidden="true">↓</span></a>
        </div>
        <span className="pb-hero-label">Palm Beach · Southern Gold Coast</span>
      </section>

      <nav className="pb-section-nav" aria-label="On this page"><a href="#neighbourhood">The neighbourhood</a><a href="#stays">Find a stay</a><a href="#explore">Explore Palm Beach</a><a href="#faqs">Your questions</a></nav>

      <section className="pb-section pb-intro" id="neighbourhood" aria-labelledby="pb-intro-title">
        <div><p className="eyebrow">Stay local. Feel at home.</p><h2 id="pb-intro-title">A stretch of coast<br />to call your own.</h2></div>
        <div className="pb-intro-copy"><p>Set between Tallebudgera Creek and Currumbin Creek, Palm Beach brings together a long ocean beach and a neighbourhood you can settle into.</p><p>Make time for a coffee, a walk along the sand or an afternoon by the creek. Our Palm Beach stays give you a base to explore the southern Gold Coast at your own pace.</p><p className="pb-script pb-intro-signoff">Live. Stay. Explore.</p></div>
      </section>

      <section className="pb-stays" id="stays" aria-labelledby="pb-stays-title">
        <div className="pb-section pb-stays-inner">
          <div className="pb-stays-heading"><div><p className="eyebrow">Your next coastal escape</p><h2 id="pb-stays-title">Stay in Palm Beach.</h2></div><p>Find the space that fits your holiday.<br />Explore properties, dates and availability below.</p></div>
          <PropertyListingsEmbed tag="palm beach" location="Palm Beach" />
        </div>
      </section>

      <section className="pb-section pb-explore" id="explore" aria-labelledby="pb-explore-title">
        <div className="pb-explore-heading"><p className="pb-script">A few local favourites.</p><h2 id="pb-explore-title">Make a day of it.</h2><p>No packed itinerary required. Start with the places that give Palm Beach its character.</p></div>
        <div className="pb-guide-grid">
          <article><IconBeach aria-hidden="true" stroke={1.25} /><p className="eyebrow">Ocean side</p><h3>Palm Beach</h3><p>Leave time for the long stretch of sand that gives the suburb its name. A beach walk is a simple way to get your bearings and settle into the coastal pace.</p></article>
          <article><IconRipple aria-hidden="true" stroke={1.25} /><p className="eyebrow">At the northern end</p><h3>Tallebudgera Creek</h3><p>The creek sits between Palm Beach and Burleigh Head National Park. Bring a picnic, enjoy the waterside setting or head across the bridge to explore the headland.</p><a href="https://experiencegoldcoast.com/places-to-go/southern-gold-coast/things-to-do/tallebudgera-creek-au0097422" target="_blank" rel="noopener noreferrer">Explore the creek <span aria-hidden="true">↗</span><span className="pb-sr-only"> (opens in a new tab)</span></a></article>
          <article><IconSun aria-hidden="true" stroke={1.25} /><p className="eyebrow">At the southern end</p><h3>Currumbin Creek</h3><p>Take a change of scene at the southern end of Palm Beach. The creek and nearby parklands make another stop to work into your day, with the ocean beach close by.</p></article>
        </div>
      </section>

      <section className="pb-faq-wrap" id="faqs" aria-labelledby="pb-faq-title"><div className="pb-section pb-faq-grid"><div><p className="eyebrow">Before you pack</p><h2 id="pb-faq-title">A few things<br />worth knowing.</h2><p>Still choosing your stay?<br /><a href="/contact">We’re here to help <span aria-hidden="true">↗</span></a></p></div><div className="pb-faqs">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="pb-section pb-next"><div><p className="eyebrow">Keep exploring</p><h2>Another part of the coast?</h2></div><div className="pb-nearby-links"><a href="/locations/burleigh-heads">Burleigh Heads <span aria-hidden="true">↗</span></a><a href="/locations/broadbeach">Broadbeach <span aria-hidden="true">↗</span></a><a href="/locations/bilinga">Bilinga <span aria-hidden="true">↗</span></a><a href="/locations">All locations <span aria-hidden="true">→</span></a></div></section>
    </main>
    <footer className="pb-footer"><div><a href="/" aria-label="Gold Coast Accom home"><BrandLogo /></a><p>Boutique stays and memorable local experiences<br />on the Gold Coast.</p></div><nav aria-label="Footer navigation"><a href="/contact">Contact our team</a><a href="https://www.instagram.com/goldcoastaccom/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="/privacy">Privacy</a><a href="/booking-policies">Booking policies</a></nav><div className="pb-footer-bottom">© 2026 Gold Coast Accom</div></footer>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
  </div>;
}
