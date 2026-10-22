import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "../components/SiteHeader";
import BrandLogo from "../components/BrandLogo";
import PropertyListingsEmbed from "../components/PropertyListingsEmbed";
import "../components/landing-page.css";
import "../components/homepage-restored.css";

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
  {name: "Palm Beach", image: "/assets/palm-beach-coast.webp", href: "/locations/palm-beach", copy: "Relaxed, local and close to the water."},
  {name: "Broadbeach", image: "/assets/broadbeach-coast.jpg", href: "/locations/broadbeach", copy: "Beach, dining and city energy."},
  {name: "Burleigh Heads", image: "/assets/burleigh-coast.jpg", href: "/locations/burleigh-heads", copy: "The headland. The village. The coast."},
];
const experiences = [
  {name: "Adventure drives", image: "/assets/adventure-drive.jpg", copy: "A different way to explore the coast."},
  {name: "Days on the water", image: "/assets/yacht-experience.png", copy: "Make a little room for the Broadwater."},
  {name: "Private dining", image: "/assets/private-dining.png", copy: "Time together, around the table."},
];

export default function HomePage() {
 return <div className="gca-home">
  <a className="gh-skip" href="#main-content">Skip to content</a><SiteHeader />
  <main id="main-content">
   <section className="gh-hero" aria-labelledby="home-title">
    <Image src="/assets/broadbeach-coast.jpg" alt="Broadbeach coastline on the Gold Coast" fill sizes="100vw" preload />
    <div className="gh-hero-copy"><p className="gh-script">Live. Stay. Explore.</p><h1 id="home-title">Your Gold Coast stay,<br />thoughtfully curated.</h1><p>Beautiful holiday homes, memorable local experiences and genuine Gold Coast hospitality—all brought together for an easier, more personal stay.</p><div className="gh-actions"><a className="gh-button gh-button-light" href="#stays">Find your stay <span aria-hidden="true">↗</span></a><a className="gh-link" href="#experiences">Explore experiences <span aria-hidden="true">↗</span></a></div></div>
    <p className="gh-hero-note">Play. Stay. Connect.</p>
   </section>
   <div className="gh-booking"><div className="gh-booking-inner"><div><p className="gh-eyebrow">Your next Gold Coast stay</p><p>Pick your dates. Find your place. Book directly.</p></div><a className="gh-button" href="#stays">Search available stays <span aria-hidden="true">↓</span></a></div></div>
   <section className="gh-section gh-stays" id="stays" aria-labelledby="stays-title">
    <div className="gh-section-heading"><div><p className="gh-script">Do the Gold Coast your way.</p><h2 id="stays-title">A stay that feels<br />easy from the start.</h2></div><p>Whether you’re planning a beachfront escape, a family holiday or time away with friends, start with the home that fits your plans. Explore the properties, choose your dates and ask our local team for a hand.</p></div>
    <nav className="gh-collections" aria-label="Explore stay collections"><Link href="/beachfront-accommodation-gold-coast">Beachfront stays ↗</Link><Link href="/luxury-accommodation-gold-coast">Luxury stays ↗</Link><Link href="/corporate-accomodation">Corporate stays ↗</Link></nav>
    <PropertyListingsEmbed location="Gold Coast" />
   </section>
   <section className="gh-section gh-locations" aria-labelledby="locations-title"><div className="gh-section-heading"><div><p className="gh-eyebrow">Find your part of the coast</p><h2 id="locations-title">Stay close to what you love.</h2></div><p>Every neighbourhood has its own rhythm. Find your base for beach mornings, dinner plans and time to unwind.</p></div><div className="gh-location-grid">{places.map((place,index)=><Link className="gh-photo-card" href={place.href} key={place.href}><Image src={place.image} alt={`${place.name} coastline, Gold Coast`} fill sizes="(max-width: 620px) 100vw, 34vw" /><span className="gh-number">0{index+1}</span><div className="gh-card-bottom"><div><h3>{place.name}</h3><p>{place.copy}</p></div><span className="gh-card-arrow" aria-hidden="true">↗</span></div></Link>)}</div></section>
   <section className="gh-section gh-experiences" id="experiences" aria-labelledby="experiences-title"><div className="gh-section-heading"><div><p className="gh-eyebrow">Play. Stay. Connect.</p><h2 id="experiences-title">Make more of your stay.</h2></div><p>A little inspiration for your time here. Ask our team what can be arranged around your visit.</p></div><div className="gh-experience-grid">{experiences.map((experience,index)=><Link className="gh-photo-card" href="/experiences" key={experience.name}><Image src={experience.image} alt={experience.name} fill sizes="(max-width: 620px) 100vw, 34vw" /><span className="gh-number">0{index+1}</span><div className="gh-card-bottom"><div><h3>{experience.name}</h3><p>{experience.copy}</p></div><span className="gh-card-arrow" aria-hidden="true">↗</span></div></Link>)}</div><div className="gh-experience-note"><p>Something special in mind? Start a conversation with our local team.</p><a className="gh-link" href="mailto:info@abmgc.com.au">Help plan my stay ↗</a></div></section>
  </main>
  <footer className="gh-footer"><div className="gh-footer-main"><div className="gh-footer-brand"><Link href="/" aria-label="Gold Coast Accom home"><BrandLogo /></Link><p className="gh-script">Moments that stay with you.</p></div><div className="gh-footer-contact"><a href="mailto:info@abmgc.com.au">info@abmgc.com.au ↗</a><a href="tel:+61400721439">0400 721 439</a></div></div><div className="gh-footer-bottom"><span>© 2026 Gold Coast Accom</span><nav aria-label="Footer navigation"><Link href="/about">Our story</Link><a href="https://www.instagram.com/goldcoastaccom/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link><Link href="/booking-policies">Booking policies</Link></nav></div></footer>
 </div>;
}
