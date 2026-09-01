"use client";
import {useState} from "react";
import {useParams} from "next/navigation";
import {IconBath,IconBed,IconCheck,IconClock,IconMapPin,IconPaw,IconSmokingNo,IconUsers,IconVolume,IconBike,IconChefHat,IconBallTennis} from "@tabler/icons-react";
import {findProperty} from "../../../lib/property-catalogue";

const suburbs:Record<string,{slug:string,image:string,copy:string}>={
 "Palm Beach":{slug:"palm-beach",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Palm-Beach.webp",copy:"Laid-back beach days, brilliant coffee and a local dining scene—all within an easy coastal rhythm."},
 "Broadbeach":{slug:"broadbeach",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg",copy:"A walkable pocket of beach, dining and entertainment with everything close at hand."},
 "Burleigh Heads":{slug:"burleigh-heads",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Burleigh.jpg",copy:"Headland walks, a famous point break and one of the coast’s best collections of places to eat."},
 "Bilinga":{slug:"bilinga",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/01/48447-270083-hg2BBOOgEL7-tApmwQ-lrhpH6a1hIoZ2Lq8DFvzkbgY-663cf7168b8c3-1024x683.webp",copy:"Quiet sand, uncrowded mornings and an easy connection to the southern Gold Coast."},
 "Currumbin":{slug:"currumbin",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Currumbin.jpg",copy:"Creek swims, surf breaks and green hinterland edges make Currumbin feel naturally different."}
};
const upsells=[
 {title:"Private dining",copy:"A chef-led evening without leaving your stay.",href:"/concierge",icon:IconChefHat},
 {title:"E-bike hire",copy:"Explore the coast at your own pace.",href:"/concierge",icon:IconBike},
 {title:"Padel getaway",copy:"Courts, coaching and local match play.",href:"/experiences/padel-getaway",icon:IconBallTennis}
];
export default function PropertyPage(){
 const params=useParams<{slug:string}>(),property=findProperty(params.slug),[requested,setRequested]=useState(false);
 if(!property)return <main className="not-found"><p className="eyebrow">Stay not found</p><h1>This property is unavailable.</h1><a className="button secondary" href="/properties">View all properties</a></main>;
 const suburb=suburbs[property.location]??suburbs["Palm Beach"];
 const groups=[
  {label:"Living & kitchen",images:[property.gallery[0],property.gallery[2],property.gallery[1]]},
  {label:"Bedrooms & bathrooms",images:[property.gallery[2],property.gallery[1],property.gallery[0]]},
  {label:"Outdoors & location",images:[suburb.image,property.gallery[0],property.gallery[1]]}
 ];
 return <main id="top">
  <header className="site-header inner-header property-nav"><a className="brand" href="/"><img src="/assets/gold-coast-accom-logo-wide.webp" alt=""/><span className="brand-name">GOLD COAST<br/><small>ACCOM</small></span></a><a className="text-link" href="/properties">← All properties</a></header>
  <section className="property-hero-full" style={{backgroundImage:`linear-gradient(180deg,rgba(5,48,67,.04),rgba(5,48,67,.62)),url(${property.image})`}}><div className="property-hero-copy"><p className="eyebrow">{property.location} · Gold Coast</p><h1>{property.name}</h1><div className="property-hero-facts"><span><IconUsers/>{property.guests} guests</span><span><IconBed/>{property.bedrooms} bedrooms</span><span><IconBath/>{property.bathrooms} bathrooms</span><span>★ {property.rating.toFixed(2)}</span></div></div><a className="gallery-jump" href="#gallery">Explore the gallery ↓</a></section>
  <section className="property-detail-layout property-detail-refined"><article className="property-content"><p className="property-location"><IconMapPin/>{property.location}</p><p className="detail-summary">{property.summary}</p><h2>About this stay</h2><p>{property.description}</p><div className="amenities-block"><p className="eyebrow">At a glance</p><h2>Everything you need to settle in.</h2><div className="amenity-grid">{property.amenities.map(a=><span key={a}><IconCheck/>{a}</span>)}</div></div></article>
  <aside className="booking-panel"><p>From <strong>${property.nightlyFrom}</strong> / night</p><form onSubmit={e=>{e.preventDefault();setRequested(true)}}><div className="booking-dates"><label><span>Check in</span><input required type="date"/></label><label><span>Check out</span><input required type="date"/></label></div><label><span>Guests</span><select defaultValue="2"><option>1 guest</option><option>2 guests</option><option>4 guests</option><option>6 guests</option><option>8+ guests</option></select></label><button className="button secondary">Check availability</button></form>{requested&&<div className="mock-quote" role="status"><strong>Secure PropertyStack checkout</strong><p>In the live website, PropertyStack will confirm availability, calculate the itemised quote and complete the booking securely.</p><button className="button secondary" type="button">Continue to secure booking</button></div>}<small>You won’t be charged at this step.</small></aside></section>
  <section className="house-rules-section"><div className="house-rules-heading"><p className="eyebrow">Good to know</p><h2>House rules,<br/>made simple.</h2><p>Clear expectations make for an easier stay. Final property-specific rules will be synchronised from PropertyStack.</p></div><div className="house-rules-tile"><div><IconClock/><span><small>Arrival</small>Check-in after 3:00 pm<br/>Check-out before 10:00 am</span></div><div><IconVolume/><span><small>Quiet hours</small>Respect our neighbours<br/>10:00 pm–7:00 am</span></div><div><IconPaw/><span><small>Pets</small>By prior approval<br/>at selected stays</span></div><div><IconSmokingNo/><span><small>Smoking & events</small>No smoking indoors<br/>No unauthorised parties</span></div><a className="text-link" href="/booking-policies">Read booking policies →</a></div></section>
  <section className="categorised-gallery" id="gallery"><div className="section-heading"><div><p className="eyebrow">Inside the stay</p><h2>Spaces worth slowing down for.</h2></div><p className="heading-copy">Browse the home by space, so you can picture how every part of the stay comes together.</p></div>{groups.map((g,gi)=><div className="gallery-group" key={g.label}><div className="gallery-group-title"><span>0{gi+1}</span><h3>{g.label}</h3></div><div className="gallery-mosaic">{g.images.map((im,i)=><div key={i} className={`gallery-photo photo-${i+1}`} style={{backgroundImage:`url(${im})`}}/>)}</div></div>)}</section>
  <section className="suburb-story"><a className="suburb-image" href={`/locations/${suburb.slug}`} style={{backgroundImage:`url(${suburb.image})`}}/><div className="suburb-copy"><p className="eyebrow">Your neighbourhood</p><p className="script teal">Stay like a local.</p><h2>Why we love<br/>{property.location}.</h2><p>{suburb.copy}</p><a className="text-link" href={`/locations/${suburb.slug}`}>Explore {property.location} →</a></div></section>
  <section className="property-upsells section"><div className="section-heading"><div><p className="eyebrow">Make more of your stay</p><h2>Add a little more Gold Coast.</h2></div><p className="heading-copy">Handpicked experiences and thoughtful extras can be arranged around your dates.</p></div><div className="upsell-grid">{upsells.map(({title,copy,href,icon:Icon})=><a href={href} className="upsell-card" key={title}><Icon/><span><strong>{title}</strong><small>{copy}</small></span><b>↗</b></a>)}</div></section>
  <div className="mobile-booking-bar"><span>From <strong>${property.nightlyFrom}</strong> / night</span><a className="button secondary" href="#top">Check dates</a></div>
 </main>
}
