import Link from "next/link";
import BrandLogo from "./BrandLogo";

export default function LandingFooter() {
  return <footer className="lp-footer"><div className="lp-footer-top"><Link href="/" aria-label="Gold Coast Accom home"><BrandLogo /></Link><a href="mailto:info@abmgc.com.au">Let’s find your next stay <span aria-hidden="true">↗</span></a></div><div className="lp-footer-bottom"><span>© 2026 Gold Coast Accom</span><nav aria-label="Footer navigation"><Link href="/luxury-accommodation-gold-coast">Luxury</Link><Link href="/beachfront-accommodation-gold-coast">Beachfront</Link><Link href="/corporate-accomodation">Corporate</Link><Link href="/accommodation-near-gc-convention-centre">Convention Centre stays</Link><a href="mailto:info@abmgc.com.au">Contact</a><a href="https://www.instagram.com/goldcoastaccom/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/privacy">Privacy</Link><Link href="/booking-policies">Booking policies</Link></nav></div></footer>;
}
