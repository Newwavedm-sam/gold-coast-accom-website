import BrandLogo from "./BrandLogo";

export default function LandingFooter() {
  return <footer className="pb-footer"><div><a href="/" aria-label="Gold Coast Accom home"><BrandLogo /></a><p>Boutique stays and memorable local experiences<br />on the Gold Coast.</p></div><nav aria-label="Footer navigation"><a href="/accommodation-near-gc-convention-centre">Convention Centre stays</a><a href="/contact">Contact our team</a><a href="https://www.instagram.com/goldcoastaccom/" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="/privacy">Privacy</a><a href="/booking-policies">Booking policies</a></nav><div className="pb-footer-bottom">© 2026 Gold Coast Accom</div></footer>;
}
