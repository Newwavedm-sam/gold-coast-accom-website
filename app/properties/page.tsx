"use client";

import { useMemo, useState } from "react";
import { IconBath, IconBed, IconMapPin, IconUsers } from "@tabler/icons-react";
import { properties } from "../../lib/property-catalogue";

export default function PropertiesPage() {
  const [location, setLocation] = useState("All locations");
  const [guests, setGuests] = useState(1);
  const [feature, setFeature] = useState("All stays");
  const [sort, setSort] = useState("recommended");

  const results = useMemo(() => {
    const filtered = properties.filter((property) =>
      (location === "All locations" || property.location === location) &&
      property.guests >= guests &&
      (feature === "All stays" || property.tags.includes(feature))
    );
    return [...filtered].sort((a, b) => sort === "price" ? a.nightlyFrom - b.nightlyFrom : b.rating - a.rating);
  }, [location, guests, feature, sort]);

  return (
    <main>
      <header className="site-header inner-header">
        <a className="brand" href="/"><img src="/assets/gold-coast-accom-logo-wide.webp" alt="" /><span className="brand-name">GOLD COAST<br /><small>ACCOM</small></span></a>
        <nav className="main-nav" aria-label="Main navigation"><a href="/">Home</a><a href="/#experiences">Experiences</a><a href="/#locations">Locations</a><a className="nav-cta" href="#filters">Search stays</a></nav>
      </header>

      <section className="listing-hero">
        <p className="eyebrow">Gold Coast holiday homes</p>
        <h1>Find your place<br />on the coast.</h1>
        <p>Choose your dates, group size and preferred part of the coast to find a stay that fits.</p>
      </section>

      <section className="filter-shell" id="filters" aria-label="Filter properties">
        <label><span>Location</span><select value={location} onChange={(event) => setLocation(event.target.value)}><option>All locations</option>{[...new Set(properties.map((property) => property.location))].map((item) => <option key={item}>{item}</option>)}</select></label>
        <label><span>Guests</span><select value={guests} onChange={(event) => setGuests(Number(event.target.value))}>{[1,2,4,6,8,10,12].map((item) => <option value={item} key={item}>{item}+ guests</option>)}</select></label>
        <label><span>Stay type</span><select value={feature} onChange={(event) => setFeature(event.target.value)}><option>All stays</option><option>Pool</option><option>Ocean view</option><option>Families</option><option>Groups</option></select></label>
        <label><span>Sort by</span><select value={sort} onChange={(event) => setSort(event.target.value)}><option value="recommended">Recommended</option><option value="price">Price: low to high</option></select></label>
      </section>

      <section className="results-section">
        <div className="results-heading"><div><p className="eyebrow">Available collection</p><h2>{results.length} {results.length === 1 ? "stay" : "stays"} to explore</h2></div><p>Availability and final pricing will be confirmed securely through PropertyStack.</p></div>
        {results.length ? <div className="results-grid">{results.map((property) => (
          <article className="result-card" key={property.id}>
            <a className="result-image" href={`/properties/${property.slug}`} style={{backgroundImage:`url(${property.image})`}}><span>{property.tags[0]}</span></a>
            <div className="result-copy">
              <p className="property-location"><IconMapPin aria-hidden="true" />{property.location}</p>
              <h3><a href={`/properties/${property.slug}`}>{property.name}</a></h3>
              <p>{property.summary}</p>
              <div className="result-facts"><span><IconUsers />{property.guests}</span><span><IconBed />{property.bedrooms}</span><span><IconBath />{property.bathrooms}</span><span className="rating">★ {property.rating.toFixed(2)}</span></div>
              <div className="result-price"><span>From <strong>${property.nightlyFrom}</strong> / night</span><a className="button secondary" href={`/properties/${property.slug}`}>View stay</a></div>
            </div>
          </article>
        ))}</div> : <div className="empty-results"><h3>No exact matches yet.</h3><p>Try widening your filters or let our local team help.</p><button className="button secondary" onClick={() => {setLocation("All locations");setGuests(1);setFeature("All stays");}}>Clear filters</button></div>}
      </section>
    </main>
  );
}
