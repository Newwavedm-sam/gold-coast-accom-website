import Link from "next/link";

export default function PropertyNotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Stay not found</p>
      <h1>This property page is unavailable.</h1>
      <Link className="button secondary" href="/properties">Browse all stays</Link>
    </main>
  );
}
