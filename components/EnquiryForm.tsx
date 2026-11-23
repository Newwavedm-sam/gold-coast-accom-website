const email = "info@abmgc.com.au";
const phone = "+61400721439";

export default function EnquiryForm({
  subject = "Concierge request",
  compact = false,
}: {
  subject?: string;
  compact?: boolean;
}) {
  const message = "Hi Gold Coast Accom,\n\nI’d like help with:\nStay dates (if known):\nNumber of guests (if known):\n\nThanks!";
  const emailLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;

  return (
    <div className={compact ? "enquiry-form compact" : "enquiry-form"}>
      <p className="full">Email our local team with your dates, group size and what you need. The button opens an email draft for you to send.</p>
      <a className="button secondary full" href={emailLink}>Email your enquiry</a>
      <p className="full">No email app? Copy <a href={`mailto:${email}`}>{email}</a> or call <a href={`tel:${phone}`}>0400 721 439</a>.</p>
    </div>
  );
}
