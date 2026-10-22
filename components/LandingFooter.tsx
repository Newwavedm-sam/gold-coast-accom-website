import BrandLogo from "./BrandLogo";

export default function LandingFooter() {
  return <footer className="lp-footer"><div className="lp-footer-top"><a href="/" aria-label="Gold Coast Accom home"><BrandLogo /></a><a href="mailto:info@abmgc.com.au">Let’s find your next stay <span aria-hidden="true">↗</span></a></div><div className="lp-footer-bottom"><span>© 2026 Gold Coast Accom</span><nav aria-label="Footer navigation"><a href="/accommodation-near-gc-convention-centre">Convention Centre stays</a><a href="mailto:info@abmgc.com.au">Contact</a><a href="https://www.instagram.com/goldcoastaccom/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="/privacy">Privacy</a><a href="/booking-policies">Booking policies</a></nav></div></footer>;
}
