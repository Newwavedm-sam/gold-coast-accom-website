import { IconHeart, IconHome, IconMapPin, IconSparkles, IconUsers } from "@tabler/icons-react";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";

export default function AboutPage(){return <main>
  <SiteHeader/>
  <section className="about-hero"><div><p className="script">Local by nature.</p><h1>A more personal way<br/>to stay on the coast.</h1><p>Thoughtful homes, genuine local support and Gold Coast experiences worth remembering.</p></div></section>

  <section className="about-intro">
    <div><p className="eyebrow">Our story</p><p className="script teal">It started with one Gold Coast home.</p><h2>Built from the guest experience up.</h2></div>
    <div><p>Gold Coast Accom is the guest-facing brand from the local team behind Airbnb Management Gold Coast. Co-owners Ryan and Rachel began with their own investment property and a simple belief: short stays could feel more personal, responsive and considered.</p><p>What started with one property grew into a carefully managed collection of homes, supported by local people who know the coast and care about the small details. Today, we bring accommodation, experiences and concierge services together so guests can spend less time organising and more time enjoying their stay.</p></div>
  </section>

  <section className="about-local">
    <div className="about-local-image"><p className="script">Right here,<br/>when it matters.</p></div>
    <div className="about-local-copy"><p className="eyebrow">Genuinely local</p><h2>Close to our homes.<br/>Connected to the coast.</h2><p>Our operations are centred around Palm Beach and intentionally focused within a 40-kilometre radius. That keeps our team close to the properties, the people and the places we recommend.</p><div className="about-stat"><strong>40km</strong><span>Our focused local service area around the Palm Beach office.</span></div><div className="about-stat"><strong>Local</strong><span>On-the-ground support and a trusted network of Gold Coast partners.</span></div></div>
  </section>

  <section className="about-values">
    <div className="about-heading"><p className="eyebrow">What guides us</p><h2>Premium stays.<br/>Human hospitality.</h2><p>Our approach is deliberately personal: a considered collection, responsive support and recommendations grounded in real local knowledge.</p></div>
    <div className="values-grid"><article><span><IconHeart/></span><h3>Warm, not corporate</h3><p>Helpful communication from real people who understand your stay.</p></article><article><span><IconHome/></span><h3>Carefully considered</h3><p>Homes and details chosen for comfort, quality and a strong sense of place.</p></article><article><span><IconMapPin/></span><h3>Local at heart</h3><p>First-hand Gold Coast knowledge, from neighbourhoods to trusted partners.</p></article><article><span><IconSparkles/></span><h3>More than a booking</h3><p>Accommodation, experiences and concierge support brought together.</p></article></div>
  </section>

  <section className="about-team">
    <div><p className="eyebrow">The people behind your stay</p><p className="script teal">A small team with a lot of local know-how.</p><h2>Hospitality takes a team.</h2><p>Ryan and Rachel lead day-to-day operations, supported by specialists across guest experience, marketing and technology, interiors, finance and photography—plus a network of trusted cleaners, maintenance professionals and local service partners.</p><a className="button secondary" href="/contact">Meet us through an enquiry</a></div>
    <div className="about-team-notes"><article><IconUsers/><h3>Hands-on leadership</h3><p>The owners remain close to the day-to-day guest and property experience.</p></article><article><IconSparkles/><h3>Trusted specialists</h3><p>Local expertise across styling, photography, maintenance and memorable extras.</p></article></div>
  </section>

  <section className="about-image-band"><div><p className="script">Moments that stay<br/>with you forever.</p><p>Live. Stay. Explore.</p><a className="button primary" href="/properties">Find your stay</a></div></section>
  <SiteFooter/>
</main>}
