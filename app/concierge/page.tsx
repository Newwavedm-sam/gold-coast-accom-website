import type { Metadata } from "next";
import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ConciergeLibrary from "../../components/ConciergeLibrary";
import styles from "./concierge.module.css";

export const metadata: Metadata = {
  title: "Elevate Your Stay | Gold Coast Accom",
  description: "Explore guest add-ons and experiences for your Gold Coast stay, then ask our local team to confirm the details.",
  alternates: { canonical: "https://goldcoast-accom.com.au/concierge" },
};

export default function ConciergePage() {
  return (
    <>
      <SiteHeader />
      <main className={styles.page}>
        <section className={styles.hero} aria-labelledby="stay-title">
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Guest add-ons &amp; experiences</p>
            <h1 id="stay-title">Elevate Your Stay</h1>
            <p className={styles.heroCopy}>Beach packs, baby gear, transfers and signature experiences. Pick what interests you and ask our local team about your stay.</p>
            <div className={styles.actions}>
              <a className={styles.lightButton} href="#services">Browse add-ons</a>
              <a className={styles.outlineButton} href="#how">How it works</a>
            </div>
          </div>
        </section>
        <section className={styles.process} id="how" aria-labelledby="how-title">
          <div className={styles.wrap}>
            <h2 id="how-title">How it works</h2>
            <ol>
              <li><strong>Browse the options</strong><p>Find extras for your family, beach day or special occasion.</p></li>
              <li><strong>Build your enquiry list</strong><p>Add the options you’d like to ask about. Nothing gets booked or sent here.</p></li>
              <li><strong>Check with our team</strong><p>Send your email draft so the team can confirm what’s available and what it costs.</p></li>
            </ol>
          </div>
        </section>
        <ConciergeLibrary />
      </main>
      <SiteFooter />
    </>
  );
}
