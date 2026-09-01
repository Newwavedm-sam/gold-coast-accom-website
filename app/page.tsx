"use client";

import { useState } from "react";
import { IconBallTennis, IconBeach, IconBell, IconCar, IconMapPin, IconPlane } from "@tabler/icons-react";
import SiteFooter from "../components/SiteFooter";

const properties = [
  {
    name: "Panoramic Penthouse Views",
    location: "Palm Beach",
    meta: "11 guests · 3 bedrooms · 3 bathrooms",
    rating: "5.0",
    beds: "3",
    baths: "3",
    guests: "11",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2024/09/48447-294141-0BIcAc3-IFhu0HJ2wRSbJT5ATfOCFxz18Ny-anB8AqU-66a45497c9b4d-1200x800.webp",
  },
  {
    name: "Bilinga Beach House",
    location: "Bilinga",
    meta: "14 guests · 4 bedrooms · 2 bathrooms",
    rating: "4.75",
    beds: "4",
    baths: "2",
    guests: "14",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-270083-hg2BBOOgEL7-tApmwQ-lrhpH6a1hIoZ2Lq8DFvzkbgY-663cf7168b8c3-1024x683.webp",
  },
  {
    name: "Magnolia Palms",
    location: "Palm Beach",
    meta: "6 guests · 3 bedrooms · 2 bathrooms",
    rating: "4.85",
    beds: "3",
    baths: "2",
    guests: "6",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-269118-eBvpx0MNeHOiclavT1y-KMaeg4xFOMKIYnOmkPADdjI-6639ea5885aef-1024x684.webp",
  },
];

const stayTypes = [
  ["Beachfront stays", "Wake up to ocean views and morning swims.", "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"],
  ["Family escapes", "Space for everyone to settle in.", "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1000&q=80"],
  ["Luxury stays", "Standout spaces in special locations.", "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1000&q=80"],
];

const locations = [
  ["Palm Beach", "Relaxed, local and close to the water.", "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Palm-Beach.webp"],
  ["Broadbeach", "Beach, dining and city energy.", "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg"],
  ["Burleigh Heads", "Iconic coastline and village charm.", "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Burleigh.jpg"],
];

