import type { Metadata } from 'next';
import SiteHeader from './SiteHeader';
import LandingHero from './LandingHero';
import LandingFooter from './LandingFooter';
import PropertyListingsEmbed from './PropertyListingsEmbed';
import { bookingCollections } from '../lib/booking-collections';
import type { LandingPageData } from '../lib/landing-pages';
import './landing-page.css';

export function collectionMetadata(page: LandingPageData): Metadata {
  const canonical = `https://goldcoast-accom.com.au${page.path}`;
  return { title: `${page.title.replace(/\.$/, '')} | Gold Coast Accom`, description: page.description, alternates: {canonical}, openGraph: {title: page.title, description: page.description, url: canonical, type: 'website', locale: 'en_AU', images: [{url: `https://goldcoast-accom.com.au${page.image}`, alt: page.imageAlt}]} };
}
export default function CollectionLandingPage({page}: {page: LandingPageData}) {
  const tag = bookingCollections[page.key].tag;
  const enquiry = `mailto:info@abmgc.com.au?subject=${encodeURIComponent(`${page.label} enquiry`)}`;
  const breadcrumb = {'@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{'@type': 'ListItem', position: 1, name: 'Home', item: 'https://goldcoast-accom.com.au/'}, {'@type': 'ListItem', position: 2, name: page.label, item: `https://goldcoast-accom.com.au${page.path}`}]};
  return <div className="landing-page">
    <a className="lp-skip-link" href="#main-content">Skip to content</a><SiteHeader />
    <main id="main-content">
      <LandingHero title={page.title} location={page.label} description={page.description} image={page.image} imageAlt={page.imageAlt} caption={page.caption} action={page.action} />
      <section className="lp-section lp-stays" id="stays" aria-labelledby="stays-title">
        {tag ? <><div className="lp-section-heading"><h2 id="stays-title">Find your next stay.</h2><p>Explore dates and properties for your visit.</p></div><PropertyListingsEmbed tag={tag} location={page.label} /></> : <div className="lp-enquiry"><div><p className="lp-label">Your stay, considered</p><h2 id="stays-title">{page.enquiryTitle}</h2><p>{page.enquiryCopy}</p></div><div className="lp-enquiry-actions"><a className="lp-button" href={enquiry}>Email your stay request <span aria-hidden="true">↗</span></a><a className="lp-phone" href="tel:+61400721439">0400 721 439</a></div></div>}
      </section>
      <section className="lp-section lp-information" aria-labelledby="local-title"><div className="lp-location-copy"><p className="lp-label">{page.infoLabel}</p><h2 id="local-title">{page.infoTitle}</h2>{page.paragraphs.map(p=><p key={p}>{p}</p>)}<div className="lp-related">{page.related.map(link=><a key={link.href} href={link.href}>{link.label} ↗</a>)}</div></div><div className="lp-faqs" aria-label={`Questions about ${page.label.toLowerCase()}`}>{page.faqs.map(f=><details key={f.question}><summary>{f.question}<span aria-hidden="true">+</span></summary><p>{f.answer}</p></details>)}</div></section>
    </main><LandingFooter /><script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(breadcrumb).replace(/</g, '\\u003c')}} />
  </div>;
}
