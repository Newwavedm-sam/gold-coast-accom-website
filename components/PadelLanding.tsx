"use client";

import { IconBallTennis, IconBed, IconCar, IconHeart, IconPlaneArrival, IconSparkles, IconUsers, IconYoga } from "@tabler/icons-react";
import EnquiryForm from "./EnquiryForm";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

const benefits = [
  [IconPlaneArrival,"Arrive easily","Airport transfers or car-hire guidance."],
  [IconBed,"Stay beautifully","Handpicked homes close to courts and coast."],
  [IconBallTennis,"Play premium courts","Daily court time at standout Gold Coast venues."],
  [IconUsers,"Train your way","Coaching, match play and formats for every level."],
  [IconYoga,"Recover well","Wellness, beach time and room to recharge."],
  [IconSparkles,"Connect off court","Dining and social moments designed for the group."],
];

const itinerary = [
  ["Day 1","Arrive & settle in","Airport pickup, check-in and a relaxed welcome dinner.","https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Broadbeach.jpg"],
  ["Day 2","Play & improve","Coaching session, match play and time by the ocean.","/assets/experience-strip-reference.png"],
  ["Day 3","Compete & connect","Friendly competition followed by a memorable group dinner.","https://goldcoast-accom.com.au/wp-content/uploads/2024/10/finedine.png"],
  ["Day 4","Recover & explore","A slower morning, wellness option and local exploring.","https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Burleigh.jpg"],
  ["Day 5","Finals day","Tournament play, prizes and an easy celebration together.","https://images.unsplash.com/photo-1554068865-24cecd4e34b8?auto=format&fit=crop&w=900&q=85"],
  ["Day 6","Departure","Breakfast, check-out and an arranged transfer if required.","https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Palm-Beach.webp"],
];

const reviews = [
  ["James M.","Sydney","The right mix of padel, coaching and good vibes. Everything felt easy from the moment we arrived."],
  ["Sarah T.","Melbourne","Great courts, a brilliant group and enough downtime to actually enjoy the Gold Coast."],
  ["David L.","Brisbane","It felt premium without being overdone. I’d happily book the next one."],
];

export default function PadelLanding(){
  return <main className="padel-page">
    <SiteHeader/>
    <section className="padel-hero" id="experience">
      <div className="padel-hero-copy">
        <p className="eyebrow">Play. Stay. Connect.</p>
        <h1>Gold Coast<br/>Padel Getaway</h1>
        <p>Premium courts, expert coaching, beautiful stays and the moments between matches—all thoughtfully brought together.</p>
        <div className="padel-actions"><a className="button secondary" href="#enquire">Enquire now</a><a className="button outline-light" href="#itinerary">View itinerary</a></div>
      </div>
      <p className="padel-hero-script">Play. Stay. Connect.</p>
    </section>

    <section className="padel-benefits" aria-label="Retreat highlights">
      {benefits.map(([Icon,title,copy])=><article key={String(title)}><Icon aria-hidden="true"/><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}
    </section>

    <section className="padel-inclusions">
      <div className="padel-court-image"/>
      <div><p className="eyebrow">What’s included</p><p className="script teal">Every detail, taken care of.</p><h2>Come for the padel.<br/>Leave with the memories.</h2><p>We shape the trip so you can focus on playing, connecting and enjoying the coast.</p><ul><li>Return airport transfers or car-hire options</li><li>4–5 nights in premium accommodation</li><li>Daily courts at leading venues</li><li>Expert coaching and organised match play</li><li>Recovery or wellness session</li><li>Group dining and one signature experience</li><li>Concierge support throughout the stay</li></ul></div>
    </section>

    <section className="padel-itinerary" id="itinerary">
      <div className="padel-section-heading"><p className="eyebrow">Sample itinerary</p><h2>A trip designed for play<br/>and connection.</h2><p>The exact schedule flexes around group goals, playing level and availability.</p></div>
      <div className="itinerary-track">{itinerary.map(([day,title,copy,image])=><article key={day}><div style={{backgroundImage:`url(${image})`}}/><span>{day}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </section>

    <section className="padel-stay">
      <div><p className="eyebrow">Premium accommodation</p><h2>Stay in comfort.<br/>Close to everything.</h2><p>We match the group with homes and apartments that make the off-court part of the trip just as good.</p><ul><li>Modern, comfortable spaces</li><li>Resort-style facilities where available</li><li>Options for solo travellers, couples and groups</li></ul><a className="button secondary" href="/properties">View accommodation</a></div>
      <div className="padel-stay-gallery"><div/><span/><span/><span/></div>
    </section>

    <section className="padel-why">
      <div className="padel-section-heading"><p className="eyebrow">Why travel with Gold Coast Accom?</p><h2>More than a trip.<br/>It’s an experience.</h2></div>
      <div>{[[IconSparkles,"Local experts","We know the Gold Coast and its padel scene."],[IconHeart,"Premium, approachable","The right courts, coaches and homes—without the fuss."],[IconUsers,"Community focused","Meet like-minded players and build real connections."],[IconCar,"Handled for you","We take care of the moving parts so you can enjoy it."]].map(([Icon,title,copy])=><article key={String(title)}><Icon/><h3>{String(title)}</h3><p>{String(copy)}</p></article>)}</div>
    </section>

    <section className="padel-reviews"><div className="padel-section-heading"><p className="eyebrow">What players say</p><h2>Real experiences.<br/>Unforgettable memories.</h2></div><div>{reviews.map(([name,place,quote])=><blockquote key={name}><span>★★★★★</span><p>“{quote}”</p><footer><strong>{name}</strong><small>{place}, Australia</small></footer></blockquote>)}</div></section>

    <section className="padel-enquire" id="enquire"><div><p className="script">Ready to join the next getaway?</p><h2>Tell us about your ideal trip.</h2><p>Dates can stay flexible. Share your group size, playing level and what matters most, and we’ll start shaping the options.</p></div><div><EnquiryForm subject="Gold Coast Padel Getaway"/></div></section>
    <SiteFooter/>
  </main>
}