const experiences = [
  {
    title: "Adventure Drives",
    description: "Iconic drives and hidden coastal spots.",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2024/10/Defender-Pic-1.jpg",
  },
  {
    title: "Yacht Charters",
    description: "Private days and sunsets on the Broadwater.",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2024/10/yacht.png",
  },
  {
    title: "Gold Coast Adventures",
    description: "Local favourites, planned around your stay.",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg",
  },
  {
    title: "Padel Getaways",
    description: "Courts, coaching and a stay to match.",
    image: "/assets/experience-strip-reference.png",
    crop: true,
  },
  {
    title: "Private Dining",
    description: "Memorable tables and special occasions.",
    image: "https://goldcoast-accom.com.au/wp-content/uploads/2024/10/finedine.png",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [favourites, setFavourites] = useState<number[]>([]);

  const toggleFavourite = (index: number) => {
    setFavourites((current) => current.includes(index) ? current.filter((item) => item !== index) : [...current, index]);
  };

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Gold Coast Accom home">
          <img src="/assets/gold-coast-accom-logo-wide.webp" alt="" />
          <span className="brand-name">GOLD COAST<br /><small>ACCOM</small></span>
        </a>
        <nav className={menuOpen ? "main-nav open" : "main-nav"} aria-label="Main navigation">
          <a href="#stays" onClick={() => setMenuOpen(false)}>Stay</a>
          <a href="/experiences" onClick={() => setMenuOpen(false)}>Experiences</a>
          <a href="/locations" onClick={() => setMenuOpen(false)}>Discover</a>
          <a href="/why-book-direct" onClick={() => setMenuOpen(false)}>Why book direct</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="nav-cta" href="#search" onClick={() => setMenuOpen(false)}>Search stays</a>
        </nav>
        <button className="menu-button" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-overlay" />
        <div className="hero-copy">
          <p className="script">Live. Stay. Explore.</p>
          <h1>Your Gold Coast stay,<br />thoughtfully curated.</h1>
          <p className="hero-intro">Beautiful holiday homes, memorable local experiences and genuine Gold Coast hospitality—all brought together for an easier, more personal stay.</p>
          <div className="hero-actions">
            <a className="button primary" href="#search">Find your stay</a>
            <a className="text-link light" href="#experiences">Explore experiences <Arrow /></a>
          </div>
        </div>
        <p className="hero-note">Play. Stay. Connect.</p>
      </section>

      <section className="search-wrap" id="search" aria-label="Search accommodation">
        <form className="search-bar" action="/properties">
          <label><span>Where</span><select name="location" defaultValue="Gold Coast"><option>Gold Coast</option><option>Palm Beach</option><option>Broadbeach</option><option>Burleigh Heads</option><option>Bilinga</option></select></label>
          <label><span>Check in</span><input name="checkIn" type="date" /></label>
          <label><span>Check out</span><input name="checkOut" type="date" /></label>
          <label><span>Guests</span><select name="guests" defaultValue="2"><option value="1">1 guest</option><option value="2">2 guests</option><option value="3">3 guests</option><option value="4">4 guests</option><option value="5">5+ guests</option></select></label>
          <button className="button secondary" type="submit">Search stays</button>
        </form>
        <p>Not sure where to stay? <a href="#experiences">Let our local team help.</a></p>
      </section>

      <section className="intro-section" id="direct">
        <div className="section-kicker">Why holiday with GCA</div>
        <div className="intro-grid">
          <div>
            <p className="script teal">Do the Gold Coast your way.</p>
            <h2>A stay that feels<br />easy from the start.</h2>
          </div>
          <p className="lead">Whether you’re planning a beachfront escape, a family holiday or a weekend with friends, we’ll help you find the right place—and make more of every day you’re here.</p>
        </div>
        <div className="benefit-row">
          <article><span className="line-icon"><IconBeach aria-hidden="true" /></span><h3>Beautiful places to stay</h3><p>Quality homes in locations people actually want to experience.</p></article>
          <article><span className="line-icon"><IconMapPin aria-hidden="true" /></span><h3>Gold Coast locals</h3><p>Direct support from people who know the homes and the coast.</p></article>
          <article><span className="line-icon"><IconBell aria-hidden="true" /></span><h3>More than accommodation</h3><p>Experiences and thoughtful extras arranged around your trip.</p></article>
        </div>
      </section>

      <section className="section properties" id="stays">
        <div className="section-heading">
          <div><p className="eyebrow">Stay your way</p><h2>Featured Gold Coast stays</h2></div>
          <a className="text-link" href="/properties">Explore all properties <Arrow /></a>
        </div>
        <div className="property-grid">
          {properties.map((property, index) => (
            <article className="property-card" key={property.name}>
              <div className="property-image" style={{ backgroundImage: `url(${property.image})` }}>
                <button type="button" className={favourites.includes(index) ? "heart active" : "heart"} onClick={() => toggleFavourite(index)} aria-label={`${favourites.includes(index) ? "Remove" : "Add"} ${property.name} ${favourites.includes(index) ? "from" : "to"} favourites`}>♡</button>
              </div>
              <div className="property-body">
                <p className="property-location">{property.location}</p>
                <h3>{property.name}</h3>
                <div className="property-facts" aria-label={property.meta}>
                  <span>▱ {property.beds}</span><span>⌑ {property.baths}</span><span>♙ {property.guests}</span>
                  <span className="rating">★ {property.rating}</span>
                </div>
                <div className="property-price"><span>Check dates for price</span><a href={`/properties/${["panoramic-penthouse-views","bilinga-beach-house","magnolia-palms"][index]}`}>View details <Arrow /></a></div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section stay-types">
        <div className="section-heading compact">
          <div><p className="eyebrow">Find your kind of stay</p><h2>Made for the way you travel.</h2></div>
        </div>
        <div className="stay-grid">
          {stayTypes.map(([title, description, image]) => (
            <a className="stay-card" href="#search" key={title} style={{ backgroundImage: `linear-gradient(180deg, transparent 30%, rgba(6,43,58,.8)), url(${image})` }}>
              <span><strong>{title}</strong><small>{description}</small></span><Arrow />
            </a>
          ))}
        </div>
      </section>

      <section className="section locations" id="locations">
        <div className="section-heading">
          <div><p className="eyebrow">Find your part of the coast</p><h2>Stay close to what you love.</h2></div>
          <p className="heading-copy">Every neighbourhood has its own rhythm. Choose beachside calm, walkable dining or somewhere quieter to unwind.</p>
        </div>
        <div className="location-grid">
          {locations.map(([title, description, image], index) => (
            <a className={`location-card location-${index + 1}`} href={`/locations/${["palm-beach","broadbeach","burleigh-heads"][index]}`} key={title} style={{ backgroundImage: `linear-gradient(180deg, transparent 45%, rgba(5,48,67,.78)), url(${image})` }}>
              <span className="location-number">0{index + 1}</span>
              <span><strong>{title}</strong><small>{description}</small></span>
            </a>
          ))}
        </div>
      </section>

      <section className="experience-section section" id="experiences">
        <div className="experience-heading">
          <div><p className="eyebrow">Play. Stay. Connect.</p><h2>Make more of your stay.</h2></div>
          <p>Curated experiences, local favourites and thoughtful extras—arranged around your trip.</p>
        </div>
        <div className="experience-panels">
          {experiences.map((experience, index) => (
            <article
              className={experience.crop ? "experience-panel reference-crop" : "experience-panel"}
              key={experience.title}
              tabIndex={0}
              style={{ backgroundImage: `url(${experience.image})` }}
            >
              <span className="experience-index">0{index + 1}</span>
              <div className="experience-overlay">
                <h3>{experience.title}</h3>
                <p>{experience.description}</p>
                <a href={`/experiences/${["retro-defender-adventure","private-yacht-charter","private-yacht-charter","padel-getaway","private-dining"][index]}`}>Explore <Arrow /></a>
              </div>
            </article>
          ))}
        </div>
        <div className="brand-icon-row" aria-label="Gold Coast Accom services">
          <span><IconBeach aria-hidden="true" />Beach</span>
          <span><IconBallTennis aria-hidden="true" />Padel</span>
          <span><IconCar aria-hidden="true" />Adventure</span>
          <span><IconPlane aria-hidden="true" />Transfers</span>
          <span><IconBell aria-hidden="true" />Concierge</span>
          <span><IconMapPin aria-hidden="true" />Local</span>
        </div>
      </section>

      <section className="story-section" id="about">
        <div className="story-copy">
          <p className="eyebrow">Local by nature</p>
          <h2>A more personal way<br />to stay on the Gold Coast.</h2>
          <p>We bring together quality holiday homes, local knowledge and attentive guest support. Because we live and work here, we can help you choose more than a property—we can help you find your part of the coast.</p>
          <a className="text-link" href="/about">Meet Gold Coast Accom <Arrow /></a>
        </div>
        <div className="story-photo"><p className="script">Moments that stay<br />with you forever.</p></div>
      </section>

      <section className="review-section section">
        <p className="eyebrow">Guest stories</p>
        <div className="stars">★★★★★</div>
        <blockquote>“A very considerate and polished penthouse with a great location and views. We would happily stay again.”</blockquote>
        <p className="review-author">Taylor · Panoramic Penthouse Views</p>
      </section>

      <section className="journal section">
        <div className="section-heading"><div><p className="eyebrow">Discover like a local</p><h2>Make the most of the Gold Coast.</h2></div><a className="text-link" href="#">Explore the guide <Arrow /></a></div>
        <div className="journal-grid">
          <article><div className="journal-image journal-one" /><p className="eyebrow">Neighbourhood guide</p><h3>A local’s guide to Palm Beach</h3><a href="#">Read the guide <Arrow /></a></article>
          <article><div className="journal-image journal-two" /><p className="eyebrow">Family</p><h3>The best Gold Coast activities for families</h3><a href="#">Start exploring <Arrow /></a></article>
          <article><div className="journal-image journal-three" /><p className="eyebrow">Weekend itinerary</p><h3>A perfect weekend in Broadbeach</h3><a href="#">Plan your weekend <Arrow /></a></article>
        </div>
      </section>

      <section className="final-cta" id="enquire">
        <p className="script">Ready when you are.</p>
        <h2>Find your place on<br />the Gold Coast.</h2>
        <p>Search available stays for your dates or let our local team help plan something special.</p>
        <div><a className="button sand" href="#search">Search available stays</a><a className="button outline-light" href="mailto:info@abmgc.com.au">Help me plan my stay</a></div>
      </section>

      <SiteFooter />
    </main>
  );
}
