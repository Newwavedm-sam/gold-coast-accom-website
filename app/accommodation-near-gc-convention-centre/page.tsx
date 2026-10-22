import type { Metadata } from "next";
import { IconCalendarEvent, IconMapPin, IconTrain, IconUsers } from "@tabler/icons-react";
import SiteHeader from "../../components/SiteHeader";
import LandingFooter from "../../components/LandingFooter";
import PropertyListingsEmbed from "../../components/PropertyListingsEmbed";
import { bookingCollections } from "../../lib/booking-collections";
import "../../components/landing-page.css";
import "./convention-centre.css";

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

  return <div className="pb-page cc-page">
    <a className="pb-skip-link" href="#main-content">Skip to content</a>
    <SiteHeader />
    <main id="main-content">
      <section className="cc-hero" aria-labelledby="cc-title">
        <div className="cc-hero-copy">
          <nav className="cc-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Convention Centre stays</span></nav>
          <p className="eyebrow">Broadbeach · Conferences & events</p>
          <h1 id="cc-title">Accommodation near Gold Coast Convention Centre.</h1>
          <p className="pb-script">Here for the event.<br />Stay for the coast.</p>
          <p className="cc-hero-intro">Find a base for conference days, exhibition weekends and a little time by the water. Let our local team help you plan your stay around GCCEC.</p>
          <div className="cc-actions"><a className="button secondary" href="#stays">{tag ? "Find an event stay" : "Find a stay for your event"}<span aria-hidden="true">↓</span></a><a href="tel:+61400721439">Call our local team</a></div>
        </div>
        <figure className="cc-hero-image"><img src="/assets/broadbeach-coast.jpg" alt="Broadbeach beach and coastline, Gold Coast" width="1600" height="1067" fetchPriority="high" /><figcaption>Broadbeach, Gold Coast</figcaption></figure>
      </section>

      <div className="cc-venue-strip" aria-label="Planning your venue visit">
        <div><IconMapPin aria-hidden="true" stroke={1.4} /><span><strong>Your venue</strong>GCCEC · Broadbeach</span></div>
        <div><IconTrain aria-hidden="true" stroke={1.4} /><span><strong>Nearby tram stop</strong>Broadbeach North</span></div>
        <div><IconUsers aria-hidden="true" stroke={1.4} /><span><strong>Travelling together?</strong>Ask about your group</span></div>
      </div>

      <section className="pb-stays cc-stays" id="stays" aria-labelledby="cc-stays-title"><div className="pb-section pb-stays-inner">
        <div className="pb-stays-heading"><div><p className="eyebrow">Start with your dates</p><h2 id="cc-stays-title">Make the stay<br />part of the plan.</h2></div><p>Your event, your group, your pace.<br />We’ll help you narrow down the options.</p></div>
        {tag ? <PropertyListingsEmbed tag={tag} location="Gold Coast Convention Centre" /> : <div className="cc-enquiry-panel">
          <div className="cc-enquiry-copy"><IconCalendarEvent aria-hidden="true" stroke={1.3} /><h3>Let’s find your event stay.</h3><p>Send your dates and what matters most. Our team can help you check suitable properties and their location before you book.</p><div className="cc-actions"><a className="button secondary" href={enquiryEmail}>Email your stay request <span aria-hidden="true">↗</span></a><a href="tel:+61400721439">0400 721 439</a></div></div>
          <div className="cc-request-details"><p className="eyebrow">A few details to get started</p><ol><li><span>01</span><div><strong>Your event & dates</strong><p>Include arrival and departure, plus any time you’d like on the coast.</p></div></li><li><span>02</span><div><strong>Guests & bedrooms</strong><p>Tell us the group size and room arrangements you need.</p></div></li><li><span>03</span><div><strong>Your priorities</strong><p>Walking distance, parking, a workspace or a particular budget? Let us know.</p></div></li></ol></div>
        </div>}
      </div></section>

      <section className="pb-section cc-plan" aria-labelledby="cc-plan-title">
        <div className="cc-plan-copy"><p className="eyebrow">Keep the practical things simple</p><h2 id="cc-plan-title">A smoother<br />conference day.</h2><p>When your plans revolve around the Convention Centre, the details of your stay matter. Check your event schedule, the exact property location and the facilities you’ll use.</p><p>For longer visits or a team travelling together, share your requirements early so we can help you compare the options.</p></div>
        <div className="cc-plan-list"><article><span>01</span><div><h3>Check the route</h3><p>Use the exact property address and your event entrance when comparing walking or travel options.</p></div></article><article><span>02</span><div><h3>Match the space to your group</h3><p>Review bedroom layouts, guest capacity and the amenities listed for your chosen property.</p></div></article><article><span>03</span><div><h3>Plan around the event</h3><p>Allow for arrival, registration and departure. Ask about check-in arrangements before booking.</p></div></article></div>
      </section>

      <section className="cc-venue" aria-labelledby="cc-venue-title"><div className="pb-section cc-venue-grid"><div><p className="pb-script">Meet you in Broadbeach.</p><h2 id="cc-venue-title">Know where<br />you’re heading.</h2><p>GCCEC sits on Gold Coast Highway in Broadbeach. The venue’s official visitor information identifies Broadbeach North tram station across the road from the main entrance.</p><p>Check current transport information and your event’s arrival instructions before travelling.</p></div><aside className="cc-address-card" aria-label="Venue address"><IconMapPin aria-hidden="true" stroke={1.2} /><h3>Gold Coast Convention<br />and Exhibition Centre</h3><address>2684–2690 Gold Coast Highway<br />Broadbeach, Queensland 4218</address><a href="https://www.gccec.com.au/contact/" target="_blank" rel="noopener noreferrer">Official venue & transport information <span aria-hidden="true">↗</span><span className="pb-sr-only"> (opens in a new tab)</span></a></aside></div></section>

      <section className="pb-faq-wrap" id="faqs" aria-labelledby="cc-faq-title"><div className="pb-section pb-faq-grid"><div><p className="eyebrow">Before your event</p><h2 id="cc-faq-title">Your stay,<br />thought through.</h2><p>Have a particular requirement?<br /><a href={enquiryEmail}>Ask our local team <span aria-hidden="true">↗</span></a></p></div><div className="pb-faqs">{faqs.map(({ question, answer }) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section className="pb-section cc-final"><div><p className="eyebrow">Make room for a little more</p><h2>Conference done.<br />Coast calling.</h2><p>Explore Broadbeach, add another night or ask about a local experience around your event.</p></div><div className="cc-final-links"><a href="/locations/broadbeach">Discover Broadbeach <span aria-hidden="true">↗</span></a><a href="/concierge">Explore concierge experiences <span aria-hidden="true">↗</span></a><a href="#stays">Plan your event stay <span aria-hidden="true">↑</span></a></div></section>
    </main>
    <LandingFooter />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb).replace(/</g, "\\u003c") }} />
  </div>;
}
