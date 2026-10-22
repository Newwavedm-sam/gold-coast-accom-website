import BrandLogo from "./BrandLogo";
import "./site-header.css";

const links = [
  ["Stay", "/properties"], ["Experiences", "/experiences"],
  ["Locations", "/locations"], ["Concierge", "/concierge"], ["About", "/about"],
];

export default function SiteHeader() {
  return <header className="site-header inner-header">
    <a className="brand" href="/" aria-label="Gold Coast Accom home"><BrandLogo /></a>
    <nav className="main-nav" aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <a className="nav-cta" href="/properties">Search stays</a>
    </nav>
    <details className="gca-mobile-menu">
      <summary aria-label="Open navigation menu"><span aria-hidden="true">☰</span><span>Menu</span></summary>
      <nav aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <a href="/locations/palm-beach#stays">Palm Beach stays</a>
      </nav>
    </details>
  </header>;
}
