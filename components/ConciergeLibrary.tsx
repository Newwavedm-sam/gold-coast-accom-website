"use client";

import { useState } from "react";
import { IconBabyCarriage, IconBalloon, IconBike, IconCar, IconGlass, IconMassage, IconMeat, IconSailboat, IconToolsKitchen3, IconCarSuv } from "@tabler/icons-react";
import EnquiryForm from "./EnquiryForm";

const services = [
  {title:"Private Sommelier",category:"Food & drink",Icon:IconGlass,copy:"A guided tasting or perfectly paired wine selection, brought to your accommodation.",image:"https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=82"},
  {title:"Brazilian BBQ",category:"Food & drink",Icon:IconMeat,copy:"A generous Brazilian-style barbecue prepared for your group at your stay.",image:"https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1000&q=82"},
  {title:"Private Catering",category:"Food & drink",Icon:IconToolsKitchen3,copy:"From relaxed family meals to celebration menus, tailored to your group.",image:"https://goldcoast-accom.com.au/wp-content/uploads/2024/10/finedine.png"},
  {title:"Beach Equipment Hire",category:"Hire & transport",Icon:IconSailboat,copy:"Umbrellas, chairs, games and practical beach gear ready when you arrive.",image:"https://goldcoast-accom.com.au/wp-content/uploads/2026/02/Palm-Beach.webp"},
  {title:"E-Bike Hire",category:"Hire & transport",Icon:IconBike,copy:"Cruise the coastline with convenient delivery and collection options.",image:"https://images.unsplash.com/photo-1571068316344-75bc76f77890?auto=format&fit=crop&w=1000&q=82"},
  {title:"Private Chauffeur",category:"Hire & transport",Icon:IconCar,copy:"Reliable private transfers for airport arrivals, dining and days out.",image:"https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1000&q=82"},
  {title:"Luxury Car Hire",category:"Hire & transport",Icon:IconCarSuv,copy:"Premium vehicles for special occasions, coastal drives or simply arriving well.",image:"https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=82"},
  {title:"Private Surf Lessons",category:"Activities",Icon:IconSailboat,copy:"Friendly private coaching for first-timers, families and confident surfers.",image:"https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=1000&q=82"},
  {title:"Baby Gear Hire",category:"Family & occasions",Icon:IconBabyCarriage,copy:"Baby seats, portacots and other essentials delivered before check-in.",image:"https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=1000&q=82"},
  {title:"Private Massage",category:"Wellness",Icon:IconMassage,copy:"In-accommodation massage treatments to help you unwind and recharge.",image:"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=82"},
  {title:"Birthday Decorations",category:"Family & occasions",Icon:IconBalloon,copy:"A thoughtful birthday setup waiting at your accommodation when you arrive.",image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=1000&q=82"},
];

const categories = ["All","Food & drink","Hire & transport","Activities","Family & occasions","Wellness"];

export default function ConciergeLibrary(){
  const [active,setActive] = useState("All");
  const visible = active === "All" ? services : services.filter(service=>service.category===active);
  return <>
    <section className="concierge-intro" id="services">
      <div><p className="eyebrow">The concierge collection</p><p className="script teal">A little local knowledge goes a long way.</p><h2>Everything you need,<br/>without the runaround.</h2></div>
      <p>Browse our most-requested services below. Tell us what you have in mind and our team will confirm availability, suitable options and pricing with trusted local providers.</p>
    </section>
    <section className="concierge-library">
      <div className="concierge-filters" aria-label="Filter concierge services">
        {categories.map(category=><button key={category} className={active===category?"active":""} onClick={()=>setActive(category)} aria-pressed={active===category}>{category}</button>)}
      </div>
      <div className="concierge-grid">
        {visible.map(({title,category,Icon,copy,image})=><article className="concierge-card" key={title}>
          <div className="concierge-card-image" style={{backgroundImage:`linear-gradient(180deg,transparent 55%,rgba(5,48,67,.22)),url(${image})`}}><span><Icon aria-hidden="true"/></span></div>
          <div className="concierge-card-body"><p>{category}</p><h3>{title}</h3><p>{copy}</p><a href="#concierge-enquiry">Enquire about this <span aria-hidden="true">→</span></a></div>
        </article>)}
      </div>
    </section>
    <section className="concierge-process">
      <div><p className="eyebrow">How it works</p><h2>Simple to request.<br/>Thoughtfully arranged.</h2></div>
      <ol><li><span>01</span><div><h3>Tell us what you need</h3><p>Choose a service or share the occasion you are planning.</p></div></li><li><span>02</span><div><h3>We source the right option</h3><p>Our team checks availability with suitable local providers.</p></div></li><li><span>03</span><div><h3>Confirm and enjoy</h3><p>We send the details and help coordinate it around your stay.</p></div></li></ol>
    </section>
    <section className="concierge-enquiry" id="concierge-enquiry"><div><p className="eyebrow">Concierge enquiry</p><p className="script teal">Let us take care of the details.</p><h2>What can we arrange?</h2><p>Share your dates, group size and what you have in mind. We’ll come back with suitable options and next steps.</p></div><EnquiryForm subject="Concierge service enquiry"/></section>
  </>
}
