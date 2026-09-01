import SiteHeader from "../../components/SiteHeader";
import SiteFooter from "../../components/SiteFooter";
import ConciergeLibrary from "../../components/ConciergeLibrary";

export default function ConciergePage(){
  return <main>
    <SiteHeader/>
    <section className="concierge-hero">
      <div>
        <p className="script">Your stay, made easier.</p>
        <h1>Gold Coast<br/>Concierge.</h1>
        <p>Trusted local services, thoughtful extras and memorable experiences—arranged around your stay.</p>
        <a className="button primary" href="#services">Explore services</a>
      </div>
    </section>
    <ConciergeLibrary/>
    <SiteFooter/>
  </main>
}
