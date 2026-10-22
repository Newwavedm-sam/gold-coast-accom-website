type Props = {
  title: string;
  location: string;
  description: string;
  image: string;
  imageAlt: string;
  action: string;
  home?: boolean;
  caption?: string;
};

export default function LandingHero({ title, location, description, image, imageAlt, action, home = false, caption }: Props) {
  return <section className="lp-hero" aria-labelledby="landing-title">
    {!home && <nav className="lp-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">{location}</span></nav>}
    <div className="lp-heading-row">
      <h1 id="landing-title">{title}</h1>
      <div className="lp-heading-copy"><p>{description}</p><a className="lp-text-action" href="#stays">{action} <span aria-hidden="true">↘</span></a></div>
    </div>
    <figure className="lp-photograph"><img src={image} alt={imageAlt} width="1600" height="1067" fetchPriority="high" /><figcaption><span>{caption ?? `${location} · Gold Coast`}</span><span className="lp-signature">Live. Stay. Explore.</span></figcaption></figure>
  </section>;
}
