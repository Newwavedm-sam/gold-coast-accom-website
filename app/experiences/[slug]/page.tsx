import { notFound } from "next/navigation";
import SiteHeader from "../../../components/SiteHeader";
import EnquiryForm from "../../../components/EnquiryForm";
import PadelLanding from "../../../components/PadelLanding";
import { experiences, findExperience } from "../../../lib/discovery-data";
export const dynamicParams = false;

export function generateStaticParams() {
  return experiences.map(({ slug }) => ({ slug }));
}

export default async function ExperiencePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (slug === "padel-getaway") return <PadelLanding />;
  const item = findExperience(slug);
  if (!item) notFound();
  return <main><SiteHeader/><section className="experience-detail-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(5,48,67,.72),rgba(5,48,67,.06)),url(${item.image})`}}><div><p className="eyebrow">{item.category}</p><h1>{item.name}</h1><p>{item.tagline}</p></div></section><section className="experience-detail-layout"><article><p className="script teal">Made for your stay.</p><h2>{item.description}</h2><h3>We can arrange</h3><div className="arrange-list">{item.includes.map(x=><span key={x}>✓ {x}</span>)}</div><p className="fine-copy">Availability and final pricing are confirmed personally by our concierge team. This experience is enquiry-only and is not added automatically to an accommodation booking.</p></article><aside><p className="eyebrow">Start planning</p><h2>Tell us what you have in mind.</h2><EnquiryForm subject={item.name} compact/></aside></section></main>}
