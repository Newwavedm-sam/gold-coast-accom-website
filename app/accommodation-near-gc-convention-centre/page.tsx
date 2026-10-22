import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import LandingFooter from "../../components/LandingFooter";
import LandingHero from "../../components/LandingHero";
import PropertyListingsEmbed from "../../components/PropertyListingsEmbed";
import { bookingCollections } from "../../lib/booking-collections";
import "../../components/landing-page.css";

const canonical = "https://goldcoast-accom.com.au/accommodation-near-gc-convention-centre";
const description = "Planning an event at GCCEC? Find a Gold Coast accommodation base for your conference or exhibition, with local guidance on Broadbeach, transport and group stays.";
const enquiryEmail = "mailto:info@abmgc.com.au?subject=Accommodation%20near%20Gold%20Coast%20Convention%20Centre";
const faqs = [
  { question: "Where is the Gold Coast Convention and Exhibition Centre?", answer: "GCCEC is at 2684–2690 Gold Coast Highway, Broadbeach, Queensland 4218. Check your event information for the correct entrance, registration point and arrival time." },
  { question: "Which area should I stay in for an event at GCCEC?", answer: "Start with Broadbeach if being based in the venue's neighbourhood is your priority. Compare the exact property location with your event entrance and your transport needs before booking. Our team can help you choose between the available options." },
  { question: "Can I walk to the Convention Centre from my accommodation?", answer: "That depends on the individual property and the entrance you need. Ask us to confirm the route for your shortlisted stay. We do not assume that every Gold Coast property is within walking distance of GCCEC." },
  { question: "Can our team or conference group stay together?", answer: "Tell us your event dates, guest count and preferred room arrangements. We can help you review suitable options. Capacity, property availability and any group arrangements need confirmation before a booking is made." },
  { question: "Is there public transport to GCCEC?", answer: "The venue identifies Broadbeach North as its nearby G:link tram stop, across Gold Coast Highway from its main entrance. Check the current journey planner and your event details when arranging your trip." },
  { question: "Can I arrive early or check out after my event?", answer: "Check-in and check-out times vary by property. Early arrival, late departure and luggage arrangements are not guaranteed. Confirm any requirements with our team before making your booking." },
];

export const metadata: Metadata = {
  title: "Accommodation Near Gold Coast Convention Centre | Gold Coast Accom",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Here for the event. Stay for the coast. | Gold Coast Accom",
    description, url: canonical, type: "website", locale: "en_AU",
    images: [{ url: "https://goldcoast-accom.com.au/assets/broadbeach-coast.jpg", alt: "Broadbeach coastline on the Gold Coast" }],
  },
};

export default function ConventionCentrePage() {
  const tag = bookingCollections.conventionCentre.tag;
  const breadcrumb = {
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://goldcoast-accom.com.au/" },
      { "@type": "ListItem", position: 2, name: "Accommodation near GCCEC", item: canonical },
    ],
  };

  return <div className="landing-page">
    <a className="lp-skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <LandingHero title="Accommodation near Gold Coast Convention Centre." location="Broadbeach" description="Here for the event. Stay for the coast. Let our local team help you find the right base for your visit." image="/assets/broadbeach-coast.jpg" imageAlt="Broadbeach beach and coastline, Gold Coast" action={tag ? "Explore event stays" : "Plan your event stay"} />
      <section className="lp-section lp-stays" id="stays" aria-labelledby="stays-title">
        {tag ? <><div className="lp-section-heading"><h2 id="stays-title">Find your event stay.</h2><p>Explore dates and properties for your visit.</p></div><PropertyListingsEmbed tag={tag} location="Gold Coast Convention Centre" /></> : <div className="lp-enquiry"><div><p className="lp-label">Your stay, considered</p><h2 id="stays-title">Tell us what brings you here.</h2><p>Share your event dates, guest count and what matters to you. We’ll help you check suitable properties and their location before you book.</p></div><div className="lp-enquiry-actions"><a className="lp-button" href={enquiryEmail}>Email your stay request <span aria-hidden="true">↗</span></a><a className="lp-phone" href="tel:+61400721439">0400 721 439</a></div></div>}
      </section>
      <section className="lp-section lp-information" aria-labelledby="venue-title">
        <div className="lp-location-copy"><p className="lp-label">Before your event</p><h2 id="venue-title">A base in Broadbeach.</h2><p>GCCEC is at 2684–2690 Gold Coast Highway, Broadbeach. Broadbeach North tram station is across the road from the venue’s main entrance.</p><p>Check the exact route from your chosen property and your event’s arrival instructions. Our team can help you compare the options.</p><div className="lp-related"><a href="https://www.gccec.com.au/contact/" target="_blank" rel="noopener noreferrer">Official venue information ↗<span className="pb-sr-only"> (opens in a new tab)</span></a><a href="/locations/broadbeach">Explore Broadbeach ↗</a></div></div>
        <div className="lp-faqs" aria-label="Questions about Convention Centre stays">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div>
      </section>
    </main>
    <LandingFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
  </div>;
}
