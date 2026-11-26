"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "../app/concierge/concierge.module.css";

const categories = [
  { id: "family", label: "Little ones", title: "Baby & toddler gear" },
  { id: "beach", label: "Beach", title: "Beach necessities" },
  { id: "transport", label: "Transport", title: "Transport options" },
  { id: "touches", label: "Special touches", title: "Special touches" },
  { id: "inroom", label: "In-room extras", title: "In-room extras" },
  { id: "signature", label: "Signature", title: "Signature experiences" },
] as const;

type Category = (typeof categories)[number]["id"];
type Extra = { id: string; category: Category; title: string; detail: string };

const extras: Extra[] = [
  { id: "portacot", category: "family", title: "Portacot", detail: "Ask about a portacot and what linen to bring." },
  { id: "high-chair", category: "family", title: "High Chair", detail: "Make mealtimes easier while you’re away." },
  { id: "baby-bundle", category: "family", title: "Baby Bundle", detail: "Ask about a portacot and high chair together." },
  { id: "stroller", category: "family", title: "Stroller", detail: "Tell us the age and size you need so we can check suitable options." },
  { id: "car-seat", category: "family", title: "Car Seat", detail: "Ask about a seat suited to your child’s age and size." },
  { id: "beach-pack", category: "beach", title: "Basic Beach Pack", detail: "Ask about chairs, shade and essentials for a beach day." },
  { id: "full-beach-pack", category: "beach", title: "All-Inclusive Beach Pack", detail: "Ask what’s included in the larger beach setup." },
  { id: "towels", category: "beach", title: "Pool & Beach Towels", detail: "Extra towels for your time by the water." },
  { id: "car-hire", category: "transport", title: "Car Hire", detail: "Ask for options based on your plans and group size." },
  { id: "transfers", category: "transport", title: "Pre-booked Transfers", detail: "Enquire about transport between the airport and your accommodation." },
  { id: "food", category: "touches", title: "Food & Beverage Delivery", detail: "Ask about having refreshments or fridge essentials ready for your stay." },
  { id: "surprise", category: "touches", title: "Surprise Setup", detail: "Tell us what you’re celebrating and what you’d like to arrange." },
  { id: "massage", category: "inroom", title: "Massage", detail: "Ask about an in-accommodation treatment." },
  { id: "chef", category: "inroom", title: "Private Chef", detail: "Enquire about a meal tailored to your group at your accommodation." },
  { id: "clean", category: "inroom", title: "Mid-Stay Clean", detail: "Ask about a clean during a longer stay." },
  { id: "helicopter", category: "signature", title: "Helicopter Winery Escape", detail: "Tell us if you’re interested in exploring the Hinterland by air." },
  { id: "yacht", category: "signature", title: "Luxury Yacht Charter", detail: "Ask about a private cruise, timing and group size." },
  { id: "mixologist", category: "signature", title: "Private Chef & Mixologist", detail: "Enquire about a private dinner with cocktails at your accommodation." },
  { id: "estate", category: "signature", title: "Hinterland Estate Dining", detail: "Ask about a private dining experience in the Hinterland." },
  { id: "evening", category: "signature", title: "Special Evening Transport", detail: "Ask about private transport for an evening out." },
];

const contact = "info@abmgc.com.au";
const phone = "+61400721439";

export default function ConciergeLibrary() {
  const [filter, setFilter] = useState<Category | "all">("all");
  const [selection, setSelection] = useState<string[]>([]);
  const selected = extras.filter((item) => selection.includes(item.id));
  const visible = categories.filter((category) => filter === "all" || category.id === filter);
  const count = extras.filter((item) => filter === "all" || item.category === filter).length;

  const toggle = (id: string) => setSelection((current) =>
    current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
  );
  const itemList = selected.length ? selected.map((item) => `- ${item.title}`).join("\n") : "- ";
  const draft = `Hi Gold Coast Accom,\n\nI’d like to enquire about:\n${itemList}\n\nStay dates or booking reference (if known):\nGroup size (if relevant):\nPreferred contact number (optional):\n\nThanks!`;
  const emailLink = `mailto:${contact}?subject=${encodeURIComponent("Gold Coast Accom stay extras enquiry")}&body=${encodeURIComponent(draft)}`;

  return (
    <>
      <section className={styles.wrap} id="services" aria-labelledby="extras-title">
        <div className={styles.sectionHeading}>
          <div><p className={styles.kicker}>Make the most of your stay</p><h2 id="extras-title">Explore the add-ons</h2></div>
          <a className={styles.darkButton} href="#concierge-enquiry">View enquiry list ({selected.length})</a>
        </div>
        <div className={styles.filters} role="group" aria-label="Filter add-ons">
          <button type="button" aria-pressed={filter === "all"} onClick={() => setFilter("all")}>All</button>
          {categories.map((category) => (
            <button type="button" key={category.id} aria-pressed={filter === category.id} onClick={() => setFilter(category.id)}>{category.label}</button>
          ))}
        </div>
        <p className={styles.resultCount} role="status">{count} options shown. {selected.length} on your enquiry list.</p>
        <div className={styles.groups}>
          {visible.map((category) => (
            <section className={styles.category} key={category.id} aria-labelledby={`category-${category.id}`}>
              <div className={styles.categoryImage}>
                <Image src={`/assets/stay-extras/${category.id}.webp`} fill sizes="(max-width: 620px) 100vw, (max-width: 980px) 50vw, 380px" alt="" />
              </div>
              <div className={styles.categoryBody}>
                <h3 id={`category-${category.id}`}>{category.title}</h3>
                <ul className={styles.options}>
                  {extras.filter((item) => item.category === category.id).map((item) => {
                    const isSelected = selection.includes(item.id);
                    return <li key={item.id}>
                      <div><strong>{item.title}</strong><p>{item.detail}</p></div>
                      <button type="button" aria-label={`${item.title} on enquiry list`} aria-pressed={isSelected} onClick={() => toggle(item.id)}>{isSelected ? "Added" : "Add"}</button>
                    </li>;
                  })}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </section>
      <section className={`${styles.wrap} ${styles.enquiryWrap}`} id="concierge-enquiry" aria-labelledby="enquiry-title">
        <div className={styles.enquiry}>
          <div className={styles.enquiryList}>
            <p className={styles.kicker}>Your enquiry list</p>
            <h2 id="enquiry-title">{selected.length ? "Your selected extras" : "What would make your stay?"}</h2>
            {selected.length ? <ul>
              {selected.map((item) => <li key={item.id}><span>{item.title}</span><button type="button" aria-label={`Remove ${item.title}`} onClick={() => toggle(item.id)}>Remove</button></li>)}
            </ul> : <p>Add an option above or send a general enquiry.</p>}
          </div>
          <div className={styles.enquiryContact}>
            <h3>Ask our local team</h3>
            <p>The button opens an email draft with your selections. You’ll need to send it yourself. Prices and availability are confirmed separately, and there’s no payment here.</p>
            <a className={styles.darkButton} href={emailLink}>Open email draft</a>
            <p>No email app? Email <a href={`mailto:${contact}`}>{contact}</a> or call <a href={`tel:${phone}`}>0400 721 439</a>.</p>
            <p className={styles.small}>Accommodation bookings are separate from this enquiry.</p>
          </div>
        </div>
      </section>
    </>
  );
}
