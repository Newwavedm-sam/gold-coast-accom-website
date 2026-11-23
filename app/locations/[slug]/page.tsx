import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import { findLocation, locations } from "../../../lib/discovery-data";
const staticLocationSlugs = new Set(["palm-beach", "broadbeach", "burleigh-heads"]);

export const dynamicParams = false;

export function generateStaticParams() {
  return locations.filter(({ slug }) => !staticLocationSlugs.has(slug)).map(({ slug }) => ({ slug }));
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = findLocation(slug);
  if (!location) notFound();

  return (
    <main>
      <SiteHeader />
      <section
        className="location-hero"
        style={{ backgroundImage: `linear-gradient(90deg,rgba(5,48,67,.72),rgba(5,48,67,.1)),url(${location.image})` }}
      >
        <div><p className="script">Stay local.</p><h1>{location.name}</h1><p>{location.tagline}</p></div>
      </section>
      <section className="location-story">
        <div><p className="eyebrow">Local guide</p><h2>{location.intro}</h2></div>
        <div><h3>Why stay here</h3><ul>{location.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul></div>
      </section>
      <section className="location-stays">
        <div className="section-heading">
          <div><p className="eyebrow">Stay on the Gold Coast</p><h2>Explore the current collection.</h2></div>
          <Link className="text-link" href="/properties">Search all stays →</Link>
        </div>
      </section>
    </main>
  );
}
