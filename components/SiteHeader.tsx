import Link from "next/link";
import BrandLogo from "./BrandLogo";
import "./site-header.css";

const links = [
  ["Stay", "/#stays"], ["Experiences", "/experiences"],
  ["Locations", "/locations"], ["Concierge", "/concierge"], ["About", "/about"],
];

export default function SiteHeader() {
  return <header className="site-header inner-header">
    <Link className="brand" href="/" aria-label="Gold Coast Accom home"><BrandLogo /></Link>
    <nav className="main-nav" aria-label="Main navigation">
      {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      <Link className="nav-cta" href="/#stays">Search stays</Link>
    </nav>
    <details className="gca-mobile-menu">
      <summary aria-label="Open navigation menu"><span aria-hidden="true">☰</span><span>Menu</span></summary>
      <nav aria-label="Mobile navigation">
        {links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
        <Link href="/locations/palm-beach#stays">Palm Beach stays</Link>
      </nav>
    </details>
  </header>;
}
