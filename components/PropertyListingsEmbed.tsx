type Props = { tag?: string; location: string };

export default function PropertyListingsEmbed({ tag, location }: Props) {
  const url = new URL("https://gold-coast-accommodations.book.psdirectbooking.com/embed/gold-coast-accommodations/properties");
  if (tag) url.searchParams.set("tags", tag);

  return <div className="gca-property-embed">
    <div className="gca-property-embed-top">
      <p>Choose dates and guests to explore your options.</p>
      <a href={url.toString()} target="_blank" rel="noopener noreferrer">Open full-screen search <span aria-hidden="true">↗</span><span className="pb-sr-only"> (opens in a new tab)</span></a>
    </div>
    <iframe
      src={url.toString()}
      title={`${location} accommodation — availability and bookings`}
      width="100%"
      height="1150"
      allow="payment"
      loading="lazy"
      className="gca-property-embed-frame"
    />
    <p className="gca-property-embed-help">Prefer a hand finding the right stay? <a href="mailto:info@abmgc.com.au">Talk to our local team.</a></p>
  </div>;
}
